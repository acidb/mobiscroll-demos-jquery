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
      var myEvents = [
        {
          id: 1,
          title: 'Team Sync Meeting',
          start: 'dyndatetime(y, m, d - 1, 10, 15)',
          end: 'dyndatetime(y, m, d - 1, 11, 30)',
        },
        {
          id: 2,
          title: 'Apply Security Update',
          start: 'dyndatetime(y, m, d - 1, 15, 0)',
          end: 'dyndatetime(y, m, d - 1, 16, 0)',
        },
        {
          id: 3,
          title: 'Database Backup',
          start: 'dyndatetime(y, m, d - 2, 12, 0)',
          end: 'dyndatetime(y, m, d - 2, 13, 0)',
        },
        {
          id: 4,
          title: 'Project Kickoff & Coffee',
          start: 'dyndatetime(y, m, d - 2, 9, 0)',
          end: 'dyndatetime(y, m, d - 2, 10, 0)',
        },
        {
          id: 5,
          title: 'System Health Review',
          start: 'dyndatetime(y, m, d - 2, 8, 0)',
          end: 'dyndatetime(y, m, d - 2, 8, 45)',
        },
        {
          id: 6,
          title: 'Quarterly Health Audit',
          start: 'dyndatetime(y, m, d, 16, 0)',
          end: 'dyndatetime(y, m, d, 17, 0)',
        },
        {
          id: 7,
          title: 'Deployment Window',
          start: 'dyndatetime(y, m, d, 14, 0)',
          end: 'dyndatetime(y, m, d, 15, 0)',
        },
        {
          id: 8,
          title: 'Nightly Backup Prep',
          start: 'dyndatetime(y, m, d, 12, 0)',
          end: 'dyndatetime(y, m, d, 13, 0)',
        },
        {
          id: 9,
          title: 'Morning System Scan',
          start: 'dyndatetime(y, m, d, 8, 0)',
          end: 'dyndatetime(y, m, d, 8, 45)',
        },
        {
          id: 10,
          title: 'Sprint Review & Coffee',
          start: 'dyndatetime(y, m, d + 2, 9, 0)',
          end: 'dyndatetime(y, m, d + 2, 9, 45)',
        },
        {
          id: 11,
          title: 'Final Health Check',
          start: 'dyndatetime(y, m, d + 2, 16, 0)',
          end: 'dyndatetime(y, m, d + 2, 16, 45)',
        },
        {
          id: 12,
          title: 'Weekly Backup',
          start: 'dyndatetime(y, m, d + 2, 12, 0)',
          end: 'dyndatetime(y, m, d + 2, 12, 45)',
        },
        {
          id: 13,
          title: 'Morning Health Scan',
          start: 'dyndatetime(y, m, d + 1, 8, 15)',
          end: 'dyndatetime(y, m, d + 1, 9, 0)',
        },
        {
          id: 14,
          title: 'Afternoon Backup',
          start: 'dyndatetime(y, m, d + 1, 12, 15)',
          end: 'dyndatetime(y, m, d + 1, 13, 0)',
        },
      ];

      $('#demo-cell-content-template')
        .mobiscroll()
        .eventcalendar({
          // context,
          // drag,
          cssClass: 'mds-schedule-cell-template',
          data: myEvents,
          renderCell: function (args) {
            var h = args.date.getHours();
            var d = args.date.getDay();
            var icons = [];

            (d === 1 || d === 5) &&
              h === 9 &&
              icons.push(
                { icon: 'material-people', title: d === 1 ? 'Launch Meeting' : 'Sprint Review' },
                { icon: 'material-message', title: 'Coffee Break' },
              );
            h === 13 && icons.push({ icon: 'bubbles', title: 'Lunch Time' });
            d >= 1 && d <= 5 && h === 17 && icons.push({ icon: 'clock', title: 'Wrap Up' });
            d === 2 && (h === 10 || h === 11) && icons.push({ icon: 'loop2', title: 'Dev Sync' });
            h % 4 === 0 && icons.push({ icon: 'cogs', title: 'Health Check' });
            h === 3 && icons.push({ icon: 'connection', title: 'Network Probe' });
            h === 12 && icons.push({ icon: 'upload', title: 'Backup' });
            h === 15 && icons.push({ icon: 'lock', title: 'Security Patch' });
            d === 3 && h === 14 && icons.push({ icon: 'line-paperplane', title: 'Deploy Window' });

            if (!icons.length) {
              return '';
            }

            return (
              '<div class="mds-schedule-cell-icons-background"><div class="mds-schedule-cell-icons">' +
              icons
                .map(function (icon) {
                  return (
                    '<div class="mds-schedule-cell-icon" title="' +
                    icon.title +
                    '">' +
                    '<div class="mbsc-font-icon mbsc-icon-' +
                    icon.icon +
                    '"></div>' +
                    '</div>'
                  );
                })
                .join('') +
              '</div></div>'
            );
          },
          view: {
            schedule: { type: 'week', startTime: '08:00', endTime: '18:00', startDay: 1, endDay: 5 },
          },
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-cell-content-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-schedule-cell-template .mbsc-schedule-time-wrapper,
.mds-schedule-cell-template .mbsc-schedule-item {
  height: 70px;
}

.mds-schedule-cell-template .mbsc-schedule-events {
  margin-right: 28px;
}

.mbsc-rtl .mds-schedule-cell-template .mbsc-schedule-events {
  margin-right: auto;
  margin-left: 28px;
}

.mds-schedule-cell-icons-background {
  height: 100%; 
  width: 100%;
  pointer-events: none;
  background: transparent;
  background: rgba(170, 170, 170, 0.15);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.05);
}

.mds-schedule-cell-icons {
  pointer-events: auto; 
  position: absolute;
  top: 2px;
  right: 6px;
}

.mbsc-rtl .mds-schedule-cell-icons {
  left: 6px;
  right: auto;
  pointer-events: cursor;
}

.mds-schedule-cell-icon {
  font-size: 16px;
  width: 25px;
  height: 22px;
  line-height: 22px;
  color: #000;
  background: rgba(255, 255, 255, 0.8); 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 7px 0;
  text-align: center;
}
  `,
};
