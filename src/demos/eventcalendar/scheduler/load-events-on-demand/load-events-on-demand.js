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
      $('#demo')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            schedule: { type: 'day' },
          },
          onPageLoading: function (event, inst) {
            var year = event.firstDay.getFullYear();
            var month = event.firstDay.getMonth();
            var day = event.firstDay.getDate();

            $.getJSON(
              'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day + '&callback=?',
              function (data) {
                var events = [];

                for (var i = 0; i < data.length; i++) {
                  events.push({
                    start: data[i].start,
                    end: data[i].end || '',
                    allDay: data[i].allDay,
                    title: data[i].title,
                    color: data[i].color,
                  });
                }

                inst.setEvents(events);

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'New events loaded',
                });
              },
              'jsonp',
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
