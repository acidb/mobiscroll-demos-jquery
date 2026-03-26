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
      var inst = $('#demo-tasks-calendar')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventHeight: 'variable',
              eventDisplay: 'fill',
            },
          },
          dragToCreate: true,
          clickToCreate: true,
          dragToMove: true,
          dragToResize: true,
          extendDefaultEvent: function () {
            return {
              title: 'New Event',
              tasks: ['Default task'],
            };
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-tasks-resource-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-tasks-resource-description">' +
              resource.description +
              '</div>'
            );
          },
          renderTimelineEventContent: function (event) {
            return (
              '<div class="mds-tasks-event-title">' +
              event.title +
              '</div>' +
              '<div class="mds-tasks-event-subtitle">Task list</div>' +
              '<div class="mds-tasks-event-list">' +
              event.original.tasks.reduce(function (list, task) {
                return list + '<div class="mds-tasks-event-list-item">' + task + '</div>';
              }, '') +
              '<div class="mds-tasks-event-list-item mds-tasks-event-add">+ Add task</div>' +
              '</div>'
            );
          },
          onEventClick: function (args) {
            if (args.domEvent.target.classList.contains('mds-tasks-event-add')) {
              var ev = args.event;
              mobiscroll.prompt({
                title: 'Add new task to ' + ev.title,
                callback: function (value) {
                  if (value) {
                    var updatedTasks = ev.tasks.slice();
                    updatedTasks.push(value);
                    ev.tasks = updatedTasks;
                    inst.updateEvent(ev);
                    mobiscroll.toast({
                      duration: 3000,
                      message: 'Tasks updated for ' + ev.title,
                    });
                  }
                },
              });
            }
          },
          resources: [
            {
              id: 1,
              name: 'Site Plumbing Squad',
              description: 'Elite construction plumbers ensuring flawless pipeline installations on every site.',
              color: '#01adff',
            },
            {
              id: 2,
              name: 'Pipeline Builders',
              description: 'Constructing fluid pathways, one precision connection at a time.',
              color: '#239a21',
            },
            {
              id: 3,
              name: 'Blueprint Plumbers',
              description: 'Turning plans into precise pipelines with expert craftsmanship.',
              color: '#ff4600',
            },
            {
              id: 4,
              name: 'Site Supply Specialists',
              description: 'Delivering essential plumbing materials promptly to construction sites',
              color: '#4981d6',
            },
            {
              id: 5,
              name: 'Infrastructure Installers',
              description: ' Building the backbone of modern plumbing systems efficiently.',
              color: '#f1e920',
            },
            {
              id: 6,
              name: 'Steel Sinks Squad',
              description: 'Installing robust sinks for industrial and commercial settings.',
              color: '#f7961e',
            },
          ],
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events-check-list-tasks/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-tasks-calendar" class="mds-tasks-calendar"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-tasks-resource-name {
  padding: 15px 0 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.mds-tasks-resource-description {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.mds-tasks-event-title {
  padding: 16px 8px 0 8px;
  white-space: normal;
  word-break: normal;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
}

.mds-tasks-event-subtitle {
  font-weight: 600;
  font-size: 14px;
  padding: 8px 8px 0 8px;
}

.mds-tasks-event-list {
  margin: 8px 8px 16px;
  border-radius: 0.25em;
  background-color: #ffffff69;
}

.mds-tasks-event-list-item {
  padding: 8px;
  white-space: normal;
  font-size: 12px;
  line-height: 16px;
  color: #000;
  border-bottom: 1px solid #00000033;
  font-weight: 400;
}

.mds-tasks-event-add {
  padding-top: 4px;
  border-bottom: none;
  font-weight: 700;
}

.mds-tasks-event-add:hover {
  color: #0000EE;
  text-decoration: underline;
}

.mds-tasks-calendar .mbsc-timeline-row {
  height: 174px;
}

.mds-tasks-calendar .mbsc-schedule-event-inner {
  display: block;
  height: auto;
}
  `,
};
