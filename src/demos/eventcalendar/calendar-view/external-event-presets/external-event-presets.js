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
      var tasks = [
        {
          title: 'Small wrap',
          color: '#637e57',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+1)',
        },
        {
          title: 'Full-size wrap',
          color: '#50789d',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
        },
        {
          title: 'Mid-size wrap',
          color: '#6c5d45',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
        },
        {
          title: 'Roadster wrap',
          color: '#9da721',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+2)',
        },
        {
          title: 'SUV wrap',
          color: '#cd6957',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+3)',
        },
        {
          title: 'Hypercar wrap',
          color: '#7a5886',
          start: 'dyndatetime(y,m,d)',
          end: 'dyndatetime(y,m,d+4)',
        },
      ];
      var $title = $('#external-event-job');
      var $details = $('#external-event-details');

      function fillDialog(args) {
        $title.mobiscroll('getInst').value = args.event.title;
        $details.mobiscroll('getInst').value = args.event.details || '';
        technician.setVal();
        dialog.setOptions({ anchor: args.target });
        dialog.open();
      }

      $('#external-event-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: { labels: true },
          },
          invalid: [
            {
              recurring: {
                repeat: 'weekly',
                weekDays: 'SA,SU',
              },
            },
          ],
          dragToMove: true,
          externalDrop: true,
          onEventCreated: function (args) {
            fillDialog(args);
          },
          onEventCreateFailed: function () {
            mobiscroll.toast({
              // context,
              message: "Can't create event on this date",
            });
          },
          onEventUpdateFailed: function () {
            mobiscroll.toast({
              // context,
              message: "Can't add event on this date",
            });
          },
        });

      var technician = $('#external-event-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('external-event-select-input'),
          display: 'anchored',
          touchUi: false,
        })
        .mobiscroll('getInst');

      var dialog = $('#external-event-dialog')
        .mobiscroll()
        .popup({
          display: 'anchored',
          width: 400,
          contentPadding: false,
          touchUi: false,
          headerText: 'Assign task',
          buttons: ['ok'],
          onClose: function () {
            mobiscroll.toast({
              // context,
              message: 'New task added',
            });
          },
        })
        .mobiscroll('getInst');

      $('.external-event-task').each(function (i, task) {
        $(task).mobiscroll().draggable({ dragData: tasks[i] });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
        <div class="mbsc-col-sm-9 external-event-calendar">
            <div id="external-event-calendar"></div>
        </div>
        <div class="mbsc-col-sm-3">
            <div class="mbsc-form-group-title">Available tasks</div>

            <div class="external-event-task" style="background: #637e57;">
                <div>Small wrap</div>
                <div>2 days</div>
            </div>

            <div class="external-event-task" style="background: #50789d;">
                <div>Full-size wrap</div>
                <div>3 days</div>
            </div>

            <div class="external-event-task" style="background: #6c5d45;">
                <div>Mid-size wrap</div>
                <div>3 days</div>
            </div>

            <div class="external-event-task" style="background: #9da721;">
                <div>Roadster wrap</div>
                <div>3 days</div>
            </div>

            <div class="external-event-task" style="background: #cd6957;">
                <div>SUV wrap</div>
                <div>4 days</div>
            </div>

            <div class="external-event-task" style="background: #7a5886;">
                <div>Hypercar wrap</div>
                <div>5 days</div>
            </div>
        </div>
    </div>
</div>

<div id="external-event-dialog">
    <div class="mbsc-form-group">
        <label for="external-event-job">
            <input id="external-event-job" mbsc-input data-label="Task" readonly></input>
        </label>
        <label for="external-event-details">
            <textarea id="external-event-details" mbsc-textarea data-label="Details" placeholder="Add description..."></textarea>
        </label>
        <label>
           Technician
            <input mbsc-input id="external-event-select-input" placeholder="Please select..." data-dropdown="true" />
        </label>
        <select id="external-event-select">
           <option value="1">Roly Chester</option>
            <option value="2">Tucker Wayne</option>
            <option value="3">Baker Brielle</option>
            <option value="4">Jami Walter</option>
            <option value="5">Patrick Toby</option>
            <option value="6">Tranter Logan</option>
            <option value="7">Payton Sinclair</option>
        </select>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.external-event-calendar {
    border-right: 1px solid #ccc;
}

.external-event-task {
    color: #fff;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.demo-external-event-presets.demo-wrapper,
.demo-external-event-presets .mbsc-grid,
.demo-external-event-presets .mbsc-row,
.demo-external-event-presets .external-event-calendar {
    height: 100%;
}
  `,
};
