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
      $('#demo-1-week')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 1,
        });

      $('#demo-2-weeks')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 2,
        });

      $('#demo-3-weeks')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 3,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-1-week"></div>
<div id="demo-2-weeks"></div>
<div id="demo-3-weeks"></div>
  `,
};
