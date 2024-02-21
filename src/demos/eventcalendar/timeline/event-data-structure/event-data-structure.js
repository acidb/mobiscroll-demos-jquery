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
      var cal = $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'General orientation',
              resource: 2,
              bufferBefore: 20,
              bufferAfter: 30,
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Resource A',
              color: '#fdf500',
            },
            {
              id: 2,
              name: 'Resource B',
              color: '#ff0101',
            },
            {
              id: 3,
              name: 'Resource C',
              color: '#01adff',
            },
            {
              id: 4,
              name: 'Resource D',
              color: '#239a21',
            },
            {
              id: 5,
              name: 'Resource E',
              color: '#ff4600',
            },
          ],
        })
        .mobiscroll('getInst');

      $('#add-event').on('click', function () {
        var newEvent = {
          // base properties
          title: 'Product planning',
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,17)',
          resource: 4,
          bufferBefore: 20,
          bufferAfter: 30,
          // add any property you'd like
          busy: true,
          description: 'Weekly meeting with team',
          location: 'Office',
        };

        cal.addEvent(newEvent);
        cal.navigateToEvent(newEvent);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Event added',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo"></div>
<div class="mbsc-button-group-block">
    <button mbsc-button id="add-event">Add event to calendar</button>
</div>
  `,
};
