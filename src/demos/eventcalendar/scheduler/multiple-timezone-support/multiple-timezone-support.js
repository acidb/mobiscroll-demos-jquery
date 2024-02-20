import * as mobiscroll from '@mobiscroll/jquery';
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

      var calendarInst = $('#demo-showing-events-timezone')
        .mobiscroll()
        .eventcalendar({
          timezonePlugin: mobiscroll.momentTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'utc',
          view: {
            schedule: { type: 'week' },
          },
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          data: [
            {
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,9)',
              title: 'Stakeholder mtg.',
              color: '#408cff',
            },
            {
              start: 'dyndatetime(y,m,d-1,18)',
              end: 'dyndatetime(y,m,d-1,19,30)',
              title: 'Wrapup mtg.',
              color: '#ecbc72',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Business of Software Conference',
              color: '#ff6d42',
            },
            {
              start: 'dyndatetime(y,m,d+1,20)',
              end: 'dyndatetime(y,m,d+1,21,50)',
              title: 'Product Team mtg.',
              color: '#913aa7',
            },
            {
              start: 'dyndatetime(y,m,d+2,13)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Decision Making mtg.',
              color: '#5bb7c5',
            },
            {
              start: 'dyndatetime(y,m,d+3,13)',
              end: 'dyndatetime(y,m,d+3,14)',
              title: 'Quick mtg. with Martin',
              color: '#fd002f',
            },
            {
              start: 'dyndatetime(y,m,d+4,12)',
              end: 'dyndatetime(y,m,d+4,16)',
              color: '#50b166',
              title: 'Team-Building',
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
<div id="demo-showing-events-timezone"></div>
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
