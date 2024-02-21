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
      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          min: '1920-01-01',
          max: '2050-01-01',
        });

      $('#demo-datetime')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          display: 'inline',
          min: '2000-01-01T12:00',
          max: '2050-01-01T12:00',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-date"></div>
<div id="demo-datetime"></div>
  `,
};
