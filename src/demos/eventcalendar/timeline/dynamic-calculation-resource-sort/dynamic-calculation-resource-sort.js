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
      var metricBarAnimation = true;
      var sortColumn = 'standby';
      var sortColumnLabel = 'Standby Time';
      var sortDirection = 'asc';
      var sortRequests = 0;
      var tempSortColumn;
      var tempSortColumnLabel;
      var tempSortDirection;
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
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #014 - Denver to Boston',
          resource: 2,
          color: '#33FFA6',
          payload: 18,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
          title: 'Tour #015 - Orlando to Austin',
          resource: 3,
          color: '#9933FF',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d+1)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #016 - Detroit to Baltimore',
          resource: 4,
          color: '#33A6FF',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #017 - Las Vegas to Portland',
          resource: 5,
          color: '#FF5733',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #018 - Atlanta to Kansas City',
          resource: 6,
          color: '#33FF99',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d-4,11)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #018 - Dallas to Atlanta',
          resource: 6,
          color: '#33FF99',
          payload: 14,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
          title: 'Tour #019 - Charlotte to Indianapolis',
          resource: 7,
          color: '#FF5733',
          payload: 22,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #005 - Dallas to San Francisco',
          resource: 7,
          color: '#FF5733',
          payload: 18,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #001 - New York to Los Angeles',
          resource: 7,
          color: '#FF5733',
          payload: 20,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #009 - San Diego to Dallas',
          resource: 7,
          color: '#FF5733',
          payload: 16,
        },
        {
          start: 'dyndatetime(y,m,d+4)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #006 - Los Angeles to Chicago',
          resource: 8,
          color: '#FF33A6',
          payload: 10,
        },
        {
          start: 'dyndatetime(y,m,d-2)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #010 - San Francisco to Los Angeles',
          resource: 8,
          color: '#FF33A6',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #007 - Houston to New York',
          resource: 9,
          color: '#33FF57',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #003 - Philadelphia to Phoenix',
          resource: 9,
          color: '#33FF57',
          payload: 0,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d-1)',
          title: 'Tour #028 - Trenton to Philadelphia',
          resource: 9,
          color: '#33FF57',
          payload: 11,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #004 - San Antonio to San Diego',
          resource: 10,
          color: '#3357FF',
          payload: 15,
        },

        {
          start: 'dyndatetime(y,m,d+3)',
          end: 'dyndatetime(y,m,d+6)',
          title: 'Tour #022 - Cleveland to Cincinnati',
          resource: 10,
          color: '#3357FF',
          payload: 17,
        },
        {
          start: 'dyndatetime(y,m,d-4)',
          end: 'dyndatetime(y,m,d+1)',
          title: 'Tour #023 - Boston to Philadelphia',
          resource: 11,
          color: '#FF9933',
          payload: 19,
        },
        {
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #024 - Las Vegas to San Diego',
          resource: 12,
          color: '#33FF57',
          payload: 28,
        },
        {
          start: 'dyndatetime(y,m,d-3)',
          end: 'dyndatetime(y,m,d)',
          title: 'Tour #025 - Miami to Charlotte',
          resource: 13,
          color: '#9933FF',
          payload: 26,
        },
        {
          start: 'dyndatetime(y,m,d+2)',
          end: 'dyndatetime(y,m,d+5)',
          title: 'Tour #026 - Seattle to Portland',
          resource: 14,
          color: '#33A6FF',
          payload: 12,
        },
        {
          start: 'dyndatetime(y,m,d-1)',
          end: 'dyndatetime(y,m,d+2)',
          title: 'Tour #027 - Atlanta to Orlando',
          resource: 15,
          color: '#FF5733',
          payload: 17,
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

      function calcMetrics() {
        var loadedEvents = calendar.getEvents();

        myResources.forEach(function (resource) {
          var standby = 168;
          var deadhead = 0;
          var payload = 0;
          var numberOfTours = 0;

          var resourceEvents = loadedEvents.filter(function (event) {
            return event.resource === resource.id;
          });

          resourceEvents.forEach(function (event) {
            var eventStart = new Date(event.start);
            var eventEnd = new Date(event.end);
            var effectiveStart = eventStart < weekStart ? weekStart : eventStart;
            var effectiveEnd = eventEnd > weekEnd ? weekEnd : eventEnd;

            if (effectiveStart < effectiveEnd) {
              standby -= (effectiveEnd - effectiveStart) / (1000 * 60 * 60);
            }

            if (effectiveStart < effectiveEnd && (!event.payload || event.payload <= 0)) {
              deadhead += (effectiveEnd - effectiveStart) / (1000 * 60 * 60);
            }

            if (eventEnd > weekStart && eventStart < weekEnd) {
              numberOfTours++;
              payload += event.payload || 0;
            }
          });

          resource.standby = standby;
          resource.deadhead = deadhead;
          resource.payload = numberOfTours && resource.capacity ? Math.round((payload / numberOfTours / resource.capacity) * 100) : 0;
        });
      }

      function sortResources() {
        metricBarAnimation = true;
        myResources.sort(function (resource1, resource2) {
          var col = sortColumn;
          if (resource1[col] === resource2[col]) {
            col = 'name';
          }
          return sortDirection === 'asc' ? (resource1[col] > resource2[col] ? 1 : -1) : resource1[col] < resource2[col] ? 1 : -1;
        });
        calendar.setOptions({ resources: myResources.slice() });
        setTimeout(function () {
          metricBarAnimation = false;
        }, 100);
      }

      function delayedSort(event) {
        sortRequests++;

        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          animation: 'pop',
          button: { text: 'Sort now' },
          cssClass: 'mds-popup-sort-snackbar',
          display: 'center',
          duration: 3000,
          onClose: function () {
            sortRequests--;
            if (sortRequests === 0) {
              var eventStart = new Date(event.start);
              var navStart = eventStart < weekStart ? weekStart : eventStart;
              var resource = myResources.find(function (resource) {
                return resource.id === event.resource;
              });
              sortResources();
              calendar.navigateToEvent({ start: navStart, resource: event.resource });
              resource.cssClass = 'mbsc-timeline-parent-hover';
              setTimeout(function () {
                resource.cssClass = '';
                calendar.setOptions({ resources: myResources.slice() });
              }, 1000);
            }
          },
        });
      }

      var popup = $('#demo-filtering-popup')
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                sortColumn = tempSortColumn;
                sortColumnLabel = tempSortColumnLabel;
                sortDirection = tempSortDirection;

                sortResources();

                popup.close();

                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Resources sorted',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
          onClose: function () {
            $('.mds-popup-sort-metric[value="' + sortColumn + '"]').mobiscroll('getInst').checked = true;
            $('.mds-popup-sort-direction[value="' + sortDirection + '"]').mobiscroll('getInst').checked = true;
          },
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
          eventOverlap: false,
          view: {
            timeline: {
              type: 'week',
              resolutionHorizontal: 'day',
            },
          },
          resources: myResources,
          renderHeader: function () {
            return (
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-next></button>' +
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-1 mbsc-justify-content-end">' +
              '<button id="demo-popup-sort-button" data-start-icon="bars" data-variant="flat" mbsc-button>Sort Trucks</button>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return '<div class="mds-popup-sort-resource-header">' + 'Trucks' + '</div>';
          },
          renderResource: function (resource) {
            var metricValue = resource[sortColumn];
            var barValue = sortColumn === 'payload' ? metricValue : (metricValue / 168) * 100;
            var barColor = barValue <= 33 ? 'green' : barValue <= 66 ? 'yellow' : 'red';

            return (
              '<div class="mds-popup-sort-resource-cell">' +
              '<strong>' +
              resource.name +
              '</strong>' +
              '<div class="mds-popup-sort-resource-attr">Model: ' +
              resource.model +
              '</div>' +
              '<div class="mds-popup-sort-resource-attr">Capacity: ' +
              resource.capacity +
              'T</div>' +
              '<div class="mds-popup-sort-resource-attr">' +
              sortColumnLabel +
              ': ' +
              metricValue +
              (sortColumn === 'payload' ? '%' : 'h') +
              '</div>' +
              '<div class="mds-popup-sort-bar-track">' +
              '<div class="mds-popup-sort-bar' +
              ' mds-popup-sort-bar-' +
              barColor +
              (metricBarAnimation ? ' mds-popup-sort-bar-animation' : '') +
              '" style="width: ' +
              barValue +
              '%;"></div>' +
              '</div>' +
              '</div>'
            );
          },
          renderScheduleEventContent: function (event) {
            return (
              '<div>' +
              event.title +
              '</div>' +
              '<div class="mds-popup-sort-event-attr">' +
              'Payload: ' +
              (event.original.payload ? event.original.payload + ' T' : 'empty') +
              '</div>'
            );
          },
          onPageLoading: function (args) {
            weekStart = args.firstDay;
            weekEnd = args.lastDay;
            setTimeout(function () {
              calcMetrics();
              sortResources();
            });
          },
          onEventCreated: function (args) {
            args.event.payload = Math.floor(Math.random() * (17 - 5 + 1)) + 5;
            calcMetrics();
            delayedSort(args.event);
          },
          onEventDeleted: function (args) {
            calcMetrics();
            delayedSort(args.event);
          },
          onEventUpdated: function (args) {
            var oldEventStart = new Date(args.oldEvent.start);
            var oldEventEnd = new Date(args.oldEvent.end);
            if (
              +oldEventStart !== +args.event.start &&
              +oldEventEnd !== +args.event.end &&
              oldEventStart >= weekStart &&
              oldEventEnd <= weekEnd &&
              args.event.start >= weekStart &&
              args.event.end <= weekEnd &&
              args.oldEvent.resource === args.event.resource
            ) {
              return;
            }
            calcMetrics();
            delayedSort(args.event);
          },
        })
        .mobiscroll('getInst');

      $('#demo-popup-sort-button').on('click', function () {
        tempSortColumn = sortColumn;
        tempSortColumnLabel = sortColumnLabel;
        tempSortDirection = sortDirection;
        popup.setOptions({ anchor: this });
        popup.open();
      });

      $('.mds-popup-sort-metric').on('change', function () {
        tempSortColumn = $(this).val();
        tempSortColumnLabel = $(this).attr('data-label');
      });

      $('.mds-popup-sort-direction').on('change', function () {
        tempSortDirection = $(this).val();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-timeline-popup-sort" class="mds-popup-sort"></div>
<div style="display:none">
  <div id="demo-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Metric to calculate and sort by</div>
      <div mbsc-radio-group>
        <label>
          <input mbsc-radio data-label="Standby Time" data-description="Time the truck is driven without cargo." class="mds-popup-sort-metric" value="standby" name="popup-sort-metric" type="radio" checked />
        </label>
        <label>
          <input mbsc-radio data-label="Payload Efficiency" data-description="Truck capacity divided by the average cargo on tours." class="mds-popup-sort-metric" value="payload" name="popup-sort-metric" type="radio" />
        </label>
        <label>
          <input mbsc-radio data-label="Deadhead Time" data-description="Time when the truck is not on a tour." class="mds-popup-sort-metric" value="deadhead" name="popup-sort-metric" type="radio" />
        </label>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Sort direction</div>
      <div mbsc-segmented-group>
        <label>
          Ascending
          <input mbsc-segmented type="radio" class="mds-popup-sort-direction" value="asc" name="popup-sort-direction" checked />
        </label>
        <label>
          Descending
          <input mbsc-segmented type="radio" class="mds-popup-sort-direction" value="desc" name="popup-sort-direction" />
        </label>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Overrides */

.mds-popup-sort .mbsc-timeline-resource-header,
.mds-popup-sort .mbsc-timeline-resource-title {
  padding: 0;
}

.mds-popup-sort .mbsc-timeline-resource-col {
  width: 170px;
}

.mds-popup-sort .mbsc-timeline-row {
  height: 110px;
}

.mds-popup-sort .mbsc-timeline-events {
  top: 20px;
}

/* Resource grid */

.mds-popup-sort-resource-header {
  padding: 0 5px;
  line-height: 25px;
}

.mds-popup-sort-resource-cell {
  padding: 5px;
  line-height: 20px;
}

.mds-popup-sort-resource-attr {
  font-size: 12px;
  font-weight: 400;
}

/* Event template */

.mds-popup-sort-event-attr {
  font-size: 11px;
}

/* Metric bar */

.mds-popup-sort-bar-track {
  background-color: #f0f0f0;
  border-radius: 5px;
  height: 10px;
  width: 150px;
  margin-top: 5px;
  overflow: hidden;
}

.mds-popup-sort-bar {
  height: 100%;
}

.mds-popup-sort-bar-green {
  background-color: #4caf50;
}

.mds-popup-sort-bar-yellow {
  background-color: #ffeb3b;
}

.mds-popup-sort-bar-red {
  background-color: #f44336;
}

.mds-popup-sort-bar-animation {
  animation: mds-popup-sort-fill-bar 1s ease-in-out forwards;
}

/* Snackbar countdown */

.mds-popup-sort-snackbar .mbsc-snackbar-cont {
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.mds-popup-sort-snackbar .mbsc-snackbar-cont::before {
  content: '';
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: mds-popup-sort-fill-bar 3s linear forwards;
}

.mds-popup-sort-snackbar .mbsc-snackbar-message::after {
  content: 'Sorting in 1 .';
  position: relative;
  z-index: 1;
  animation: mds-popup-sort-message 3s steps(3) forwards;
}

/* Animations */

@keyframes mds-popup-sort-fill-bar {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes mds-popup-sort-message {
  0% {
    content: 'Sorting in 3 ...';
  }
  43% {
    content: 'Sorting in 2 ..';
  }
  76% {
    content: 'Sorting in 1 .';
  }
}

/*<hidden>*/
.demo-timeline-popup-sort {
  height: 100%;
}
/*</hidden>*/
  `,
};
