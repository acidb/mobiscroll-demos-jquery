import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import moment from 'moment';

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
      ];

      var obj = $('#demo-date-type-obj')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
            },
          },
          data: [
            {
              start: new Date(2020, 4, 19, 9),
              end: new Date(2020, 4, 19, 11),
              title: 'General orientation',
              resource: 2,
            },
          ],
          resources: myResources,
        })
        .mobiscroll('getInst');

      obj.navigate(new Date(2020, 4, 19));

      var iso = $('#demo-date-type-iso')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
            },
          },
          data: [
            {
              start: '2020-05-20T09:00:00',
              end: '2020-05-20T11:00:00',
              title: 'Clever Conference',
              resource: 2,
            },
          ],
          resources: myResources,
        })
        .mobiscroll('getInst');

      iso.navigate('2020-05-20');

      var momentJs = $('#demo-date-type-moment')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
            },
          },
          data: [
            {
              start: moment([2020, 4, 21, 9]),
              end: moment([2020, 4, 21, 11]),
              title: 'Product team mtg.',
              resource: 2,
            },
          ],
          resources: myResources,
        })
        .mobiscroll('getInst');

      momentJs.navigate(moment([2020, 4, 21]));

      $('#addDate').click(function () {
        obj.addEvent({
          start: new Date(2020, 4, 19, 11, 15),
          end: new Date(2020, 4, 19, 13, 45),
          text: 'New Event',
          resource: 4,
        });
        obj.navigate(new Date(2020, 4, 19));
      });

      $('#addISO').click(function () {
        iso.addEvent({
          start: '2020-05-20T15:30:00',
          end: '2020-05-20T18:00:00',
          text: 'New Event',
          resource: 1,
        });
        iso.navigate('2020-05-20');
      });

      $('#addMoment').click(function () {
        // make sure that moment js is loaded
        momentJs.addEvent({
          start: moment([2020, 4, 21, 12]),
          end: moment([2020, 4, 21, 15]),
          text: 'New Event',
          resource: 5,
        });
        momentJs.navigate(moment([2020, 4, 21]));
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Date object</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="addDate">start: new Date(2020, 4, 19, 11, 15) <br /> end: new Date(2020, 4, 19, 13, 45)</button>
    </div>
    <div id="demo-date-type-obj"></div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">ISO string</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="addISO">start: 2020-05-20T15:30:00 <br /> end: 2020-05-20T18:00:00</button>
    </div>
    <div id="demo-date-type-iso"></div>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Moment js</div>
    <div class="mbsc-button-group-block">
        <button mbsc-button id="addMoment">start: moment([2020, 4, 21, 12]) <br /> end: moment([2020, 4, 21, 15])</button>
    </div>
    <div id="demo-date-type-moment"></div>
</div>
  `,
};
