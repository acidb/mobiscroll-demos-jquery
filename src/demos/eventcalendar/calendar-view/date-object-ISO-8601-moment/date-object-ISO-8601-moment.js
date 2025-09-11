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
      var obj = $('#demo-date-type-obj')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              type: 'month',
              popover: true,
              count: true,
            },
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

      obj.navigate(new Date(2020, 4, 19));

      var iso = $('#demo-date-type-iso')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              type: 'month',
              popover: true,
              count: true,
            },
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

      iso.navigate('2020-05-20');

      var momentJs = $('#demo-date-type-moment')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: {
              type: 'month',
              popover: true,
              count: true,
            },
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

      momentJs.navigate(moment([2020, 4, 21]));

      $('#addDate').click(function () {
        obj.addEvent({
          start: new Date(2020, 4, 19, 10, 45),
          end: new Date(2020, 4, 19, 11, 45),
          text: 'New Event',
        });
        obj.navigate(new Date(2020, 4, 19));
      });

      $('#addISO').click(function () {
        iso.addEvent({
          start: '2020-05-20T12:30:00',
          end: '2020-05-20T13:00:00',
          text: 'New Event',
        });
        iso.navigate('2020-05-20');
      });

      $('#addMoment').click(function () {
        // Make sure that moment js is loaded
        momentJs.addEvent({
          start: moment([2020, 4, 21, 11]),
          end: moment([2020, 4, 21, 14]),
          text: 'New Event',
        });
        momentJs.navigate(moment([2020, 4, 21]));
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Date object</div>
                <div class="mbsc-button-group-block">
                    <button mbsc-button id="addDate">start: new Date(2020, 4, 19, 10, 45) <br /> end: new Date(2020, 4, 19, 11, 45)</button>
                </div>
                <div id="demo-date-type-obj"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">ISO string</div>
                <div class="mbsc-button-group-block">
                    <button mbsc-button id="addISO">start: 2020-05-20T12:30:00 <br /> end: 2020-05-20T13:00:00</button>
                </div>
                <div id="demo-date-type-iso"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Moment js</div>
                <div class="mbsc-button-group-block">
                    <button mbsc-button id="addMoment">start: moment([2020, 4, 21, 11]) <br /> end: moment([2020, 4, 21, 14])</button>
                </div>
                <div id="demo-date-type-moment"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
