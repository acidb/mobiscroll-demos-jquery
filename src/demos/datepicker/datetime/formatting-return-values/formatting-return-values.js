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
      var now = new Date();

      $('#demo-date-def')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-sep')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'DD.MM.YYYY',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-month-only')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'MMMM',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-month')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'D MMMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-month-year')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'MM/YYYY',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-day')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'DDD DD MMM, YYYY',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-atom')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'YYYY-MM-DD',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-date-cookie')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          dateFormat: 'DDD, DD MMM YYYY',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-time-def')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-time-12h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'hh:mm A',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-time-24h')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'HH:mm',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-time-hms')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          timeFormat: 'HH:mm:ss',
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-datetime-def')
        .mobiscroll()
        .datepicker({
          controls: ['date', 'time'],
          onInit: function (event, inst) {
            inst.setVal(now);
          },
        });

      $('#demo-datetime-day')
        .mobiscroll()
        .datepicker({
          controls: ['date', 'time'],
          dateFormat: 'DDD D MMM, YYYY',
          timeFormat: 'H:mm',
          dateWheels: '|DDD D MMM, YYYY|',
          onInit: function (event, inst) {
            inst.setVal(now);
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
        Month only
        <input mbsc-input id="demo-date-month-only" />
    </label>
    <label>
        Month name
        <input mbsc-input id="demo-date-month" />
    </label>
    <label>
        Month/year
        <input mbsc-input id="demo-date-month-year" />
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
