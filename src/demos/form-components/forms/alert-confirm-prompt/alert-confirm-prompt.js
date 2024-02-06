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
      $('#show-alert').click(function () {
        mobiscroll.alert({
          title: 'Cellular Data is Turned Off for "Safari"',
          message: 'You can turn on cellular data for this app in Settings.',
        });
      });

      $('#show-confirm').click(function () {
        mobiscroll.confirm({
          title: 'Use location service?',
          message: 'Help apps determinde location. This means sending anonymous location data, even when no apps are running.',
          okText: 'Agree',
          cancelText: 'Disagree',
        });
      });

      $('#show-prompt').click(function () {
        mobiscroll.prompt({
          title: 'Sign in to iTunes Store',
          message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
          placeholder: 'Password',
          inputType: 'password',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<button mbsc-button id="show-alert">Alert</button>
<button mbsc-button id="show-confirm">Confirm</button>
<button mbsc-button id="show-prompt">Prompt</button>
  `,
};
