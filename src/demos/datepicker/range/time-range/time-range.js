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
      $('#demo-time')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          display: 'inline',
        });

      $('#demo-timegrid')
        .mobiscroll()
        .datepicker({
          controls: ['timegrid'],
          select: 'range',
          display: 'inline',
        });

      $('#demo-one-input')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
        });

      $('#demo-start-end')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          startInput: '#demo-start',
          endInput: '#demo-end',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-time"></div>
<div id="demo-timegrid"></div>

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
