import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#demo-gregorian')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          locale: mobiscroll.locale.en,
        });

      $('#demo-jalali')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSystem: mobiscroll.jalaliCalendar,
          locale: mobiscroll.locale.fa,
        });

      $('#demo-hijri')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarSystem: mobiscroll.hijriCalendar,
          locale: mobiscroll.locale.ar,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-gregorian"></div>
<div id="demo-jalali"></div>
<div id="demo-hijri"></div>
  `,
};
