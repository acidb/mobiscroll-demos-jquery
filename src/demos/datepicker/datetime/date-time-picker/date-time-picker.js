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
      $('#demo-compact')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
        });

      $('#demo-expanded')
        .mobiscroll()
        .datepicker({
          controls: ['date', 'time'],
        });

      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
        });

      $('#demo-time')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Compact date & time picker
    <input id="demo-compact" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Expanded date & time picker
    <input id="demo-expanded" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Date
                <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                Time
                <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
  `,
};
