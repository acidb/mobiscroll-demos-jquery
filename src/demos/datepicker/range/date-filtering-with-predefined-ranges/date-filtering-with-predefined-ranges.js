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
      var formatDate = mobiscroll.formatDate;
      var startDate = 'dyndatetime(y,m,d)';
      var endDate = 'dyndatetime(y,m,d + 6)';
      var $dateInput = $('#date-filtering');
      var $startInput = $('#date-filtering-start');
      var $endInput = $('#date-filtering-end');

      var now = new Date();
      var day = now.getDay();
      var monday = now.getDate() - day + (day === 0 ? -6 : 1);

      var select = $('#date-filtering-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('date-select-input'),
          responsive: {
            xsmall: {
              touchUi: true,
            },
            small: {
              touchUi: false,
            },
          },
          onChange: function (args) {
            var selected = args.value;

            if (selected === 'custom') {
              disableInputs(false);
            } else {
              disableInputs(true);

              switch (selected) {
                case 'today':
                  calendar.setVal(['dyndatetime(y,m,d)', 'dyndatetime(y,m,d)']);
                  break;
                case 'yesterday':
                  calendar.setVal(['dyndatetime(y,m,d-1)', 'dyndatetime(y,m,d-1)']);
                  break;
                case 'last-week':
                  calendar.setVal([
                    new Date(now.getFullYear(), now.getMonth(), monday - 7),
                    new Date(now.getFullYear(), now.getMonth(), monday - 1),
                  ]);
                  break;
                case 'last-month':
                  calendar.setVal(['dyndatetime(y,m-1,1)', 'dyndatetime(y,m,0)']);
                  break;
                case 'last-7-days':
                  calendar.setVal(['dyndatetime(y,m,d-6)', 'dyndatetime(y,m,d)']);
                  break;
                case 'last-30-days':
                  calendar.setVal(['dyndatetime(y,m,d-29)', 'dyndatetime(y,m,d)']);
                  break;
              }
            }
          },
        })
        .mobiscroll('getInst');

      function disableInputs(disable) {
        var startInst = mobiscroll.getInst($startInput[0]);
        var endInst = mobiscroll.getInst($endInput[0]);

        startInst.setOptions({ disabled: disable });
        endInst.setOptions({ disabled: disable });
      }

      var calendar = $('#date-filtering-calendar')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          showRangeLabels: false,
          pages: 'auto',
          startInput: '#date-filtering-start',
          endInput: '#date-filtering-end',
          returnFormat: 'iso8601',
          showOnClick: false,
          showOnFocus: false,
          onInit: function (event, inst) {
            inst.setVal([startDate, endDate]);
            setInputValue(startDate, endDate, inst.s.dateFormat);
          },
          onChange: function () {
            disableInputs(false);
            select.setVal('custom');
          },
        })
        .mobiscroll('getInst');

      var popup = $('#date-filtering-popup')
        .mobiscroll()
        .popup({
          responsive: {
            xsmall: {
              display: 'bottom',
              touchUi: true,
              buttons: [
                {
                  text: 'Apply',
                  handler: function () {
                    var date = calendar.getVal();

                    setInputValue(date[0], date[1] || date[0], calendar.s.dateFormat);
                    popup.close();
                  },
                },
                'cancel',
              ],
            },
            custom: {
              breakpoint: 559,
              buttons: [],
              display: 'anchored',
              anchor: $dateInput[0],
              anchorAlign: 'start',
              touchUi: false,
              scrollLock: false,
              showArrow: false,
              maxWidth: 920,
            },
          },
        })
        .mobiscroll('getInst');

      function setInputValue(start, end, dateFormat) {
        $dateInput.val(formatDate(dateFormat, new Date(start)) + ' - ' + formatDate(dateFormat, new Date(end)));
      }

      $dateInput.on('click', function () {
        popup.open();
      });

      $('.apply-button').on('click', function () {
        var date = calendar.getVal();

        setInputValue(date[0], date[1] || date[0], calendar.s.dateFormat);
        popup.close();
      });

      $('.cancel-button').on('click', function () {
        popup.close();
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<!--hidden-->
<div class="demo-inline demo-max-width-400" mbsc-page>
    <!--/hidden-->
    <div class="mbsc-form-group">
        <label>
            <input id="date-filtering" mbsc-input data-input-style="box" readonly />
        </label>
    </div>
    <div>
        <div id="date-filtering-popup" class="demo-date-filtering-popup">
            <div class="mbsc-grid mbsc-no-padding">
                <div class="mbsc-row">
                    <div class="mbsc-col-sm-4 mbsc-push-sm-8 demo-date-filtering-dates">
                        <div class="demo-date-filtering-inputs">
                            <label>
                                Date range
                                <input mbsc-input id="date-select-input" data-dropdown="true" data-input-style="box" data-label-style="stacked" />
                            </label>
                            <select id="date-filtering-select">
                                <option value="custom" selected>Custom</option>
                                <option value="today">Today</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="last-week">Last week</option>
                                <option value="last-month">Last month</option>
                                <option value="last-7-days">Last 7 days</option>
                                <option value="last-30-days">Last 30 days</option>
                            </select>
                            <label class="demo-date-filtering-range-input">
                                Start
                                <input id="date-filtering-start" mbsc-input data-input-style="box" data-label-style="stacked" />
                            </label>
                            <label class="demo-date-filtering-range-input">
                                End
                                <input id="date-filtering-end" mbsc-input data-input-style="box" data-label-style="stacked" />
                            </label>
                        </div>
                        <div class="demo-date-filtering-desktop-buttons mbsc-button-group-justified">
                            <button class="apply-button" mbsc-button>Apply</button>
                            <button class="cancel-button" mbsc-button>Cancel</button>
                        </div>
                    </div>
                    <div class="mbsc-col-sm-8 mbsc-pull-sm-4">
                        <div id="date-filtering-calendar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--hidden-->
</div>
<!--/hidden-->
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.demo-date-filtering-popup .mbsc-ios.mbsc-datepicker-inline {
    border: none;
    border-radius: 4px;
    overflow: hidden;
}

.demo-date-filtering-popup .mbsc-textfield-wrapper-box {
    margin-top: 0;
    margin-right: 0;
}

.demo-date-filtering-dates {
    display: flex;
    flex-direction: column;
}

.demo-date-filtering-inputs {
    flex: 1;
}

.demo-date-filtering-desktop-buttons.mbsc-button-group-justified,
.demo-date-filtering-desktop-buttons.mbsc-button-group-justified button {
    margin-bottom: 0;
}

@media (max-width: 575px) {
    .demo-date-filtering-desktop-buttons {
        display: none;
    }
    .demo-date-filtering-popup .mbsc-textfield-wrapper-box {
        margin-left: 0;
    }
}
  `,
};
