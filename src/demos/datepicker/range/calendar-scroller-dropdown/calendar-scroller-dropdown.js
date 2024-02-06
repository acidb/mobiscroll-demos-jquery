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
        });

      $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
        });

      $('#demo-datetime')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
          select: 'range',
        });

      $('#demo-calendar-time')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          select: 'range',
        });

      $('#demo-time')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Calendar
    <input id="demo-calendar" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Date
    <input id="demo-date" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Date & Time
    <input id="demo-datetime" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Calendar & Time
    <input id="demo-calendar-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>

<label>
    Time
    <input id="demo-time" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
};
