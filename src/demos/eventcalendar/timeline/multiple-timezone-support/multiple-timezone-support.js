import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';
import * as moment from 'moment-timezone';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      mobiscroll.momentTimezone.moment = moment;

      var calendarInst = $('#demo-multiple-timezone-support')
        .mobiscroll()
        .eventcalendar({
          timezonePlugin: mobiscroll.momentTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'utc',
          view: {
            timeline: { type: 'week' },
          },
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          data: [
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,9)',
              title: 'Stakeholder mtg.',
              resource: [1, 2, 4],
            },
            {
              start: 'dyndatetime(y,m,d+3,18)',
              end: 'dyndatetime(y,m,d+3,19, 30)',
              title: 'Wrapup mtg.',
              resource: [2, 3, 5],
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Business of Software Conference',
              resource: [1, 3],
            },
            {
              start: 'dyndatetime(y,m,d+1,20)',
              end: 'dyndatetime(y,m,d+1,21, 50)',
              title: 'Product Team mtg.',
              resource: [2, 3, 4],
            },
            {
              start: 'dyndatetime(y,m,d-1,13)',
              end: 'dyndatetime(y,m,d-1,15)',
              title: 'Decision Making mtg.',
              resource: [1, 4, 5],
            },
            {
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,14)',
              title: 'Quick mtg. with Martin',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+3,12)',
              end: 'dyndatetime(y,m,d+3,16)',
              title: 'Team-Building',
              resource: [1, 2, 3, 4, 5],
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#ff0101',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#01adff',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#ff4600',
            },
          ],
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="md-timezone-header">' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '<label><input id="md-timezone-input" mbsc-input data-dropdown="true" data-input-style="box" /></label>' +
              '<select id="md-timezone-select">' +
              '<option value="America/Los_Angeles">America/Los Angeles</option>' +
              '<option value="America/Chicago">America/Chicago</option>' +
              '<option value="America/New_York">America/New York</option>' +
              '<option value="utc" selected>UTC</option>' +
              '<option value="Europe/London">Europe/London</option>' +
              '<option value="Europe/Berlin">Europe/Berlin</option>' +
              '<option value="Europe/Bucharest">Europe/Bucharest</option>' +
              '<option value="Asia/Shanghai">Asia/Shanghai</option>' +
              '<option value="Asia/Tokyo">Asia/Tokyo</option>' +
              '</select>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#md-timezone-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('md-timezone-input'),
          display: 'anchored',
          touchUi: false,
          onChange: function (ev) {
            calendarInst.setOptions({
              displayTimezone: ev.value,
            });
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-multiple-timezone-support"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-timezone-header .mbsc-textfield-wrapper {
    margin: 0.5em;
}

.md-timezone-header {
    display: flex;
    align-items: center;
    margin-left: auto;
}
  `,
};
