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
      var inst = $('#demo-colored')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: { type: 'week' },
          },
          colors: [
            {
              date: 'dyndatetime(y,m,d-2)',
              background: '#f3c3d480',
            },
            {
              start: 'dyndatetime(y,m,d-1,7)',
              end: 'dyndatetime(y,m,d-1,14)',
              background: '#fde4c880',
            },
            {
              start: 'dyndatetime(y,m,d+1,12)',
              end: 'dyndatetime(y,m,d+2, 20)',
              background: '#d5f1ea80',
            },
            {
              start: 'dyndatetime(y,m,d+6,6)',
              end: 'dyndatetime(y,m,d+6,8)',
              background: '#d5eaf780',
            },
            {
              start: 'dyndatetime(y,m,d+10)',
              end: 'dyndatetime(y,m,d+13)',
              allDay: true,
              background: '#e7ffe280',
            },
            {
              start: 'dyndatetime(y,m,d+16,10)',
              end: 'dyndatetime(y,m,d+17,8)',
              background: '#fbedd080',
            },
            {
              start: '12:00',
              end: '13:00',
              background: '#ffdbdb80',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
              title: 'Lunch',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-colored"></div>
  `,
};
