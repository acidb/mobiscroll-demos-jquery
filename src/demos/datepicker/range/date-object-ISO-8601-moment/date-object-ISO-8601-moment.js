import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import moment from 'moment';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var dateInstance = $('#demo-date')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          onChange: function (event, inst) {
            updateValue('returnVal', inst);
          },
        })
        .mobiscroll('getInst');
      var isoInstance = $('#demo-iso')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          returnFormat: 'iso8601',
          onChange: function (event, inst) {
            updateValue('returnISO', inst);
          },
        })
        .mobiscroll('getInst');
      var momentInstance = $('#demo-moment')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          returnFormat: 'moment',
          onChange: function (event, inst) {
            updateValue('returnMoment', inst);
          },
        })
        .mobiscroll('getInst');

      $('#setDate').click(function () {
        $('#demo-date').mobiscroll('setVal', [new Date(2020, 10, 15), new Date(2020, 10, 21)], true);
        updateValue('returnVal', dateInstance);
      });

      $('#setISO').click(function () {
        $('#demo-iso').mobiscroll('setVal', ['2020-05-20', '2020-05-26'], true);
        updateValue('returnISO', isoInstance);
      });

      $('#setMoment').click(function () {
        // Make sure that moment js is loaded
        $('#demo-moment').mobiscroll('setVal', [moment([2020, 2, 6]), moment([2020, 2, 12])], true);
        updateValue('returnMoment', momentInstance);
      });

      function updateValue(id, inst) {
        setTimeout(function () {
          if (id == 'returnMoment') {
            var value = inst.getVal();
            document.getElementById(id).innerHTML = value[0].format() + ' - ' + value[1].format();
          } else {
            document.getElementById(id).innerHTML = inst.getVal();
          }
        });
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Js Date Objects</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setDate">Set: Sun Nov 15 2020 - Sat Nov 21 2020</button>
    </div>
    <label>
        Date object
        <input mbsc-input id="demo-date" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnVal"></text>
</div>

<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Date strings</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setISO">Set: 2020-05-20 - 2020-05-26</button>
    </div>
    <label>
        ISO string
        <input mbsc-input id="demo-iso" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnISO"></text>
</div>

<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Working with Moment JS Objects</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="setMoment">Set: 2020-03-06 - 2020-03-12</button>
    </div>
    <label>
        Moment JS
        <input mbsc-input id="demo-moment" />
    </label>
</div>
<div class="mbsc-padding">
    Return value: <text id="returnMoment"></text>
</div>
  `,
};
