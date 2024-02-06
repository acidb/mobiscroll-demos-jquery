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
      $('#demo-15m')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
          stepMinute: 15,
        });

      $('#demo-5m')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          stepMinute: 5,
        });

      $('#demo-2h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          stepHour: 2,
        });

      $('#demo-30s')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          stepSecond: 30,
          timeFormat: 'HH:mm:ss',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Date & Time (every 15 min)
    <input id="demo-15m" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 5 min)
    <input id="demo-5m" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 2 hours)
    <input id="demo-2h" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time (every 30 seconds)
    <input id="demo-30s" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
