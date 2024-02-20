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
            timeline: {
              allDay: false,
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '09:00',
              endTime: '18:00',
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
              resource: 2,
              start: '09:00',
              end: '11:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO',
              },
              cssClass: 'md-rect-bg',
            },
            {
              resource: 1,
              start: '10:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'WE',
              },
              cssClass: 'md-rect-bg',
            },
            {
              resource: 3,
              start: '14:00',
              end: '17:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TH',
              },
              cssClass: 'md-rect-bg',
            },
            {
              resource: 4,
              start: '13:00',
              end: '18:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO',
              },
              cssClass: 'md-rect-bg',
            },
            {
              resource: 1,
              start: '09:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'FR',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              resource: 3,
              start: '09:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              resource: 5,
              start: '10:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              resource: 5,
              start: '13:00',
              end: '17:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU',
              },
              cssClass: 'md-stripes-bg',
            },
            {
              resource: 1,
              start: '09:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TH',
              },
              cssClass: 'md-dots-bg',
            },
            {
              resource: 2,
              start: '06:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU',
              },
              cssClass: 'md-dots-bg',
            },
            {
              resource: 4,
              start: '15:00',
              end: '17:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'FR',
              },
              cssClass: 'md-dots-bg',
            },
            {
              resource: 4,
              start: '14:00',
              end: '18:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'WE',
              },
              cssClass: 'md-dots-bg',
            },
          ],
          resources: [
            {
              id: 1,
              color: '#ff0101',
              name: 'Resource A',
            },
            {
              id: 2,
              color: '#239a21',
              name: 'Resource B',
            },
            {
              id: 3,
              color: '#8f1ed6',
              name: 'Resource C',
            },
            {
              id: 4,
              color: '#01adff',
              name: 'Resource D',
            },
            {
              id: 5,
              color: '#d8ca1a',
              name: 'Resource E',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
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
    text-align: center;
    align-items: center;
    font-weight: bold;
    background: repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 11px, #e5e5e5 11px, #e5e5e5 22px);
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
