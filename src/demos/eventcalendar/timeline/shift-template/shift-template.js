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
      var formatDate = mobiscroll.formatDate;
      var staff = [
        {
          id: 1,
          name: 'Ryan',
          color: '#e20000',
          title: 'Cloud System Engineer',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#60e81a',
          title: 'Help Desk Specialist',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 3,
          name: 'John',
          color: '#3ba7ff',
          title: 'Application Developer',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
      ];

      var shifts = [
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 2,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 3,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,7)',
          end: 'dyndatetime(y,m,d-2,13)',
          title: '07:00 - 13:00',
          resource: 6,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,7)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: '07:00 - 13:00',
          resource: 2,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,18)',
          title: '12:00 - 18:00',
          resource: 3,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,13)',
          title: '07:00 - 13:00',
          resource: 3,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,12)',
          end: 'dyndatetime(y,m,d+1,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,7)',
          end: 'dyndatetime(y,m,d+2,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: '12:00 - 18:00',
          resource: 2,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,12)',
          end: 'dyndatetime(y,m,d+2,18)',
          title: '12:00 - 18:00',
          resource: 3,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,7)',
          end: 'dyndatetime(y,m,d+3,13)',
          title: '07:00 - 13:00',
          resource: 1,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+3,12)',
          end: 'dyndatetime(y,m,d+3,18)',
          title: '12:00 - 18:00',
          resource: 3,
          slot: 2,
        },
      ];

      $('#demo-shift-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          },
          data: shifts,
          resources: staff,
          clickToCreate: true,
          dragToMove: true,
          dragToResize: false,
          colors: [
            {
              background: '#a5ceff4d',
              slot: 1,
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
            },
            {
              background: '#f7f7bb4d',
              slot: 2,
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
            },
          ],
          slots: [
            {
              id: 1,
              name: 'Morning',
            },
            {
              id: 2,
              name: 'Afternoon',
            },
          ],
          onEventUpdate: function (args, inst) {
            var event = $.extend({}, args.event);
            event.title = event.slot === 1 ? '07:00 - 13:00' : '12:00 - 18:00';
            inst.updateEvent(event);
            return false;
          },
          renderSlot: function (args) {
            var slotId = args.slot.id;
            return (
              '<div style="background:' +
              (slotId == 1 ? '#a5ceff4d' : '#f7f7bb4d') +
              ';padding:4px;">' +
              '<div class="slot-name">' +
              args.slot.name +
              '</div>' +
              '<div class="slot-time">' +
              (slotId == 1 ? '7am - 1pm' : '12pm - 6pm') +
              '</div>' +
              '</div>'
            );
          },
          extendDefaultEvent: function (ev) {
            var d = ev.start;
            var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot == 1 ? 7 : 12);
            var end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), ev.slot == 1 ? 13 : 18);

            return {
              title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
              start: start,
              end: end,
            };
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-shift-template" class="md-shift-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.slot-name {
    line-height: 20px;
    font-size: 15px;
}

.slot-time {
    opacity: .5;
    line-height: 20px;
    font-size: 13px;
}

.md-shift-template .mbsc-timeline-header-placeholder {
    height: 74px;
}

.md-shift-template .mbsc-timeline-slots {
    height: 48px;
    text-align: center;
}

.md-shift-template .mbsc-schedule-event {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
}

.md-shift-template .mbsc-timeline-slot-title {
    padding: 0;
}
  `,
};
