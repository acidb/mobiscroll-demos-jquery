import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var $container = $('#demo-copy-cut-paste-cont');
      var $firstContainer = $('#demo-copy-cut-paste-first-cont');
      var $secondContainer = $('#demo-copy-cut-paste-second-cont');
      var $dummy = $('#my-focus');
      var selectedEvents = [];
      var deletedEvents = [];
      var cutEvents = [];
      var pastedEvents = [];
      var today = new Date();
      var toDate;
      var originDate;
      var firstToDate = today;
      var secondToDate = today;
      var activeInst;
      var originInst;
      var cutInst;
      var menuOpen;
      var action;
      var menuData = [
        { text: 'Copy', value: 'c' },
        { text: 'Cut', value: 'x' },
        { text: 'Paste', value: 'v' },
        { text: 'Delete', value: 'delete' },
      ];
      var disabledMenu = [
        { text: 'Copy', value: 'c', disabled: true },
        { text: 'Cut', value: 'x', disabled: true },
        { text: 'Paste', value: 'v' },
        { text: 'Delete', value: 'delete', disabled: true },
      ];
      var calendarSettings = {
        clickToCreate: true,
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        selectMultipleEvents: true,
        view: {
          calendar: {
            labels: 'all',
          },
        },
        onSelectedEventsChange: function (args, inst) {
          if (inst === secondInst) {
            secondInst.setSelectedEvents(args.events);
          } else {
            firstInst.setSelectedEvents(args.events);
          }
        },
        onPageLoading: function (args, inst) {
          if (inst === secondInst) {
            secondToDate = args.month;
          } else {
            firstToDate = args.month;
          }
          toDate = args.month;
        },
        onCellRightClick: function (args, inst) {
          if (!menuOpen) {
            args.domEvent.preventDefault();
            menu.setOptions({
              data: disabledMenu,
              anchor: args.domEvent.target,
            });
            setTimeout(function () {
              menu.open();
            });
            activeInst = inst;
          }
        },
        onEventRightClick: function (args, inst) {
          if (inst.getSelectedEvents().length <= 1) {
            inst.setSelectedEvents([args.event]);
          }
          args.domEvent.preventDefault();
          menu.setOptions({
            data: menuData,
            anchor: args.domEvent.target,
          });
          setTimeout(function () {
            menu.open();
          });
          activeInst = inst;
          menuOpen = true;
        },
        onEventDeleted: function (args, inst) {
          deletedEvents = args.events;
          originInst = inst;
          action = 'delete';
          mobiscroll.snackbar({
            //<hidden>
            // theme,//</hidden>
            // context,
            button: {
              action: function () {
                inst.addEvent(deletedEvents);
                deletedEvents = [];
              },
              text: 'Undo',
            },
            duration: 3000,
            message: 'Event' + (deletedEvents.length === 1 ? '' : 's') + ' deleted',
          });
          $dummy.focus();
        },
      };
      var firstInst = $('#demo-copy-cut-paste-first')
        .mobiscroll()
        .eventcalendar(
          $.extend(
            {
              data: [
                {
                  start: 'dyndatetime(y,m,2,9)',
                  end: 'dyndatetime(y,m,6,18)',
                  title: 'Business of Software Conference',
                  color: '#ff6d42',
                },
                {
                  start: 'dyndatetime(y,m,10,7)',
                  end: 'dyndatetime(y,m,10,8)',
                  title: 'Green box to post office',
                  color: '#6e7f29',
                },
                {
                  start: 'dyndatetime(y,m,15,9,30)',
                  end: 'dyndatetime(y,m,15,10,30)',
                  title: 'Product team mtg.',
                  color: '#f67944',
                },
                {
                  start: 'dyndatetime(y,m,23,11,0)',
                  end: 'dyndatetime(y,m,23,11,45)',
                  title: 'Stakeholder mtg.',
                  color: '#a144f6',
                },
                {
                  start: 'dyndatetime(y,m,28,13,0)',
                  end: 'dyndatetime(y,m,28,13,45)',
                  title: "Lunch @ Butcher's",
                  color: '#00aabb',
                },
              ],
            },
            calendarSettings,
          ),
        )
        .mobiscroll('getInst');
      var secondInst = $('#demo-copy-cut-paste-second')
        .mobiscroll()
        .eventcalendar(
          $.extend(
            {
              data: [
                {
                  start: 'dyndatetime(y,m,4,8,45)',
                  end: 'dyndatetime(y,m,4,10)',
                  title: 'Quick mtg. with Martin',
                  color: '#de3d83',
                },
                {
                  start: 'dyndatetime(y,m,8,15,0)',
                  end: 'dyndatetime(y,m,8,16,0)',
                  title: 'General orientation',
                  color: '#a71111',
                },
                {
                  start: 'dyndatetime(y,m,10,13)',
                  end: 'dyndatetime(y,m,14,21)',
                  title: 'Friends binge marathon',
                  color: '#7bde83',
                },
                {
                  start: 'dyndatetime(y,m,23,8)',
                  end: 'dyndatetime(y,m,27,9)',
                  title: 'Product team mtg.',
                  color: '#913aa7',
                },
              ],
            },
            calendarSettings,
          ),
        )
        .mobiscroll('getInst');
      var menu = $('#copy-cut-paste-menu')
        .mobiscroll()
        .select({
          // context,
          touchUi: false,
          display: 'anchored',
          buttons: [],
          data: menuData,
          inputElement: document.getElementById('copy-cut-paste-menu-input'),
          onChange: function (args) {
            detectAction(args.value);
          },
          onClose: function () {
            menuOpen = false;
            // clear selection
            menu.setVal();
          },
        })
        .mobiscroll('getInst');

      function monthDiff(d1, d2) {
        return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
      }

      function pasteEvents() {
        var evLength = selectedEvents.length;
        if (evLength > 0) {
          for (var i = 0; i < evLength; ++i) {
            var event = $.extend({}, selectedEvents[i]);
            var startDate = new Date(event.start);
            var endDate = new Date(event.end);
            var diff = Math.abs(endDate - startDate);

            event.start = startDate.setMonth(startDate.getMonth() - monthDiff(toDate, originDate));
            event.end = new Date(startDate.getTime() + diff);

            delete event.id;
            activeInst.addEvent(event);
            pastedEvents.push(event);
          }
          if (action === 'cut') {
            cutEvents = selectedEvents;
            cutInst = activeInst;
            originInst.removeEvent(selectedEvents);
            mobiscroll.snackbar({
              //<hidden>
              // theme,//</hidden>
              // context,
              button: {
                action: function () {
                  originInst.addEvent(cutEvents);
                  cutInst.removeEvent(pastedEvents);
                  mobiscroll.toast({
                    //<hidden>
                    // theme,//</hidden>
                    // context,
                    message: 'Event' + (cutEvents.length === 1 ? '' : 's') + ' reverted',
                  });
                },
                text: 'Undo',
              },
              duration: 3000,
              message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + ' pasted',
            });
          } else {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Event' + (evLength === 1 ? '' : 's') + ' pasted',
            });
          }
          $dummy.focus();
          if (action !== 'copy') {
            selectedEvents = [];
          }
        }
      }

      function detectAction(key) {
        switch (key) {
          case 'delete': // delete
            action = 'delete';
            originInst = activeInst;
            var selEvs = activeInst.getSelectedEvents();
            if (selEvs.length > 0) {
              activeInst.removeEvent(selEvs);
              deletedEvents = selEvs;
              mobiscroll.snackbar({
                //<hidden>
                // theme,//</hidden>
                // context,
                button: {
                  action: function () {
                    activeInst.addEvent(selEvs);
                    deletedEvents = [];
                  },
                  text: 'Undo',
                },
                duration: 3000,
                message: 'Event' + (selEvs.length === 1 ? '' : 's') + ' deleted',
              });
              $dummy.focus();
            }
            break;
          case 'c': // copy
            if (activeInst.getSelectedEvents().length > 0) {
              action = 'copy';
              selectedEvents = activeInst.getSelectedEvents();
              if (selectedEvents.length > 0) {
                originInst = activeInst;
                originDate = toDate;
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + ' copied',
                });
              }
            }
            break;
          case 'x': // cut
            if (activeInst.getSelectedEvents().length > 0) {
              action = 'cut';
              selectedEvents = activeInst.getSelectedEvents();
              if (selectedEvents.length > 0) {
                originInst = activeInst;
                deletedEvents = [];
                originDate = toDate;
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Event' + (selectedEvents.length === 1 ? '' : 's') + ' cut',
                });
              }
            }
            break;
          case 'z': // undo
            if (action === 'delete') {
              originInst.addEvent(deletedEvents);
              deletedEvents = [];
            } else if (action === 'cut') {
              originInst.addEvent(cutEvents);
              cutInst.removeEvent(pastedEvents);
              cutEvents = [];
              pastedEvents = [];
            }
            break;
          case 'v': // paste
            pasteEvents();
            break;
        }
      }

      $('.md-header-toggle').change(function (ev) {
        if (ev.target.value === 'first') {
          $firstContainer.removeClass('md-hide-calendar');
          $secondContainer.addClass('md-hide-calendar');
          activeInst = firstInst;
          toDate = firstToDate;
          secondInst.setSelectedEvents([]);
        } else {
          $secondContainer.removeClass('md-hide-calendar');
          $firstContainer.addClass('md-hide-calendar');
          activeInst = secondInst;
          toDate = secondToDate;
          firstInst.setSelectedEvents([]);
        }
      });

      $container.on('keydown', function (ev) {
        if (ev.ctrlKey || ev.metaKey) {
          detectAction(ev.key);
        }
        if (ev.key === 'Delete') {
          detectAction('delete');
        }
      });

      $secondContainer.addClass('md-hide-calendar');
      activeInst = firstInst;
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page id="demo-copy-cut-paste-cont">
    <div class="mbsc-flex-col md-copy-cut-paste">
        <div class="mbsc-flex-none">
            <label>
                First calendar
                <input type="radio" mbsc-segmented name="header-toggle" class="md-header-toggle" value="first" checked />
            </label>
            <label>
                Second calendar
                <input type="radio" mbsc-segmented name="header-toggle" class="md-header-toggle" value="second" />
            </label>
        </div>
        <div class="mbsc-flex-col mbsc-flex-1-1">
            <div id="demo-copy-cut-paste-first-cont" class="mbsc-flex-1-1 md-copy-cut-paste-cont">
                <div id="demo-copy-cut-paste-first"></div>
            </div>
            <div id="demo-copy-cut-paste-second-cont" class="mbsc-flex-1-1 md-copy-cut-paste-cont">
                <div id="demo-copy-cut-paste-second"></div>
            </div>
            <input id="copy-cut-paste-menu" type="hidden" />
        </div>
    </div>
    <div id="my-focus" tabindex="-1"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-copy-cut-paste,
.demo-copy-cut-paste .mbsc-page,
.md-copy-cut-paste,
.md-copy-cut-paste-cont,
.md-copy-cut-paste-cont+div {
    height: 100%;
}

/*</hidden>*/

.md-copy-cut-paste .mbsc-segmented {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.md-copy-cut-paste .md-hide-calendar {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
  `,
};
