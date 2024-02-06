import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var confirmOpen;
      var firstDay;
      var lastDay;
      var selectedEvent;
      var formatDate = mobiscroll.formatDate;

      function getSelectedEventTitles(events) {
        var eventTitles = [];
        for (var i = 0; i < events.length; ++i) {
          eventTitles.push(events[i].title);
        }
        return eventTitles;
      }

      function deleteSelectedEvents() {
        var selectedEvents = calendar.getSelectedEvents();
        var events = selectedEvents.length == 0 && selectedEvent ? [selectedEvent] : selectedEvents;

        confirmOpen = true;

        mobiscroll.confirm({
          //<hidden>
          // theme,//</hidden>
          // context,
          title: 'Are you sure you want to delete the following events?',
          message: getSelectedEventTitles(events).join(', '),
          okText: 'Delete',
          callback: function (result) {
            if (result) {
              var eventsToDelete = [];
              var eventsToUpdate = [];

              for (var i = 0; i < events.length; ++i) {
                var event = events[i];
                if (event.recurring) {
                  var origEvent = event.original;
                  var exc = origEvent.recurringException || [];
                  exc.push(event.start);
                  origEvent.recurringException = exc;
                  eventsToUpdate.push(origEvent);
                } else {
                  eventsToDelete.push(event);
                }
              }
              calendar.updateEvent(eventsToUpdate);
              calendar.removeEvent(eventsToDelete);
              selectEvents([]);
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Deleted',
              });
            }
            confirmOpen = false;
          },
        });
      }

      function updateSelectedEvents() {
        var selectedEvents = calendar.getSelectedEvents();
        var events = selectedEvents.length == 0 && selectedEvent ? [selectedEvent] : selectedEvents;
        var eventsToUpdate = [];
        var newEvents = [];

        for (var i = 0; i < events.length; ++i) {
          var event = events[i];
          if (event.recurring) {
            var origEvent = event.original;
            var exc = origEvent.recurringException || [];
            var newEvent = event;

            newEvent.recurring = undefined;
            newEvent.color = 'orange';
            newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start);
            newEvents.push(newEvent);

            exc.push(event.start);
            origEvent.recurringException = exc;
            eventsToUpdate.push(origEvent);
          } else {
            event.color = 'orange';
            eventsToUpdate.push(event);
          }
        }
        calendar.updateEvent(eventsToUpdate);
        calendar.addEvent(newEvents);
        selectEvents([]);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: "All selected event's color changed to orange",
        });
      }

      function selectEvents(events) {
        var titles = getSelectedEventTitles(events);
        var list = $('<ul/>');
        var item;

        for (var i = 0; i < titles.length; ++i) {
          item = $('<li/>').html(titles[i]);
          list.append(item);
        }

        $('#selected-event-list').html(list);
        calendar.setSelectedEvents(events);
      }

      var calendar = $('#demo-multiple-event-selection')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          selectMultipleEvents: true,
          view: {
            agenda: {
              type: 'month',
            },
          },
          onEventUpdate: function (args) {
            if (args.isDelete) {
              if (!confirmOpen) {
                deleteSelectedEvents();
              }
              return false;
            }
          },
          onEventDelete: function () {
            if (!confirmOpen) {
              deleteSelectedEvents();
              return false;
            }
          },
          onPageLoading: function (args) {
            firstDay = args.firstDay;
            lastDay = args.lastDay;
          },
          onEventRightClick: function (args) {
            selectedEvent = args.event;
            args.domEvent.preventDefault();
            menu.setOptions({
              anchor: args.domEvent.target,
            });
            setTimeout(function () {
              menu.open();
            });
          },
          onSelectedEventsChange: function (args) {
            selectEvents(args.events);
          },
        })
        .mobiscroll('getInst');

      var menu = $('#demo-context-menu')
        .mobiscroll()
        .select({
          // context,
          touchUi: false,
          display: 'anchored',
          buttons: [],
          inputElement: document.getElementById('context-menu-input'),
          onChange: function (args) {
            if (args.value === 'update') {
              updateSelectedEvents();
            } else if (args.value === 'delete') {
              deleteSelectedEvents();
            }
          },
          onClose: function () {
            // clear selection
            menu.setVal();
          },
        })
        .mobiscroll('getInst');

      $('#select-all-events').on('click', function () {
        selectEvents(calendar.getEvents(firstDay, lastDay));
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'All events selected from view',
        });
      });

      $('#reset-selection').on('click', function () {
        selectEvents([]);
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Selection cleared',
        });
      });

      $('#update-selected').on('click', function () {
        updateSelectedEvents();
      });

      $('.md-bulk-operations').keydown(function (ev) {
        if (!confirmOpen && (ev.keyCode === 8 || ev.keyCode === 46)) {
          deleteSelectedEvents();
        }
      });

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="md-bulk-operations">
    <div class="mbsc-grid mbsc-no-padding">
        <div class="mbsc-row">
            <div class="mbsc-col-sm-9 mbsc-push-sm-3">
                <div id="demo-multiple-event-selection" class="md-bulk-operations-border"></div>
                <input id="context-menu-input" type="hidden" />
                <select id="demo-context-menu">
                    <option value="update">Update</option>
                    <option value="delete">Delete</option>
                </select>
            </div>
            <div class="mbsc-col-sm-3 mbsc-pull-sm-9">
                <div class="mbsc-form-group">
                    <div class="mbsc-button-group-block">
                        <button id="select-all-events" mbsc-button>Select all from view</button>
                        <button id="reset-selection" mbsc-button>Reset selection</button>
                        <button id="update-selected" mbsc-button>Update selected</button>
                    </div>
                </div>
                <div class="mbsc-form-group-title">Currently selected</div>
                <div id="selected-event-list" class="mbsc-padding md-selected-event-list"></div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-bulk-operations-border {
    border-left: 1px solid #ccc;
}

.md-selected-event-list {
    height: 500px;
    overflow: auto;
    padding-top: 0;
    padding-bottom: 0;
}

.md-bulk-operations,
.md-bulk-operations .mbsc-grid,
.md-bulk-operations .mbsc-row,
.md-bulk-operations .mbsc-col-sm-9,
.md-bulk-operations .mbsc-push-sm-3,
.md-bulk-operations .mbsc-calendar {
    height: 100%;
}
  `,
};
