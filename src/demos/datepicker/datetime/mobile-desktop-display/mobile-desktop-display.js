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
      $('#demo-inline')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'inline',
        });

      $('#demo-anchored')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'anchored',
        });

      $('#demo-top')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'top',
        });

      $('#demo-bottom')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'bottom',
        });

      $('#demo-center')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          display: 'center',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-inline"></div>

<label>
    Anchored
    <input id="demo-anchored" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Top
    <input id="demo-top" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Bottom
    <input id="demo-bottom" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Center
    <input id="demo-center" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
