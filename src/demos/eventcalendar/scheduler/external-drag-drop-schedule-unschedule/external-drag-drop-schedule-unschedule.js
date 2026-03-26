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
      var $externalCont = $('#external-drop-cont');

      var myCalendar = $('#external-drop-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            scheduler: { type: 'week' },
          },
          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          onEventCreate: function (args) {
            $('#md-event-' + args.event.id).remove();
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
          },
          onEventDelete: function (args) {
            mobiscroll.toast({
              // context,
              message: args.event.title + ' unscheduled',
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
              '" class="external-drop-task" style="background: ' +
              event.color +
              ';">' +
              '<div>' +
              event.title +
              '</div>' +
              '<div>' +
              eventLength +
              ' hour' +
              (eventLength > 1 ? 's' : '') +
              '</div>' +
              '</div>';

            $('#md-task-cont').append(elm);
            $('#md-event-' + event.id)
              .mobiscroll()
              .draggable({
                dragData: event,
              });
          }
        },
      });

      $.getJSON('https://trial.mobiscroll.com/drag-drop-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-drop-calendar">
            <div id="external-drop-calendar"></div>
        </div>
        <div id="external-drop-cont" class="mbsc-col-sm-3 external-drop-cont">
            <div class="mbsc-form-group-title">Available tasks</div>
            <div id="md-task-cont">
                <div id="md-event-1" mbsc-draggable data-drag-data='{"id": "1", "title": "Product team meeting", "start": "08:00", "end": "09:30", "color": "#cf4343"}' class="external-drop-task" style="background: #cf4343;">
                    <div>Product team meeting</div>
                    <div>1.5 hours</div>
                </div>

                <div id="md-event-2" mbsc-draggable data-drag-data='{"id": "2", "title": "General orientation", "start": "08:00", "end": "10:00", "color": "#e49516"}' class="external-drop-task" style="background: #e49516;">
                    <div>General orientation</div>
                    <div>2 hours</div>
                </div>

                <div id="md-event-3" mbsc-draggable data-drag-data='{"id": "3", "title": "Client Training", "start": "10:00", "end": "14:00", "color": "#8c429f"}' class="external-drop-task" style="background: #8c429f;">
                    <div>Client Training</div>
                    <div>4 hours</div>
                </div>

                <div id="md-event-4" mbsc-draggable data-drag-data='{"id": "4", "title": "CEO Conference", "start": "12:00", "end": "18:00", "color": "#63b548"}' class="external-drop-task" style="background: #63b548;">
                    <div>CEO Conference</div>
                    <div>6 hours</div>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.external-drop-calendar {
    border-right: 1px solid #ccc;
}

.external-drop-cont {
    height: 100%;
    overflow: auto;
}

.external-drop-task {
    color: #fff;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.external-drop-task {
    background: #999;
}

.demo-external-drag-drop-schedule-unschedule.demo-wrapper,
.demo-external-drag-drop-schedule-unschedule .mbsc-grid,
.demo-external-drag-drop-schedule-unschedule .mbsc-row,
.demo-external-drag-drop-schedule-unschedule .external-drop-calendar {
    height: 100%;
}
  `,
};
