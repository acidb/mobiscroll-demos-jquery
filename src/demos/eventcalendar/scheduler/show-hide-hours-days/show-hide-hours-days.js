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
      var inst = $('#demo-show-hide-hours-days')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            scheduler: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '09:00',
              endTime: '18:00',
              timeCellStep: 30,
              timeLabelStep: 30,
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/workday-events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-hide-hours-days"></div>
  `,
};
