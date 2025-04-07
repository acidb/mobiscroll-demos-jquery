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
      var myResources = [
        { id: 1, name: 'Bart', color: '#328E39' },
        { id: 2, name: 'Jake', color: '#00AABB' },
        { id: 3, name: 'Carl', color: '#EA72C0' },
        { id: 4, name: 'Dana', color: '#FF5733' },
        { id: 5, name: 'Evan', color: '#3366FF' },
        { id: 6, name: 'Faye', color: '#FFD700' },
      ];

      var myResEvents = [
        { start: 'dyndatetime(y,m,d-3,7)', end: 'dyndatetime(y,m,d-3,9)', title: 'Sync', resource: 1 },
        { start: 'dyndatetime(y,m,d-2,8)', end: 'dyndatetime(y,m,d-2,10)', title: 'Kickoff', resource: 1 },
        { start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,12)', title: 'Planning', resource: 1 },
        { start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,12)', title: 'Meeting', resource: 1 },
        { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,12)', title: 'Review', resource: 1 },
        { start: 'dyndatetime(y,m,d+2,8)', end: 'dyndatetime(y,m,d+2,10)', title: 'Kickoff', resource: 1 },
        { start: 'dyndatetime(y,m,d+3,10)', end: 'dyndatetime(y,m,d+3,12)', title: 'Planning', resource: 1 },
        { start: 'dyndatetime(y,m,d-3,16)', end: 'dyndatetime(y,m,d-3,18)', title: 'Check-in', resource: 2 },
        { start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,17)', title: 'Talk', resource: 2 },
        { start: 'dyndatetime(y,m,d-1,13)', end: 'dyndatetime(y,m,d-1,15)', title: 'Discussion', resource: 2 },
        { start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,13)', title: 'Call', resource: 2 },
        { start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,13)', title: 'Integration', resource: 2 },
        { start: 'dyndatetime(y,m,d+2,13)', end: 'dyndatetime(y,m,d+2,15)', title: 'Demo', resource: 2 },
        { start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,16)', title: 'Fixing', resource: 2 },
        { start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,11)', title: 'Planning', resource: 3 },
        { start: 'dyndatetime(y,m,d-2,11)', end: 'dyndatetime(y,m,d-2,13)', title: 'Demo', resource: 3 },
        { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,12)', title: 'Review', resource: 3 },
        { start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,16)', title: 'Review', resource: 3 },
        { start: 'dyndatetime(y,m,d+1,15)', end: 'dyndatetime(y,m,d+1,17)', title: 'Retrospective', resource: 3 },
        { start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,13)', title: 'Review', resource: 3 },
        { start: 'dyndatetime(y,m,d+3,8)', end: 'dyndatetime(y,m,d+3,10)', title: 'Onboarding', resource: 3 },
        { start: 'dyndatetime(y,m,d-3,12)', end: 'dyndatetime(y,m,d-3,14)', title: 'Collab', resource: 4 },
        { start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,16)', title: 'Retro', resource: 4 },
        { start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,16)', title: 'Feedback', resource: 4 },
        { start: 'dyndatetime(y,m,d,10)', end: 'dyndatetime(y,m,d,13)', title: 'Session', resource: 4 },
        { start: 'dyndatetime(y,m,d+1,10)', end: 'dyndatetime(y,m,d+1,12)', title: 'Testing', resource: 4 },
        { start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,12)', title: 'Stand-up', resource: 4 },
        { start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,15)', title: 'Rollout', resource: 4 },
        { start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,13)', title: 'Stand-up', resource: 5 },
        { start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,12)', title: 'Review', resource: 5 },
        { start: 'dyndatetime(y,m,d-1,11)', end: 'dyndatetime(y,m,d-1,13)', title: 'Design', resource: 5 },
        { start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,17)', title: 'Sprint', resource: 5 },
        { start: 'dyndatetime(y,m,d+1,16)', end: 'dyndatetime(y,m,d+1,18)', title: 'Demo', resource: 5 },
        { start: 'dyndatetime(y,m,d+2,15)', end: 'dyndatetime(y,m,d+2,17)', title: 'Retro', resource: 5 },
        { start: 'dyndatetime(y,m,d+3,12)', end: 'dyndatetime(y,m,d+3,14)', title: 'Review', resource: 5 },
        { start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,16)', title: 'Retro', resource: 6 },
        { start: 'dyndatetime(y,m,d-2,13)', end: 'dyndatetime(y,m,d-2,15)', title: 'Update', resource: 6 },
        { start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,11)', title: 'Meeting', resource: 6 },
        { start: 'dyndatetime(y,m,d,8)', end: 'dyndatetime(y,m,d,10)', title: 'Stand-up', resource: 6 },
        { start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,16)', title: 'Call', resource: 6 },
        { start: 'dyndatetime(y,m,d+2,9)', end: 'dyndatetime(y,m,d+2,11)', title: 'Update', resource: 6 },
        { start: 'dyndatetime(y,m,d+3,16)', end: 'dyndatetime(y,m,d+3,18)', title: 'Strategy', resource: 6 },
      ];

      var myEvents = [
        { start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,11)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,12)', title: 'Demo' },
        { start: 'dyndatetime(y,m,d+3,8)', end: 'dyndatetime(y,m,d+3,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,16)', title: 'Strategy' },
        { start: 'dyndatetime(y,m,d+4,9)', end: 'dyndatetime(y,m,d+4,11)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d+4,13)', end: 'dyndatetime(y,m,d+4,15)', title: 'Integration' },
        { start: 'dyndatetime(y,m,d+5,10)', end: 'dyndatetime(y,m,d+5,12)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+6,12)', end: 'dyndatetime(y,m,d+6,14)', title: 'Planning' },
        { start: 'dyndatetime(y,m,d+7,11)', end: 'dyndatetime(y,m,d+7,13)', title: 'Review' },
        { start: 'dyndatetime(y,m,d+8,15)', end: 'dyndatetime(y,m,d+8,17)', title: 'Sync' },
        { start: 'dyndatetime(y,m,d+8,10)', end: 'dyndatetime(y,m,d+8,12)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d+9,10)', end: 'dyndatetime(y,m,d+9,12)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d+10,14)', end: 'dyndatetime(y,m,d+10,16)', title: 'Collab' },
        { start: 'dyndatetime(y,m,d+11,8)', end: 'dyndatetime(y,m,d+11,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d+12,9)', end: 'dyndatetime(y,m,d+12,11)', title: 'Meeting' },
        { start: 'dyndatetime(y,m,d+13,10)', end: 'dyndatetime(y,m,d+13,12)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d+14,15)', end: 'dyndatetime(y,m,d+14,17)', title: 'Review' },
        { start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,12)', title: 'Planning' },
        { start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,17)', title: 'Talk' },
        { start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,11)', title: 'Stand-up' },
        { start: 'dyndatetime(y,m,d-4,14)', end: 'dyndatetime(y,m,d-4,16)', title: 'Retrospective' },
        { start: 'dyndatetime(y,m,d-5,8)', end: 'dyndatetime(y,m,d-5,10)', title: 'Kickoff' },
        { start: 'dyndatetime(y,m,d-6,15)', end: 'dyndatetime(y,m,d-6,17)', title: 'Review' },
        { start: 'dyndatetime(y,m,d-7,13)', end: 'dyndatetime(y,m,d-7,15)', title: 'Collab' },
        { start: 'dyndatetime(y,m,d-8,9)', end: 'dyndatetime(y,m,d-8,11)', title: 'Retro' },
        { start: 'dyndatetime(y,m,d-9,16)', end: 'dyndatetime(y,m,d-9,18)', title: 'Discussion' },
        { start: 'dyndatetime(y,m,d-10,14)', end: 'dyndatetime(y,m,d-10,16)', title: 'Update' },
        { start: 'dyndatetime(y,m,d-11,10)', end: 'dyndatetime(y,m,d-11,12)', title: 'Sprint' },
        { start: 'dyndatetime(y,m,d-12,13)', end: 'dyndatetime(y,m,d-12,15)', title: 'Onboarding' },
        { start: 'dyndatetime(y,m,d-13,9)', end: 'dyndatetime(y,m,d-13,11)', title: 'Strategy' },
        { start: 'dyndatetime(y,m,d-14,8)', end: 'dyndatetime(y,m,d-14,10)', title: 'Meeting' },
      ];

      var myView = {
        schedule: { type: 'month', startTime: '08:00', endTime: '20:00', allDay: false },
      };

      var myCalendar = $('#demo-customize-scheduler-column-width')
        .mobiscroll()
        .eventcalendar({
          cssClass: 'mds-col-width-small',
          data: myResEvents,
          groupBy: 'date',
          resources: myResources,
          view: myView,
        })
        .mobiscroll('getInst');

      $('input[name="mds-custom-width-options"]').on('change', function () {
        myCalendar.setOptions({ cssClass: 'mds-col-width-' + $(this).val() });
        myCalendar.navigate(new Date());
      });

      $('input[name="mds-custom-width-resources-toggle"]').on('change', function () {
        myCalendar.setOptions({
          resources: $(this).val() === 'on' ? myResources : [],
          data: $(this).val() === 'on' ? myResEvents : myEvents,
        });
        myCalendar.navigate(new Date());
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-full-height">
  <div class="mbsc-flex-col mds-full-height">
    <div mbsc-segmented-group class="mbsc-flex-none">
      <label>
        <input type="radio" mbsc-segmented name="mds-custom-width-options" value="small" checked>
        50px
      </label>
      <label>
        <input type="radio" mbsc-segmented name="mds-custom-width-options" value="medium">
        100px
      </label>
      <label>
        <input type="radio" mbsc-segmented name="mds-custom-width-options" value="large">
        150px
      </label>
    </div>
    <div mbsc-segmented-group class="mbsc-flex-none">
      <label>
        <input type="radio" mbsc-segmented name="mds-custom-width-resources-toggle" value="on" checked>
        With resources
      </label>
      <label>
        <input type="radio" mbsc-segmented name="mds-custom-width-resources-toggle" value="off">
        Without resources
      </label>
    </div>
    <div id="demo-customize-scheduler-column-width"></div>
  </div>
</div>
`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-full-height {
  height: 100%;
}

.mds-col-width-small .mbsc-schedule-col-width {
  width: 50px;
} 

.mds-col-width-medium .mbsc-schedule-col-width {
  width: 100px;
}

.mds-col-width-large .mbsc-schedule-col-width {
  width: 150px;
}
`,
};
