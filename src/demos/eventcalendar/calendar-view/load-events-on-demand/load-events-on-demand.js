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
      $('#demo')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: {
              labels: true,
            },
          },
          onPageLoading: function (event, inst) {
            var year = event.month.getFullYear();
            var month = event.month.getMonth();

            $.getJSON(
              'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5' + '&callback=?',
              function (data) {
                inst.setEvents(data);

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
