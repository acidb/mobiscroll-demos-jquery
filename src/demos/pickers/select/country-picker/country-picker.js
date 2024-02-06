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
      var inst = $('#demo-country-picker')
        .mobiscroll()
        .select({
          display: 'anchored',
          filter: true,
          itemHeight: 40,
          renderItem: function (item) {
            return (
              '<div class="md-country-picker-item">' +
              '<img class="md-country-picker-flag" src="https://img.mobiscroll.com/demos/flags/' +
              item.data.value +
              '.png" />' +
              item.display +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/content/countries.json', function (resp) {
        var countries = [];
        for (var i = 0; i < resp.length; ++i) {
          var country = resp[i];
          countries.push({ text: country.text, value: country.value });
        }
        inst.setOptions({ data: countries });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-400" mbsc-page>
    <!--/hidden-->
    <label>
        Countries
        <input mbsc-input id="demo-country-picker" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
    </label>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-country-picker-item {
    position: relative;
    line-height: 20px;
    padding: 10px 0 10px 40px;
}

.md-country-picker-flag {
    position: absolute;
    left: 0;
    height: 20px;
}

.mbsc-scroller-wheel-item-2d .md-country-picker-item {
    transform: scale(1.1);
}
  `,
};
