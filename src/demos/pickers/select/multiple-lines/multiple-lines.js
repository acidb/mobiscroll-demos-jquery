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
      $('#demo-multiple-lines')
        .mobiscroll()
        .select({
          display: 'anchored',
          itemHeight: 60,
          data: [
            {
              text: 'Percentage of assets covered by systematic risk assessments (>99)',
              value: 1,
            },
            {
              text: 'Number of personal vacancies in the security roles required for ISMS (Nil)',
              value: 2,
            },
            {
              text: 'Time taken to grant, change and remove access privileges (Max. 2 hours)',
              value: 3,
            },
            {
              text: 'Percentage of agents covered by an effective security awareness program (100%)',
              value: 4,
            },
            {
              text: 'Number of security access violations (<2)',
              value: 5,
            },
            {
              text: 'Number of emergency changes (<5)',
              value: 6,
            },
            {
              text: 'Number of security incidents involving malicious code (Max. 2)',
              value: 7,
            },
            {
              text: 'Number of systems where security requirements are not met (Max. 2)',
              value: 8,
            },
            {
              text: 'Average turnaround time of incidents (Max. 2 hours)',
              value: 9,
            },
            {
              text: 'Number of pending actions to meet response and recovery requirements (Max. 5)',
              value: 10,
            },
            {
              text: 'Number of scheduled internal audits not done (Max. 1)',
              value: 11,
            },
            {
              text: 'Number of scheduled penetration tests not done (Max. 1)',
              value: 12,
            },
            {
              text: 'Number of overdue actions arising out of audit reports (Max. 5)',
              value: 13,
            },
            {
              text: 'Number of changes not carried out as per change control procedure (Max. 1)',
              value: 14,
            },
          ],
          renderItem: function (item) {
            return '<div class="md-multiple-lines-item"><span class="md-multiple-lines-text">' + item.display + '</span></div>';
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    Multiline
    <input mbsc-input id="demo-multiple-lines" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
</label>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-multiple-lines-item {
    font-size: 14px;
    white-space: initial;
    display: flex;
    height: 60px;
    line-height: normal;
}

.md-multiple-lines-text {
    margin-top: auto;
    margin-bottom: auto;
}
  `,
};
