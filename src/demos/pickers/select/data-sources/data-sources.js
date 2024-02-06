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
      $('#demo-data-sources-html')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-data-sources-html-input'),
        });

      $('#demo-data-sources-object')
        .mobiscroll()
        .select({
          data: [
            {
              text: 'Atlanta',
              value: 'atl',
            },
            {
              text: 'Berlin',
              value: 'ber',
            },
            {
              text: 'Boston',
              value: 'bos',
            },
            {
              text: 'Chicago',
              value: 'chi',
            },
            {
              text: 'London',
              value: 'lon',
            },
            {
              text: 'Los Angeles',
              value: 'la',
            },
            {
              text: 'New York',
              value: 'ny',
            },
            {
              text: 'Paris',
              value: 'par',
            },
            {
              text: 'San Francisco',
              value: 'sf',
            },
          ],
        });

      var inst = $('#demo-data-sources-remote')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-data-sources-html-input'),
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/content/languages.json',
        function (resp) {
          inst.setOptions({ data: resp });
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-form-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <label>
                HTML
                <input mbsc-input id="demo-data-sources-html-input" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
            </label>
            <select id="demo-data-sources-html">
                <option value="atl">Atlanta</option>
                <option value="ber">Berlin</option>
                <option value="bos">Boston</option>
                <option value="chi">Chicago</option>
                <option value="lon">London</option>
                <option value="la">Los Angeles</option>
                <option value="ny">New York</option>
                <option value="par">Paris</option>
                <option value="sf">San Francisco</option>
            </select>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <label>
                Data object
                <input mbsc-input id="demo-data-sources-object" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <label>
                Remote data
                <input mbsc-input id="demo-data-sources-remote" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..."></select>
            </label>
        </div>
    </div>
</div>
  `,
};
