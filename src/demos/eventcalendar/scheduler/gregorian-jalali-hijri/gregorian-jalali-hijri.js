import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      var gregorian = $('#demo-gregorian')
        .mobiscroll()
        .eventcalendar({
          // drag,
          locale: mobiscroll.localeEn,
          view: {
            schedule: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      var jalali = $('#demo-jalali')
        .mobiscroll()
        .eventcalendar({
          // drag,
          calendarSystem: mobiscroll.jalaliCalendar,
          locale: mobiscroll.locale.fa,
          view: {
            schedule: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      var hijri = $('#demo-hijri')
        .mobiscroll()
        .eventcalendar({
          // drag,
          calendarSystem: mobiscroll.hijriCalendar,
          locale: mobiscroll.locale.ar,
          view: {
            schedule: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/events/?vers=5&callback=?', function (events) {
        gregorian.setEvents(events);
        jalali.setEvents(events);
        hijri.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
  <div class="mbsc-grid">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Gregorian calendar</div>
          <div id="demo-gregorian"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Jalali calendar</div>
          <div id="demo-jalali"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Hijri calendar</div>
          <div id="demo-hijri"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};
