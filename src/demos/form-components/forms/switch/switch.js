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
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Switch</div>
    <label>
        <input mbsc-switch data-label="Switch Off" data-description="This is description for Switch" type="checkbox" />
    </label>
    <label>
        <input mbsc-switch data-label="Switch On" data-description="This is description for Switch 2" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Disabled Switch Off" type="checkbox" disabled />
    </label>
    <label>
        <input mbsc-switch data-label="Disabled Switch On" type="checkbox" checked disabled />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Switch colors</div>
    <label>
        <input mbsc-switch data-label="Primary" data-color="primary" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Secondary" data-color="secondary" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Success" data-color="success" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Danger" data-color="danger" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Warning" data-color="warning" type="checkbox" checked />
    </label>
    <label>
        <input mbsc-switch data-label="Info" data-color="info" type="checkbox" checked />
    </label>
</div>
  `,
};
