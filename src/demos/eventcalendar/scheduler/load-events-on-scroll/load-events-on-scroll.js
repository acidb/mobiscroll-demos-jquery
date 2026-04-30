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
        { id: 1, name: 'Resource 1', color: '#FF5733' },
        { id: 2, name: 'Resource 2', color: '#33FF57' },
        { id: 3, name: 'Resource 3', color: '#3357FF' },
        { id: 4, name: 'Resource 4', color: '#FF33A6' },
        { id: 5, name: 'Resource 5', color: '#FFC300' },
        { id: 6, name: 'Resource 6', color: '#DAF7A6' },
        { id: 7, name: 'Resource 7', color: '#581845' },
        { id: 8, name: 'Resource 8', color: '#900C3F' },
        { id: 9, name: 'Resource 9', color: '#C70039' },
        { id: 10, name: 'Resource 10', color: '#FF5733' },
        { id: 11, name: 'Resource 11', color: '#33FFBD' },
        { id: 12, name: 'Resource 12', color: '#FFC300' },
        { id: 13, name: 'Resource 13', color: '#FF33F6' },
        { id: 14, name: 'Resource 14', color: '#33FF57' },
        { id: 15, name: 'Resource 15', color: '#33A6FF' },
        { id: 16, name: 'Resource 16', color: '#DAF7A6' },
        { id: 17, name: 'Resource 17', color: '#581845' },
        { id: 18, name: 'Resource 18', color: '#900C3F' },
        { id: 19, name: 'Resource 19', color: '#C70039' },
        { id: 20, name: 'Resource 20', color: '#FF33F6' },
      ];

      $('#demo-load-events-on-scroll')
        .mobiscroll()
        .eventcalendar({
          view: {
            scheduler: {
              type: 'month',
              timeCellStep: 15,
              timeLabelStep: 15,
            },
          },
          groupBy: 'date',
          resources: resources,
          onVirtualLoading: function (args, inst) {
            var start = mobiscroll.formatDate('YYYY-MM-DDTHH:mm:ss', args.viewStart);
            var end = mobiscroll.formatDate('YYYY-MM-DDTHH:mm:ss', args.viewEnd);

            $.getJSON(
              'https://trial.mobiscroll.com/load-data-scroll/?start=' +
                start +
                '&end=' +
                end +
                '&rstart=' +
                args.resourceStart +
                '&rend=' +
                args.resourceEnd +
                '&callback=?',
              function (data) {
                inst.setEvents(data.events);

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Loading events...',
                  duration: 1000,
                });
              },
              'jsonp',
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-load-events-on-scroll"></div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: ``,
};
