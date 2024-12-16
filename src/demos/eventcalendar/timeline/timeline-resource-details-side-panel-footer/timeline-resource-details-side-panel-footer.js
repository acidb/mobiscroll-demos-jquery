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
      var formatDate = mobiscroll.formatDate;
      var myEvents = [];
      var sortColumn;
      var sortDirection;
      var sortDay;
      var totalRevenue;

      var myResources = [
        { id: 1, name: 'Horizon', seats: 1200, color: '#4a4a4a', price: 1000 },
        { id: 2, name: 'Apex Hall', seats: 90, color: '#fdf500', price: 600 },
        { id: 3, name: 'Jade Room', seats: 700, color: '#00aaff', price: 900 },
        { id: 4, name: 'Dome Arena', seats: 850, color: '#239a21', price: 750 },
        { id: 5, name: 'Forum Plaza', seats: 900, color: '#8f1ed6', price: 700 },
        { id: 6, name: 'Gallery', seats: 300, color: '#0077b6', price: 650 },
        { id: 7, name: 'Icon Hall', seats: 450, color: '#e63946', price: 850 },
        { id: 8, name: 'Broadway', seats: 250, color: '#ff0101', price: 800 },
        { id: 9, name: 'Central Hub', seats: 400, color: '#01adff', price: 1100 },
        { id: 10, name: 'Empire Hall', seats: 550, color: '#ff4600', price: 950 },
      ];

      function getUTCDateOnly(d) {
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      }

      function getDayDiff(d1, d2) {
        return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / (60 * 60 * 24 * 1000)) + 1;
      }

      function getRevenue(resource) {
        var days = 0;
        for (var i = 0; i < myEvents.length; ++i) {
          var event = myEvents[i];
          if (event.resource === resource.id) {
            days += getDayDiff(new Date(event.start), new Date(event.end));
          }
        }
        return days * resource.price;
      }

      function getSortArrow(column, day) {
        if (sortColumn === column && day === sortDay) {
          return sortDirection === 'asc' ? 'asc' : sortDirection === 'desc' ? 'desc' : 'def';
        }
        return 'def';
      }

      function getBusyHours(resource, timestamp) {
        var startOfDay = new Date(timestamp);
        var endOfDay = new Date(startOfDay.getFullYear(), startOfDay.getMonth(), startOfDay.getDate() + 1);
        return myEvents.reduce(function (totalHours, event) {
          if (event.resource === resource.id) {
            var eventStart = Math.max(+startOfDay, +new Date(event.start));
            var eventEnd = Math.min(+endOfDay, +new Date(event.end));
            return totalHours + (eventStart < eventEnd ? (eventEnd - eventStart) / (60 * 60 * 1000) : 0);
          }
          return totalHours;
        }, 0);
      }

      function refreshData(inst) {
        // Events for the current view
        myEvents = inst.getEvents();

        myResources.forEach(function (resource) {
          resource.revenue = getRevenue(resource);
        });

        totalRevenue = myResources.reduce(function (total, resource) {
          return total + resource.revenue;
        }, 0);
      }

      function sortResources(column, day) {
        if (column) {
          if (sortColumn === column && day === sortDay) {
            sortDirection = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'def' : 'asc';
          } else {
            sortColumn = column;
            sortDirection = 'asc';
          }
          sortDay = day;
        }

        if (sortDay) {
          // Precalculate busy hours for the clicked day
          myResources.forEach(function (resource) {
            resource.busyHours = getBusyHours(resource, sortDay);
          });
        }

        myResources.sort(function (a, b) {
          if (sortDirection === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          }
          if (sortDirection === 'desc') {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return a.id - b.id;
        });

        calendar.setOptions({ resources: myResources.slice() });
      }

      var calendar = $('#demo-resource-details')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToResize: true,
          dragToMove: true,
          dragToCreate: true,
          view: {
            timeline: {
              type: 'month',
            },
          },
          resources: myResources,
          renderResourceHeader: function () {
            return (
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-name mds-resource-sort-' +
              getSortArrow('name') +
              '" data-sort="name">' +
              'Room' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-seats mds-resource-sort-' +
              getSortArrow('seats') +
              '" data-sort="seats">' +
              'Capacity' +
              '</div>' +
              '<div class="mds-resource-sort-header mds-resource-cell mds-resource-cell-price mds-resource-sort-' +
              getSortArrow('price') +
              '" data-sort="price">' +
              'Price/day' +
              '</div>'
            );
          },
          renderResource: function (resource) {
            return (
              '<div class="mds-resource-cell mds-resource-cell-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-resource-cell mds-resource-cell-seats">' +
              resource.seats +
              ' seats</div>' +
              '<div class="mds-resource-cell mds-resource-cell-price">$' +
              resource.price +
              '</div>'
            );
          },
          renderSidebarHeader: function () {
            return (
              '<div class="mds-resource-sort-header mds-resource-sort-' + getSortArrow('revenue') + '" data-sort="revenue">Revenue</div>'
            );
          },
          renderSidebar: function (resource) {
            return '<div class="mds-resource-cell">$' + resource.revenue + '</div>';
          },
          renderResourceFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>';
          },
          renderDay: function (data) {
            var day = data.date;
            var timestamp = +day;
            return (
              '<div class="mds-resource-sort-header mds-resource-sort-' +
              getSortArrow('busyHours', timestamp) +
              '" data-sort="busyHours" data-day="' +
              timestamp +
              '">' +
              formatDate('D DDD', day) +
              '</div>'
            );
          },
          renderDayFooter: function (data) {
            var events = data.events;
            var occuppancy = 0;
            if (events) {
              var resourceIds = [];
              var nr = 0;
              for (var i = 0; i < events.length; ++i) {
                var event = events[i];
                if (resourceIds.indexOf(event.resource) < 0) {
                  nr++;
                  resourceIds.push(event.resource);
                }
              }
              occuppancy = ((nr * 100) / myResources.length).toFixed(0);
            }
            return '<div class="mds-resource-details-footer mds-resource-details-footer-day">' + occuppancy + '%</div>';
          },
          renderSidebarFooter: function () {
            return '<div class="mds-resource-details-footer mds-resource-details-total">$' + totalRevenue + '</div>';
          },
          onPageLoading: function (args, inst) {
            refreshData(inst);
          },
          onEventCreated: function (args, inst) {
            refreshData(inst);
            sortResources();
          },
          onEventDeleted: function (args, inst) {
            refreshData(inst);
            sortResources();
          },
          onEventUpdated: function (args, inst) {
            refreshData(inst);
            sortResources();
          },
        })
        .mobiscroll('getInst');

      $('#demo-resource-details').on('click', '.mds-resource-sort-header', function () {
        var sortColumn = $(this).data('sort');
        var selectedDay = $(this).data('day');
        sortResources(sortColumn, selectedDay);
      });

      $.getJSON(
        'https://trial.mobiscroll.com/multiday-events/?callback=?',
        function (events) {
          calendar.setEvents(events);
          refreshData(calendar);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-details" class="mds-resource-details"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
/* Overrides */

.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header,
.mds-resource-details .mbsc-timeline-sidebar-resource-title,
.mds-resource-details .mbsc-timeline-sidebar-footer {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-col {
  width: 335px;
}

.mds-resource-details .mbsc-timeline-sidebar-col {
  width: 98px;
}

.mds-resource-details .mbsc-timeline-day {
  width: 144px;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

/* Resource grid */

.mds-resource-cell {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
  line-height: 50px;
}

.mds-resource-cell-name {
  width: 120px;
}

.mds-resource-cell-seats,
.mds-resource-cell-price {
  width: 107px;
}

.mds-resource-cell-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mds-resource-details.mbsc-ios-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-material-dark .mds-resource-cell-seats,
.mds-resource-details.mbsc-windows-dark .mds-resource-cell-seats {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

/* Sort arrows */

.mds-resource-sort-header {
  cursor: pointer;
  position: relative;
  line-height: 25px;
  padding: 0 5px;
  font-size: 14px;
}

.mds-resource-sort-header::after {
  position: absolute;
  opacity: 0.5;
  right: 8px;
}

.mds-resource-sort-header:hover::after {
  opacity: 1;
}

.mds-resource-sort-asc::after {
  content: '↑'; 
}

.mds-resource-sort-desc::after {
  content: '↓';
}

.mds-resource-sort-def::after {
  content: '‹›';
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

/* Footer */

.mds-resource-details-footer {
  line-height: 50px;
  background: rgba(150, 150, 150, 0.1);
}

.mds-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 0 5px;
}

.mds-resource-details-occuppancy {
  font-size: 15px;
  text-align: end;
  text-align: right;
  padding: 0 15px;
}

.mds-resource-details-total {
  font-size: 18px;
  padding: 0 5px;
  color: #8c0000;
}

/*<hidden>*/

.demo-timeline-resource-details {
  height: 100%;
}

/*</hidden>*/
  `,
};
