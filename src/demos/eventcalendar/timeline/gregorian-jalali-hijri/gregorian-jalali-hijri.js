import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      var myResources = [
        {
          id: 1,
          name: 'Ryan',
          color: '#fdf500',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#ff4600',
        },
        {
          id: 3,
          name: 'John',
          color: '#ff0101',
        },
        {
          id: 4,
          name: 'Mark',
          color: '#239a21',
        },
        {
          id: 5,
          name: 'Sharon',
          color: '#8f1ed6',
        },
        {
          id: 6,
          name: 'Ashley',
          color: '#01adff',
        },
      ];
      var gregorian = $('#demo-gregorian')
        .mobiscroll()
        .eventcalendar({
          // drag,
          locale: mobiscroll.localeEn,
          resources: myResources,
          view: {
            timeline: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      var jalali = $('#demo-jalali')
        .mobiscroll()
        .eventcalendar({
          // drag,
          calendarSystem: mobiscroll.jalaliCalendar,
          locale: mobiscroll.locale.fa,
          resources: myResources,
          view: {
            timeline: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      var hijri = $('#demo-hijri')
        .mobiscroll()
        .eventcalendar({
          // drag,
          calendarSystem: mobiscroll.hijriCalendar,
          locale: mobiscroll.locale.ar,
          resources: myResources,
          view: {
            timeline: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/timeline-events/', function (events) {
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
