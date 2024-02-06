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
      var calendar = $('#demo-vertical-time-table')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '08:00',
              endTime: '20:00',
              resolutionHorizontal: 'hour',
              resolutionVertical: 'day',
            },
          },
          resources: [
            {
              id: 1,
              name: 'Green Hall',
            },
            {
              id: 2,
              name: 'White Hall',
            },
            {
              id: 3,
              name: 'Red Hall',
            },
            {
              id: 4,
              name: 'Blue Hall',
            },
            {
              id: 5,
              name: 'Yellow Hall',
            },
          ],
          extendDefaultEvent: function () {
            return {
              title: 'New class',
              prof: 'Stacia Jaden',
              class: 'Junior',
              color: '#ff0000',
            };
          },
          renderDay: function (day) {
            var date = day.date;
            return (
              '<div class="md-timetable-day">' +
              '<div class="md-timetable-day-name">' +
              formatDate('DDDD', date) +
              '</div>' +
              '<div>' +
              formatDate('MM/DD/YYYY', date) +
              '</div>' +
              '</div>'
            );
          },
          renderScheduleEventContent: function (args) {
            return (
              '<div class="md-timetable-event-title">' +
              args.title +
              '</div>' +
              '<div class="md-timetable-event-prop">Prof. ' +
              args.original.prof +
              '</div>' +
              '<div class="md-timetable-event-class">' +
              args.original.class +
              ' year</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/timetable-events/?callback=?', function (events) {
        calendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-vertical-time-table" class="md-timetable"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-timetable .mbsc-timeline-row-date-col {
    width: 90px;
}

.md-timetable .mbsc-timeline-row-gutter {
    height: 8px;
}

.md-timetable .mbsc-timeline-column,
.md-timetable .mbsc-timeline-header-column {
    width: 130px;
}

.md-timetable .mbsc-schedule-event-range {
    display: none;
}

.md-timetable-day {
    font-size: 14px;
    padding: 7px;
}

.md-timetable-day-name {
    font-weight: 600;
    padding-bottom: 5px;
}

.md-timetable-event-title {
    font-size: 12px;
    line-height: 18px;
}

.md-timetable-event-prop {
    color: #555;
    padding-bottom: 5px;
}

.md-timetable-event-class {
    color: #555;
    font-style: italic;
}
  `,
};
