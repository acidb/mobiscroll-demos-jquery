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
      var timer;
      var $searchList = $('#demo-search-sidebar-list');

      var list = $searchList
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
          },
        })
        .mobiscroll('getInst');

      var calendar = $('#demo-search-sidebar-events')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: false,
          dragToCreate: false,
          dragToMove: false,
          dragToResize: false,
          selectMultipleEvents: true,
          view: {
            calendar: {
              labels: true,
            },
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

      $searchList.hide();

      $('#md-search-sidebar-demo-input').on('input', function (ev) {
        var text = ev.target.value;
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (text.length > 0) {
            $.getJSON(
              'https://trial.mobiscroll.com/searchevents/?text=' + text + '&callback=?',
              function (data) {
                list.setEvents(data);
                $searchList.show();
              },
              'jsonp',
            );
          } else {
            $searchList.hide();
          }
        }, 200);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div mbsc-page>
    <!--/hidden-->
    <div class="md-search-events-sidebar mbsc-flex">
        <div class="md-search-events-cont mbsc-flex-col mbsc-flex-none">
            <label>
                <input id="md-search-sidebar-demo-input" mbsc-input data-start-icon="material-search" data-input-style="outline" placeholder="Search events"></input>
            </label>
            <div id="demo-search-sidebar-list"></div>
        </div>
        <div class="md-search-events-calendar mbsc-flex-1-1">
            <div id="demo-search-sidebar-events"></div>
        </div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-search-events-cont {
    width: 350px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
    margin-top: 8px;
    margin-bottom: 9px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-material {
    margin-top: 15px;
    margin-bottom: 15px;
}

.md-search-events-cont .mbsc-textfield-wrapper.mbsc-windows {
    margin-top: 28px;
    margin-bottom: 29px;
}

@media (min-width:1135px) {
    .md-search-events-cont .mbsc-textfield-wrapper.mbsc-ios {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.md-search-events-calendar {
    border-left: 1px solid #ccc;
}

.demo-searching-events-in-sidebar,
.md-search-events-sidebar,
.md-search-events-calendar {
    height: 100%;
}
  `,
};
