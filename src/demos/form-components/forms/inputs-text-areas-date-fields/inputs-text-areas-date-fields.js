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
      $('#demo-cal').mobiscroll().datepicker();

      $('#demo-scroller')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Single-line text</div>
    <label>
        <input mbsc-input type="text" data-label="Label" placeholder="Text field label" />
    </label>
    <label>
        <input mbsc-input type="password" data-label="Password" placeholder="Text field with icon" data-start-icon="lock2" />
    </label>
    <label>
        <input mbsc-input type="password" data-label="Password Toggle" placeholder="Text field with icon" data-start-icon="lock2" data-password-toggle="true" />
    </label>
    <label>
        <input mbsc-input type="text" placeholder="Text field with right icon" data-end-icon="pencil" />
    </label>
    <label>
        <input mbsc-input type="text" placeholder="Text field disabled" disabled/>
    </label>
    <label>
        <input mbsc-input type="text" data-error="true" placeholder="Text field with error style"  />
    </label>
    <label>
        <input mbsc-input type="text" data-error="true" data-error-message="Error message!" placeholder="Text field with error style and message" />
    </label>
    <label>
        <input mbsc-input type="file" data-label="File upload" placeholder="Select file..." />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Multi-line text</div>
    <label>
        <textarea mbsc-textarea data-label="Label"></textarea>
    </label>
    <label>
        <textarea mbsc-textarea data-end-icon="pencil"></textarea>
    </label>
    <label>
        <textarea mbsc-textarea data-label="Label" data-start-icon="bubble"></textarea>
    </label>
    <label>
        <textarea mbsc-textarea placeholder="disabled" disabled></textarea>
    </label>
    <label>
        <textarea mbsc-textarea data-error="true" data-error-message="Error message!"></textarea>
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Input fields for date entry</div>
    <label>
        <input mbsc-input data-label="Date field" type="date" placeholder="Please Select..." />
    </label>
    <label>
        <input mbsc-input data-label="Calendar" id="demo-cal" placeholder="Please Select..." />
    </label>
    <label>
        <input mbsc-input data-label="Date scroller" id="demo-scroller" placeholder="Please Select..." />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Input field for number entry</div>
    <label>
        <input mbsc-input data-label="Number field" type="number" placeholder="Please Select..." />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Select</div>
    <label>
        <select mbsc-dropdown data-label="Label">
            <option>Select</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </label>
    <label>
        <select mbsc-dropdown data-end-icon="plus">
            <option>Select with right icon</option>
            <option value="opel">Opel</option>
            <option value="renault">Renault</option>
            <option value="Citroen">Citroen</option>
            <option value="Lotus">Lotus</option>
        </select>
    </label>
    <label>
        <select mbsc-dropdown data-start-icon="plus">
            <option>Select with left icon</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Porsche">Porsche</option>
            <option value="Fiat">Fiat</option>
            <option value="Volkswagen">Volkswagen</option>
        </select>
    </label>
    <label>
        <select mbsc-dropdown data-error="true">
            <option>Select error</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Honda">Honda</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Lamborghini">Lamborghini</option>
        </select>
    </label>
    <label>
        <select mbsc-dropdown disabled>
            <option>Select disabled</option>
            <option value="Bentley">Bentley</option>
            <option value="Morgan">Morgan</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Dodge">Dodge</option>
        </select>
    </label>
</div>
  `,
};
