import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'inline',
          locale: mobiscroll.localeEs, // Sets the language of the component
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
};
