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
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

      var resourceNr = 200;
      var eventsNr = 10000;
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
            timeline: {
              type: 'year',
              eventList: true,
            },
          },
          onPageLoading: function (args, inst) {
            setTimeout(function () {
              var myEvents = [];
              var year = args.firstDay.getFullYear();
              // Generate random events
              for (var i = 0; i < eventsNr; i++) {
                var day = getRandomInt(1, 31);
                var length = getRandomInt(2, 5);
                var resource = getRandomInt(1, resourceNr + 1);
                var month = getRandomInt(0, 12);
                var color = getRandomInt(0, 6);
                myEvents.push({
                  color: myEventColors[color],
                  end: new Date(year, month, day + length),
                  resource: resource,
                  start: new Date(year, month, day),
                  title: 'Event ' + i,
                });
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
