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
          calendarType: 'month',
          pages: 2,
          display: 'inline',
        });

      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          display: 'inline',
        });

      $('#demo-range-presets')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'preset-range',
          display: 'inline',
          pages: 2,
          firstSelectDay: 2,
          selectSize: 10,
        });

      $('#demo-one-input')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
        });

      $('#demo-start-end')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          startInput: '#demo-start',
          endInput: '#demo-end',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar"></div>

<div id="demo-date"></div>

<div id="demo-range-presets"></div>

<label>
    Range
    <input id="demo-one-input" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<div id="demo-start-end"></div>
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Start
                <input id="demo-start" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                End
                <input id="demo-end" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
  `,
};
