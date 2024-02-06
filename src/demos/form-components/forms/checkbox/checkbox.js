import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

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
<div mbsc-page>
    <div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Checkbox</div>
    <label>
        <input mbsc-checkbox data-label="Option 1" data-description="Checked checkbox" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Option 2" data-description="Empty checkbox" type="checkbox" />
    </label>
    <label>
        <input mbsc-checkbox data-label="Option 3" data-description="Disabled checkbox" type="checkbox" disabled />
    </label>
    <label>
        <input mbsc-checkbox data-label="Option 4" data-description="Disabled and checked checkbox" type="checkbox" checked disabled />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Checkbox colors</div>
    <label>
        <input mbsc-checkbox data-label="Primary" data-color="primary" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Secondary" data-color="secondary" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Success" data-color="success" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Danger" data-color="danger" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Warning" data-color="warning" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-checkbox data-label="Info" data-color="info" type="checkbox" checked />
    </label>
</div>

<label>
     <input id="chboxDeductFromStore" mbsc-checkbox data-label="Deduct Product/Consumable From Store" data-description="Remove the Product/Consumable from your store by work order product" type="checkbox" checked />
 </label>
 
 </div>
  `,
};
