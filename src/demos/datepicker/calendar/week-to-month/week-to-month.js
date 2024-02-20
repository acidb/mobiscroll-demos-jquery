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
      var myCalendar = $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 1,
          renderCalendarHeader: function () {
            return (
              '<div mbsc-calendar-nav class="custom-view-nav"></div><div class="custom-view">' +
              '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="view-change" checked></label>' +
              '<label><input data-icon="material-event-note" mbsc-segmented typce="radio" name="view" value="month" class="view-change"></label></div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('.view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'week':
            myCalendar.setOptions({
              calendarType: 'week',
            });
            break;
          case 'month':
            myCalendar.setOptions({
              calendarType: 'month',
            });
            break;
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.custom-view .mbsc-segmented .mbsc-icon {
    font-size: 20px;
}
  `,
};
