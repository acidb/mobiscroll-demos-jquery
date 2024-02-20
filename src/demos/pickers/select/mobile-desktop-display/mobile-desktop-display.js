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
      $('#demo-inline').mobiscroll().select({
        display: 'inline',
      });

      $('#demo-anchored')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-anchored-input'),
          display: 'anchored',
        });

      $('#demo-top')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-top-input'),
          display: 'top',
        });

      $('#demo-bottom')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-bottom-input'),
          display: 'bottom',
        });

      $('#demo-center')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-center-input'),
          display: 'center',
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<select id="demo-inline">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
   Anchored
    <input mbsc-input id="demo-anchored-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-anchored">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Top
    <input mbsc-input id="demo-top-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-top">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Bottom
    <input mbsc-input id="demo-bottom-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-bottom">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>

<label>
    Center
    <input mbsc-input id="demo-center-input" data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
</label>
<select id="demo-center">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
</select>
  `,
};
