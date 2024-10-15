import { outlookCalendarSync as outlookSync } from '@mobiscroll/calendar-integration';
import * as m from '@mobiscroll/jquery';
import $ from 'jquery';

var mobiscroll = Object.assign({}, m);
mobiscroll.outlookCalendarSync = outlookSync;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var outlookCalendarSync = mobiscroll.outlookCalendarSync;
      var calendarIds = [];
      var myEvents = [];
      var startDate;
      var endDate;
      var loader;
      var timer;

      function isLoading(loading) {
        loader = loader || $('#demo-sync-outlook-cal-loader');
        loader.css('visibility', loading ? 'visible' : 'hidden');
      }

      function toggleButtons(loggedIn) {
        if (loggedIn) {
          $btnSignIn.hide();
          $btnCalPopup.show();
        } else {
          $btnSignIn.show();
          $btnCalPopup.hide();
        }
      }

      function toggleCalendar(checked, calendarId) {
        if (checked) {
          isLoading(true);
          calendarIds.push(calendarId);
          outlookCalendarSync
            .getEvents([calendarId], startDate, endDate)
            .then(function (resp) {
              myEvents = myEvents.concat(resp);
              inst.setEvents(myEvents);
              isLoading(false);
            })
            .catch(function (error) {
              onError(error);
            });
        } else {
          calendarIds = calendarIds.filter(function (id) {
            return id !== calendarId;
          });
          myEvents = myEvents.filter(function (event) {
            return event.outlookCalendarId !== calendarId;
          });
          inst.setEvents(myEvents);
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

      function onSignedIn() {
        toggleButtons(true);
        calendarIds = [];
        outlookCalendarSync
          .getCalendars()
          .then(function (calendars) {
            var calList = '';

            calendars.sort(function (c) {
              return c.primary ? -1 : 1;
            });

            calendars.forEach(function (c) {
              calList +=
                '<label>' +
                '<input mbsc-switch value="' +
                c.id +
                '" data-label="' +
                c.name +
                '" type="checkbox" class="mds-outlook-cal-switch" checked />' +
                '</label>';

              calendarIds.push(c.id);
            });

            $calendarList.html(calList);
            mobiscroll.enhance($calendarList[0]);

            isLoading(true);

            return outlookCalendarSync.getEvents(calendarIds, startDate, endDate);
          })
          .then(function (resp) {
            myEvents = resp;
            inst.setEvents(myEvents);
            isLoading(false);
          })
          .catch(onError);
      }

      function onSignedOut() {
        toggleButtons(false);
        calendarIds = [];
        myEvents = [];
        inst.setEvents([]);
        popup.close();
      }

      var inst = $('#demo-sync-outlook-cal')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'month' },
          },
          exclusiveEndDates: true,
          onPageLoading: function (args) {
            startDate = args.viewStart;
            endDate = args.viewEnd;
            clearTimeout(timer);
            timer = setTimeout(function () {
              if (outlookCalendarSync.isSignedIn()) {
                isLoading(true);
                outlookCalendarSync
                  .getEvents(calendarIds, startDate, endDate)
                  .then(function (resp) {
                    myEvents = resp;
                    inst.setEvents(myEvents);
                    isLoading(false);
                  })
                  .catch(onError);
              }
            }, 200);
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div id="demo-sync-outlook-cal-loader" class="mds-loader"></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button mbsc-button id="demo-sync-outlook-cal-sign-in">Sync my Outlook calendars</button>' +
              '<button mbsc-button id="demo-sync-outlook-cal-popup-btn" style="display:none">My Calendars</button>' +
              '<button mbsc-button id="demo-sync-outlook-cal-today">Today</button></div>' +
              '</div>' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-next></button>'
            );
          },
        })
        .mobiscroll('getInst');

      var $btnSignIn = $('#demo-sync-outlook-cal-sign-in');
      var $btnSignOut = $('#demo-sync-outlook-cal-sign-out');
      var $btnCalPopup = $('#demo-sync-outlook-cal-popup-btn');
      var $btnCalToday = $('#demo-sync-outlook-cal-today');
      var $calendarList = $('#demo-sync-outlook-cal-list');

      var popup = $('#demo-sync-outlook-cal-popup')
        .mobiscroll()
        .popup({
          anchor: $btnCalPopup[0],
          contentPadding: false,
          display: 'anchored',
          scrollLock: false,
          showOverlay: false,
          touchUi: false,
          width: 400,
        })
        .mobiscroll('getInst');

      $btnCalPopup.on('click', function () {
        popup.open();
      });

      $btnCalToday.on('click', function () {
        inst.navigate(new Date());
      });

      $btnSignIn.on('click', function () {
        if (!outlookCalendarSync.isSignedIn()) {
          outlookCalendarSync.signIn().catch(onError);
        }
      });

      $btnSignOut.on('click', function () {
        outlookCalendarSync.signOut().catch(onError);
      });

      $calendarList.on('change', '.mds-outlook-cal-switch', function (ev) {
        toggleCalendar(ev.target.checked, ev.target.value);
      });

      // Init Outlook Client
      outlookCalendarSync.init({
        apiKey: '<YOUR_outlook_API_KEY>',
        clientId: '<YOUR_outlook_CLIENT_ID>',
        onSignedIn: onSignedIn,
        onSignedOut: onSignedOut,
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-sync-outlook-cal"></div>
<div id="demo-sync-outlook-cal-popup">
  <div class="mbsc-form-group-inset">
    <div class="mbsc-form-group-title">My calendars</div>
    <div id="demo-sync-outlook-cal-list"></div>
  </div>
  <div class="mbsc-form-group-inset">
    <button mbsc-button id="demo-sync-outlook-cal-sign-out" class="mbsc-button-block">Sign out of my account</button>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
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
  `,
};
