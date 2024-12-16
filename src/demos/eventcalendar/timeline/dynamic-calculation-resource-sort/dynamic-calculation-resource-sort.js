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
      var $popupElm = $('#demo-filtering-popup');
      var initialSort = true;
      var initialSortColumn;
      var initialSortDirection;
      var loadedEvents;
      var metricBarAnimation = true;
      var selectedMetric = 'standby';
      var selectedMetricDesc = 'Standby Time';
      var sortColumn = 'standby';
      var sortDirection = 'asc';
      var weekStart;
      var weekEnd;

      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #013 - Miami to Seattle',
          resource: 1,
          color: '#FF9933',
          payload: 25,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #014 - Denver to Boston',
          resource: 2,
          color: '#33FFA6',
          payload: 18,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #015 - Orlando to Austin',
          resource: 3,
          color: '#9933FF',
          payload: 20,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #016 - Detroit to Baltimore',
          resource: 4,
          color: '#33A6FF',
          payload: 0,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #017 - Las Vegas to Portland',
          resource: 5,
          color: '#FF5733',
          payload: 20,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #018 - Atlanta to Kansas City',
          resource: 6,
          color: '#33FF99',
          payload: 0,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-4,11)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #018 - Dallas to Atlanta',
          resource: 6,
          color: '#33FF99',
          payload: 14,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #019 - Charlotte to Indianapolis',
          resource: 7,
          color: '#FF5733',
          payload: 22,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #005 - Dallas to San Francisco',
          resource: 7,
          color: '#FF5733',
          payload: 18,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #001 - New York to Los Angeles',
          resource: 7,
          color: '#FF5733',
          payload: 20,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #009 - San Diego to Dallas',
          resource: 7,
          color: '#FF5733',
          payload: 16,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #006 - Los Angeles to Chicago',
          resource: 8,
          color: '#FF33A6',
          payload: 10,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-2)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #010 - San Francisco to Los Angeles',
          resource: 8,
          color: '#FF33A6',
          payload: 0,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #007 - Houston to New York',
          resource: 9,
          color: '#33FF57',
          payload: 0,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #003 - Philadelphia to Phoenix',
          resource: 9,
          color: '#33FF57',
          payload: 0,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d-1)',
          title: 'Tour #028 - ? to Philadelphiax',
          resource: 9,
          color: '#33FF57',
          payload: 11,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #004 - San Antonio to San Diego',
          resource: 10,
          color: '#3357FF',
          payload: 15,
          overlap: false,
        },

        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #022 - Cleveland to Cincinnati',
          resource: 10,
          color: '#3357FF',
          payload: 17,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #023 - Boston to Philadelphia',
          resource: 11,
          color: '#FF9933',
          payload: 19,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #024 - Las Vegas to San Diego',
          resource: 12,
          color: '#33FF57',
          payload: 28,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-3)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #025 - Miami to Charlotte',
          resource: 13,
          color: '#9933FF',
          payload: 26,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #026 - Seattle to Portland',
          resource: 14,
          color: '#33A6FF',
          payload: 12,
          overlap: false,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #027 - Atlanta to Orlando',
          resource: 15,
          color: '#FF5733',
          payload: 17,
          overlap: false,
        },
      ];

      var myResources = [
        { id: 1, name: 'NY-TRK-1200', capacity: 25, location: 'New York', model: 'Renault Magnum' },
        { id: 2, name: 'LA-TRK-0090', capacity: 18, location: 'Los Angeles', model: 'Mercedes Actros' },
        { id: 3, name: 'CH-TRK-0700', capacity: 22, location: 'Phoenix', model: 'Scania R500' },
        { id: 4, name: 'HO-TRK-0850', capacity: 28, location: 'Houston', model: 'Volvo FH16' },
        { id: 5, name: 'PH-TRK-0900', capacity: 24, location: 'Chicago', model: 'MAN TGX' },
        { id: 6, name: 'PA-TRK-0300', capacity: 15, location: 'Philadelphia', model: 'Renault T High' },
        { id: 8, name: 'SD-TRK-0250', capacity: 21, location: 'San Francisco', model: 'Mercedes Arocs' },
        { id: 9, name: 'DA-TRK-0400', capacity: 20, location: 'Dallas', model: 'DAF XF' },
        { id: 10, name: 'SF-TRK-0550', capacity: 17, location: 'San Diego', model: 'Iveco Stralis' },
        { id: 11, name: 'BO-TRK-1100', capacity: 23, location: 'Boston', model: 'Kenworth T680' },
        { id: 12, name: 'LV-TRK-2200', capacity: 30, location: 'Las Vegas', model: 'Volvo FH16' },
        { id: 13, name: 'MI-TRK-3300', capacity: 26, location: 'Miami', model: 'Peterbilt 579' },
        { id: 14, name: 'SE-TRK-4400', capacity: 16, location: 'Seattle', model: 'Mack Anthem' },
        { id: 15, name: 'AT-TRK-5500', capacity: 19, location: 'Atlanta', model: 'Renault Magnum' },
      ];

      function refreshData(inst) {
        if (inst) {
          loadedEvents = inst.getEvents();
        }

        myResources.forEach(function (resource) {
          var resourceEvents = loadedEvents.filter(function (event) {
            return event.resource === resource.id;
          });

          if (selectedMetric === 'standby') {
            resource.standby = 168;

            resourceEvents.forEach(function (event) {
              var eventStart = new Date(event.start);
              var eventEnd = new Date(event.end);
              var effectiveStart = eventStart < weekStart ? weekStart : eventStart;
              var effectiveEnd = eventEnd > weekEnd ? weekEnd : eventEnd;

              if (effectiveStart < effectiveEnd) {
                resource.standby -= (effectiveEnd - effectiveStart) / (1000 * 60 * 60);
              }
            });
          }

          if (selectedMetric === 'deadhead') {
            var totalDeadheadTime = resourceEvents.reduce(function (total, event) {
              var eventStart = new Date(event.start);
              var eventEnd = new Date(event.end);
              var effectiveStart = eventStart < weekStart ? weekStart : eventStart;
              var effectiveEnd = eventEnd > weekEnd ? weekEnd : eventEnd;

              if (effectiveStart < effectiveEnd && (!event.payload || event.payload <= 0)) {
                return total + (effectiveEnd - effectiveStart) / (1000 * 60 * 60);
              }
              return total;
            }, 0);

            resource.deadhead = totalDeadheadTime;
          }

          if (selectedMetric === 'payload') {
            var weekEvents = resourceEvents.filter(function (event) {
              return new Date(event.end) > weekStart && new Date(event.start) < weekEnd;
            });
            var totalPayload = weekEvents.reduce(function (total, event) {
              return total + (event.payload || 0);
            }, 0);

            var numberOfTours = weekEvents.length;
            resource.payload =
              weekEvents.length > 0 && resource.capacity ? Math.round((totalPayload / numberOfTours / resource.capacity) * 100) : 0;
          }
        });
      }

      function sortResources() {
        metricBarAnimation = true;
        initialSort = false;
        myResources.sort(function (a, b) {
          return sortDirection === 'asc' ? (a[sortColumn] > b[sortColumn] ? 1 : -1) : a[sortColumn] < b[sortColumn] ? 1 : -1;
        });
        calendar.setOptions({ resources: myResources.slice() });
        setTimeout(function () {
          metricBarAnimation = false;
        }, 100);
      }

      function delayedToastSort(resourceId, event) {
        var resource = myResources.find(function (resource) {
          return resource.id === resourceId;
        });

        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          animation: 'pop',
          button: {
            text: 'Sort now',
            action: function () {
              sortResources();
            },
          },
          cssClass: 'mds-popup-sort-snackbar',
          display: 'center',
          duration: 3000,
          onClose: function () {
            resource.cssClass = 'mds-resource-highlight';
            sortResources();
            setTimeout(function () {
              resource.cssClass = '';
              calendar.setOptions({ resources: myResources.slice() });
            }, 1000);
            calendar.navigateToEvent(event);
          },
        });
        setTimeout(function () {
          document.querySelector('.mds-popup-sort-snackbar .mbsc-toast-background').classList.add('start-progress');
        });
      }

      var popup = $popupElm
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                if (initialSortColumn != sortColumn) {
                  refreshData();
                }
                sortResources();
                initialSortColumn = sortColumn;
                initialSortDirection = sortDirection;
                popup.close();

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  cssClass: 'mds-popup-sort-toast',
                  message: 'Resouces sorted',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            $('.mbsc-popup-sort-metric[value="' + initialSortColumn + '"]').mobiscroll('getInst').checked = true;
            $('.mbsc-popup-sort-direction[value="' + initialSortDirection + '"]').mobiscroll('getInst').checked = true;
          },
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-timeline-popup-sort')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          data: myEvents,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            timeline: {
              type: 'week',
              resolutionHorizontal: 'day',
            },
          },
          resources: myResources,
          renderHeader: function () {
            return (
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-next></div>' +
              '<div mbsc-calendar-nav></div>' +
              '<button id="demo-popup-sort-button" data-start-icon="bars" data-variant="flat" mbsc-button style="margin-left: auto;">Sort Trucks</button>'
            );
          },
          renderResourceHeader: function () {
            return '<div class="mds-popup-sort-resource-cell mds-popup-sort-resource-cell-name">' + 'Trucks' + '</div>';
          },
          renderResource: function (resource) {
            var metricValue = resource[selectedMetric];

            var barValue =
              selectedMetric === 'payload'
                ? metricValue
                : selectedMetric === 'standby' || selectedMetric === 'deadhead'
                  ? (metricValue / 168) * 100
                  : 100;

            var barColorClass =
              barValue <= 33 ? 'mds-resource-green-bar' : barValue <= 66 ? 'mds-resource-yellow-bar' : 'mds-resource-red-bar';

            var metricBarClass = metricBarAnimation ? 'mds-metric-bar-animation ' : 'mds-metric-bar-no-animation ';

            return (
              '<div class="mds-popup-sort-resource-cell">' +
              '<strong>' +
              resource.name +
              '</strong>' +
              '<div class="mds-resource-attribute">Model: ' +
              (resource.model || 'N/A') +
              '</div>' +
              '<div class="mds-resource-attribute">Capacity: ' +
              resource.capacity +
              'T</div>' +
              '<div class="mds-resource-attribute">' +
              selectedMetricDesc +
              ': ' +
              metricValue +
              (selectedMetric === 'payload' ? '%' : selectedMetric === 'standby' || selectedMetric === 'deadhead' ? 'h' : '') +
              '</div>' +
              '<div class="mds-metric-bar-container" style="margin-top: 5px;">' +
              '<div class=" ' +
              metricBarClass +
              barColorClass +
              '" style="width: ' +
              barValue +
              '%;"></div>' +
              '<div class="mds-metric-bar-overlay" style="width: ' +
              (100 - barValue) +
              '%;"></div>' +
              '</div>' +
              '</div>'
            );
          },
          renderScheduleEventContent: function (args) {
            return (
              '<div>' +
              args.title +
              '</div>' +
              '<div style="font-size: 11px;">' +
              'Payload: ' +
              (args.original.payload ? args.original.payload + ' T' : 'empty') +
              '</div>'
            );
          },
          onPageLoading: function (args, inst) {
            weekStart = args.firstDay;
            weekEnd = args.lastDay;
            refreshData(inst);
          },
          onPageLoaded: function (args, inst) {
            refreshData(inst);
            if (initialSort) {
              sortResources();
            }
          },
          onEventCreated: function (args, inst) {
            args.event.payload = Math.floor(Math.random() * (17 - 5 + 1)) + 5;
            args.event.overlap = false;
            refreshData(inst);
            delayedToastSort(args.event.resource, args.event);
          },
          onEventDelete: function (args, inst) {
            refreshData(inst);
            delayedToastSort(args.event.resource, args.event);
          },
          onEventUpdate: function (args, inst) {
            if (
              new Date(args.oldEvent.start).getTime() !== new Date(args.event.start).getTime() &&
              new Date(args.oldEvent.end).getTime() !== new Date(args.event.end).getTime() &&
              args.oldEvent.resource === args.resource &&
              new Date(args.oldEvent.start) >= weekStart &&
              new Date(args.oldEvent.end) <= weekEnd &&
              new Date(args.event.start) >= weekStart &&
              new Date(args.event.end) <= weekEnd
            ) {
              return;
            }
            refreshData(inst);
            delayedToastSort(args.event.resource, args.event);
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-sort-button').on('click', function () {
        popup.setOptions({ anchor: this });
        initialSortColumn = sortColumn;
        initialSortDirection = sortDirection;
        popup.open();
      });

      $('.mbsc-popup-sort-metric').on('change', function () {
        selectedMetric = $(this).val();
        selectedMetricDesc = $(this).attr('data-label');
        sortColumn = selectedMetric;
      });

      $('.mbsc-popup-sort-direction').on('change', function () {
        sortDirection = $('.mbsc-popup-sort-direction:checked').val();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timeline-popup-sort" class="mds-timeline-popup-sort"></div>
<div style="display:none">
  <div id="demo-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Metric to calculate and sort by</div>
      <div mbsc-radio-group>
        <label>
          <input mbsc-radio data-label="Standby Time" data-description="Time the truck is driven without cargo." class="mbsc-popup-sort-metric" value="standby" name="sort-metric" type="radio" checked/>
        </label>
        <label>
          <input mbsc-radio data-label="Payload Efficiency" data-description="Truck capacity divided by the average cargo on tours." class="mbsc-popup-sort-metric" value="payload" name="sort-metric" type="radio"/>
        </label>
        <label>
          <input mbsc-radio data-label="Deadhead Time" data-description="Time when the truck is not on a tour." class="mbsc-popup-sort-metric" value="deadhead" name="sort-metric" type="radio"/>
        </label>
      </div>
    </div>
   <div class="mbsc-form-group">
  <div class="mbsc-form-group-title">Sort direction</div>
  <label>
      Ascending
      <input mbsc-segmented type="radio" class="mbsc-popup-sort-direction" value="asc" name="sort-direction" checked>
  </label>
  <label>
      Descending
      <input mbsc-segmented type="radio" class="mbsc-popup-sort-direction" value="desc" name="sort-direction">
  </label>
</div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* resource highlight */

.mds-resource-highlight {
  background-color: rgba(128, 128, 128, 0.4);
  transition: background-color 0.5s ease;
}

/* progress bar */

.mds-popup-sort-snackbar .mbsc-toast-background::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 0;  
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: width 3s linear; 
}

.mds-popup-sort-snackbar .mbsc-snackbar-message::after {
  content: "Sorting in 1 ."; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: changeMessage 3s steps(3) forwards; 
}

.mds-popup-sort-snackbar .mbsc-snackbar-message {
  position: relative;
}

@keyframes countdown {
  0% {
    width: 0%;  
  }
  100% {
    width: 100%;
  }
}

@keyframes changeMessage {
  0% {
    content: "Sorting in 3 ...";
  }
  43% {
    content: "Sorting in 2 ..";
  }
  76% {
    content: "Sorting in 1 .";
  }
}

.mds-popup-sort-snackbar .mbsc-toast-background.start-progress::before {
  animation: countdown 3s linear forwards; 
}

.mds-popup-sort-snackbar .mbsc-snackbar-cont {
  border-radius: 4px;
}

/* metric bar */

.mds-metric-bar-container {
  position: relative;
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 10px;
  width: 150px; 
  overflow: hidden;
}

.mds-metric-bar-animation {
  height: 100%;
  animation: fillBar 1s ease-in-out forwards;
}

.mds-metric-bar-no-animation {
  height: 100%;
  animation: fillBar 0s ease-in-out forwards;
}

.mds-metric-bar-overlay {
  content: '';
  position: absolute; 
  top: 0;
  right: 0;
  height: 100%;
  background-color: #f0f0f0; 
}

@keyframes fillBar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.mds-resource-green-bar {
  background-color: #4caf50; 
}

.mds-resource-yellow-bar {
  background-color: #ffeb3b; 
}

.mds-resource-red-bar {
  background-color: #f44336; 
}

/* Overrides */

.mds-timeline-popup-sort .mbsc-timeline-events {
  top: 20px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-header,
.mds-timeline-popup-sort .mbsc-timeline-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-resource-footer,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-header,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-resource-title,
.mds-timeline-popup-sort .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-timeline-popup-sort .mbsc-timeline-row {
  min-height: 110px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-col {
  width: 170px;
}

.mds-timeline-popup-sort .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-popup-sort-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 5px 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 20px;
}

.mds-popup-sort-resource-cell-name {
  padding: 2px 5px;
  width: 170px;
}

.mds-resource-attribute {
  font-size: 12px;
  font-weight: 400;
}

/*<hidden>*/
.demo-timeline-popup-sort {
  height: 100%;
}
/*</hidden>*/
  `,
};
