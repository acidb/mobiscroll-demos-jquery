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
      var $cellDate = $('#demo-cell-summary-date');
      var $cellEventNr = $('#demo-cell-summary-events');
      var $cellInvalidNr = $('#demo-cell-summary-invalid');
      var $cellColorNr = $('#demo-cell-summary-colors');

      $('#demo-show-cell-summary-on-hover')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: {
              type: 'week',
              startTime: '08:00',
              endTime: '18:00',
              timeCellStep: 30,
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,11)',
              title: 'Task 1',
            },
            {
              start: 'dyndatetime(y,m,d-2,14)',
              end: 'dyndatetime(y,m,d-2,16)',
              title: 'Task 2',
            },
            {
              start: 'dyndatetime(y,m,d-1,15)',
              end: 'dyndatetime(y,m,d-1,17)',
              title: 'Task 3',
            },
            {
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Task 4',
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Task 5',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 6',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 7',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Task 8',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Task 9',
            },
            {
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Task 10',
            },
            {
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 11',
            },
            {
              start: 'dyndatetime(y,m,d+1,18)',
              end: 'dyndatetime(y,m,d+1,20)',
              title: 'Task 12',
            },
            {
              start: 'dyndatetime(y,m,d+2,8)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'Task 13',
            },
            {
              start: 'dyndatetime(y,m,d+2,15)',
              end: 'dyndatetime(y,m,d+2,18)',
              title: 'Task 14',
            },
            {
              start: 'dyndatetime(y,m,d+3,8)',
              end: 'dyndatetime(y,m,d+3,11)',
              title: 'Task 15',
            },
            {
              start: 'dyndatetime(y,m,d+3,15)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Task 16',
            },
            {
              start: 'dyndatetime(y,m,d+4,9)',
              end: 'dyndatetime(y,m,d+4,12)',
              title: 'Task 17',
            },
          ],
          invalid: [
            {
              start: 'dyndatetime(y,m,d-2,12)',
              end: 'dyndatetime(y,m,d-2,13)',
            },
            {
              start: 'dyndatetime(y,m,d-1,8)',
              end: 'dyndatetime(y,m,d-1,10)',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,15)',
            },
            {
              start: 'dyndatetime(y,m,d+1,15)',
              end: 'dyndatetime(y,m,d+1,17)',
            },
            {
              start: '10:00',
              end: '11:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU,TH,SA,SU',
              },
            },
          ],
          colors: [
            {
              start: 'dyndatetime(y,m,d-1,12)',
              end: 'dyndatetime(y,m,d-1,14)',
              cssClass: 'mds-cell-summary-color',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,12)',
              cssClass: 'mds-cell-summary-color',
            },
            {
              start: 'dyndatetime(y,m,d+1,8)',
              end: 'dyndatetime(y,m,d+1,11)',
              cssClass: 'mds-cell-summary-color',
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,17)',
              cssClass: 'mds-cell-summary-color',
            },
            {
              start: '08:00',
              end: '09:00',
              cssClass: 'mds-cell-summary-color',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,FR',
              },
            },
            {
              start: '14:00',
              end: '16:00',
              cssClass: 'mds-cell-summary-color',
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU,TH',
              },
            },
            {
              start: '10:00',
              end: '12:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'FR',
              },
              cssClass: 'mds-cell-summary-color',
            },
            {
              start: '16:00',
              end: '17:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'SU,SA',
              },
              cssClass: 'mds-cell-summary-color',
            },
          ],
          onCellHoverIn: function (args) {
            var endDate = new Date(args.date);
            endDate.setHours(endDate.getHours() + 1);
            var date = mobiscroll.formatDate('DDDD MMM D, YYYY, HA - ', args.date);
            var time = mobiscroll.formatDate('HA', endDate);

            $cellDate.text(date + time);
            $cellEventNr.text(args.events ? args.events.length : 0);
            $cellInvalidNr.text(args.invalids ? args.invalids.length : 0);
            $cellColorNr.text(args.colors ? args.colors.length : 0);

            tooltip.setOptions({
              anchor: args.target,
            });

            tooltip.open();
          },
          onCellHoverOut: function () {
            tooltip.close();
          },
        });

      var tooltip = $('#demo-cell-summary-popup')
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          touchUi: false,
          scrollLock: false,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-cell-summary-popup" style="display: none;">
  <div id="demo-cell-summary-date" class="mds-cell-summary-title"></div>
  <div class="mbsc-flex">
    <div class="mbsc-flex-1-0 mds-cell-summary-item">
      <div class="mbsc-txt-muted">Events</div>
      <div id="demo-cell-summary-events" class="mds-cell-summary-content"></div>
    </div>
    <div class="mbsc-flex-1-0 mds-cell-summary-item">
      <div class="mbsc-txt-muted">Invalid</div>
      <div id="demo-cell-summary-invalid" class="mds-cell-summary-content"></div>
    </div>
    <div class="mbsc-flex-1-0 mds-cell-summary-item">
      <div class="mbsc-txt-muted">Colors</div>
      <div id="demo-cell-summary-colors" class="mds-cell-summary-content"></div>
    </div>
  </div>
</div>
<div id="demo-show-cell-summary-on-hover" class="mds-cell-summary-on-hover"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-cell-summary-on-hover .mbsc-schedule-events.mbsc-ltr {
  right: 20px;
}
.mds-cell-summary-on-hover .mbsc-schedule-events.mbsc-rtl {
  left: 20px;
}
.mds-cell-summary-on-hover .mbsc-schedule-item:hover {
  box-shadow: 0px 1px 6px 3px rgba(0, 0, 0, 0.2), 0px 1px 6px 3px rgba(255, 255, 255, 0.2);
}
.mds-cell-summary-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.mds-cell-summary-item {
  flex: 1;
}
.mds-cell-summary-content {
  font-weight: 500;
  opacity: 0.8;
  margin-top: 5px;
}
.mds-cell-summary-color {    
  background: repeating-linear-gradient(-45deg, #cce9d3, #cce9d3 10px, #c5dfc1 10px, #c5dfc1 20px);
  opacity: 0.5;
}
`,
};
