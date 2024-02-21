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
      $('#demo-one-input')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'anchored',
        });

      $('#demo-init-inline')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'inline',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date
    <input id="demo-one-input" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div id="demo-init-inline"></div>
  `,
};
