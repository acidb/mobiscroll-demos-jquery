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
        .datepicker({
          controls: ['date'],
          display: 'inline',
          invalid: [
            '2020-02-12',
            '2020-05-20',
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA,SU',
              },
            },
            {
              recurring: {
                repeat: 'yearly',
                day: 24,
                month: 12,
              },
            },
            {
              recurring: {
                repeat: 'yearly',
                day: 31,
                month: 12,
              },
            },
            {
              recurring: {
                repeat: 'monthly',
                day: 1,
              },
            },
            {
              recurring: {
                repeat: 'monthly',
                day: -1,
              },
            },
            {
              start: '2020-03-15',
              end: '2020-03-30',
            },
            {
              start: '2020-07-05',
              end: '2020-08-20',
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
