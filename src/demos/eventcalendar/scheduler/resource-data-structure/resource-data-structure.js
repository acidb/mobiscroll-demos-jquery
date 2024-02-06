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
            schedule: { type: 'day' },
          },
          resources: [
            {
              // base properties
              id: 1,
              name: 'Ryan',
              color: '#ca4747',
              eventCreation: true,
              // add any property you'd like
              title: 'UX Designer',
              job: 'Apollo Project',
            },
            {
              // base properties
              id: 2,
              name: 'Kate',
              color: '#cc9900',
              eventCreation: true,
              // add any property you'd like
              title: 'Product Developer',
              job: 'Yorick Project',
            },
            {
              // base properties
              id: 3,
              name: 'John',
              color: '#01adff',
              eventCreation: true,
              // add any property you'd like
              title: 'Network Administrator',
              job: 'Titus Project',
            },
          ],
          data: [
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'General orientation',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,11)',
              text: 'Stakeholder mtg.',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,13,30)',
              end: 'dyndatetime(y,m,d,15)',
              text: "Lunch @ Butcher's",
              resource: 3,
            },
          ],
          renderResource: function (resource) {
            return '<div>' + resource.name + '</div><div class="md-resource-data-structure-title">' + resource.title + '</div>';
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
