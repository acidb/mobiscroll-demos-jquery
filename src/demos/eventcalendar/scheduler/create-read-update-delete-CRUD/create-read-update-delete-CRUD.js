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
      function toggleDatetimePicker(allDay) {
        // Toggle between date and datetime picker
        eventStartEndPicker.setOptions({
          controls: allDay ? ['date'] : ['datetime'],
          responsive: allDay
            ? { medium: { controls: ['calendar'], touchUi: false } }
            : { medium: { controls: ['calendar', 'time'], touchUi: false } },
        });
      }

      function toggleTravelTime(allDay) {
        if (allDay) {
          $timeGroup.remove();
        } else {
          $timeGroupParent.append($timeGroup);
        }
      }

      // Fills the popup with the event's data
      function fillPopup(event) {
        // Load event properties
        eventId = event.id;
        eventTitle = event.title || '';
        eventDescription = event.description || '';
        eventAllDay = event.allDay;
        eventStart = event.start;
        eventEnd = event.end;
        eventBuffer = event.bufferBefore || 0;
        eventColor = event.color || '';
        eventStatus = event.free;

        // Set event fields
        $eventTitle.mobiscroll('getInst').value = eventTitle;
        $eventDescription.mobiscroll('getInst').value = eventDescription;
        $eventAllDay.mobiscroll('getInst').checked = eventAllDay;
        eventStartEndPicker.setVal([eventStart, eventEnd]);
        $eventBuffer.val(eventBuffer);
        highlightColor(eventColor);
        updateColorPreview(eventColor);
        if (eventStatus) {
          $eventStatusFree.mobiscroll('getInst').checked = true;
        } else {
          $eventStatusBusy.mobiscroll('getInst').checked = true;
        }
        toggleDatetimePicker(eventAllDay);
        toggleTravelTime(eventAllDay);
      }

      function getEventData() {
        return {
          id: eventId,
          title: eventTitle,
          description: eventDescription,
          allDay: eventAllDay,
          start: eventStart,
          end: eventEnd,
          bufferBefore: eventBuffer,
          color: eventColor,
          free: eventStatus,
        };
      }

      function createAddPopup(event, target) {
        var success = false;

        // Hide delete button inside add popup
        $eventDeleteButton.parent().hide();

        // Set popup header text and buttons for adding
        addEditPopup.setOptions({
          anchor: target,
          headerText: 'New event',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                var newEvent = getEventData();
                calendar.updateEvent(newEvent);
                calendar.navigateToEvent(newEvent);
                success = true;
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            // Remove event if popup is cancelled
            if (!success) {
              calendar.removeEvent(event);
            }
          },
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createEditPopup(event, target) {
        // Show delete button inside edit popup
        $eventDeleteButton.parent().show();

        editedEvent = event;

        // Set popup header text and buttons
        addEditPopup.setOptions({
          headerText: 'Edit event',
          anchor: target,
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                var updatedEvent = getEventData();
                calendar.updateEvent(updatedEvent);
                calendar.navigateToEvent(updatedEvent);
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function highlightColor(color) {
        $('.mds-crud-color-value').removeClass('mds-crud-color-value-selected');
        $('.mds-crud-color-value[data-value="' + color + '"]').addClass('mds-crud-color-value-selected');
      }

      function updateColorPreview(color) {
        $colorPreview.css('background', color || '');
      }

      function applySelectedColor(color) {
        eventColor = color;
        updateColorPreview(color);
        eventColorPicker.close();
      }

      var editedEvent;
      var selectedColor;

      var eventId;
      var eventTitle;
      var eventDescription;
      var eventAllDay;
      var eventStart;
      var eventEnd;
      var eventBuffer;
      var eventColor;
      var eventStatus;

      var $eventTitle = $('#crud-popup-event-title');
      var $eventDescription = $('#crud-popup-event-desc');
      var $eventAllDay = $('#crud-popup-event-all-day');
      var $eventBuffer = $('#crud-popup-event-buffer');
      var $eventColor = $('#crud-popup-event-color');
      var $colorPreview = $('#crud-popup-event-color-preview');
      var $eventStatusBusy = $('#crud-popup-event-status-busy');
      var $eventStatusFree = $('#crud-popup-event-status-free');
      var $eventDeleteButton = $('#crud-popup-event-delete');
      var $timeGroup = $('#crud-popup-time-group');
      var $timeGroupParent = $timeGroup.parent();

      var myEvents = [
        {
          id: 1,
          start: 'dyndatetime(y,m,8,13)',
          end: 'dyndatetime(y,m,8,13,45)',
          title: "Lunch @ Butcher's",
          description: '',
          allDay: false,
          bufferBefore: 15,
          free: true,
          color: '#009788',
        },
        {
          id: 2,
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Conference',
          description: '',
          allDay: false,
          bufferBefore: 30,
          free: false,
          color: '#ff9900',
        },
        {
          id: 3,
          start: 'dyndatetime(y,m,d-1,18)',
          end: 'dyndatetime(y,m,d-1,22)',
          title: 'Site Visit',
          description: '',
          allDay: false,
          bufferBefore: 60,
          free: true,
          color: '#3f51b5',
        },
        {
          id: 4,
          start: 'dyndatetime(y,m,d+1,10,30)',
          end: 'dyndatetime(y,m,d+1,11,30)',
          title: 'Stakeholder mtg.',
          description: '',
          allDay: false,
          free: false,
          color: '#f44437',
        },
      ];

      // Init the event calendar
      var calendar = $('#demo-crud-event-calendar')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: 'double',
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            schedule: { type: 'week' },
          },
          data: myEvents,
          onEventClick: function (args) {
            createEditPopup(args.event, args.domEvent.currentTarget);
          },
          onEventCreated: function (args) {
            createAddPopup(args.event, args.target);
          },
          onEventDeleted: function (args) {
            mobiscroll.snackbar({
              //<hidden>
              // theme,//</hidden>
              // context,
              button: {
                action: function () {
                  calendar.addEvent(args.event);
                },
                text: 'Undo',
              },
              message: 'Event deleted',
            });
          },
        })
        .mobiscroll('getInst');

      // Init event start/end date picker
      var eventStartEndPicker = $('#crud-popup-event-dates')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          startInput: '#crud-popup-event-start',
          endInput: '#crud-popup-event-end',
          showRangeLabels: false,
          touchUi: true,
          responsive: { medium: { touchUi: false } },
          onChange: function (args) {
            var dates = args.value;
            eventStart = dates[0];
            eventEnd = dates[1];
          },
        })
        .mobiscroll('getInst');

      // Init event color picker
      var eventColorPicker = $('#crud-color-picker-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          showArrow: false,
          showOverlay: false,
          buttons: [
            'cancel',
            {
              text: 'Set',
              keyCode: 'enter',
              handler: function () {
                applySelectedColor(selectedColor);
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          responsive: {
            medium: {
              display: 'anchored',
              anchor: $eventColor[0],
              buttons: [],
            },
          },
        })
        .mobiscroll('getInst');

      var addEditPopup = $('#crud-add-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          responsive: {
            medium: {
              display: 'anchored',
              width: 400,
              fullScreen: false,
              touchUi: false,
            },
          },
        })
        .mobiscroll('getInst');

      // Attach event handlers

      $eventTitle.on('input', function () {
        eventTitle = this.value;
      });

      $eventDescription.on('change', function () {
        eventDescription = this.value;
      });

      $eventAllDay.on('change', function () {
        eventAllDay = this.checked;
        toggleDatetimePicker(eventAllDay);
        toggleTravelTime(eventAllDay);
      });

      $eventBuffer.on('change', function () {
        eventBuffer = +this.value;
      });

      $('.mds-crud-popup-event-status').on('change', function () {
        eventStatus = this.value === 'free';
      });

      $eventDeleteButton.on('click', function () {
        calendar.removeEvent(editedEvent);
        addEditPopup.close();

        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          button: {
            action: function () {
              calendar.addEvent(editedEvent);
            },
            text: 'Undo',
          },
          message: 'Event deleted',
        });
      });

      $eventColor.on('click', function () {
        highlightColor(eventColor || '');
        eventColorPicker.open();
      });

      $('.mds-crud-color-value').on('click', function (ev) {
        var color = $(ev.currentTarget).data('value');
        selectedColor = color;
        highlightColor(color);

        if (!eventColorPicker.s.buttons.length) {
          applySelectedColor(color);
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-crud-event-calendar"></div>

<div style="display: none">
  <div id="crud-add-edit-popup">
    <div class="mbsc-form-group">
      <label>
        Title
        <input mbsc-input id="crud-popup-event-title" />
      </label>
      <label>
        Description
        <textarea mbsc-textarea id="crud-popup-event-desc"></textarea>
      </label>
    </div>
    <div class="mbsc-form-group">
      <div>
        <label>
          All-day
          <input mbsc-switch id="crud-popup-event-all-day" type="checkbox" />
        </label>
        <div id="crud-popup-event-dates"></div>
        <label>
          Starts
          <input mbsc-input id="crud-popup-event-start" />
        </label>
        <label>
          Ends
          <input mbsc-input id="crud-popup-event-end" />
        </label>
        <label id="crud-popup-time-group">
          <select data-label="Travel time" mbsc-dropdown id="crud-popup-event-buffer">
            <option value="0">None</option>
            <option value="5">5 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
          </select>
        </label>
      </div>
      <div id="crud-event-color-picker" class="mbsc-flex mds-crud-event-color-cont">
        <div class="mbsc-flex-1-0">Color</div>
        <div id="crud-popup-event-color">
          <div id="crud-popup-event-color-preview" class="mds-crud-selected-event-color"></div>
        </div>
      </div>
      <label>
        Show as busy
        <input id="crud-popup-event-status-busy" class="mds-crud-popup-event-status" mbsc-segmented type="radio" name="event-status" value="busy" />
      </label>
      <label>
        Show as free
        <input id="crud-popup-event-status-free" class="mds-crud-popup-event-status" mbsc-segmented type="radio" name="event-status" value="free" />
      </label>
      <div class="mbsc-button-group">
        <button class="mbsc-button-block" id="crud-popup-event-delete" mbsc-button data-color="danger" data-variant="outline">
          Delete event
        </button>
      </div>
    </div>
  </div>

  <div id="crud-color-picker-popup">
    <div class="mbsc-flex mds-crud-color-row">
      <div class="mds-crud-color-value" data-value="#ffeb3c">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ffeb3c"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#ff9900">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ff9900"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#f44437">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #f44437"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#ea1e63">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #ea1e63"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#9c26b0">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #9c26b0"></div>
      </div>
    </div>
    <div class="mbsc-flex mds-crud-color-row">
      <div class="mds-crud-color-value" data-value="#3f51b5">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #3f51b5"></div>
      </div>
      <div class="mds-crud-color-value" data-value="">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#009788">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #009788"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#4baf4f">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #4baf4f"></div>
      </div>
      <div class="mds-crud-color-value" data-value="#7e5d4e">
        <div class="mds-crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background: #7e5d4e"></div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-crud-event-color-cont {
  margin: 16px;
  align-items: center;
  cursor: pointer;
}

.mds-crud-selected-event-color {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  margin-left: 240px;
  background: #5ac8fa;
}

.mds-crud-color-row {
  justify-content: center;
  margin: 5px;
}

.mds-crud-color {
  position: relative;
  min-width: 46px;
  min-height: 46px;
  margin: 2px;
  cursor: pointer;
  border-radius: 23px;
  background: #5ac8fa;
}

.mds-crud-color:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -10px;
  color: #f7f7f7;
  font-size: 20px;
  text-shadow: 0 0 3px #000;
  display: none;
}

.mds-crud-color-value {
  padding: 3px;
  margin: 2px;
}

.mds-crud-color-value.mds-crud-color-value-selected,
.mds-crud-color-value:hover {
  box-shadow: inset 0 0 0 3px #007bff;
  border-radius: 48px;
}

.mds-crud-color-value.mds-crud-color-value-selected .mds-crud-color:before {
  display: block;
}
  `,
};
