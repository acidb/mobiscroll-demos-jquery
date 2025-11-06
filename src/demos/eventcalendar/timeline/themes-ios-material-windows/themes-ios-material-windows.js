import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    $(function () {
      mobiscroll.setOptions({
        // locale,
      });

      var inst = $('#demo-theme')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: { type: 'day' },
          },
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#ff4600',
            },
            {
              id: 3,
              name: 'John',
              color: '#ff0101',
            },
            {
              id: 4,
              name: 'Mark',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Sharon',
              color: '#8f1ed6',
            },
            {
              id: 6,
              name: 'Ashley',
              color: '#01adff',
            },
          ],
        })
        .mobiscroll('getInst');

      $('#data-theme-select').on('change', function () {
        inst.setOptions({ theme: $(this).val() });
      });

      $('#data-theme-variant-select').on('change', function () {
        inst.setOptions({ themeVariant: $(this).val() });
      });

      $.getJSON('https://trial.mobiscroll.com/timeline-events/?callback=?', function (events) {
        inst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mds-full-height mbsc-flex-col">
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-6">
          <label>
            <select id="data-theme-select" mbsc-dropdown data-input-style="box" label="Theme" data-label-style="stacked">
              <option value="auto">Auto</option>
              <option value="ios">iOS</option>
              <option value="material">Material</option>
              <option value="windows">Windows</option>
            </select>
          </label>
        </div>
        <div class="mbsc-col-sm-6">
          <label>
            <select id="data-theme-variant-select" mbsc-dropdown data-input-style="box" label="Theme variant" data-label-style="stacked">
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div id="demo-theme" class="mbsc-flex-1-1"></div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}
  `,
};
