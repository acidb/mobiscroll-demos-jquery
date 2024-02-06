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
      var myResources = [
        {
          id: 1,
          name: 'Emma Smith',
          color: '#c8cdcf',
        },
        {
          id: 2,
          name: 'James Brown',
          color: '#76e083',
        },
        {
          id: 3,
          name: 'Olivia Miller',
          color: '#4981d6',
        },
        {
          id: 4,
          name: 'David Johnson',
          color: '#d6d145',
        },
        {
          id: 5,
          name: 'Sarah Jones',
          color: '#e25dd2',
        },
        {
          id: 6,
          name: 'Joseph Davis',
          color: '#62ab50',
        },
        {
          id: 7,
          name: 'Sophia Williams',
          color: '#eb5b34',
        },
        {
          id: 8,
          name: 'Daniel Wilson',
          color: '#7134eb',
        },
        {
          id: 9,
          name: 'Alice Clark',
          color: '#a1eb34',
        },
        {
          id: 10,
          name: 'Robert Taylor',
          color: '#9b77d9',
        },
        {
          id: 11,
          name: 'Anthony Lopez',
          color: '#6bede7',
        },
        {
          id: 12,
          name: 'Grace Moore',
          color: '#262f80',
        },
        {
          id: 13,
          name: 'Peter Jackson',
          color: '#788026',
        },
      ];

      var fixedResourceMap = {};
      var fixedNr = 0;
      var fixedResources = [];
      var resourceMap = {};
      myResources.forEach(function (r) {
        resourceMap[r.id] = r;
      });
      var inst = $('#demo-compare-resources')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              resolutionHorizontal: 'hour',
              startTime: '09:00',
              endTime: '17:00',
              startDay: 1,
              endDay: 5,
            },
          },
          dragToMove: true,
          data: [
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 1',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 2',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,16)',
              title: 'Task 3',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 4',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,14)',
              title: 'Task 5',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 6',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,14)',
              title: 'Task 7',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,16)',
              title: 'Task 8',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,11)',
              title: 'Task 9',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+2,13)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 10',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Task 11',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 12',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Task 13',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,10)',
              title: 'Task 14',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Task 15',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 16',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Task 17',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Task 18',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 19',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+2,10,9)',
              end: 'dyndatetime(y,m,d+2,11,17)',
              title: 'Task 20',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Task 21',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d,16)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 22',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,15)',
              title: 'Task 23',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Task 24',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d+2,11)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Task 25',
              resource: 5,
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 26',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Task 27',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,11)',
              title: 'Task 28',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Task 29',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d+2,16)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 30',
              resource: 6,
            },
            {
              start: 'dyndatetime(y,m,d-1,15)',
              end: 'dyndatetime(y,m,d-1,17)',
              title: 'Task 31',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Task 32',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 33',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 34',
              resource: 7,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 35',
              resource: 8,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 36',
              resource: 8,
            },
            {
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,14)',
              title: 'Task 37',
              resource: 8,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Task 38',
              resource: 8,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 39',
              resource: 9,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Task 40',
              resource: 9,
            },
            {
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 41',
              resource: 9,
            },
            {
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,14)',
              title: 'Task 42',
              resource: 9,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Task 43',
              resource: 10,
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Work order #41989',
              resource: 10,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 44',
              resource: 10,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,13)',
              title: 'Task 45',
              resource: 10,
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 46',
              resource: 10,
            },
            {
              start: 'dyndatetime(y,m,d+2,9)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 47',
              resource: 11,
            },
            {
              start: 'dyndatetime(y,m,d-1,12)',
              end: 'dyndatetime(y,m,d-1,17)',
              title: 'Task 48',
              resource: 11,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Task 49',
              resource: 12,
            },
            {
              start: 'dyndatetime(y,m,d+2,11)',
              end: 'dyndatetime(y,m,d+2,17)',
              title: 'Task 50',
              resource: 12,
            },
            {
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,15)',
              title: 'Task 51',
              resource: 13,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Task 52',
              resource: 13,
            },
          ],
          resources: myResources,
          renderResource: function (r) {
            return (
              '<div class="md-compare-resource mbsc-flex mbsc-align-items-center mbsc-justify-content-between"><div>' +
              r.name +
              '</div>' +
              (r.fixed || (!r.fixed && fixedNr <= 2)
                ? '<button mbsc-button class="md-compare-button" data-color=' +
                  (r.fixed ? 'danger' : 'success') +
                  ' data-variant="outline" data-id=' +
                  r.id +
                  '>' +
                  (r.fixed ? 'Remove' : 'Compare') +
                  '</button>'
                : '') +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-compare-resources').on('click', '.md-compare-button', function (e) {
        var id = +e.target.dataset.id;
        var isFixed = fixedResourceMap[id];
        var resource = resourceMap[id];
        if (!isFixed) {
          fixedNr++;
          fixedResourceMap[id] = true;
          resource.fixed = true;
          fixedResources.push(resource);
          if (fixedNr > 2) {
            mobiscroll.toast({
              // context,
              message: 'Comparing up to 3 schedules',
            });
          }
        } else {
          fixedNr--;
          fixedResourceMap[id] = false;
          resource.fixed = false;
          fixedResources = fixedResources.filter(function (r) {
            return r.id !== id;
          });
        }
        var result = fixedResources.slice(0);
        myResources.forEach(function (r) {
          if (!fixedResourceMap[r.id]) {
            result.push(r);
          }
        });
        inst.setOptions({ resources: result });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-compare-resources" class="md-compare"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-compare-resource {
    font-size: 12px;
}

.md-compare-resource .md-compare-button {
    font-size: 10px;
    line-height: 1.5em;
}

.md-compare .mbsc-timeline-row-gutter {
    height: 6px;
}
  `,
};
