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
      var allLabels;
      var nrLabels;
      var fitLabels;
      var allLabelsWeeks;
      var nrLabelsWeeks;
      var labelsWeek;

      allLabels = $('#demo-labels-all')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'month', labels: 'all' },
          },
        })
        .mobiscroll('getInst');

      nrLabels = $('#demo-labels-nr')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'month', labels: 3 },
          },
        })
        .mobiscroll('getInst');

      fitLabels = $('#demo-labels-fit')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'month', labels: true },
          },
        })
        .mobiscroll('getInst');

      allLabelsWeeks = $('#demo-labels-all-w')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week', labels: 'all' },
          },
        })
        .mobiscroll('getInst');

      nrLabelsWeeks = $('#demo-labels-nr-w')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week', labels: 3 },
          },
        })
        .mobiscroll('getInst');

      labelsWeek = $('#demo-labels-fit-w')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week', labels: true },
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          fitLabels.setEvents(events);
          allLabels.setEvents(events);
          nrLabels.setEvents(events);
          labelsWeek.setEvents(events);
          allLabelsWeeks.setEvents(events);
          nrLabelsWeeks.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">All labels</div>
                <div id="demo-labels-all"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Up to 3 labels</div>
                <div id="demo-labels-nr"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Labels fitting the row</div>
                <div id="demo-labels-fit"></div>
            </div>
        </div>
    </div>
    <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">All labels</div>
                <div id="demo-labels-all-w"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Up to 3 labels</div>
                <div id="demo-labels-nr-w"></div>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Labels fitting the row</div>
                <div id="demo-labels-fit-w"></div>
            </div>
        </div>
    </div>
</div>
  `,
};
