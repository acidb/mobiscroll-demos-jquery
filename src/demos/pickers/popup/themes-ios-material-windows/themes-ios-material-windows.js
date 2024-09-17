import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
    });

    $(function () {
      var popup = $('#demo-theming-popup')
        .mobiscroll()
        .popup({
          theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
          themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
          display: 'anchored',
          anchor: $('#demo-popup-open-btn')[0],
          buttons: ['ok', 'cancel'],
        })
        .mobiscroll('getInst');

      $('#demo-popup-open-btn').on('click', function () {
        popup.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-button-group-block">
  <button id="demo-popup-open-btn" mbsc-button>Open popup</button>
</div>
<div id="demo-theming-popup" style="display: none;">
   <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome to our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
};
