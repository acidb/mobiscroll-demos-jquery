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
      var calInst = $('#demo-localization')
        .mobiscroll()
        .eventcalendar({
          view: {
            calendar: { type: 'week' },
            agenda: { type: 'day' },
          },
        })
        .mobiscroll('getInst');

      $('#dm-localization-select').change(function () {
        var la = $(this).val();

        calInst.setOptions({
          locale: mobiscroll.locale[la],
        });
      });

      $.getJSON(
        'https://trial.mobiscroll.com/events/?vers=5&callback=?',
        function (events) {
          calInst.setEvents(events);
        },
        'jsonp',
      );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-600" mbsc-page>
    <!--/hidden-->
    <div class="md-localization">
        <div class="mbsc-grid">
            <div class="mbsc-row mbsc-justify-content-center">
                <div class="mbsc-col-sm-8">
                    <label>
                        <select mbsc-dropdown id="dm-localization-select" data-input-style="box">
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="bg">Bulgarian</option>
                            <option value="ca">Català</option>
                            <option value="cs">Cestina</option>
                            <option value="zh">Chinese</option>
                            <option value="hr">Croatian</option>
                            <option value="da">Dansk</option>
                            <option value="de">Deutsch</option>
                            <option value="en-UK">English (UK)</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="el">Greek</option>
                            <option value="in">Hindi</option>
                            <option value="it">Italiano</option>
                            <option value="ja">Japanese</option>
                            <option value="ko">Korean</option>
                            <option value="lt">Lietuvių</option>
                            <option value="hu">Magyar</option>
                            <option value="nl">Nederlands</option>
                            <option value="no">Norsk</option>
                            <option value="pl">Polski</option>
                            <option value="pt-PT">Português Europeu</option>
                            <option value="pt-BR">Pt. Brasileiro</option>
                            <option value="ro">Româna</option>
                            <option value="sr">Serbian</option>
                            <option value="sk">Slovencina</option>
                            <option value="fi">Suomi</option>
                            <option value="sv">Svenska</option>
                            <option value="th">Thai</option>
                            <option value="tr">Türkçe</option>
                            <option value="ua">Ukrainian</option>
                            <option value="vi">Vietnamese</option>
                            <option value="ru">Русский</option>
                            <option value="ru-UA">Русский (UA)</option>
                            <option value="he">עברית</option>
                            <option value="fa">فارسی</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
        <div id="demo-localization"></div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
