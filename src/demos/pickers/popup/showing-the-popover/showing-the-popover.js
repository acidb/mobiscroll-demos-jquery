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
      var popup = $('#demo-popup')
        .mobiscroll()
        .popup({
          display: 'center',
        })
        .mobiscroll('getInst');

      $('#demo-popup-open').on('click', function () {
        popup.open();
      });
      $('#demo-popup-close').on('click', function () {
        popup.close();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-open">Open popup</button>
  </div>
</div>
<div style="display: none;">
  <div id="demo-popup">
    <div class="mbsc-align-center">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
        <h4>Welcome to our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
      <div class="mbsc-button-group-block">
        <button mbsc-button id="demo-popup-close">Close</button>
      </div>
    </div>
  </div>
</div>
  `,
};
