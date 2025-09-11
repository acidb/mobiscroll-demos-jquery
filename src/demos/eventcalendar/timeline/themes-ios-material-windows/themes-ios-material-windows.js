import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
    });

    $(function () {
      var inst = $('#demo')
        .mobiscroll()
        .eventcalendar({
          // locale,
          view: {
            timeline: { type: 'day' },
          },
          theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
          themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
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
<div id="demo"></div>
  `,
};
