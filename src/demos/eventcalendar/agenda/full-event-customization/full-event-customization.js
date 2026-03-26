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
      var inst = $('#demo-event-template')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'month' },
          },
          renderAgendaEvent: function (data) {
            return (
              '<div class="mbsc-flex mbsc-flex-1-1">' +
              '<img class="mds-agenda-event-img" src="https://img.mobiscroll.com/demos/' +
              data.original.img +
              '" />' +
              '<div class="mbsc-flex-1-1">' +
              '<div class="mds-agenda-event-title">' +
              data.title +
              '</div>' +
              '<div class="mbsc-flex">' +
              '<div class="mds-agenda-event-location mbsc-flex-1-1">' +
              '<div class="mds-agenda-event-label">Location</div>' +
              '<div>' +
              data.original.location +
              '</div>' +
              '</div>' +
              '<div class="mds-agenda-event-time">' +
              '<div class="mds-agenda-event-label">Time</div>' +
              '<div>' +
              data.start +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/agenda-events/?callback=?', function (events) {
        inst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-agenda-event-img {
  width: 100px;
  margin-right: 10px;
  border-radius: 6px;
}

.mds-agenda-event-title {
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 10px;
}

.mds-agenda-event-location {
  line-height: 1.4;
  margin-right: 40px;
}

.mds-agenda-event-time {
  line-height: 1.4;
}

.mds-agenda-event-label {
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
}
  `,
};
