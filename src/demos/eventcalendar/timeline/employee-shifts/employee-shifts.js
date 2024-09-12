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
      function getShiftTimes(event) {
        var d = event.start;
        var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot == 1 ? 7 : 12);
        var end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot == 1 ? 13 : 18);

        return {
          title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
          start: start,
          end: end,
        };
      }

      function fillPopup(event) {
        $shiftNotes.mobiscroll('getInst').value = event.notes || '';
        eventStartEndPicker.setOptions({ minTime: event.slot == 1 ? '07:00' : '12:00', maxTime: event.slot == 1 ? '13:00' : '18:00' });
        eventStartEndPicker.setVal([new Date(event.start), new Date(event.end)]);
      }

      function saveEvent(event) {
        var dates = eventStartEndPicker.getVal();
        var start = dates[0];
        var end = dates[1] ? dates[1] : dates[0];

        var shiftStart = new Date(event.start);
        var shiftEnd = new Date(event.end);

        shiftStart.setHours(start.getHours(), start.getMinutes(), 0, 0);
        shiftEnd.setHours(end.getHours(), end.getMinutes(), 0, 0);

        event.start = shiftStart;
        event.end = shiftEnd;
        event.title = formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end);
        event.notes = $shiftNotes.val();

        calendar.updateEvent(event);
        addEditPopup.close();
      }

      function createAddPopup(args) {
        var event = args.event;
        var success = false;

        var slot = args.slotObj;

        // Hide delete button inside add popup
        $shiftDeleteButton.parent().hide();

        shift = event;

        // Set popup header text and buttons
        addEditPopup.setOptions({
          headerText:
            '<div>New shift</div><div class="mds-employee-shifts-header">' +
            formatDate('DDDD', new Date(event.start)) +
            ' ' +
            slot.name +
            ', ' +
            formatDate('D MMMM YYYY', new Date(event.start)) +
            '</div>',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                success = true;
                saveEvent(event);
              },
              addEditPopup: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            // Remove event if popup is cancelled
            if (!success) {
              calendar.removeEvent(event);
            }
          },
        });

        addEditPopup.open();
      }

      function createEditPopup(args) {
        var event = args.event;
        // Show delete button inside edit popup
        $shiftDeleteButton.parent().show();

        shift = event;

        var resource = args.resourceObj;

        var slot = args.slotObj;

        fillPopup(event);

        addEditPopup.setOptions({
          headerText:
            '<div>Edit ' +
            resource.name +
            '\'s hours</div><div class="mds-employee-shifts-header">' +
            formatDate('DDDD', new Date(event.start)) +
            ' ' +
            slot.name +
            ', ' +
            formatDate('D MMMM YYYY', new Date(event.start)) +
            '</div>',
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                saveEvent(event);
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        addEditPopup.open();
      }

      var formatDate = mobiscroll.formatDate;

      var shift;

      var $shiftNotes = $('#demo-popup-shift-notes');
      var $shiftDeleteButton = $('#demo-popup-shift-delete');

      var staff = [
        {
          id: 1,
          name: 'Ryan',
          color: '#e20000',
          title: 'Cloud System Engineer',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#60e81a',
          title: 'Help Desk Specialist',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 3,
          name: 'John',
          color: '#3ba7ff',
          title: 'Application Developer',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
        {
          id: 4,
          name: 'Mark',
          color: '#e25dd2',
          title: 'Network Administrator',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 5,
          name: 'Sharon',
          color: '#f1e920',
          title: 'Data Quality Manager',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
        {
          id: 6,
          name: 'Emma',
          color: '#1ac38d',
          title: 'Product Tactics Agent',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
      ];

      var shifts = [
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 2,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 3,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 6,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,12)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: '12:00 - 18:00',
          resource: 4,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,12)',
          end: 'dyndatetime(y,m,d-2,18)',
          title: '12:00 - 18:00',
          resource: 5,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: '07:00 - 13:00',
          resource: 2,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: '07:00 - 13:00',
          resource: 6,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: '12:00 - 18:00',
          resource: 3,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: '12:00 - 18:00',
          resource: 5,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: '07:00 - 13:00',
          resource: 3,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: '07:00 - 13:00',
          resource: 4,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,18)',
          title: '12:00 - 18:00',
          resource: 6,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: '07:00 - 13:00',
          resource: 5,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+1,7)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: '07:00 - 13:00',
          resource: 6,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: '12:00 - 18:00',
          resource: 4,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,13)',
          title: '07:00 - 13:00',
          resource: 5,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: '12:00 - 18:00',
          resource: 3,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: '12:00 - 18:00',
          resource: 6,
          slot: 2,
        },
      ];

      var mySlots = [
        { id: 1, name: 'Morning' },
        { id: 2, name: 'Afternoon' },
      ];

      var myInvalids = [
        {
          start: 'dyndatetime(y,m,d+1,0)',
          end: 'dyndatetime(y,m,d+1,23,59)',
          resource: 4,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,0)',
          end: 'dyndatetime(y,m,d-1,23,59)',
          resource: 2,
          slot: 2,
        },
      ];

      var calendar = $('#demo-employee-shifts-calendar')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToCreate: false,
          dragToResize: false,
          dragToMove: true,
          data: shifts,
          eventOverlap: false,
          invalid: myInvalids,
          resources: staff,
          slots: mySlots,
          view: {
            timeline: {
              type: 'week',
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          },
          extendDefaultEvent: getShiftTimes,
          renderResource: function (resource) {
            return (
              '<div class="mbsc-flex">' +
              '<img alt="' +
              resource.name +
              '" class="mds-employee-shifts-avatar" src="' +
              resource.img +
              '"/>' +
              '<div class="mds-employee-shifts-cont">' +
              '<div class="mds-employee-shifts-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-employee-shifts-title">' +
              resource.title +
              '</div>' +
              '</div>' +
              '</div>'
            );
          },
          onEventClick: function (args) {
            createEditPopup(args);
          },
          onEventCreated: function (args) {
            createAddPopup(args);
          },
          onEventCreateFailed: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "Can't create shift",
            });
          },
          onEventUpdated: function (args) {
            var event = args.event;
            if (event.slot !== args.oldEvent.slot) {
              var data = getShiftTimes(event);
              event.start = data.start;
              event.end = data.end;
              event.title = data.title;
              calendar.updateEvent(event);
            }
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "Can't move shift",
            });
          },
        })
        .mobiscroll('getInst');

      var addEditPopup = $('#demo-employee-shifts-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          responsive: {
            medium: {
              // context,
              display: 'center',
              fullScreen: false,
              touchUi: false,
              width: 400,
            },
          },
          scrollLock: false,
          onOpen: function () {
            fillPopup(shift);
          },
        })
        .mobiscroll('getInst');

      var eventStartEndPicker = $('#demo-popup-shift-dates')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          display: 'anchored',
          select: 'range',
          showRangeLabels: false,
          stepMinute: 30,
          startInput: '#demo-popup-shift-start',
          endInput: '#demo-popup-shift-end',
          timeWheels: '|h:mm A|',
          touchUi: false,
        })
        .mobiscroll('getInst');

      $shiftDeleteButton.on('click', function () {
        calendar.removeEvent(shift);

        addEditPopup.close();

        // Save a local reference to the deleted event
        var deletedEvent = shift;

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
          message: 'Shift deleted',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-employee-shifts-calendar" class="mds-employee-shifts"></div>

<div style="display: none;">
  <div id="demo-employee-shifts-popup">
    <div>
      <div id="demo-popup-shift-dates"></div>
    </div>
    <div class="mbsc-form-group">
      <label>
        <input mbsc-input data-label="Shift start" data-dropdown="true" id="demo-popup-shift-start" />
      </label>
      <label>
        <input mbsc-input data-label="Shift end" data-dropdown="true" id="demo-popup-shift-end" />
      </label>
    </div>
    <div class="mbsc-form-group">
      <label>
        <textarea mbsc-textarea data-label="Notes" id="demo-popup-shift-notes"></textarea>
      </label>
    </div>
    <div class="mbsc-button-group">
      <button class="mbsc-button-block" id="demo-popup-shift-delete" mbsc-button data-color="danger" data-variant="outline">Delete shift</button>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-employee-shifts-header {
  font-size: 14px;
  font-weight: 600;
  opacity: .6;
}

.mds-employee-shifts .mbsc-timeline-resource-col {
  width: 200px;
}

.mds-employee-shifts .mbsc-schedule-event-inner {
  text-align: center;
  height: 36px;
  line-height: 36px;
}

.mds-employee-shifts-cont {
  padding: 0 7px;
}

.mds-employee-shifts-name {
  font-size: 14px;
  line-height: 24px;
}

.mds-employee-shifts-title {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-employee-shifts-avatar {
  width: 40px;
  height: 40px;
}
  `,
};
