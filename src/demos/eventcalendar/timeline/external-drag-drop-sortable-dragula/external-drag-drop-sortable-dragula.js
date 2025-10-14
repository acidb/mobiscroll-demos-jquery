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
    var draggedResource;
    var $externalCont = $('#external-drop-cont');

    function addToExternalList(args) {
      var afterElement = args.afterElement;
      var dragData = args.dragData;
      var eventLength = Math.abs(Math.abs(new Date(dragData.end).getTime() - new Date(dragData.start).getTime()) / (60 * 60 * 1000));
      var newItem = document.createElement('div');
      newItem.className = 'mds-drag-drop-sort-task';
      newItem.style.background = dragData.color || '';
      newItem.setAttribute('data-drag-data', JSON.stringify(dragData));
      newItem.innerHTML =
        '<div>' +
        dragData.title +
        '</div><div class="mds-drag-drop-sort-duration">' +
        eventLength +
        ' hour' +
        (eventLength > 1 ? 's' : '') +
        '</div>';
      args.container.insertBefore(newItem, afterElement || null);
    }

    $(function () {
      $('#demo-drag-drop-sortable-dragula')
        .mobiscroll()
        .eventcalendar({
          dragToMove: true,
          dragToCreate: true,
          externalDrop: true,
          externalDrag: true,
          externalResourceDrop: true,

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
          onResourceCreated: function (args) {
            if (draggedResource && args.type === 'onResourceCreated') {
              draggedResource.remove();
            }
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' added',
            });
            $('#mds-resource-' + args.resource.id).remove();
          },
          resources: [
            { name: 'Resource A', id: 'res-1' },
            { name: 'Resource B', id: 'res-2' },
            { name: 'Resource C', id: 'res-3' },
            { name: 'Resource D', id: 'res-4' },
            { name: 'Resource E', id: 'res-5' },
          ],
          view: {
            timeline: {
              type: 'day',
            },
          },
        });

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
              '<div class="mds-drag-drop-sort-duration">' +
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

      var sortableTaskInstance = new Sortable($('#demo-sortable-task-list')[0], {
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

      mobiscroll.sortableJsDraggable.init(sortableTaskInstance, {
        cloneSelector: '.sortable-drag',
        externalDrop: true,
        onExternalDrop: function (args) {
          addToExternalList(args);
        },
      });

      var sortableResourceInstance = new Sortable($('#demo-sortable-resource-list')[0], {
        animation: 150,
        forceFallback: true,
        onStart: function (e) {
          draggedResource = e.item;
        },
        onEnd: function () {
          setTimeout(function () {
            draggedResource = null;
          });
        },
      });

      mobiscroll.sortableJsDraggable.init(sortableResourceInstance, {
        cloneSelector: '.sortable-drag',
        type: 'resource',
      });

      var drake1 = dragula([$('#demo-dragula-task-list')[0]]);

      drake1.on('drag', function (e) {
        draggedTask = e;
      });

      drake1.on('cancel', function () {
        draggedTask = null;
      });

      drake1.on('drop', function () {
        setTimeout(function () {
          draggedTask = null;
        });
      });

      mobiscroll.dragulaDraggable.init(drake1, {
        externalDrop: true,
        onExternalDrop: function (args) {
          addToExternalList(args);
        },
      });

      var drake2 = dragula([$('#demo-dragula-resource-list')[0]]);

      drake2.on('drag', function (e) {
        draggedResource = e;
      });

      drake2.on('cancel', function () {
        draggedResource = null;
      });

      drake2.on('drop', function () {
        setTimeout(function () {
          draggedResource = null;
        });
      });

      mobiscroll.dragulaDraggable.init(drake2, {
        type: 'resource',
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-drag-drop-sort mds-full-height">
  <div class="mbsc-row mds-full-height">
    <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
      <div class="mbsc-txt-muted mds-third-party-title">Mobiscroll draggable</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col" >
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mbsc-txt-muted mds-third-party-list-title">Event list</div>
            <div id="external-drop-cont">
              <div id="mds-event">
                <div id="mds-event-1" class="mds-drag-drop-sort-task" mbsc-draggable data-drag-data='{"id": "1", "title": "Task 1", "start": "08:00", "end": "09:30", "color": "#cf4343"}' style="background: #cf4343;">
                  <div>Task 1</div>
                  <div class="mds-drag-drop-sort-duration">1.5 hours</div>
                </div>
                <div id="mds-event-2" class="mds-drag-drop-sort-task" mbsc-draggable data-drag-data='{"id": "2", "title": "Task 2", "start": "08:00", "end": "10:00", "color": "#cf4343"}' style="background: #cf4343;">
                  <div>Task 2</div>
                  <div class="mds-drag-drop-sort-duration">2 hours</div>
                </div>
                <div id="mds-event-3" class="mds-drag-drop-sort-task" mbsc-draggable data-drag-data='{"id": "3", "title": "Task 3", "start": "10:00", "end": "14:00", "color": "#cf4343"}' style="background: #cf4343;">
                  <div>Task 3</div>
                  <div class="mds-drag-drop-sort-duration">4 hours</div>
                </div>
                <div id="mds-event-4" class="mds-drag-drop-sort-task" mbsc-draggable data-drag-data='{"id": "4", "title": "Task 4", "start": "12:00", "end": "18:00", "color": "#cf4343"}' style="background: #cf4343;">
                  <div>Task 4</div>
                  <div class="mds-drag-drop-sort-duration">6 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
            <div id="mds-resource-1" class="mds-drag-drop-sort-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "1", "name": "Resource 1"}' style="background: #80808099;">
              <div>Resource 1</div>
            </div>
            <div id="mds-resource-2" class="mds-drag-drop-sort-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "2", "name": "Resource 2"}' style="background: #80808099;">
              <div>Resource 2</div>
            </div>
            <div id="mds-resource-3" class="mds-drag-drop-sort-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "3", "name": "Resource 3"}' style="background: #80808099;">
              <div>Resource 3</div>
            </div>
            <div id="mds-resource-4" class="mds-drag-drop-sort-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "4", "name": "Resource 4"}' style="background: #80808099;">
              <div>Resource 4</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbsc-txt-muted mds-third-party-title">SortableJS (externally sortable)</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mds-third-party-list-title mbsc-txt-muted">Event list</div>
            <div class="mbsc-flex-col mbsc-flex-1-0" id="demo-sortable-task-list">
              <div class="mds-drag-drop-sort-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 5", "start": "08:00", "end": "09:30", "color": "#d1891f"}'>
                <div>Task 5</div>
                <div class="mds-drag-drop-sort-duration">1.5 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 6", "start": "12:00", "end": "15:00", "color": "#d1891f"}'>
                <div>Task 6</div>
                <div class="mds-drag-drop-sort-duration">3 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 7", "start": "08:30", "end": "11:00", "color": "#d1891f"}'>
                <div>Task 7</div>
                <div class="mds-drag-drop-sort-duration">2.5 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 8", "start": "16:00", "end": "21:00", "color": "#d1891f"}'>
                <div>Task 8</div>
                <div class="mds-drag-drop-sort-duration">5 hours</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
            <div class="mbsc-flex-col mbsc-flex-1-0" id="demo-sortable-resource-list">
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 5"}'>
                <div>Resource 5</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 6"}'>
                <div>Resource 6</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 7"}'>
                <div>Resource 7</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 8"}'>
                <div>Resource 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbsc-txt-muted mds-third-party-title">Dragula (externally sortable)</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mds-third-party-list-title mbsc-txt-muted">Event list</div>
            <div class="mbsc-flex-col mbsc-flex-1-0" id="demo-dragula-task-list">
              <div class="mds-drag-drop-sort-task" style="background: #1ca11a;"  data-drag-data='{ "title": "Task 9", "start": "08:00", "end": "09:30","color": "#1ca11a"}'>
                <div>Task 9</div>
                <div class="mds-drag-drop-sort-duration">1.5 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 10", "start": "12:00", "end": "15:00", "color": "#1ca11a"}'>
                <div>Task 10</div>
                <div class="mds-drag-drop-sort-duration">3 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 11", "start": "08:30", "end": "11:00", "color": "#1ca11a"}'>
                <div>Task 11</div>
                <div class="mds-drag-drop-sort-duration">2.5 hours</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 12", "start": "16:00", "end": "20:30", "color": "#1ca11a"}'>
                <div>Task 12</div>
                <div class="mds-drag-drop-sort-duration">4.5 hours</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-drag-drop-sort-container mbsc-flex-col mbsc-flex-1-0">
            <div class="mds-third-party-list-title mbsc-txt-muted">Resource list</div>
            <div class="mbsc-flex-col mbsc-flex-1-0" id="demo-dragula-resource-list">
              <div class="mds-drag-drop-sort-task" style="background: #80808099;"  data-drag-data='{ "name": "Resource 9"}'>
                <div>Resource 9</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 10"}'>
                <div>Resource 10</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 11"}'>
                <div>Resource 11</div>
              </div>
              <div class="mds-drag-drop-sort-task" style="background: #80808099;" data-drag-data='{ "name": "Resource 12"}'>
                <div>Resource 12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
      <div id="demo-drag-drop-sortable-dragula"></div>
    </div>
  </div>
</div>`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-drag-drop-sort-calendar {
  border-left: 1px solid #ccc;
}

.mds-drag-drop-sort .mbsc-timeline-resource-col { 
  width: 100px; 
}

.mds-drag-drop-sort-container {
  margin: 5px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-drag-drop-sort-task {
  margin-top: 5px;
  padding: 10px 12px 10px 12px;
  align-content: center;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  flex: 0 0 4.2em;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 12px; 
}

.mds-third-party-title  {
  margin-top: 12px;
  padding: 0 10px;
  font-size: 16px; 
  font-weight: 600;
}

.mds-third-party-list-title {
  font-weight: 600;
  padding: 0 5px;
  font-size: 12px; 
  text-transform: none;
}

.mds-drag-drop-sort-duration {
  font-size: 10px; 
}
  `,
};
