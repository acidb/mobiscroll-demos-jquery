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
      var calendar = $('#demo-day-work-week-view')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'week',
            },
          },
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#ff0101',
              title: 'Cloud System Engineer',
              img: 'https://img.mobiscroll.com/demos/m1.png',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#239a21',
              title: 'Help Desk Specialist',
              img: 'https://img.mobiscroll.com/demos/f1.png',
            },
            {
              id: 3,
              name: 'John',
              color: '#8f1ed6',
              title: 'Application Developer',
              img: 'https://img.mobiscroll.com/demos/m2.png',
            },
            {
              id: 4,
              name: 'Mark',
              color: '#01adff',
              title: 'Network Administrator',
              img: 'https://img.mobiscroll.com/demos/m3.png',
            },
            {
              id: 5,
              name: 'Sharon',
              color: '#d8ca1a',
              title: 'Data Quality Manager',
              img: 'https://img.mobiscroll.com/demos/f2.png',
            },
          ],
          renderResource: function (resource) {
            return (
              '<div class="md-work-week-cont">' +
              '<div class="md-work-week-name">' +
              resource.name +
              '</div>' +
              '<div class="md-work-week-title">' +
              resource.title +
              '</div>' +
              '<img class="md-work-week-avatar" src="' +
              resource.img +
              '"/>' +
              '</div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="md-work-week-nav"></div>' +
              '<div class="md-work-week-picker">' +
              '<label>Day<input mbsc-segmented type="radio" name="switching-timeline-view" value="day" class="md-timeline-view-change"></label>' +
              '<label>Work week<input mbsc-segmented type="radio" name="switching-timeline-view" value="workweek" class="md-timeline-view-change"></label>' +
              '<label>Week<input mbsc-segmented type="radio" name="switching-timeline-view" value="week" class="md-timeline-view-change" checked></label>' +
              '</div>' +
              '<div mbsc-calendar-prev class="md-work-week-prev"></div>' +
              '<div mbsc-calendar-today class="md-work-week-today"></div>' +
              '<div mbsc-calendar-next class="md-work-week-next"></div>'
            );
          },
          invalid: [
            {
              start: '00:00',
              end: '06:00',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
            },
            {
              start: '20:00',
              end: '23:59',
              recurring: {
                repeat: 'weekly',
                weekDays: 'MO,TU,WE,TH,FR',
              },
            },
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA,SU',
              },
            },
          ],
          onEventCreateFailed: function () {
            mobiscroll.toast({
              // context,
              message: "Can't schedule outside of working hours",
            });
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              // context,
              message: "Can't schedule outside of working hours",
            });
          },
        })
        .mobiscroll('getInst');

      $('.md-timeline-view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'day':
            calendar.setOptions({
              view: {
                timeline: { type: 'day' },
              },
            });
            break;
          case 'workweek':
            calendar.setOptions({
              view: {
                timeline: {
                  type: 'week',
                  startDay: 1,
                  endDay: 5,
                },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                timeline: {
                  type: 'week',
                },
              },
            });
            break;
        }
      });

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-day-work-week-view" class="md-switching-timeline-view-cont"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-work-week-cont {
    position: relative;
    padding-left: 50px;
}

.md-work-week-avatar {
    position: absolute;
    max-height: 50px;
    max-width: 50px;
    top: 21px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 20px;
}

.md-work-week-name {
    font-size: 16px;
}

.md-work-week-title {
    font-size: 12px;
    margin-top: 5px;
}

.md-switching-timeline-view-cont .mbsc-segmented {
    max-width: 350px;
    margin: 0 auto;
    padding: 1px;
}

.md-work-week-picker {
    flex: 1 0 auto;
}

.md-work-week-nav {
    width: 200px;
}

.md-switching-timeline-view-cont .mbsc-timeline-resource {
    display: flex;
    align-items: center;
}

.md-switching-timeline-view-cont .mbsc-timeline-resource-col {
    width: 205px;
}

/* material header order */

.mbsc-material.md-work-week-prev {
    order: 1;
}

.mbsc-material.md-work-week-next {
    order: 2;
}

.mbsc-material.md-work-week-nav {
    order: 3;
}

.mbsc-material .md-work-week-picker {
    order: 4;
}

.mbsc-material .md-work-week-today {
    order: 5;
}

/* windows header order */

.mbsc-windows.md-work-week-nav {
    order: 1;
}

.mbsc-windows.md-work-week-prev {
    order: 2;
}

.mbsc-windows.md-work-week-next {
    order: 3;
}

.mbsc-windows .md-work-week-picker {
    order: 4;
}

.mbsc-windows .md-work-week-today {
    order: 5;
}
  `,
};
