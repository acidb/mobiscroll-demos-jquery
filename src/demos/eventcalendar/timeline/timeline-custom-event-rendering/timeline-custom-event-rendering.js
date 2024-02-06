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
      $('#demo-timeline-template')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'day',
            },
          },
          renderScheduleEvent: function (data) {
            var ev = data.original;
            var color = data.color;

            return (
              '<div class="md-timeline-template-event" style="border-color:' +
              color +
              ';background:' +
              color +
              '">' +
              '<div class="md-timeline-template-event-cont">' +
              '<span class="mbsc-icon mbsc-font-icon mbsc-icon-' +
              ev.taskType +
              '" style="background:' +
              color +
              '"></span>' +
              '<span class="md-timeline-template-time" style="color:' +
              color +
              ';">' +
              data.start +
              '</span>' +
              '<span class="md-timeline-template-title">' +
              ev.title +
              '</span></div></div>'
            );
          },
          extendDefaultEvent: function () {
            return {
              taskType: 'cogs',
            };
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,10,30)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Tire change',
              color: '#7a5886',
              taskType: 'material-repeat',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Brake maintenance',
              color: '#9da721',
              taskType: 'cogs',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,13,30)',
              end: 'dyndatetime(y,m,d,16,30)',
              title: 'Fluid maintenance',
              color: '#cd6957',
              taskType: 'cogs',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Oil change',
              color: '#637e57',
              taskType: 'material-repeat',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Engine inspection',
              color: '#6c5d45',
              taskType: 'material-search',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Car painting',
              color: '#50789d',
              taskType: 'material-format-paint',
              resource: 2,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#239a21',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#01adff',
            },
            {
              id: 3,
              name: 'John',
              color: '#ff0101',
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timeline-template"  class="md-timeline-template"></div>

  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-timeline-template {
    height: 100%;
}

/*</hidden>*/

.md-timeline-template .mbsc-schedule-event.mbsc-ltr {
    height: auto !important;
}

.md-timeline-template-event {
    border: 1px solid transparent;
    margin: 2px 0;
}

.md-timeline-template-event-cont {
    background: rgba(255, 255, 255, .8);
    font-size: 15px;
    height: 32px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.md-timeline-template-event-cont .mbsc-icon {
    padding: 5px;
    box-sizing: content-box;
}

.mbsc-timeline-event-start .md-timeline-template-event,
.mbsc-timeline-event-start .md-timeline-template-event-cont,
.mbsc-timeline-event-start .md-timeline-template-event-cont .mbsc-icon {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.mbsc-timeline-event-end .md-timeline-template-event,
.mbsc-timeline-event-end .md-timeline-template-event-cont,
.mbsc-timeline-event-end .md-timeline-template-event-cont .mbsc-icon {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.md-timeline-template-event-cont .mbsc-icon:before {
    color: #fff;
    font-size: 18px;
}

.md-timeline-template-time {
    margin: 0 10px;
}

.md-timeline-template-title {
    color: #666;
}

.md-timeline-template .mbsc-timeline-column,
.md-timeline-template .mbsc-timeline-header-column {
    min-width: 100px;
}

.md-timeline-template .mbsc-timeline-resource,
.md-timeline-template .mbsc-timeline-row {
    min-height: 100px;
}
  `,
};
