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
      var currentWeek = ['dyndatetime(y,m,d)', 'dyndatetime(y,m,d+6)'];
      var currentHour = ['dyndatetime(y,m,d,h)', 'dyndatetime(y,m,d,h+2)'];

      $('#demo-date-def')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-date-sep')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DD.MM.YYYY',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-date-month')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'D MMMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-date-day')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DDD DD MMM, YYYY',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-date-atom')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'YYYY-MM-DD',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-date-cookie')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          dateFormat: 'DDD, DD MMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(currentWeek, true);
          },
        });

      $('#demo-time-def')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });

      $('#demo-time-12h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'hh:mm A',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });

      $('#demo-time-24h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'HH:mm',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });

      $('#demo-time-hms')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          timeFormat: 'HH:mm:ss',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });

      $('#demo-datetime-def')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          select: 'range',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });

      $('#demo-datetime-day')
        .mobiscroll()
        .datepicker({
          controls: ['calendar', 'time'],
          select: 'range',
          dateFormat: 'DDD D MMM, YYYY',
          timeFormat: 'H:mm',
          dateWheels: '|DDD D MMM, YYYY|',
          onInit: function (event, inst) {
            inst.setVal(currentHour, true);
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Date</div>
    <label>
        Default
        <input mbsc-input id="demo-date-def" />
    </label>
    <label>
        Separator
        <input mbsc-input id="demo-date-sep" />
    </label>
    <label>
        Month name
        <input mbsc-input id="demo-date-month" />
    </label>
    <label>
        Day of week
        <input mbsc-input id="demo-date-day" />
    </label>
    <label>
        ATOM
        <input mbsc-input id="demo-date-atom" />
    </label>
    <label>
        COOKIE
        <input mbsc-input id="demo-date-cookie" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Time</div>
    <label>
        Default
        <input mbsc-input id="demo-time-def" />
    </label>
    <label>
        12 h
        <input mbsc-input id="demo-time-12h" />
    </label>
    <label>
        24 h
        <input mbsc-input id="demo-time-24h" />
    </label>
    <label>
        Hour, min, sec
        <input mbsc-input id="demo-time-hms" />
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Date & Time</div>
    <label>
        Default
        <input mbsc-input id="demo-datetime-def" />
    </label>
    <label>
        Day name
        <input mbsc-input id="demo-datetime-day" />
    </label>
</div>
  `,
};
