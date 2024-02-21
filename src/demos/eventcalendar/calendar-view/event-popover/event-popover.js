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
      var inst = $('#demo-event-popover')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            calendar: {
              count: true,
            },
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
<!--hidden-->
<div class="demo-inline demo-max-width-1000">
    <!--/hidden-->
    <div id="demo-event-popover"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
