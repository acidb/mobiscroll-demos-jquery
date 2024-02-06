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
      $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: { type: 'day' },
          },
          resources: [
            {
              // base properties
              id: 'team',
              name: 'Team 1',
              eventCreation: false,
              children: [
                {
                  // base properties
                  id: 1,
                  name: 'Ryan',
                  color: '#e20000',
                  // add any property you'd like
                  title: 'UX Designer',
                  job: 'Apollo Project',
                },
                {
                  // base properties
                  id: 2,
                  name: 'Kate',
                  color: '#60e81a',
                  // add any property you'd like
                  title: 'Product Developer',
                  job: 'Yorick Project',
                },
                {
                  // base properties
                  id: 3,
                  name: 'John',
                  color: '#3ba7ff',
                  // add any property you'd like
                  title: 'Data Analyst',
                  job: 'Titus Project',
                },
                {
                  // base properties
                  id: 4,
                  name: 'Mark',
                  color: '#e25dd2',
                  // add any property you'd like
                  title: 'Network Administrator',
                  job: 'Yorick Project',
                },
                {
                  // base properties
                  id: 5,
                  name: 'Sharon',
                  color: '#f1e920',
                  // add any property you'd like
                  title: 'Data Quality Manager',
                  job: 'Apollo Project',
                },
                {
                  // base properties
                  id: 6,
                  name: 'Emma',
                  color: '#1ac38d',
                  // add any property you'd like
                  title: 'Product Tactics Agent',
                  job: 'Titus Project',
                },
              ],
            },
          ],
          data: [
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'General orientation',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,10)',
              text: 'Stakeholder mtg.',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,13,30)',
              end: 'dyndatetime(y,m,d,14,30)',
              text: "Lunch @ Butcher's",
              resource: 5,
            },
          ],
          renderResource: function (resource) {
            if (resource.isParent) {
              return '<div>' + resource.name + '</div>';
            } else {
              return '<div>' + resource.name + '</div><div class="md-resource-data-structure-title">' + resource.title + '</div>';
            }
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-resource-data-structure-title {
    font-size: 13px;
    opacity: .7;
}
  `,
};
