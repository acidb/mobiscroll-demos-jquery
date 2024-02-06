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
      var calendar;
      var popup;
      var range;
      var oldEvent;
      var tempEvent = {};
      var deleteEvent;
      var restoreEvent;
      var colorPicker;
      var tempColor;
      var $title = $('#event-title');
      var $description = $('#event-desc');
      var $allDay = $('#event-all-day');
      var $statusFree = $('#event-status-free');
      var $statusBusy = $('#event-status-busy');
      var $deleteButton = $('#event-delete');
      var $color = $('#event-color');
      var datePickerResponsive = {
        medium: {
          controls: ['calendar'],
          touchUi: false,
        },
      };
      var datetimePickerResponsive = {
        medium: {
          controls: ['calendar', 'time'],
          touchUi: false,
        },
      };
      var myData = [
        {
          id: 1,
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,15)',
          title: "Lunch @ Butcher's",
          description: '',
          allDay: false,
          free: true,
          resource: 3,
        },
        {
          id: 2,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'General orientation',
          description: '',
          allDay: false,
          free: false,
          resource: 5,
        },
        {
          id: 3,
          start: 'dyndatetime(y,m,d,18)',
          end: 'dyndatetime(y,m,d,22)',
          title: 'Dexter BD',
          description: '',
          allDay: false,
          free: true,
          resource: 4,
        },
        {
          id: 4,
          start: 'dyndatetime(y,m,d,10,30)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Stakeholder mtg.',
          description: '',
          allDay: false,
          free: false,
          resource: 1,
        },
      ];
      var myResources = [
        {
          id: 1,
          name: 'Resource A',
          color: '#ffeb3c',
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#f44437',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#3f51b5',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#4baf4f',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#ff9900',
        },
      ];

      function createAddPopup(elm) {
        // hide delete button inside add popup
        $deleteButton.hide();

        deleteEvent = true;
        restoreEvent = false;

        // set popup header text and buttons for adding
        popup.setOptions({
          headerText: 'New event',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                calendar.updateEvent(tempEvent);
                // navigate the calendar to the correct view
                calendar.navigateToEvent(tempEvent);
                deleteEvent = false;
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        // fill popup with a new event data
        $title.mobiscroll('getInst').value = tempEvent.title;
        $description.mobiscroll('getInst').value = '';
        $allDay.mobiscroll('getInst').checked = tempEvent.allDay;
        range.setVal([tempEvent.start, tempEvent.end]);
        $statusBusy.mobiscroll('getInst').checked = true;
        range.setOptions({
          controls: tempEvent.allDay ? ['date'] : ['datetime'],
          responsive: tempEvent.allDay ? datePickerResponsive : datetimePickerResponsive,
        });
        selectColor(getResource(tempEvent.resource).color, true);

        // set anchor for the popup
        popup.setOptions({ anchor: elm });

        popup.open();
      }

      function createEditPopup(args) {
        var ev = args.event;
        // show delete button inside edit popup
        $deleteButton.show();

        deleteEvent = false;
        restoreEvent = true;

        // set popup header text and buttons for editing
        popup.setOptions({
          headerText: 'Edit event',
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                var date = range.getVal();
                var eventToSave = {
                  id: ev.id,
                  title: $title.val(),
                  description: $description.val(),
                  allDay: $allDay.mobiscroll('getInst').checked,
                  start: date[0],
                  end: date[1],
                  free: $statusFree.mobiscroll('getInst').checked,
                  color: ev.color,
                  resource: ev.resource,
                };
                // update event with the new properties on save button click
                calendar.updateEvent(eventToSave);
                // navigate the calendar to the correct view
                calendar.navigateToEvent(eventToSave);
                restoreEvent = false;
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        // fill popup with the selected event data
        $title.mobiscroll('getInst').value = ev.title || '';
        $description.mobiscroll('getInst').value = ev.description || '';
        $allDay.mobiscroll('getInst').checked = ev.allDay || false;
        range.setVal([ev.start, ev.end]);
        selectColor(ev.color || getResource(ev.resource).color, true);

        if (ev.free) {
          $statusFree.mobiscroll('getInst').checked = true;
        } else {
          $statusBusy.mobiscroll('getInst').checked = true;
        }

        // change range settings based on the allDay
        range.setOptions({
          controls: ev.allDay ? ['date'] : ['datetime'],
          responsive: ev.allDay ? datePickerResponsive : datetimePickerResponsive,
        });

        // set anchor for the popup
        popup.setOptions({ anchor: args.domEvent.currentTarget });
        popup.open();
      }

      calendar = $('#demo-add-delete-event')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: 'double',
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            timeline: {
              type: 'day',
            },
          },
          data: myData,
          resources: myResources,
          onEventClick: function (args) {
            oldEvent = $.extend({}, args.event);
            tempEvent = args.event;

            if (!popup.isVisible()) {
              createEditPopup(args);
            }
          },
          onEventCreated: function (args) {
            popup.close();

            // store temporary event
            tempEvent = args.event;
            createAddPopup(args.target);
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

      popup = $('#demo-add-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          onClose: function () {
            if (deleteEvent) {
              calendar.removeEvent(tempEvent);
            } else if (restoreEvent) {
              calendar.updateEvent(oldEvent);
            }
          },
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

      $title.on('input', function (ev) {
        // update current event's title
        tempEvent.title = ev.target.value;
      });

      $description.on('change', function (ev) {
        // update current event's title
        tempEvent.description = ev.target.value;
      });

      $allDay.on('change', function () {
        var checked = this.checked;

        // change range settings based on the allDay
        range.setOptions({
          controls: checked ? ['date'] : ['datetime'],
          responsive: checked ? datePickerResponsive : datetimePickerResponsive,
        });

        // update current event's allDay property
        tempEvent.allDay = checked;
      });

      range = $('#event-date')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          startInput: '#start-input',
          endInput: '#end-input',
          showRangeLabels: false,
          touchUi: true,
          responsive: datePickerResponsive,
          onChange: function (args) {
            var date = args.value;

            // update event's start date
            tempEvent.start = date[0];
            tempEvent.end = date[1];
          },
        })
        .mobiscroll('getInst');

      $('input[name=event-status]').on('change', function () {
        // update current event's free property
        tempEvent.free = $statusFree.mobiscroll('getInst').checked;
      });

      $deleteButton.on('click', function () {
        // delete current event on button click
        calendar.removeEvent(tempEvent);

        // save a local reference to the deleted event
        var deletedEvent = tempEvent;

        popup.close();

        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          button: {
            action: function () {
              calendar.addEvent(deletedEvent);
            },
            text: 'Undo',
          },
          duration: 10000,
          message: 'Event deleted',
        });
      });

      colorPicker = $('#demo-event-color')
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
                setSelectedColor();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          responsive: {
            medium: {
              display: 'anchored',
              anchor: $('#event-color-cont')[0],
              buttons: [],
            },
          },
        })
        .mobiscroll('getInst');

      function selectColor(color, setColor) {
        $('.crud-color-c').removeClass('selected');
        $('.crud-color-c[data-value="' + color + '"]').addClass('selected');
        if (setColor) {
          $color.css('background', color);
        }
      }

      function setSelectedColor() {
        tempEvent.color = tempColor;
        $color.css('background', tempColor);
        colorPicker.close();
      }

      function getResource(res) {
        return myResources.find(function (r) {
          return r.id == res;
        });
      }

      $('#event-color-picker').on('click', function () {
        selectColor(tempEvent.color || getResource(tempEvent.resource).color);
        colorPicker.open();
      });

      $('.crud-color-c').on('click', function (ev) {
        var $elm = $(ev.currentTarget);

        tempColor = $elm.data('value');
        selectColor(tempColor);

        if (!colorPicker.s.buttons.length) {
          setSelectedColor();
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-add-delete-event"></div>

<div style="display: none">
<div id="demo-add-popup">
    <div class="mbsc-form-group">
        <label>
            Title
            <input mbsc-input id="event-title">
        </label>
        <label>
            Description
            <textarea mbsc-textarea id="event-desc"></textarea>
        </label>
    </div>
    <div class="mbsc-form-group">
        <label>
            All-day
            <input mbsc-switch id="event-all-day" type="checkbox" />
        </label>
        <label>
            Starts
            <input mbsc-input id="start-input" />
        </label>
        <label>
            Ends
            <input mbsc-input id="end-input" />
        </label>
        <div id="event-date"></div>
        <div id="event-color-picker" class="event-color-c">
            <div class="event-color-label">Color</div>
            <div id="event-color-cont">
                <div id="event-color" class="event-color"></div>
            </div>
        </div>
        <label>
            Show as busy
            <input id="event-status-busy" mbsc-segmented type="radio" name="event-status" value="busy">
        </label>
        <label>
            Show as free
            <input id="event-status-free" mbsc-segmented type="radio" name="event-status" value="free">
        </label>
        <div class="mbsc-button-group">
            <button class="mbsc-button-block" id="event-delete" mbsc-button data-color="danger" data-variant="outline">Delete event</button>
        </div>
    </div>
</div>

<div id="demo-event-color">
    <div class="crud-color-row">
        <div class="crud-color-c" data-value="#ffeb3c">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ffeb3c"></div>
        </div>
        <div class="crud-color-c" data-value="#ff9900">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ff9900"></div>
        </div>
        <div class="crud-color-c" data-value="#f44437">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#f44437"></div>
        </div>
        <div class="crud-color-c" data-value="#ea1e63">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#ea1e63"></div>
        </div>
        <div class="crud-color-c" data-value="#9c26b0">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#9c26b0"></div>
        </div>
    </div>
    <div class="crud-color-row">
        <div class="crud-color-c" data-value="#3f51b5">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#3f51b5"></div>
        </div>
        <div class="crud-color-c" data-value="#5ac8fa">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#5ac8fa"></div>
        </div>
        <div class="crud-color-c" data-value="#009788">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#009788"></div>
        </div>
        <div class="crud-color-c" data-value="#4baf4f">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#4baf4f"></div>
        </div>
        <div class="crud-color-c" data-value="#7e5d4e">
            <div class="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style="background:#7e5d4e"></div>
        </div>
    </div>
</div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
 .event-color-c {
     display: flex;
     margin: 16px;
     align-items: center;
     cursor: pointer;
 }

 .event-color-label {
     flex: 1 0 auto;
 }

 .event-color {
     width: 30px;
     height: 30px;
     border-radius: 15px;
     margin-right: 10px;
     margin-left: 240px;
    background: #5ac8fa;
 }

 .crud-color-row {
     display: flex;
     justify-content: center;
     margin: 5px;
 }

 .crud-color-c {
     padding: 3px;
     margin: 2px;
 }

 .crud-color {
     position: relative;
     min-width: 46px;
     min-height: 46px;
     margin: 2px;
     cursor: pointer;
     border-radius: 23px;
    background: #5ac8fa;
 }

 .crud-color-c.selected,
 .crud-color-c:hover {
     box-shadow: inset 0 0 0 3px #007bff;
     border-radius: 48px;
 }

 .crud-color:before {
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

 .crud-color-c.selected .crud-color:before {
     display: block;
 }
  `,
};
