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
      var $checkboxes = $('.demo-shared-events-checkbox');

      var myResources = [
        {
          id: 1,
          name: 'Ryan',
          color: '#f7c4b4',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#c6f1c9',
        },
        {
          id: 3,
          name: 'John',
          color: '#e8d0ef',
        },
      ];

      var calendar = $('#demo-dynamic-filter')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startDay: 1,
              endDay: 5,
              startTime: '08:00',
              endTime: '17:00',
            },
          },
          resources: myResources,
        })
        .mobiscroll('getInst');

      $checkboxes.on('change', function () {
        var selected = {};

        $checkboxes.each(function () {
          selected[+this.value] = this.checked;
        });

        calendar.setOptions({
          resources: myResources.filter(function (r) {
            return selected[r.id];
          }),
        });
      });

      $.getJSON(
        'https://trial.mobiscroll.com/resource-events-shared/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 dynamic-resources-calendar">
            <div id="demo-dynamic-filter"></div>
        </div>
        <div class="mbsc-col-sm-3">
            <div class="mbsc-form-group-title">Show available tasks</div>
            <label>
                Ryan
                <input value="1" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
            <label>
                Kate
                <input value="2" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
            <label>
                John
                <input value="3" mbsc-checkbox type="checkbox" class="demo-shared-events-checkbox" checked>
            </label>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.dynamic-resources-calendar {
    border-right: 1px solid #ccc;
}
  `,
};
