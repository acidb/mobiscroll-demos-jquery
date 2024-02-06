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
<div><div class="mbsc-form-group">
    <div class="mbsc-form-group-title">User Data</div>
    <label>
        <input mbsc-input data-label="First name" type="text" placeholder="First Name" />
    </label>
    <label>
        <input mbsc-input data-label="Last name" type="text" placeholder="Last Name" />
    </label>
    <label>
        <input mbsc-input data-label="User name" type="text" placeholder="User Name" />
    </label>
    <label>
        <input mbsc-input data-label="Company" type="text" placeholder="Company Name" />
    </label>
    <label>
        <input mbsc-input data-label="Email" type="text" placeholder="Email Address" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Phone Number</div>
    <label>
        <input mbsc-input data-label="Home" type="text" placeholder="Home" />
    </label>
    <label>
        <input mbsc-input data-label="Business" type="text" placeholder="Business" />
    </label>
    <label>
        <input mbsc-input data-label="Fax" type="text" placeholder="Fax" />
    </label>
</div>

    <label>
     <input id="chboxDeductFromStore" mbsc-checkbox data-label="Deduct Product/Consumable From Store" data-description="Remove the Product/Consumable from your store by work order product" type="checkbox" checked />
 </label>

</div>
  `,
};
