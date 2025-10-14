import * as mobiscroll from '@mobiscroll/jquery';
import dragula from 'dragula';
import $ from 'jquery';
import Sortable from 'sortablejs';

import 'dragula/dist/dragula.css';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var draggedTask;
    var $externalCont = $('#external-drop-cont');

    function addToExternalList(args) {
      var afterElement = args.afterElement;
      var dragData = args.dragData;
      var eventLength = Math.abs(Math.abs(new Date(dragData.end).getTime() - new Date(dragData.start).getTime()) / (60 * 60 * 1000));
      var newItem = document.createElement('div');
      newItem.className = 'mds-drag-drop-sort-task';
      newItem.style.background = dragData.color || '';
      newItem.setAttribute('data-drag-data', JSON.stringify(dragData));
      newItem.innerHTML = '<div>' + dragData.title + '</div><div>' + eventLength + ' hour' + (eventLength > 1 ? 's' : '') + '</div>';
      args.container.insertBefore(newItem, afterElement || null);
    }

    $(function () {
      var myCalendar = $('#demo-drag-drop-sortable-dragula')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: { type: 'week' },
          },
          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          onEventCreated: function (args) {
            if (draggedTask && args.action === 'externalDrop') {
              draggedTask.remove();
            }
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
            $('#mds-event-' + args.event.id).remove();
          },
          onEventDeleted: function (args) {
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
            var eventLength = Math.round(Math.abs(new Date(event.end) - new Date(event.start)) / (60 * 60 * 1000));
            var elm =
              '<div id="mds-event-' +
              event.id +
              '" class="mds-drag-drop-sort-task" style="background: ' +
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

            $('#mds-event').append(elm);
            $('#mds-event-' + event.id)
              .mobiscroll()
              .draggable({
                dragData: event,
              });
          }
        },
      });

      var sortableInstance = new Sortable($('#demo-sortable-list')[0], {
        animation: 150,
        forceFallback: true,
        onStart: function (e) {
          draggedTask = e.item;
        },
        onEnd: function () {
          setTimeout(function () {
            draggedTask = null;
          });
        },
      });

      mobiscroll.sortableJsDraggable.init(sortableInstance, {
        cloneSelector: '.sortable-drag',
        externalDrop: true,
        onExternalDrop: function (args) {
          addToExternalList(args);
        },
      });

      var drake = dragula([$('#demo-dragula-list')[0]]);

      drake.on('drag', function (e) {
        draggedTask = e;
      });

      drake.on('cancel', function () {
        draggedTask = null;
      });

      drake.on('drop', function () {
        setTimeout(function () {
          draggedTask = null;
        });
      });

      mobiscroll.dragulaDraggable.init(drake, {
        externalDrop: true,
        onExternalDrop: function (args) {
          addToExternalList(args);
        },
      });

      $.getJSON('https://trial.mobiscroll.com/drag-drop-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-full-height">
  <div class="mbsc-row mds-full-height">
    <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
      <div id="demo-drag-drop-sortable-dragula"></div>
    </div>
    <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
      <div class="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
        <div id="external-drop-cont" class="mds-drag-drop-sort-container">
          <div id="mds-event">
            <div id="mds-event-1" mbsc-draggable data-drag-data='{"id": "1", "title": "Task 1", "start": "08:00", "end": "09:30", "color": "#cf4343"}' class="mds-drag-drop-sort-task" style="background: #cf4343;">
              <div>Task 1</div>
              <div>1.5 hours</div>
            </div>
            <div id="mds-event-2" mbsc-draggable data-drag-data='{"id": "2", "title": "Task 2", "start": "08:00", "end": "10:00", "color": "#cf4343"}' class="mds-drag-drop-sort-task" style="background: #cf4343;">
              <div>Task 2</div>
              <div>2 hours</div>
            </div>
            <div id="mds-event-3" mbsc-draggable data-drag-data='{"id": "3", "title": "Task 3", "start": "10:00", "end": "14:00", "color": "#cf4343"}' class="mds-drag-drop-sort-task" style="background: #cf4343;">
              <div>Task 3</div>
              <div>4 hours</div>
            </div>
            <div id="mds-event-4" mbsc-draggable data-drag-data='{"id": "4", "title": "Task 4", "start": "12:00", "end": "18:00", "color": "#cf4343"}' class="mds-drag-drop-sort-task" style="background: #cf4343;">
              <div>Task 4</div>
              <div>6 hours</div>
            </div>
          </div>
        </div>
      <div class="mbsc-txt-muted mds-third-party-title">SortableJS list (externally sortable)</div>
      <div class="mds-drag-drop-sort-container" id="demo-sortable-list">
        <div class="mds-drag-drop-sort-task" style="background: #e49516;" data-drag-data='{ "title": "Task 5", "start": "08:00", "end": "09:30", "color": "#e49516"}'>
          <div>Task 5</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #e49516;" data-drag-data='{ "title": "Task 6", "start": "12:00", "end": "15:00", "color": "#e49516"}'>
          <div>Task 6</div>
          <div>3 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #e49516;" data-drag-data='{ "title": "Task 7", "start": "08:30", "end": "11:00", "color": "#e49516"}'>
          <div>Task 7</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #e49516;" data-drag-data='{ "title": "Task 8", "start": "16:00", "end": "17:00", "color": "#e49516"}'>
          <div>Task 8</div>
          <div>1 hours</div>
        </div>
      </div>
      <div class="mbsc-txt-muted mds-third-party-title">Dragula list (externally sortable)</div>
      <div class="mds-drag-drop-sort-container" id="demo-dragula-list">
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;"  data-drag-data='{ "title": "Task 9", "start": "08:00", "end": "09:30", "color": "#1ca11a"}'>
          <div>Task 9</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 10", "start": "12:00", "end": "15:00", "color": "#1ca11a"}'>
          <div>Task 10</div>
          <div>3 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 11", "start": "08:30", "end": "11:00", "color": "#1ca11a"}'>
          <div>Task 11</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 12", "start": "16:00", "end": "17:00", "color": "#1ca11a"}'>
          <div>Task 12</div>
          <div>1 hours</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-drag-drop-sort-calendar {
  border-right: 1px solid #ccc;
}

.mds-drag-drop-sort-container {
  margin: 10px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-third-party-title {
  margin-top: 12px;
  padding: 0 20px;
  font-size: 16px; 
  font-weight: 600;
}

.mds-drag-drop-sort-task {
  margin: 10px;
  padding: 10px;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}
`,
};
