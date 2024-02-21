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
      var popup = $('#my-popup')
        .mobiscroll()
        .popup({
          buttons: ['set', 'cancel'],
          display: 'anchored',
          contentPadding: false,
          responsive: {
            medium: {
              display: 'anchored',
              width: 400,
              fullScreen: false,
              touchUi: false,
            },
          },
        })
        .mobiscroll('getInst');

      $('#show-popup').on('click', function (event) {
        popup.setOptions({
          anchor: event.target,
        });
        popup.open();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<button mbsc-button id="show-popup">Show modal</button>
<div id="my-popup">
    <div class="mbsc-form-group">
        <label>
            <input mbsc-input data-label="Title" />
        </label>
        <label>
            <textarea mbsc-textarea data-label="Description"></textarea>
        </label>
    </div>
    <div class="mbsc-form-group">
        <label>
            <input mbsc-switch type="checkbox" data-label="All-day" />
        </label>
        <label>
            <input mbsc-input data-label="Starts" />
        </label>
        <label>
            <input mbsc-input data-label="Ends" />
        </label>
        <label>
            Show as busy
            <input mbsc-segmented name="status" type="radio" checked />
        </label>
        <label>
            Show as free
            <input mbsc-segmented name="status" type="radio" />
        </label>
    </div>
</div>
  `,
};
