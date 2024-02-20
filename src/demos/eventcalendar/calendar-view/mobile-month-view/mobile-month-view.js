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
      var inst = $('#demo-mobile-month-view')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: { type: 'month' },
            agenda: { type: 'month' },
          },
          onEventClick: function (args) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: args.event.title,
            });
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-mobile-month-view"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-mobile-month-view {
    height: 100%;
}

/*</hidden>*/
  `,
};
