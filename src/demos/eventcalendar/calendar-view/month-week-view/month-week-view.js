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
      var one;
      var two;
      var three;

      one = $('#demo-one-week-view')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week' },
          },
        })
        .mobiscroll('getInst');

      two = $('#demo-two-week-view')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week', size: 2 },
          },
        })
        .mobiscroll('getInst');

      three = $('#demo-three-week-view')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week', size: 3 },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          one.setEvents(events);
          two.setEvents(events);
          three.setEvents(events);
        },
        'jsonp',
      );
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
                    <div class="mbsc-form-group-title">One week view</div>
                    <div id="demo-one-week-view"></div>
                </div>
            </div>
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div class="mbsc-form-group-title">Two week view</div>
                    <div id="demo-two-week-view"></div>
                </div>
            </div>
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div class="mbsc-form-group-title">Three week view</div>
                    <div id="demo-three-week-view"></div>
                </div>
            </div>
        </div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
