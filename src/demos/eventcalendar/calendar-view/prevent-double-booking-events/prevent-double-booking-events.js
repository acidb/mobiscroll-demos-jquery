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
            calendar: { type: 'month', labels: 'all' },
          },
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          eventOverlap: false,
          exclusiveEndDates: true,
          data: [
            {
              start: new Date(y, m, d - 3),
              end: new Date(y, m, d - 1),
              title: 'Event 1',
            },
            {
              start: new Date(y, m, d),
              end: new Date(y, m, d + 2),
              title: 'Event 2 (no event overlap)',
              overlap: false,
            },
            {
              start: new Date(y, m, d + 3),
              end: new Date(y, m, d + 5),
              title: 'Event 3',
            },
            {
              start: new Date(y, m, d + 5),
              end: new Date(y, m, d + 7),
              title: 'Event 4 (no event overlap)',
              overlap: false,
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
