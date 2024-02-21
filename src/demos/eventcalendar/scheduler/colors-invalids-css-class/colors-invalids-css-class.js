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
      var inst = $('#demo-colors-invalids-css-class')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            schedule: {
              allDay: false,
              type: 'week',
              startDay: 1,
              endDay: 5,
            },
          },
          invalid: [
            {
              start: '12:00',
              end: '13:00',
              title: 'Lunch break',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
              cssClass: 'md-lunch-break-class mbsc-flex',
            },
          ],
          colors: [
            {
              start: '03:00',
              end: '10:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO',
              },
              cssClass: 'md-rect-bg',
            },
            {
              start: '16:00',
              end: '22:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TH',
              },
              cssClass: 'md-rect-bg',
            },
            {
              start: '15:00',
              end: '21:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              start: '04:00',
              end: '10:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'FR',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              start: '02:00',
              end: '09:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU',
              },
              cssClass: 'md-dots-bg',
            },
            {
              start: '14:00',
              end: '20:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'WE',
              },
              cssClass: 'md-dots-bg',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/workday-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-colors-invalids-css-class"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-lunch-break-class.mbsc-schedule-invalid {
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background: repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 10px, #e5e5e5 10px, #e5e5e5 20px);
}

.md-stripes-bg {
    background: repeating-linear-gradient(-45deg, #fcfffc, #fcfffc 10px, #eefbec 10px, #eefbec 20px);
}

.md-dots-bg {
    background-image: radial-gradient(#a7a7a7 20%, transparent 20%);
    background-color: #f9f9f9;
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
}

.md-rect-bg {
    opacity: 0.8;
    background-image: repeating-linear-gradient(45deg, #ffd6d6 25%, transparent 25%, transparent 75%, #ffd6d6 75%, #ffd6d6), repeating-linear-gradient(45deg, #ffd6d6 25%, #ffefef 25%, #ffefef 75%, #ffd6d6 75%, #ffd6d6);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
}
  `,
};
