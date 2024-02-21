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
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Radio buttons</div>
    <div mbsc-radio-group>
        <label>
            <input mbsc-radio data-label="Radio Option 1" data-description="This is description for radio 1" name="group" type="radio" checked/>
        </label>
        <label>
            <input mbsc-radio data-label="Radio Option 2" data-description="This is description for radio 2" name="group" type="radio" />
        </label>
        <label>
            <input mbsc-radio data-label="Radio Option 3" name="group" type="radio" />
        </label>
        <label>
            <input mbsc-radio data-label="Disabled" type="radio" name="group" disabled />
        </label>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Radio button colors</div>
    <div mbsc-radio-group>
        <label>
            <input mbsc-radio data-label="Primary" data-color="primary" type="radio" name="colors" />
        </label>
        <label>
            <input mbsc-radio data-label="Secondary" data-color="secondary" type="radio" name="colors" />
        </label>
        <label>
            <input mbsc-radio data-label="Success" data-color="success" type="radio" name="colors" checked />
        </label>
        <label>
            <input mbsc-radio data-label="Danger" data-color="danger" type="radio" name="colors" />
        </label>
        <label>
            <input mbsc-radio data-label="Warning" data-color="warning" type="radio" name="colors" />
        </label>
        <label>
            <input mbsc-radio data-label="Info" data-color="info" type="radio" name="colors" />
        </label>
    </div>
</div>
  `,
};
