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
      var agenda = $('#demo-show-empty-days')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: {
              type: 'month',
              showEmptyDays: true,
            },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events-new/?vers=5&callback=?', function (events) {
        agenda.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-empty-days"></div>
`,
};
