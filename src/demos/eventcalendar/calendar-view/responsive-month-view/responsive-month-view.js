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
      var inst = $('#demo-responsive-month-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          responsive: {
            xsmall: {
              view: {
                calendar: {
                  type: 'week',
                },
                agenda: {
                  type: 'day',
                },
              },
            },
            custom: {
              // Custom breakpoint
              breakpoint: 600,
              view: {
                calendar: {
                  labels: true,
                },
              },
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-responsive-month-view"></div>
  `,
};
