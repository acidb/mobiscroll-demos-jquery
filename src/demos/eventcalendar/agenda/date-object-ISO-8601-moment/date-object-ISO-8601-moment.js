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
      var dateObj = $('#demo-date-type-obj')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'month' },
          },
          data: [
            {
              start: new Date(2020, 4, 19, 7),
              end: new Date(2020, 4, 19, 8),
              title: 'General orientation',
              color: '#35bb5a',
            },
          ],
        })
        .mobiscroll('getInst');

      dateObj.navigate(new Date(2020, 4, 19));

      var dateISO = $('#demo-date-type-iso')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'month' },
          },
          data: [
            {
              start: '2020-05-20T07:00:00',
              end: '2020-05-20T08:00:00',
              title: 'Clever Conference',
              color: '#a71111',
            },
          ],
        })
        .mobiscroll('getInst');

      dateISO.navigate('2020-05-20');

      var dateMoment = $('#demo-date-type-moment')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: { type: 'month' },
          },
          data: [
            {
              start: moment([2020, 4, 21, 7]),
              end: moment([2020, 4, 21, 8]),
              title: 'Product team mtg.',
              color: '#913aa7',
            },
          ],
        })
        .mobiscroll('getInst');

      dateMoment.navigate(moment([2020, 4, 21]));

      $('#demo-add-date-obj').on('click', function () {
        dateObj.addEvent({
          start: new Date(2020, 4, 19, 10, 45),
          end: new Date(2020, 4, 19, 11, 45),
          text: 'New Event',
        });
        dateObj.navigate(new Date(2020, 4, 19));
      });

      $('#demo-add-iso').on('click', function () {
        dateISO.addEvent({
          start: '2020-05-20T12:30:00',
          end: '2020-05-20T13:00:00',
          text: 'New Event',
        });
        dateISO.navigate('2020-05-20');
      });

      $('#demo-add-moment').on('click', function () {
        // make sure that moment js is loaded
        dateMoment.addEvent({
          start: moment([2020, 4, 21, 11]),
          end: moment([2020, 4, 21, 14]),
          text: 'New Event',
        });
        dateMoment.navigate(moment([2020, 4, 21]));
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
  <div class="mbsc-grid">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Date object</div>
          <div class="mbsc-button-group-block">
            <button mbsc-button id="demo-add-date-obj">
              start: new Date(2020, 4, 19, 10, 45)<br /> 
              end: new Date(2020, 4, 19, 11, 45)
            </button>
          </div>
          <div id="demo-date-type-obj"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">ISO 8601 date string</div>
          <div class="mbsc-button-group-block">
            <button mbsc-button id="demo-add-iso">
              start: '2020-05-20T12:30:00'<br /> 
              end: '2020-05-20T13:00:00'
            </button>
          </div>
          <div id="demo-date-type-iso"></div>
        </div>
      </div>
      <div class="mbsc-col-sm-12 mbsc-col-md-4">
        <div class="mbsc-form-group">
          <div class="mbsc-form-group-title">Moment.js object</div>
          <div class="mbsc-button-group-block">
            <button mbsc-button id="demo-add-moment">
              start: moment([2020, 4, 21, 11])<br />
              end: moment([2020, 4, 21, 14])
            </button>
          </div>
          <div id="demo-date-type-moment"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};
