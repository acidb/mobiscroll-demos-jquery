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
      $('#demo-calendar')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          minRange: 3,
          maxRange: 10,
        });

      $('#demo-scroller')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          display: 'inline',
          minRange: 3,
          maxRange: 10,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar"></div>
<div id="demo-scroller"></div>
  `,
};
