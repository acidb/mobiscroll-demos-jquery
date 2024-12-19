import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme,
    });

    $(function () {
      var resources = [
        { id: 1, name: 'Resource 1' },
        { id: 2, name: 'Resource 2 (Reorder disabled)', reorder: false },
        { id: 3, name: 'Resource 3' },
        { id: 4, name: 'Resource 4 (Reorder disabled)', reorder: false },
        {
          id: 5,
          name: 'Group 1',
          children: [
            { id: 6, name: 'Resource 5' },
            { id: 7, name: 'Resource 6' },
            { id: 8, name: 'Resource 7' },
          ],
        },
        { id: 9, name: 'Resource 8' },
        { id: 10, name: 'Resource 9' },
        {
          id: 11,
          name: 'Group 2',
          children: [
            { id: 12, name: 'Resource 10' },
            { id: 13, name: 'Resource 11' },
            { id: 14, name: 'Resource 12' },
          ],
        },
        { id: 15, name: 'Resource 13' },
        { id: 16, name: 'Resource 14' },
        {
          id: 17,
          name: 'Group 3',
          children: [
            { id: 18, name: 'Resource 15' },
            { id: 19, name: 'Resource 16' },
            { id: 20, name: 'Resource 17' },
          ],
        },
        { id: 21, name: 'Resource 18' },
        {
          id: 22,
          name: 'Group 4',
          children: [
            { id: 23, name: 'Resource 19' },
            { id: 24, name: 'Resource 20' },
            { id: 25, name: 'Resource 21' },
          ],
        },
        { id: 26, name: 'Resource 22' },
      ];
      var events = [
        { id: 1, title: 'Event 1', start: 'dyndatetime(y,m,1)', end: 'dyndatetime(y,m,5)', resource: 14, color: 'green' },
        { id: 2, title: 'Event 2', start: 'dyndatetime(y,m,3)', end: 'dyndatetime(y,m,7)', resource: 2, color: 'blue' },
        { id: 3, title: 'Event 3', start: 'dyndatetime(y,m,5)', end: 'dyndatetime(y,m,10)', resource: 10, color: 'red' },
        { id: 4, title: 'Event 4', start: 'dyndatetime(y,m,7)', end: 'dyndatetime(y,m,11)', resource: 9, color: 'yellow' },
        { id: 5, title: 'Event 5', start: 'dyndatetime(y,m,9)', end: 'dyndatetime(y,m,12)', resource: 6, color: 'purple' },
        //<hidden>
        { id: 6, title: 'Event 6', start: 'dyndatetime(y,m,11)', end: 'dyndatetime(y,m,15)', resource: 1, color: 'orange' },
        { id: 7, title: 'Event 7', start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,17)', resource: 4, color: 'pink' },
        { id: 8, title: 'Event 8', start: 'dyndatetime(y,m,15)', end: 'dyndatetime(y,m,19)', resource: 3, color: 'cyan' },
        { id: 9, title: 'Event 9', start: 'dyndatetime(y,m,17)', end: 'dyndatetime(y,m,21)', resource: 12, color: 'magenta' },
        { id: 10, title: 'Event 10', start: 'dyndatetime(y,m,19)', end: 'dyndatetime(y,m,24)', resource: 7, color: 'lime' },
        { id: 11, title: 'Event 11', start: 'dyndatetime(y,m,21)', end: 'dyndatetime(y,m,25)', resource: 14, color: 'green' },
        { id: 12, title: 'Event 12', start: 'dyndatetime(y,m,26)', end: 'dyndatetime(y,m,28)', resource: 2, color: 'blue' },
        { id: 13, title: 'Event 13', start: 'dyndatetime(y,m,25)', end: 'dyndatetime(y,m,29)', resource: 10, color: 'red' },
        { id: 14, title: 'Event 14', start: 'dyndatetime(y,m,28)', end: 'dyndatetime(y,m,31)', resource: 9, color: 'yellow' },
        { id: 15, title: 'Event 15', start: 'dyndatetime(y,m,29)', end: 'dyndatetime(y,m,3)', resource: 6, color: 'purple' },
        { id: 16, title: 'Event 16', start: 'dyndatetime(y,m,1)', end: 'dyndatetime(y,m,5)', resource: 1, color: 'orange' },
        { id: 17, title: 'Event 17', start: 'dyndatetime(y,m,20)', end: 'dyndatetime(y,m,25)', resource: 4, color: 'pink' },
        { id: 18, title: 'Event 18', start: 'dyndatetime(y,m,5)', end: 'dyndatetime(y,m,9)', resource: 3, color: 'cyan' },
        { id: 19, title: 'Event 19', start: 'dyndatetime(y,m,7)', end: 'dyndatetime(y,m,11)', resource: 12, color: 'magenta' },
        { id: 20, title: 'Event 20', start: 'dyndatetime(y,m,9)', end: 'dyndatetime(y,m,13)', resource: 7, color: 'lime' },
        { id: 21, title: 'Event 21', start: 'dyndatetime(y,m,11)', end: 'dyndatetime(y,m,15)', resource: 14, color: 'teal' },
        { id: 22, title: 'Event 22', start: 'dyndatetime(y,m,19)', end: 'dyndatetime(y,m,27)', resource: 6, color: 'violet' },
        { id: 23, title: 'Event 23', start: 'dyndatetime(y,m,15)', end: 'dyndatetime(y,m,19)', resource: 10, color: 'blue' },
        { id: 24, title: 'Event 24', start: 'dyndatetime(y,m,20)', end: 'dyndatetime(y,m,21)', resource: 3, color: 'cyan' },
        { id: 25, title: 'Event 25', start: 'dyndatetime(y,m,19)', end: 'dyndatetime(y,m,23)', resource: 1, color: 'orange' },
        { id: 26, title: 'Event 26', start: 'dyndatetime(y,m,21)', end: 'dyndatetime(y,m,25)', resource: 2, color: 'green' },
        { id: 27, title: 'Event 27', start: 'dyndatetime(y,m,23)', end: 'dyndatetime(y,m,27)', resource: 9, color: 'yellow' },
        { id: 28, title: 'Event 28', start: 'dyndatetime(y,m,26)', end: 'dyndatetime(y,m,30)', resource: 4, color: 'pink' },
        { id: 29, title: 'Event 29', start: 'dyndatetime(y,m,27)', end: 'dyndatetime(y,m,31)', resource: 12, color: 'magenta' },
        { id: 30, title: 'Event 30', start: 'dyndatetime(y,m,12)', end: 'dyndatetime(y,m,18)', resource: 7, color: 'lime' },
        { id: 31, title: 'Event 31', start: 'dyndatetime(y,m,8)', end: 'dyndatetime(y,m,11)', resource: 14, color: 'green' },
        { id: 32, title: 'Event 32', start: 'dyndatetime(y,m,4)', end: 'dyndatetime(y,m,10)', resource: 15, color: 'blue' },
        { id: 33, title: 'Event 33', start: 'dyndatetime(y,m,3)', end: 'dyndatetime(y,m,8)', resource: 16, color: 'red' },
        { id: 34, title: 'Event 34', start: 'dyndatetime(y,m,7)', end: 'dyndatetime(y,m,13)', resource: 17, color: 'yellow' },
        { id: 35, title: 'Event 35', start: 'dyndatetime(y,m,18)', end: 'dyndatetime(y,m,26)', resource: 18, color: 'purple' },
        { id: 36, title: 'Event 36', start: 'dyndatetime(y,m,9)', end: 'dyndatetime(y,m,14)', resource: 19, color: 'orange' },
        { id: 37, title: 'Event 37', start: 'dyndatetime(y,m,8)', end: 'dyndatetime(y,m,16)', resource: 20, color: 'pink' },
        { id: 38, title: 'Event 38', start: 'dyndatetime(y,m,11)', end: 'dyndatetime(y,m,19)', resource: 21, color: 'cyan' },
        { id: 39, title: 'Event 39', start: 'dyndatetime(y,m,7)', end: 'dyndatetime(y,m,11)', resource: 22, color: 'magenta' },
        { id: 40, title: 'Event 40', start: 'dyndatetime(y,m,6)', end: 'dyndatetime(y,m,15)', resource: 23, color: 'lime' },
        { id: 41, title: 'Event 41', start: 'dyndatetime(y,m,13)', end: 'dyndatetime(y,m,21)', resource: 24, color: 'teal' },
        { id: 42, title: 'Event 42', start: 'dyndatetime(y,m,22)', end: 'dyndatetime(y,m,29)', resource: 25, color: 'violet' },
        { id: 43, title: 'Event 43', start: 'dyndatetime(y,m,1)', end: 'dyndatetime(y,m,9)', resource: 26, color: 'brown' },
        //</hidden>
      ];
      var tempResources = [];
      var calInst = $('#demo-resource-drag-drop-reorder')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-resource-drag-drop-reorder',
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
              resourceReorder: false,
            },
          },
          immutableData: true,
          data: events,
          resources: resources,
          onEventCreate: function (args, inst) {
            events.push(args.event);
            inst.setEvents(events.slice());
          },
          onEventDelete: function (args, inst) {
            events = events.filter(function (item) {
              return item.id !== args.event.id;
            });
            inst.setEvents(events);
          },
          onEventUpdate: function (args, inst) {
            var newEvent = args.event;
            var eventIndex = events.findIndex(function (e) {
              return e.id === newEvent.id;
            });
            var newEventList = events.slice();
            newEventList.splice(eventIndex, 1, newEvent);
            events = newEventList.slice();
            inst.setEvents(newEventList);
          },
          onResourceOrderUpdate: function (args) {
            tempResources = args.resources;
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mds-reorder-header-filter mbsc-flex mbsc-flex-1-1">' +
              '<button mbsc-button data-variant="flat" class="mds-reorder-switch mds-enable">Reorder resources</button>' +
              '<button mbsc-button class="mds-reorder-save mds-update">Save</button>' +
              '<button mbsc-button class="mds-reorder-cancel mds-update">Cancel</button>' +
              '<button mbsc-button class="mds-reorder-header-filter-separator" data-variant="outline" data-color="light"></button>' +
              '<button mbsc-calendar-prev class="mds-header-filter-prev"></button>' +
              '<button mbsc-calendar-today class="mds-header-filter-today"></button>' +
              '<button mbsc-calendar-next class="mds-header-filter-next"></button>'
            );
          },
        })
        .mobiscroll('getInst');

      function updateHeaderBtns(enableOrder) {
        if (enableOrder) {
          $('.mds-update').show();
          $('.mds-enable').hide();
        } else {
          $('.mds-update').hide();
          $('.mds-enable').show();
        }
      }

      $('.mds-reorder-switch').on('click', function () {
        updateHeaderBtns(true);
        calInst.setOptions({
          view: {
            timeline: {
              type: 'month',
              resourceReorder: true,
            },
          },
        });
      });

      $('.mds-reorder-cancel').on('click', function () {
        updateHeaderBtns(false);
        calInst.setOptions({
          resources: resources.slice(),
          view: {
            timeline: {
              type: 'month',
              resourceReorder: false,
            },
          },
        });

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Resource order canceled',
        });
      });

      $('.mds-reorder-save').on('click', function () {
        if (tempResources.length) {
          resources = tempResources;
        }
        updateHeaderBtns(false);
        calInst.setOptions({
          resources: resources.slice(),
          view: {
            timeline: {
              type: 'month',
              resourceReorder: false,
            },
          },
        });

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Resource order saved',
        });
      });

      updateHeaderBtns(false);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-drag-drop-reorder"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-resource-drag-drop-reorder .mbsc-timeline-resource-col {
  width: 240px;
}

.mds-reorder-header-filter {
  justify-content: end;
  align-items: center;
}

.mbsc-button.mds-reorder-header-filter-separator {
  height: 25px;
  min-width: 0;
  padding: 0;
  margin: 0 8px 0 12px;
  border-width: 1px;
  cursor: none;
}

.mbsc-material .mds-reorder-switch {
  margin-right: 10px;
}

.mds-reorder-cancel.mbsc-button {
  margin-right: 12px;
}
`,
};
