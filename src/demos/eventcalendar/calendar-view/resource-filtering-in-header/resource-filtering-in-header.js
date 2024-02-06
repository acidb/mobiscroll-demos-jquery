import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var selected = [1];
      var events = [];

      var myResources = [
        {
          id: 1,
          name: 'Barry',
          color: '#328e39',
          img: 'https://img.mobiscroll.com/demos/m1.png',
          checked: true,
        },
        {
          id: 2,
          name: 'Hortense',
          color: '#00aabb',
          img: 'https://img.mobiscroll.com/demos/f1.png',
          checked: false,
        },
        {
          id: 3,
          name: 'Carl',
          color: '#ea72c0',
          img: 'https://img.mobiscroll.com/demos/m2.png',
          checked: false,
        },
      ];

      var calendar = $('#demo-header-functionality')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          view: {
            calendar: {
              labels: true,
            },
          },
          resources: myResources,
          renderHeader: function () {
            var header = '<div mbsc-calendar-nav class="md-header-filter-nav"></div>' + '<div class="md-header-filter-controls">';

            for (var i = 0; i < myResources.length; ++i) {
              var res = myResources[i];
              header +=
                '<label>' +
                '<img class="md-header-filter-img" src="' +
                res.img +
                '"/>' +
                '<span class="md-header-filter-name md-header-filter-name-' +
                res.id +
                '">' +
                res.name +
                '</span>' +
                '<input type="checkbox" mbsc-segmented name="resource" class="md-header-filter" value=' +
                res.id +
                ' ' +
                (res.checked ? 'checked' : '') +
                '>' +
                '</label>';
            }
            header +=
              '</div>' +
              '<div mbsc-calendar-prev class="md-header-filter-prev"></div>' +
              '<div mbsc-calendar-today class="md-header-filter-today"></div>' +
              '<div mbsc-calendar-next class="md-header-filter-next"></div>';
            return header;
          },
        })
        .mobiscroll('getInst');

      $.getJSON(
        'https://trial.mobiscroll.com/filter-resource-events/?callback=?',
        function (arr) {
          filterEvents(arr, selected);
          events = arr;
        },
        'jsonp',
      );

      function filterEvents(events, selected) {
        var evs = [];
        for (var i = 0; i < events.length; ++i) {
          var item = events[i];
          if (selected.indexOf(item.resource) > -1) {
            evs.push(item);
          }
        }
        calendar.setEvents(evs);
      }

      $('.md-header-filter').change(function (ev) {
        var value = ev.target.value;
        var checked = $(ev.target).is(':checked');
        var selected = [];

        $('.md-header-filter:checked').each(function () {
          selected.push(parseInt($(this).val()));
        });

        filterEvents(events, selected);

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: (checked ? 'Showing ' : 'Hiding ') + $('.md-header-filter-name-' + value).text() + ' events',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-1400">
    <!--/hidden-->
    <div id="demo-header-functionality" class="md-custom-header-filtering"></div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-header-filter-controls {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
}

.md-custom-header-filtering .mbsc-segmented {
    max-width: 400px;
    margin: 0 auto;
    flex: 1 0 auto;
}

.md-header-filter-img {
    width: 25px;
}

.md-header-filter-name {
    margin-left: 10px;
}

.md-header-filter-nav {
    width: 200px;
}

.md-header-filter-controls .mbsc-segmented-button.mbsc-selected {
    color: #fff;
}

.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
    background: #328e39;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
    background: #00aabb;
}

.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.md-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
    background: #ea72c0;
}
  `,
};
