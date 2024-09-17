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
      var bottomPopup = $('#demo-popup-bottom')
        .mobiscroll()
        .popup({
          display: 'bottom',
          buttons: ['ok', 'cancel'],
        })
        .mobiscroll('getInst');

      var topPopup = $('#demo-popup-top')
        .mobiscroll()
        .popup({
          display: 'top',
          buttons: ['ok', 'cancel'],
        })
        .mobiscroll('getInst');

      var centerPopup = $('#demo-popup-center')
        .mobiscroll()
        .popup({
          display: 'center',
          buttons: ['ok', 'cancel'],
          touchUi: false,
        })
        .mobiscroll('getInst');

      var anchoredPopup = $('#demo-popup-anchored')
        .mobiscroll()
        .popup({
          display: 'anchored',
          anchor: $('#demo-popup-anchored-btn')[0],
          buttons: ['ok', 'cancel'],
        })
        .mobiscroll('getInst');

      $('#demo-popup-bottom-btn').on('click', function () {
        bottomPopup.open();
      });

      $('#demo-popup-top-btn').on('click', function () {
        topPopup.open();
      });

      $('#demo-popup-center-btn').on('click', function () {
        centerPopup.open();
      });

      $('#demo-popup-anchored-btn').on('click', function () {
        anchoredPopup.open();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
  <div class="mbsc-form-group-title">Try different display modes</div>
  <div class="mbsc-form-group mbsc-button-group-block">
    <button mbsc-button id="demo-popup-anchored-btn">Try anhored display mode</button>
    <button mbsc-button id="demo-popup-top-btn">Try top display mode</button>
    <button mbsc-button id="demo-popup-center-btn">Try center display mode</button>
    <button mbsc-button id="demo-popup-bottom-btn">Try bottom display mode</button>
  </div>
</div>
<div style="display: none;"> 
  <div id="demo-popup-bottom">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-top">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-center">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
  <div id="demo-popup-anchored">
    <div class="mbsc-align-center mbsc-padding">
      <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg">
      <h4>Welcome to our website!</h4>
      <p>Have fun navigating through the demos.</p>
    </div>
  </div>
</div>
  `,
};
