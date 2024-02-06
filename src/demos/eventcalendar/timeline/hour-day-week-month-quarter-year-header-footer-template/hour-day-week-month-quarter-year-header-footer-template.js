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
      var formatDate = mobiscroll.formatDate;

      var myResources = [
        {
          id: 1,
          name: 'Resource A',
          color: '#e20000',
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#d6d145',
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#4981d6',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#e25dd2',
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#1dab2f',
        },
        {
          id: 6,
          name: 'Resource F',
          color: '#430404',
        },
        {
          id: 7,
          name: 'Resource G',
          color: '#f7961e',
        },
        {
          id: 8,
          name: 'Resource H',
          color: '#34c8e0',
        },
      ];

      function getEventOccurrence(events) {
        var eventOccurrence = 'none';

        if (events) {
          var eventNr = events.length;
          if (eventNr === 0) {
            eventOccurrence = 'none';
          } else if (eventNr === 1) {
            eventOccurrence = 'one';
          } else if (eventNr < 4) {
            eventOccurrence = 'few';
          } else {
            eventOccurrence = 'more';
          }
        }

        return eventOccurrence;
      }

      function getOccuppancy(events) {
        var occuppancy = 0;

        if (events) {
          var resourceIds = [];
          var nr = 0;
          for (var i = 0; i < events.length; ++i) {
            var event = events[i];
            if (resourceIds.indexOf(event.resource) < 0) {
              nr++;
              resourceIds.push(event.resource);
            }
          }
          occuppancy = ((nr * 100) / myResources.length).toFixed(0);
        }

        return '<div class="md-date-footer">' + occuppancy + '%</div>';
      }

      $('#demo-hour-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,d,2)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,21)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,d,3)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,23)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,d,6)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,22)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,d,5)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,21)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderHour: function (args) {
            return (
              '<div class="md-date-header md-date-header-hour md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">' +
              formatDate('h:mm A', args.date) +
              '</div>'
            );
          },
          renderHourFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });

      $('#demo-day-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,2)',
              end: 'dyndatetime(y,m,10)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m,16)',
              end: 'dyndatetime(y,m,24)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,8)',
              end: 'dyndatetime(y,m,15)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,4)',
              end: 'dyndatetime(y,m,11)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,7)',
              end: 'dyndatetime(y,m,15)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m,21)',
              end: 'dyndatetime(y,m,27)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,10)',
              end: 'dyndatetime(y,m,19)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m,24)',
              end: 'dyndatetime(y,m,30)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,8)',
              end: 'dyndatetime(y,m,17)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,5)',
              end: 'dyndatetime(y,m,13)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m,17)',
              end: 'dyndatetime(y,m,26)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,9)',
              end: 'dyndatetime(y,m,20)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderDay: function (args) {
            var date = args.date;

            return (
              '<div class="md-date-header md-date-header-day md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">' +
              '<div class="md-date-header-day-name">' +
              formatDate('DDD', date) +
              '</div>' +
              '<div class="md-date-header-day-nr">' +
              formatDate('DD', date) +
              '</div></div>'
            );
          },
          renderDayFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });

      $('#demo-week-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              resolutionHorizontal: 'week',
              size: 6,
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m,10)',
              end: 'dyndatetime(y,m,24)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m+1,2)',
              end: 'dyndatetime(y,m+1,18)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m,27)',
              end: 'dyndatetime(y,m+1,13)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m+1,4)',
              end: 'dyndatetime(y,m+1,27)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m,24)',
              end: 'dyndatetime(y,m+1,2)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m+1,10)',
              end: 'dyndatetime(y,m+1,24)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m,20)',
              end: 'dyndatetime(y,m+1,3)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m+1,8)',
              end: 'dyndatetime(y,m+1,19)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m,28)',
              end: 'dyndatetime(y,m+1,15)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,9)',
              end: 'dyndatetime(y,m,23)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m+1,5)',
              end: 'dyndatetime(y,m+1,22)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m,24)',
              end: 'dyndatetime(y,m+1,13)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderWeek: function (args) {
            return (
              '<div class="md-date-header md-date-header-week md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">' +
              formatDate('MMM DD', args.startDate) +
              ' - ' +
              formatDate('MMM DD', args.endDate) +
              '</div></div>'
            );
          },
          renderWeekFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });

      $('#demo-month-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'month',
              size: 6,
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m-1,10)',
              end: 'dyndatetime(y,m+1,7)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m+3,1)',
              end: 'dyndatetime(y,m+4,8)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m+1,27)',
              end: 'dyndatetime(y,m+2,23)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,25)',
              end: 'dyndatetime(y,m+1,19)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m+1,10)',
              end: 'dyndatetime(y,m+2,18)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m+4,24)',
              end: 'dyndatetime(y,m+5,27)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m+2,2)',
              end: 'dyndatetime(y,m+3,13)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m+4,8)',
              end: 'dyndatetime(y,m+5,6)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m+2,20)',
              end: 'dyndatetime(y,m+3,17)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,1)',
              end: 'dyndatetime(y,m+1,14)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m+4,14)',
              end: 'dyndatetime(y,m+5,20)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m+1,24)',
              end: 'dyndatetime(y,m+2,20)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderMonth: function (args) {
            return (
              '<div class="md-date-header md-date-header-month md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">' +
              formatDate('MMM', args.date) +
              '</div>'
            );
          },
          renderMonthFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });

      $('#demo-quarter-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'quarter',
              size: 1,
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y,m-1,10)',
              end: 'dyndatetime(y,m+1,7)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y,m+3,1)',
              end: 'dyndatetime(y,m+4,8)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y,m+1,27)',
              end: 'dyndatetime(y,m+2,23)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y,m,25)',
              end: 'dyndatetime(y,m+1,19)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y,m+1,10)',
              end: 'dyndatetime(y,m+2,18)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y,m+4,24)',
              end: 'dyndatetime(y,m+5,27)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y,m+2,2)',
              end: 'dyndatetime(y,m+3,13)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y,m+4,8)',
              end: 'dyndatetime(y,m+5,6)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y,m+2,20)',
              end: 'dyndatetime(y,m+3,17)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,m,1)',
              end: 'dyndatetime(y,m+1,14)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y,m+4,14)',
              end: 'dyndatetime(y,m+5,20)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y,m+1,24)',
              end: 'dyndatetime(y,m+2,20)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderQuarter: function (args) {
            return (
              '<div class="md-date-header md-date-header-quarter md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">Quarter ' +
              (args.date.getMonth() / 3 + 1) +
              '</div>'
            );
          },
          renderQuarterFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });

      $('#demo-year-header-template')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'year',
              resolutionHorizontal: 'year',
              size: 6,
            },
          },
          resources: myResources,
          data: [
            {
              id: 1,
              start: 'dyndatetime(y+1,4,10)',
              end: 'dyndatetime(y+2,8,7)',
              title: 'Event 1',
              resource: 1,
            },
            {
              id: 2,
              start: 'dyndatetime(y+3,6,1)',
              end: 'dyndatetime(y+4,9,8)',
              title: 'Event 2',
              resource: 1,
            },
            {
              id: 3,
              start: 'dyndatetime(y+2,3,27)',
              end: 'dyndatetime(y+3,10,23)',
              title: 'Event 3',
              resource: 2,
            },
            {
              id: 4,
              start: 'dyndatetime(y+2,8,25)',
              end: 'dyndatetime(y+3,11,19)',
              title: 'Event 4',
              resource: 3,
            },
            {
              id: 5,
              start: 'dyndatetime(y+1,9,10)',
              end: 'dyndatetime(y+3,4,18)',
              title: 'Event 5',
              resource: 4,
            },
            {
              id: 6,
              start: 'dyndatetime(y+4,1,24)',
              end: 'dyndatetime(y+5,5,27)',
              title: 'Event 6',
              resource: 4,
            },
            {
              id: 7,
              start: 'dyndatetime(y-1,4,2)',
              end: 'dyndatetime(y,8,13)',
              title: 'Event 7',
              resource: 5,
            },
            {
              id: 8,
              start: 'dyndatetime(y+2,4,8)',
              end: 'dyndatetime(y+3,11,6)',
              title: 'Event 8',
              resource: 5,
            },
            {
              id: 9,
              start: 'dyndatetime(y+2,1,20)',
              end: 'dyndatetime(y+3,8,17)',
              title: 'Event 9',
              resource: 6,
            },
            {
              id: 10,
              start: 'dyndatetime(y,10,1)',
              end: 'dyndatetime(y+1,11,14)',
              title: 'Event 10',
              resource: 7,
            },
            {
              id: 11,
              start: 'dyndatetime(y+3,10,14)',
              end: 'dyndatetime(y+4,11,20)',
              title: 'Event 11',
              resource: 7,
            },
            {
              id: 12,
              start: 'dyndatetime(y+3,2,24)',
              end: 'dyndatetime(y+5,4,20)',
              title: 'Event 12',
              resource: 8,
            },
          ],
          renderYear: function (args) {
            return (
              '<div class="md-date-header md-date-header-year md-date-header-events-' +
              getEventOccurrence(args.events) +
              '">' +
              formatDate('YYYY', args.date) +
              '</div>'
            );
          },
          renderYearFooter: function (args) {
            return getOccuppancy(args.events);
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-date-header-template">
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Hourly header template</div>
        <div id="demo-hour-header-template"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Daily header template</div>
        <div id="demo-day-header-template"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Weekly header template</div>
        <div id="demo-week-header-template"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Monthly header template</div>
        <div id="demo-month-header-template"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Quarterly header template</div>
        <div id="demo-quarter-header-template"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Yearly header template</div>
        <div id="demo-year-header-template"></div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-date-header-template .mbsc-timeline-header-week-text {
    display: block;
}

.md-date-header {
    text-align: center;
    border-radius: 8px;
    line-height: 20px;
}

.md-date-header-day {
    padding: 3px;
    margin: 4px;
}

.md-date-header-hour {
    font-size: 12px;
    padding: 0;
    margin: 3px;
    color: #000;
    font-weight: 600;
}

.md-date-header-week,
.md-date-header-month,
.md-date-header-quarter,
.md-date-header-year {
    padding: 0 8px;
    margin: 3px;
    color: initial;
    font-weight: 600;
}

.md-date-header-template .mbsc-timeline-footer-week {
    text-align: center;
}

.md-date-header-day-name {
    font-size: 13px;
    font-weight: 600;
}

.md-date-header-day-nr {
    font-size: 14px;
}

.md-date-header-events-one {
    background: #e9f5e4;
}

.md-date-header-events-few {
    background: #d0e3c6;
}

.md-date-header-events-more {
    background: #8ca77e;
}

.md-date-footer {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 26px;
}
  `,
};
