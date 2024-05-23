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
      var inst = $('#demo-variable-event-height')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventHeight: 'variable',
              startTime: '07:00',
              endTime: '21:00',
            },
          },
          dragToCreate: false,
          clickToCreate: false,
          dragToMove: true,
          dragToResize: true,
          dragInTime: true,
          renderScheduleEventContent: function (event) {
            return (
              '<div class="mds-variable-event-height-title">' +
              event.title +
              '</div><div class="mds-variable-event-height-description">' +
              event.original.description +
              '</div>'
            );
          },
          resources: [
            {
              id: 1,
              name: 'Franklin Hall',
              color: '#e20000',
            },
            {
              id: 2,
              name: 'Jefferson Commons',
              color: '#76e083',
            },
            {
              id: 3,
              name: 'Lincoln Residence',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Roosevelt House',
              color: '#e25dd2',
            },
            {
              id: 5,
              name: 'Adams Hall',
              color: '#f7961e',
            },
            {
              id: 6,
              name: 'Washington Tower',
              color: '#d6d145',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events-variable-height/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-variable-event-height" class="mds-variable-event-height"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-variable-event-height-title {
    white-space: normal;
    line-height: 16px;
    font-size: 15px;
    font-weight: 600;
  }

  .mds-variable-event-height-description {
    padding: 8px 0;
    white-space: normal;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
  }

  .mds-variable-event-height .mbsc-schedule-event-range {
    font-size: 12px;
    font-weight: 600;
  }
  
  .mds-variable-event-height .mbsc-schedule-event-inner {
    padding: 1em;
  }
  `,
};
