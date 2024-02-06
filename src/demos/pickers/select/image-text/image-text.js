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
      $('#demo-image-text')
        .mobiscroll()
        .select({
          display: 'anchored',
          itemHeight: 50,
          data: [
            {
              text: 'Barry Lyon',
              value: '42976',
              avatar: 'm1',
            },
            {
              text: 'Hortense Tinker',
              value: '45290',
              avatar: 'f1',
            },
            {
              text: 'Carl Hambledon',
              value: '76208',
              avatar: 'm2',
            },
            {
              text: 'Arlene Sharman',
              value: '47883',
              avatar: 'f2',
            },
            {
              text: 'Keila Delores',
              value: '33379',
              avatar: 'f3',
            },
            {
              text: 'Paula Bush',
              value: '16076',
              avatar: 'f4',
            },
            {
              text: 'Gene Cortez',
              value: '62551',
              avatar: 'm3',
            },
            {
              text: 'Pete Nichols',
              value: '20929',
              avatar: 'm4',
            },
          ],
          selectMultiple: true,
          renderItem: function (item) {
            return (
              '<div class="md-image-text-item">' +
              '<img class="md-image-text-avatar" src="https://img.mobiscroll.com/demos/' +
              item.data.avatar +
              '.png" />' +
              '<div class="md-image-text-name">' +
              item.display +
              '</div>'
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-400" mbsc-page>
    <!--/hidden-->
    <label>
        Users
        <input mbsc-input id="demo-image-text" value="Barry Lyon, Hortense Tinker" data-dropdown="true" data-tags="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
    </label>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-image-text-item {
    position: relative;
    padding: 15px 0 15px 50px;
    text-align: left;
    line-height: normal;
}

.md-image-text-avatar {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 5px;
}
  `,
};
