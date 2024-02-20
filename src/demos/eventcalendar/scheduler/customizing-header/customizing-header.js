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
      var currentDate = new Date();
      var view = 'schedule';
      var calendar = $('#demo-custom-header')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: { type: 'week' },
          },
          onSelectedDateChange: function (event) {
            currentDate = event.date;
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="md-custom-header-nav"></div>' +
              '<div class="md-custom-header-controls">' +
              '<button id="nav-to-prev-page" mbsc-button data-variant="flat" data-icon="material-arrow-back" class="md-custom-header-button"></button>' +
              '<div mbsc-calendar-today class="md-custom-header-today"></div>' +
              '<button id="nav-to-next-page" mbsc-button data-variant="flat" data-icon="material-arrow-forward" class="md-custom-header-button"></button>' +
              '</div>' +
              '<div class="md-custom-header-view">' +
              '<label><input data-icon="material-list" mbsc-segmented type="radio" name="custom-header-view" value="schedule" class="md-custom-header-view-change" checked></label>' +
              '<label><input data-icon="calendar" mbsc-segmented type="radio" name="custom-header-view" value="calendar" class="md-custom-header-view-change"></label>' +
              '</div>'
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

      function getFirstDayOfWeek(d, prev) {
        var day = d.getDay();
        var diff = d.getDate() - day + (prev ? -7 : 7);
        return new Date(d.setDate(diff));
      }

      function navigatePage(prev) {
        if (view == 'calendar') {
          var prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
          calendar.navigate(prevNextPage);
          currentDate = prevNextPage;
        } else {
          var prevNextSunday = getFirstDayOfWeek(currentDate, prev);
          calendar.navigate(prevNextSunday);
          currentDate = prevNextSunday;
        }
      }

      $('.md-custom-header-view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'calendar':
            calendar.setOptions({
              view: {
                calendar: { labels: true },
              },
            });
            view = 'calendar';
            break;
          case 'schedule':
            calendar.setOptions({
              view: {
                schedule: { type: 'week' },
              },
            });
            view = 'schedule';
            break;
        }
      });

      $('#nav-to-prev-page').on('click', function () {
        navigatePage(true);
      });

      $('#nav-to-next-page').on('click', function () {
        navigatePage(false);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-1000">
    <!--/hidden-->
    <div id="demo-custom-header" class="md-custom-header"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-custom-header-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
}

.md-custom-header-nav,
.md-custom-header-view {
    width: 180px;
}

.md-custom-header-button.mbsc-button {
    font-size: 20px;
    height: auto;
    padding: 0;
    margin: 0;
}

.md-custom-header .mbsc-segmented {
    width: 110px;
    float: right;
    margin-top: 0;
    margin-bottom: 0;
}

.md-custom-header .mbsc-material.mbsc-segmented,
.md-custom-header .mbsc-windows.mbsc-segmented {
    padding: 0;
}

.md-custom-header .mbsc-segmented .mbsc-segmented-button {
    font-size: 20px;
    height: 32px;
    padding: 0;
}
  `,
};
