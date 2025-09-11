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

      var $loginButton = $('#demo-google-cal-sign-in');
      var $logoutButton = $('#demo-google-cal-sign-out');

      var $calendarList = $('#demo-google-cal-list');
      var $loggedOutCont = $('#demo-logged-out-cont');
      var $loggedInCont = $('#demo-logged-in-cont');
      var $cont = $('#demo-google-calendar-cont');
      var $editButton = $('#demo-google-cal-edit');

      var startDate;
      var endDate;
      var calendarIds = [];
      var events = [];
      var calendarData = {};
      var primaryCalendarId;
      var debounce;

      function toggleContainers(loggedIn) {
        if (loggedIn) {
          $loggedOutCont.hide().attr('aria-hidden', 'true');
          $loggedInCont.show().attr('aria-hidden', 'false');
        } else {
          $loggedInCont.hide().attr('aria-hidden', 'true');
          $loggedOutCont.show().attr('aria-hidden', 'false');
        }
      }

      function loadEvents(checked, calendarId) {
        if (checked) {
          loadingEvents(true);
          calendarIds.push(calendarId);
          googleCalendarSync
            .getEvents([calendarId], startDate, endDate)
            .then(function (resp) {
              loadingEvents(false);
              events = events.concat(resp);
              inst.setEvents(events);
            })
            .catch(onError);
        } else {
          var index = calendarIds.indexOf(calendarId);
          if (index !== -1) {
            calendarIds.splice(index, 1);
          }
          events = events.filter(function (event) {
            return event.googleCalendarId !== calendarId;
          });
          inst.setEvents(events);
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
        toggleContainers(true);
        googleCalendarSync
          .getCalendars()
          .then(function (calendars) {
            var calList = '<div class="mbsc-form-group-title">My Calendars</div>';

            calendars.sort(function (c) {
              return c.primary ? -1 : 1;
            });
            primaryCalendarId = calendars[0].id;
            calendarIds.push(primaryCalendarId);

            for (var i = 0; i < calendars.length; ++i) {
              var c = calendars[i];
              calList +=
                '<label>' +
                '<input mbsc-switch id="' +
                i +
                '" value="' +
                c.id +
                '" data-label="' +
                c.summary +
                '" type="checkbox" class="google-calendar-switch"' +
                (i == 0 ? 'checked' : '') +
                ' />' +
                '</label>';

              calendarData[c.id] = { name: c.summary, color: c.backgroundColor };
            }

            $calendarList.append(calList);
            mobiscroll.enhance($calendarList[0]);

            loadingEvents(true);

            googleCalendarSync
              .getEvents([primaryCalendarId], startDate, endDate)
              .then(function (resp) {
                loadingEvents(false);
                events = resp;
                inst.setEvents(events);
              })
              .catch(onError);
          })
          .catch(onError);
      }

      function onSignedOut() {
        toggleContainers(false);
        calendarIds = [];
        calendarData = {};
        events = [];
        inst.setEvents([]);
        $calendarList.empty();
      }

      function loadingEvents(show) {
        if (show) {
          $cont.addClass('md-loading-events');
        } else {
          $cont.removeClass('md-loading-events');
        }
      }

      var inst = $('#demo-google-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            schedule: { type: 'week' },
          },
          extendDefaultEvent: function () {
            if (primaryCalendarId) {
              return {
                color: calendarData[primaryCalendarId].color,
              };
            }
          },
          exclusiveEndDates: true,
          clickToCreate: false,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
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
              '<div class="md-google-calendar-header">' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-today>Today</button>' +
              '<button mbsc-calendar-next></button></div>'
            );
          },
          onPageLoading: function (args) {
            startDate = args.viewStart;
            endDate = args.viewEnd;
            clearTimeout(debounce);
            debounce = setTimeout(function () {
              if (googleCalendarSync.isSignedIn()) {
                loadingEvents(true);
                googleCalendarSync
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
          onEventCreate: function (args) {
            if (googleCalendarSync.isSignedIn()) {
              var event = args.event;
              googleCalendarSync
                .addEvent(primaryCalendarId, event)
                .then(function (resp) {
                  inst.removeEvent(event);
                  resp.color = event.color;
                  inst.addEvent(resp);
                  events.push(resp);
                  mobiscroll.toast({
                    //<hidden>
                    // theme,//</hidden>
                    // context,
                    message: 'Event created in "' + calendarData[primaryCalendarId].name + '" calendar',
                  });
                })
                .catch(function (error) {
                  inst.removeEvent(event);
                  onError(error);
                });
            }
          },
          onEventUpdate: function (args) {
            if (googleCalendarSync.isSignedIn()) {
              mobiscroll
                .confirm({
                  title: 'Are you sure you want to update this event?',
                  message: 'This action will affect your Google Calendar event.',
                  okText: 'Update',
                })
                .then(function (result) {
                  if (result) {
                    var event = args.event;
                    var calendarId = event.googleCalendarId;
                    googleCalendarSync
                      .updateEvent(calendarId, event)
                      .then(function () {
                        mobiscroll.toast({
                          //<hidden>
                          // theme,//</hidden>
                          // context,
                          message: 'Event updated on "' + calendarData[calendarId].name + '" calendar',
                        });
                      })
                      .catch(function (error) {
                        inst.updateEvent(args.oldEvent);
                        onError(error);
                      });
                  } else {
                    inst.updateEvent(args.oldEvent);
                  }
                });
            }
          },
          onEventDelete: function (args) {
            if (googleCalendarSync.isSignedIn()) {
              mobiscroll
                .confirm({
                  title: 'Are you sure you want to delete this event?',
                  message: 'This action will remove the event from your Google Calendar as well.',
                  okText: 'Delete',
                })
                .then(function (result) {
                  if (result) {
                    var event = args.event;
                    var calendarId = event.googleCalendarId;
                    googleCalendarSync
                      .deleteEvent(calendarId, event)
                      .then(function () {
                        inst.removeEvent(event);
                        events = events.filter(function (ev) {
                          return event.id !== ev.id;
                        });
                        mobiscroll.toast({
                          //<hidden>
                          // theme,//</hidden>
                          // context,
                          message: 'Event deleted from "' + calendarData[calendarId].name + '" calendar',
                        });
                      })
                      .catch(onError);
                  }
                });
            }
            return false;
          },
        })
        .mobiscroll('getInst');

      // Sign in
      $loginButton.on('click', function () {
        if (!googleCalendarSync.isSignedIn()) {
          googleCalendarSync.signIn().catch(onError);
        }
      });

      // Switch click
      $loggedInCont.on('change', '.google-calendar-switch', function (ev) {
        loadEvents(ev.target.checked, ev.target.value);
      });

      // Edit click
      $editButton.on('change', function (ev) {
        var isEditable = ev.target.checked;
        inst.setOptions({
          clickToCreate: isEditable,
          dragToCreate: isEditable,
          dragToMove: isEditable,
          dragToResize: isEditable,
        });
      });

      // Sign out
      $logoutButton.on('click', function () {
        googleCalendarSync.signOut().catch(onError);
      });

      $('.md-sync-events-google-menu').removeClass('mbsc-hidden');

      // Init google client
      googleCalendarSync.init({
        apiKey: '<YOUR_GOOGLE_API_KEY>',
        clientId: '<YOUR_GOOGLE_CLIENT_ID>',
        onSignedIn: onSignedIn,
        onSignedOut: onSignedOut,
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="md-sync-events-google-cont">
    <div class="md-sync-events-google-menu mbsc-hidden">
        <div aria-hidden="true" id="demo-logged-out-cont">
            <div class="mbsc-form-group-inset mbsc-align-center">
                <p class="mbsc-italic mbsc-txt-muted">Log into your Google account to view and edit your Google Calendar events</p>
                <button id="demo-google-cal-sign-in" class="mbsc-reset md-sync-events-google-button">Sign in with Google</button>
            </div>
        </div>
        <div aria-hidden="true" id="demo-logged-in-cont" style="display:none">
            <div class="mbsc-form-group-inset mbsc-align-center">
                <p class="mbsc-italic mbsc-txt-muted">Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.</p>
            </div>
            <div class="mbsc-form-group-inset">
                <label>
                    <input id="demo-google-cal-edit" mbsc-switch data-label="Enable editing" />
                </label>
            </div>
            <div id="demo-google-cal-list" class="mbsc-form-group-inset md-sync-events-google-inset"></div>
            <div class="mbsc-form-group-inset">
                <button mbsc-button id="demo-google-cal-sign-out" class="mbsc-button-block">Log out of my account</button>
            </div>
        </div>
    </div>
    <div id="demo-google-calendar-cont" class="md-sync-events-google-calendar">
        <div class="md-sync-events-overlay"></div>
        <div id="demo-google-calendar"></div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-sync-events-google-cont.mbsc-page {
    display: flex;
    height: 600px;
}

.md-sync-events-google-menu {
    flex: 0 0 350px;
    height: 100%;
    overflow: auto;
}

.md-sync-events-google-calendar {
    flex: 1 1 auto;
    border-left: 1px solid #ccc;
}

.md-google-calendar-header {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
}

.md-sync-events-google-button {
    padding: 8px 24px 8px 50px;
    line-height: 24px;
    background: url(https://cdn.cdnlogo.com/logos/g/35/google-icon.svg) no-repeat;
    background-size: 18px 18px;
    background-position: 11px 11px;
    background-color: #fff;
    color: #757575;
    font-family: Roboto, arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .25);
    transition: background-color .218s, border-color .218s, box-shadow .218s;
}

.md-sync-events-google-button:active {
    background-color: #eee;
    color: #6d6d6d;
}

.md-sync-events-google-button:hover,
.md-sync-events-google-button:focus {
    box-shadow: 0 0 3px 3px rgb(66, 133, 244, .3);
}

.md-sync-events-google-inset {
    margin-bottom: 0;
}

@media (max-width: 800px) {
    .md-sync-events-google-cont.mbsc-page {
        display: block;
        height: auto;
    }
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
