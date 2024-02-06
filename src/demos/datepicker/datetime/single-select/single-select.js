import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $('#demo-single-select-date')
      .mobiscroll()
      .datepicker({
        controls: ['date'],
        selectMultiple: false,
      });

    $('#demo-single-select-time')
      .mobiscroll()
      .datepicker({
        controls: ['time'],
        selectMultiple: false,
      });

    $('#demo-single-select-timegrid')
      .mobiscroll()
      .datepicker({
        controls: ['timegrid'],
        selectMultiple: false,
      });

    $('#demo-single-select-datetime')
      .mobiscroll()
      .datepicker({
        controls: ['date', 'time'],
        selectMultiple: false,
      });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date
    <input id="demo-single-select-date" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Time
    <input id="demo-single-select-time" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Time grid
    <input id="demo-single-select-timegrid" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
<label>
    Date & time
    <input id="demo-single-select-datetime" mbsc-input data-input-style="box" data-label-style="stacked" placeholder="Please Select..." />
</label>
  `,
};
