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
      var min = 'dyndatetime(y,m,d)';
      var max = 'dyndatetime(y,m+6,d)';

      $('#demo-booking-single')
        .mobiscroll()
        .datepicker({
          display: 'inline',
          controls: ['calendar'],
          min: min,
          max: max,
          pages: 'auto',
          onPageLoading: function (event, inst) {
            getPrices(event.firstDay, function callback(bookings) {
              inst.setOptions({
                labels: bookings.labels,
                invalid: bookings.invalid,
              });
            });
          },
        });

      $('#demo-booking-datetime')
        .mobiscroll()
        .datepicker({
          display: 'inline',
          controls: ['calendar', 'timegrid'],
          min: min,
          max: max,
          minTime: '08:00',
          maxTime: '19:59',
          stepMinute: 60,
          width: null,
          onPageLoading: function (event, inst) {
            getDatetimes(event.firstDay, function callback(bookings) {
              inst.setOptions({
                labels: bookings.labels,
                invalid: bookings.invalid,
              });
            });
          },
        });

      $('#demo-booking-multiple')
        .mobiscroll()
        .datepicker({
          display: 'inline',
          controls: ['calendar'],
          min: min,
          max: max,
          pages: 'auto',
          selectMultiple: true,
          onInit: function (event, inst) {
            inst.setVal(['dyndatetime(y,m,11)', 'dyndatetime(y,m,16)', 'dyndatetime(y,m,17)'], true);
          },
          onPageLoading: function (event, inst) {
            getBookings(event.firstDay, function callback(bookings) {
              inst.setOptions({
                labels: bookings.labels,
                invalid: bookings.invalid,
              });
            });
          },
        });

      function getPrices(d, callback) {
        var invalid = [];
        var labels = [];

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
          function (bookings) {
            for (var i = 0; i < bookings.length; ++i) {
              var booking = bookings[i];
              var d = new Date(booking.d);

              if (booking.price > 0) {
                labels.push({
                  start: d,
                  title: '$' + booking.price,
                  textColor: '#e1528f',
                });
              } else {
                invalid.push(d);
              }
            }
            callback({ labels: labels, invalid: invalid });
          },
          'jsonp',
        );
      }

      function getDatetimes(day, callback) {
        var invalid = [];
        var labels = [];

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/getbookingtime/?year=' + day.getFullYear() + '&month=' + day.getMonth(),
          function (bookings) {
            for (var i = 0; i < bookings.length; ++i) {
              var booking = bookings[i];
              var bDate = new Date(booking.d);

              if (booking.nr > 0) {
                labels.push({
                  start: bDate,
                  title: booking.nr + ' SPOTS',
                  textColor: '#e1528f',
                });
                $.merge(invalid, booking.invalid);
              } else {
                invalid.push(bDate);
              }
            }
            callback({ labels: labels, invalid: invalid });
          },
          'jsonp',
        );
      }

      function getBookings(d, callback) {
        var invalid = [];
        var labels = [];

        mobiscroll.getJson(
          'https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(),
          function (bookings) {
            for (var i = 0; i < bookings.length; ++i) {
              var booking = bookings[i];
              var d = new Date(booking.d);

              if (booking.nr > 0) {
                labels.push({
                  start: d,
                  title: booking.nr + ' SPOTS',
                  textColor: '#e1528f',
                });
              } else {
                invalid.push(d);
              }
            }
            callback({ labels: labels, invalid: invalid });
          },
          'jsonp',
        );
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="md-calendar-booking">
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Single date & appointment booking</div>
        <div id="demo-booking-single"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Select date & time</div>
        <div id="demo-booking-datetime" class="booking-datetime"></div>
    </div>
    <div class="mbsc-form-group">
        <div class="mbsc-form-group-title">Booking multiple appointments</div>
        <div id="demo-booking-multiple"></div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-calendar-booking .mbsc-calendar-text {
    text-align: center;
}

.md-calendar-booking .booking-datetime .mbsc-datepicker-tab-calendar {
    flex: 1 1 0;
    min-width: 300px;
}

.md-calendar-booking .mbsc-timegrid-item {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
}

.md-calendar-booking .mbsc-timegrid-container {
    top: 30px;
}
  `,
};
