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
              '<div mbsc-calendar-nav class="mds-custom-header-nav"></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">' +
              '<button id="demo-custom-header-prev" mbsc-button data-variant="flat" data-icon="material-arrow-back" class="mds-custom-header-button"></button>' +
              '<button mbsc-calendar-today></button>' +
              '<button id="demo-custom-header-next" mbsc-button data-variant="flat" data-icon="material-arrow-forward" class="mds-custom-header-button"></button>' +
              '</div>' +
              '<div class="mds-custom-header-switch">' +
              '<label><input data-icon="material-view-day" mbsc-segmented type="radio" name="view" value="agenda" class="mds-custom-header-view-change" checked></label>' +
              '<label><input data-icon="calendar" mbsc-segmented type="radio" name="view" value="calendar" class="mds-custom-header-view-change"></label>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('.mds-custom-header-view-change').on('change', function (ev) {
        switch (ev.target.value) {
          case 'calendar':
            calendar.setOptions({
              view: { calendar: { type: 'month' } },
            });
            break;
          case 'agenda':
            calendar.setOptions({
              view: { agenda: { type: 'month' } },
            });
            break;
        }
      });

      $('#demo-custom-header-prev').on('click', function () {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        calendar.navigate(currentDate);
      });

      $('#demo-custom-header-next').on('click', function () {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        calendar.navigate(currentDate);
      });

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        calendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
   <!--hidden-->
   <div class="demo-inline demo-max-width-900">
       <!--/hidden-->
           <div id="demo-custom-header"></div>
       <!--hidden-->
   </div>
   <!--/hidden-->
     `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-custom-header-nav {
  width: 180px;
}

.mds-custom-header-button.mbsc-button {
  font-size: 20px;
  height: auto;
  padding: 0;
  margin: 0;
}

.mds-custom-header-switch .mbsc-segmented {
  width: 110px;
  margin-top: 0;
  margin-bottom: 0;
}

.mds-custom-header-switch .mbsc-segmented.mbsc-material,
.mds-custom-header-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-custom-header-switch .mbsc-segmented-button.mbsc-button {
  font-size: 20px;
  height: 32px;
  padding: 0;
}
`,
};
