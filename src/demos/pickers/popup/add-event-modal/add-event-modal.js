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
      var $eventStatus = $('#demo-popup-status-busy');
      var $eventTitle = $('#demo-popup-event-title');
      var $eventDescription = $('#demo-popup-event-description');
      var $eventAllDay = $('#demo-popup-all-day');

      var myData = [
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

      var popup = $('#demo-add-event-popup')
        .mobiscroll()
        .popup({
          // context,
          width: 400,
          contentPadding: false,
          headerText: 'Add new event',
          display: 'center',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                var eventTimes = range.getVal();
                var newEvent = {
                  title: $eventTitle.val(),
                  description: $eventDescription.val(),
                  allDay: $eventAllDay.val(),
                  status: $eventStatus.val(),
                  start: eventTimes[0],
                  end: eventTimes[1] || eventTimes[0],
                };
                calendar.addEvent(newEvent);
                calendar.navigateToEvent(newEvent);
                mobiscroll.toast({
                  // context,
                  message: 'Event added',
                });
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          showOverlay: false,
        })
        .mobiscroll('getInst');

      var range = $('#demo-event-date')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar', 'time'],
          select: 'range',
          startInput: '#demo-popup-start-input',
          endInput: '#demo-popup-end-input',
          display: 'anchored',
          touchUi: true,
          showOverlay: false,
          showRangeLabels: false,
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: { labels: true },
          },
          data: myData,
        })
        .mobiscroll('getInst');

      $('#demo-popup-add-btn').on('click', function () {
        range.setVal([new Date(), new Date()]);
        $eventTitle.mobiscroll('getInst').value = 'New Event';
        $eventDescription.mobiscroll('getInst').value = '';
        $eventAllDay.mobiscroll('getInst').checked = false;
        $eventStatus.mobiscroll('getInst').checked = true;
        popup.open();
      });

      $eventAllDay.on('change', function () {
        var checked = this.checked;
        // Change range settings based on the allDay
        range.setOptions({
          controls: checked ? ['calendar'] : ['calendar', 'time'],
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex-col">
    <div class="mbsc-button-group-block">
      <button mbsc-button id="demo-popup-add-btn">Add new event</button>
    </div>
    <div style="display: none">
      <div id="demo-add-event-popup">
        <div class="mbsc-form-group">
          <label>
            Title
            <input mbsc-input id="demo-popup-event-title">
          </label>
          <label>
            Description
              <input mbsc-input id="demo-popup-event-description">
          </label>
        </div>
        <div class="mbsc-form-group">
          <label>
            All-day
            <input mbsc-switch type="checkbox" id="demo-popup-all-day"/>
          </label>
          <label>
            Starts
            <input mbsc-input id="demo-popup-start-input" />
          </label>
          <label>
            Ends
            <input mbsc-input id="demo-popup-end-input" />
          </label>
        </div>
          <div class="mbsc-form-group">
            <label>
              Show as busy
              <input id="demo-popup-status-busy" mbsc-segmented type="radio" name="event-status" value="busy">
            </label>
            <label>
              Show as free
              <input id="demo-popup-status-free" mbsc-segmented type="radio" name="event-status" value="free">
            </label>
          </div>
        </div>
      <div id="demo-event-date"></div>
    </div>
    <div id="demo-calendar" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

/*<hidden>*/
.demo-add-event-modal {
  height: 100%;
}
/*</hidden>*/
`,
};
