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
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      var resourceNr = 20;
      var eventsNr = 2000;
      var myResources = [];
      var myEventColors = ['#ff0101', '#239a21', '#8f1ed6', '#01adff', '#d8ca1a'];

      for (var i = 1; i <= resourceNr; i++) {
        myResources.push({ name: 'Resource ' + i, id: i });
      }

      $('#demo-big-data')
        .mobiscroll()
        .eventcalendar({
          // drag,
          resources: myResources,
          view: {
            scheduler: {
              type: 'month',
              timeCellStep: 15,
              timeLabelStep: 15,
            },
          },
          groupBy: 'date',
          onPageLoading: function (args, inst) {
            inst.setEvents([]);
            setTimeout(function () {
              var myEvents = [];
              var year = args.firstDay.getFullYear();
              var month = args.firstDay.getMonth();
              var daysInMonth = new Date(year, month + 1, 0).getDate();
              // Generate random events for the visible month
              for (var i = 0; i < eventsNr; i++) {
                var day = getRandomInt(1, daysInMonth + 1);
                var resource = getRandomInt(1, resourceNr + 1);
                var color = getRandomInt(0, myEventColors.length);
                var startHour = getRandomInt(0, 23);
                var startMinute = getRandomInt(0, 4) * 15;
                var start = new Date(year, month, day, startHour, startMinute);
                var end = new Date(start.getTime() + getRandomInt(2, 9) * 15 * 60 * 1000);
                if (end.getDate() === start.getDate()) {
                  myEvents.push({
                    color: myEventColors[color],
                    end: end,
                    resource: resource,
                    start: start,
                    title: 'Event ' + i,
                  });
                }
              }
              inst.setEvents(myEvents);
            });
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-big-data"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.demo-loading-big-data-sets {
    height: 100%;
}
  `,
};
