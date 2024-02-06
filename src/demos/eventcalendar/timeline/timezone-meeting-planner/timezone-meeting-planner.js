import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';
import * as moment from 'moment-timezone';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      mobiscroll.momentTimezone.moment = moment;

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

      var details = getDetails();

      var calendar = $('#demo-timezone-meeting-planner')
        .mobiscroll()
        .eventcalendar({
          timezonePlugin: mobiscroll.momentTimezone,
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
          colors: details.colors,
          invalid: details.invalid,
          renderScheduleEvent: function (data) {
            var start = data.startDate.clone();
            var end = data.endDate.clone();

            start.setTimezone(data.currentResource.timezone);
            end.setTimezone(data.currentResource.timezone);

            return (
              '<div class="md-meeting-planner-cont" style="background:' +
              data.color +
              '">' +
              '<div class="md-meeting-planner-wrapper">' +
              '<div class="md-meeting-planner-title">' +
              data.title +
              '</div>' +
              '<div class="md-meeting-planner-time">' +
              formatDate('hh:mm A', start) +
              ' - ' +
              formatDate('hh:mm A', end) +
              '</div>' +
              '</div></div>'
            );
          },
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
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="md-meeting-planner-header">' +
              '<div class="md-meeting-planner-zone md-meeting-planner-work">working hours</div>' +
              '<div class="md-meeting-planner-zone md-meeting-planner-flex">flex hours</div>' +
              '<div class="md-meeting-planner-zone md-meeting-planner-off">time off</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="md-meeting-participant-cont">' +
              '<div class="md-meeting-participant-name">' +
              resource.name +
              '</div>' +
              '<div>' +
              (resource.organizer ? '<span>Organizer </span>' : '') +
              '<span class="md-meeting-participant-offset">' +
              resource.utcOffset +
              '</span></div>' +
              '<img class="md-meeting-participant-avatar" src="' +
              resource.img +
              '"/>' +
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

      function getProps(h) {
        if (h < 6) {
          return { color: '#ffbaba4d', invalid: true };
        } else if (h < 8) {
          return { color: '#a5ceff4d' };
        } else if (h < 18) {
          return { color: '#f7f7bb4d' };
        } else if (h < 22) {
          return { color: '#a5ceff4d' };
        } else return { color: '#ffbaba4d', invalid: true };
      }

      function getDetails() {
        var colors = [];
        var invalid = [];

        for (var j = 0; j < myResources.length; ++j) {
          var resource = myResources[j];

          for (var i = 0; i < 24; ++i) {
            var hour = i + getUtcOffset(resource.timezone);
            var isAM = i < 12 ? hour >= 0 && hour < 12 : !(hour >= 12 && hour < 24);
            var startTime = (i < 10 ? '0' : '') + i + ':00';
            var endTime = (i < 9 ? '0' : '') + (i + 1) + ':00';
            var title = hour % 12 == 0 ? 12 : hour < 0 ? 12 + hour : hour <= 12 ? hour : hour % 12;
            var props = getProps(title + ((title == 12 && !isAM) || (title != 12 && isAM) ? 0 : 12));

            colors.push({
              start: startTime,
              end: endTime,
              title: title + (isAM ? ' AM' : ' PM'),
              background: props.color,
              recurring: {
                repeat: 'daily',
              },
              resource: resource.id,
            });

            if (props.invalid) {
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
        return { colors: colors, invalid: invalid };
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timezone-meeting-planner" class="md-timezone-meeting-planner"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-timezone-meeting-planner .mbsc-schedule-color-text {
    padding: 16px 0;
    text-align: center;
}

.md-timezone-meeting-planner.mbsc-ios-dark .mbsc-timeline-color,
.md-timezone-meeting-planner.mbsc-material-dark .mbsc-timeline-color,
.md-timezone-meeting-planner.mbsc-windows-dark .mbsc-timeline-color {
    color: #fff !important;
}

.md-meeting-planner-cont {
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

.md-meeting-planner-wrapper {
    background: rgba(255, 255, 255, .5);
    height: 100%;
    box-sizing: border-box;
    padding: 0 6px;
    transition: background .15s ease-in-out;
}

.mbsc-schedule-event-hover .md-meeting-planner-wrapper {
    background: rgba(255, 255, 255, .3);
}

.md-meeting-planner-title {
    padding-top: 3px;
    color: initial;
}

.md-meeting-planner-time {
    color: #666;
}

.md-meeting-planner-title,
.md-meeting-planner-time {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.md-meeting-planner-header {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.md-meeting-planner-zone {
    font-size: 12px;
    padding: 3px 6px;
    margin: 0 5px;
    border-radius: 16px;
    color: #888;
}

.md-meeting-planner-work {
    background: #f7f7bb4d;
}

.md-meeting-planner-flex {
    background: #a5ceff4d;
}

.md-meeting-planner-off {
    background: #ffbaba4d;
}

.md-meeting-participant-cont {
    position: relative;
    padding-left: 50px;
    max-height: 40px;
    line-height: 20px;
}

.md-meeting-participant-avatar {
    position: absolute;
    max-height: 40px;
    max-width: 40px;
    top: 18px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 20px;
}

.md-meeting-participant-name {
    font-size: 16px;
}

.md-meeting-participant-offset {
    font-size: 12px;
    opacity: 0.6;
}
  `,
};
