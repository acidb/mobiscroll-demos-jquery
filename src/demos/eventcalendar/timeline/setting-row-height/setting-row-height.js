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
      $('#demo-timeline-row-height')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
            },
          },
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          data: [
            {
              start: 'dyndatetime(y,m,2)',
              end: 'dyndatetime(y,m,5)',
              title: 'Event 1',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,9)',
              end: 'dyndatetime(y,m,15)',
              title: 'Event 2',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,5)',
              end: 'dyndatetime(y,m,9)',
              title: 'Event 3',
              resource: 'res2',
            },
            {
              start: 'dyndatetime(y,m,8)',
              end: 'dyndatetime(y,m,13)',
              title: 'Event 4',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,7)',
              end: 'dyndatetime(y,m,12)',
              title: 'Event 5',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,3)',
              end: 'dyndatetime(y,m,10)',
              title: 'Event 6',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,15)',
              end: 'dyndatetime(y,m,23)',
              title: 'Event 7',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,12)',
              end: 'dyndatetime(y,m,17)',
              title: 'Event 8',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,8)',
              end: 'dyndatetime(y,m,13)',
              title: 'Event 9',
              resource: 'res6',
            },
            {
              start: 'dyndatetime(y,m,20)',
              end: 'dyndatetime(y,m,27)',
              title: 'Event 10',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,6)',
              end: 'dyndatetime(y,m,12)',
              title: 'Event 11',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,18)',
              end: 'dyndatetime(y,m,25)',
              title: 'Event 12',
              resource: 'res8',
            },
          ],
          resources: [
            {
              id: 'gro1',
              name: 'Team 1',
              color: '#ff1717',
              eventCreation: false,
              children: [
                {
                  id: 'res1',
                  name: 'Ryan',
                  color: '#1dab2f',
                  title: 'Cloud System Engineer',
                  img: 'https://img.mobiscroll.com/demos/m1.png',
                },
                {
                  id: 'res2',
                  name: 'Kate',
                  color: '#e20000',
                  title: 'Help Desk Specialist',
                  img: 'https://img.mobiscroll.com/demos/f1.png',
                },
                {
                  id: 'res3',
                  name: 'John',
                  color: '#4981d6',
                  title: 'Application Developer',
                  img: 'https://img.mobiscroll.com/demos/m2.png',
                },
              ],
            },
            {
              id: 'gro2',
              name: 'Team 2',
              eventCreation: false,
              children: [
                {
                  id: 'res4',
                  name: 'Mark',
                  color: '#f7961e',
                  title: 'Data Quality Manager',
                  img: 'https://img.mobiscroll.com/demos/m3.png',
                },
                {
                  id: 'res5',
                  name: 'Sharon',
                  color: '#34c8e0',
                  title: 'Network Administrator',
                  img: 'https://img.mobiscroll.com/demos/f2.png',
                },
              ],
            },
            {
              id: 'gro3',
              name: 'Team 3',
              color: '#af0000',
              eventCreation: false,
              children: [
                {
                  id: 'res6',
                  name: 'Emma',
                  color: '#843100',
                  title: 'Client Services Manager',
                  img: 'https://img.mobiscroll.com/demos/f3.png',
                },
                {
                  id: 'res7',
                  name: 'Ashley',
                  color: '#4caf00',
                  title: 'Instructional Designer',
                  img: 'https://img.mobiscroll.com/demos/f4.png',
                },
                {
                  id: 'res8',
                  name: 'Derek',
                  color: '#7056ff',
                  title: 'Architectural Engineer',
                  img: 'https://img.mobiscroll.com/demos/m4.png',
                },
              ],
            },
          ],
          renderResource: function (resource) {
            if (resource.children) {
              return '<div>' + resource.name + '</div>';
            } else {
              return (
                '<div class="md-timeline-row-height-cont">' +
                '<div class="md-timeline-row-height-name">' +
                resource.name +
                '</div>' +
                '<div class="md-timeline-row-height-title">' +
                resource.title +
                '</div>' +
                '<img class="md-timeline-row-height-avatar" src="' +
                resource.img +
                '"/>' +
                '</div>'
              );
            }
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timeline-row-height" class="md-timeline-row-height"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-timeline-row-height .mbsc-timeline-row {
    height: 78px;
}

.md-timeline-row-height .mbsc-timeline-parent {
    height: 32px;
}

.md-timeline-row-height .mbsc-timeline-row-gutter {
    height: 6px;
}

.md-timeline-row-height-cont {
    position: relative;
    padding-left: 50px;
}

.md-timeline-row-height-avatar {
    position: absolute;
    max-height: 50px;
    max-width: 50px;
    top: 30px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 10px;
}

.md-timeline-row-height-name {
    font-size: 16px;
}

.md-timeline-row-height-title {
    font-size: 13px;
    margin-top: 5px;
}
  `,
};
