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
      $('#demo-resource-background')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: {
              type: 'day',
            },
          },
          groupBy: 'date',
          resources: [
            {
              id: 1,
              name: 'Resource A - Full column background - with "background" property',
              color: '#e20000',
              background: 'rgba(71, 251, 34, 0.37)',
            },
            {
              id: 2,
              name: 'Resource B - Thicker borders with "cssClass" property',
              color: '#1dab2f',
              cssClass: 'md-col-tick-border',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#4981d6',
            },
            {
              id: 4,
              name: 'Resource D - Resource only background with "cssClass" property',
              color: '#e25dd2',
              cssClass: 'md-resource-only-bg',
            },
            {
              id: 5,
              name: 'Resource E - Different backgrounds with "cssClass" property',
              color: '#4981d6',
              cssClass: 'md-diff-custom-bg',
            },
            {
              id: 6,
              name: 'Resource F',
              color: '#d6d145',
            },
            {
              id: 7,
              name: 'Resource G - Grid only background with "cssClass" property',
              color: '#34c8e0',
              cssClass: 'md-colum-only-bg',
            },
          ],
          data: [
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d, 10)',
              title: 'Event 1',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Event 2',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,21)',
              title: 'Event 3',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Event 4',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Event 6',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d,4)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Event 7',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Event 8',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Event 9',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Event 10',
              resource: 2,
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-background"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-diff-custom-bg.mbsc-schedule-header-item,
.md-diff-custom-bg.mbsc-schedule-resource {
  opacity: 0.8;
  background-image: repeating-linear-gradient(45deg, #ffd6d6 25%, transparent 25%, transparent 75%, #ffd6d6 75%, #ffd6d6),
      repeating-linear-gradient(45deg, #ffd6d6 25%, #ffefef 25%, #ffefef 75%, #ffd6d6 75%, #ffd6d6);
  background-position:
      0 0,
      10px 10px;
  background-size: 20px 20px;
}
.md-diff-custom-bg.mbsc-schedule-column {
  background-image: radial-gradient(#ae8a8a 20%, transparent 20%);
  background-color: #f9f9f9;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}

.md-diff-custom-bg.mbsc-schedule-all-day-item {
  background: repeating-linear-gradient(-45deg, #fcfffc, #fcfffc 10px, #eefbec 10px, #eefbec 20px);
}

.md-col-tick-border.mbsc-schedule-all-day-item,
.md-col-tick-border.mbsc-schedule-column,
.md-col-tick-border.mbsc-schedule-resource.mbsc-schedule-col-width {
  border-left: 4px solid #ccc;
  border-right: 3px solid #ccc; 
}

.md-col-tick-border.mbsc-schedule-all-day-item::after  {
  border-right: 4px solid #ccc; 
}

.md-colum-only-bg.mbsc-schedule-column {
  background: rgba(0, 128, 128, 0.8);
}

.md-resource-only-bg.mbsc-schedule-resource  {
  background: rgba(255, 166, 0, 0.7);
}
  `,
};
