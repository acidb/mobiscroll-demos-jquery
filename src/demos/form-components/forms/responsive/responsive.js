import * as mobiscroll from '@mobiscroll/jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-form-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="Email" data-input-style="box" data-label-style="floating" type="text" placeholder="Enter your email address" />
            </label>
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="Password" data-input-style="box" data-label-style="floating" type="password" placeholder="Set a password" data-password-toggle="true" />
            </label>
        </div>
        <div class="mbsc-col-12 mbsc-col-lg-6">
            <label>
                <input mbsc-input data-label="Address" data-input-style="box" data-label-style="floating" placeholder="What is your address?" />
            </label>
        </div>
    </div>
    <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="Town" data-input-style="box" data-label-style="floating" type="text" placeholder="Enter your town" />
            </label>
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="State" data-input-style="box" data-label-style="floating" type="text" placeholder="Select your state" />
            </label>
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="Zip" data-input-style="box" data-label-style="floating" type="text" placeholder="What is your zip code" />
            </label>
        </div>
        <div class="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
            <label>
                <input mbsc-input data-label="Country" data-input-style="box" data-label-style="floating" type="text" placeholder="Select your country" />
            </label>
        </div>
    </div>
    <div class="mbsc-row">
        <div class="mbsc-col-12 mbsc-col-md-16 mbsc-col-lg-3">
            <div class="mbsc-button-group-block">
                <button mbsc-button data-color="success">Create account</button>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-ios .mbsc-form-grid .mbsc-textfield-wrapper {
    margin: 0.75em 1em;
}
  `,
};
