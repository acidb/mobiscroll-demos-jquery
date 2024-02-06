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
      $('#demo-responsive-drop')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          responsive: {
            xsmall: {
              display: 'bottom',
            },
            small: {
              display: 'anchored',
            },
            custom: {
              // Custom breakpoint
              breakpoint: 800,
              display: 'anchored',
              touchUi: false,
            },
          },
        });

      $('#demo-responsive-cal')
        .mobiscroll()
        .datepicker({
          responsive: {
            xsmall: {
              controls: ['date'],
              display: 'bottom',
              touchUi: true,
            },
            small: {
              controls: ['date'],
              display: 'anchored',
              touchUi: true,
            },
            custom: {
              // Custom breakpoint
              breakpoint: 800,
              controls: ['calendar'],
              display: 'anchored',
              touchUi: false,
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    <input id="demo-responsive-drop" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please Select..." />
</label>

<label>
    <input id="demo-responsive-cal" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please Select..." />
</label>
  `,
};
