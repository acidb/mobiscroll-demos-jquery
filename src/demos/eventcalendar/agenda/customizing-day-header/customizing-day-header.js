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
      var agenda = $('#demo-custom-day-header')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-custom-day-header',
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: true,
            },
          },
          renderDay: function (day) {
            return (
              '<div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">' +
              '<div class="mbsc-flex-1-1">' +
              mobiscroll.formatDate('D MMM YYYY', day.date) +
              '</div>' +
              '<button class="mds-custom-day-header-btn" mbsc-button data-start-icon="plus" data-color="primary" data-variant="outline" data-date="' +
              mobiscroll.formatDate('YYYY-MM-DD', day.date) +
              '">Add event</button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-custom-day-header').on('click', '.mds-custom-day-header-btn', function () {
        var newEvent = {
          title: 'Event',
          start: new Date($(this).data('date')),
          allDay: true,
        };

        agenda.addEvent(newEvent);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Event added',
        });
      });

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        agenda.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-day-header"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-custom-day-header .mbsc-event-day.mbsc-windows {
  padding: 8px 24px;
}

.mds-custom-day-header-btn.mbsc-button {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border-radius: 12px;
  margin: 0;
}
  `,
};
