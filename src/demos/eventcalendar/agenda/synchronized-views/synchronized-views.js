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
      var monthInst = $('#demo-month')
        .mobiscroll()
        .eventcalendar({
          // context,
          height: 350,
          view: {
            calendar: { popover: false, labels: false },
          },
          onSelectedDateChange: function (args) {
            dayInst.navigate(args.date);
          },
        })
        .mobiscroll('getInst');

      var dayInst = $('#demo-day')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'day' },
          },
          onPageChange: function (args) {
            monthInst.navigate(args.firstDay);
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        dayInst.setEvents(events);
        monthInst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-sync-views">
    <div class="md-sync-cal">
        <div id="demo-month"></div>
    </div>
    <div class="md-sync-list">
        <div id="demo-day"></div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-sync-views {
    display: flex;
}

.md-sync-cal {
    width: 350px;
}

.md-sync-list {
    flex: 1;
    border-left: 1px solid #ccc;
}

.demo-synchronized-views,
.md-sync-views,
.md-sync-list {
    height: 100%;
}

@media screen and (max-width: 700px) {
    .md-sync-views {
        display: block;
    }
    .md-sync-cal {
        width: auto;
    }
}
  `,
};
