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
      var now = new Date();
      var until = new Date(now.getFullYear() + 10, now.getMonth());

      $('#picker')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'MM/YYYY',
          dateWheels: 'DD MMMM YYYY',
          min: now,
          max: until,
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Add a new credit card</div>
    <label>
        Name
        <input mbsc-input type="text" placeholder="Required" />
    </label>
    <label>
        Card
        <input mbsc-input type="text" placeholder="Credit card number" />
    </label>
    <label>
        Expiration
        <input mbsc-input id="picker" type="text" placeholder="Required" value="12/2025"/>
    </label>
    <label>
        Security
        <input mbsc-input type="text" placeholder="3-digit CVV" />
    </label>
</div>
  `,
};
