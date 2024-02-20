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
      var hwInvalids = [
        {
          recurring: {
            repeat: 'daily',
          },
          resource: ['res4', 'res5', 'res6'],
        },
      ];
      var swInvalids = [
        {
          recurring: {
            repeat: 'daily',
          },
          resource: ['res1', 'res2', 'res3'],
        },
      ];
      var hwColors = [
        {
          recurring: {
            repeat: 'daily',
          },
          resource: ['res1', 'res2', 'res3'],
          background: '#1ad4041a',
        },
      ];
      var swColors = [
        {
          recurring: {
            repeat: 'daily',
          },
          resource: ['res4', 'res5', 'res6'],
          background: '#1ad4041a',
        },
      ];

      $('#demo-dynamically-color-and-invalidate')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          externalDrop: true,
          view: {
            timeline: { type: 'day' },
          },
          extendDefaultEvent: function (event) {
            var res = event.resource;

            if (res) {
              if (res === 'res1' || res === 'res2' || res === 'res3') {
                return {
                  category: 'hw',
                };
              } else {
                return {
                  category: 'sw',
                };
              }
            }
          },
          onEventDragStart: function (args, inst) {
            var event = args.event;

            if (event) {
              event = event.original || event;

              if (event.category === 'hw') {
                inst.setOptions({
                  invalid: hwInvalids,
                  colors: hwColors,
                });
              } else {
                inst.setOptions({
                  invalid: swInvalids,
                  colors: swColors,
                });
              }
            }
          },
          onEventDragEnd: function (args, inst) {
            inst.setOptions({
              invalid: [],
              colors: [],
            });
          },
          onEventCreated: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Event created',
            });
          },
          onEventUpdated: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Event moved',
            });
          },
          onEventCreateFailed: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "Can't create event",
            });
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: "Can't move event",
            });
          },
          resources: [
            {
              id: 'hwt',
              name: 'HW Team',
              eventCreation: false,
              children: [
                {
                  id: 'res1',
                  name: 'Resource 1',
                  color: '#0e9ea5',
                },
                {
                  id: 'res2',
                  name: 'Resource 2',
                  color: '#0e9ea5',
                },
                {
                  id: 'res3',
                  name: 'Resource 3',
                  color: '#0e9ea5',
                },
              ],
            },
            {
              id: 'swt',
              name: 'SW Team',
              eventCreation: false,
              children: [
                {
                  id: 'res4',
                  name: 'Resource 4',
                  color: '#c3b726',
                },
                {
                  id: 'res5',
                  name: 'Resource 5',
                  color: '#c3b726',
                },
                {
                  id: 'res6',
                  name: 'Resource 6',
                  color: '#c3b726',
                },
              ],
            },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div mbsc-page class="md-dynamically-color-and-invalidate">
    <!--/hidden-->
    <div class="mbsc-grid mbsc-no-padding">
        <div class="mbsc-row">
            <div class="mbsc-col-sm-3">
                <div class="mbsc-form-group-title">Available tasks</div>
                <div mbsc-draggable data-drag-data='{"title": "Task 1", "start": "08:00", "end": "12:00", "color": "#0e9ea5", "category": "hw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 1<span class="dynamically-color-and-invalidate-task-type">HW</span></div>
                </div>

                <div mbsc-draggable data-drag-data='{"title": "Task 2", "start": "08:00", "end": "12:00", "color": "#0e9ea5", "category": "hw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 2<span class="dynamically-color-and-invalidate-task-type">HW</span></div>
                </div>

                <div mbsc-draggable data-drag-data='{"title": "Task 3", "start": "08:00", "end": "12:00", "color": "#0e9ea5", "category": "hw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 3<span class="dynamically-color-and-invalidate-task-type">HW</span></div>
                </div>

                <div mbsc-draggable data-drag-data='{"title": "Task 4", "start": "08:00", "end": "12:00", "color": "#c3b726", "category": "sw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 4<span class="dynamically-color-and-invalidate-task-type">SW</span></div>
                </div>

                <div mbsc-draggable data-drag-data='{"title": "Task 5", "start": "08:00", "end": "12:00", "color": "#c3b726", "category": "sw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 5<span class="dynamically-color-and-invalidate-task-type">SW</span></div>
                </div>

                <div mbsc-draggable data-drag-data='{"title": "Task 6", "start": "08:00", "end": "12:00", "color": "#c3b726", "category": "sw"}' class="dynamically-color-and-invalidate-task">
                    <div>Task 6<span class="dynamically-color-and-invalidate-task-type">SW</span></div>
                </div>
            </div>
            <div class="mbsc-col-sm-9 dynamically-color-and-invalidate-calendar">
                <div id="demo-dynamically-color-and-invalidate"></div>
            </div>
        </div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.dynamically-color-and-invalidate-calendar {
    border-left: 1px solid #ccc;
}

.dynamically-color-and-invalidate-task {
    border: 2px solid #888;
    color: #666;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.dynamically-color-and-invalidate-task-type {
    float: right;
    margin-left: 30px;
    text-transform: uppercase;
}

.dynamically-color-and-invalidate-calendar .mbsc-timeline-parent {
    height: 32px;
}

/*<hidden>*/

.md-dynamically-color-and-invalidate,
.md-dynamically-color-and-invalidate .mbsc-grid,
.md-dynamically-color-and-invalidate .mbsc-row {
    height: 100%;
}

/*</hidden>*/
  `,
};
