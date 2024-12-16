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
      var calendar = $('#demo-resource-header-template')
        .mobiscroll()
        .eventcalendar({
          // drag,
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
            },
          },
          resources: [
            {
              id: 1,
              name: 'Flatiron Room',
              seats: 90,
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'The Capital City',
              seats: 250,
              color: '#ff0101',
            },
            {
              id: 3,
              name: 'Heroes Square',
              seats: 400,
              color: '#01adff',
            },
            {
              id: 4,
              name: 'Thunderdome',
              seats: 1200,
              color: '#239a21',
            },
            {
              id: 5,
              name: 'King’s Landing',
              seats: 550,
              color: '#ff4600',
            },
            {
              id: 6,
              name: 'Gathering Field',
              seats: 900,
              color: '#8f1ed6',
            },
          ],
          renderResource: function (resource) {
            return (
              '<div class="md-resource-header-template-cont">' +
              '<div class="md-resource-header-template-name">' +
              resource.name +
              '</div>' +
              '<div class="md-resource-header-template-seats">' +
              resource.seats +
              ' seats</div>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return (
              '<div class="md-resource-header-template-title">' +
              '<div class="md-resource-header-template-name">Room</div>' +
              '<div class="md-resource-header-template-seats">Capacity</div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/daily-weekly-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-header-template" class="md-resource-header-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/*<hidden>*/

.demo-timeline-resource-header-template {
    height: 100%;
}

/*</hidden>*/

.md-resource-header-template .mbsc-timeline-resource-col {
    width: 230px;
}

.md-resource-header-template .mbsc-timeline-resource-header,
.md-resource-header-template .mbsc-timeline-resource-title {
    padding: 0;
}

.md-resource-header-template .mbsc-timeline-resource-title {
    height: 100%;
}

.md-resource-header-template-cont {
    line-height: 50px;
    height: 100%;
}

.md-resource-header-template-name {
    height: 100%;
    display: inline-block;
    padding: 0 5px;
}

.md-resource-header-template-seats {
    border-left: 1px solid #ccc;
    width: 90px;
    height: 100%;
    float: right;
    padding: 0 5px;
}

.md-resource-header-template-title {
    font-weight: 600;
    line-height: 56px;
}
  `,
};
