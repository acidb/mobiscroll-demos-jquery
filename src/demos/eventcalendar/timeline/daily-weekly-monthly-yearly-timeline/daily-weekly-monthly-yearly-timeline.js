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
      var inst = $('#demo-daily-weekly-timeline')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              timeCellStep: 60,
              timeLabelStep: 60,
            },
          },
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
            {
              id: 6,
              name: 'Gathering Field',
              color: '#8f1ed6',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/daily-weekly-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-daily-weekly-timeline"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-daily-weekly-timeline {
    height: 100%;
}

/*</hidden>*/
  `,
};
