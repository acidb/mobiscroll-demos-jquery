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
      $('#demo-item-templating')
        .mobiscroll()
        .select({
          display: 'anchored',
          itemHeight: 64,
          data: [
            {
              text: 'Mercury – Act 1',
              year: '2021',
              artist: 'Imagine Dragons',
              value: '56243',
              img: 'Mercury_Act_1',
            },
            {
              text: 'Divide',
              year: '2017',
              artist: 'Ed Sheeran',
              value: '18659',
              img: 'Divide',
            },
            {
              text: 'Evolution',
              year: '2018',
              artist: 'Disturbed',
              value: '88459',
              img: 'Evolution',
            },
            {
              text: 'Future Nostalgia',
              year: '2020',
              artist: 'Dua Lipa',
              value: '65422',
              img: 'Future_Nostalgia',
            },
            {
              text: 'Blue Banisters',
              year: '2021',
              artist: 'Lana Del Rey',
              value: '67111',
              img: 'Blue_Banisters',
            },
            {
              text: 'Human',
              year: '2021',
              artist: 'OneRepublic',
              value: '60589',
              img: 'Human',
            },
            {
              text: 'Kamikaze',
              year: '2018',
              artist: 'Eminem',
              value: '42122',
              img: 'Kamikaze',
            },
            {
              text: 'Simulation Theory',
              year: '2018',
              artist: 'Muse',
              value: '80040',
              img: 'Simulation_Theory',
            },
            {
              text: 'The Nothing',
              year: '2019',
              artist: 'Korn',
              value: '46611',
              img: 'Nothing',
            },
          ],
          renderItem: function (item) {
            var data = item.data;
            return (
              '<div class="md-item-template">' +
              '<img class="md-item-template-img" src="https://img.mobiscroll.com/demos/' +
              data.img +
              '.png" />' +
              '<div class="md-item-template-title">' +
              '<span>' +
              data.text +
              '</span>' +
              '<span class="md-item-template-year"> (' +
              data.year +
              ')</span>' +
              '</div>' +
              '<div class="md-item-template-artist">by ' +
              data.artist +
              '</div>' +
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
        Albums
        <input mbsc-input id="demo-item-templating" data-dropdown="true" data-input-style="box" data-label-style="stacked" placeholder="Please select..." />
    </label>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-item-template {
    padding: 10px 10px 10px 55px;
    position: relative;
    text-align: left;
    line-height: normal;
}

.md-item-template-img {
    position: absolute;
    left: 0;
    width: 45px;
    height: 45px;
}

.md-item-template-title {
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
}

.md-item-template-artist {
    font-size: 14px;
    opacity: .8;
}

.mbsc-scroller-wheel-item-2d .md-item-template {
    transform: scale(1.1);
}
  `,
};
