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
      var participants = {
        1: { name: 'Barry L.', img: 'https://img.mobiscroll.com/demos/m1.png' },
        2: { name: 'Hortense T.', img: 'https://img.mobiscroll.com/demos/f1.png' },
        3: { name: 'Carl H.', img: 'https://img.mobiscroll.com/demos/m2.png' },
      };
      var inst = $('#demo-event-content-template')
        .mobiscroll()
        .eventcalendar({
          // context,
          actionableEvents: false,
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'day' },
          },
          renderEventContent: function (data) {
            var participant = participants[data.original.participant];
            return (
              '<div>' +
              data.title +
              '</div>' +
              '<div class="mds-agenda-event-content mbsc-flex mbsc-align-items-center">' +
              '<img class="mds-agenda-event-avatar" alt="' +
              participant.name +
              '" src="' +
              participant.img +
              '"/>' +
              '<div class="mbsc-custom-event-name">' +
              participant.name +
              '</div>' +
              '<button mbsc-button class="mds-agenda-event-btn" data-color="secondary">Add participant</button>' +
              '</div>'
            );
          },
          onEventClick: function (args) {
            if (args.domEvent.target.classList.contains('mds-agenda-event-btn')) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: args.event.title + ' clicked',
              });
            }
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/custom-events/?callback=?', function (events) {
        inst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div id="demo-event-content-template"></div>
    `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-agenda-event-content {
    padding: 8px 0;
    font-size: 13px;
  }
  
  .mds-agenda-event-avatar {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  
  .mds-agenda-event-btn.mbsc-button {
    line-height: 20px;
  }
  
  .mds-agenda-event-btn.mbsc-ios {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
    `,
};
