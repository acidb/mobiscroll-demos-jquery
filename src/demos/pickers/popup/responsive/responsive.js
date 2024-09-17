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
      var popup = $('#demo-popup-responsive')
        .mobiscroll()
        .popup({
          responsive: {
            xsmall: {
              display: 'bottom',
            },
            small: {
              display: 'center',
            },
            custom: {
              // Custom breakpoint
              breakpoint: 800,
              display: 'anchored',
              anchor: $('#demo-popup-show-btn')[0],
            },
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-show-btn').on('click', function () {
        popup.open();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-button-group-block">
    <button mbsc-button id="demo-popup-show-btn">Open popup</button>
  </div>
</div>
<div id="demo-popup-responsive" style="display: none;">
  <div class="mbsc-align-center mbsc-padding">
    <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
    <h4>Welcome to our website!</h4>
    <p>Have fun navigating through the demos.</p>
  </div>
</div>
  `,
};
