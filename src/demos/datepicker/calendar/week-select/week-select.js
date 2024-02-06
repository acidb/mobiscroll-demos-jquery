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
      $('#demo-week-select')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'preset-range',
          display: 'inline',
          firstSelectDay: 1,
          selectSize: 14,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-week-select"></div>
  `,
};
