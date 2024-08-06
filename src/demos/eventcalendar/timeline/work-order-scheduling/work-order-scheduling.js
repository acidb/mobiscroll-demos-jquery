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
      function getCostString(cost) {
        return cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      var calendar;
      var popup;
      var range;
      var oldEvent;
      var tempEvent = {};
      var deleteEvent;
      var restoreEvent;
      var $title = $('#work-order-title');
      var $location = $('#work-order-location');
      var $bill = $('#work-order-bill');
      var $notes = $('#work-order-notes');
      var $deleteButton = $('#work-order-delete');
      var $resources = $('#work-order-resources');
      var myResources = [
        {
          id: 'contractors',
          name: 'Contractors',
          collapsed: true,
          eventCreation: false,
          children: [
            {
              id: 'builders',
              name: 'Builders',
              eventCreation: false,
              children: [
                {
                  id: 'b1',
                  name: 'Jude Chester',
                },
                {
                  id: 'b2',
                  name: 'Willis Kane',
                },
              ],
            },
            {
              id: 'carpenters',
              name: 'Carpenters',
              eventCreation: false,
              children: [
                {
                  id: 'c1',
                  name: 'Derek Austyn',
                },
                {
                  id: 'c2',
                  name: 'Merv Kenny',
                },
              ],
            },
          ],
        },
        {
          id: 'employees',
          name: 'Employees',
          eventCreation: false,
          children: [
            {
              id: 'cement_masons',
              name: 'Cement masons',
              eventCreation: false,
              children: [
                {
                  id: 'ce1',
                  name: 'Ford Kaiden',
                },
                {
                  id: 'ce2',
                  name: 'Jewell Ryder',
                },
              ],
            },
            {
              id: 'divers',
              name: 'Drivers',
              eventCreation: false,
              children: [
                {
                  id: 'd1',
                  name: 'Fred Valdez',
                },
                {
                  id: 'd2',
                  name: 'Jon Drake',
                },
                {
                  id: 'd3',
                  name: 'Lou Andie',
                },
                {
                  id: 'd4',
                  name: 'Leon Porter',
                },
              ],
            },
          ],
        },
        {
          id: 'equipment',
          name: 'Equipment',
          collapsed: true,
          eventCreation: false,
          children: [
            {
              id: 'concrete_mixers',
              name: 'Concrete mixers',
              eventCreation: false,
              children: [
                {
                  id: 'cm1',
                  name: 'AL 45 RFT',
                },
                {
                  id: 'cm2',
                  name: 'KQ 62 PVZ',
                },
                {
                  id: 'cm3',
                  name: 'RG 91 ZAL',
                },
                {
                  id: 'cm4',
                  name: 'XF 83 GFM',
                },
              ],
            },
            {
              id: 'concrete_pumps',
              name: 'Concrete pumps',
              eventCreation: false,
              children: [
                {
                  id: 'cp1',
                  name: 'GF 61 BVM',
                },
                {
                  id: 'cp2',
                  name: 'YC 55 ECT',
                },
              ],
            },
          ],
        },
      ];

      calendar = $('#demo-work-order-scheduling')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              startDay: 1,
              endDay: 5,
              startTime: '05:00',
              endTime: '22:00',
            },
          },
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          dragTimeStep: 30,
          data: [
            {
              start: 'dyndatetime(y,m,d-4,6)',
              end: 'dyndatetime(y,m,d-4,14)',
              title: 'Farmhouse TPH',
              location: '3339 Spruce Drive',
              resource: ['d2', 'cm2', 'd4', 'cp1', 'cm2', 'ce2', 'b1'],
              color: '#12ca6c',
              cost: 48000,
            },
            {
              start: 'dyndatetime(y,m,d-3,8)',
              end: 'dyndatetime(y,m,d-3,18)',
              title: 'Block of flats KXT',
              location: '4698 Mercer Street',
              resource: ['d1', 'cm1', 'd3', 'cp1', 'cm3', 'ce2', 'b2'],
              color: '#c170c3',
              cost: 36000,
            },
            {
              start: 'dyndatetime(y,m,d-2,12)',
              end: 'dyndatetime(y,m,d-2,20)',
              title: 'Apartment house UGL',
              location: '3647 Tavern Place',
              resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
              color: '#03c9d2',
              cost: 50000,
            },
            {
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,19)',
              title: 'Detached house WKB',
              location: '956 Dovetail Estates',
              resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
              color: '#ff1515',
              cost: 55000,
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Apartment house XAZ',
              location: '4919 Jett Lane, Inglewood',
              resource: ['d1', 'cm4', 'd4', 'cp1', 'cm2', 'c2', 'b2'],
              color: '#12ca6c',
              cost: 62000,
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Block of flats DRG',
              location: '486 Sycamore Fork Road',
              resource: ['d2', 'cm1', 'd3', 'cp2', 'ce2', 'c1', 'b1'],
              color: '#efd414',
              cost: 39000,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Farmhouse YQK',
              location: '1563 Retreat Avenue',
              resource: ['d2', 'cm4', 'd4', 'cm2', 'cp1', 'c2', 'b2'],
              color: '#cf49d8',
              cost: 45000,
            },
            {
              start: 'dyndatetime(y,m,d+2,7)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Apartment house SWP',
              location: '628 Daylene Drive',
              resource: ['d2', 'cm3', 'd3', 'cm1', 'cp2', 'c1', 'b1'],
              color: '#c170c3',
              cost: 53000,
            },
            {
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,18)',
              title: 'Detached house OZL',
              location: '1830 Rinehart Road',
              resource: ['d3', 'cm2', 'd4', 'cp2', 'cm3', 'ce1', 'b2'],
              color: '#ff1515',
              cost: 47000,
            },
            {
              start: 'dyndatetime(y,m,d+4,11)',
              end: 'dyndatetime(y,m,d+4,19)',
              title: 'Farmhouse PSZ',
              location: '2410 Union Street',
              resource: ['d1', 'cm3', 'd4', 'cp3', 'cm4', 'c2', 'b1', 'ce2'],
              color: '#ff1515',
              cost: 64000,
            },
          ],
          resources: myResources,
          extendDefaultEvent: function () {
            return {
              title: 'Work order',
              location: '',
              cost: 0,
            };
          },
          onEventClick: function (args) {
            oldEvent = $.extend({}, args.event);
            tempEvent = args.event;

            if (!popup.isVisible()) {
              createEditPopup(args);
            }
          },
          onEventCreated: function (args) {
            popup.close();

            // store temporary event
            tempEvent = args.event;
            createAddPopup(args.target);
          },
          onEventDeleted: function (args) {
            mobiscroll.snackbar({
              //<hidden>
              // theme,//</hidden>
              // context,
              button: {
                action: function () {
                  calendar.addEvent(args.event);
                },
                text: 'Undo',
              },
              message: 'Event deleted',
            });
          },
          renderDay: function (args) {
            var formatDate = mobiscroll.formatDate;
            var events = args.events;
            var costs = 0;

            if (events) {
              for (var i = 0; i < events.length; ++i) {
                costs += events[i].cost;
              }
            }

            return (
              '<div class="md-work-order-date">' +
              formatDate('DD DDD MMM YYYY', args.date) +
              '</div>' +
              '<div class="md-work-order-date-title">Total revenue: $' +
              getCostString(costs) +
              '</div>'
            );
          },
          renderScheduleEventContent: function (event) {
            return '<div>' + event.title + '<span class="md-work-order-price-tag">$' + getCostString(event.original.cost) + '</span></div>';
          },
        })
        .mobiscroll('getInst');

      function createAddPopup(elm) {
        // hide delete button inside add popup
        $deleteButton.hide();

        deleteEvent = true;
        restoreEvent = false;

        // set popup header text and buttons for adding
        popup.setOptions({
          headerText: 'New work order',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                calendar.updateEvent(tempEvent);

                // navigate the calendar to the correct view
                calendar.navigateToEvent(tempEvent);

                deleteEvent = false;
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        // fill popup with a new event data
        $title.mobiscroll('getInst').value = tempEvent.title;
        $location.mobiscroll('getInst').value = tempEvent.location;
        $bill.mobiscroll('getInst').value = tempEvent.cost;
        $notes.mobiscroll('getInst').value = '';
        range.setVal([tempEvent.start, tempEvent.end]);
        setCheckboxes(tempEvent.resource);

        // set anchor for the popup
        popup.setOptions({ anchor: elm });

        popup.open();
      }

      function createEditPopup(args) {
        var ev = args.event;
        // show delete button inside edit popup
        $deleteButton.show();

        deleteEvent = false;
        restoreEvent = true;

        // set popup header text and buttons for editing
        popup.setOptions({
          headerText: 'Edit work order',
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                var date = range.getVal();
                var updatedEvent = {
                  id: ev.id,
                  title: $title.val(),
                  location: $location.val(),
                  cost: +$bill.val() || 0,
                  notes: $notes.val(),
                  start: date[0],
                  end: date[1],
                  color: ev.color,
                  resource: ev.resource,
                };

                // update event with the new properties on save button click
                calendar.updateEvent(updatedEvent);

                // navigate the calendar to the correct view
                calendar.navigateToEvent(updatedEvent);

                restoreEvent = false;
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        // fill popup with the selected event data
        $title.mobiscroll('getInst').value = ev.title || '';
        $location.mobiscroll('getInst').value = ev.location || '';
        $bill.mobiscroll('getInst').value = ev.cost || 0;
        $notes.mobiscroll('getInst').value = ev.description || '';
        range.setVal([ev.start, ev.end]);
        setCheckboxes(ev.resource);

        // set anchor for the popup
        popup.setOptions({ anchor: args.domEvent.currentTarget });
        popup.open();
      }

      function setCheckboxes(resources) {
        $('.work-order-checkbox').each(function (i, elm) {
          $(elm).mobiscroll('getInst').checked = resources.indexOf($(elm).data('value')) !== -1;
        });
      }

      function appendChekboxes() {
        var checkboxes = '<div class="mbsc-grid mbsc-no-padding"><div class="mbsc-row">';

        for (var i = 0; i < myResources.length; ++i) {
          for (var j = 0; j < myResources[i].children.length; ++j) {
            var resource = myResources[i].children[j];

            checkboxes += '<div class="mbsc-col-sm-4"><div class="mbsc-form-group-title">' + resource.name + '</div>';

            for (var k = 0; k < resource.children.length; ++k) {
              var r = resource.children[k];
              checkboxes +=
                '<label class="md-work-order-checkbox-label"><input class="work-order-checkbox" data-value="' +
                r.id +
                '" type="checkbox" mbsc-checkbox data-theme="material" data-label="' +
                r.name +
                '"/></label>';
            }
            checkboxes += '</div>';
          }
        }
        checkboxes += '</div></div>';

        $resources.append(checkboxes);
        mobiscroll.enhance($resources[0]);
      }

      popup = $('#demo-work-order-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          onClose: function () {
            if (deleteEvent) {
              calendar.removeEvent(tempEvent);
            } else if (restoreEvent) {
              calendar.updateEvent(oldEvent);
            }
          },
          responsive: {
            medium: {
              display: 'center',
              width: 520,
              fullScreen: false,
              touchUi: false,
            },
          },
        })
        .mobiscroll('getInst');

      $title.on('input', function (ev) {
        // update current event's title
        tempEvent.title = ev.target.value;
      });

      $location.on('input', function (ev) {
        // update current event's location
        tempEvent.location = ev.target.value;
      });

      $bill.on('input', function (ev) {
        // update current event's cost
        tempEvent.cost = +ev.target.value || 0;
      });

      $notes.on('change', function (ev) {
        // update current event's description
        tempEvent.description = ev.target.value;
      });

      $('#demo-work-order-popup').on('change', '.work-order-checkbox', function (ev) {
        var tempResource = tempEvent.resource;
        var resources = tempResource ? (Array.isArray(tempResource) ? tempResource : [tempResource]) : [];
        var val = $(ev.target).data('value');

        if (ev.target.checked && resources.indexOf(val) === -1) {
          resources.push(val);
        } else {
          resources = resources.filter(function (value) {
            return value != val;
          });
        }
        tempEvent.resource = resources;
      });

      range = $('#work-order-date')
        .mobiscroll()
        .datepicker({
          controls: ['time'],
          select: 'range',
          startInput: '#work-order-start',
          endInput: '#work-order-end',
          timeWheels: '|h:mm A|',
          showRangeLabels: false,
          touchUi: false,
          stepMinute: 30,
          minTime: '06:00',
          maxTime: '22:00',
          onChange: function (args) {
            var date = args.value;

            // update event's start date
            tempEvent.start = date[0];
            tempEvent.end = date[1];
          },
        })
        .mobiscroll('getInst');

      $deleteButton.on('click', function () {
        // delete current event on button click
        calendar.removeEvent(tempEvent);

        // save a local reference to the deleted event
        var deletedEvent = tempEvent;

        popup.close();

        mobiscroll.snackbar({
          //<hidden>
          // theme,//</hidden>
          // context,
          button: {
            action: function () {
              calendar.addEvent(deletedEvent);
            },
            text: 'Undo',
          },
          duration: 10000,
          message: 'Event deleted',
        });
      });

      appendChekboxes();
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-work-order-scheduling" class="md-work-order-scheduling"></div>

<div style="display:none;">
    <div id="demo-work-order-popup">
        <div class="mbsc-form-group">
            <label>
            Title
            <input mbsc-input id="work-order-title" />
        </label>
            <label>
            Location
            <input mbsc-input id="work-order-location" />
        </label>
            <label>
            Bill to customer ($)
            <input mbsc-input id="work-order-bill" />
        </label>
            <label>
            Notes
            <textarea mbsc-textarea id="work-order-notes"></textarea>
        </label>
        </div>
        <div class="mbsc-form-group">
            <label>
            Starts
            <input mbsc-input id="work-order-start" />
        </label>
            <label>
            Ends
            <input mbsc-input id="work-order-end" />
        </label>
            <div id="work-order-date"></div>
        </div>
        <div id="work-order-resources" class="mbsc-form-group">

        </div>

        <div class="mbsc-button-group">
            <button class="mbsc-button-block" id="work-order-delete" mbsc-button data-color="danger" data-variant="outline">Delete work order</button>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-work-order-checkbox-label.mbsc-checkbox {
    padding-top: 5px;
    padding-bottom: 5px;
}

.md-work-order-date {
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
}

.md-work-order-date-title {
    font-size: 13px;
    color: #959595;
    padding: 5px 10px;
    line-height: 18px;
}

.md-work-order-price-tag {
    display: inline-block;
    font-size: 11px;
    line-height: 16px;
    vertical-align: middle;
    border: 1px solid #959595;
    color: #959595;
    border-radius: 5px;
    margin: 0 10px;
    padding: 0px 5px;
}

.md-work-order-scheduling .mbsc-timeline-parent {
    height: 32px;
}
  `,
};
