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
      var inst = $('#demo-remote-api')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            timeline: { type: 'day' },
          },
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#ff4600',
            },
            {
              id: 3,
              name: 'John',
              color: '#ff0101',
            },
            {
              id: 4,
              name: 'Mark',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Sharon',
              color: '#8f1ed6',
            },
            {
              id: 6,
              name: 'Ashley',
              color: '#01adff',
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
<div id="demo-remote-api"></div>
  `,
};
