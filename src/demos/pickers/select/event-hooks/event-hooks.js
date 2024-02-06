import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-input'),
          filter: true,
          onCancel: function () {
            // Logic for cancel button click
          },
          onChange: function () {
            // Logic for value change
          },
          onClose: function () {
            // Your custom event handler goes here
          },
          onDestroy: function () {
            // Your custom event handler goes here
          },
          onFilter: function () {
            // Your custom event handler goes here
          },
          onInit: function () {
            // Logic running on component init
          },
          onOpen: function () {
            // Your custom event handler goes here
          },
          onPosition: function () {
            // Logic for component positioning
          },
          onTempChange: function () {
            // Logic for temporary value change
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Select
    <input mbsc-input id="demo-input" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo">
    <option value="1">Atlanta</option>
    <option value="2">Berlin</option>
    <option value="3">Boston</option>
    <option value="4">Chicago</option>
    <option value="5">London</option>
    <option value="6">Los Angeles</option>
    <option value="7">New York</option>
    <option value="8">Paris</option>
    <option value="9">San Francisco</option>
</select>
  `,
};
