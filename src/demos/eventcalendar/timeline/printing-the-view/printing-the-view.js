import * as m from '@mobiscroll/jquery';
import { print } from '@mobiscroll/print';
import $ from 'jquery';

var mobiscroll = Object.assign({}, m);
mobiscroll.print = print;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-printing-the-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          modules: [mobiscroll.print],
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              eventList: true,
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
              color: '#ff4600',
            },
            {
              id: 5,
              name: 'King’s Landing',
              color: '#239a21',
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

      $('#print-button').on('click', function () {
        inst.print();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<button id="print-button" mbsc-button>Print timeline</button>
<div id="demo-printing-the-view"></div>
  `,
};
