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
      $('#demo-month')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          calendarType: 'month',
          pages: 2,
          showWeekNumbers: true,
          showOuterDays: true,
        });

      $('#demo-week')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          calendarType: 'week',
          weeks: 2,
          showWeekNumbers: true,
          calendarScroll: 'vertical',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-month"></div>
<div id="demo-week"></div>
  `,
};
