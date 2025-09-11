import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme,
    });

    $(function () {
      var $tooltip = $('#demo-resource-info-popup');
      var $resourceAvatar = $('#demo-resource-info-avatar');
      var $resourceName = $('#demo-resource-info-name');
      var $resourceCost = $('#demo-resource-info-cost');
      var $resourceDate = $('#demo-resource-info-date');
      var $resourceTotal = $('#demo-resource-info-total');
      var $payButton = $('#demo-resource-info-pay');

      var $hoveredResourceElm = null;
      var currentResource = null;
      var selectedDate = new Date();
      var openTimer;
      var closeTimer;

      function getTotalHoursForResource(events, resourceId) {
        return events
          .filter(function (e) {
            return e.resource === resourceId;
          })
          .reduce(function (sum, e) {
            var start = new Date(e.start);
            var end = new Date(e.end);
            var hours = (end - start) / (1000 * 60 * 60);
            return sum + hours;
          }, 0);
      }

      function openTooltip(resource, target) {
        clearTimeout(closeTimer);
        clearTimeout(openTimer);

        // Delay opening the tooltip to avoid flickering
        openTimer = setTimeout(function () {
          var events = calendar.getEvents();
          var totalHours = getTotalHoursForResource(events, resource.id);

          currentResource = resource;
          $hoveredResourceElm = target;

          // Update popup content
          $resourceAvatar.attr('src', resource.avatar);
          $resourceName.text(resource.name);
          $resourceCost.text('$' + resource.cost);
          $resourceDate.text(mobiscroll.formatDate('D DDD MMM YYYY', selectedDate));
          $resourceTotal.text(totalHours + 'h, $' + totalHours * resource.cost);
          $(target).addClass('mds-resource-info-hover');

          tooltip.position();
          tooltip.open();

          openTimer = null;
        }, 100);
      }

      // Close the tooltip with a delay to allow hover interactions
      function closeTooltip() {
        clearTimeout(openTimer);
        clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          tooltip.close();
          closeTimer = null;
        }, 200);
      }

      var calendar = $('#demo-display-resource-information-on-hover')
        .mobiscroll()
        .eventcalendar({
          // drag
          view: {
            timeline: {
              type: 'day',
              startTime: '07:00',
              endTime: '22:00',
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d-1,12)',
              end: 'dyndatetime(y,m,d-1,15)',
              title: 'Repoint Brick Facade',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,d-1,9)',
              end: 'dyndatetime(y,m,d-1,12)',
              title: 'Install Custom Wood Trim',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,18)',
              title: 'Repair Steel Stair Treads',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,13)',
              title: 'Pour and Finish Driveway Slab',
              resource: 'res6',
            },
            {
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,16)',
              title: 'Paint Interior Drywall',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Block Wall Construction',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Task 2',
              resource: 'Paver Installation',
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Install ceiling fan',
              resource: 'res2',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Roof Beam Replacement',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Custom Metalworks Creation',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Pipe Welding',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,10,8)',
              end: 'dyndatetime(y,m,11,20)',
              title: 'Leak Detection & Repair',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Faucet & Sink Fitting',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,18)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Drainage System Setup',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Surface Polishing',
              resource: 'res6',
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Structural Steel Inspections',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Metal Structure Assembly',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Heavy Steel Beam Placement',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Exterior House Painting',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Deck Staining & Sealing',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,d+1,12)',
              end: 'dyndatetime(y,m,d+1,15)',
              title: 'Troubleshoot Faulty Breaker',
              resource: 'res2',
            },
            {
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,13)',
              title: 'Frame Interior Partitions',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,d+1,16)',
              end: 'dyndatetime(y,m,d+1,20)',
              title: 'Weld Structural Beam Connections',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,d+1,12)',
              end: 'dyndatetime(y,m,d+1,16)',
              title: 'Apply Smooth Trowel Finish to Basement Floor',
              resource: 'res6',
            },
          ],
          resources: [
            {
              id: 'res1',
              name: 'Adam Miller',
              color: '#F39C12',
              profession: 'Mason',
              avatar: 'https://img.mobiscroll.com/demos/m1.png',
              cost: '15',
            },
            {
              id: 'res2',
              name: 'Emily Carter',
              color: '#76e083',
              profession: 'Electrician',
              avatar: 'https://img.mobiscroll.com/demos/f1.png',
              cost: '20',
            },
            {
              id: 'res3',
              name: 'James Brown',
              color: '#b13f49',
              profession: 'Carpenter',
              avatar: 'https://img.mobiscroll.com/demos/m2.png',
              cost: '18',
            },
            {
              id: 'res4',
              name: 'Daniel Wilson',
              color: '#e25dd2',
              profession: 'Welder',
              avatar: 'https://img.mobiscroll.com/demos/m3.png',
              cost: '22',
            },
            {
              id: 'res5',
              name: 'Benjamin Harris',
              color: '#7056ff',
              profession: 'Plumber',
              avatar: 'https://img.mobiscroll.com/demos/m4.png',
              cost: '20',
            },
            {
              id: 'res6',
              name: 'Olivia Anderson',
              color: '#56aaff',
              profession: 'Concrete Finisher',
              avatar: 'https://img.mobiscroll.com/demos/f2.png',
              cost: '15',
            },
            {
              id: 'res7',
              name: 'Emma Thompson',
              color: '#84852f',
              profession: 'Steelworker',
              avatar: 'https://img.mobiscroll.com/demos/f3.png',
              cost: '18',
            },
            {
              id: 'res8',
              name: 'Natalie Roberts',
              color: '#ff6e56',
              profession: 'Painter',
              avatar: 'https://img.mobiscroll.com/demos/f4.png',
              cost: '25',
            },
          ],
          renderResource: function (res) {
            return (
              '<div class="mbsc-flex">' +
              '<img class="mds-resource-info-avatar" src="' +
              res.avatar +
              '"/>' +
              '<div class="mds-resource-info-details">' +
              '<div class="mds-resource-info-title">' +
              res.name +
              '</div>' +
              '<div class="mds-resource-info-profession">' +
              res.profession +
              '</div>' +
              '</div>' +
              '</div>'
            );
          },
          onResourceHoverIn: function (args) {
            openTooltip(args.resource, args.target);
          },
          onResourceHoverOut: function (args) {
            $(args.target).removeClass('mds-resource-info-hover');
            closeTooltip();
          },
          onPageChange: function (args) {
            selectedDate = args.firstDay;
          },
        })
        .mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          touchUi: false,
          width: 280,
          onPosition: function (args, inst) {
            var $popupElm = $(args.target).children('.mbsc-popup');
            var rect = $hoveredResourceElm.getBoundingClientRect();

            $popupElm[0].style.top = rect.top - 10 + 'px';

            if (inst.s.rtl) {
              $popupElm[0].style.right = window.innerWidth - rect.left + 10 + 'px';
            } else {
              $popupElm[0].style.left = rect.right + 10 + 'px';
            }
            return false; // Prevent default positioning
          },
        })
        .mobiscroll('getInst');

      $tooltip
        .on('mouseenter', function () {
          clearTimeout(closeTimer);
        })
        .on('mouseleave', function () {
          closeTooltip();
        });

      $payButton.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: currentResource.name + ' paid',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-info-popup" style="display: none;">
  <div class="mbsc-flex mbsc-align-items-center mds-resource-info-header">
    <img id="demo-resource-info-avatar" class="mds-resource-info-avatar" />
    <div id="demo-resource-info-name" class="mds-resource-info-name mbsc-flex-1-0"></div>
    <button id="demo-resource-info-pay" mbsc-button data-color="success" data-variant="outline" class="mds-resource-info-pay mbsc-button-xs">
      Pay
    </button>
  </div>
  <div class="mds-resource-info-cont">
    <div>
      <span class="mbsc-txt-muted">Hourly rate </span>
      <span id="demo-resource-info-cost" class="mds-resource-info-detail"></span>
    </div>
    <div>
      <span id="demo-resource-info-date" class="mbsc-txt-muted"></span>
      <span id="demo-resource-info-total" class="mds-resource-info-detail"></span>
    </div>
  </div>
</div>
<div id="demo-display-resource-information-on-hover"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-resource-info-avatar {
  width: 40px;
  height: 40px;
}
.mds-resource-info-details {
  margin: 0 8px;
}
.mds-resource-info-title {
  line-height: 24px;
}
.mds-resource-info-profession {
  font-size: 12px;
  opacity: .5;
  line-height: 18px;
}
.mds-resource-info-hover.mbsc-timeline-resource {
  text-decoration: underline;
}
.mds-resource-info-header {
  height: 35px;
}
.mds-resource-info-name {
  font-size: 18px;
  padding: 16px 10px;
}
.mds-resource-info-pay.mbsc-button {
  font-size: 12px;
  width: 40px;
  height: 22px;
  margin: 0;
}
.mds-resource-info-cont {
  font-size: 14px;
  line-height: 22px;
  padding-top: 23px;
}
.mbsc-ltr .mds-resource-info-detail {
  float: right;
}
.mbsc-rtl .mds-resource-info-detail {
  float: left;
}
`,
};
