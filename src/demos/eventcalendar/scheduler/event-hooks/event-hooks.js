import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo')
        .mobiscroll()
        .eventcalendar({
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          externalDrop: true,
          view: {
            schedule: {
              type: 'day',
            },
          },
          invalid: [
            {
              start: '12:00',
              end: '13:00',
              title: 'Lunch break',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
            },
          ],
          onCellClick: function () {
            // Logic for cell click
          },
          onCellDoubleClick: function () {
            // Logic for cell double click
          },
          onCellRightClick: function () {
            // Logic for cell right click
          },
          onDestroy: function () {
            // Logic for destroying the event calendar
          },
          onEventClick: function () {
            // Logic for event click
          },
          onEventCreate: function () {
            // Logic for event create
          },
          onEventCreated: function () {
            // Logic for event created
          },
          onEventCreateFailed: function () {
            // Logic for failed event create
          },
          onEventDelete: function () {
            // Logic for event delete
          },
          onEventDeleted: function () {
            // Logic for event deleted
          },
          onEventDoubleClick: function () {
            // Logic for event double click
          },
          onEventDragStart: function () {
            // Logic for event drag start
          },
          onEventDragEnd: function () {
            // Logic for event drag end
          },
          onEventHoverIn: function () {
            // Logic for event hover in
          },
          onEventHoverOut: function () {
            // Logic for event hover out
          },
          onEventUpdate: function () {
            // Logic for event update
          },
          onEventUpdated: function () {
            // Logic for event updated
          },
          onEventUpdateFailed: function () {
            // Logic for failed event update
          },
          onEventRightClick: function () {
            // Logic for event right click
          },
          onInit: function () {
            // Logic running on component init
          },
          onPageChange: function () {
            // Your custom event handler goes here
          },
          onPageLoaded: function () {
            // Use it to inject custom markup & attach custom listeners
          },
          onPageLoading: function () {
            // Use it to load data on demand
          },
          onSelectedDateChange: function () {
            // Use it to keep track of the selected date externally
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-draggable data-drag-data='{"title": "External drag 1", "color": "#ffdab8"}' class="event-hooks-draggable" style="background: #ffdab8;">
    <div class="draggable-title">External drag 1</div>
    <div class="draggable-text">Drag me to calendar</div>
</div>
<div mbsc-draggable data-drag-data='{"title": "External drag 2", "color": "#ddfcf7"}' class="event-hooks-draggable" style="background: #ddfcf7;">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
</div>
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.event-hooks-draggable {
    padding: 10px 20px;
    display: inline-block;
    margin: 15px;
    border-radius: 8px;
    width: 210px;
}

.event-hooks-draggable .draggable-title {
    font-size: 16px;
    font-weight: 600;
}

.event-hooks-draggable .draggable-text {
    opacity: 0.7;
    line-height: 25px;
}

.event-hooks-draggable-1 {
    background: #ffdab8;
}

.event-hooks-draggable-2 {
    background: #ddfcf7;
}
  `,
};
