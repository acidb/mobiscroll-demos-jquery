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
      var now = new Date();
      var min = now;
      var max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

      $('#demo-flight-booking-single')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'anchored',
          min: min,
          max: max,
          pages: 2,
          buttons: ['set', 'cancel'],
        });

      $('#demo-flight-booking-outbound')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'anchored',
          startInput: '#demo-flight-booking-outbound',
          endInput: '#demo-flight-booking-return',
          min: min,
          max: max,
          pages: 2,
        });

      $('#demo-flight-booking-inv-outbound')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'anchored',
          startInput: '#demo-flight-booking-inv-outbound',
          endInput: '#demo-flight-booking-inv-return',
          min: min,
          max: max,
          pages: 2,
          invalid: [
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'TU,TH',
              },
            },
            new Date(now.getFullYear(), now.getMonth(), 25),
          ],
        });

      var booking = $('#demo-flight-booking-type-outbound')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'anchored',
          startInput: '#demo-flight-booking-type-outbound',
          endInput: '#demo-flight-booking-type-return',
          min: min,
          max: max,
          pages: 2,
        })
        .mobiscroll('getInst');

      $('.demo-flight-type').on('change', function () {
        var oneWay = this.value == 'oneway';
        $('#demo-flight-booking-type-return').mobiscroll('getInst').setOptions({ disabled: oneWay });

        if (oneWay) {
          booking.setOptions({
            select: 'date',
          });
        } else {
          booking.setOptions({
            select: 'range',
          });
        }
      });

      var singleBooking = $('#demo-flight-booking-custom')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'anchored',
          min: min,
          max: max,
          pages: 2,
          buttons: [
            'cancel',
            {
              text: 'One way only',
              disabled: true,
              handler: function () {
                var start = singleBooking.getTempVal()[0];

                singleBooking.setVal([start, null]);
                singleBooking.close();
              },
            },
            'set',
          ],
          onTempChange: function (event, inst) {
            inst.setOptions({
              buttons: [
                'cancel',
                {
                  text: 'One way only',
                  disabled: !inst.getTempVal()[0],
                  handler: function () {
                    var start = singleBooking.getTempVal()[0];

                    singleBooking.setVal([start, null]);
                    singleBooking.close();
                  },
                },
                'set',
              ],
            });
          },
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">

    <div class="mbsc-row">
        <div class="mbsc-col-12">
            <label>
                Pick your flight
                <input id="demo-flight-booking-single" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>

    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Outbound
                <input id="demo-flight-booking-outbound" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                Return
                <input id="demo-flight-booking-return" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>

    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Outbound
                <input id="demo-flight-booking-inv-outbound" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                Return
                <input id="demo-flight-booking-inv-return" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>

    <div class="mbsc-row">
        <label>
            Round trip
            <input class="demo-flight-type" value="round" mbsc-radio data-theme="material" data-theme-variant="light" type="radio" name="flight-type" checked>
        </label>
        <label>
            One way
            <input class="demo-flight-type" value="oneway" mbsc-radio data-theme="material" data-theme-variant="light" type="radio" name="flight-type">
        </label>
    </div>
    <div class="mbsc-row">
        <div class="mbsc-col-6">
            <label>
                Outbound
                <input id="demo-flight-booking-type-outbound" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
        <div class="mbsc-col-6">
            <label>
                Return
                <input id="demo-flight-booking-type-return" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>

    <div class="mbsc-row">
        <div class="mbsc-col-12">
            <label>
                Pick your flight
                <input id="demo-flight-booking-custom" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="Please select..." />
            </label>
        </div>
    </div>
</div>
  `,
};
