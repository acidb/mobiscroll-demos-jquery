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
      var myInvalids = [
        {
          start: '00:00',
          end: '05:00',
          recurring: {
            repeat: 'daily',
          },
          workOff: true,
        },
        {
          start: '19:00',
          end: '00:00',
          recurring: {
            repeat: 'daily',
          },
          workOff: true,
        },
      ];

      var timelineInst = $('#demo-tasks-subtasks-under-shifts')
        .mobiscroll()
        .eventcalendar({
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              startTime: '05:00',
              endTime: '19:00',
              endDay: 5,
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
              cssClass: isShift ? 'mds-task-shift' : 'mds-task-subtask',
              color: isShift ? '#513737' : '',
              title: isShift ? 'New Shift' : 'New Task',
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
              // Tasks was created
              var shift = overlapEvents[0];
              if (overlapEvents.length > 2) {
                // Prevent task overlap
                inst.removeEvent(event);
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'No space for task',
                });
              } else {
                // Update the shift
                shift.tasks.push(event.id);
                inst.updateEvent(shift);
                // Update subtask
                event.start = new Date(Math.max(+new Date(shift.start), +event.start));
                event.end = new Date(Math.min(+new Date(shift.end), +event.end));
                event.shift = shift.id;
                inst.updateEvent(event);
              }
            }
          },
          onEventDeleted: function (args, inst) {
            var event = args.event;
            if (event.tasks) {
              inst.removeEvent(event.tasks);
            }

            if (event.shift) {
              var shift = inst.getEvents().find(function (ev) {
                return ev.resource === event.resource && ev.id === event.shift;
              });
              // Remove the deleted task id from the shift data
              shift.tasks = shift.tasks.filter(function (t) {
                return t !== event.id;
              });

              inst.updateEvent(shift);
            }
          },
          onEventDragStart: function (args, inst) {
            var events = inst.getEvents();
            var event = args.event;
            var tempInvalid = [];

            if (event.tasks) {
              // Shift
              var shiftsInResource = events.filter(function (e) {
                return e.tasks !== undefined && e.resource === event.resource && e.id !== event.id;
              });

              shiftsInResource.forEach(function (e) {
                tempInvalid.push({
                  start: e.start,
                  end: e.end,
                  resource: e.resource,
                  cssClass: 'mds-task-blocked',
                  shift: true,
                });
              });

              inst.setOptions({
                invalid: tempInvalid.concat(myInvalids),
              });
            } else {
              // Subtask
              var shift = events.find(function (ev) {
                return ev.resource === event.resource && ev.id === event.shift;
              });
              tempInvalid.push(
                {
                  start: new Date(+new Date(shift.start) - 7 * 86400000),
                  end: shift.start,
                  resource: shift.resource,
                  cssClass: 'mds-task-blocked',
                  task: true,
                },
                {
                  start: shift.end,
                  end: new Date(+new Date(shift.end) + 7 * 86400000),
                  resource: shift.resource,
                  cssClass: 'mds-task-blocked',
                  task: true,
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
              // Shift was updated
              var shiftStart = new Date(event.start);
              var shiftEnd = new Date(event.end);
              var startDiff = +shiftStart - +new Date(oldEvent.start);
              var endDiff = +shiftEnd - +new Date(oldEvent.end);
              var startResize = startDiff > 0;
              var endResize = endDiff < 0;
              var isMove = startDiff === endDiff;
              var isResize = !isMove && (startResize || endResize);
              var subTasksDuration = 0;
              var tasks = event.tasks.map(function (el) {
                var t = events.find(function (e) {
                  return e.id === el;
                });
                subTasksDuration += +new Date(t.end) - +new Date(t.start);
                return t;
              });

              if (isResize && +shiftEnd - +shiftStart < subTasksDuration) {
                // Limit the shift to don't be smaller than the containing subtasks
                shiftStart = endResize ? shiftStart : new Date(+shiftEnd - subTasksDuration);
                shiftEnd = startResize ? shiftEnd : new Date(+shiftStart + subTasksDuration);
                event.start = shiftStart;
                event.end = shiftEnd;
                inst.updateEvent(event);
              }

              // Resize or move
              if (isResize || startDiff === endDiff) {
                var updatedTasks = [];
                // Update subtask
                tasks.forEach(function (task, i) {
                  var taskStart = new Date(task.start);
                  var taskEnd = new Date(task.end);
                  if (isResize) {
                    task.start = new Date(i === 0 ? +shiftStart : +new Date(tasks[i - 1].end));
                    task.end = new Date(Math.min(+task.start + (+taskEnd - +taskStart), +new Date(event.end)));
                  } else {
                    task.start = new Date(+taskStart + startDiff);
                    task.end = new Date(+taskEnd + startDiff);
                  }
                  updatedTasks.push(task);
                });

                inst.updateEvent(updatedTasks);
              }
            } else {
              // Subtask was updated
              var eventOverlap = inst.getEvents(event.start, event.end).filter(function (e) {
                return e.resource === event.resource;
              });
              if (eventOverlap.length > 2) {
                // Don't let subtask to overlap
                inst.updateEvent(oldEvent);

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'No space for task',
                });
              }
            }
          },
          onEventUpdateFailed: function (args) {
            var invalid = args.invalid;
            var msg = '';

            if (invalid.workOff) {
              msg = 'Shift falls out of working hours';
            } else if (invalid.task) {
              msg = 'Task falls out of shift';
            } else if (invalid.shift) {
              msg = 'Shifts cannot overlap';
            }

            msg &&
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: msg,
              });
          },
          renderScheduleEventContent: function (args) {
            var duration = (+args.endDate - +args.startDate) / 3600000;
            return (
              args.title +
              (args.original.shift ? ' <span class="mds-task-hours"> - ' + (duration + (duration === 1 ? 'h' : 'hrs')) + '</span>' : '')
            );
          },
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Daily Shift',
              resource: 1,
              tasks: ['es-1', 'es-2', 'es-3'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'es-1',
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,8,30)',
              title: 'Server Maintenance',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'es-2',
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,10,45)',
              title: 'Monitor System Performance',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'es-3',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Backup and Recovery',
              resource: 1,
              shift: 1,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Flex Shift',
              resource: 2,
              tasks: ['jb-1', 'jb-2', 'jb-3', 'jb-4'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-1',
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12,30)',
              title: 'Code Review',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-2',
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,14,45)',
              title: 'Develop New Features',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-3',
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,16,50)',
              title: 'Mentor Junior Developers',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-4',
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Attend Stand-Up Meeting',
              resource: 2,
              shift: 2,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            //<hidden>
            {
              id: 3,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Daily Shift',
              resource: 3,
              tasks: ['ol-1', 'ol-2', 'ol-3'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-1',
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,8)',
              title: 'UI/UX Design Implementation',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-2',
              start: 'dyndatetime(y,m,d,8,30)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Cross-Browser Testing',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-3',
              start: 'dyndatetime(y,m,d,10,15)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Accessibility Improvements',
              resource: 3,
              shift: 3,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Daily Shift',
              resource: 4,
              tasks: ['rt-1', 'rt-2', 'rt-3'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-1',
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Database Optimization',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-2',
              start: 'dyndatetime(y,m,d,15,15)',
              end: 'dyndatetime(y,m,d,16,35)',
              title: 'Security Audits',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-3',
              start: 'dyndatetime(y,m,d,16,45)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'API Development',
              resource: 4,
              shift: 4,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,19)',
              title: 'Flex Shift',
              resource: 3,
              tasks: ['om-5', 'om-6', 'om-7'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'om-5',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,12,30)',
              title: 'Attend Stand-Up Meetings',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'om-6',
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Develop New Features',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'om-7',
              start: 'dyndatetime(y,m,d+1,15,15)',
              end: 'dyndatetime(y,m,d+1,19)',
              title: 'Optimize Code',
              resource: 3,
              shift: 5,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Flex Shift',
              resource: 1,
              tasks: ['es-5', 'es-6', 'es-7', 'es-8'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'es-5',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,12,30)',
              title: 'Automated Testing',
              resource: 1,
              shift: 6,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'es-6',
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'API Development',
              resource: 1,
              shift: 6,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'es-7',
              start: 'dyndatetime(y,m,d+1,15)',
              end: 'dyndatetime(y,m,d+1,16,30)',
              title: 'Security Audits',
              resource: 1,
              shift: 6,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'es-8',
              start: 'dyndatetime(y,m,d+1,17)',
              end: 'dyndatetime(y,m,d+1,18)',
              title: 'Continuous Integration Setup',
              resource: 1,
              shift: 6,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,d+1,6)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Daily Shift',
              resource: 2,
              tasks: ['jb-5', 'jb-6', 'jb-7', 'jb-8'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-5',
              start: 'dyndatetime(y,m,d+1,6)',
              end: 'dyndatetime(y,m,d+1,7)',
              title: 'Documentation',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-6',
              start: 'dyndatetime(y,m,d+1,7,15)',
              end: 'dyndatetime(y,m,d+1,9,30)',
              title: 'Integrate APIs',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-7',
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,11)',
              title: 'Optimize Code',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-8',
              start: 'dyndatetime(y,m,d+1,11)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Code Deployment',
              resource: 2,
              shift: 7,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Daily Shift',
              resource: 4,
              tasks: ['rt-5', 'rt-6', 'rt-7'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-5',
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-6',
              start: 'dyndatetime(y,m,d+1,8,15)',
              end: 'dyndatetime(y,m,d+1,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-7',
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 8,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,d-1,6)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Flex Shift',
              resource: 1,
              tasks: ['ts-1', 'ts-2', 'ts-3'],
              order: 1,
              cssClass: 'mds-task-shift',
              color: '#513737',
            },
            {
              id: 'ts-1',
              start: 'dyndatetime(y,m,d-1,6)',
              end: 'dyndatetime(y,m,d-1,8,45)',
              title: 'Database Optimization',
              resource: 1,
              shift: 9,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-2',
              start: 'dyndatetime(y,m,d-1,9,15)',
              end: 'dyndatetime(y,m,d-1,11)',
              title: 'User Access Review',
              resource: 1,
              shift: 9,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-3',
              start: 'dyndatetime(y,m,d-1,11,30)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Security Patch Deployment',
              resource: 1,
              shift: 9,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,14)',
              title: 'Daily Shift',
              resource: 1,
              tasks: ['ts-4', 'ts-5', 'ts-6'],
              order: 1,
              cssClass: 'mds-task-shift',
              color: '#513737',
            },
            {
              id: 'ts-4',
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,9,30)',
              title: 'System Update',
              resource: 1,
              shift: 10,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-5',
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,11,30)',
              title: 'NetFlex Configuration',
              resource: 1,
              shift: 10,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-6',
              start: 'dyndatetime(y,m,d-2,12)',
              end: 'dyndatetime(y,m,d-2,14)',
              title: 'Firewall Setup',
              resource: 1,
              shift: 10,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 11,
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Day Shift',
              resource: 1,
              tasks: ['ts-7', 'ts-8', 'ts-9'],
              order: 1,
              cssClass: 'mds-task-shift',
              color: '#513737',
            },
            {
              id: 'ts-7',
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,10,30)',
              title: 'Server Setup',
              resource: 1,
              shift: 11,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-8',
              start: 'dyndatetime(y,m,d-3,11)',
              end: 'dyndatetime(y,m,d-3,12,30)',
              title: 'Data Migration',
              resource: 1,
              shift: 11,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-9',
              start: 'dyndatetime(y,m,d-3,13)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Performance Testing',
              resource: 1,
              shift: 11,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Daily Shift',
              resource: 1,
              tasks: ['ts-10', 'ts-11', 'ts-12'],
              order: 1,
              cssClass: 'mds-task-shift',
              color: '#513737',
            },
            {
              id: 'ts-10',
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,11,30)',
              title: 'Software Installation',
              resource: 1,
              shift: 12,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-11',
              start: 'dyndatetime(y,m,d+2,12)',
              end: 'dyndatetime(y,m,d+2,13,30)',
              title: 'Hardware Configuration',
              resource: 1,
              shift: 12,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-12',
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'System Diagnostics',
              resource: 1,
              shift: 12,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 13,
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Flex Shift',
              resource: 1,
              tasks: ['ts-13', 'ts-14', 'ts-15'],
              order: 1,
              cssClass: 'mds-task-shift',
              color: '#513737',
            },
            {
              id: 'ts-13',
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,12,30)',
              title: 'Client Meeting',
              resource: 1,
              shift: 13,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-14',
              start: 'dyndatetime(y,m,d+3,13)',
              end: 'dyndatetime(y,m,d+3,14,30)',
              title: 'Project Planning',
              resource: 1,
              shift: 13,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ts-15',
              start: 'dyndatetime(y,m,d+3,15)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Code Review',
              resource: 1,
              shift: 13,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 15,
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,14)',
              title: 'Flex Shift',
              resource: 2,
              tasks: ['jb-13', 'jb-14', 'jb-15', 'jb-16'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-13',
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,8)',
              title: 'Data Analysis',
              resource: 2,
              shift: 15,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-14',
              start: 'dyndatetime(y,m,d-2,8,15)',
              end: 'dyndatetime(y,m,d-2,10,30)',
              title: 'Model Training',
              resource: 2,
              shift: 15,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-15',
              start: 'dyndatetime(y,m,d-2,11)',
              end: 'dyndatetime(y,m,d-2,12)',
              title: 'Validate Models',
              resource: 2,
              shift: 15,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-16',
              start: 'dyndatetime(y,m,d-2,12)',
              end: 'dyndatetime(y,m,d-2,14)',
              title: 'Model Deployment',
              resource: 2,
              shift: 15,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 14,
              start: 'dyndatetime(y,m,d-1,6)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Daily Shift',
              resource: 2,
              tasks: ['jb-9', 'jb-10', 'jb-11', 'jb-12'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-9',
              start: 'dyndatetime(y,m,d-1,6)',
              end: 'dyndatetime(y,m,d-1,7)',
              title: 'Setup Environment',
              resource: 2,
              shift: 14,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-10',
              start: 'dyndatetime(y,m,d-1,7,15)',
              end: 'dyndatetime(y,m,d-1,9,30)',
              title: 'Develop Features',
              resource: 2,
              shift: 14,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-11',
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,11)',
              title: 'Test Features',
              resource: 2,
              shift: 14,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-12',
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Review Code',
              resource: 2,
              shift: 14,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 16,
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Day Shift',
              resource: 2,
              tasks: ['jb-17', 'jb-18', 'jb-19', 'jb-20'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-17',
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,9)',
              title: 'Design Meeting',
              resource: 2,
              shift: 16,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-18',
              start: 'dyndatetime(y,m,d-3,9,15)',
              end: 'dyndatetime(y,m,d-3,11,30)',
              title: 'UI/UX Design',
              resource: 2,
              shift: 16,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-19',
              start: 'dyndatetime(y,m,d-3,12)',
              end: 'dyndatetime(y,m,d-3,13)',
              title: 'Prototyping',
              resource: 2,
              shift: 16,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-20',
              start: 'dyndatetime(y,m,d-3,13)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Feedback Review',
              resource: 2,
              shift: 16,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 17,
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Daily Shift',
              resource: 2,
              tasks: ['jb-21', 'jb-22', 'jb-23', 'jb-24'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-21',
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,10)',
              title: 'Sprint Planning',
              resource: 2,
              shift: 17,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-22',
              start: 'dyndatetime(y,m,d+2,10,15)',
              end: 'dyndatetime(y,m,d+2,12,30)',
              title: 'Feature Development',
              resource: 2,
              shift: 17,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-23',
              start: 'dyndatetime(y,m,d+2,13)',
              end: 'dyndatetime(y,m,d+2,14)',
              title: 'Unit Testing',
              resource: 2,
              shift: 17,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-24',
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Integration Testing',
              resource: 2,
              shift: 17,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 18,
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Flex Shift',
              resource: 2,
              tasks: ['jb-25', 'jb-26', 'jb-27', 'jb-28'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jb-25',
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,11)',
              title: 'Code Review',
              resource: 2,
              shift: 18,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-26',
              start: 'dyndatetime(y,m,d+3,11,15)',
              end: 'dyndatetime(y,m,d+3,13,30)',
              title: 'Refactoring',
              resource: 2,
              shift: 18,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-27',
              start: 'dyndatetime(y,m,d+3,14)',
              end: 'dyndatetime(y,m,d+3,15)',
              title: 'Bug Fixing',
              resource: 2,
              shift: 18,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jb-28',
              start: 'dyndatetime(y,m,d+3,15)',
              end: 'dyndatetime(y,m,d+3,17)',
              title: 'Release Preparation',
              resource: 2,
              shift: 18,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 19,
              start: 'dyndatetime(y,m,d-1,5)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Daily Shift',
              resource: 3,
              tasks: ['ol-4', 'ol-5', 'ol-6'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-4',
              start: 'dyndatetime(y,m,d-1,5)',
              end: 'dyndatetime(y,m,d-1,8)',
              title: 'Wireframe Design',
              resource: 3,
              shift: 19,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-5',
              start: 'dyndatetime(y,m,d-1,8,30)',
              end: 'dyndatetime(y,m,d-1,10)',
              title: 'Usability Testing',
              resource: 3,
              shift: 19,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-6',
              start: 'dyndatetime(y,m,d-1,10,15)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Prototype Development',
              resource: 3,
              shift: 19,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 20,
              start: 'dyndatetime(y,m,d-2,6)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'Daily Shift',
              resource: 3,
              tasks: ['ol-7', 'ol-8', 'ol-9'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-7',
              start: 'dyndatetime(y,m,d-2,6)',
              end: 'dyndatetime(y,m,d-2,9)',
              title: 'Visual Design',
              resource: 3,
              shift: 20,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-8',
              start: 'dyndatetime(y,m,d-2,9,30)',
              end: 'dyndatetime(y,m,d-2,11)',
              title: 'Performance Testing',
              resource: 3,
              shift: 20,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-9',
              start: 'dyndatetime(y,m,d-2,11,15)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'User Feedback Analysis',
              resource: 3,
              shift: 20,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 21,
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,16)',
              title: 'Routine Shift',
              resource: 3,
              tasks: ['ol-10', 'ol-11', 'ol-12'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-10',
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,10)',
              title: 'Graphic Design',
              resource: 3,
              shift: 21,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-11',
              start: 'dyndatetime(y,m,d-3,10,30)',
              end: 'dyndatetime(y,m,d-3,12)',
              title: 'Content Integration',
              resource: 3,
              shift: 21,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-12',
              start: 'dyndatetime(y,m,d-3,12,15)',
              end: 'dyndatetime(y,m,d-3,16)',
              title: 'Client Presentation',
              resource: 3,
              shift: 21,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 22,
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,18)',
              title: 'Daily Shift',
              resource: 3,
              tasks: ['ol-13', 'ol-14', 'ol-15'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-13',
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'UI Component Design',
              resource: 3,
              shift: 22,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-14',
              start: 'dyndatetime(y,m,d+2,12,30)',
              end: 'dyndatetime(y,m,d+2,14)',
              title: 'Integration Testing',
              resource: 3,
              shift: 22,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-15',
              start: 'dyndatetime(y,m,d+2,14,15)',
              end: 'dyndatetime(y,m,d+2,18)',
              title: 'System Optimization',
              resource: 3,
              shift: 22,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 23,
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,19)',
              title: 'Flex Shift',
              resource: 3,
              tasks: ['ol-16', 'ol-17', 'ol-18'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'ol-16',
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,13)',
              title: 'Frontend Development',
              resource: 3,
              shift: 23,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-17',
              start: 'dyndatetime(y,m,d+3,13,30)',
              end: 'dyndatetime(y,m,d+3,15)',
              title: 'Backend Integration',
              resource: 3,
              shift: 23,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'ol-18',
              start: 'dyndatetime(y,m,d+3,15,15)',
              end: 'dyndatetime(y,m,d+3,19)',
              title: 'System Testing',
              resource: 3,
              shift: 23,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 24,
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,12)',
              title: 'Daily Shift',
              resource: 4,
              tasks: ['rt-8', 'rt-9', 'rt-10'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-8',
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 24,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-9',
              start: 'dyndatetime(y,m,d-3,8,15)',
              end: 'dyndatetime(y,m,d-3,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 24,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-10',
              start: 'dyndatetime(y,m,d-3,10)',
              end: 'dyndatetime(y,m,d-3,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 24,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 25,
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,12)',
              title: 'Daily Shift',
              resource: 4,
              tasks: ['rt-11', 'rt-12', 'rt-13'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-11',
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 25,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-12',
              start: 'dyndatetime(y,m,d-2,8,15)',
              end: 'dyndatetime(y,m,d-2,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 25,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-13',
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 25,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 26,
              start: 'dyndatetime(y,m,d-1,7)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Daily Shift',
              resource: 4,
              tasks: ['rt-14', 'rt-15', 'rt-16'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-14',
              start: 'dyndatetime(y,m,d-1,7)',
              end: 'dyndatetime(y,m,d-1,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 26,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-15',
              start: 'dyndatetime(y,m,d-1,8,15)',
              end: 'dyndatetime(y,m,d-1,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 26,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-16',
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 26,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 27,
              start: 'dyndatetime(y,m,d+2,7)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'Flex Shift',
              resource: 4,
              tasks: ['rt-17', 'rt-18', 'rt-19'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-17',
              start: 'dyndatetime(y,m,d+2,7)',
              end: 'dyndatetime(y,m,d+2,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 27,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-18',
              start: 'dyndatetime(y,m,d+2,8,15)',
              end: 'dyndatetime(y,m,d+2,9,30)',
              title: 'Technical Support',
              resource: 4,
              shift: 27,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-19',
              start: 'dyndatetime(y,m,d+2,10)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'Feature Testing',
              resource: 4,
              shift: 27,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 28,
              start: 'dyndatetime(y,m,d+3,7)',
              end: 'dyndatetime(y,m,d+3,12)',
              title: 'Flex Shift',
              resource: 4,
              tasks: ['rt-20', 'rt-21', 'rt-22'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'rt-20',
              start: 'dyndatetime(y,m,d+3,7)',
              end: 'dyndatetime(y,m,d+3,8)',
              title: 'Data Migration',
              resource: 4,
              shift: 28,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-21',
              start: 'dyndatetime(y,m,d+3,8,30)',
              end: 'dyndatetime(y,m,d+3,10)',
              title: 'Data Migration',
              resource: 4,
              shift: 28,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'rt-22',
              start: 'dyndatetime(y,m,d+3,10,15)',
              end: 'dyndatetime(y,m,d+3,12)',
              title: 'Data Migration',
              resource: 4,
              shift: 28,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 29,
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-1', 'jd-2', 'jd-3'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-1',
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,9,45)',
              title: 'Incident Management',
              resource: 5,
              shift: 29,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-2',
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,11,30)',
              title: 'Security Audits',
              resource: 5,
              shift: 29,
              order: 2,
              cssClass: 'mds-task-subtask',
            },

            {
              id: 'jd-3',
              start: 'dyndatetime(y,m,d,12,15)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 29,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 30,
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-4', 'jd-5', 'jd-6'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-4',
              start: 'dyndatetime(y,m,d-3,7)',
              end: 'dyndatetime(y,m,d-3,9,45)',
              title: 'Incident Management',
              resource: 5,
              shift: 30,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-5',
              start: 'dyndatetime(y,m,d-3,10)',
              end: 'dyndatetime(y,m,d-3,11,30)',
              title: 'Log Analysis',
              resource: 5,
              shift: 30,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-6',
              start: 'dyndatetime(y,m,d-3,12,15)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 30,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 31,
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-7', 'jd-8', 'jd-9'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-7',
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,9,45)',
              title: 'Feature Testing',
              resource: 5,
              shift: 31,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-8',
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,11,30)',
              title: 'Log Analysis',
              resource: 5,
              shift: 31,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-9',
              start: 'dyndatetime(y,m,d-2,12,15)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 31,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 32,
              start: 'dyndatetime(y,m,d-1,7)',
              end: 'dyndatetime(y,m,d-1,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-10', 'jd-11', 'jd-12'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-10',
              start: 'dyndatetime(y,m,d-1,7)',
              end: 'dyndatetime(y,m,d-1,9,45)',
              title: 'Incident Management',
              resource: 5,
              shift: 32,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-11',
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,11,30)',
              title: 'Log Analysis',
              resource: 5,
              shift: 32,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-12',
              start: 'dyndatetime(y,m,d-1,12,15)',
              end: 'dyndatetime(y,m,d-1,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 32,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 33,
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-13', 'jd-14', 'jd-15'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-13',
              start: 'dyndatetime(y,m,d+1,7)',
              end: 'dyndatetime(y,m,d+1,9,45)',
              title: 'Data Migration',
              resource: 5,
              shift: 33,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-14',
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,11,30)',
              title: 'Log Analysis',
              resource: 5,
              shift: 33,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-15',
              start: 'dyndatetime(y,m,d+1,12,15)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 33,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 34,
              start: 'dyndatetime(y,m,d+2,7)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-16', 'jd-17', 'jd-18'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-16',
              start: 'dyndatetime(y,m,d+2,7)',
              end: 'dyndatetime(y,m,d+2,9,45)',
              title: 'Incident Management',
              resource: 5,
              shift: 34,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-17',
              start: 'dyndatetime(y,m,d+2,10)',
              end: 'dyndatetime(y,m,d+2,11,30)',
              title: 'Log Analysis',
              resource: 5,
              shift: 34,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-18',
              start: 'dyndatetime(y,m,d+2,12,15)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 34,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 35,
              start: 'dyndatetime(y,m,d+3,7)',
              end: 'dyndatetime(y,m,d+3,15)',
              title: 'Daily Shift',
              resource: 5,
              tasks: ['jd-19', 'jd-20', 'jd-21'],
              order: 1,
              color: '#513737',
              cssClass: 'mds-task-shift',
            },
            {
              id: 'jd-19',
              start: 'dyndatetime(y,m,d+3,7)',
              end: 'dyndatetime(y,m,d+3,9,45)',
              title: 'Data Migration',
              resource: 5,
              shift: 35,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-20',
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,11,30)',
              title: 'Security Audits',
              resource: 5,
              shift: 35,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            {
              id: 'jd-21',
              start: 'dyndatetime(y,m,d+3,12,15)',
              end: 'dyndatetime(y,m,d+3,15)',
              title: 'Technical Support',
              resource: 5,
              shift: 35,
              order: 2,
              cssClass: 'mds-task-subtask',
            },
            //</hidden>
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

            {
              id: 5,
              color: '#F58585',
              name: 'John Doe',
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
.mds-task-shift {
  height: 30px;
}

.mds-task-subtask {
  height: 40px;
}

.mds-task-subtask .mbsc-schedule-event-range,
.mds-task-subtask .mbsc-schedule-event-title  {
  font-size: 10px;
  line-height: 13px;
}

.mds-task-shift .mbsc-schedule-event-range,
.mds-task-shift .mbsc-schedule-event-title {
  display: inline-block;
  margin: 0 4px;
}

.mds-task-hours {
  font-size: 10px;
  font-weight: 400;
}

.mds-task-blocked.mbsc-schedule-invalid {
  text-align: center;
  align-items: center;
  font-weight: bold;
  background: repeating-linear-gradient(-45deg, #f3f3f3, #f3f3f3 11px, #e5e5e5 11px, #e5e5e5 22px);
}

/*<hidden>*/

.demo-tasks-subtasks-under-shifts {
    height: 100%;
}

/*</hidden>*/
   `,
};
