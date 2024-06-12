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
      var eventId;
      var eventTitle;
      var eventStart;
      var eventEnd;
      var eventProgress;
      var isDraggingProgress;

      var $eventProgressLabel = $('.mds-popup-progress-label');
      var $eventProgress = $('.mds-popup-progress-slider');
      var $eventTitle = $('.mds-popup-event-title');

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-3)',
          end: 'dyndatetime(y,m,d)',
          title: 'Design Homepage',
          resource: 'alice',
          progress: 100,
        },
        {
          start: 'dyndatetime(y,m,d-3)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Create Wireframes',
          resource: 'bob',
          progress: 100,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Develop Frontend',
          resource: 'charlie',
          progress: 45,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Develop Backend',
          resource: 'dave',
          progress: 35,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+8)',
          title: 'Test Website',
          resource: 'erin',
          progress: 0,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+8)',
          title: 'Fix Bugs',
          resource: 'frank',
          progress: 0,
        },
        {
          start: 'dyndatetime(y,m,d+8)',
          end: 'dyndatetime(y,m,d+11)',
          title: 'Deploy Website',
          resource: 'george',
          progress: 0,
        },
      ];

      var myResources = [
        {
          id: 'gro1',
          name: 'Designer Team',
          color: '#76e083',
          eventCreation: false,
          children: [
            {
              id: 'alice',
              name: 'Alice',
              title: 'Designer',
              color: '#1dab2f',
            },
            {
              id: 'bob',
              name: 'Bob',
              title: 'Designer',
              color: '#76e083',
            },
          ],
        },
        {
          id: 'gro2',
          name: 'Development Team',
          color: '#ff1717',
          eventCreation: false,
          children: [
            {
              id: 'charlie',
              name: 'Charlie',
              title: 'Frontend Developer',
              color: '#4981d6',
            },
            {
              id: 'dave',
              name: 'Dave',
              title: 'Backend Developer',
              color: '#f7961e',
            },
            {
              id: 'frank',
              name: 'Frank',
              title: 'Full-Stack Developer',
              color: '#34c8e0',
            },
            {
              id: 'george',
              name: 'George',
              title: 'DevOps Engineer',
              color: '#e25dd2',
            },
          ],
        },

        {
          id: 'gro3',
          name: 'QA Team',
          color: '#d6d145',
          eventCreation: false,
          children: [
            {
              id: 'erin',
              name: 'Erin',
              title: 'QA Tester',
              color: '#d6d145',
            },
          ],
        },
      ];

      function renderEvent(data) {
        var event = data.original;
        var color = data.color;
        var progress = event.progress || 0;

        return (
          '<div class="mds-progress-event" style="background:' +
          color +
          ';">' +
          '<div class="mds-progress-bar" style="width:' +
          progress +
          '%;">' +
          '<div class="mds-progress-arrow" data-event-id="' +
          event.id +
          '"></div>' +
          '</div>' +
          '<div class="mds-progress-event-content">' +
          '<div class="mds-progress-event-title">' +
          event.title +
          '</div>' +
          '</div>' +
          '<div class="mds-progress-label" >' +
          progress +
          '%</div>' +
          '</div>'
        );
      }

      function renderCustomResource(resource) {
        return (
          '<div class="mds-progress-employee-name">' +
          resource.name +
          '</div>' +
          (resource.title !== undefined ? '<div class="mds-progress-employee-title">' + resource.title + '</div>' : '') +
          '</div>'
        );
      }

      function createAddPopup(event, target) {
        var success = false;

        addEditPopup.setOptions({
          anchor: target,
          headerText: 'New event',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                event.title = eventTitle;
                event.start = eventStart;
                event.end = eventEnd;
                event.progress = eventProgress;
                myEvents.push(event);
                calendar.updateEvent(event);
                success = true;
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            if (!success) {
              calendar.removeEvent(event);
            }
          },
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createEditPopup(event, target) {
        addEditPopup.setOptions({
          headerText: 'Edit event',
          anchor: target,
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                var eventToUpdate = myEvents.find(function (event) {
                  return event.id === eventId;
                });
                eventToUpdate.title = eventTitle;
                eventToUpdate.start = eventStart;
                eventToUpdate.end = eventEnd;
                eventToUpdate.progress = eventProgress;
                calendar.updateEvent(eventToUpdate);
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function fillPopup(event) {
        eventId = event.id;
        eventTitle = event.title || '';
        eventStart = event.start;
        eventEnd = event.end;
        eventProgress = event.progress || 0;

        $eventTitle.mobiscroll('getInst').value = eventTitle;
        $eventProgressLabel.text(eventProgress + ' %');
        $eventProgress.val(eventProgress);
        eventStartEndPicker.setVal([eventStart, eventEnd]);
      }

      var calendar = $('#demo-task-progression')
        .mobiscroll()
        .eventcalendar({
          class: 'mds-progress-calendar',
          dragToMove: true,
          dragToResize: true,
          dragToCreate: true,
          clickToCreate: true,
          view: { timeline: { type: 'month', eventList: true } },
          data: myEvents,
          resources: myResources,
          onEventClick: function (args) {
            if (isDraggingProgress) {
              isDraggingProgress = false;
              return;
            }
            createEditPopup(args.event, args.domEvent.currentTarget);
          },
          onEventCreated: function (args) {
            createAddPopup(args.event, args.target);
          },
          onEventUpdated: function (args) {
            var eventToUpdate = myEvents.find(function (event) {
              return event.id === args.event.id;
            });
            eventToUpdate.start = args.event.start;
            eventToUpdate.end = args.event.end;
            eventToUpdate.resource = args.event.resource;
          },
          renderScheduleEvent: renderEvent,
          renderResource: renderCustomResource,
        })
        .mobiscroll('getInst');

      var eventStartEndPicker = $('#popup-event-dates')
        .mobiscroll()
        .datepicker({
          select: 'range',
          startInput: '#popup-event-start',
          endInput: '#popup-event-end',
          showRangeLabels: false,
          touchUi: true,
          responsive: { medium: { touchUi: false } },
          onChange: function (args) {
            var dates = args.value;
            eventStart = dates[0];
            eventEnd = dates[1];
          },
        })
        .mobiscroll('getInst');

      var addEditPopup = $('#demo-add-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          responsive: {
            medium: {
              display: 'anchored',
              width: 510,
              fullScreen: false,
              touchUi: false,
            },
          },
        })
        .mobiscroll('getInst');

      $eventProgress.on('input', function () {
        eventProgress = $(this).val();
        $eventProgressLabel.text(eventProgress + ' %');
      });

      $eventTitle.on('input', function () {
        eventTitle = this.value;
      });

      $('#demo-task-progression')[0].addEventListener(
        'mousedown',
        function (event) {
          var $progressArrow = $(event.target).closest('.mds-progress-arrow');

          if (!$progressArrow.length) {
            return;
          }

          event.stopPropagation();

          var $progressBar = $progressArrow.closest('.mds-progress-bar');
          var eventContainerWidth = $progressBar.parent().width();
          var initialMouseX = event.pageX;
          var initialProgress = ($progressBar.width() / eventContainerWidth) * 100;

          function onMouseMove(e) {
            var mouseXOffset = e.pageX - initialMouseX;
            var newProgress = Math.round(initialProgress + (mouseXOffset / eventContainerWidth) * 100);

            eventProgress = Math.max(0, Math.min(100, newProgress));

            $progressBar.addClass('mds-progress-dragging').css('width', eventProgress + '%');

            $progressArrow
              .closest('.mds-progress-event')
              .find('.mds-progress-label')
              .text(eventProgress.toFixed(0) + '%');

            isDraggingProgress = true;
          }

          function onMouseUp() {
            $(document).off('mousemove', onMouseMove);
            $(document).off('mouseup', onMouseUp);

            setTimeout(function () {
              isDraggingProgress = false;
            }, 100);

            $progressBar.removeClass('mds-progress-dragging');

            var eventId = $progressArrow.data('event-id');
            var eventToUpdate = myEvents.find(function (event) {
              return event.id === eventId;
            });

            eventToUpdate.progress = eventProgress;
            calendar.updateEvent(eventToUpdate);
          }

          $(document).on('mousemove', onMouseMove);
          $(document).on('mouseup', onMouseUp);
        },
        true,
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div id="demo-task-progression"></div>
  <div style="display: none;">
    <div id="demo-add-edit-popup">
      <div class="mbsc-form-group">
        <label>
          Title
          <input mbsc-input class="mds-popup-event-title" />
        </label>
      </div>
      <div class="mbsc-form-group">
        <label>
          <input mbsc-input data-label="Starts" id="popup-event-start" />
        </label>
        <label>
          <input mbsc-input data-label="Ends" id="popup-event-end" />
        </label>
      </div>
      <div class="mbsc-form-group">
        <div class="mbsc-flex mbsc-align-items-center mbsc-padding">
          <label for="progress-slider">Progress</label>
          <input id="progress-slider "class="mds-popup-progress-slider mbsc-flex-1-0" type="range" min="0" max="100" />
          <span class="mds-popup-progress-label">0%</span> 
        </div>
        <div id="popup-event-dates"></div>
      </div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-progress-calendar .mbsc-timeline-row-gutter {
  height: 6px;
}

.mds-progress-calendar .mbsc-timeline-parent {
  height: 34px;  
}

.mds-popup-progress-slider {
  margin: 0 10px;
}

.mds-popup-progress-label {
  margin-left: 10px;
  width: 50px;
  text-align: right;
}

.mds-progress-event {
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  line-height: 19px;
}

.mds-progress-event-content {
  padding: 10px 0;
  margin-right: 50px;
}

.mds-progress-event-title {
  position: relative;
  color: white;
  font-size: 14px;
  padding: 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mds-progress-bar {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.mds-progress-arrow {
  position: absolute;
  right: -9px;
  bottom: 0;
  border-style: solid;
  border-width: 0 9px 9px 9px;
  border-color: transparent transparent rgba(255, 255, 255, 0.5) transparent;
  cursor: ew-resize;
}

.mds-progress-dragging {
  background-color: rgba(0, 0, 0, 0.5);
}

.mds-progress-dragging .mds-progress-arrow,
.mds-progress-arrow:hover {
  right: -12px;
  border-width: 0 12px 12px 12px;
  border-color: transparent transparent white transparent;
}

.mds-progress-label {
  position: absolute;
  right: 5px;
  top: 50%;
  margin-top: -10px;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.mds-progress-employee-name {
  font-size: 14px;
}

.mds-progress-employee-title {
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
}
  `,
};
