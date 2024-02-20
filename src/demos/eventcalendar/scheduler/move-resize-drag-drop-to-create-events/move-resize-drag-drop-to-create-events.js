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
      var now = new Date();
      $('#demo-drag-drop-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: { type: 'week' },
          },
          data: [
            {
              title: 'Fixed event',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 16),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 20),
              color: '#9e9e9e',
              editable: false,
            },
            {
              title: 'Fixed event',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9),
              color: '#9e9e9e',
              editable: false,
            },
            {
              title: 'Fixed event',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 14),
              color: '#9e9e9e',
              editable: false,
            },
            {
              title: 'Drag me',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 11),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 15),
              color: '#cc9900',
            },
            {
              title: 'Drag me',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 4),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 8),
              color: '#cc9900',
            },
            {
              title: 'Resize me',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 2),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2, 6),
              color: '#ca4747',
            },
            {
              title: 'Resize me',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 13),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 18),
              color: '#ca4747',
            },
            {
              title: 'Move me around',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23),
              color: '#339966',
            },
            {
              title: 'Move me around',
              start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 8),
              end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 11),
              color: '#339966',
            },
          ],
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          dragTimeStep: 15,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-drag-drop-events"></div>
  `,
};
