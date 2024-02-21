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
      var calendar = $('#demo-day-week-view')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            calendar: {
              labels: true,
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="cal-header-nav"></div>' +
              '<div class="cal-header-picker">' +
              '<label>Year<input mbsc-segmented type="radio" name="view" value="year" class="md-view-change"></label>' +
              '<label>Month<input mbsc-segmented type="radio" name="view" value="month" class="md-view-change" checked></label>' +
              '<label>Week<input mbsc-segmented type="radio" name="view" value="week" class="md-view-change"></label>' +
              '<label>Day<input mbsc-segmented type="radio" name="view" value="day" class="md-view-change"></label>' +
              '<label>Agenda<input mbsc-segmented type="radio" name="view" value="agenda" class="md-view-change"></label>' +
              '</div>' +
              '<div mbsc-calendar-prev class="cal-header-prev"></div>' +
              '<div mbsc-calendar-today class="cal-header-today"></div>' +
              '<div mbsc-calendar-next class="cal-header-next"></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );

      $('.md-view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'year':
            calendar.setOptions({
              view: {
                calendar: { type: 'year', labels: true },
              },
            });
            break;
          case 'month':
            calendar.setOptions({
              view: {
                calendar: { type: 'month', labels: true },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                schedule: { type: 'week' },
              },
            });
            break;
          case 'day':
            calendar.setOptions({
              view: {
                schedule: { type: 'day' },
              },
            });
            break;
          case 'agenda':
            calendar.setOptions({
              view: {
                calendar: { type: 'week' },
                agenda: { type: 'week' },
              },
            });
            break;
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-day-week-view" class="md-switching-view-cont"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-switching-view-cont .mbsc-segmented {
    max-width: 350px;
    margin: 0 auto;
}

.md-switching-view-cont .mbsc-calendar-grid-item {
    height: 490px;
    box-sizing: border-box;
}

.cal-header-picker {
    flex: 1 0 auto;
}

.cal-header-nav {
    width: 200px;
}

/* material header order */

.mbsc-material.cal-header-prev {
    order: 1;
}

.mbsc-material.cal-header-next {
    order: 2;
}

.mbsc-material.cal-header-nav {
    order: 3;
}

.mbsc-material .cal-header-picker {
    order: 4;
}

.mbsc-material .cal-header-today {
    order: 5;
}

/* windows header order */

.mbsc-windows.cal-header-nav {
    order: 1;
}

.mbsc-windows.cal-header-prev {
    order: 2;
}

.mbsc-windows.cal-header-next {
    order: 3;
}

.mbsc-windows .cal-header-picker {
    order: 4;
}

.mbsc-windows .cal-header-today {
    order: 5;
}
  `,
};
