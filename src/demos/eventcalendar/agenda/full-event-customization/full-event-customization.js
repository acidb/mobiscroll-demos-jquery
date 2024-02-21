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
      var inst = $('#demo-full-event-customization')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'month' },
          },
          renderEvent: function (data) {
            return (
              '<div class="md-full-event"><img class="md-full-event-img" src="https://img.mobiscroll.com/demos/' +
              data.original.img +
              '" />' +
              '<div class="md-full-event-details">' +
              '<div class="md-full-event-title">' +
              data.title +
              '</div>' +
              '<div class="md-full-event-location">' +
              '<div class="md-full-event-label">Location</div><div>' +
              data.original.location +
              '</div>' +
              '</div><div class="md-full-event-time">' +
              '<div class="md-full-event-label">Time</div><div>' +
              data.start +
              '</div>' +
              '</div></div></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/agenda-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-full-event-customization"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-full-event {
    width: 100%;
    padding: 10px 0;
}

.md-full-event-img {
    width: 100px;
    border-radius: 6px;
    float: left;
}

.md-full-event-details {
    margin-left: 114px;
}

.md-full-event-title {
    font-size: 17px;
    font-weight: 600;
    padding-bottom: 10px;
}

.md-full-event-location {
    display: inline-block;
    line-height: 1.4;
    margin-right: 40px;
}

.md-full-event-time {
    display: inline-block;
    line-height: 1.4;
}

.md-full-event-label {
    font-size: 12px;
    font-weight: 600;
    color: #aaa;
}

/*<hidden>*/

.demo-full-event-customization,
mbsc-page.mbsc-page {
    height: 100%;
}

/*</hidden>*/
  `,
};
