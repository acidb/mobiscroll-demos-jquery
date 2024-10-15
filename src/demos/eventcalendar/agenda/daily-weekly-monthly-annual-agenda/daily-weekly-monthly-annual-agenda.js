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
      var daily = $('#demo-agenda-daily')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      var weekly = $('#demo-agenda-weekly')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'week' },
          },
        })
        .mobiscroll('getInst');

      var monthly = $('#demo-agenda-monthly')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'month' },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events-new/?vers=5&callback=?', function (events) {
        daily.setEvents(events);
        weekly.setEvents(events);
        monthly.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-1100" mbsc-page>
    <!--/hidden-->
    <div class="mbsc-grid">
        <div class="mbsc-row">
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div class="mbsc-form-group-title">Daily agenda</div>
                    <div id="demo-agenda-daily"></div>
                </div>
            </div>
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div class="mbsc-form-group-title">Weekly agenda</div>
                    <div id="demo-agenda-weekly"></div>
                </div>
            </div>
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div class="mbsc-form-group-title">Monthly agenda</div>
                    <div id="demo-agenda-monthly"></div>
                </div>
            </div>
        </div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
