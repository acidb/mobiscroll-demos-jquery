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
      var now = new Date();
      var curr = new Date();
      var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      var startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      var endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
      var startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1);
      var endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0);
      var inst = $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          showRangeLabels: false,
        })
        .mobiscroll('getInst');

      $('.md-today').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Today Selected',
        });
        inst.setVal([now, now]);
      });

      $('.md-yesterday').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Yesterday Selected',
        });
        inst.setVal([yesterday, yesterday]);
      });

      $('.md-week').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'This Week Selected',
        });
        inst.setVal([startWeek, endWeek]);
      });

      $('.md-month').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Last Month Selected',
        });
        inst.setVal([startMonth, endMonth]);
      });

      $('.md-clear').on('click', function () {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Clear Value',
        });
        inst.setVal(null);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-range-filter">
    <h4 class="md-header">Filter Results by</h4>
    <div class="mbsc-padding">
        <button mbsc-button class="md-today mbsc-button-block">Today</button>
        <button mbsc-button class="md-yesterday mbsc-button-block">Yesterday</button>
        <button mbsc-button class="md-week mbsc-button-block">This Week</button>
        <button mbsc-button class="md-month mbsc-button-block">Last Month</button>
        <button mbsc-button class="md-clear mbsc-button-block">Clear</button>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Or by a custom range</div>
        <div id="demo"></div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-range-filter .md-header {
    text-align: center;
    padding: 1em .75em 0 .75em;
    margin: 0;
}
  `,
};
