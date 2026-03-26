import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import { dyndatetime } from '../../../../dyndatetime';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var shifts = {
      morning: { startHour: 6, endHour: 14, title: 'Morning Shift', color: '#4a8c4d' },
      afternoon: { startHour: 14, endHour: 22, title: 'Afternoon Shift', color: '#f87c6b' },
      night: { startHour: 22, endHour: 6, nextDay: true, title: 'Night Shift', color: '#8567AD' },
    };

    function getShiftByHour(hour) {
      if (hour >= 6 && hour < 14) {
        return shifts.morning;
      }
      if (hour >= 14 && hour < 22) {
        return shifts.afternoon;
      }
      if (hour >= 22 || hour < 6) {
        return shifts.night;
      }
      return shifts.afternoon;
    }

    function calculateStart(start) {
      var d = new Date(start);
      var originalHour = d.getHours();
      var shift = getShiftByHour(originalHour);
      d.setHours(shift.startHour, 0, 0, 0);
      if (shift.startHour === 22 && originalHour < 6) {
        d.setDate(d.getDate() - 1);
      }
      return d;
    }

    function calculateEnd(start) {
      var d = new Date(start);
      var startHour = d.getHours();
      var shift = getShiftByHour(d.getHours());
      d.setHours(shift.endHour, 0, 0, 0);
      if (shift.nextDay && startHour === 22) {
        d.setDate(d.getDate() + 1);
      }
      return d;
    }

    function getTitle(startHours) {
      return getShiftByHour(startHours).title;
    }

    function getColor(startHours) {
      return getShiftByHour(startHours).color;
    }

    var morningColor = '#4a8c4d';
    var afternoonColor = '#f87c6b';
    var nightColor = '#8567AD';

    $(function () {
      var draggedEventStart;
      var draggedEventEnd;
      var draggedEventResource;
      var availableSlotOnHover;
      var redResources = {};
      var currentColors = [];

      function getAvailableSlots(inst, resourceId, dayStart) {
        var dayEnd = new Date(dayStart);
        dayEnd.setDate(dayEnd.getDate() + 1);
        dayEnd.setHours(6, 0, 0, 0);
        var dayEvents = inst.getEvents(dayStart, dayEnd);
        var slots = { morning: true, afternoon: true, night: true };
        dayEvents.forEach(function (e) {
          if (e.resource === resourceId) {
            slots.morning = slots.afternoon = slots.night = false;
          } else {
            var startHour = new Date(e.start).getHours();
            if (startHour === 6) {
              slots.morning = false;
            } else if (startHour === 14) {
              slots.afternoon = false;
            } else if (startHour === 22) {
              slots.night = false;
            }
          }
        });
        return slots;
      }

      function clearColorsForResource(currentColors, resourceId, date) {
        var base = new Date(date);
        base.setHours(0, 0, 0, 0);
        var baseTime = +base;
        return currentColors.filter(function (c) {
          if (c.resource === resourceId) {
            var cDate = new Date(c.start);
            cDate.setHours(0, 0, 0, 0);
            if (+cDate === baseTime) {
              var hour = new Date(c.start).getHours();
              if (hour === 6 || hour === 14 || hour === 22) {
                return false;
              }
            }
          }
          return true;
        });
      }
      $('#demo-24-hour-manufacturing-shift-rota-planning')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-24-hour-manufacturing-calendar',
          data: [
            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-6,6'), end: dyndatetime('y,m,d-6,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-6,14'),
              end: dyndatetime('y,m,d-6,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-6,22'), end: dyndatetime('y,m,d-5,6'), color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-5,6'), end: dyndatetime('y,m,d-5,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-5,14'),
              end: dyndatetime('y,m,d-5,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-5,22'), end: dyndatetime('y,m,d-4,6'), color: nightColor },
            //<hide-comment>
            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d-4,6'), end: dyndatetime('y,m,d-4,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-4,14'),
              end: dyndatetime('y,m,d-4,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d-4,22'), end: dyndatetime('y,m,d-3,6'), color: nightColor },

            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-3,6'), end: dyndatetime('y,m,d-3,14'), color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-3,14'),
              end: dyndatetime('y,m,d-3,22'),
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-3,22'), end: dyndatetime('y,m,d-2,6'), color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-2,6'), end: dyndatetime('y,m,d-2,14'), color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-2,14'),
              end: dyndatetime('y,m,d-2,22'),
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-2,22'), end: dyndatetime('y,m,d-1,6'), color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d-1,6'), end: dyndatetime('y,m,d-1,14'), color: morningColor },
            {
              resource: 'A',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d-1,14'),
              end: dyndatetime('y,m,d-1,22'),
              color: afternoonColor,
            },
            { resource: 'B', title: 'Night Shift', start: dyndatetime('y,m,d-1,22'), end: dyndatetime('y,m,d,6'), color: nightColor },

            { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d,6'), end: dyndatetime('y,m,d,14'), color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d,14'),
              end: dyndatetime('y,m,d,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d,22'), end: dyndatetime('y,m,d+1,6'), color: nightColor },
            { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+1,6'), end: dyndatetime('y,m,d+1,14'), color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+1,14'),
              end: dyndatetime('y,m,d+1,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+1,22'), end: dyndatetime('y,m,d+2,6'), color: nightColor },
            { resource: 'B', title: 'Morning Shift', start: dyndatetime('y,m,d+2,6'), end: dyndatetime('y,m,d+2,14'), color: morningColor },
            {
              resource: 'C',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+2,14'),
              end: dyndatetime('y,m,d+2,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+2,22'), end: dyndatetime('y,m,d+3,6'), color: nightColor },

            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+3,6'), end: dyndatetime('y,m,d+3,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+3,14'),
              end: dyndatetime('y,m,d+3,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+3,22'), end: dyndatetime('y,m,d+4,6'), color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+4,6'), end: dyndatetime('y,m,d+4,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+4,14'),
              end: dyndatetime('y,m,d+4,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+4,22'), end: dyndatetime('y,m,d+5,6'), color: nightColor },
            { resource: 'A', title: 'Morning Shift', start: dyndatetime('y,m,d+5,6'), end: dyndatetime('y,m,d+5,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+5,14'),
              end: dyndatetime('y,m,d+5,22'),
              color: afternoonColor,
            },
            { resource: 'C', title: 'Night Shift', start: dyndatetime('y,m,d+5,22'), end: dyndatetime('y,m,d+6,6'), color: nightColor },

            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+6,6'), end: dyndatetime('y,m,d+6,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+6,14'),
              end: dyndatetime('y,m,d+6,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+6,22'), end: dyndatetime('y,m,d+7,6'), color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+7,6'), end: dyndatetime('y,m,d+7,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+7,14'),
              end: dyndatetime('y,m,d+7,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+7,22'), end: dyndatetime('y,m,d+8,6'), color: nightColor },
            { resource: 'C', title: 'Morning Shift', start: dyndatetime('y,m,d+8,6'), end: dyndatetime('y,m,d+8,14'), color: morningColor },
            {
              resource: 'B',
              title: 'Afternoon Shift',
              start: dyndatetime('y,m,d+8,14'),
              end: dyndatetime('y,m,d+8,22'),
              color: afternoonColor,
            },
            { resource: 'A', title: 'Night Shift', start: dyndatetime('y,m,d+8,22'), end: dyndatetime('y,m,d+9,6'), color: nightColor },
            //</hide-comment>
          ],
          dragToMove: true,
          dragToCreate: false,
          clickToCreate: 'single',
          dragToResize: false,
          dragTimeStep: 480,
          dragTimeStepBase: 'viewStart',
          eventDelete: true,
          eventOverlap: false,
          extendDefaultEvent: function (args) {
            var start = new Date(args.start);
            var newStart = calculateStart(start);
            var newEnd = calculateEnd(start);
            var title = getTitle(newStart.getHours());
            var color = getColor(newStart.getHours());
            return {
              title: title,
              start: newStart,
              end: newEnd,
              color: color,
            };
          },
          onCellHoverIn: function (args, inst) {
            var hoveredDate = new Date(args.date);
            var shift = getShiftByHour(hoveredDate.getHours());
            if (!shift) {
              return;
            }

            var dayStart = new Date(args.date);
            dayStart.setHours(6, 0, 0, 0);
            var availableSlots = getAvailableSlots(inst, args.resource.id, dayStart);
            var slotKey = Object.keys(availableSlots).find(function (key) {
              return availableSlots[key] && shifts[key].startHour === shift.startHour;
            });
            if (slotKey) {
              var startTime = new Date(dayStart);
              startTime.setHours(shifts[slotKey].startHour, 0, 0, 0);
              var endTime = new Date(+startTime + 8 * 60 * 60 * 1000 - 1);
              availableSlotOnHover = {
                background: '#c1ffe180',
                cssClass: 'available-slot mbsc-font-icon mbsc-icon-plus',
                start: +startTime + 1,
                end: endTime,
                resource: args.resource.id,
              };
              currentColors = [].concat(currentColors, [availableSlotOnHover]);
              inst.setOptions({ colors: currentColors });
            }
          },
          onCellHoverOut: function (args, inst) {
            currentColors = currentColors.filter(function (c) {
              return availableSlotOnHover !== c;
            });
            inst.setOptions({ colors: currentColors });
            availableSlotOnHover = null;
          },
          onEventCreate: function (args, inst) {
            var event = args.event;
            var dayStart = new Date(event.start);
            dayStart.setHours(6, 0, 0, 0);
            var dayEnd = new Date(dayStart);
            dayEnd.setDate(dayEnd.getDate() + 1);
            dayEnd.setHours(6, 0, 0, 0);
            var dayEvents = inst.getEvents(dayStart, dayEnd);
            var conflict = dayEvents.find(function (ev) {
              return ev.resource === event.resource || +new Date(ev.start) === +new Date(event.start);
            });
            if (conflict) {
              mobiscroll.toast({ message: 'Already assigned' });
              return false;
            }
            currentColors = clearColorsForResource(currentColors, event.resource, event.start);
            var day = new Date(event.start);
            day.setHours(0, 0, 0, 0);
            redResources[event.resource + day.toISOString()] = false;
            inst.setOptions({ colors: currentColors });
            availableSlotOnHover = null;
          },
          onEventClick: function () {
            mobiscroll.toast({
              // context,
              message: 'Already assigned',
            });
          },
          onEventDelete: function (args, inst) {
            var colorStart = new Date(args.event.start);
            colorStart.setHours(6, 0, 0, 0);
            var colorEnd = new Date(args.event.start);
            var colorEndDate = colorEnd.getDate();
            colorEnd.setDate(colorEndDate + 1);
            colorEnd.setHours(6, 0, 0, 0);

            if (currentColors.length) {
              currentColors.push({ start: colorStart, end: colorEnd, background: '#ffdbd280', resource: args.event.resource });
            } else {
              currentColors = [{ start: colorStart, end: colorEnd, background: '#ffdbd280', resource: args.event.resource }];
            }
            var resource = args.event.resource;
            var day = new Date(args.event.start);
            day.setHours(0, 0, 0, 0);
            redResources[resource + day.toISOString()] = true;
            inst.setOptions({
              colors: currentColors,
            });
            mobiscroll.toast({
              // context,
              message: args.event.title + ' deleted',
            });
          },
          onEventDragStart: function (args) {
            draggedEventStart = args.event.start;
            draggedEventEnd = args.event.end;
            draggedEventResource = args.event.resource;
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              // context,
              message: 'Already assigned',
            });
          },
          onEventUpdate: function (args, inst) {
            var event = args.event;
            var dayStart = new Date(event.start);
            dayStart.setHours(6, 0, 0, 0);
            var dragStartDay = new Date(draggedEventStart);
            dragStartDay.setHours(6, 0, 0, 0);
            if (+dayStart !== +dragStartDay) {
              return false;
            }

            var dayEvents = inst.getEvents(dayStart);
            var conflicts = dayEvents.filter(function (ev) {
              return ev.id !== event.id && (ev.resource === event.resource || +new Date(ev.start) === +new Date(event.start));
            });
            var evStart = new Date(event.start);
            event.title = getTitle(evStart.getHours());
            event.color = getColor(evStart.getHours());

            if (conflicts.length) {
              var shouldReturn = false;
              conflicts.forEach(function (sh, i) {
                if (sh.resource === event.resource) {
                  if (+event.start === +new Date(sh.start)) {
                    shouldReturn = true;
                  }
                  sh.resource = draggedEventResource;
                  conflicts[i] = sh;
                } else {
                  sh.start = draggedEventStart;
                  sh.end = draggedEventEnd;
                  var start = new Date(draggedEventStart);
                  sh.title = getTitle(start.getHours());
                  sh.color = getColor(start.getHours());
                  conflicts[i] = sh;
                }
              });
              if (shouldReturn) {
                return false;
              }
              inst.updateEvent([].concat(conflicts, [event]));
            } else {
              if (
                dayEvents.some(function (ev) {
                  return ev.id === event.id;
                })
              ) {
                inst.updateEvent([event]);
              }
            }

            currentColors = clearColorsForResource(currentColors, event.resource, event.start);
            var day = new Date(event.start);
            day.setHours(0, 0, 0, 0);
            redResources[event.resource + day.toISOString()] = false;
            if (!conflicts.length && event.resource !== draggedEventResource) {
              var colorEnd = new Date(dayStart);
              colorEnd.setDate(colorEnd.getDate() + 1);
              colorEnd.setHours(6, 0, 0, 0);
              currentColors.push({ start: dayStart, resource: args.oldEvent.resource, background: '#ffdbd280', end: colorEnd });
              redResources[args.oldEvent.resource + day.toISOString()] = true;
            }
            inst.setOptions({ colors: currentColors });
            draggedEventStart = null;
            draggedEventEnd = null;
            draggedEventResource = null;
          },
          groupBy: 'date',
          resources: [
            { id: 'A', name: 'Crew A' },
            { id: 'B', name: 'Crew B' },
            { id: 'C', name: 'Crew C' },
          ],
          renderResource: function (res, day) {
            var style = redResources[res.id + day.toISOString()]
              ? ' style="color: #53000080; background: #ffdbd280; margin: -0.5em; padding: 0.5em"'
              : '';
            return '<div' + style + '>' + res.name + '</div>';
          },
          view: {
            scheduler: {
              type: 'week',
              allDay: false,
              startTime: '06:00',
              endTime: '06:00+1',
              timeCellStep: 120,
              timeLabelStep: 120,
            },
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-24-hour-manufacturing-shift-rota-planning"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-24-hour-manufacturing-calendar .mbsc-schedule-events {
  left: 0;
  right: 0;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-time-wrapper {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-item {
  height: 2.5em;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot {
  z-index: auto;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot .mbsc-schedule-color-text {
  position: absolute; 
  z-index: 1;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #33333380, #00000080);
  box-sizing: border-box;
}

.mds-24-hour-manufacturing-calendar .mbsc-schedule-color.available-slot.mbsc-font-icon:before {
  position: absolute;
  z-index: 2;
  pointer-events: none;
  top: 50%;
  left: 50%;
  color: #e0fff0;
  font-size: 12px;
  opacity: 0.8;
  transform: translate(-50%, -50%);
}
  `,
};
