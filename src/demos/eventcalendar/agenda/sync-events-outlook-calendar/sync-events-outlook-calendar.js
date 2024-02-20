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

      var $calendar = $('#demo-sync-events-outlook-calendar');
      var $popup = $('#demo-sync-events-outlook-calendar-popup');

      var startDate;
      var endDate;
      var calendarIds = [];
      var events = [];
      var debounce;

      function toggleContainers(loggedIn) {
        var $loggedOutCont = $('#outlook-cal-sign-in');
        var $loggedInCont = $('#outlook-cal-get-calendars');

        if (loggedIn) {
          $loggedOutCont.hide();
          $loggedInCont.show();
        } else {
          $loggedInCont.hide();
          $loggedOutCont.show();
        }
      }

      function loadEvents(checked, calendarId) {
        if (checked) {
          loadingEvents(true);
          calendarIds.push(calendarId);
          outlookCalendarSync
            .getEvents([calendarId], startDate, endDate)
            .then(function (resp) {
              var newEvents = resp;
              loadingEvents(false);
              events = events.concat(newEvents);
              inst.setEvents(events);
            })
            .catch(onError);
        } else {
          var index = calendarIds.indexOf(calendarId);
          if (index !== -1) {
            calendarIds.splice(index, 1);
          }
          events = events.filter(function (event) {
            return event.outlookCalendarId !== calendarId;
          });
          inst.setEvents(events);
        }
      }

      function loadingEvents(show) {
        if (show) {
          $calendar.addClass('md-loading-events');
        } else {
          $calendar.removeClass('md-loading-events');
        }
      }

      function onSignedIn() {
        toggleContainers(true);
        outlookCalendarSync
          .getCalendars()
          .then(function (calendars) {
            var calList = '';

            calendars.sort(function (c) {
              return c.isDefaultCalendar ? -1 : 1;
            });

            for (var i = 0; i < calendars.length; ++i) {
              var c = calendars[i];
              calList +=
                '<label>' +
                '<input mbsc-switch value="' +
                c.id +
                '" data-label="' +
                c.name +
                '" type="checkbox" class="outlook-calendar-switch" checked />' +
                '</label>';

              calendarIds.push(c.id);
            }

            var $calendarList = $('#outlook-cal-list');
            $calendarList.append(calList);

            loadingEvents(true);

            outlookCalendarSync
              .getEvents(calendarIds, startDate, endDate)
              .then(function (resp) {
                var newEvents = resp;
                loadingEvents(false);
                events = newEvents;
                inst.setEvents(events);
              })
              .catch(onError);

            mobiscroll.enhance($calendarList[0]);
          })
          .catch(onError);
      }

      function onSignedOut() {
        toggleContainers(false);
        popup.close();
        calendarIds = [];
        events = [];
        inst.setEvents([]);
        $('#outlook-cal-list').empty();
      }

      function onError(resp) {
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: resp.message,
        });
      }

      var inst = $calendar
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'month' },
          },
          exclusiveEndDates: true,
          clickToCreate: false,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          onPageLoading: function (args) {
            startDate = args.viewStart;
            endDate = args.viewEnd;
            clearTimeout(debounce);
            debounce = setTimeout(function () {
              if (outlookCalendarSync.isSignedIn()) {
                loadingEvents(true);
                outlookCalendarSync
                  .getEvents(calendarIds, startDate, endDate)
                  .then(function (resp) {
                    loadingEvents(false);
                    events = resp;
                    inst.setEvents(events);
                  })
                  .catch(onError);
              }
            }, 200);
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="md-sync-events-outlook-nav"></div>' +
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
              '<div class="md-outlook-calendar-buttons">' +
              '<button mbsc-button id="outlook-cal-sign-in" class="md-sync-events-outlook-button">Sync my outlook calendars</button>' +
              '<button mbsc-button id="outlook-cal-get-calendars" style="display:none" class="md-sync-events-outlook-button">My Calendars</button>' +
              '<button mbsc-button id="outlook-cal-today">Today</button></div>' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-next></button>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      var popup = $popup
        .mobiscroll()
        .popup({
          anchor: $('#outlook-cal-get-calendars')[0],
          width: 400,
          touchUi: false,
          showOverlay: false,
          scrollLock: false,
          contentPadding: false,
          display: 'anchored',
        })
        .mobiscroll('getInst');

      // sign in
      $calendar.on('click', '#outlook-cal-sign-in', function () {
        if (!outlookCalendarSync.isSignedIn()) {
          outlookCalendarSync.signIn().catch(onError);
        }
      });

      $calendar.on('click', '#outlook-cal-today', function () {
        inst.navigate(new Date());
      });

      $calendar.on('click', '#outlook-cal-get-calendars', function () {
        popup.open();
      });

      // switch click
      $popup.on('change', '.outlook-calendar-switch', function (ev) {
        loadEvents(ev.target.checked, ev.target.value);
      });

      $popup.on('click', '#outlook-cal-sign-out', function () {
        outlookCalendarSync.signOut().catch(onError);
      });

      // init outlook client
      outlookCalendarSync.init({
        clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
        redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
        onSignedIn: onSignedIn,
        onSignedOut: onSignedOut,
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-sync-events-outlook-calendar"></div>

<div id="demo-sync-events-outlook-calendar-popup">

    <div class="mbsc-form-group-inset md-sync-events-outlook-inset">
        <div class="mbsc-form-group-title">My calendars</div>
        <div id="outlook-cal-list"></div>
    </div>
    <div class="mbsc-form-group-inset">
        <button mbsc-button id="outlook-cal-sign-out" class="md-sync-events-outlook-button mbsc-button-block">Log out of my account</button>
    </div>

</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-outlook-calendar-buttons {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
}

.md-sync-events-outlook-calendar {
    border-left: 1px solid #ccc;
}

.md-outlook-calendar-header {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
}

.md-sync-events-outlook-nav {
    justify-content: flex-start;
}

.md-sync-events-outlook-button.mbsc-button {
    text-transform: capitalize;
}

.md-sync-events-outlook-inset {
    margin-bottom: 0;
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
