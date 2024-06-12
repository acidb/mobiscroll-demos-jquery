import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var now = new Date();
    var day = now.getDay();
    var monday = now.getDate() - day + (day == 0 ? -6 : 1);

    $(function () {
      $('#demo-custom-event-sort')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: {
              type: 'week',
            },
          },
          data: [
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday),
              title: 'Kate OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday),
              title: 'John OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday),
              title: 'Mark OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday),
              title: 'Emma OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
              title: 'Mark OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 1),
              title: 'Carol OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Luke OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Carol OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Kate OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Dean OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Emma OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 2),
              title: 'Jason OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 3),
              title: 'Jason OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
              title: 'Ryan OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
              title: 'John OFF (APPROVED)',
              color: '#00ca10',
              allDay: true,
              accepted: true,
              order: 2,
            },
            {
              start: new Date(now.getFullYear(), now.getMonth(), monday + 4),
              title: 'Dean OFF (PROPOSED)',
              color: '#e7b300',
              allDay: true,
              accepted: false,
              order: 1,
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-event-sort"></div>
  `,
};
