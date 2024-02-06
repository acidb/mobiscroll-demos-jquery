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
      $('#action-btn').click(function () {
        mobiscroll.toast({
          message: 'Button was clicked',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Buttons</div>
    <div class="mbsc-button-group">
        <button mbsc-button>Button</button>
        <button mbsc-button disabled>Disabled</button>
    </div>
    <div class="mbsc-button-group">
        <button mbsc-button id="action-btn">Click for action</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Full width buttons</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button>Full width button</button>
        <button mbsc-button disabled>Disabled full width</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Justified buttons</div>
    <div class="mbsc-button-group-justified">
        <button mbsc-button>Tag</button>
        <button mbsc-button>Favorite</button>
        <button mbsc-button>Flag</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Icons</div>
    <div class="mbsc-button-group">
        <button mbsc-button data-icon="tag"></button>
        <button mbsc-button data-icon="heart"></button>
        <button mbsc-button data-icon="flag" disabled></button>
    </div>
    <div class="mbsc-button-group">
        <button mbsc-button data-start-icon="tag">Tag</button>
        <button mbsc-button data-start-icon="heart">Favorite</button>
        <button mbsc-button data-start-icon="flag" disabled>Flag</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Flat buttons</div>
    <div class="mbsc-button-group">
        <button mbsc-button data-variant="flat">Flat</button>
        <button mbsc-button data-variant="flat" data-start-icon="arrow-left5">Flat & data-icon</button>
        <button mbsc-button data-variant="flat" data-icon="arrow-left5"></button>
        <button mbsc-button data-variant="flat" data-icon="key2" disabled></button>
        <button mbsc-button data-variant="flat" disabled>Flat disabled</button>
    </div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Outline buttons</div>
    <div class="mbsc-button-group">
        <button mbsc-button data-variant="outline">Outline</button>
        <button mbsc-button data-variant="outline" data-start-icon="arrow-left5">Outline & data-icon</button>
        <button mbsc-button data-variant="outline" data-icon="arrow-left5"></button>
        <button mbsc-button data-variant="outline" data-icon="key2" disabled></button>
        <button mbsc-button data-variant="outline" disabled>Outline disabled</button>
    </div>
</div>
  `,
};
