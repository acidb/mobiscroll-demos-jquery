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
      var zoomLevel = 9;

      var myResources = [
        { id: 1, name: 'Resource A', color: '#e20000' },
        { id: 2, name: 'Resource B', color: '#76e083' },
        { id: 3, name: 'Resource C', color: '#4981d6' },
        { id: 4, name: 'Resource D', color: '#e25dd2' },
        { id: 5, name: 'Resource E', color: '#1dab2f' },
        { id: 6, name: 'Resource F', color: '#d6d145' },
      ];

      var myCalendar = $('#demo-calendar-zoom')
        .mobiscroll()
        .eventcalendar({
          // drag,
          resources: myResources,
          refDate: getRefDate(new Date()),
          zoomLevel: zoomLevel,
          view: {
            timeline: {
              zoomLevels: {
                1: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'small' },
                2: { type: 'year', size: 25, resolutionHorizontal: 'year', columnWidth: 'xlarge' },
                3: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'small' },
                4: { type: 'year', size: 25, resolutionHorizontal: 'quarter', columnWidth: 'xlarge' },
                5: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'medium' },
                6: { type: 'year', size: 25, resolutionHorizontal: 'month', columnWidth: 'xxxlarge' },
                7: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'medium' },
                8: { type: 'year', size: 25, resolutionHorizontal: 'week', columnWidth: 'xxxlarge' },
                9: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'small' },
                10: { type: 'year', size: 25, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
                11: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 720, timeLabelStep: 720 },
                12: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 360, timeLabelStep: 360 },
                13: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'xlarge', timeCellStep: 180, timeLabelStep: 180 },
                14: { type: 'year', size: 3, resolutionHorizontal: 'hour', columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
                15: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'medium' },
                16: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 30, columnWidth: 'xxxlarge' },
                17: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 15, timeLabelStep: 15, columnWidth: 'xxxlarge' },
                18: { type: 'month', size: 3, resolutionHorizontal: 'hour', timeCellStep: 5, timeLabelStep: 5, columnWidth: 'large' },
              },
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<button id="demo-zoom-level-out" class="mds-button-zoom-level" mbsc-button data-icon="minus" data-variant="flat"></button>' +
              '<input id="demo-zoom-level-slider" type="range" min="1" max="18" value="9" />' +
              '<button id="demo-zoom-level-in" class="mds-button-zoom-level" mbsc-button data-icon="plus" data-variant="flat"></button>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      function getRefDate(viewDate) {
        if (zoomLevel < 11) {
          return new Date(viewDate.getFullYear() - 12, 0, 1);
        }
        if (zoomLevel < 15) {
          return new Date(viewDate.getFullYear() - 1, 0, 1);
        }
        return new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
      }

      function handleZoom(zoom) {
        zoomLevel = zoom;

        $('#demo-zoom-level-slider').val(zoomLevel);
        $('#demo-zoom-level-in').prop('disabled', zoomLevel === 18);
        $('#demo-zoom-level-out').prop('disabled', zoomLevel === 1);

        var viewDate = myCalendar ? myCalendar.getViewDate() : new Date();

        myCalendar.setOptions({
          refDate: getRefDate(viewDate),
          zoomLevel: zoomLevel,
        });
      }

      $('#demo-zoom-level-slider').on('input', function (ev) {
        handleZoom(+ev.target.value);
      });

      $('#demo-zoom-level-in').on('click', function () {
        handleZoom(zoomLevel + 1);
      });

      $('#demo-zoom-level-out').on('click', function () {
        handleZoom(zoomLevel - 1);
      });

      $.getJSON(
        'https://trial.mobiscroll.com/timeline-events/?callback=?',
        function (events) {
          myCalendar.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-calendar-zoom"></div>
  `,
};
