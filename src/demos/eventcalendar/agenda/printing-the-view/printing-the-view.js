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
      var inst = $('#demo-print')
        .mobiscroll()
        .eventcalendar({
          // context,
          modules: [mobiscroll.print],
          view: {
            agenda: { type: 'month' },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        inst.setEvents(events);
      });

      $('#demo-print-button').on('click', function () {
        inst.print();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex-col">
    <div class="mbsc-flex-none">
      <button id="demo-print-button" mbsc-button (click)="print()" data-start-icon="print">Print agenda</button>
    </div>
    <div id="demo-print" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}
  `,
};
