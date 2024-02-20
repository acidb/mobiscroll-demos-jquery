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
      var calendar = $('#demo-vertical-resolution')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'hour',
              resolutionVertical: 'day',
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/timeline-vertical-events/?callback=?', function (events) {
        calendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-vertical-resolution" class="md-vertical-timeline"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-vertical-timeline .mbsc-timeline-row-gutter {
    height: 8px;
}
  `,
};
