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
      var cities = [
        {
          value: 'at;',
          text: 'Atlanta',
        },
        {
          value: 'ber',
          text: 'Berlin',
        },
        {
          value: 'bos',
          text: 'Boston',
        },
        {
          value: 'chi',
          text: 'Chicago',
        },
        {
          value: 'lon',
          text: 'London',
        },
      ];

      $('#demo-setting-values')
        .mobiscroll()
        .select({
          data: cities,
          inputElement: document.getElementById('setting-values-input'),
        });

      $('#demo-setting-values-default')
        .mobiscroll()
        .select({
          data: cities,
          inputElement: document.getElementById('setting-values-default-input'),
          defaultSelection: 'ber',
        });

      var customInst = $('#demo-setting-values-inline')
        .mobiscroll()
        .select({
          display: 'inline',
          data: cities,
        })
        .mobiscroll('getInst');

      $('#demo-setting-values-boston').click(function () {
        customInst.setVal('bos');
        return false;
      });

      $('#demo-setting-values-london').click(function () {
        customInst.setVal('lon');
        return false;
      });

      var buttonsInst = $('#demo-setting-values-custom')
        .mobiscroll()
        .select({
          data: cities,
          buttons: [
            {
              text: 'Custom',
              handler: function () {
                buttonsInst.setTempVal('chi');
              },
            },
            'set',
            'cancel',
          ],
        })
        .mobiscroll('getInst');

      $('#demo-setting-values-auto')
        .mobiscroll()
        .select({
          data: cities,
          buttons: ['cancel'],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Controlling the default value</div>
    <label>
        Default
        <input mbsc-input id="demo-setting-values" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
    <label>
        Custom default
        <input mbsc-input id="demo-setting-values-default" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Setting a custom value</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="demo-setting-values-boston">Boston</button>
        <button mbsc-button id="demo-setting-values-london">London</button>
    </div>
    <select id="demo-setting-values-inline">
        <option value="atl">Atlanta</option>
        <option value="ber">Berlin</option>
        <option value="chi">Chicago</option>
        <option value="lon">London</option>
    </select>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Buttons API</div>
    <label>
        Custom
        <input mbsc-input id="demo-setting-values-custom" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
    <label>
        Auto set
        <input mbsc-input id="demo-setting-values-auto" placeholder="Please select..." data-dropdown="true" data-input-style="outline" data-label-style="stacked" />
    </label>
</div>
  `,
};
