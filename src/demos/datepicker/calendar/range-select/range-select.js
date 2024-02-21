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
      $('#demo-range-selection')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          select: 'range',
          showRangeLabels: true,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-range-selection"></div>
  `,
};
