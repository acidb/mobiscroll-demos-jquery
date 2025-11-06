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
      $('#demo-recurring-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: { labels: true },
          },
          data: [
            {
              recurring: {
                repeat: 'daily', // Possible values: 'daily', 'weekly', 'monthly', 'yearly'
                from: '2021-06-01', // The start date of the occurrences
                until: '2021-07-20', // The end date of the occurrences
              },
              recurringException: ['2021-07-05', new Date(2021, 6, 6)], // Can contain string or date object
              recurringExceptionRule: {
                repeat: 'monthly',
                day: 1,
              },
              title: 'Holiday',
              allDay: true,
              color: 'green',
            },
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA', // Comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
                interval: 2, // The time interval for the rule (every 2 weeks in this example)
              },
              title: 'Shopping day',
              color: 'orange',
            },
            {
              recurring: {
                repeat: 'monthly',
                day: 15,
                count: 12, // The number of occurrences
              },
              title: 'Pay day',
              color: 'red',
            },
            {
              recurring: {
                repeat: 'yearly',
                day: 1,
                month: 1,
              },
              title: "New Year's Eve",
              color: 'blue',
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-recurring-events"></div>
  `,
};
