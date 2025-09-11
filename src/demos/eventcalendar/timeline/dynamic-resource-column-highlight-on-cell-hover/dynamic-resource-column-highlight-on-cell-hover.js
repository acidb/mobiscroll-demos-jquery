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
      var myEvents = [
        {
          start: 'dyndatetime(y,m,2)',
          end: 'dyndatetime(y,m,5)',
          title: 'Event 1',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,10,9)',
          end: 'dyndatetime(y,m,15,15)',
          title: 'Event 2',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,12)',
          end: 'dyndatetime(y,m,14)',
          title: 'Event 3',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,15,7)',
          end: 'dyndatetime(y,m,20,12)',
          title: 'Event 4',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,3)',
          end: 'dyndatetime(y,m,10)',
          title: 'Event 5',
          resource: 6,
        },
        {
          start: 'dyndatetime(y,m,10,8)',
          end: 'dyndatetime(y,m,11,20)',
          title: 'Event 6',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,22)',
          end: 'dyndatetime(y,m,28)',
          title: 'Event 7',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,8)',
          end: 'dyndatetime(y,m,13)',
          title: 'Event 8',
          resource: 15,
        },
        {
          start: 'dyndatetime(y,m,25)',
          end: 'dyndatetime(y,m,27)',
          title: 'Event 9',
          resource: 10,
        },
        {
          start: 'dyndatetime(y,m,20)',
          end: 'dyndatetime(y,m,23)',
          title: 'Event 10',
          resource: 12,
        },
      ];

      var myResources = [
        { id: 1, name: 'Resource A', color: '#e20000' },
        { id: 2, name: 'Resource B', color: '#76e083' },
        { id: 3, name: 'Resource C', color: '#4981d6' },
        { id: 4, name: 'Resource D', color: '#e25dd2' },
        { id: 5, name: 'Resource E', color: '#1dab2f' },
        { id: 6, name: 'Resource F', color: '#d6d145' },
        { id: 7, name: 'Resource G', color: '#34c8e0' },
        { id: 8, name: 'Resource H', color: '#9dde46' },
        { id: 9, name: 'Resource I', color: '#166f6f' },
        { id: 10, name: 'Resource J', color: '#f7961e' },
        { id: 11, name: 'Resource K', color: '#34c8e0' },
        { id: 12, name: 'Resource L', color: '#af0000' },
        { id: 13, name: 'Resource M', color: '#446f1c' },
        { id: 14, name: 'Resource N', color: '#073138' },
        { id: 15, name: 'Resource O', color: '#4caf00' },
      ];

      var formatDate = mobiscroll.formatDate;
      var hoverDateTime;

      var calendar = $('#demo-highlight-hover')
        .mobiscroll()
        .eventcalendar({
          // drag,
          cssClass: 'mds-highlight-hover',
          data: myEvents,
          resources: myResources,
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'day',
            },
          },
          onCellHoverIn: function (args) {
            $('.mds-highlight-tooltip-name').text(args.resource.name);
            $('.mds-highlight-tooltip-date').text(formatDate('MMM DD, YYYY', args.date));

            tooltip.setOptions({ anchor: args.domEvent.target });
            tooltip.open();

            hoverDateTime = args.date;

            myResources.forEach(function (r) {
              r.cssClass = r.id === args.resource.id ? 'mds-highlight-row-hover' : '';
            });
            calendar.setOptions({ resources: myResources.slice() });
          },
          onCellHoverOut: function () {
            tooltip.close();
            myResources.forEach(function (r) {
              r.cssClass = '';
            });
            hoverDateTime = null;
            setTimeout(function () {
              calendar.setOptions({ resources: myResources.slice() });
            });
          },
          renderCell: function (args) {
            return hoverDateTime && args.date.getTime() === hoverDateTime.getTime() ? '<div class="mds-highlight-col-hover"></div>' : '';
          },
          renderDay: function (args) {
            var isHover = hoverDateTime && args.date.getTime() === hoverDateTime.getTime();
            var hoverClass = isHover ? ' mds-highlight-col-hover' : '';
            return '<div class="mds-highlight-day-content ' + hoverClass + '">' + formatDate('D DDD', args.date) + '</div>';
          },
          renderDayFooter: function (args) {
            var isHover = hoverDateTime && args.date.getTime() === hoverDateTime.getTime();
            var hoverClass = isHover ? ' mds-highlight-col-hover' : '';
            return '<div class="mds-highlight-day-content ' + hoverClass + '">' + formatDate('D DDD', args.date) + '</div>';
          },
          renderSidebar: function (resource) {
            return '<div>' + resource.name + ' Sidebar</div>';
          },
        })
        .mobiscroll('getInst');

      var tooltip = $('#demo-highlight-cell-popup')
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          scrollLock: false,
          focusOnClose: false,
          closeOnScroll: true,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-highlight-hover"></div>
<div id="demo-highlight-cell-popup" class="mds-highlight-tooltip" style="display: none;">
  <div class="mds-highlight-tooltip-name"></div>
  <div class="mds-highlight-tooltip-date"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-highlight-hover .mbsc-timeline-sidebar-col {
  width: 170px;
}

.mds-highlight-hover .mbsc-timeline-sidebar-resource-title {
  font-weight: 500;
}

.mds-highlight-hover .mds-highlight-row-hover,
.mds-highlight-hover .mds-highlight-col-hover {
  background: rgba(220,220,220,0.25);
}

.mds-highlight-col-hover {
  position: absolute;
  inset: 0;
  background: transparent;
  pointer-events: none;
  box-sizing: border-box;
}

.mds-highlight-day-content {
  font-size: 14px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: relative;
}

.mds-highlight-tooltip {
  padding: 5px;
  font-size: 14px;
  line-height: 1.4;
}

.mds-highlight-tooltip-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.mds-highlight-tooltip-date {
  color: #888;
}
`,
};
