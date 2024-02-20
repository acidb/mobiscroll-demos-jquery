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
      $('#demo-resource-height')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              rowHeight: 'equal',
              type: 'week',
              timeCellStep: 240,
              timeLabelStep: 240,
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,4)',
              end: 'dyndatetime(y,m,d,22)',
              title: 'Event1',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Event2',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,23,59)',
              title: 'Event3',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+1,5)',
              end: 'dyndatetime(y,m,d+1,20)',
              title: 'Event4',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+1,8)',
              end: 'dyndatetime(y,m,d+1,22)',
              title: 'Event5',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+2,2)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Event6',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+2,4)',
              end: 'dyndatetime(y,m,d+2,20)',
              title: 'Event7',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+2,6)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Event8',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,23)',
              title: 'Event9',
              resource: 4,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Flatiron Room',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'The Capital City',
              color: '#ff0101',
            },
            {
              id: 3,
              name: 'Heroes Square',
              color: '#01adff',
            },
            {
              id: 4,
              name: 'Thunderdome',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'King’s Landing',
              color: '#ff4600',
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-height" class="md-timeline-height"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-custom-timeline-resource-height {
    height: 100%;
}

/*</hidden>*/

.md-timeline-height .mbsc-timeline-resource,
.md-timeline-height .mbsc-timeline-row {
    min-height: 120px;
}
  `,
};
