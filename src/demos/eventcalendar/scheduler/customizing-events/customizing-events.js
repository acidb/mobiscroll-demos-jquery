import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var inst = $('#demo-customize-events')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          responsive: {
            xsmall: {
              view: {
                schedule: {
                  type: 'day',
                },
              },
            },
            medium: {
              view: {
                schedule: {
                  type: 'week',
                },
              },
            },
          },
          renderScheduleEvent: function (data) {
            var cat = getCategory(data.original.category);
            if (data.allDay) {
              return '<div style="background:' + cat.color + '" class="md-custom-event-allday-title">' + data.title + '</div>';
            } else {
              return (
                '<div class="md-custom-event-cont" style="border-left: 5px solid ' +
                cat.color +
                ';background:' +
                cat.color +
                '">' +
                '<div class="md-custom-event-wrapper">' +
                '<div style="background:' +
                cat.color +
                '" class="md-custom-event-category">' +
                cat.name +
                '</div>' +
                '<div class="md-custom-event-details">' +
                '<div class="md-custom-event-title">' +
                data.title +
                '</div>' +
                '<div class="md-custom-event-time">' +
                data.start +
                ' - ' +
                data.end +
                '</div>' +
                '<button mbsc-button class="md-custom-event-btn" data-color="dark" data-variant="outline">Edit</button>' +
                '<div class="md-cutom-event-img-cont">' +
                getParticipants(data.original.participants) +
                '</div></div></div></div>'
              );
            }
          },
          renderBufferBefore: function (args) {
            var cat = getCategory(args.original.category);
            return (
              '<div class="md-schedule-buffer md-schedule-before-buffer">' +
              '<div class="md-schedule-buffer-background" ' +
              'style="background: repeating-linear-gradient(-45deg,#fcfffc,#fcfffc 10px,' +
              cat.color +
              ' 10px,' +
              cat.color +
              ' 20px)"></div>' +
              '<span class="md-buffer-text">Travel time</span>' +
              '<span class="md-buffer-time">' +
              args.original.bufferBefore +
              ' minutes</span></div>'
            );
          },
          onEventClick: function (args) {
            if (args.domEvent.target.classList.contains('md-custom-event-btn')) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Edit clicked',
              });
            }
          },
        })
        .mobiscroll('getInst');

      function getCategory(id) {
        switch (id) {
          case 1:
            return {
              name: 'Project X',
              color: '#ff825d',
            };
          case 2:
            return {
              name: 'Stakeholder Mtg.',
              color: '#bd75d0',
            };
          case 3:
            return {
              name: 'Status Update',
              color: '#7f9230',
            };
          case 4:
            return {
              name: 'Information Sharing',
              color: '#f14590',
            };
          case 5:
            return {
              name: 'Team Building',
              color: '#64cad4',
            };
          default:
            return {
              name: 'No category',
              color: '#5ac8fa',
            };
        }
      }

      function getParticipants(ids) {
        var participants = '';
        if (ids) {
          for (var i = 0; i < ids.length; ++i) {
            participants += '<img class="md-custom-event-img" src="' + getParticipant(ids[i]).img + '"/>';
          }
        }
        return participants;
      }

      function getParticipant(id) {
        switch (id) {
          case 1:
            return {
              name: 'Lisa',
              img: 'https://img.mobiscroll.com/demos/f1.png',
            };
          case 2:
            return {
              name: 'Sharon',
              img: 'https://img.mobiscroll.com/demos/f2.png',
            };
          case 3:
            return {
              name: 'Emily',
              img: 'https://img.mobiscroll.com/demos/f3.png',
            };
          case 4:
            return {
              name: 'Rose',
              img: 'https://img.mobiscroll.com/demos/f4.png',
            };
          case 5:
            return {
              name: 'Matt',
              img: 'https://img.mobiscroll.com/demos/m1.png',
            };
          case 6:
            return {
              name: 'Rick',
              img: 'https://img.mobiscroll.com/demos/m2.png',
            };
          case 7:
            return {
              name: 'John',
              img: 'https://img.mobiscroll.com/demos/m3.png',
            };
          case 8:
            return {
              name: 'Ethan',
              img: 'https://img.mobiscroll.com/demos/m4.png',
            };
        }
      }

      $.getJSON(
        'https://trialdev.mobiscroll.com/multi-events/?callback=?',
        function (events) {
          inst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-customize-events" class="md-schedule-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-custom-event-cont {
    font-size: 12px;
    font-weight: 600;
    height: 100%;
    background: #fff;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border-radius: 0 10px 10px 0;
    overflow: hidden;
}

.md-custom-event-wrapper {
    position: relative;
    background: rgba(255, 255, 255, .5);
    height: 100%;
    min-height: 135px;
    box-sizing: border-box;
    border-radius: 0 10px 10px 0;
    transition: background .15s ease-in-out;
}

.mbsc-schedule-event-hover .md-custom-event-cont .md-custom-event-wrapper {
    background: rgba(255, 255, 255, .3);
}

.mbsc-schedule-event-active .md-custom-event-cont .md-custom-event-wrapper {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 3px -1px rgba(0, 0, 0, 0.2);
}

.mbsc-schedule-event-hover .md-custom-event-allday-title {
    opacity: .8;
}

.mbsc-schedule-event-active .md-custom-event-allday-title {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 1px 3px -1px rgba(0, 0, 0, 0.2);
}

.md-custom-event-category {
    display: inline-block;
    max-width: 100%;
    color: #eee;
    border-radius: 10px;
    margin: 10px;
    padding: 2px 10px;
    white-space: nowrap;
    overflow: hidden;
}

.md-custom-event-details {
    padding: 0 10px;
}

.md-custom-event-title {
    color: initial;
}

.md-custom-event-time {
    font-size: 10px;
    color: #666;
    padding-top: 3px;
}

.md-custom-event-allday-title {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    padding: 2px 10px;
    border-radius: 10px;
    opacity: .7;
}

.md-custom-event-btn.mbsc-button {
    margin: 5px 0;
    line-height: 20px;
    padding-top: 0;
    padding-bottom: 0;
}

.md-cutom-event-img-cont {
    position: absolute;
    bottom: 5px;
    left: 10px;
    white-space: nowrap;
}

.md-custom-event-img {
    width: 25px;
    height: 25px;
    margin: 0 2px;
}

.md-schedule-buffer {
  position: absolute;
  display: flex;
  height: 100%;
  font-size: 10px;
  left: 0;
  right: 0;
  color:#000;
  padding: 7px 4px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.md-schedule-buffer-background {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.md-schedule-before-buffer {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.md-buffer-time,
.md-buffer-text {
  width: 50px;
  padding: 0 3px;
  text-align: center;
}

.md-buffer-time {
  font-weight: 600;
}
  `,
};
