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
      var milestones = [
        {
          date: 'dyndatetime(y,m,d-2)',
          name: 'Project review',
          color: '#f5da7b',
        },
        {
          date: 'dyndatetime(y,m,d-1)',
          name: 'Product shipping',
          color: '#acf3a3',
        },
        {
          date: 'dyndatetime(y,m,d+1)',
          name: 'Cycle finish',
          color: '#ff84a0',
        },
      ];

      var calendar = $('#demo-date-header-template')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startDay: 1,
              endDay: 5,
              startTime: '08:00',
              endTime: '17:00',
            },
          },
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#f7c4b4',
              img: 'https://img.mobiscroll.com/demos/m1.png',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#c6f1c9',
              img: 'https://img.mobiscroll.com/demos/f1.png',
            },
            {
              id: 3,
              name: 'John',
              color: '#e8d0ef',
              img: 'https://img.mobiscroll.com/demos/m2.png',
            },
          ],
          groupBy: 'date',
          renderDay: function (args) {
            var date = args.date;
            var formatDate = mobiscroll.formatDate;
            var task = milestones.find(function (obj) {
              return +new Date(obj.date) === +new Date(date);
            });

            return (
              '<div class="header-template-container">' +
              '<div class="header-template-date">' +
              '<div class="header-template-day-name">' +
              formatDate('DDDD', date) +
              '</div>' +
              '<div class="header-template-day">' +
              formatDate('MMMM DD', date) +
              '</div>' +
              '</div>' +
              '<div class="header-template-task" style="background: ' +
              (task ? task.color : '') +
              '">' +
              (task ? task.name : '') +
              '</div>' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="header-resource-template-content">' +
              '<img class="header-resource-avatar" src="' +
              resource.img +
              '"/>' +
              '<div class="header-resource-name">' +
              resource.name +
              '</div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/resource-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-date-header-template" class="md-date-header-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.header-template-container {
    padding: 10px;
}

.header-template-date {
    text-align: left;
    line-height: 20px;
}

.header-template-day-name {
    font-weight: bold;
}

.header-template-day {
    font-size: 12px;
}

.header-template-task {
    position: absolute;
    top: 14px;
    right: 10px;
    font-size: 12px;
    line-height: 22px;
    padding: 0 10px;
    border-radius: 12px;
    color: #555;
}

.header-resource-template-content {
    position: relative;
}

.header-resource-avatar {
    max-height: 40px;
    max-width: 40px;
}

.header-resource-name {
    font-size: 14px;
}
  `,
};
