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
      var inst = $('#demo-custom-event-popover')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: {
              labels: false,
              popover: true,
              popoverClass: 'custom-event-popover',
            },
          },
          renderPopoverEventContent: function (data) {
            return (
              '<div">' +
              data.title +
              '</div>' +
              '<div class="md-custom-event-cont">' +
              '<img class="md-custom-event-img" src="' +
              getParticipant(data.original.participant).img +
              '"/>' +
              '<div class="mbsc-custom-event-name">' +
              getParticipant(data.original.participant).name +
              '</div>' +
              '<button mbsc-button class="md-custom-event-btn" data-color="primary" data-variant="outline">Add participant</button>' +
              '</div>'
            );
          },
          onEventClick: function (args) {
            if (args.domEvent.target.classList.contains('md-custom-event-btn')) {
              args.domEvent.stopPropagation();
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: getParticipant(args.event.participant).name + "'s event clicked",
              });
            }
          },
          //<hidden>
          onPageLoaded: function () {
            if (window.URLSearchParams && new URLSearchParams(window.location.search).get('screenshot')) {
              $('#demo-custom-event-popover .mbsc-calendar-slide-active .mbsc-calendar-marks').first().trigger('click');
            }
          }, //</hidden>
        })
        .mobiscroll('getInst');

      function getParticipant(id) {
        switch (id) {
          case 1:
            return {
              img: 'https://img.mobiscroll.com/demos/m1.png',
              name: 'Barry L.',
            };
          case 2:
            return {
              img: 'https://img.mobiscroll.com/demos/f1.png',
              name: 'Hortense T.',
            };
          case 3:
            return {
              img: 'https://img.mobiscroll.com/demos/m2.png',
              name: 'Carl H.',
            };
        }
      }

      $.getJSON(
        'https://trial.mobiscroll.com/custom-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div>
    <div id="demo-custom-event-popover"></div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-custom-event-img {
    width: 30px;
    height: 30px;
}

.mbsc-custom-event-name {
    padding: 0 10px;
}

.md-custom-event-cont {
    display: flex;
    align-items: center;
    padding-top: 10px;
    font-size: 13px;
}

.md-custom-event-btn.mbsc-button {
    position: absolute;
    right: 10px;
    bottom: 8px;
    line-height: 20px;
    padding: 0px 6px;
}

.custom-event-popover.mbsc-material .mbsc-popover-list .mbsc-event {
    padding: 10px 14px;
}

.custom-event-popover.mbsc-ios .mbsc-popover-list {
    width: 340px;
}

.custom-event-popover.mbsc-material .mbsc-popover-list {
    width: 320px;
}

.custom-event-popover.mbsc-windows .mbsc-popover-list {
    width: 340px;
}
  `,
};
