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
      $('#demo-event-buffer')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            timeline: { type: 'day' },
          },
          showEventBuffer: true,
          resources: [
            {
              id: 1,
              name: 'Resource 1',
              color: '#e20000',
            },
            {
              id: 2,
              name: 'Resource 2',
              color: '#76e083',
            },
            {
              id: 3,
              name: 'Resource 3',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Resource 4',
              color: '#f7961e',
            },
          ],
          data: [
            {
              bufferAfter: 30,
              start: 'dyndatetime(y,m,d,6)',
              end: 'dyndatetime(y,m,d,8)',
              title: 'Morning routine',
              resource: 1,
            },
            {
              bufferAfter: 120,
              bufferBefore: 30,
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Friends binge marathon',
              resource: 4,
            },
            {
              bufferAfter: 120,
              bufferBefore: 30,
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,21)',
              title: 'Mastering CSS class',
              resource: 2,
            },
            {
              bufferAfter: 10,
              bufferBefore: 15,
              start: 'y,m,d,8)',
              end: 'y,m,d,10)',
              title: 'Product team mtg.',
              resource: 2,
            },
            {
              bufferAfter: 20,
              bufferBefore: 30,
              start: 'dyndatetime(y,m,d,16,30)',
              end: 'dyndatetime(y,m,d,19, 30)',
              title: 'Cinema afternoon',
              resource: 3,
            },
            {
              bufferAfter: 10,
              bufferBefore: 10,
              start: 'dyndatetime(y,m,d,8,30)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Quick mtg. with Martin',
              resource: 3,
            },
            {
              bufferBefore: 45,
              start: 'dyndatetime(y,m,d,9,30)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Product team mtg.',
              resource: 4,
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-buffer"></div>
  `,
};
