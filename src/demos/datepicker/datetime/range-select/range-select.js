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
      $('#demo-range-selection')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
          select: 'range',
          display: 'inline',
          showRangeLabels: true,
          rangeStartLabel: 'Outbound',
          rangeEndLabel: 'Return',
          minRange: 3,
          maxRange: 10,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-range-selection"></div>
  `,
};
