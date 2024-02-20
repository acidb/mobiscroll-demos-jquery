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
      var calendar = $('#demo-day-week-month')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="cal-header-nav"></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">' +
              '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="view" value="month" class="md-view-change" checked></label>' +
              '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="view" value="week" class="md-view-change"></label>' +
              '<label><input data-icon="material-view-day" mbsc-segmented type="radio" name="view" value="day" class="md-view-change"></label>' +
              '</div>' +
              '<div mbsc-calendar-prev class="cal-header-prev"></div>' +
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
          case 'month':
            calendar.setOptions({
              view: {
                calendar: { type: 'month' },
                agenda: { type: 'month' },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                calendar: { type: 'week' },
                agenda: { type: 'week' },
              },
            });
            break;
          case 'day':
            calendar.setOptions({
              view: {
                agenda: { type: 'day' },
              },
            });
            break;
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-switching-view-cont">
    <div id="demo-day-week-month"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-switching-view-cont {
    height: 100%;
}

.md-switching-view-cont .mbsc-segmented {
    margin: 0;
}

.md-switching-view-cont .mbsc-segmented.mbsc-material,
.md-switching-view-cont .mbsc-segmented.mbsc-windows {
    padding: 0;
}

.md-switching-view-cont .mbsc-segmented .mbsc-segmented-button {
    padding: 0 1px;
}

.md-switching-view-cont .mbsc-segmented .mbsc-icon {
    font-size: 20px;
}

.md-switching-view-cont .mbsc-segmented-button.mbsc-windows {
    border: 0;
}

.cal-header-picker {
    -webkit-flex: 1 0 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.cal-header-nav {
    width: 165px;
}

.cal-header-nav .mbsc-calendar-title.mbsc-material {
    font-size: 16px;
}

/*<hidden>*/

.demo-switching-day-week-month-view,
mbsc-page>.mbsc-page {
    height: 100%;
}

/*</hidden>*/
  `,
};
