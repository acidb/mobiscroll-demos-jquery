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
      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
        });

      $('#demo-month-year')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'MM/YYYY',
          dateWheels: 'MMMM YYYY',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date picker
    <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Month & year picker
    <input id="demo-month-year" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
