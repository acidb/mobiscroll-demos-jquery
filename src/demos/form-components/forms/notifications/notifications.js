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
      $('#bottom-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
        });
      });

      $('#top-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          display: 'top',
        });
      });

      $('#primary-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'primary',
        });
      });

      $('#secondary-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'secondary',
        });
      });

      $('#success-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'success',
        });
      });

      $('#danger-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'danger',
        });
      });

      $('#warning-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'warning',
        });
      });

      $('#info-toast').click(function () {
        mobiscroll.toast({
          message: 'Message sent',
          color: 'info',
        });
      });

      $('#bottom-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
        });
      });

      $('#top-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          display: 'top',
        });
      });

      $('#action-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Connection timed out. Showing limited messages.',
          button: {
            text: 'Retry',
            action: function () {
              mobiscroll.toast({
                message: 'Retrying...',
              });
            },
          },
        });
      });

      $('#primary-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'primary',
        });
      });

      $('#secondary-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'secondary',
        });
      });

      $('#success-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'success',
        });
      });

      $('#danger-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'danger',
        });
      });

      $('#warning-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'warning',
        });
      });

      $('#info-snackbar').click(function () {
        mobiscroll.snackbar({
          message: 'Your draft has been discarded',
          color: 'info',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-from-group">
    <div class="mbsc-form-group-title">Toast</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="bottom-toast">Bottom toast</button>
        <button mbsc-button id="top-toast">Top toast</button>
        <button mbsc-button id="primary-toast">Primary toast</button>
        <button mbsc-button id="secondary-toast">Secondary toast</button>
        <button mbsc-button id="success-toast">Success toast</button>
        <button mbsc-button id="danger-toast">Danger toast</button>
        <button mbsc-button id="warning-toast">Warning toast</button>
        <button mbsc-button id="info-toast">Info toast</button>
    </div>
</div>
<div class="mbsc-from-group">
    <div class="mbsc-form-group-title">Snackbar</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="bottom-snackbar">Bottom snackbar</button>
        <button mbsc-button id="top-snackbar">Top snackbar</button>
        <button mbsc-button id="action-snackbar">Snackbar with action</button>
        <button mbsc-button id="primary-snackbar">Primary snackbar</button>
        <button mbsc-button id="secondary-snackbar">Secondary snackbar</button>
        <button mbsc-button id="success-snackbar">Success snackbar</button>
        <button mbsc-button id="danger-snackbar">Danger snackbar</button>
        <button mbsc-button id="warning-snackbar">Warning snackbar</button>
        <button mbsc-button id="info-snackbar">Info snackbar</button>
    </div>
</div>
  `,
};
