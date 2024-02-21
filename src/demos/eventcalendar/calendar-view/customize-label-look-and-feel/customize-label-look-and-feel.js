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
          // drag,
          view: {
            calendar: { labels: true },
          },
          renderLabel: function (data) {
            if (data.isMultiDay) {
              return (
                '<div style="background:' + data.original.color + ';color:#000" class="multi-day-event">' + data.original.title + '</div>'
              );
            } else {
              return (
                '<div class="single-day-event-dot" style="background:' +
                data.original.color +
                '"></div>' +
                '<div class="single-day-event" style="color:#000">' +
                data.original.title +
                '</div>'
              );
            }
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
.single-day-event-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 7px;
}

.single-day-event {
    margin-left: 8px;
}

.multi-day-event {
    padding-left: 5px;
}
  `,
};
