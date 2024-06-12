import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    function isEventBetweenShift(shift, event) {
      return new Date(shift.start) <= new Date(event.start) && new Date(shift.end) >= new Date(event.end);
    }

    $(function () {
      var myInvalids = [
        {
          start: '00:00',
          end: '05:00',
          recurring: {
            repeat: 'daily',
          },
        },
        {
          start: '19:00',
          end: '00:00',
          recurring: {
            repeat: 'daily',
          },
        },
      ];

      var timelineInst = $('#demo-tasks-subtasks-under-shifts')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToResize: true,
          dragToCreate: true,
          view: {
            timeline: {
              type: 'week',
              startTime: '05:00',
              endTime: '19:00',
              eventHeight: 'variable',
            },
          },
          extendDefaultEvent: function (args) {
            var events = timelineInst.getEvents(args.start, new Date(+args.start + 3600000)).filter(function (e) {
              return e.resource === args.resource;
            });
            var isShift = events.length === 0;
            return {
              order: isShift ? 1 : 2,
              cssClass: isShift ? 'md-task-shift' : 'md-task-subtask',
              color: isShift ? 'gray' : '',
              title: isShift ? 'New Shift' : 'New subtask',
              tasks: isShift ? [] : undefined,
              shift: isShift ? undefined : events[0].id,
            };
          },

          onEventCreated: function (args, inst) {
            var event = args.event;
            var overlapEvents = inst.getEvents(event.start, event.end).filter(function (e) {
              return e.resource === event.resource;
            });

            if (event.shift) {
              /* tasks was created */
              var shift = overlapEvents[0];

              if (overlapEvents.length > 2) {
                // prevent task overlap
                inst.removeEvent(event);
              } else {
                /* update the shift */
                shift.tasks.push(event.id);
                inst.updateEvent(shift);
                /* update subtask */
                console.log('shift.id', shift.id);
                event.shift = shift.id;
                inst.updateEvent(event);
              }
            }
          },
          onEventDragStart: function (args, inst) {
            var events = inst.getEvents();
            var event = args.event;
            var tempInvalid = [];

            if (event.tasks) {
              /* shift */
              var shiftsInResource = events.filter(function (e) {
                return e.tasks !== undefined && e.resource === event.resource && e.id !== event.id;
              });

              shiftsInResource.forEach(function (e) {
                tempInvalid.push({
                  start: e.start,
                  end: e.end,
                  resource: e.resource,
                });
              });

              inst.setOptions({
                invalid: tempInvalid.concat(myInvalids),
              });
            } else {
              /* subtask */
              var shift = events.find(function (ev) {
                return ev.resource === event.resource && ev.id === event.shift;
              });
              tempInvalid.push(
                {
                  start: new Date(+new Date(shift.start) - 7 * 86400000),
                  end: shift.start,
                  resource: shift.resource,
                },
                {
                  start: shift.end,
                  end: new Date(+new Date(shift.end) + 7 * 86400000),
                  resource: shift.resource,
                },
              );
              inst.setOptions({
                invalid: tempInvalid.concat(myInvalids),
              });
            }
          },
          onEventDragEnd: function (args, inst) {
            inst.setOptions({
              invalid: myInvalids,
            });
          },
          onEventUpdated: function (args, inst) {
            var events = inst.getEvents();
            var event = args.event;
            var oldEvent = args.oldEvent;

            if (event.tasks) {
              /* the shift was updated */
              var startDiff = +new Date(event.start) - +new Date(oldEvent.start);
              var endDiff = +new Date(event.end) - +new Date(oldEvent.end);
              var diff = startDiff || endDiff;
              var isMove = startDiff === endDiff;
              var isResize = startDiff > 0 || endDiff < 0;

              /* update subtask */
              event.tasks.forEach(function (el) {
                var task = events.find(function (e) {
                  return e.id === el;
                });
                // todo refactor
                if (isMove || (isResize && !isEventBetweenShift(event, task))) {
                  var newStart = new Date(Math.max(+new Date(task.start) + diff, +new Date(event.start)));
                  var newEnd = new Date(Math.min(+newStart + +new Date(task.end) - +new Date(task.start), +new Date(event.end)));
                  task.start = newStart;
                  task.end = newEnd;
                  inst.updateEvent(task);
                }
              });
            }
          },
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Morning shift',
              resource: 1,
              tasks: ['es-1', 'es-2', 'es-3'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'es-1',
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,8,30)',
              title: 'Server Maintenance',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'es-2',
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,10,45)',
              title: 'Monitor System Performance',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'es-3',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Backup and Recovery',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Afernoon shift',
              resource: 2,
              tasks: ['jb-1', 'jb-2', 'jb-3', 'jb-4'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'jb-1',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12,30)',
              title: 'Code Review',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-2',
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,14,45)',
              title: 'Develop New Features',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-3',
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,16,50)',
              title: 'Mentor Junior Developers',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-4',
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Attend Stand-Up Meeting',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Morning shift',
              resource: 3,
              tasks: ['ol-1', 'ol-2', 'ol-3'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'ol-1',
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,8)',
              title: 'UI/UX Design Implementation',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'ol-2',
              start: 'dyndatetime(y,m,d,8,30)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Cross-Browser Testing',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'ol-3',
              start: 'dyndatetime(y,m,d,10,15)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Accessibility Improvements',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Morning shift',
              resource: 4,
              tasks: ['rt-1', 'rt-2', 'rt-3'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'rt-1',
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Database Optimization',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'rt-2',
              start: 'dyndatetime(y,m,d,15,15)',
              end: 'dyndatetime(y,m,d,16,35)',
              title: 'Security Audits',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'rt-3',
              start: 'dyndatetime(y,m,d,16,45)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'API Development',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,19)',
              title: 'Afternoon shift',
              resource: 3,
              tasks: ['om-5', 'om-6', 'om-7'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'om-5',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,12,30)',
              title: 'Attend Stand-Up Meetings',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'om-6',
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Develop New Features',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'om-7',
              start: 'dyndatetime(y,m,d+1,15,15)',
              end: 'dyndatetime(y,m,d+1,19)',
              title: 'Optimize Code',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Afternoon shift',
              resource: 1,
              tasks: ['es-5', 'es-6', 'es-7', 'es-8'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'es-5',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,12,30)',
              title: 'Automated Testing',
              resource: 1,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'es-6',
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'API Development',
              resource: 1,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'es-7',
              start: 'dyndatetime(y,m,d+1,15)',
              end: 'dyndatetime(y,m,d+1,16,30)',
              title: 'Security Audits',
              resource: 1,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'es-8',
              start: 'dyndatetime(y,m,d+1,17)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Continuous Integration Setup',
              resource: 1,
              shift: 5,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            //...
            {
              id: 7,
              start: 'dyndatetime(y,m,d+1,6)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Morning shift',
              resource: 2,
              tasks: ['jb-5', 'jb-6', 'jb-7', 'jb-8'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'jb-5',
              start: 'dyndatetime(y,m,d+1,6)',
              end: 'dyndatetime(y,m,d+1,7)',
              title: 'Documentation',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-6',
              start: 'dyndatetime(y,m,d+1,7,15)',
              end: 'dyndatetime(y,m,d+1,9,30)',
              title: 'Integrate APIs',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-7',
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,11)',
              title: 'Optimize Code',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'jb-8',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Code Deployment',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Morning shift',
              resource: 4,
              tasks: ['rt-5', 'rt-6', 'rt-7'],
              order: 1,
              color: 'gray',
              cssClass: 'md-task-shift',
            },
            {
              id: 'rt-5',
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'rt-6',
              start: 'dyndatetime(y,m,d+1,8,15)',
              end: 'dyndatetime(y,m,d+1,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'md-task-subtask',
            },
            {
              id: 'rt-7',
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'md-task-subtask',
            },
          ],
          resources: [
            {
              id: 1,
              color: '#ff0101',
              name: 'Emma Smith',
              eventDragBetweenResources: false,
            },
            {
              id: 2,
              color: '#239a21',
              name: 'James Brown',
              eventDragBetweenResources: false,
            },
            {
              id: 3,
              color: '#8f1ed6',
              name: 'Olivia Miller',
              eventDragBetweenResources: false,
            },
            {
              id: 4,
              color: '#01adff',
              name: 'Robert Taylor',
              eventDragBetweenResources: false,
            },
          ],
          invalid: myInvalids,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-tasks-subtasks-under-shifts"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-task-shift {
  height: 30px;
}
.md-task-subtask {
  height: 38px;
  font-size: 14px;
}

.md-task-shift .mbsc-schedule-event-range,
.md-task-shift .mbsc-schedule-event-title {
  display: inline-block;
  margin: 0 4px;
}
   `,
};
