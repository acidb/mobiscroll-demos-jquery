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
      $('#demo-marked')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          showRangeLabels: false,
          display: 'inline',
          marked: [
            { recurring: { repeat: 'yearly', month: 5, day: 1 }, color: '#ffc400' },
            { recurring: { repeat: 'yearly', month: 12, day: 24 }, color: '#ffee00' },
            { recurring: { repeat: 'yearly', month: 12, day: 25 }, color: 'red' },
            { date: 'dyndatetime(y,m + 1, 4)' },
            { date: 'dyndatetime(y,m - 2, 13)' },
            { date: 'dyndatetime(y,m, 2)', color: '#46c4f3' },
            { date: 'dyndatetime(y,m, 6)', color: '#7e56bd' },
            { date: 'dyndatetime(y,m, 11)', color: '#7e56bd' },
            { date: 'dyndatetime(y,m, 19)', color: '#89d7c9' },
            { date: 'dyndatetime(y,m, 28)', color: '#ea4986' },
            { date: 'dyndatetime(y,m, 13)', color: '#7e56bd' },
            { date: 'dyndatetime(y,m, 13)', color: '#f13f77' },
            { date: 'dyndatetime(y,m, 13)', color: '#89d7c9' },
            { date: 'dyndatetime(y,m, 13)', color: '#8dec7d' },
            { date: 'dyndatetime(y,m, 21)', color: '#ffc400' },
            { date: 'dyndatetime(y,m, 21)', color: '#8dec7d' },
            { start: 'dyndatetime(y,m + 1, 15)', end: 'dyndatetime(y,m + 1, 18)', color: '#f4511e' },
          ],
        });

      $('#demo-colored')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          showRangeLabels: false,
          display: 'inline',
          colors: [
            { recurring: { repeat: 'yearly', month: 12, day: 8 }, background: '#9ccc65' },
            { recurring: { repeat: 'yearly', month: 5, day: 1 }, background: 'red' },
            { recurring: { repeat: 'yearly', month: 12, day: 24 }, background: '#fff568' },
            { recurring: { repeat: 'yearly', month: 12, day: 25 }, background: '#e88080' },
            { date: 'dyndatetime(y,m + 1, 4)', background: '#cfd8dc' },
            { date: 'dyndatetime(y,m + 2, 24)', background: '#9575cd' },
            { date: 'dyndatetime(y,m - 2, 13)', background: '#d4e157' },
            { date: 'dyndatetime(y,m - 1, 6)', background: '#f4511e' },
            { date: 'dyndatetime(y,m + 1, 6)', background: '#46c4f3' },
            { date: 'dyndatetime(y,m + 1, 22)', background: '#7e56bd' },
            { date: 'dyndatetime(y,m - 1, 11)', background: '#46c4f3' },
            { date: 'dyndatetime(y,m - 1, 29)', background: '#7e56bd' },
            { date: 'dyndatetime(y,m, 2)', background: '#46c4f3' },
            { date: 'dyndatetime(y,m, 3)', background: '#7e56bd' },
            { date: 'dyndatetime(y,m, 11)', background: '#f13f77' },
            { date: 'dyndatetime(y,m, 19)', background: '#8dec7d' },
            { date: 'dyndatetime(y,m, 28)', background: '#ea4986' },
            { start: 'dyndatetime(y,m + 1, 15)', end: 'dyndatetime(y,m + 1, 18)', text: 'Conference', background: '#f4511e' },
          ],
        });

      $('#demo-labels')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          showRangeLabels: false,
          display: 'inline',
          labels: [
            { recurring: { repeat: 'yearly', month: 12, day: 25 }, title: 'Christmas', color: '#f48fb1' },
            { recurring: { repeat: 'yearly', month: 1, day: 1 }, title: 'New year' },
            { recurring: { repeat: 'yearly', month: 12, day: 1 }, title: 'Meeting', color: '#ffc400' },
            { date: 'dyndatetime(y,m + 1, 4)', text: 'Spa day', color: '#cfd8dc' },
            { date: 'dyndatetime(y,m + 2, 24)', text: 'BD Party', color: '#9ccc65' },
            { date: 'dyndatetime(y,m - 2, 13)', text: 'Exams', color: '#d4e157' },
            { date: 'dyndatetime(y,m - 1, 6)', text: 'Trip', color: '#f4511e' },
            { date: 'dyndatetime(y,m + 1, 6)', color: '#46c4f3', text: 'Pizza Night' },
            { date: 'dyndatetime(y,m + 1, 22)', color: '#7e56bd', text: 'Beerpong' },
            { date: 'dyndatetime(y,m - 1, 11)', color: '#46c4f3', text: 'Anniversary' },
            { date: 'dyndatetime(y,m - 1, 29)', color: '#7e56bd', text: 'Pete BD' },
            { date: 'dyndatetime(y,m, 2)', color: '#46c4f3', text: 'Ana BD' },
            { date: 'dyndatetime(y,m, 3)', color: '#7e56bd', text: 'Concert' },
            { date: 'dyndatetime(y,m, 11)', color: '#f13f77', text: 'Trip' },
            { date: 'dyndatetime(y,m, 19)', color: '#8dec7d', text: 'Math exam' },
            { date: 'dyndatetime(y,m, 28)', color: '#ea4986', text: 'Party' },
            { start: 'dyndatetime(y,m + 1, 15)', end: 'dyndatetime(y,m + 1, 18)', text: 'Conference', color: '#f4511e' },
          ],
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Marked days</div>
                <div id="demo-marked"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Colored days</div>
                <div id="demo-colored"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Labels</div>
                <div id="demo-labels"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
