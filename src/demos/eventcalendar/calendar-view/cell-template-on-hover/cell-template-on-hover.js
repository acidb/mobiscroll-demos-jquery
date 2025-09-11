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
      var hoveredDate;

      function updateRenderDayContent() {
        if (calendar) {
          calendar.setOptions({
            renderDayContent: function (args) {
              // Only render the button on the hovered day
              if (hoveredDate && hoveredDate.getTime() === args.date.getTime()) {
                return '<button class="mds-cell-summary-btn">Add event</button>';
              }
              return '';
            },
          });
        }
      }

      // Event delegation for dynamic button
      $('#demo-show-cell-summary-on-hover').on('click', '.mds-cell-summary-btn', function () {
        if (hoveredDate) {
          calendar.addEvent({
            start: hoveredDate,
            title: 'New Event',
          });
          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'Event added on ' + mobiscroll.formatDate('YYYY-MM-DD', hoveredDate),
          });
        }
      });

      var calendar = $('#demo-show-cell-summary-on-hover')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              labels: 2,
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,2,12)',
              end: 'dyndatetime(y,m,2,16)',
              title: 'Company Strategy Offsite',
              color: '#90bcff',
            },
            {
              start: 'dyndatetime(y,m,7,9)',
              end: 'dyndatetime(y,m,7,17)',
              title: 'R&D Innovation Workshop',
              color: '#ffdfaf',
            },
            {
              start: 'dyndatetime(y,m,15,10)',
              end: 'dyndatetime(y,m,15,15)',
              title: 'Client Feedback Review',
              color: '#ffb9ad',
            },
            {
              start: 'dyndatetime(y,m,19,9)',
              end: 'dyndatetime(y,m,19,19)',
              title: 'Team Building Adventure',
              color: '#f3c1ff',
            },
            {
              start: 'dyndatetime(y,m,23,11)',
              end: 'dyndatetime(y,m,23,15)',
              title: 'Sales Summit & Training',
              color: '#b5eff8',
            },
            {
              start: 'dyndatetime(y,m,25,10)',
              end: 'dyndatetime(y,m,25,15)',
              title: 'Executive Planning Retreat',
              color: '#c7ffbb',
            },
            {
              start: 'dyndatetime(y,m,29,14)',
              end: 'dyndatetime(y,m,29,17)',
              title: 'Marketing Team Conference',
              color: '#ffeeb6',
            },
          ],
          onCellHoverIn: function (args) {
            hoveredDate = args.date;
            updateRenderDayContent();
          },
          onCellHoverOut: function () {
            hoveredDate = null;
            updateRenderDayContent();
          },
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-cell-summary-on-hover" class="mds-cell-summary"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-cell-summary .mbsc-calendar-cell {
  min-height: 145px;
}
.mds-cell-summary-btn {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 8px;
  z-index: 3;
  font-size: 10px;
  padding: 8px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #5584b5;
  color: #5584b5;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color .1s ease-out;
}
.mds-cell-summary-btn:hover {
  background: #5584b5;
  color: white;
  box-shadow: 0 2px 8px rgba(85, 132, 181, 0.3);
}
.mds-cell-summary-btn:active {
  box-shadow: 0 1px 4px rgba(85, 132, 181, 0.3);
}
  `,
};
