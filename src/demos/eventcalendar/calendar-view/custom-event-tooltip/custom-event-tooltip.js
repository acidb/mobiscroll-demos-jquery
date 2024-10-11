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
      function openTooltip(args) {
        var formatDate = mobiscroll.formatDate;
        var event = args.event;
        var time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));
        var buttonText;
        var buttonType;

        if (event.confirmed) {
          buttonText = 'Cancel appointment';
          buttonType = 'warning';
        } else {
          buttonText = 'Confirm appointment';
          buttonType = 'success';
        }

        appointment = event;
        $appointmentInfo.text(event.title + ', Age: ' + event.age);
        $appointmentLocation.text(event.location);
        $appointmentReason.text(event.reason);
        $appointmentTime.text(time);
        $appointmentStatus.text(event.confirmed ? 'Confirmed' : 'Canceled');

        $btnStatus.text(buttonText);
        $btnStatus.mobiscroll('setOptions', { color: buttonType });

        $tooltipHeader.css('background-color', event.color);

        clearTimeout(timer);
        timer = null;

        tooltip.setOptions({ anchor: args.domEvent.target });
        tooltip.open();
      }

      var appointment;
      var $appointmentInfo = $('#demo-tooltip-info');
      var $appointmentLocation = $('#demo-tooltip-location');
      var $appointmentReason = $('#demo-tooltip-reason');
      var $appointmentStatus = $('#demo-tooltip-status');
      var $appointmentTime = $('#demo-tooltip-time');
      var $btnDelete = $('#demo-tooltip-delete');
      var $btnStatus = $('#demo-tooltip-status-update');
      var $btnView = $('#demo-tooltip-view');
      var timer;
      var $tooltip = $('#demo-tooltip-popup');
      var $tooltipHeader = $('#demo-tooltip-header');

      var calendar = $('#demo-tooltip-calendar')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: { calendar: { type: 'week' } },
          data: [
            {
              title: 'Jude Chester',
              age: 69,
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,9)',
              confirmed: false,
              reason: 'Headaches morning & afternoon',
              location: 'Topmed, Building A, Room 203',
              color: '#b33d3d',
            },
            {
              title: 'Leon Porter',
              age: 44,
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,10)',
              confirmed: false,
              reason: 'Left abdominal pain',
              location: 'Topmed, Building D, Room 360',
              color: '#b33d3d',
            },
            {
              title: 'Lily Racquel',
              age: 54,
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,11)',
              confirmed: true,
              reason: 'Dry, persistent cough & headache',
              location: 'Procare, Building C, Room 12',
              color: '#309346',
            },
            {
              title: 'Mia Sawyer',
              age: 59,
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,12)',
              confirmed: true,
              reason: 'Difficulty sleeping & loss of appetite',
              location: 'Procare, Building C, Room 12',
              color: '#309346',
            },
            {
              title: 'Jon Candace',
              age: 63,
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,13)',
              confirmed: true,
              reason: 'Nausea & weakness',
              location: 'MedStar, Building A, Room 1',
              color: '#c77c0a',
            },
            {
              title: 'Layton Drake',
              age: 57,
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,14)',
              confirmed: true,
              reason: 'Headaches & loss of appetite',
              location: 'Vitalife, Room 160',
              color: '#c77c0a',
            },
            {
              title: 'Willis Kane',
              age: 44,
              start: 'dyndatetime(y,m,d+1,8)',
              end: 'dyndatetime(y,m,d+1,9)',
              confirmed: true,
              reason: 'Back pain',
              location: 'Care Cente, Room 320r',
              color: '#b33d3d',
            },
            {
              title: 'Theo Calanthia',
              age: 60,
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,10)',
              confirmed: true,
              reason: 'Anxiousness & sleeping disorder',
              location: 'Care Center, Room 320',
              color: '#b33d3d',
            },
            {
              title: 'Ford Kaiden',
              age: 53,
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,15)',
              confirmed: true,
              reason: 'Nausea & vomiting',
              location: 'Care Center, Room 206',
              color: '#b33d3d',
            },
            {
              title: 'Gerry Irma',
              age: 50,
              start: 'dyndatetime(y,m,d+1,13)',
              end: 'dyndatetime(y,m,d+1,14)',
              confirmed: false,
              reason: 'Fever & sore throat',
              location: 'Medica Zone, Building C, Room 2',
              color: '#c77c0a',
            },
            {
              title: 'Carlyn Dorothy',
              age: 36,
              start: 'dyndatetime(y,m,d+1,14)',
              end: 'dyndatetime(y,m,d+1,15)',
              confirmed: true,
              reason: 'Tiredness & muscle pain',
              location: 'Medica Zone, Building C, Room 2',
              color: '#c77c0a',
            },
            {
              title: 'Alma Potter',
              age: 74,
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,11)',
              confirmed: true,
              reason: 'High blood pressure',
              location: 'Vitacure, Building D, Room 2',
              color: '#b33d3d',
            },
            {
              title: 'Debra Aguilar',
              age: 47,
              start: 'dyndatetime(y,m,d-1,11)',
              end: 'dyndatetime(y,m,d-1,12)',
              confirmed: false,
              reason: 'Fever & sore throat',
              location: 'Vitacure, Building D, Room 2',
              color: '#b33d3d',
            },
            {
              title: 'Marjorie White',
              age: 55,
              start: 'dyndatetime(y,m,d-1,13)',
              end: 'dyndatetime(y,m,d-1,14)',
              confirmed: true,
              reason: 'Back pain',
              location: 'Vitacure, Building D, Room 2',
              color: '#b33d3d',
            },
            {
              title: 'Lora Wilson',
              age: 66,
              start: 'dyndatetime(y,m,d-1,15)',
              end: 'dyndatetime(y,m,d-1,16)',
              confirmed: false,
              reason: 'Fever & headache',
              location: 'Vitacure, Building D, Room 2',
              color: '#b33d3d',
            },
            {
              title: 'Christie Baker',
              age: 71,
              start: 'dyndatetime(y,m,d-1,10)',
              end: 'dyndatetime(y,m,d-1,11)',
              confirmed: true,
              reason: 'Headaches morning & afternoon',
              location: 'Care Center, Room 300',
              color: '#309346',
            },
            {
              title: 'Arlene Lyons',
              age: 41,
              start: 'dyndatetime(y,m,d-1,14)',
              end: 'dyndatetime(y,m,d-1,15)',
              confirmed: true,
              reason: 'Nausea & weakness',
              location: 'Care Center, Room 202',
              color: '#c77c0a',
            },
            {
              title: 'Dory Edie',
              age: 45,
              start: 'dyndatetime(y,m,d-2,9)',
              end: 'dyndatetime(y,m,d-2,10)',
              confirmed: true,
              reason: 'Right abdominal pain',
              location: 'Vitacure, Building A, Room 203',
              color: '#309346',
            },
            {
              title: 'Kaylin Toni',
              age: 68,
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,11)',
              confirmed: true,
              reason: 'Itchy, red rashes',
              location: 'Vitacure, Building A, Room 203',
              color: '#309346',
            },
            {
              title: 'Gray Kestrel',
              age: 60,
              start: 'dyndatetime(y,m,d-2,12)',
              end: 'dyndatetime(y,m,d-2,13)',
              confirmed: true,
              reason: 'Cough & fever',
              location: 'Vitacure, Building A, Room 203',
              color: '#309346',
            },
            {
              title: 'Lou Andie',
              age: 76,
              start: 'dyndatetime(y,m,d-2,15)',
              end: 'dyndatetime(y,m,d-2,16)',
              confirmed: true,
              reason: 'High blood pressure',
              location: 'Medica Zone, Room 13',
              color: '#309346',
            },
            {
              title: 'Yancy Dustin',
              age: 52,
              start: 'dyndatetime(y,m,d-2,10)',
              end: 'dyndatetime(y,m,d-2,11)',
              confirmed: true,
              reason: 'Fever & headache',
              location: 'Vitacure, Building E, Room 50',
              color: '#c77c0a',
            },
            {
              title: 'Terry Clark',
              age: 78,
              start: 'dyndatetime(y,m,d-2,11)',
              end: 'dyndatetime(y,m,d-2,12)',
              confirmed: true,
              reason: 'Swollen ankles',
              location: 'Vitacure, Building E, Room 50',
              color: '#c77c0a',
            },
          ],
          clickToCreate: false,
          dragToCreate: false,
          dragToMove: true,
          dragToResize: false,
          height: 260,
          showEventTooltip: false,
          onEventDragStart: function () {
            tooltip.close();
          },
          onEventClick: openTooltip,
          onEventHoverIn: openTooltip,
          onEventHoverOut: function () {
            if (!timer) {
              timer = setTimeout(function () {
                tooltip.close();
              }, 200);
            }
          },
        })
        .mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          contentPadding: false,
          display: 'anchored',
          scrollLock: false,
          showOverlay: false,
          touchUi: false,
          width: 350,
        })
        .mobiscroll('getInst');

      $tooltip.on('mouseenter', function () {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      });

      $tooltip.on('mouseleave', function () {
        timer = setTimeout(function () {
          tooltip.close();
        }, 200);
      });

      $btnStatus.on('click', function () {
        appointment.confirmed = !appointment.confirmed;
        calendar.updateEvent(appointment);
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Appointment ' + (appointment.confirmed ? 'confirmed' : 'canceled'),
        });
      });

      $btnView.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'View file',
        });
      });

      $btnDelete.on('click', function () {
        calendar.removeEvent(appointment);
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Appointment deleted',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-tooltip-calendar"></div>
<div id="demo-tooltip-popup" class="mds-tooltip mds-popup">
  <div id="demo-tooltip-header" class="mds-tooltip-header">
    <span id="demo-tooltip-info"></span>
    <span id="demo-tooltip-time" class="mbsc-pull-right"></span>
  </div>
  <div class="mbsc-padding">
    <div class="mds-tooltip-label mbsc-margin">
      Status: <span id="demo-tooltip-status" class="mbsc-light"></span>
      <button id="demo-tooltip-status-update" mbsc-button data-color="warning" data-variant="outline" class="mds-tooltip-button mbsc-pull-right">
      </button>
    </div>
    <div class="mds-tooltip-label mbsc-margin">Reason for visit: <span id="demo-tooltip-reason" class="mbsc-light"></span></div>
    <div class="mds-tooltip-label mbsc-margin">Location: <span id="demo-tooltip-location" class="mbsc-light"></span></div>
    <button id="demo-tooltip-view" mbsc-button data-color="secondary" class="mds-tooltip-button">
      View patient file
    </button>
    <button id="demo-tooltip-delete" mbsc-button data-color="danger" data-variant="outline" class="mds-tooltip-button mbsc-pull-right">
      Delete appointment
    </button>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-tooltip {
  font-size: 15px;
  font-weight: 600;
}

.mds-tooltip-header {
  padding: 12px 16px;
  color: #eee;
}

.mds-tooltip-label {
  line-height: 32px;
}

.mds-tooltip-button.mbsc-button {
  font-size: 14px;
  margin: 0;
}

.mds-tooltip-button.mbsc-material {
  font-size: 12px;
}
`,
};
