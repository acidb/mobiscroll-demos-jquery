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
      function showPopup(args) {
        var event = args.event;
        var resources = Array.isArray(event.resource) ? event.resource : [event.resource];

        // Store temporary event
        tempEvent = event;

        // Fill popup with the current event data
        $title.mobiscroll('getInst').value = event.title;

        $segmented.each(function () {
          var segmented = $(this);
          var value = +segmented.val();
          var segmentedInst = segmented.mobiscroll('getInst');
          segmentedInst.checked = resources.indexOf(value) !== -1;
        });

        // Set anchor for the popup
        popup.setOptions({ anchor: args.target ? args.target : args.domEvent.target });
        popup.open();
      }

      var tempEvent;
      var deleteEvent;
      var $title = $('#demo-shared-events-title');
      var $segmented = $('[name="demo-shared-events-select"]');

      var calendar = $('#demo-shared-events-across-resources')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startDay: 1,
              endDay: 5,
              startTime: '05:00',
              endTime: '22:00',
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d-3,10)',
              end: 'dyndatetime(y,m,d-3,15)',
              title: 'Impact Training',
              resource: [2, 3],
              color: '#35bb5a',
            },
            {
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,15)',
              title: 'Impact Training',
              resource: [2, 3],
              color: '#35bb5a',
            },
            {
              start: 'dyndatetime(y,m,d,8,30)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Quick mtg. with Martin',
              resource: 3,
              color: '#913aa7',
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'General orientation',
              resource: [1, 2, 3],
              color: '#a71111',
            },
            {
              start: 'dyndatetime(y,m,d+1,10)',
              end: 'dyndatetime(y,m,d+1,11)',
              title: 'Product team mtg.',
              resource: [2, 3],
              color: '#6e7f29',
            },
            {
              start: 'dyndatetime(y,m,d+2,14)',
              end: 'dyndatetime(y,m,d+2,16)',
              title: 'Stakeholder mtg.',
              resource: 1,
              color: '#dcd234',
            },
            {
              start: 'dyndatetime(y,m,d+3,10)',
              end: 'dyndatetime(y,m,d+3,14)',
              title: 'Innovation mtg.',
              resource: [1, 2],
              color: '#de3d83',
            },
          ],
          resources: [
            {
              id: 1,
              name: 'Ryan',
              color: '#f7c4b4',
            },
            {
              id: 2,
              name: 'Kate',
              color: '#c6f1c9',
            },
            {
              id: 3,
              name: 'John',
              color: '#e8d0ef',
            },
          ],
          extendDefaultEvent: function () {
            return { color: '#4a9e42' };
          },
          onEventCreated: function (args) {
            deleteEvent = true;
            showPopup(args);
          },
          onEventDoubleClick: function (args) {
            deleteEvent = false;
            showPopup(args);
          },
        })
        .mobiscroll('getInst');

      var popup = $('#demo-shared-events-popup')
        .mobiscroll()
        .popup({
          display: 'anchored',
          contentPadding: false,
          touchUi: false,
          width: 350,
          buttons: [
            'cancel',
            {
              text: 'OK',
              keyCode: 'enter',
              handler: function () {
                var selected = [];

                $segmented.each(function () {
                  var segmented = $(this);
                  var segmentedInst = segmented.mobiscroll('getInst');

                  if (segmentedInst.checked) {
                    selected.push(+segmented.val());
                  }
                });

                tempEvent.resource = selected;

                deleteEvent = false;

                // Update event with the new properties on OK button click
                calendar.updateEvent(tempEvent);
                popup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            if (deleteEvent) {
              calendar.removeEvent(tempEvent);
            }
          },
        })
        .mobiscroll('getInst');

      $title.on('input', function (ev) {
        tempEvent.title = ev.target.value;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-shared-events-across-resources"></div>
<div id="demo-shared-events-popup">
    <div class="mbsc-form-group">
        <label>
            Title
            <input id="demo-shared-events-title" mbsc-input data-input-style="box" data-label-style="stacked" />
        </label>
        <div class="mbsc-padding">
            <label class="mbsc-txt-muted">Select event participants</label>
        </div>
        <div mbsc-segmented-group data-select="multiple">
            <label>
                Ryan
                <input value="1" mbsc-segmented type="checkbox" name="demo-shared-events-select">
            </label>
            <label>
                Kate
                <input value="2" mbsc-segmented type="checkbox" name="demo-shared-events-select">
            </label>
            <label>
                John
                <input value="3" mbsc-segmented type="checkbox" name="demo-shared-events-select">
            </label>
        </div>
    </div>
</div>
  `,
};
