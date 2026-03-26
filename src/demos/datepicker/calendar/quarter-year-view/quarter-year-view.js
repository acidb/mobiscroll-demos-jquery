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
      var selectedDate = new Date();
      var myCalendar = $('#demo-quarter-year-view')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'month',
          calendarSize: 3,
          refDate: '1970-01-01',
          showWeekNumbers: true,
          renderCalendarHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="quarter-year-header-picker">' +
              '<label><input mbsc-segmented type="radio" name="view" value="q1" class="md-quarter-year-view-change">Q1</label>' +
              '<label><input mbsc-segmented type="radio" name="view" value="q2" class="md-quarter-year-view-change">Q2</label>' +
              '<label><input mbsc-segmented type="radio" name="view" value="q3" class="md-quarter-year-view-change">Q3</label>' +
              '<label><input mbsc-segmented type="radio" name="view" value="q4" class="md-quarter-year-view-change">Q4</label>' +
              '<label><input mbsc-segmented typce="radio" name="view" value="year" class="md-quarter-year-view-change">Year</label></div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onPageChange: function (args) {
            selectedDate = args.firstDay;
            setType($('.md-quarter-year-view-change[value="year"]').mobiscroll('getInst').checked);
          },
        })
        .mobiscroll('getInst');

      function setType(yearView) {
        var type = '';
        if (yearView) {
          type = 'year';
        } else {
          var month = selectedDate.getMonth();
          if (month < 3) {
            type = 'q1';
          } else if (month < 6) {
            type = 'q2';
          } else if (month < 9) {
            type = 'q3';
          } else {
            type = 'q4';
          }
        }

        $('.md-quarter-year-view-change[value=' + type + ']').mobiscroll('getInst').checked = true;
      }

      setTimeout(function () {
        $('.md-quarter-year-view-change').on('change', function (ev) {
          var year = selectedDate.getFullYear();
          var type;
          var date;

          switch (ev.target.value) {
            case 'q1':
              type = 'month';
              date = new Date(year, 0, 1);
              break;
            case 'q2':
              type = 'month';
              date = new Date(year, 3, 1);
              break;
            case 'q3':
              type = 'month';
              date = new Date(year, 6, 1);
              break;
            case 'q4':
              type = 'month';
              date = new Date(year, 9, 1);
              break;
            case 'year':
              type = 'year';
              date = new Date(year, selectedDate.getMonth(), 1);
              break;
          }
          myCalendar.setOptions({ calendarType: type });
          myCalendar.navigate(date);
        });
        setType();
      }, 1000);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-quarter-year-view"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-datepicker .quarter-year-header-picker .mbsc-segmented {
    max-width: 280px;
    margin: 0 auto;
}

.quarter-year-header-picker {
    flex: 1 0 auto;
}
  `,
};
