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
    <div class="mbsc-form-group-title">Passengers</div>
    <label>
        <input mbsc-stepper data-label="Adults" data-description="From 14 years" min="1" value="1" max="15" />
    </label>
    <label>
        <input mbsc-stepper data-label="Children" data-description="2-14 years" max="15" data-input-position="start" />
    </label>
    <label>
        <input mbsc-stepper data-label="Infant" data-description="0-2 years" data-input-position="start" max="10" />
    </label>
</div>
  `,
};
