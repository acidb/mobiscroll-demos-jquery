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
      $('#demo-responsive')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-responsive-input'),
          responsive: {
            xsmall: {
              display: 'bottom',
              touchUi: true,
            },
            small: {
              display: 'anchored',
              touchUi: true,
            },
            custom: {
              // Custom breakpoint
              breakpoint: 800,
              display: 'anchored',
              touchUi: false,
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Select
    <input mbsc-input id="demo-responsive-input" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
</label>
<select id="demo-responsive">
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
