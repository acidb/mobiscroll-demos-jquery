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
      $('#demo-custom-resource-header-template')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startDay: 1,
              endDay: 5,
              startTime: '05:00',
              endTime: '22:00',
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d-3,10)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Impact Training',
              resource: [2, 3],
              color: '#35bb5a',
            },
            {
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'Impact Training',
              resource: [2, 3],
              color: '#35bb5a',
            },
            {
              start: 'dyndatetime(y,m,d, 8, 30)',
              end: 'dyndatetime(y,m,d, 10)',
              title: 'Quick mtg. with Martin',
              resource: 3,
              color: '#913aa7',
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'General orientation',
              resource: [1, 2, 3],
              color: '#a71111',
            },
            {
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,11)',
              title: 'Product team mtg.',
              resource: [2, 3],
              color: '#6e7f29',
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Stakeholder mtg.',
              resource: 1,
              color: '#dcd234',
            },
            {
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,14)',
              title: 'Innovation mtg.',
              resource: [1, 2],
              color: '#de3d83',
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#f7c4b4',
              description: 'Sales representative',
              img: 'https://img.mobiscroll.com/demos/m1.png',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#c6f1c9',
              description: 'Web developer',
              img: 'https://img.mobiscroll.com/demos/f3.png',
            },
            {
              id: 3,
              name: 'John',
              color: '#e8d0ef',
              description: 'Territory sales manager',
              img: 'https://img.mobiscroll.com/demos/m2.png',
            },
          ],
          renderResource: function (resource) {
            return (
              '<div class="resource-template-content">' +
              '<div class="resource-name">' +
              resource.name +
              '</div>' +
              '<div class="resource-description">' +
              resource.description +
              '</div>' +
              '<img class="resource-avatar" src="' +
              resource.img +
              '"/>' +
              '</div>'
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-custom-resource-header-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.resource-template-content {
    position: relative;
    padding-left: 80px;
    text-align: left;
}

.resource-avatar {
    position: absolute;
    max-height: 50px;
    max-width: 50px;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 40px;
}

.resource-name {
    font-size: 20px;
}
  `,
};
