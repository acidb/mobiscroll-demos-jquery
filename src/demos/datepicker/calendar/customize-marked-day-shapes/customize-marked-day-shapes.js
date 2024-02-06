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
          controls: ['calendar'],
          display: 'inline',
          marked: [
            { date: 'dyndatetime(y,m,2)', color: '#46c4f3', markCssClass: 'square-mark' },
            { date: 'dyndatetime(y,m,4)', color: '#159833', markCssClass: 'triangle-mark' },
            { date: 'dyndatetime(y,m,6)', color: '#b05cbf', markCssClass: 'square-mark' },
            { date: 'dyndatetime(y,m,6)', color: '#3adecf', markCssClass: 'triangle-mark' },
            { date: 'dyndatetime(y,m,6)', color: '#c8d235' },
            { date: 'dyndatetime(y,m,8)', color: '#46c4f3' },
            { date: 'dyndatetime(y,m,10)', color: '#7e56bd', markCssClass: 'square-mark' },
            { date: 'dyndatetime(y,m,13)', color: '#f13f77' },
            { date: 'dyndatetime(y,m,16)', color: '#21b326', markCssClass: 'square-mark' },
            { date: 'dyndatetime(y,m,16)', color: '#ffa93a', markCssClass: 'triangle-mark' },
            { date: 'dyndatetime(y,m,18)', color: '#89d7c9', markCssClass: 'triangle-mark' },
            { date: 'dyndatetime(y,m,21)', color: '#ffc400', markCssClass: 'square-mark' },
            { date: 'dyndatetime(y,m,26)', color: '#8dec7d', markCssClass: 'triangle-mark' },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-datepicker .mbsc-calendar-mark.triangle-mark {
    content: '';
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
    border-radius: 0;
    width: 8px;
    height: 8px;
    position: relative;
    top: -2px;
    right: 1px;
}

.mbsc-datepicker .mbsc-calendar-mark.square-mark {
    border-radius: 0;
}
  `,
};
