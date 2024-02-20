import { googleCalendarSync as googleSync } from '@mobiscroll/calendar-integration';
import * as m from '@mobiscroll/jquery';
import $ from 'jquery';

var mobiscroll = Object.assign({}, m);
mobiscroll.googleCalendarSync = googleSync;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var googleCalendarSync = mobiscroll.googleCalendarSync;
      var CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';
      var $cont = $('#demo-google-cal');
      var view = 'month';
      var firstDay;
      var lastDay;
      var apiLoaded;

      //<hidden>
      if (window.gapi) {
        apiLoaded = true;
      } else {
        //</hidden>

        googleCalendarSync.init({
          apiKey: '<YOUR_GOOGLE_API_KEY>',
          onInit: loadEvents,
        });
        //<hidden>
      } //</hidden>

      function loadEvents() {
        apiLoaded = true;
        loadingEvents(true);
        googleCalendarSync
          .getEvents(CALENDAR_ID, firstDay, lastDay)
          .then(function (resp) {
            loadingEvents(false);
            calInst.setEvents(resp);
          })
          .catch(onError);
      }

      function loadingEvents(show) {
        if (show) {
          $cont.addClass('md-loading-events');
        } else {
          $cont.removeClass('md-loading-events');
        }
      }

      function onError(resp) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: resp.error ? resp.error : resp.result.error.message,
        });
      }

      var calInst = $('#demo-google-cal')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              labels: true,
            },
          },
          exclusiveEndDates: true,
          onPageLoading: function (args) {
            var start = args.viewStart;
            var end = args.viewEnd;

            // Calculate dates
            // (pre-load events for previous and next pages as well)
            if (view == 'month') {
              firstDay = start;
              lastDay = end;
            } else {
              firstDay = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 7);
              lastDay = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
            }

            if (apiLoaded) {
              loadEvents();
            }
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="google-cal-header-nav"></div>' +
              '<div class="md-spinner">' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '<div class="md-spinner-blade"></div>' +
              '</div>' +
              '<div class="google-cal-header-picker">' +
              '<label>Month<input mbsc-segmented type="radio" name="google-calendar-view" value="month" class="md-google-calendar-view" checked></label>' +
              '<label>Week<input mbsc-segmented type="radio" name="google-calendar-view" value="week" class="md-google-calendar-view"></label>' +
              '<label>Day<input mbsc-segmented type="radio" name="google-calendar-view" value="day" class="md-google-calendar-view"></label>' +
              '<label>Agenda<input mbsc-segmented type="radio" name="google-calendar-view" value="agenda" class="md-google-calendar-view"></label>' +
              '</div>' +
              '<div mbsc-calendar-prev class="google-cal-header-prev"></div>' +
              '<div mbsc-calendar-today class="google-cal-header-today"></div>' +
              '<div mbsc-calendar-next class="google-cal-header-next"></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('.md-google-calendar-view').change(function (ev) {
        view = ev.target.value;
        switch (view) {
          case 'month':
            calInst.setOptions({
              view: {
                calendar: {
                  labels: true,
                },
              },
            });
            break;
          case 'week':
            calInst.setOptions({
              view: {
                schedule: { type: 'week' },
              },
            });
            break;
          case 'day':
            calInst.setOptions({
              view: {
                schedule: { type: 'day' },
              },
            });
            break;
          case 'agenda':
            calInst.setOptions({
              view: {
                calendar: { type: 'week' },
                agenda: { type: 'week' },
              },
            });
            break;
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-1100">
    <!--/hidden-->
    <div id="demo-google-cal" class="md-google-calendar"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-google-calendar .mbsc-segmented {
    max-width: 300px;
    margin: 0 auto;
}

.google-cal-header-picker {
    flex: 1 0 auto;
}

/* material header order */

.mbsc-material.google-cal-header-prev {
    order: 1;
}

.mbsc-material.google-cal-header-next {
    order: 2;
}

.mbsc-material.google-cal-header-nav {
    order: 3;
}

.mbsc-material .google-cal-header-picker {
    order: 4;
}

.mbsc-material .google-cal-header-today {
    order: 5;
}

/* windows header order */

.mbsc-windows.google-cal-header-nav {
    order: 1;
}

.mbsc-windows.google-cal-header-prev {
    order: 2;
}

.mbsc-windows.google-cal-header-next {
    order: 3;
}

.mbsc-windows .google-cal-header-picker {
    order: 4;
}

.mbsc-windows .google-cal-header-today {
    order: 5;
}

/* loading spinner and overlay */

.md-loading-events .md-sync-events-overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.md-spinner {
    visibility: hidden;
    position: relative;
    width: 20px;
    height: 20px;
}

.md-loading-events .md-spinner {
    visibility: visible;
}

.md-spinner .md-spinner-blade {
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 25%;
    border-radius: 50%/20%;
    background-color: #8C8C8C;
    -webkit-animation: md-spinner-fade 1s linear infinite;
    animation: md-spinner-fade 1s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
}

.md-spinner .md-spinner-blade:nth-child(1) {
    -webkit-animation-delay: -1.66667s;
    animation-delay: -1.66667s;
    -webkit-transform: rotate(30deg) translate(0, -150%);
    transform: rotate(30deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(2) {
    -webkit-animation-delay: -1.58333s;
    animation-delay: -1.58333s;
    -webkit-transform: rotate(60deg) translate(0, -150%);
    transform: rotate(60deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(3) {
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
    -webkit-transform: rotate(90deg) translate(0, -150%);
    transform: rotate(90deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(4) {
    -webkit-animation-delay: -1.41667s;
    animation-delay: -1.41667s;
    -webkit-transform: rotate(120deg) translate(0, -150%);
    transform: rotate(120deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(5) {
    -webkit-animation-delay: -1.33333s;
    animation-delay: -1.33333s;
    -webkit-transform: rotate(150deg) translate(0, -150%);
    transform: rotate(150deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(6) {
    -webkit-animation-delay: -1.25s;
    animation-delay: -1.25s;
    -webkit-transform: rotate(180deg) translate(0, -150%);
    transform: rotate(180deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(7) {
    -webkit-animation-delay: -1.16667s;
    animation-delay: -1.16667s;
    -webkit-transform: rotate(210deg) translate(0, -150%);
    transform: rotate(210deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(8) {
    -webkit-animation-delay: -1.08333s;
    animation-delay: -1.08333s;
    -webkit-transform: rotate(240deg) translate(0, -150%);
    transform: rotate(240deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(9) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    -webkit-transform: rotate(270deg) translate(0, -150%);
    transform: rotate(270deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(10) {
    -webkit-animation-delay: -0.91667s;
    animation-delay: -0.91667s;
    -webkit-transform: rotate(300deg) translate(0, -150%);
    transform: rotate(300deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(11) {
    -webkit-animation-delay: -0.83333s;
    animation-delay: -0.83333s;
    -webkit-transform: rotate(330deg) translate(0, -150%);
    transform: rotate(330deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(12) {
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
    -webkit-transform: rotate(360deg) translate(0, -150%);
    transform: rotate(360deg) translate(0, -150%);
}

.md-loading-events .md-spinner-blade {
    -webkit-animation-play-state: running;
    animation-play-state: running;
}

@-webkit-keyframes md-spinner-fade {
    0% {
        opacity: 0.85;
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes md-spinner-fade {
    0% {
        opacity: 0.85;
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
  `,
};
