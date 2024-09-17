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
      var formatDate = mobiscroll.formatDate;
      var timer;
      var $tooltip = $('#demo-event-tooltip-popup');

      var $title = $('#demo-tooltip-event-title');
      var $startDate = $('#demo-tooltip-event-start');
      var $endDate = $('#demo-tooltip-event-end');

      var myEvents = [
        {
          title: 'CEO Strategy Meeting',
          start: 'dyndatetime(y,m,1,10)',
          end: 'dyndatetime(y,m,1,11)',
          color: '#FF5733',
        },
        {
          title: 'Board of Directors Briefing',
          start: 'dyndatetime(y,m,3,14)',
          end: 'dyndatetime(y,m,3,15)',
          color: '#33C4FF',
        },
        {
          title: 'Quarterly Review',
          start: 'dyndatetime(y,m,5,9)',
          end: 'dyndatetime(y,m,5,10)',
          color: '#33FF77',
        },
        {
          title: 'Executive Team Lunch',
          start: 'dyndatetime(y,m,7,12)',
          end: 'dyndatetime(y,m,7,13)',
          color: '#FFC733',
        },
        {
          title: 'Investor Meeting',
          start: 'dyndatetime(y,m,10,11)',
          end: 'dyndatetime(y,m,10,12)',
          color: '#9B59B6',
        },
        {
          title: 'Product Launch Review',
          start: 'dyndatetime(y,m,12,13)',
          end: 'dyndatetime(y,m,12,14)',
          color: '#FF6347',
        },
        {
          title: 'Press Conference Preparation',
          start: 'dyndatetime(y,m,14,16)',
          end: 'dyndatetime(y,m,14,17)',
          color: '#1E90FF',
        },
        {
          title: 'Client Partnership Discussion',
          start: 'dyndatetime(y,m,18,10)',
          end: 'dyndatetime(y,m,18,11)',
          color: '#FFD700',
        },
        {
          title: 'CEO’s Weekly Report',
          start: 'dyndatetime(y,m,20,9)',
          end: 'dyndatetime(y,m,20,10)',
          color: '#20B2AA',
        },
        {
          title: 'Town Hall Meeting',
          start: 'dyndatetime(y,m,25,14)',
          end: 'dyndatetime(y,m,25,15)',
          color: '#FF4500',
        },
      ];

      $('#demo-event-tooltip-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: {
              type: 'month',
            },
          },
          data: myEvents,
          onEventHoverIn: function (args) {
            var event = args.event;
            $title.text(event.title);
            $startDate.text(formatDate('hh:mm A', new Date(event.start)));
            $endDate.text(formatDate('hh:mm A', new Date(event.end)));

            clearTimeout(timer);
            timer = null;

            tooltip.setOptions({ anchor: args.domEvent.target });
            tooltip.open();
          },
          onEventHoverOut: function () {
            if (!timer) {
              timer = setTimeout(function () {
                tooltip.close();
              }, 200);
            }
          },
        })
        .mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          width: 250,
        })
        .mobiscroll('getInst');

      $tooltip.on('mouseenter', function () {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      });

      $tooltip.on('mouseleave', function () {
        timer = setTimeout(function () {
          tooltip.close();
        }, 200);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-tooltip-calendar"></div>

<div id="demo-event-tooltip-popup" style="display: none;">
    <div class="mds-tooltip-event-title-cont">
        <span id="demo-tooltip-event-title"></span>
    </div>
    <div class="mds-tooltip-start-cont mbsc-flex">
        <span class="mds-tooltip-label">Start:</span>
        <span id="demo-tooltip-event-start"></span>
    </div>
    <div class="mds-tooltip-end-cont mbsc-flex">
        <span class="mds-tooltip-label">End:</span>
        <span id="demo-tooltip-event-end"></span>
    </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-tooltip-event-title-cont {
    margin-bottom: 15px;
    text-align: center;
    font-size: 16px;
}

.mds-tooltip-start-cont,
.mds-tooltip-end-cont {
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 14px;
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
}

.mds-tooltip-label {
    font-weight: 600;
}

/*<hidden>*/
.demo-show-hide-tooltip-hover-in-out {
  height: 100%;
}
/*</hidden>*/
`,
};
