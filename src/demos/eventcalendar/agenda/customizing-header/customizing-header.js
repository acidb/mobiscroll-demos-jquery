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
      var currentDate = new Date();
      var calendar = $('#demo-custom-header')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'month' },
          },
          onSelectedDateChange: function (args) {
            currentDate = args.date;
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
              '<label><input data-icon="material-view-day" mbsc-segmented type="radio" name="custom-header-view" value="agenda" class="md-custom-header-view-change" checked></label>' +
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

      $('.md-custom-header-view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'calendar':
            calendar.setOptions({
              view: {
                calendar: { labels: true },
              },
            });
            break;
          case 'agenda':
            calendar.setOptions({
              view: {
                agenda: { type: 'month' },
              },
            });
            break;
        }
      });

      $('#nav-to-prev-page').on('click', function () {
        var prevPage = new Date(currentDate);

        prevPage.setDate(1);
        prevPage.setMonth(prevPage.getMonth() - 1);
        calendar.navigate(prevPage);
        currentDate = prevPage;
      });

      $('#nav-to-next-page').on('click', function () {
        var nextPage = new Date(currentDate);

        nextPage.setDate(1);
        nextPage.setMonth(nextPage.getMonth() + 1);
        calendar.navigate(nextPage);
        currentDate = nextPage;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-900">
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
