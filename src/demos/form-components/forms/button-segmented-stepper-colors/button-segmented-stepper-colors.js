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
    <div class="mbsc-form-group-title">Button colors</div>
    <div class="mbsc-button-group">
        <button mbsc-button data-color="primary">Primary</button>
        <button mbsc-button data-color="secondary">Secondary</button>
        <button mbsc-button data-color="success">Success</button>
        <button mbsc-button data-color="danger">Danger</button>
        <button mbsc-button data-color="warning">Warning</button>
        <button mbsc-button data-color="info">Info</button>
        <button mbsc-button data-color="light">Light</button>
        <button mbsc-button data-color="dark">Dark</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Segmented colors</div>
    <div mbsc-segmented-group data-color="primary">
        <label>
            Desktop
            <input mbsc-segmented data-color="primary" type="radio" data-icon="home" name="group-primary" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="primary" type="radio" data-icon="mobile" name="group-primary" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="primary" type="radio" data-icon="cloud-upload" name="group-primary" />
        </label>
    </div>
    <div mbsc-segmented-group data-color="secondary">
        <label>
            Desktop
            <input mbsc-segmented data-color="secondary" type="radio" data-icon="home" name="group-secondary" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="secondary" type="radio" data-icon="mobile" name="group-secondary" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="secondary" type="radio" data-icon="cloud-upload" name="group-secondary" />
        </label>
    </div>
    <div mbsc-segmented-group data-color="success">
        <label>
            Desktop
            <input mbsc-segmented data-color="success" type="radio" data-icon="home" name="group-success" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="success" type="radio" data-icon="mobile" name="group-success" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="success" type="radio" data-icon="cloud-upload" name="group-success" />
        </label>
    </div>
    <div mbsc-segmented-group data-color="danger">
        <label>
            Desktop
            <input mbsc-segmented data-color="danger" type="radio" data-icon="home" name="group-danger" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="danger" type="radio" data-icon="mobile" name="group-danger" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="danger" type="radio" data-icon="cloud-upload" name="group-danger" />
        </label>
    </div>
    <div mbsc-segmented-group data-color="warning">
        <label>
            Desktop
            <input mbsc-segmented data-color="warning" type="radio" data-icon="home" name="group-warning" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="warning" type="radio" data-icon="mobile" name="group-warning" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="warning" type="radio" data-icon="cloud-upload" name="group-warning" />
        </label>
    </div>
    <div mbsc-segmented-group data-color="info">
        <label>
            Desktop
            <input mbsc-segmented data-color="info" type="radio" data-icon="home" name="group-info" checked />
        </label>
        <label>
            Mobile
            <input mbsc-segmented data-color="info" type="radio" data-icon="mobile" name="group-info" />
        </label>
        <label>
            Cloud
            <input mbsc-segmented data-color="info" type="radio" data-icon="cloud-upload" name="group-info" />
        </label>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Stepper colors</div>
    <label>
        <input mbsc-stepper data-label="Primary" data-color="primary" min="-500" step="100" max="500" value="100" />
    </label>
    <label>
        <input mbsc-stepper data-label="Secondary" data-color="secondary" min="-500" step="100" max="500" value="100" />
    </label>
    <label>
        <input mbsc-stepper data-label="Success" data-color="success" min="-500" step="100" max="500" value="100" />
    </label>
    <label>
        <input mbsc-stepper data-label="Danger" data-color="danger" min="-500" step="100" max="500" value="100" />
    </label>
    <label>
        <input mbsc-stepper data-label="Warning" data-color="warning" min="-500" step="100" max="500" value="100" />
    </label>
    <label>
        <input mbsc-stepper data-label="Info" data-color="info" min="-500" step="100" max="500" value="100" />
    </label>
</div>
  `,
};
