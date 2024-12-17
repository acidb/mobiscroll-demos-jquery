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
      var resources = [
        { id: 1, name: 'Resource 1' },
        { id: 2, name: 'Resource 2' },
        { id: 3, name: 'Resource 3' },
        { id: 4, name: 'Resource 4' },
        { id: 5, name: 'Resource 5' },
        { id: 6, name: 'Resource 6' },
        { id: 7, name: 'Resource 7' },
        { id: 8, name: 'Resource 8' },
        { id: 9, name: 'Resource 9' },
        { id: 10, name: 'Resource 10' },
        { id: 11, name: 'Resource 11' },
        { id: 12, name: 'Resource 12' },
        { id: 13, name: 'Resource 13' },
        { id: 14, name: 'Resource 14' },
        { id: 15, name: 'Resource 15' },
        { id: 16, name: 'Resource 16' },
        { id: 17, name: 'Resource 17' },
        { id: 18, name: 'Resource 18' },
        { id: 19, name: 'Resource 19' },
        { id: 20, name: 'Resource 20' },
        { id: 21, name: 'Resource 21' },
        { id: 22, name: 'Resource 22' },
        { id: 23, name: 'Resource 23' },
        { id: 24, name: 'Resource 24' },
        { id: 25, name: 'Resource 25' },
      ];

      $('#demo-load-resources-on-scroll')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'month',
              resolutionHorizontal: 'hour',
            },
          },
          resources: resources,
          selectedDate: '2021-01-05',
          onVirtualLoading: function (args, inst) {
            var start = mobiscroll.formatDate('YYYY-MM-DD', args.viewStart);
            var end = mobiscroll.formatDate('YYYY-MM-DD', args.viewEnd);
            var isEndLoaded = resources[resources.length - 1].id > args.resourceEnd;

            if (!isEndLoaded) {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Loading Resources...',
                duration: 1000,
              });
            }

            $.getJSON(
              'https://trial.mobiscroll.com/load-data-scroll/?start=' +
                start +
                '&end=' +
                end +
                '&rstart=' +
                args.resourceStart +
                '&rend=' +
                args.resourceEnd +
                '&load=' +
                (!isEndLoaded ? args.resourceEnd : 0) +
                '&callback=?',
              function (newData) {
                if (newData.resources) {
                  resources = resources.concat(newData.resources);
                  inst.setOptions({
                    resources: resources,
                    data: newData.events,
                  });
                } else {
                  inst.setEvents(newData.events);
                }
              },
              'jsonp',
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-load-resources-on-scroll"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
