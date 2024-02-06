import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme,
    });

    $(function () {
      function onEventFailed() {
        mobiscroll.toast({
          message: 'Make sure not to double book',
        });
      }

      var now = new Date();
      var y = now.getFullYear();
      var m = now.getMonth();
      var d = now.getDate();

      $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: { type: 'day' },
          },
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          eventOverlap: true,
          data: [
            {
              start: new Date(y, m, d, 11),
              end: new Date(y, m, d, 13),
              title: 'Event 1',
              resource: 1,
            },
            {
              start: new Date(y, m, d, 16),
              end: new Date(y, m, d, 17),
              title: 'Event 2 (no event overlap)',
              overlap: false,
              resource: 1,
            },
            {
              start: new Date(y, m, d, 14),
              end: new Date(y, m, d, 16),
              title: 'Event 3',
              resource: 2,
            },
            {
              start: new Date(y, m, d, 8),
              end: new Date(y, m, d, 10),
              title: 'Event 4 (no event overlap)',
              resource: 2,
              overlap: false,
            },
            {
              start: new Date(y, m, d, 10),
              end: new Date(y, m, d, 13),
              title: 'Event 5',
              resource: 3,
            },
            {
              start: new Date(y, m, d, 11),
              end: new Date(y, m, d, 16),
              title: 'Event 6',
              resource: 4,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource 1',
            },
            {
              id: 2,
              name: 'Resource 2',
            },
            {
              id: 3,
              name: 'Resource 3',
            },
            {
              id: 4,
              name: 'Resource 4 - no event overlap allowed',
              eventOverlap: false,
            },
          ],
          onEventUpdateFailed: onEventFailed,
          onEventCreateFailed: onEventFailed,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
