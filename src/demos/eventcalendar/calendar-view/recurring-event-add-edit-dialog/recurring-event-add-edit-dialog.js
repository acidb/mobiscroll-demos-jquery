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
      function getMonthDays(month) {
        var values = [];
        for (var i = 1; i <= MAX_MONTH_DAYS[month - 1]; i++) {
          values.push(i);
        }
        return values;
      }

      function getRecurrenceText() {
        var text;

        switch (recurrenceRepeat) {
          case 'daily':
            text = recurrenceInterval > 1 ? 'Every ' + recurrenceInterval + ' days' : 'Daily';
            break;
          case 'weekly':
            var weekDays = recurrenceWeekDays.split(',');
            var weekDaysText = weekDays
              .map(function (weekDay) {
                return DAY_NAMES[DAY_NAMES_MAP[weekDay]];
              })
              .join(', ');
            text = recurrenceInterval > 1 ? 'Every ' + recurrenceInterval + ' weeks' : 'Weekly';
            text += ' on ' + weekDaysText;
            break;
          case 'monthly':
            text = recurrenceInterval > 1 ? 'Every ' + recurrenceInterval + ' months' : 'Monthly';
            text += ' on day ' + recurrenceDay;
            break;
          case 'yearly':
            text = recurrenceInterval > 1 ? 'Every ' + recurrenceInterval + ' years' : 'Annualy';
            text += ' on ' + MONTH_NAMES[recurrenceMonth - 1] + ' ' + recurrenceDay;
            break;
        }

        switch (recurrenceCondition) {
          case 'until':
            text += ' until ' + mobiscroll.formatDate('MMMM D, YYYY', new Date(recurrenceUntil));
            break;
          case 'count':
            text += ', ' + recurrenceCount + ' times';
            break;
        }

        return text;
      }

      function getRecurrenceRule() {
        var d = new Date(eventStart);
        var weekNr = Math.ceil(d.getDate() / 7);
        var weekDay = DAY_NAMES_SHORT[d.getDay()];
        var month = d.getMonth() + 1;
        var monthDay = d.getDate();

        switch (eventRecurrence) {
          // Predefined recurring rules
          case 'daily':
            return { repeat: 'daily' };
          case 'weekly':
            return { repeat: 'weekly', weekDays: weekDay };
          case 'monthly':
            return { repeat: 'monthly', day: monthDay };
          case 'monthly-pos':
            return { repeat: 'monthly', weekDays: weekDay, pos: weekNr };
          case 'yearly':
            return { repeat: 'yearly', day: monthDay, month: month };
          case 'yearly-pos':
            return { repeat: 'yearly', weekDays: weekDay, month: month, pos: weekNr };
          case 'weekday':
            return { repeat: 'weekly', weekDays: 'MO,TU,WE,TH,FR' };
          // Custom recurring rule
          case 'custom':
          case 'custom-value':
            var rule = {
              repeat: recurrenceRepeat,
              interval: recurrenceInterval,
            };
            switch (recurrenceRepeat) {
              case 'weekly':
                rule.weekDays = recurrenceWeekDays;
                break;
              case 'monthly':
                rule.day = recurrenceDay;
                break;
              case 'yearly':
                rule.day = recurrenceDay;
                rule.month = recurrenceMonth;
                break;
            }
            switch (recurrenceCondition) {
              case 'until':
                rule.until = recurrenceUntil;
                break;
              case 'count':
                rule.count = recurrenceCount;
                break;
            }
            return rule;
          default:
            return null;
        }
      }

      function getRecurrenceTypes(date, recurrence) {
        var d = new Date(date);
        var weekDay = DAY_NAMES[d.getDay()];
        var weekNr = Math.ceil(d.getDate() / 7);
        var month = MONTH_NAMES[d.getMonth()].text;
        var monthDay = d.getDate();
        var ordinal = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth' };
        var data = [
          { value: 'norepeat', text: 'Does not repeat' },
          { value: 'daily', text: 'Daily' },
          { value: 'weekly', text: 'Weekly on ' + weekDay },
          { value: 'monthly', text: 'Monthly on day ' + monthDay },
          { value: 'monthly-pos', text: 'Monthly on the ' + ordinal[weekNr] + ' ' + weekDay },
          { value: 'yearly', text: 'Annually on ' + month + ' ' + monthDay },
          { value: 'yearly-pos', text: 'Annually on the ' + ordinal[weekNr] + ' ' + weekDay + ' of ' + month },
          { value: 'weekday', text: 'Every weekday (Monday to Friday)' },
          { value: 'custom', text: 'Custom' },
        ];
        if (recurrence === 'custom-value') {
          data.push({ value: 'custom-value', text: getRecurrenceText() });
        }
        return data;
      }

      function getEventRecurrence(event) {
        var recurringRule = event.recurring;
        if (recurringRule) {
          var repeat = recurringRule.repeat;
          if (recurringRule.interval > 1 || recurringRule.count || recurringRule.until) {
            return 'custom-value';
          }
          switch (repeat) {
            case 'weekly':
              var weekDays = recurringRule.weekDays || '';
              if (weekDays === 'MO,TU,WE,TH,FR') {
                return 'weekday';
              }
              if (weekDays.split(',').length > 1) {
                return 'custom-value';
              }
              break;
            case 'monthly':
            case 'yearly':
              if (recurringRule.pos) {
                return repeat + '-pos';
              }
              break;
            default:
              return repeat;
          }
        }
        return 'norepeat';
      }

      function toggleDatetimePicker(allDay) {
        // Toggle between date and datetime picker
        eventStartEndPicker.setOptions({
          controls: allDay ? ['date'] : ['datetime'],
          responsive: allDay
            ? { medium: { controls: ['calendar'], touchUi: false } }
            : { medium: { controls: ['calendar', 'time'], touchUi: false } },
        });
      }

      function toggleRecurrenceEditor(recurrence) {
        if (recurrence === 'custom') {
          $eventRecurrenceEditor.show();
        } else {
          $eventRecurrenceEditor.hide();
        }
      }

      function toggleRecurrenceText(repeat) {
        $('.md-recurrence-text').each(function () {
          var $cont = $(this);
          if ($cont.hasClass('md-recurrence-' + repeat)) {
            $cont.show();
          } else {
            $cont.hide();
          }
        });
      }

      function navigateToEvent(event) {
        var d = new Date(event.start);
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var recurringRule = event.recurring;
        var addMonth = 0;
        var addYear = 0;
        if (recurringRule) {
          var recurringDay = recurringRule.day;
          var recurringMonth = recurringRule.month - 1;
          switch (recurringRule.repeat) {
            case 'monthly':
              if (day > recurringDay) {
                addMonth = recurringRule.interval || 1;
              }
              day = recurringDay;
              break;
            case 'yearly':
              if (month > recurringMonth || (month === recurringMonth - 1 && day > recurringDay)) {
                addYear = recurringRule.interval || 1;
              }
              day = recurringDay;
              month = recurringMonth;
              break;
          }
        }
        calendar.navigate(new Date(year + addYear, month + addMonth, day, d.getHours()));
      }

      function updateRecurringEvent() {
        var editFromPopup = addEditPopup.isVisible();

        var updatedEvent = {
          title: eventTitle,
          description: eventDescription,
          allDay: eventAllDay,
          color: eventColor,
          start: eventStart,
          end: eventEnd,
        };

        if (recurrenceEditMode !== 'current') {
          updatedEvent.id = eventId;
          updatedEvent.recurring = getRecurrenceRule();
          updatedEvent.recurringException = eventRecurringException;
        }

        var result = mobiscroll.updateRecurringEvent(
          originalRecurringEvent,
          eventOccurrence,
          editFromPopup ? null : newEvent,
          editFromPopup ? updatedEvent : null,
          recurrenceEditMode,
        );

        if (result.newEvent) {
          calendar.addEvent(result.newEvent);
        }

        calendar.updateEvent(result.updatedEvent);
      }

      function deleteRecurringEvent() {
        switch (recurrenceEditMode) {
          case 'following':
            var d = new Date(eventStart);
            originalRecurringEvent.recurring.until = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            calendar.updateEvent(originalRecurringEvent);
            break;
          case 'all':
            calendar.removeEvent(originalRecurringEvent);
            break;
          default:
            eventRecurringException.push(eventStart);
            originalRecurringEvent.recurringException = eventRecurringException;
            calendar.updateEvent(originalRecurringEvent);
        }
      }

      // Fills the popup with the event's data
      function fillPopup(event) {
        // Load event properties
        eventId = event.id;
        eventTitle = event.title || '';
        eventDescription = event.description || '';
        eventAllDay = event.allDay;
        eventStart = event.start;
        eventEnd = event.end;
        eventColor = event.color;
        eventRecurringException = event.recurringException || [];
        eventRecurrence = getEventRecurrence(event);

        // Load recurrence rule properties, with default values
        var recurringRule = event.recurring || {};
        recurrenceRepeat = recurringRule.repeat || 'daily';
        recurrenceInterval = recurringRule.interval || 1;
        recurrenceCondition = recurringRule.until ? 'until' : recurringRule.count ? 'count' : 'never';
        recurrenceMonth = recurringRule.month || 1;
        recurrenceDay = recurringRule.day || 1;
        recurrenceWeekDays = recurringRule.weekDays || 'SU';
        recurrenceCount = recurringRule.count || 10;
        recurrenceUntil = recurringRule.until;

        // Set event fields
        $eventTitle.mobiscroll('getInst').value = eventTitle;
        $eventDescription.mobiscroll('getInst').value = eventDescription;
        $eventAllDay.mobiscroll('getInst').checked = eventAllDay;
        eventStartEndPicker.setVal([eventStart, eventEnd]);
        eventRecurrenceSelect.setOptions({ data: getRecurrenceTypes(eventStart, eventRecurrence) });
        eventRecurrenceSelect.setVal(eventRecurrence);
        toggleDatetimePicker(eventAllDay);
        toggleRecurrenceEditor(eventRecurrence);

        // Set custom recurring rule field values
        $recurrenceInterval.val(recurrenceInterval);
        $recurrenceCount.val(recurrenceCount);
        recurrenceMonthSelect.setVal(recurrenceMonth);
        recurrenceDaySelect.setVal(recurrenceDay);
        recurrenceMonthDaySelect.setVal(recurrenceDay);
        recurrenceUntilDatepicker.setVal(recurrenceUntil);
        $('#recurrence-repeat-' + recurrenceRepeat).mobiscroll('getInst').checked = true;
        $('#recurrence-condition-' + recurrenceCondition).mobiscroll('getInst').checked = true;
        $recurrenceWeekDays.each(function () {
          $(this).mobiscroll('getInst').checked = recurrenceWeekDays.indexOf(this.value) !== -1;
        });
        toggleRecurrenceText(recurrenceRepeat);
      }

      function createAddPopup(event, target) {
        var success = false;

        // Hide delete button inside add popup
        $eventDeleteButton.parent().hide();

        // Set popup header text and buttons
        addEditPopup.setOptions({
          anchor: target,
          headerText: 'New event',
          buttons: [
            'cancel',
            {
              text: 'Add',
              keyCode: 'enter',
              handler: function () {
                var newEvent = {
                  id: eventId,
                  title: eventTitle,
                  description: eventDescription,
                  allDay: eventAllDay,
                  start: eventStart,
                  end: eventEnd,
                  recurring: getRecurrenceRule(),
                };
                calendar.updateEvent(newEvent);
                navigateToEvent(newEvent);
                success = true;
                addEditPopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            // Remove event if popup is cancelled
            if (!success) {
              calendar.removeEvent(event);
            }
          },
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createEditPopup(event, target) {
        // Show delete button inside edit popup
        $eventDeleteButton.parent().show();

        editedEvent = event;
        originalRecurringEvent = event.recurring ? event.original : null;
        eventOccurrence = event;

        // Set popup header text and buttons
        addEditPopup.setOptions({
          headerText: 'Edit event',
          anchor: target,
          buttons: [
            'cancel',
            {
              text: 'Save',
              keyCode: 'enter',
              handler: function () {
                if (originalRecurringEvent) {
                  // TODO: don't allow current update if recurring rule is changed
                  createRecurrenceEditPopup(false);
                } else {
                  var updatedEvent = {
                    id: eventId,
                    title: eventTitle,
                    description: eventDescription,
                    allDay: eventAllDay,
                    start: eventStart,
                    end: eventEnd,
                    recurring: getRecurrenceRule(),
                  };
                  calendar.updateEvent(updatedEvent);
                  navigateToEvent(updatedEvent);
                  addEditPopup.close();
                }
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
        });

        fillPopup(event);
        addEditPopup.open();
      }

      function createRecurrenceEditPopup(isDelete) {
        $recurrenceEditModeText.text(isDelete ? 'Delete' : 'Edit');
        recurrenceDelete = isDelete;
        recurrenceEditModePopup.open();
      }

      var MAX_MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var DAY_NAMES_SHORT = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
      var DAY_NAMES_MAP = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };
      var MONTH_NAMES = [
        { value: 1, text: 'January' },
        { value: 2, text: 'February' },
        { value: 3, text: 'March' },
        { value: 4, text: 'April' },
        { value: 5, text: 'May' },
        { value: 6, text: 'June' },
        { value: 7, text: 'July' },
        { value: 8, text: 'August' },
        { value: 9, text: 'September' },
        { value: 10, text: 'October' },
        { value: 11, text: 'November' },
        { value: 12, text: 'December' },
      ];

      var originalRecurringEvent;
      var eventOccurrence;
      var newEvent;
      var editedEvent;

      var eventId;
      var eventTitle;
      var eventDescription;
      var eventAllDay;
      var eventStart;
      var eventEnd;
      var eventColor;
      var eventRecurrence;
      var eventRecurringException;

      var recurrenceRepeat;
      var recurrenceInterval;
      var recurrenceCondition;
      var recurrenceMonth;
      var recurrenceDay;
      var recurrenceWeekDays;
      var recurrenceCount;
      var recurrenceUntil;
      var recurrenceDelete;
      var recurrenceEditMode = 'current';

      var $eventTitle = $('#popup-event-title');
      var $eventDescription = $('#popup-event-description');
      var $eventAllDay = $('#popup-event-all-day');
      var $eventDeleteButton = $('#popup-event-delete');
      var $eventRecurrence = $('#popup-event-recurrence');
      var $eventRecurrenceEditor = $('#popup-event-recurrence-editor');

      var $recurrenceInterval = $('#recurrence-interval');
      var $recurrenceCount = $('#recurrence-count');
      var $recurrenceEditModeText = $('#recurrence-edit-mode-text');
      var $recurrenceWeekDays = $('.md-recurrence-weekdays');

      var myEvents = [
        {
          id: 1,
          start: 'dyndatetime(y,m,21)',
          end: 'dyndatetime(y,m,24)',
          title: 'Alice OFF',
          allDay: true,
          color: '#67ab0d',
        },
        {
          id: 2,
          start: '18:00',
          end: '20:00',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO',
          },
          title: 'Football training',
          allDay: false,
          color: '#fd966a',
        },
        {
          id: 3,
          start: '17:00',
          end: '17:30',
          recurring: {
            repeat: 'monthly',
            day: 1,
          },
          title: 'Rent payment',
          allDay: false,
          color: '#3ea39e',
        },
        {
          id: 4,
          recurring: {
            repeat: 'yearly',
            day: 6,
            month: 5,
          },
          title: 'Dexter BD',
          allDay: true,
          color: '#d00f0f',
        },
      ];

      // Init the event calendar
      var calendar = $('#demo-add-delete-event')
        .mobiscroll()
        .eventcalendar({
          clickToCreate: 'double',
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          view: {
            calendar: { labels: true },
          },
          data: myEvents,
          onEventClick: function (args) {
            createEditPopup(args.event, args.domEvent.currentTarget);
          },
          onEventUpdate: function (args) {
            var event = args.event;
            if (event.recurring) {
              originalRecurringEvent = args.oldEvent;
              eventOccurrence = args.oldEventOccurrence;
              if (args.isDelete) {
                eventRecurringException = originalRecurringEvent.recurringException || [];
                eventStart = eventOccurrence.start;
                createRecurrenceEditPopup(true);
              } else {
                createRecurrenceEditPopup(false);
              }
              return false;
            }
          },
          onEventCreate: function (args) {
            if (args.originEvent) {
              // Store created event on recurring occurrence drag
              newEvent = args.event;
              // Prevent event creation on recurring occurrence drag
              return false;
            }
          },
          onEventCreated: function (args) {
            createAddPopup(args.event, args.target);
          },
        })
        .mobiscroll('getInst');

      // Init event start/end date picker
      var eventStartEndPicker = $('#popup-event-dates')
        .mobiscroll()
        .datepicker({
          controls: ['date'],
          select: 'range',
          startInput: '#popup-event-start',
          endInput: '#popup-event-end',
          showRangeLabels: false,
          touchUi: true,
          responsive: { medium: { touchUi: false } },
          onChange: function (args) {
            var dates = args.value;
            eventStart = dates[0];
            eventEnd = dates[1];
            eventRecurrenceSelect.setOptions({ data: getRecurrenceTypes(eventStart) });
          },
        })
        .mobiscroll('getInst');

      // Init event recurrence select
      var eventRecurrenceSelect = $eventRecurrence
        .mobiscroll()
        .select({
          data: [],
          touchUi: true,
          responsive: { small: { touchUi: false } },
          onChange: function (args) {
            eventRecurrence = args.value;
            toggleRecurrenceEditor(eventRecurrence);
          },
        })
        .mobiscroll('getInst');

      // Init recurring event month day selection for monthly recurrence
      var recurrenceDaySelect = $('#recurrence-day')
        .mobiscroll()
        .select({
          data: getMonthDays(1),
          touchUi: true,
          responsive: { small: { touchUi: false } },
          maxWidth: 80,
          onChange: function (args) {
            recurrenceDay = args.value;
          },
        })
        .mobiscroll('getInst');

      // Init recurring rule month selection for yearly recurrence
      var recurrenceMonthSelect = $('#recurrence-month')
        .mobiscroll()
        .select({
          data: MONTH_NAMES,
          touchUi: true,
          responsive: { small: { touchUi: false } },
          onChange: function (args) {
            recurrenceMonth = args.value;
            var maxDay = MAX_MONTH_DAYS[recurrenceMonth - 1];
            if (recurrenceDay > maxDay) {
              recurrenceMonthDaySelect.setVal(maxDay);
            }
            recurrenceMonthDaySelect.setOptions({ data: getMonthDays(recurrenceMonth) });
          },
        })
        .mobiscroll('getInst');

      // Init recurring event month day selection for yearly recurrence
      var recurrenceMonthDaySelect = $('#recurrence-month-day')
        .mobiscroll()
        .select({
          data: getMonthDays(1),
          touchUi: true,
          responsive: { small: { touchUi: false } },
          maxWidth: 80,
          onChange: function (args) {
            recurrenceDay = args.value;
          },
        })
        .mobiscroll('getInst');

      // Init the until datepicker
      var recurrenceUntilDatepicker = $('#recurrence-until')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          display: 'anchored',
          touchUi: false,
          dateFormat: 'YYYY-MM-DD',
          returnFormat: 'iso8601',
          onChange: function (args) {
            recurrenceUntil = args.value;
          },
          onOpen: function () {
            // Check the until stop condition radio
            recurrenceCondition = 'until';
            $('#recurrence-condition-until').mobiscroll('getInst').checked = true;
          },
        })
        .mobiscroll('getInst');

      // Init popup for event create/edit
      var addEditPopup = $('#demo-add-edit-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          fullScreen: true,
          scrollLock: false,
          height: 500,
          responsive: {
            medium: {
              display: 'anchored',
              width: 510,
              fullScreen: false,
              touchUi: false,
            },
          },
          cssClass: 'md-recurring-event-editor-popup',
        })
        .mobiscroll('getInst');

      // Init recurring edit mode popup
      var recurrenceEditModePopup = $('#demo-recurrence-edit-mode-popup')
        .mobiscroll()
        .popup({
          display: 'bottom',
          contentPadding: false,
          buttons: [
            'cancel',
            {
              text: 'Ok',
              keyCode: 'enter',
              handler: function () {
                if (recurrenceDelete) {
                  deleteRecurringEvent();
                } else {
                  updateRecurringEvent();
                }
                addEditPopup.close();
                recurrenceEditModePopup.close();
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          onClose: function () {
            // Reset edit mode to current
            recurrenceEditMode = 'current';
            $('#recurrence-edit-mode-current').mobiscroll('getInst').checked = true;
          },
          responsive: {
            medium: {
              display: 'center',
              fullScreen: false,
              touchUi: false,
            },
          },
          cssClass: 'md-recurring-event-editor-popup',
        })
        .mobiscroll('getInst');

      // Attach event handlers

      $eventTitle.on('input', function () {
        eventTitle = this.value;
      });

      $eventDescription.on('change', function () {
        eventDescription = this.value;
      });

      $eventAllDay.on('change', function () {
        eventAllDay = this.checked;
        toggleDatetimePicker(eventAllDay);
      });

      $eventDeleteButton.on('click', function () {
        if (editedEvent.recurring) {
          createRecurrenceEditPopup(true);
        } else {
          calendar.removeEvent(editedEvent);
          addEditPopup.close();
        }
      });

      $recurrenceWeekDays.on('change', function () {
        var values = [];
        $recurrenceWeekDays.each(function () {
          if (this.checked) {
            values.push(this.value);
          }
        });
        recurrenceWeekDays = values.join(',');
      });

      $recurrenceInterval.on('change', function () {
        var value = +this.value;
        recurrenceInterval = !value || value < 1 ? 1 : value;
        this.value = recurrenceInterval;
      });

      $recurrenceCount
        .on('change', function () {
          var value = +this.value;
          recurrenceCount = !value || value < 1 ? 1 : value;
          this.value = recurrenceCount;
        })
        .on('click', function () {
          // Check the count stop condition radio
          recurrenceCondition = 'count';
          $('#recurrence-condition-count').mobiscroll('getInst').checked = true;
        });

      $('.md-recurrence-repeat').on('change', function () {
        recurrenceRepeat = this.value;
        toggleRecurrenceText(recurrenceRepeat);
      });

      $('.md-recurrence-edit-mode').on('change', function () {
        recurrenceEditMode = this.value;
      });

      $('.md-recurrence-condition').on('change', function () {
        recurrenceCondition = this.value;
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-add-delete-event"></div>

<div style="display: none;">
    <div id="demo-add-edit-popup">
        <div class="mbsc-form-group">
            <label>
                Title
                <input mbsc-input id="popup-event-title" />
            </label>
            <label>
                Description
                <textarea mbsc-textarea id="popup-event-description"></textarea>
            </label>
        </div>
        <div class="mbsc-form-group">
            <label>
                <input mbsc-switch data-label="All-day" id="popup-event-all-day" type="checkbox" />
            </label>
            <label>
                <input mbsc-input data-label="Starts" id="popup-event-start" />
            </label>
            <label>
                <input mbsc-input data-label="Ends" id="popup-event-end" />
            </label>
            <div id="popup-event-dates"></div>
            <label>
                <input mbsc-input data-label="Repeats" data-dropdown="true" id="popup-event-recurrence" />
            </label>
        </div>

        <div id="popup-event-recurrence-editor">
            <div mbsc-segmented-group>
                <label>
                    Daily
                    <input mbsc-segmented id="recurrence-repeat-daily" class="md-recurrence-repeat" name="recurrence-repeat" type="radio" value="daily" checked />
                </label>
                <label>
                    Weekly
                    <input mbsc-segmented id="recurrence-repeat-weekly" class="md-recurrence-repeat" name="recurrence-repeat" type="radio" value="weekly" />
                </label>
                <label>
                    Monthly
                    <input mbsc-segmented id="recurrence-repeat-monthly" class="md-recurrence-repeat" name="recurrence-repeat" type="radio" value="monthly" />
                </label>
                <label>
                    Yearly
                    <input mbsc-segmented id="recurrence-repeat-yearly" class="md-recurrence-repeat" name="recurrence-repeat" type="radio" value="yearly" />
                </label>
            </div>

            <div class="md-recurrence-options">
                <span>Repeat every</span>
                <span class="md-recurrence-input md-recurrence-input-nr">
                    <label>
                        <input id="recurrence-interval" mbsc-input data-input-style="outline" type="number" min="1" />
                    </label>
                </span>

                <span class="md-recurrence-text md-recurrence-daily">day(s)</span>
                <span class="md-recurrence-text md-recurrence-weekly">week(s) on</span>

                <span class="md-recurrence-text md-recurrence-monthly">
                    month(s) on day
                    <span class="md-recurrence-input md-recurrence-input-nr">
                        <label>
                            <input id="recurrence-day" mbsc-input data-dropdown="true" data-input-style="outline" />
                        </label>
                    </span>
                </span>

                <span class="md-recurrence-text md-recurrence-yearly">
                    year(s) <br />on day
                    <span class="md-recurrence-input md-recurrence-input-nr">
                        <label>
                            <input id="recurrence-month-day" mbsc-input data-dropdown="true" data-input-style="outline" />
                        </label>
                    </span>
                <span>of</span>
                <span class="md-recurrence-input">
                        <label>
                            <input id="recurrence-month" mbsc-input data-dropdown="true" data-input-style="outline" />
                        </label>
                    </span>
                </span>

                <div>
                    <p class="md-recurrence-desc md-recurrence-text md-recurrence-daily">The event will be repeated every day or every x days, depending on the value</p>
                    <p class="md-recurrence-desc md-recurrence-text md-recurrence-weekly">The event will be repeated every x weeks on specific weekdays</p>
                    <p class="md-recurrence-desc md-recurrence-text md-recurrence-monthly">The event will be repeated every x months on specific day of the month</p>
                    <p class="md-recurrence-desc md-recurrence-text md-recurrence-yearly">The event will be repeated every x years on specific day of a specific month</p>
                </div>
            </div>

            <div class="md-recurrence-text md-recurrence-weekly" mbsc-segmented-group>
                <label>
                    Sun
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="SU" />
                </label>
                <label>
                    Mon
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="MO" />
                </label>
                <label>
                    Tue
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="TU" />
                </label>
                <label>
                    Wed
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="WE" />
                </label>
                <label>
                    Thu
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="TH" />
                </label>
                <label>
                    Fri
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="FR" />
                </label>
                <label>
                    Sat
                    <input mbsc-segmented class="md-recurrence-weekdays" type="checkbox" value="SA" />
                </label>
            </div>

            <div class="md-recurrence-ends">Ends</div>

            <div class="mbsc-form-group">
                <label>
                    <input mbsc-radio id="recurrence-condition-never" class="md-recurrence-condition" type="radio" name="recurrence-condition" value="never" data-label="Never" data-position="start" data-description="The event will repeat indefinitely" checked />
                </label>
                <label>
                    <input mbsc-radio id="recurrence-condition-until" class="md-recurrence-condition" type="radio" name="recurrence-condition" value="until" data-position="start" data-description="The event will run until it reaches a specific date" />
                    Until
                    <span class="md-recurrence-input">
                        <label>
                            <input id="recurrence-until" mbsc-input data-input-style="outline" placeholder="Select a date" />
                        </label>
                </span>
                </label>
                <label>
                    <input mbsc-radio id="recurrence-condition-count" class="md-recurrence-condition" type="radio" name="recurrence-condition" value="count" data-position="start" data-description="The event will repeat until it reaches a certain amount of occurrences" />
                    After
                    <span class="md-recurrence-input md-recurrence-input-nr">
                        <label>
                            <input id="recurrence-count" mbsc-input data-input-style="outline" type="number" min="1" />
                        </label>
                </span>
                occurrences
                </label>
            </div>
        </div>

        <div class="mbsc-button-group">
            <button class="mbsc-button-block" id="popup-event-delete" mbsc-button data-color="danger" data-variant="outline">Delete event</button>
        </div>
    </div>
    <div id="demo-recurrence-edit-mode-popup">
        <div class="mbsc-form-group">
            <div class="mbsc-form-group-title"><span id="recurrence-edit-mode-text"></span> recurring event</div>
            <label>
                <input mbsc-radio id="recurrence-edit-mode-current" class="md-recurrence-edit-mode" data-label="This event only" value="current" name="recurrence-edit-mode" type="radio" checked />
            </label>
            <label>
                <input mbsc-radio id="recurrence-edit-mode-following" class="md-recurrence-edit-mode" data-label="This and following events" value="following" name="recurrence-edit-mode" type="radio" />
            </label>
            <label>
                <input mbsc-radio id="recurrence-edit-mode-all" class="md-recurrence-edit-mode" data-label="All events" value="all" name="recurrence-edit-mode" type="radio" />
            </label>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-recurring-event-editor-popup .md-recurrence-input .mbsc-textfield-wrapper {
    display: inline-block;
    margin: 3px;
    z-index: 3;
    line-height: normal;
}

.md-recurring-event-editor-popup .md-recurrence-input .mbsc-textfield {
    width: 140px;
    height: 32px;
}

.md-recurring-event-editor-popup .md-recurrence-input-nr .mbsc-textfield {
    width: 90px;
}

.md-recurring-event-editor-popup .md-recurrence-input .mbsc-select-icon {
    top: 50%;
    height: 1.5em;
    margin-top: -0.75em;
}

.md-recurrence-options {
    padding: 0 1em;
    margin: 1em 0;
}

.md-recurrence-ends {
    padding: 0 1em;
    margin: 1.25em 0 -1.25em 0;
}

.md-recurrence-desc {
    font-size: 12px;
    font-weight: normal;
    color: #555;
    margin: 1em 0;
}

.md-hide-elm {
    display: none;
}
  `,
};
