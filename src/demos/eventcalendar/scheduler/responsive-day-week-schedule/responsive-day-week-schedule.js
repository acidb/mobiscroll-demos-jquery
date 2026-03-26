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
      var inst = $('#demo')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          responsive: {
            xsmall: {
              view: {
                scheduler: { type: 'day' },
              },
            },
            custom: {
              // Custom breakpoint
              breakpoint: 600,
              view: {
                scheduler: { type: 'week' },
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
<div id="demo"></div>
  `,
};
