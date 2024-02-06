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
      var startDate;
      var endDate;

      var myCalendar = $('#demo-custom-range-view')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: {
              type: 'day',
              size: 14,
            },
          },
          renderHeader: function () {
            return (
              '<div id="custom-date-range"><button mbsc-button data-variant="flat" class="mbsc-calendar-button">' +
              '<span id="custom-date-range-text" class="mbsc-calendar-title">Button' +
              '</span></button></div>' +
              '<div class="md-custom-range-view-controls">' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
          onPageLoaded: function (args) {
            var end = args.lastDay;
            startDate = args.firstDay;
            endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1, 0);
            // set button text
            $rangeButton.text(getFormattedRange(startDate, endDate));
            // set range value
            myRange.setVal([startDate, endDate]);
          },
        })
        .mobiscroll('getInst');

      var myRange = $('#custom-date-range')
        .mobiscroll()
        .datepicker({
          select: 'range',
          display: 'anchored',
          showOverlay: false,
          touchUi: true,
          buttons: [],
          onClose: function (args, inst) {
            var date = inst.getVal();
            if (date[0] && date[1]) {
              if (date[0].getTime() !== startDate.getTime()) {
                // navigate the calendar
                myCalendar.navigate(date[0]);
              }
              startDate = date[0];
              endDate = date[1];
              // set calendar view
              myCalendar.setOptions({
                refDate: startDate,
                view: {
                  schedule: {
                    type: 'day',
                    size: getNrDays(startDate, endDate),
                  },
                },
              });
            } else {
              myRange.setVal([startDate, endDate]);
            }
          },
        })
        .mobiscroll('getInst');

      var $rangeButton = $('#custom-date-range-text');

      // returns the formatted date
      function getFormattedRange(start, end) {
        return (
          formatDate('MMM D, YYYY', new Date(start)) +
          (end && getNrDays(start, end) > 1 ? ' - ' + formatDate('MMM D, YYYY', new Date(end)) : '')
        );
      }

      // returns the number of days between two dates
      function getNrDays(start, end) {
        return Math.round(Math.abs((end.setHours(0) - start.setHours(0)) / (24 * 60 * 60 * 1000))) + 1;
      }

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          myCalendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-range-view"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-custom-range-view-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: end;
    align-items: center;
}

.mbsc-material .mbsc-calendar-title {
    font-size: 1.428572em;
    font-weight: 400;
    text-transform: none;
    line-height: 1.4em;
}
  `,
};
