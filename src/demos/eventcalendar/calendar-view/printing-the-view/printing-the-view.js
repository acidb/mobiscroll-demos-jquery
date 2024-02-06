import * as m from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import { print } from '@mobiscroll/print';
import $ from 'jquery';

var mobiscroll = m;
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
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
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
<button id="print-button" mbsc-button>Print calendar</button>
<div id="demo-printing-the-view"></div>
  `,
};
