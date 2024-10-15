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
      $('#demo-agenda-empty')
        .mobiscroll()
        .eventcalendar({
          // context,
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'week' },
          },
          data: [
            {
              title: 'Zumba Class',
              start: 'dyndatetime(y,m,d-7,17)',
              end: 'dyndatetime(y,m,d-7,19)',
            },
            {
              title: 'Silent Party',
              start: 'dyndatetime(y,m,d-7,21)',
              end: 'dyndatetime(y,m,d-7,23)',
            },
            {
              title: 'Garbage Collection',
              start: 'dyndatetime(y,m,d+7,15)',
              end: 'dyndatetime(y,m,d+7,17)',
            },
            {
              title: 'Karaoke Night',
              start: 'dyndatetime(y,m,d+7,20)',
              end: 'dyndatetime(y,m,d+7,22)',
            },
          ],
          renderAgendaEmpty: function () {
            return (
              '<div class="mbsc-align-center mbsc-padding">' +
              '<img class="mds-empty-img" src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" alt="Empty can" />' +
              '<div class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Looks like this can is empty</div>' +
              '<button mbsc-button id="demo-agenda-empty-add" data-color="primary" data-variant="outline">Add something to it</button>' +
              '<div class="mds-empty-txt mbsc-txt-xs">Illustration by' +
              '<a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from ' +
              '<a href="https://icons8.com/illustrations">Ouch!</a></div>' +
              '</div>'
            );
          },
        })
        .mobiscroll('getInst');

      $('#demo-agenda-empty').on('click', function (e) {
        if (e.target.id === 'demo-agenda-empty-add') {
          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'Add button clicked',
          });
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-agenda-empty"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-empty-img {
  width: 150px;
  margin: 50px 0;
}

.mds-empty-txt {
  padding-top: 150px;
}
  `,
};
