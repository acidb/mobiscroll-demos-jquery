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
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 2,
        });

      $('#demo-custom')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          renderCalendarHeader: function () {
            return (
              '<div mbsc-calendar-prev class="custom-prev"></div>' +
              '<div mbsc-calendar-nav class="custom-nav"></div>' +
              '<div mbsc-calendar-next class="custom-next"></div>'
            );
          },
        });

      $('#demo-today')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          renderCalendarHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="custom-buttons">' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
        });

      var myCalendar = $('#demo-switch')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 2,
          renderCalendarHeader: function () {
            return (
              '<div mbsc-calendar-nav class="custom-view-nav"></div><div class="custom-view">' +
              '<label><input data-icon="material-date-range" mbsc-segmented type="radio" name="custom-header-view" value="week" class="custom-header-view-change" checked></label>' +
              '<label><input data-icon="material-event-note" mbsc-segmented type="radio" name="custom-header-view" value="month" class="custom-header-view-change"></label></div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('.custom-header-view-change').change(function (ev) {
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

      $('#demo-prev')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          calendarType: 'week',
          calendarSize: 2,
          headerText: 'You selected {value}',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div id="demo-custom"></div>
<div id="demo-today"></div>
<div id="demo-switch"></div>
<div id="demo-prev"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.custom-buttons,
.custom-view,
.custom-nav {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1 0 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}

.custom-buttons {
    -webkit-justify-content: flex-end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.custom-view,
.custom-nav {
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.custom-view-nav .mbsc-calendar-title.mbsc-material {
    font-size: 16px;
}

.custom-view .mbsc-segmented {
    margin: 0;
}

.custom-view .mbsc-segmented.mbsc-material,
.custom-view .mbsc-segmented.mbsc-windows {
    padding: 0 2px;
}

.custom-view .mbsc-segmented .mbsc-segmented-button {
    padding: 0 1px;
}

.custom-view .mbsc-segmented .mbsc-icon {
    font-size: 20px;
}

.custom-view .mbsc-segmented-button.mbsc-windows {
    border: 0;
}
  `,
};
