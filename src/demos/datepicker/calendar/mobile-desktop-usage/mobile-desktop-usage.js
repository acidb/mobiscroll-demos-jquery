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
      $('#demo-mobile-picker-input')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar'],
          touchUi: true,
        });

      var instance = $('#demo-mobile-picker-button')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar'],
          touchUi: true,
          showOnClick: false,
          showOnFocus: false,
        })
        .mobiscroll('getInst');

      instance.setVal(new Date(), true);

      $('#demo-mobile-picker-mobiscroll')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar'],
          touchUi: true,
        });

      $('#demo-mobile-picker-inline')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar'],
          touchUi: true,
          display: 'inline',
        });

      $('#show-mobile-date-picker').click(function () {
        instance.open();
        return false;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12">
                <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker with any inputs & show on focus/click</div>
                <input id="demo-mobile-picker-input" class="md-mobile-picker-input" placeholder="Please Select..." />
            </div>
        </div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">Disable <code>onClick/onFocus</code> and only show on button</div>
            <div class="mbsc-col-8">
                <input id="demo-mobile-picker-button" class="md-mobile-picker-input" />
            </div>
            <div class="mbsc-col-4 mbsc-col-no-padding">
                <button mbsc-button data-variant="outline" data-color="primary" id="show-mobile-date-picker" class="md-mobile-picker-button">Show picker</button>
            </div>
        </div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-row">
            <div class="mbsc-col-12">
                <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
                <label class="md-mobile-picker-box-label">
                    <input id="demo-mobile-picker-mobiscroll" mbsc-input data-label-style="stacked" data-input-style="box" placeholder="Please Select..." />
                </label>
            </div>
        </div>
    </div>
    <div class="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
</div>
<div class="md-mobile-picker-inline">
    <div id="demo-mobile-picker-inline"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-mobile-picker-header {
    font-size: 14px;
}

input.md-mobile-picker-input {
    color: initial;
    width: 100%;
    padding: 10px;
    margin: 6px 0 12px 0;
    border: 1px solid #ccc;
    border-radius: 0;
    font-family: arial, verdana, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-appearance: none;
}

.md-mobile-picker-button.mbsc-button {
    font-size: 13px;
    padding: 0 15px;
    line-height: 36px;
    float: right;
    margin: 6px 0;
    width: 100%;
}

.mbsc-col-no-padding {
    padding-left: 0;
}

.md-mobile-picker-box-label.mbsc-textfield-wrapper-box,
.md-mobile-picker-box-label .mbsc-textfield-wrapper-box,
.md-mobile-picker-inline {
    margin: 6px 0 12px 0;
}
  `,
};
