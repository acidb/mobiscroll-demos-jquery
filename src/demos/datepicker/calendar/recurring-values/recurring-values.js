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
        .datepicker({
          // context,
          controls: ['calendar'],
          display: 'inline',
          invalid: [
            {
              recurring: {
                repeat: 'daily', // possible values: 'daily', 'weekly', 'monthly', 'yearly'
                from: '2020-12-01', // the start date of the occurrences
                until: '2021-01-31', // the end date of the occurrences
              },
              recurringException: ['2020-12-30', new Date(2020, 11, 31)], // can contain string or date object
              recurringExceptionRule: {
                repeat: 'monthly',
                day: 10,
              },
            },
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA', // comma separated list of the week days, possible values: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'
                interval: 2, // the time interval for the rule (every 2 weeks in this example)
              },
            },
            {
              recurring: {
                repeat: 'monthly',
                day: 15,
                count: 12, // the number of occurrences
              },
            },
            {
              recurring: {
                repeat: 'yearly',
                day: 1,
                month: 1,
              },
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
