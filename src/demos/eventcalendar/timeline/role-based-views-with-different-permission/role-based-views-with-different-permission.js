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
      var user = { id: 2, name: 'Willis Cane', role: 'limited' };

      /* Other user examples
      var user = { name: 'Client', role: 'readonly' };
      var user = { name: 'Project Manager', role: 'full' }; */

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Task 1',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,14)',
          end: 'dyndatetime(y,m,d-1,17)',
          title: 'Task 2',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,14)',
          title: 'Task 3',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Task 4',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Task 5',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,17)',
          title: 'Task 6',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Task 7',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d,17)',
          end: 'dyndatetime(y,m,d,20)',
          title: 'Task 8',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,11,30)',
          title: 'Task 9',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Task 10',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Task 11',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Task 12',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d,16,30)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Task 13',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,14)',
          title: 'Task 14',
          resource: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,20)',
          title: 'Task 15',
          resource: 5,
        },
      ];

      var myResources = [
        { id: 1, name: 'Jude Chester', color: '#af2ec3' },
        { id: 2, name: 'Willis Cane', color: '#cccc39' },
        { id: 3, name: 'Derek Austyn', color: '#56ca2c' },
        { id: 4, name: 'Merv Kenny', color: '#af2424' },
        { id: 5, name: 'Fred Waldez', color: '#256ebc' },
      ];

      var myCalendar = $('#demo-role-based-views-with-different-permission')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              startTime: '08:00',
              endTime: '20:00',
            },
          },
          data: myEvents,
          resources: myResources,
        })
        .mobiscroll('getInst');

      // Simulate login
      function login() {
        var newTasks = $.extend(true, [], myEvents);
        var newResources = $.extend(true, [], myResources);
        var editable = user.role != 'readonly';
        var defaultColor = '';
        var task;
        var i;

        if (user.role === 'readonly') {
          for (i = 0; i < newTasks.length; i++) {
            task = newTasks[i];

            task.editable = false;
            task.color = '#af2ec3';
          }

          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'Client with read-only access logged in',
          });
        } else if (user.role === 'limited') {
          defaultColor = '#af2424';
          for (i = 0; i < newTasks.length; i++) {
            task = newTasks[i];

            if (task.resource !== user.id) {
              task.editable = false;
              task.color = '#6a6a6a';
            } else {
              task.color = '#af2424';
            }
          }

          for (i = 0; i < newResources.length; i++) {
            var res = newResources[i];

            if (res.id !== user.id) {
              res.eventCreation = false;
            }
          }

          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'User ' + user.name + ' with limited access logged in',
          });
        } else {
          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'User with full access logged in',
          });
        }

        myCalendar.setOptions({
          data: newTasks,
          resources: newResources,
          clickToCreate: editable,
          dragToCreate: editable,
          dragToMove: editable,
          dragToResize: editable,
          eventDelete: editable,
          extendDefaultEvent: function () {
            return {
              color: defaultColor,
            };
          },
        });
      }

      login();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-role-based-views-with-different-permission" class="mds-role-based-timeline"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-role-based-timeline .mbsc-schedule-event:not(.mbsc-readonly-event) .mbsc-schedule-event-background {
  border: 2px solid currentColor;
}

.mds-role-based-timeline .mbsc-schedule-event .mbsc-schedule-event-background::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, .6);
}
  `,
};
