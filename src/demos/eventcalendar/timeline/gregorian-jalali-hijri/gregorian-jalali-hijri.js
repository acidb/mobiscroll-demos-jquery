import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // theme
    });

    $(function () {
      var gregorian;
      var jalali;
      var hijri;
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

      gregorian = $('#demo-gregorian')
        .mobiscroll()
        .eventcalendar({
          // locale,
          view: {
            timeline: { type: 'day' },
          },
          resources: myResources,
        })
        .mobiscroll('getInst');

      jalali = $('#demo-jalali')
        .mobiscroll()
        .eventcalendar({
          calendarSystem: mobiscroll.jalaliCalendar,
          locale: mobiscroll.locale.fa,
          view: {
            timeline: { type: 'day' },
          },
          resources: myResources,
        })
        .mobiscroll('getInst');

      hijri = $('#demo-hijri')
        .mobiscroll()
        .eventcalendar({
          calendarSystem: mobiscroll.hijriCalendar,
          locale: mobiscroll.locale.ar,
          view: {
            timeline: { type: 'day' },
          },
          resources: myResources,
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
        function (events) {
          gregorian.setEvents(events);
          jalali.setEvents(events);
          hijri.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Gregorian calendar</div>
    <div id="demo-gregorian"></div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Jalali calendar</div>
    <div id="demo-jalali"></div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Hijri calendar</div>
    <div id="demo-hijri"></div>
</div>
  `,
};
