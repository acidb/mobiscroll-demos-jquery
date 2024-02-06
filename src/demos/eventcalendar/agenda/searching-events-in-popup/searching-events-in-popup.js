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
      var timer;
      var list = $('#demo-search-list')
        .mobiscroll()
        .eventcalendar({
          view: {
            agenda: {
              type: 'year',
              size: 5,
            },
          },
          showControls: false,
          onEventClick: function (args) {
            calendar.navigate(args.event.start);
            calendar.setSelectedEvents([args.event]);
            popup.close();
          },
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-search-events')
        .mobiscroll()
        .eventcalendar({
          selectMultipleEvents: true,
          view: {
            agenda: {
              type: 'month',
            },
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="md-seach-header-bar mbsc-flex-1-0">' +
              '<label><input id="md-search-demo-input" mbsc-input data-start-icon="material-search" data-input-style="box" placeholder="Search events"></input></label>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onPageLoading: function (args) {
            var start = mobiscroll.formatDate('YYYY-MM-DD', args.viewStart);
            var end = mobiscroll.formatDate('YYYY-MM-DD', args.viewEnd);

            $.getJSON(
              'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end + '&callback=?',
              function (data) {
                calendar.setEvents(data);
              },
              'jsonp',
            );
          },
        })
        .mobiscroll('getInst');

      var $searchInput = $('#md-search-demo-input');

      var popup = $('#demo-search-popup')
        .mobiscroll()
        .popup({
          display: 'anchored',
          showArrow: false,
          showOverlay: false,
          scrollLock: false,
          contentPadding: false,
          focusOnOpen: false,
          focusOnClose: false,
          focusElm: $searchInput[0],
          anchor: $searchInput[0],
        })
        .mobiscroll('getInst');

      $searchInput.on('input', function (ev) {
        var text = ev.target.value;
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (text.length > 0) {
            $.getJSON(
              'https://trial.mobiscroll.com/searchevents/?text=' + text + '&callback=?',
              function (data) {
                list.setEvents(data);
                popup.open();
              },
              'jsonp',
            );
          } else {
            popup.close();
          }
        }, 200);
      });

      $searchInput.on('focus', function (ev) {
        if (ev.target.value.length > 0) {
          popup.open();
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-search-events" class="md-search-events"></div>
<div id="demo-search-popup" class="md-search-popup">
    <div>
        <div id="demo-search-list" class="mbsc-popover-list"></div>
    </div>
</div>

  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-seach-header-bar .mbsc-textfield-wrapper.mbsc-form-control-wrapper {
    width: 400px;
    margin: 12px auto;
}

.md-search-popup .mbsc-popover-list {
    width: 400px;
}

.md-search-popup .mbsc-event-list {
    margin-top: -1px;
    margin-bottom: -1px;
}

.md-search-events .mbsc-ios-dark.mbsc-textfield-box {
    background: #313131;
}
  `,
};
