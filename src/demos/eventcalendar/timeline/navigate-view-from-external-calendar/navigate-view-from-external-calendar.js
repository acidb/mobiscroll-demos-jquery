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
      var monthInst = $('#demo-month')
        .mobiscroll()
        .datepicker({
          display: 'inline',
          onChange: function (args) {
            dayInst.navigate(args.value);
          },
        })
        .mobiscroll('getInst');

      var dayInst = $('#demo-day')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: { type: 'day' },
          },
          resources: [
            { id: 1, name: 'Resource 1', color: 'red' },
            { id: 2, name: 'Resource 2', color: 'orange' },
            { id: 3, name: 'Resource 3', color: 'blue' },
          ],
          onSelectedDateChange: function (args) {
            monthInst.setVal(args.date);
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/filter-resource-events/?callback=?', function (events) {
        dayInst.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
  <div class="mds-external-nav-timeline mbsc-flex">
    <div class="mds-external-nav-dp">
      <div id="demo-month"></div>
    </div>
    <div  class="mds-external-nav-ec mbsc-flex-1-1">
      <div id="demo-day"></div>
    </div>
  </div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .mds-external-nav-timeline {
    height: 100%;
  }

  .mds-external-nav-dp .mbsc-datepicker-inline {
    height: auto;
  }

  .mds-external-nav-ec {
    border-left: 1px solid #ccc;
    overflow: hidden;
  }

  @media screen and (max-width: 700px) {
    .mds-external-nav-timeline {
      display: block;
    }
  }

  /*<hidden>*/
  .demo-navigate-view-from-external-calendar {
    height: 100%;
  }
  /*</hidden>*/
  `,
};
