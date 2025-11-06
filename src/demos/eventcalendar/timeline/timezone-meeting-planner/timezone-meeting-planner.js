import * as mobiscroll from '@mobiscroll/jquery';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import $ from 'jquery';

window.dayjs_plugin_utc = utc;
window.dayjs_plugin_timezone = timezone;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    dayjs.extend(window.dayjs_plugin_utc);
    dayjs.extend(window.dayjs_plugin_timezone);
    mobiscroll.dayjsTimezone.dayjs = dayjs;

    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var formatDate = mobiscroll.formatDate;

      var myResources = [
        {
          id: 1,
          name: 'Keila Delores',
          timezone: 'utc',
          img: 'https://img.mobiscroll.com/demos/f1.png',
          utcOffset: '(UTC)',
          organizer: true,
        },
        {
          id: 2,
          name: 'Gene Cortez',
          timezone: 'America/Chicago',
          img: 'https://img.mobiscroll.com/demos/m1.png',
          utcOffset: 'UTC - 5',
        },
        {
          id: 3,
          name: 'Paula Bush',
          timezone: 'America/New_York',
          img: 'https://img.mobiscroll.com/demos/f2.png',
          utcOffset: 'UTC - 4',
        },
        {
          id: 4,
          name: 'Pete Nichols',
          timezone: 'Europe/London',
          img: 'https://img.mobiscroll.com/demos/m2.png',
          utcOffset: 'UTC + 1',
        },
        {
          id: 5,
          name: 'Jean Pearson',
          timezone: 'Europe/Berlin',
          img: 'https://img.mobiscroll.com/demos/m3.png',
          utcOffset: 'UTC + 2',
        },
        {
          id: 6,
          name: 'Thelma Cain',
          timezone: 'Europe/Bucharest',
          img: 'https://img.mobiscroll.com/demos/f3.png',
          utcOffset: 'UTC + 3',
        },
      ];

      var calendar = $('#demo-timezone-meeting-planner')
        .mobiscroll()
        .eventcalendar({
          timezonePlugin: mobiscroll.dayjsTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'utc',
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          dragTimeStep: 60,
          view: {
            timeline: {
              type: 'week',
              timeLabelStep: 1440,
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'General orientation',
              color: '#1ad404',
              resource: [1, 2, 3, 4, 5, 6],
            },
          ],
          resources: myResources,
          invalid: getInvalids(),
          extendDefaultEvent: function () {
            return { resource: [1, 2, 3, 4, 5, 6] };
          },
          onEventCreated: function () {
            mobiscroll.toast({
              // context,
              message: 'Event created',
            });
          },
          onEventUpdated: function () {
            mobiscroll.toast({
              // context,
              message: 'Event updated',
            });
          },
          onEventCreateFailed: function (args) {
            createUpdateEvent(args.event, true);
          },
          onEventUpdateFailed: function (args) {
            createUpdateEvent(args.event);
          },
          renderScheduleEvent: function (data) {
            var start = data.startDate.clone();
            var end = data.endDate.clone();

            start.setTimezone(data.currentResource.timezone);
            end.setTimezone(data.currentResource.timezone);

            return (
              '<div class="mds-meeting-planner-cont" style="background:' +
              data.color +
              '">' +
              '<div class="mds-meeting-planner-wrapper">' +
              '<div class="mds-meeting-planner-title">' +
              data.title +
              '</div>' +
              '<div class="mds-meeting-planner-time">' +
              formatDate('hh:mm A', start) +
              ' - ' +
              formatDate('hh:mm A', end) +
              '</div>' +
              '</div></div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mds-meeting-planner-header">' +
              '<div class="mds-meeting-planner-zone mds-meeting-planner-work">working hours</div>' +
              '<div class="mds-meeting-planner-zone mds-meeting-planner-flex">flex hours</div>' +
              '<div class="mds-meeting-planner-zone mds-meeting-planner-off">time off</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-meeting-participant-cont">' +
              '<div class="mds-meeting-participant-name">' +
              resource.name +
              '</div>' +
              '<div>' +
              (resource.organizer ? '<span>Organizer </span>' : '') +
              '<span class="mds-meeting-participant-offset">' +
              resource.utcOffset +
              '</span></div>' +
              '<img class="mds-meeting-participant-avatar" src="' +
              resource.img +
              '"/>' +
              '</div>'
            );
          },
          renderCell: function (args) {
            var hProps = getHourProps(args.date.getHours(), args.resource.timezone);
            return (
              '<div class="mds-meeting-planner-time-slot mbsc-flex mbsc-justify-content-center" style="background:' +
              hProps.color +
              '">' +
              hProps.title +
              (hProps.isAM ? ' AM' : ' PM') +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      function createUpdateEvent(event, isNew) {
        mobiscroll.confirm({
          // context,
          title: 'Are you sure you want to proceed?',
          message: "It looks like someone from the team won't be able to join the meeting.",
          okText: 'Yes',
          cancelText: 'No',
          callback: function (res) {
            if (res) {
              if (isNew) {
                calendar.addEvent(event);
              } else {
                calendar.updateEvent(event);
              }

              mobiscroll.toast({
                // context,
                message: isNew ? 'Event created' : 'Event updated',
              });
            }
          },
        });
      }

      function getUtcOffset(timezone) {
        switch (timezone) {
          case 'America/Los_Angeles':
            return -7;
          case 'America/Chicago':
            return -5;
          case 'America/New_York':
            return -4;
          case 'Europe/London':
            return 1;
          case 'Europe/Berlin':
            return 2;
          case 'Europe/Bucharest':
            return 3;
          case 'Asia/Shanghai':
            return 8;
          case 'Asia/Tokyo':
            return 9;
          default:
            return 0;
        }
      }

      function getHourProps(h, timezone) {
        var offset = getUtcOffset(timezone);
        var hour = h + offset;
        var isAM = hour % 24 < 12;
        var title = ((hour % 12) + 12) % 12 || 12;
        var hForProps = title + ((title === 12 && !isAM) || (title !== 12 && isAM) ? 0 : 12);
        var color = '#f7f7bb4d';
        var invalid = false;

        if (hForProps < 6 || hForProps >= 22) {
          color = '#ffbaba4d';
          invalid = true;
        } else if (hForProps < 8 || (hForProps >= 18 && hForProps < 22)) {
          color = '#a5ceff4d';
        }

        return {
          hour: hour,
          isAM: isAM,
          title: title,
          color: color,
          invalid: invalid,
        };
      }

      function getInvalids() {
        var invalid = [];

        for (var j = 0; j < myResources.length; ++j) {
          var resource = myResources[j];

          for (var i = 0; i < 24; ++i) {
            if (getHourProps(i, resource.timezone).invalid) {
              var startTime = (i < 10 ? '0' : '') + i + ':00:00';
              var endTime = (i < 9 ? '0' : '') + (i + 1) + ':00:00';

              invalid.push({
                start: startTime,
                end: endTime,
                resource: resource.id,
                recurring: {
                  repeat: 'daily',
                },
              });
            }
          }
        }
        return invalid;
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timezone-meeting-planner"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-meeting-planner-cont {
    font-size: 12px;
    font-weight: 600;
    height: 100%;
    background: #1ad404;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border-radius: 6px;
    overflow: hidden;
}

.mds-meeting-planner-wrapper {
    background: rgba(255, 255, 255, .5);
    height: 100%;
    box-sizing: border-box;
    padding: 0 6px;
    transition: background .15s ease-in-out;
}

.mbsc-schedule-event-hover .mds-meeting-planner-wrapper {
    background: rgba(255, 255, 255, .3);
}

.mds-meeting-planner-title {
    padding-top: 3px;
    color: initial;
}

.mds-meeting-planner-time {
    color: #666;
}

.mds-meeting-planner-title,
.mds-meeting-planner-time {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mds-meeting-planner-header {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.mds-meeting-planner-zone {
    font-size: 12px;
    padding: 3px 6px;
    margin: 0 5px;
    border-radius: 16px;
    color: #888;
}

.mds-meeting-planner-work {
    background: #f7f7bb4d;
}

.mds-meeting-planner-flex {
    background: #a5ceff4d;
}

.mds-meeting-planner-off {
    background: #ffbaba4d;
}

.mds-meeting-participant-cont {
    position: relative;
    padding-left: 50px;
    max-height: 40px;
    line-height: 20px;
}

.mds-meeting-participant-avatar {
    position: absolute;
    max-height: 40px;
    max-width: 40px;
    top: 18px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 20px;
}

.mds-meeting-participant-name {
    font-size: 16px;
}

.mds-meeting-participant-offset {
    font-size: 12px;
    opacity: 0.6;
}

.mds-meeting-planner-time-slot {
  font-size: 12px;
  opacity: 0.7;
  line-height: 50px;
  height: 100%;
  pointer-events: none;
}
  `,
};
