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
      var myRange = $('#range')
        .mobiscroll()
        .datepicker({
          controls: ['datetime'],
          select: 'range',
          startInput: '#start',
          endInput: '#end',
        })
        .mobiscroll('getInst');

      $('#allday').change(function () {
        var control = this.checked ? 'date' : 'datetime';
        myRange.setOptions({
          controls: [control],
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<label>
    <input mbsc-input data-label="Title" type="text" placeholder="Name of the event" />
</label>
<label>
    <input mbsc-input data-label="Location" type="text" placeholder="Where will it be?" />
</label>
<label>
    <input id="allday" data-label="All day" type="checkbox" mbsc-switch />
</label>
<div id="range"></div>
<label>
    <input id="start" mbsc-input data-label="Start" placeholder="Event start" />
</label>
<label>
    <input id="end" mbsc-input data-label="End" placeholder="Event end" />
</label>
<label>
    Show as busy
    <input type="radio" mbsc-segmented name="static-adding-event" value="busy" checked>
</label>
<label>
    Show as free
    <input type="radio" mbsc-segmented name="static-adding-event" value="free">
</label>
<label>
    <textarea mbsc-textarea data-label="Notes" placeholder="Enter notes, URL, comments"></textarea>
</label>
  `,
};
