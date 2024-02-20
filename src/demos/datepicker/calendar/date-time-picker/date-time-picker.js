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
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          display: 'inline',
        });

      $('#demo-timegrid')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'timegrid'],
          display: 'inline',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div id="demo-timegrid"></div>
  `,
};
