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
      $('#demo-calendar')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          rangeHighlight: true,
          showRangeLabels: true,
          rangeStartLabel: 'Outbound',
          rangeEndLabel: 'Return',
          rangeStartHelp: 'Set dates',
          rangeEndHelp: 'Set dates',
        });

      $('#demo-scroller')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          display: 'inline',
          rangeHighlight: true,
          showRangeLabels: true,
          rangeStartLabel: 'Outbound',
          rangeEndLabel: 'Return',
          rangeStartHelp: 'Set dates',
          rangeEndHelp: 'Set dates',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
