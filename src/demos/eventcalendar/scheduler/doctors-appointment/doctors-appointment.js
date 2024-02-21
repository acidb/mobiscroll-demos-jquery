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
      var $externalCont = $('#md-docs-appointment-cont');
      var now = new Date();
      var today = new Date(now.setMinutes(59));
      var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

      var myData = [
        {
          id: 'job1',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,16)',
          resource: 1,
          title: 'Myla Bennett',
          job: 'Wisdom tooth removal',
          color: '#334ab9',
        },
        {
          id: 'job2',
          start: 'dyndatetime(y,m,d,17)',
          end: 'dyndatetime(y,m,d,18,30)',
          resource: 1,
          title: 'Beatrix Foley',
          job: 'Braces',
          color: '#177e70',
        },
        {
          id: 'job3',
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,9,30)',
          resource: 3,
          title: 'Frank Watson',
          job: 'Teeth whitening',
          color: '#d1891f',
        },
        {
          id: 'job4',
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,12,30)',
          resource: 3,
          title: 'Jaime Joyce',
          job: 'Root canal treatment',
          color: '#cb3939',
        },
        {
          id: 'job5',
          start: 'dyndatetime(y,m,d,13)',
          end: 'dyndatetime(y,m,d,14)',
          resource: 3,
          title: 'Corey Shepard',
          job: 'Tooth extraction',
          color: '#aba343',
        },
        {
          id: 'job6',
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,16)',
          resource: 4,
          title: 'Callie Leonard',
          job: 'Crown and bridge',
          color: '#1ca11a',
        },
        {
          id: 'job7',
          start: 'dyndatetime(y,m,d,17)',
          end: 'dyndatetime(y,m,d,18)',
          resource: 4,
          title: 'Harley Thomson',
          job: 'Tartar removal',
          color: '#a446b5',
        },
        {
          id: 'job8',
          start: 'dyndatetime(y,m,d,9)',
          end: 'dyndatetime(y,m,d,11)',
          resource: 6,
          title: 'Ricky Welch',
          job: 'Wisdom tooth removal',
          color: '#334ab9',
        },
      ];

      for (var i = 0; i < myData.length; ++i) {
        var event = myData[i];
        // convert dates to date objects
        event.start = event.start ? new Date(event.start) : event.start;
        event.end = event.end ? new Date(event.end) : event.end;
        // mark past events as fixed by setting the event.editable property to false
        event.editable = event.start && today < event.start;
      }

      var myCalendar = $('#md-docs-appointment-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: {
              type: 'day',
              startTime: '08:00',
              endTime: '20:00',
              allDay: false,
            },
          },
          data: myData,
          resources: [
            {
              id: 1,
              name: 'Dr. Keila Delores',
            },
            {
              id: 2,
              name: 'Dr. Gene Cortez',
            },
            {
              id: 3,
              name: 'Dr. Paula Bush',
            },
            {
              id: 4,
              name: 'Dr. Pete Nichols',
            },
            {
              id: 5,
              name: 'Dr. Jean Pearson',
            },
            {
              id: 6,
              name: 'Dr. Thelma Cain',
            },
          ],
          invalid: [
            {
              recurring: {
                repeat: 'daily',
                until: yesterday,
              },
            },
            {
              start: yesterday,
              end: today,
            },
          ],
          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          eventOverlap: false,
          extendDefaultEvent: function () {
            return {
              job: 'Tartar removal',
              color: '#a446b5',
            };
          },
          onEventCreate: function (args) {
            var event = args.event;
            event.unscheduled = false;
            myCalendar.setOptions({
              colors: [],
            });
          },
          onEventCreated: function (args) {
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
            $('#md-event-' + args.event.id).remove();
          },
          onEventCreateFailed: function (args) {
            if (!(today < args.event.start)) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: "Can't add event in the past",
              });
            } else {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Make sure not to double book',
              });
            }
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: 'Make sure not to double book',
            });
          },
          onEventDelete: function (args) {
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: args.event.title + ' unscheduled',
            });
          },
          onEventDragEnter: function () {
            myCalendar.setOptions({
              colors: [
                {
                  background: '#f1fff24d',
                  start: '08:00',
                  end: '20:00',
                  recurring: {
                    repeat: 'daily',
                  },
                },
              ],
            });
          },
          onEventDragLeave: function () {
            myCalendar.setOptions({
              colors: [],
            });
          },
        })
        .mobiscroll('getInst');

      $externalCont.mobiscroll().dropcontainer({
        onItemDrop: function (args) {
          if (args.data) {
            var event = args.data;
            var eventLength = Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000);
            var elm =
              '<div id="md-event-' +
              event.id +
              '" class="docs-appointment-task" style="background: ' +
              event.color +
              ';">' +
              '<div>' +
              event.title +
              ' - ' +
              event.job +
              '</div>' +
              '<div>' +
              eventLength +
              ' hour' +
              (eventLength > 1 ? 's' : '') +
              '</div>' +
              '</div>';

            event.unscheduled = true;

            $('#md-docs-tasks').append(elm);
            $('#md-event-' + event.id)
              .mobiscroll()
              .draggable({
                dragData: event,
              });
          }
          $externalCont.css('background', '');
        },
        onItemDragEnter: function (args) {
          if (!(args.data && args.data.unscheduled)) {
            $externalCont.css('background', '#d0e7d2cc');
          }
        },
        onItemDragLeave: function () {
          $externalCont.css('background', '');
        },
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 docs-appointment-calendar">
            <div id="md-docs-appointment-calendar"></div>
        </div>
        <div id="md-docs-appointment-cont" class="mbsc-col-sm-3 docs-appointment-cont">
            <div class="mbsc-form-group-title">Unscheduled appointments</div>
            <div id="md-docs-tasks">
                <div id="md-event-1" mbsc-draggable data-drag-data='{"id": "1", "title": "Winfred Lesley", "job": "Teeth whitening", "start": "08:00", "end": "09:30", "color": "#d1891f", "unscheduled": "true"}' class="docs-appointment-task" style="background: #d1891f;">
                    <div>Winfred Lesley - Teeth whitening</div>
                    <div>1.5 hours</div>
                </div>
                <div id="md-event-2" mbsc-draggable data-drag-data='{"id": "2", "title": "Rosalin Delice", "job": "Crown and bridge", "start": "08:00", "end": "10:00", "color": "#1ca11a", "unscheduled": "true"}' class="docs-appointment-task" style="background: #1ca11a;">
                    <div>Rosalin Delice - Crown and bridge</div>
                    <div>2 hours</div>
                </div>
                <div id="md-event-3" mbsc-draggable data-drag-data='{"id": "3", "title": "Macy Steven", "job": "Root canal treatment", "start": "10:00", "end": "12:30", "color": "#cb3939", "unscheduled": "true"}' class="docs-appointment-task" style="background: #cb3939;">
                    <div>Macy Steven - Root canal treatment</div>
                    <div>2.5 hours</div>
                </div>
                <div id="md-event-4" mbsc-draggable data-drag-data='{"id": "4", "title": "Lavern Cameron", "job": "Tartar removal", "start": "12:00", "end": "13:00", "color": "#a446b5", "unscheduled": "true"}' class="docs-appointment-task" style="background: #a446b5;">
                    <div>Lavern Cameron - Tartar removal</div>
                    <div>1 hour</div>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.docs-appointment-calendar {
    border-right: 1px solid #ccc;
}

.docs-appointment-calendar .mbsc-readonly-event {
    opacity: .6;
}

.docs-appointment-cont {
    height: 100%;
    overflow: auto;
}

.docs-appointment-task {
    color: #fff;
    background: #999;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.demo-doctors-appointment.demo-wrapper,
.demo-doctors-appointment .mbsc-grid,
.demo-doctors-appointment .mbsc-row,
.demo-doctors-appointment .docs-appointment-calendar {
    height: 100%;
}
  `,
};
