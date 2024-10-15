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
      var confirmOpen;
      var selectedEvent;
      var $list = $('#demo-bulk-actions-event-list');
      var formatDate = mobiscroll.formatDate;

      function selectEvents(events) {
        $list.html(
          events
            .map(function (e) {
              return '<li>' + e.title + '</li>';
            })
            .join(''),
        );
        calendar.setSelectedEvents(events);
      }

      function updateSelectedEvents() {
        var selectedEvents = calendar.getSelectedEvents();
        var events = selectedEvents.length === 0 && selectedEvent ? [selectedEvent] : selectedEvents;
        var newEvents = [];
        var updatedEvents = [];

        events.forEach(function (event) {
          var newEvent;
          var updatedEvent;
          if (event.recurring) {
            newEvent = Object.assign({}, event);
            newEvent.color = 'orange';
            newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start);
            newEvent.recurring = undefined;
            newEvents.push(newEvent);
            updatedEvent = event.original;
            updatedEvent.recurringException = updatedEvent.recurringException || [];
            updatedEvent.recurringException.push(event.start);
            updatedEvents.push(updatedEvent);
          } else {
            updatedEvent = Object.assign({}, event);
            updatedEvent.color = 'orange';
            updatedEvents.push(updatedEvent);
          }
        });

        calendar.updateEvent(updatedEvents);
        calendar.addEvent(newEvents);
        selectEvents([]);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: "All selected event's color changed to orange",
        });
      }

      function deleteSelectedEvents() {
        var selectedEvents = calendar.getSelectedEvents();
        var events = selectedEvents.length === 0 && selectedEvent ? [selectedEvent] : selectedEvents;

        confirmOpen = true;

        mobiscroll.confirm({
          //<hidden>
          // theme,//</hidden>
          // context,
          title: 'Are you sure you want to delete the following events?',
          message: events
            .map(function (e) {
              return e.title;
            })
            .join(', '),
          okText: 'Delete',
          callback: function (result) {
            if (result) {
              var updatedEvents = [];
              var deletedEvents = [];

              events.forEach(function (event) {
                if (event.recurring) {
                  var updatedEvent = event.original;
                  updatedEvent.recurringException = updatedEvent.recurringException || [];
                  updatedEvent.recurringException.push(event.start);
                  updatedEvents.push(updatedEvent);
                } else {
                  deletedEvents.push(event);
                }
              });

              calendar.updateEvent(updatedEvents);
              calendar.removeEvent(deletedEvents);
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

      var calendar = $('#demo-bulk-actions')
        .mobiscroll()
        .eventcalendar({
          selectMultipleEvents: true,
          view: {
            agenda: { type: 'month' },
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
          onEventRightClick: function (args) {
            args.domEvent.preventDefault();
            selectedEvent = args.event;
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

      var menu = $('#demo-bulk-actions-menu')
        .mobiscroll()
        .select({
          // context,
          buttons: [],
          data: [
            { value: 'update', text: 'Update' },
            { value: 'delete', text: 'Delete' },
          ],
          display: 'anchored',
          touchUi: false,
          onChange: function (args) {
            if (args.value === 'update') {
              updateSelectedEvents();
            } else if (args.value === 'delete') {
              deleteSelectedEvents();
            }
          },
          onClose: function () {
            // Clear selection
            menu.setVal(null);
          },
        })
        .mobiscroll('getInst');

      $('#demo-bulk-actions-select-all').on('click', function () {
        selectEvents(calendar.getEvents());
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'All events selected this month',
        });
      });

      $('#demo-bulk-actions-reset').on('click', function () {
        selectEvents([]);
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Selection cleared',
        });
      });

      $('#demo-bulk-actions-update').on('click', function () {
        updateSelectedEvents();
      });

      $('#demo-bulk-actions-page').on('keydown', function (ev) {
        if (!confirmOpen && (ev.code === 'Delete' || ev.code === 'Backspace' || ev.keyCode === 8 || ev.keyCode === 46)) {
          deleteSelectedEvents();
        }
      });

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        calendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-bulk-actions-page" mbsc-page class="mds-bulk-actions">
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mds-bulk-actions-calendar mbsc-col-sm-9 mbsc-push-sm-3">
        <div id="demo-bulk-actions"></div>
        <div id="demo-bulk-actions-menu" class="mds-select"></div>
      </div>
      <div class="mbsc-col-sm-3 mbsc-pull-sm-9 mbsc-flex-col">
        <div class="mbsc-button-group-block">
          <button id="demo-bulk-actions-select-all" mbsc-button>Select all from view</button>
          <button id="demo-bulk-actions-reset" mbsc-button>Reset selection</button>
          <button id="demo-bulk-actions-update" mbsc-button>Update selected</button>
        </div>
        <div class="mbsc-form-group-title">Currently selected</div>
        <div class="mds-bulk-actions-event-list mbsc-padding mbsc-flex-1-1">
          <ul id="demo-bulk-actions-event-list">
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-bulk-actions,
.mds-bulk-actions .mbsc-grid,
.mds-bulk-actions .mbsc-row,
.mds-bulk-actions .mbsc-col-sm-9,
.mds-bulk-actions .mbsc-col-sm-3 {
  height: 100%;
}

.mds-bulk-actions-calendar {
  border-left: 1px solid #ccc;
}

.mds-bulk-actions-event-list {
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
}
  `,
};
