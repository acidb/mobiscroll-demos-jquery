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
      var CALENDAR_ID = 'theacidmedia.net_8l6v679q5j2f7q8lpmcjr4mm3k@group.calendar.google.com';
      var googleCalendarSync = mobiscroll.googleCalendarSync;
      var currentView = 'agenda';
      var firstDay;
      var lastDay;
      var loader;
      var apiLoaded;

      function showLoader() {
        loader = loader || $('#demo-google-cal-loader');
        loader.css('visibility', 'visible');
      }

      function hideLoader() {
        loader.css('visibility', 'hidden');
      }

      function loadEvents() {
        showLoader();
        googleCalendarSync
          .getEvents(CALENDAR_ID, firstDay, lastDay)
          .then(function (resp) {
            apiLoaded = true;
            hideLoader();
            calendar.setEvents(resp);
          })
          .catch(onError);
      }

      function onError(resp) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: resp.error ? resp.error : resp.result.error.message,
        });
      }

      var calendar = $('#demo-google-cal')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          },
          exclusiveEndDates: true,
          onPageLoading: function (args) {
            var start = args.viewStart;
            var end = args.viewEnd;

            // Calculate dates
            // (pre-load events for previous and next pages as well)
            if (currentView == 'month') {
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
              '<div mbsc-calendar-nav class="mds-google-cal-nav"></div>' +
              '<div id="demo-google-cal-loader" class="mds-loader"></div>' +
              '<div class="mds-google-cal-switch mbsc-flex-1-0">' +
              '<label>Month<input mbsc-segmented type="radio" name="view" value="month" class="mds-google-cal-view"></label>' +
              '<label>Week<input mbsc-segmented type="radio" name="view" value="week" class="mds-google-cal-view"></label>' +
              '<label>Day<input mbsc-segmented type="radio" name="view" value="day" class="mds-google-cal-view"></label>' +
              '<label>Agenda<input mbsc-segmented type="radio" name="view" value="agenda" class="mds-google-cal-view" checked></label>' +
              '</div>' +
              '<div mbsc-calendar-prev class="mds-google-cal-prev"></div>' +
              '<div mbsc-calendar-today class="mds-google-cal-today"></div>' +
              '<div mbsc-calendar-next class="mds-google-cal-next"></div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('.mds-google-cal-view').on('change', function (ev) {
        currentView = ev.target.value;
        switch (currentView) {
          case 'month':
            calendar.setOptions({
              view: { calendar: { labels: true } },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: { schedule: { type: 'week' } },
            });
            break;
          case 'day':
            calendar.setOptions({
              view: { schedule: { type: 'day' } },
            });
            break;
          case 'agenda':
            calendar.setOptions({
              view: {
                calendar: { type: 'week' },
                agenda: { type: 'week' },
              },
            });
            break;
        }
      });

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
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-google-cal"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-google-cal-switch .mbsc-segmented {
  max-width: 300px;
  margin: 0 auto;
}

.mds-google-cal-nav {
  width: 200px;
}

.mds-loader {
  width: 32px;
  height: 32px;
  border: 4px solid #8c8c8c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: mds-loader-rotation 1s linear infinite;
  visibility: hidden;
}

@keyframes mds-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Material header order */

.mbsc-material.mds-google-cal-prev {
  order: 1;
}

.mbsc-material.mds-google-cal-next {
  order: 2;
}

.mbsc-material.mds-google-cal-nav {
  order: 3;
}

.mbsc-material .mds-google-cal-switch {
  order: 4;
}

.mbsc-material .mds-google-cal-today {
  order: 5;
}

/* Windows header order */

.mbsc-windows.mds-google-cal-nav {
  order: 1;
}

.mbsc-windows.mds-google-cal-prev {
  order: 2;
}

.mbsc-windows.mds-google-cal-next {
  order: 3;
}

.mbsc-windows .mds-google-cal-switch {
  order: 4;
}

.mbsc-windows .mds-google-cal-today {
  order: 5;
}
  `,
};
