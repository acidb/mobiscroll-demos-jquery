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
      var myEvents = [];

      var myResources = [
        { id: 1, name: 'Barry', color: '#328e39', img: 'https://img.mobiscroll.com/demos/m1.png' },
        { id: 2, name: 'Hortense', color: '#00aabb', img: 'https://img.mobiscroll.com/demos/f1.png' },
        { id: 3, name: 'Carl', color: '#ea72c0', img: 'https://img.mobiscroll.com/demos/m2.png' },
      ];

      var selectedResources = { 1: true };

      var calendar = $('#demo-header-filter')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            agenda: { type: 'month' },
          },
          resources: myResources,
          renderHeader: function () {
            var header = '<div mbsc-calendar-nav class="mds-header-filter-nav"></div>' + '<div class="mds-header-filter mbsc-flex-1-0">';

            myResources.forEach(function (res) {
              header +=
                '<label class="mds-header-filter-' +
                res.id +
                '">' +
                '<img class="mds-header-filter-img" src="' +
                res.img +
                '"/>' +
                '<span class="mds-header-filter-name">' +
                res.name +
                '</span>' +
                '<input type="checkbox" mbsc-segmented name="resource" class="mds-header-filter-input" value="' +
                res.id +
                '" ' +
                (res.id === 1 ? 'checked' : '') +
                '>' +
                '</label>';
            });

            header +=
              '</div>' +
              '<button mbsc-calendar-prev class="mds-header-filter-prev"></button>' +
              '<button mbsc-calendar-today class="mds-header-filter-today"></button>' +
              '<button mbsc-calendar-next class="mds-header-filter-next"></button>';
            return header;
          },
        })
        .mobiscroll('getInst');

      $.getJSON('https://trial.mobiscroll.com/filter-resource-events/?callback=?', function (events) {
        myEvents = events;
        var filteredEvents = myEvents.filter(function (e) {
          return selectedResources[e.resource];
        });
        calendar.setEvents(filteredEvents);
      });

      $('.mds-header-filter-input').on('change', function (ev) {
        var value = +ev.target.value;
        var checked = ev.target.checked;

        selectedResources[value] = checked;

        var resource = myResources.find(function (r) {
          return r.id === value;
        });
        var filteredEvents = myEvents.filter(function (e) {
          return selectedResources[e.resource];
        });

        calendar.setEvents(filteredEvents);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: (checked ? 'Showing ' : 'Hiding ') + (resource ? resource.name : '') + ' events',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-header-filter"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-header-filter-nav {
  width: 180px;
}

.mds-header-filter-img {
  width: 25px;
}

.mds-header-filter-name {
  margin-left: 10px;
}

.mds-header-filter .mbsc-segmented {
  max-width: 400px;
  margin: 0 auto;
}

.mds-header-filter .mbsc-segmented-button.mbsc-selected {
  color: #fff;
}

.mds-header-filter-1 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-1 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-1 .mbsc-segmented-selectbox-inner {
  background: #328e39;
}

.mds-header-filter-2 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-2 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-2 .mbsc-segmented-selectbox-inner {
  background: #00aabb;
}

.mds-header-filter-3 .mbsc-button.mbsc-selected.mbsc-material,
.mds-header-filter-3 .mbsc-button.mbsc-selected.mbsc-windows,
.mds-header-filter-3 .mbsc-segmented-selectbox-inner {
  background: #ea72c0;
}

.mbsc-material .mds-header-filter-prev {
  order: 1;
}

.mbsc-material .mds-header-filter-next {
  order: 2;
}

.mbsc-material .mds-header-filter {
  order: 3;
}

.mbsc-material .mds-header-filter-today {
  order: 4;
}
  `,
};
