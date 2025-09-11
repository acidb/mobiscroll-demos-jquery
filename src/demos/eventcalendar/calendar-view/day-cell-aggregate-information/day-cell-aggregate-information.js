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
      var $calendarElm = $('#demo-day-cell-aggregate-information');
      var weatherCache = {};
      var selectedView = 'month';
      var previousView = 'month';
      var formatDate = mobiscroll.formatDate;

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-1,15)',
          end: 'dyndatetime(y,m,d-1,17)',
          title: 'Operations Huddle',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: 'HR Policy Update',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Team Retrospective',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,11,30)',
          title: 'Proposal Review Meeting',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Solutions Presentation',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Follow-up Discussion',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Performance Review',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d+1,10)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: 'Client Onboarding',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d+1,15)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Marketing Campaign Brainstorm',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,2,10)',
          end: 'dyndatetime(y,m,2,12)',
          title: 'Innovation Brainstorm',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,2,13)',
          end: 'dyndatetime(y,m,2,15,30)',
          title: 'Onboarding Session',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,2,16)',
          end: 'dyndatetime(y,m,2,17)',
          title: 'Discovery Call',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,9)',
          end: 'dyndatetime(y,m,9,10)',
          title: 'Partnership Exploration',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,11)',
          end: 'dyndatetime(y,m,9,13)',
          title: 'Service Implementation',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,14)',
          end: 'dyndatetime(y,m,9,15)',
          title: 'Future Planning Summit',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,15,10)',
          end: 'dyndatetime(y,m,15,12)',
          title: 'Strategy Alignment',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,18,12)',
          end: 'dyndatetime(y,m,18,14)',
          title: 'Project Kick-off',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,18,15)',
          end: 'dyndatetime(y,m,18,16)',
          title: 'Account Review',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,22,12)',
          end: 'dyndatetime(y,m,22,14)',
          title: 'Deep Dive Session',
          type: 'meeting',
          color: '#634b67',
        },
        {
          title: 'Fresh start meeting',
          start: '09:00',
          end: '10:00',
          type: 'meeting',
          color: '#634b67',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO',
          },
        },
        {
          title: 'Weekly wrapup',
          start: '16:00',
          end: '16:30',
          type: 'meeting',
          color: '#634b67',
          recurring: {
            repeat: 'weekly',
            weekDays: 'FR',
          },
        },
      ];

      function getWeatherForDate(date) {
        var key = date.getTime();
        if (!weatherCache[key]) {
          weatherCache[key] = generateRandomWeather(date);
        }
        return weatherCache[key];
      }

      function generateRandomWeather(date) {
        var weatherTypes = [
          { emoji: '☀️', min: 24, max: 30 },
          { emoji: '🌤️', min: 20, max: 25 },
          { emoji: '☁️', min: 17, max: 22 },
          { emoji: '🌧️', min: 15, max: 20 },
        ];
        var type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        var degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;

        return {
          date: date,
          degree: degree,
          emoji: type.emoji,
        };
      }

      function getStressLevel(nrEvents) {
        var emoji;
        var color;

        if (nrEvents < 1) {
          emoji = '';
          color = '';
        } else if (nrEvents < 3) {
          emoji = '😃';
          color = '#6ece86ff';
        } else if (nrEvents < 5) {
          emoji = '😐';
          color = '#d89c6aff';
        } else {
          emoji = '😫';
          color = '#d6727aff';
        }
        return { emoji: emoji, color: color };
      }

      function getNrEvents(events) {
        var nrMeetings = 0;
        var nrAppointments = 0;

        for (var i = 0; i < events.length; i++) {
          var event = events[i];

          if (event.type === 'meeting') {
            nrMeetings++;
          } else {
            nrAppointments++;
          }
        }

        return { meetings: nrMeetings, appointments: nrAppointments };
      }

      function setSelectedView(view, date) {
        if (view === 'day') {
          previousView = selectedView;
        }

        selectedView = view;

        switch (view) {
          case 'month':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-month-view',
              view: {
                calendar: { type: 'month' },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-week-view',
              view: {
                schedule: {
                  type: 'week',
                  allDay: false,
                  startTime: '08:00',
                  endTime: '17:00',
                },
              },
            });
            break;
          case 'day':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-day-view',
              view: {
                schedule: {
                  type: 'day',
                  allDay: false,
                  startTime: '08:00',
                  endTime: '17:00',
                },
              },
            });
            break;
        }

        if (date) {
          calendar.navigate(date);
        }
      }

      var calendar = $calendarElm
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          eventDelete: true,
          cssClass: 'mds-cell-template mds-cell-template-month-view',
          data: myEvents,
          view: {
            calendar: { type: 'month' },
          },
          extendDefaultEvent: function () {
            return {
              title: 'New appointment',
              type: 'appointment',
              color: '#656d49',
            };
          },
          renderDay: function (args) {
            var date = args.date;
            var nrEvents = getNrEvents(args.events);
            var nrAllEvents = args.events.length;
            var stressLevel = getStressLevel(nrAllEvents);
            var weather = getWeatherForDate(date);

            return (
              '<div class="mds-cell-template-cont" ' +
              (selectedView === 'week' ? 'data-date="' + date.getTime() + '"' : '') +
              (stressLevel.color && selectedView !== 'day' ? 'style="background:' + stressLevel.color : '') +
              '">' +
              '<div class="mds-cell-template-day">' +
              formatDate('DDD D, MMM', date) +
              ' ' +
              stressLevel.emoji +
              '</div>' +
              '<div>' +
              weather.emoji +
              ' ' +
              weather.degree +
              '°C</div>' +
              '<div class="mds-cell-template-info" style="color:#634b67">Internal mtgs: ' +
              nrEvents.meetings +
              '</div>' +
              '<div class="mds-cell-template-info" style="color:#656d49">Client mtgs: ' +
              nrEvents.appointments +
              '</div>' +
              '<button class="mds-cell-template-add" mbsc-button data-icon="plus"></button>' +
              '</div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="mds-cell-template-nav"></div>' +
              '<div class="mds-cell-template-view-controls mbsc-flex-1-0">' +
              '<button mbsc-button data-color="secondary" data-start-icon="close" class="mds-cell-template-back">Back to calendar</button>' +
              '<div class="mds-cell-template-view-switch">' +
              '<label>Calendar<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="month" class="mds-cell-template-view" checked></label>' +
              '<label>Week view<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="week" class="mds-cell-template-view"></label>' +
              '</div></div>' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-today></button>' +
              '<button mbsc-calendar-next></button>'
            );
          },
          onCellClick: function (args) {
            var date = args.date;
            var addButton = args.domEvent.target.closest('.mds-cell-template-add');

            if (addButton) {
              var year = date.getFullYear();
              var month = date.getMonth();
              var day = date.getDate();

              var newEvent = {
                title: 'New appointment',
                start: new Date(year, month, day, 9),
                end: new Date(year, month, day, 10),
                color: '#ecee8d',
              };

              calendar.addEvent(newEvent);

              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Appointment added to ' + formatDate('DDD D, MMM', date),
              });
            } else if (selectedView === 'month') {
              setSelectedView('day', date);
            }
          },
        })
        .mobiscroll('getInst');

      // Event delegation for dynamic button
      $calendarElm
        .on('click', '.mds-cell-template-back', function () {
          setSelectedView(previousView);
        })
        .on('click', '.mds-cell-template-cont', function (ev) {
          if (selectedView === 'week') {
            setSelectedView('day', new Date($(ev.currentTarget).data('date')));
          }
        })
        .on('change', '.mds-cell-template-view', function (ev) {
          setSelectedView(ev.target.value);
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-day-cell-aggregate-information"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Overrides */

.mds-cell-template .mbsc-calendar-week-days,
.mds-cell-template .mbsc-calendar-labels {
  display: none;
}

.mds-cell-template .mbsc-calendar-cell {
  min-height: 120px;
}

.mds-cell-template .mbsc-calendar-day-outer {
  opacity: .7;
}

.mds-cell-template .mbsc-schedule-header-item {
  min-height: 120px;
  padding: 0;
  cursor: pointer;
}

/* Custom header */

.mds-cell-template-nav {
  width: 200px;
}

.mds-cell-template-view-controls {
  max-width: 350px;
  margin: 0 auto;
}

.mds-cell-template-view-switch .mbsc-segmented {
  margin: 0;
}

.mds-cell-template-view-switch .mbsc-segmented.mbsc-material,
.mds-cell-template-view-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-cell-template-back.mbsc-button {
  width: 100%;
  height: 32px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  display: none;
}

.mds-cell-template-back .mbsc-icon {
  line-height: 18px;
}

/* Cell template */

.mds-cell-template-cont {
  position: absolute;
  inset: -1px;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  line-height: 25px;
  white-space: nowrap;
}

.mds-cell-template-cont:after {
  content: '';
  position: absolute;
  inset: -1px;
  pointer-events: none;
  transition: background 0.15s ease-in-out;
}

.mds-cell-template-cont:hover:after {
  background: rgba(51, 51, 51, .2);
}

.mds-cell-template-day {
  font-weight: 600;
}

.mds-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}

.mds-cell-template-add.mbsc-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
  display: none;
}

.mbsc-calendar-width-sm .mds-cell-template-cont {
  font-size: 14px;
}

.mbsc-calendar-width-sm .mds-cell-template-info {
  font-size: 12px;
}

/* Month view */

.mds-cell-template-month-view.mbsc-windows .mds-cell-template-cont {
  inset: -2px -1px;
}

.mds-cell-template-month-view .mds-cell-template-add {
  display: block;
}

/* Day view */

.mds-cell-template-day-view .mds-cell-template-back {
  display: block;
}

.mds-cell-template-day-view .mbsc-schedule-header-item:not(.mbsc-selected),
.mds-cell-template-day-view .mds-cell-template-view-switch,
.mds-cell-template-day-view .mds-cell-template-cont:after {
  display: none;
}

.mds-cell-template-day-view .mds-cell-template-cont {
  text-align: center; 
}

.mds-cell-template-day-view .mbsc-schedule-header-item.mbsc-selected {
  border: 0;
}

  `,
};
