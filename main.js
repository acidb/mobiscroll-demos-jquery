import { enhance } from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import { Router } from 'html5-history-router';
import $ from 'jquery';
import './style.css';
import '@mobiscroll/jquery/dist/css/mobiscroll.min.css';

import HomePage from './pages/home/home';
import CalendarActivityCalendar from './src/demos/datepicker/calendar/activity-calendar/activity-calendar';
import CalendarAppointmentBooking from './src/demos/datepicker/calendar/appointment-booking/appointment-booking';
import CalendarCustomizeMarkedDayShapes from './src/demos/datepicker/calendar/customize-marked-day-shapes/customize-marked-day-shapes';
import CalendarCustomizingHeader from './src/demos/datepicker/calendar/customizing-header/customizing-header';
import CalendarDateObjectISO8601Moment from './src/demos/datepicker/calendar/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import CalendarDatePicker from './src/demos/datepicker/calendar/date-picker/date-picker';
import CalendarDateTimePicker from './src/demos/datepicker/calendar/date-time-picker/date-time-picker';
import CalendarDisabledInvalidValues from './src/demos/datepicker/calendar/disabled-invalid-values/disabled-invalid-values';
import CalendarDotsColorsLabels from './src/demos/datepicker/calendar/dots-colors-labels/dots-colors-labels';
import CalendarEventHooks from './src/demos/datepicker/calendar/event-hooks/event-hooks';
import CalendarFormattingReturnValues from './src/demos/datepicker/calendar/formatting-return-values/formatting-return-values';
import CalendarGregorianJalaliHijri from './src/demos/datepicker/calendar/gregorian-jalali-hijri/gregorian-jalali-hijri';
import CalendarHalfDayStyling from './src/demos/datepicker/calendar/half-day-styling/half-day-styling';
import CalendarLocalization from './src/demos/datepicker/calendar/localization/localization';
import CalendarMinMaxRestrictions from './src/demos/datepicker/calendar/min-max-restrictions/min-max-restrictions';
import CalendarMobileDesktopDisplay from './src/demos/datepicker/calendar/mobile-desktop-display/mobile-desktop-display';
import CalendarMobileDesktopUsage from './src/demos/datepicker/calendar/mobile-desktop-usage/mobile-desktop-usage';
import CalendarMonthChangeDirectionWeekNumbersOuterDays from './src/demos/datepicker/calendar/month-change-direction-week-numbers-outer-days/month-change-direction-week-numbers-outer-days';
import CalendarMultipleMonths from './src/demos/datepicker/calendar/multiple-months/multiple-months';
import CalendarMultipleSelect from './src/demos/datepicker/calendar/multiple-select/multiple-select';
import CalendarQuarterYearView from './src/demos/datepicker/calendar/quarter-year-view/quarter-year-view';
import CalendarRangeSelect from './src/demos/datepicker/calendar/range-select/range-select';
import CalendarRecurringValues from './src/demos/datepicker/calendar/recurring-values/recurring-values';
import CalendarResponsive from './src/demos/datepicker/calendar/responsive/responsive';
import CalendarRtlRightToLeft from './src/demos/datepicker/calendar/rtl-right-to-left/rtl-right-to-left';
import CalendarSettingThePickerTimezone from './src/demos/datepicker/calendar/setting-the-picker-timezone/setting-the-picker-timezone';
import CalendarSettingValuesDefaults from './src/demos/datepicker/calendar/setting-values-defaults/setting-values-defaults';
import CalendarSingleSelect from './src/demos/datepicker/calendar/single-select/single-select';
import CalendarThemesIosMaterialWindows from './src/demos/datepicker/calendar/themes-ios-material-windows/themes-ios-material-windows';
import CalendarUsageOnInputOrInline from './src/demos/datepicker/calendar/usage-on-input-or-inline/usage-on-input-or-inline';
import CalendarWeekSelect from './src/demos/datepicker/calendar/week-select/week-select';
import CalendarWeekToMonth from './src/demos/datepicker/calendar/week-to-month/week-to-month';
import CalendarWeekView from './src/demos/datepicker/calendar/week-view/week-view';
import DatetimeDateObjectISO8601Moment from './src/demos/datepicker/datetime/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import DatetimeDatePicker from './src/demos/datepicker/datetime/date-picker/date-picker';
import DatetimeDateTimePicker from './src/demos/datepicker/datetime/date-time-picker/date-time-picker';
import DatetimeDisabledInvalidValues from './src/demos/datepicker/datetime/disabled-invalid-values/disabled-invalid-values';
import DatetimeEventHooks from './src/demos/datepicker/datetime/event-hooks/event-hooks';
import DatetimeFormattingReturnValues from './src/demos/datepicker/datetime/formatting-return-values/formatting-return-values';
import DatetimeGregorianJalaliHijri from './src/demos/datepicker/datetime/gregorian-jalali-hijri/gregorian-jalali-hijri';
import DatetimeLocalization from './src/demos/datepicker/datetime/localization/localization';
import DatetimeMinMaxRestrictions from './src/demos/datepicker/datetime/min-max-restrictions/min-max-restrictions';
import DatetimeMobileDesktopDisplay from './src/demos/datepicker/datetime/mobile-desktop-display/mobile-desktop-display';
import DatetimeMobileDesktopUsage from './src/demos/datepicker/datetime/mobile-desktop-usage/mobile-desktop-usage';
import DatetimeMonthYearPicker from './src/demos/datepicker/datetime/month-year-picker/month-year-picker';
import DatetimeRangeSelect from './src/demos/datepicker/datetime/range-select/range-select';
import DatetimeRecurringValues from './src/demos/datepicker/datetime/recurring-values/recurring-values';
import DatetimeResponsive from './src/demos/datepicker/datetime/responsive/responsive';
import DatetimeRtlRightToLeft from './src/demos/datepicker/datetime/rtl-right-to-left/rtl-right-to-left';
import DatetimeSettingThePickerTimezone from './src/demos/datepicker/datetime/setting-the-picker-timezone/setting-the-picker-timezone';
import DatetimeSettingValuesDefaults from './src/demos/datepicker/datetime/setting-values-defaults/setting-values-defaults';
import DatetimeSingleSelect from './src/demos/datepicker/datetime/single-select/single-select';
import DatetimeThemesIosMaterialWindows from './src/demos/datepicker/datetime/themes-ios-material-windows/themes-ios-material-windows';
import DatetimeTimePicker from './src/demos/datepicker/datetime/time-picker/time-picker';
import DatetimeTimeValueSteps from './src/demos/datepicker/datetime/time-value-steps/time-value-steps';
import DatetimeUsageOnInputOrInline from './src/demos/datepicker/datetime/usage-on-input-or-inline/usage-on-input-or-inline';
import AgendaBasicUsage from './src/demos/eventcalendar/agenda/basic-usage/basic-usage';
import AgendaCustomEventSort from './src/demos/eventcalendar/agenda/custom-event-sort/custom-event-sort';
import AgendaCustomEventTooltip from './src/demos/eventcalendar/agenda/custom-event-tooltip/custom-event-tooltip';
import AgendaCustomizingHeader from './src/demos/eventcalendar/agenda/customizing-header/customizing-header';
import AgendaDailyAgendaWithWeekCalendar from './src/demos/eventcalendar/agenda/daily-agenda-with-week-calendar/daily-agenda-with-week-calendar';
import AgendaDailyWeeklyMonthlyAnnualAgenda from './src/demos/eventcalendar/agenda/daily-weekly-monthly-annual-agenda/daily-weekly-monthly-annual-agenda';
import AgendaDateObjectISO8601Moment from './src/demos/eventcalendar/agenda/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import AgendaEmptyState from './src/demos/eventcalendar/agenda/empty-state/empty-state';
import AgendaEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/agenda/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import AgendaEventContentCustomization from './src/demos/eventcalendar/agenda/event-content-customization/event-content-customization';
import AgendaEventDataStructure from './src/demos/eventcalendar/agenda/event-data-structure/event-data-structure';
import AgendaEventHooks from './src/demos/eventcalendar/agenda/event-hooks/event-hooks';
import AgendaFullEventCustomization from './src/demos/eventcalendar/agenda/full-event-customization/full-event-customization';
import AgendaGregorianJalaliHijri from './src/demos/eventcalendar/agenda/gregorian-jalali-hijri/gregorian-jalali-hijri';
import AgendaLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/agenda/load-events-from-google-calendar/load-events-from-google-calendar';
import AgendaLoadEventsFromRemoteApi from './src/demos/eventcalendar/agenda/load-events-from-remote-api/load-events-from-remote-api';
import AgendaLoadEventsOnDemand from './src/demos/eventcalendar/agenda/load-events-on-demand/load-events-on-demand';
import AgendaLoadInlineData from './src/demos/eventcalendar/agenda/load-inline-data/load-inline-data';
import AgendaLocalization from './src/demos/eventcalendar/agenda/localization/localization';
import AgendaPrintingTheView from './src/demos/eventcalendar/agenda/printing-the-view/printing-the-view';
import AgendaRecurringEvents from './src/demos/eventcalendar/agenda/recurring-events/recurring-events';
import AgendaResourceFilteringInHeader from './src/demos/eventcalendar/agenda/resource-filtering-in-header/resource-filtering-in-header';
import AgendaSearchingEventsInPopup from './src/demos/eventcalendar/agenda/searching-events-in-popup/searching-events-in-popup';
import AgendaSettingTheTimezone from './src/demos/eventcalendar/agenda/setting-the-timezone/setting-the-timezone';
import AgendaSyncEventsGoogleCalendar from './src/demos/eventcalendar/agenda/sync-events-google-calendar/sync-events-google-calendar';
import AgendaSyncEventsOutlookCalendar from './src/demos/eventcalendar/agenda/sync-events-outlook-calendar/sync-events-outlook-calendar';
import AgendaSynchronizedViews from './src/demos/eventcalendar/agenda/synchronized-views/synchronized-views';
import AgendaThemesIosMaterialWindows from './src/demos/eventcalendar/agenda/themes-ios-material-windows/themes-ios-material-windows';
import EventcalendarBlockedDaysRanges from './src/demos/eventcalendar/calendar-view/blocked-days-ranges/blocked-days-ranges';
import EventcalendarColoredCellBackground from './src/demos/eventcalendar/calendar-view/colored-cell-background/colored-cell-background';
import EventcalendarConditionalMoveResize from './src/demos/eventcalendar/calendar-view/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import EventcalendarCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/calendar-view/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import EventcalendarCustomEventSort from './src/demos/eventcalendar/calendar-view/custom-event-sort/custom-event-sort';
import EventcalendarCustomEventTooltip from './src/demos/eventcalendar/calendar-view/custom-event-tooltip/custom-event-tooltip';
import EventcalendarCustomizeEventPopover from './src/demos/eventcalendar/calendar-view/customize-event-popover/customize-event-popover';
import EventcalendarCustomizeLabelLookAndFeel from './src/demos/eventcalendar/calendar-view/customize-label-look-and-feel/customize-label-look-and-feel';
import EventcalendarCustomizingHeader from './src/demos/eventcalendar/calendar-view/customizing-header/customizing-header';
import EventcalendarCutCopyPasteEventsBetweenCalendars from './src/demos/eventcalendar/calendar-view/cut-copy-paste-events-between-calendars/cut-copy-paste-events-between-calendars';
import EventcalendarDateObjectISO8601Moment from './src/demos/eventcalendar/calendar-view/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import EventcalendarDesktopMonthView from './src/demos/eventcalendar/calendar-view/desktop-month-view/desktop-month-view';
import EventcalendarDisallowPastEventCreation from './src/demos/eventcalendar/calendar-view/disallow-past-event-creation/disallow-past-event-creation';
import EventcalendarDragDropBetweenCalendarInstances from './src/demos/eventcalendar/calendar-view/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import EventcalendarEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/calendar-view/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import EventcalendarEventDataStructure from './src/demos/eventcalendar/calendar-view/event-data-structure/event-data-structure';
import EventcalendarEventHooks from './src/demos/eventcalendar/calendar-view/event-hooks/event-hooks';
import EventcalendarEventLabels from './src/demos/eventcalendar/calendar-view/event-labels/event-labels';
import EventcalendarEventPopover from './src/demos/eventcalendar/calendar-view/event-popover/event-popover';
import EventcalendarExternalDragDropScheduleUnschedule from './src/demos/eventcalendar/calendar-view/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import EventcalendarExternalEventPresets from './src/demos/eventcalendar/calendar-view/external-event-presets/external-event-presets';
import EventcalendarGregorianJalaliHijri from './src/demos/eventcalendar/calendar-view/gregorian-jalali-hijri/gregorian-jalali-hijri';
import EventcalendarLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/calendar-view/load-events-from-google-calendar/load-events-from-google-calendar';
import EventcalendarLoadEventsFromRemoteApi from './src/demos/eventcalendar/calendar-view/load-events-from-remote-api/load-events-from-remote-api';
import EventcalendarLoadEventsOnDemand from './src/demos/eventcalendar/calendar-view/load-events-on-demand/load-events-on-demand';
import EventcalendarLoadInlineData from './src/demos/eventcalendar/calendar-view/load-inline-data/load-inline-data';
import EventcalendarLocalization from './src/demos/eventcalendar/calendar-view/localization/localization';
import EventcalendarMobileMonthView from './src/demos/eventcalendar/calendar-view/mobile-month-view/mobile-month-view';
import EventcalendarMonthWeekView from './src/demos/eventcalendar/calendar-view/month-week-view/month-week-view';
import EventcalendarMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/calendar-view/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import EventcalendarMultipleTimezoneSupport from './src/demos/eventcalendar/calendar-view/multiple-timezone-support/multiple-timezone-support';
import EventcalendarPreventDoubleBookingEvents from './src/demos/eventcalendar/calendar-view/prevent-double-booking-events/prevent-double-booking-events';
import EventcalendarPrintingTheView from './src/demos/eventcalendar/calendar-view/printing-the-view/printing-the-view';
import EventcalendarQuarterYearView from './src/demos/eventcalendar/calendar-view/quarter-year-view/quarter-year-view';
import EventcalendarRecurringEventAddEditDialog from './src/demos/eventcalendar/calendar-view/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import EventcalendarRecurringEvents from './src/demos/eventcalendar/calendar-view/recurring-events/recurring-events';
import EventcalendarResourceFilteringInHeader from './src/demos/eventcalendar/calendar-view/resource-filtering-in-header/resource-filtering-in-header';
import EventcalendarResponsiveMonthView from './src/demos/eventcalendar/calendar-view/responsive-month-view/responsive-month-view';
import EventcalendarSearchingEventsInPopup from './src/demos/eventcalendar/calendar-view/searching-events-in-popup/searching-events-in-popup';
import EventcalendarSearchingEventsInSidebar from './src/demos/eventcalendar/calendar-view/searching-events-in-sidebar/searching-events-in-sidebar';
import EventcalendarSettingTheTimezone from './src/demos/eventcalendar/calendar-view/setting-the-timezone/setting-the-timezone';
import EventcalendarShowMoreAllLabels from './src/demos/eventcalendar/calendar-view/show-more-all-labels/show-more-all-labels';
import EventcalendarSwitchingDayWeekMonthView from './src/demos/eventcalendar/calendar-view/switching-day-week-month-view/switching-day-week-month-view';
import EventcalendarSyncEventsGoogleCalendar from './src/demos/eventcalendar/calendar-view/sync-events-google-calendar/sync-events-google-calendar';
import EventcalendarSyncEventsOutlookCalendar from './src/demos/eventcalendar/calendar-view/sync-events-outlook-calendar/sync-events-outlook-calendar';
import EventcalendarThemesIosMaterialWindows from './src/demos/eventcalendar/calendar-view/themes-ios-material-windows/themes-ios-material-windows';
import SchedulerColoredCellBackground from './src/demos/eventcalendar/scheduler/colored-cell-background/colored-cell-background';
import SchedulerColorsInvalidsCssClass from './src/demos/eventcalendar/scheduler/colors-invalids-css-class/colors-invalids-css-class';
import SchedulerConditionalMoveResize from './src/demos/eventcalendar/scheduler/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import SchedulerControlNumberOfConcurrentlyShownEvents from './src/demos/eventcalendar/scheduler/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import SchedulerCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/scheduler/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import SchedulerCustomEventTooltip from './src/demos/eventcalendar/scheduler/custom-event-tooltip/custom-event-tooltip';
import SchedulerCustomRangeView from './src/demos/eventcalendar/scheduler/custom-range-view/custom-range-view';
import SchedulerCustomResourceHeaderTemplate from './src/demos/eventcalendar/scheduler/custom-resource-header-template/custom-resource-header-template';
import SchedulerCustomizingEvents from './src/demos/eventcalendar/scheduler/customizing-events/customizing-events';
import SchedulerCustomizingHeader from './src/demos/eventcalendar/scheduler/customizing-header/customizing-header';
import SchedulerDateHeaderTemplate from './src/demos/eventcalendar/scheduler/date-header-template/date-header-template';
import SchedulerDateObjectISO8601Moment from './src/demos/eventcalendar/scheduler/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import SchedulerDesktopDayView from './src/demos/eventcalendar/scheduler/desktop-day-view/desktop-day-view';
import SchedulerDesktopWeekView from './src/demos/eventcalendar/scheduler/desktop-week-view/desktop-week-view';
import SchedulerDisableAllDayEvents from './src/demos/eventcalendar/scheduler/disable-all-day-events/disable-all-day-events';
import SchedulerDisallowPastEventCreation from './src/demos/eventcalendar/scheduler/disallow-past-event-creation/disallow-past-event-creation';
import SchedulerDisplayMultipleDaysWeeks from './src/demos/eventcalendar/scheduler/display-multiple-days-weeks/display-multiple-days-weeks';
import SchedulerDoctorsAppointment from './src/demos/eventcalendar/scheduler/doctors-appointment/doctors-appointment';
import SchedulerDragDropBetweenCalendarInstances from './src/demos/eventcalendar/scheduler/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import SchedulerDynamicAddRemoveResourcesFilter from './src/demos/eventcalendar/scheduler/dynamic-add-remove-resources-filter/dynamic-add-remove-resources-filter';
import SchedulerEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/scheduler/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import SchedulerEventDataStructure from './src/demos/eventcalendar/scheduler/event-data-structure/event-data-structure';
import SchedulerEventHooks from './src/demos/eventcalendar/scheduler/event-hooks/event-hooks';
import SchedulerExternalDragDropScheduleUnschedule from './src/demos/eventcalendar/scheduler/external-drag-drop-schedule-unschedule/external-drag-drop-schedule-unschedule';
import SchedulerExternalEventPresets from './src/demos/eventcalendar/scheduler/external-event-presets/external-event-presets';
import SchedulerGregorianJalaliHijri from './src/demos/eventcalendar/scheduler/gregorian-jalali-hijri/gregorian-jalali-hijri';
import SchedulerGroupByResourceByDay from './src/demos/eventcalendar/scheduler/group-by-resource-by-day/group-by-resource-by-day';
import SchedulerLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/scheduler/load-events-from-google-calendar/load-events-from-google-calendar';
import SchedulerLoadEventsFromRemoteApi from './src/demos/eventcalendar/scheduler/load-events-from-remote-api/load-events-from-remote-api';
import SchedulerLoadEventsOnDemand from './src/demos/eventcalendar/scheduler/load-events-on-demand/load-events-on-demand';
import SchedulerLoadInlineData from './src/demos/eventcalendar/scheduler/load-inline-data/load-inline-data';
import SchedulerLocalization from './src/demos/eventcalendar/scheduler/localization/localization';
import SchedulerMobileDayView from './src/demos/eventcalendar/scheduler/mobile-day-view/mobile-day-view';
import SchedulerMobileWeekView from './src/demos/eventcalendar/scheduler/mobile-week-view/mobile-week-view';
import SchedulerMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/scheduler/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import SchedulerMultipleTimezoneSupport from './src/demos/eventcalendar/scheduler/multiple-timezone-support/multiple-timezone-support';
import SchedulerPreventDoubleBookingEvents from './src/demos/eventcalendar/scheduler/prevent-double-booking-events/prevent-double-booking-events';
import SchedulerPrintingTheView from './src/demos/eventcalendar/scheduler/printing-the-view/printing-the-view';
import SchedulerRecurringEventAddEditDialog from './src/demos/eventcalendar/scheduler/recurring-event-add-edit-dialog/recurring-event-add-edit-dialog';
import SchedulerRecurringEvents from './src/demos/eventcalendar/scheduler/recurring-events/recurring-events';
import SchedulerResourceDataStructure from './src/demos/eventcalendar/scheduler/resource-data-structure/resource-data-structure';
import SchedulerResourceFilteringInHeader from './src/demos/eventcalendar/scheduler/resource-filtering-in-header/resource-filtering-in-header';
import SchedulerResourceView from './src/demos/eventcalendar/scheduler/resource-view/resource-view';
import SchedulerResponsiveDayWeekSchedule from './src/demos/eventcalendar/scheduler/responsive-day-week-schedule/responsive-day-week-schedule';
import SchedulerSearchingEventsInSidebar from './src/demos/eventcalendar/scheduler/searching-events-in-sidebar/searching-events-in-sidebar';
import SchedulerSettingTheTimezone from './src/demos/eventcalendar/scheduler/setting-the-timezone/setting-the-timezone';
import SchedulerSharedEventsAcrossResources from './src/demos/eventcalendar/scheduler/shared-events-across-resources/shared-events-across-resources';
import SchedulerShowHideHoursDays from './src/demos/eventcalendar/scheduler/show-hide-hours-days/show-hide-hours-days';
import SchedulerShowMultipleTimezones from './src/demos/eventcalendar/scheduler/show-multiple-timezones/show-multiple-timezones';
import SchedulerSwitchingCalendarSchedulerAgenda from './src/demos/eventcalendar/scheduler/switching-calendar-scheduler-agenda/switching-calendar-scheduler-agenda';
import SchedulerSyncEventsGoogleCalendar from './src/demos/eventcalendar/scheduler/sync-events-google-calendar/sync-events-google-calendar';
import SchedulerSyncEventsOutlookCalendar from './src/demos/eventcalendar/scheduler/sync-events-outlook-calendar/sync-events-outlook-calendar';
import SchedulerThemesIosMaterialWindows from './src/demos/eventcalendar/scheduler/themes-ios-material-windows/themes-ios-material-windows';
import SchedulerTimeOffBlockedRanges from './src/demos/eventcalendar/scheduler/time-off-blocked-ranges/time-off-blocked-ranges';
import SchedulerWorkWeekHours from './src/demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import TimelineAssignUnassignWorkOrdersFixedTopRow from './src/demos/eventcalendar/timeline/assign-unassign-work-orders-fixed-top-row/assign-unassign-work-orders-fixed-top-row';
import TimelineColorsInvalidsCssClass from './src/demos/eventcalendar/timeline/colors-invalids-css-class/colors-invalids-css-class';
import TimelineCompareResourcesFixedAtTop from './src/demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';
import TimelineConditionalMoveResize from './src/demos/eventcalendar/timeline/conditional-move-resize/conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource';
import TimelineConnectingLinkingEventsArrows from './src/demos/eventcalendar/timeline/connecting-linking-events-arrows/connecting-linking-events-arrows';
import TimelineControlNumberOfConcurrentlyShownEvents from './src/demos/eventcalendar/timeline/control-number-of-concurrently-shown-events/control-number-of-concurrently-shown-events';
import TimelineCreateReadUpdateDeleteCRUD from './src/demos/eventcalendar/timeline/create-read-update-delete-CRUD/create-read-update-delete-CRUD';
import TimelineCustomEventTooltip from './src/demos/eventcalendar/timeline/custom-event-tooltip/custom-event-tooltip';
import TimelineCustomRangeView from './src/demos/eventcalendar/timeline/custom-range-view/custom-range-view';
import TimelineDailyWeeklyMonthlyYearlyTimeline from './src/demos/eventcalendar/timeline/daily-weekly-monthly-yearly-timeline/daily-weekly-monthly-yearly-timeline';
import TimelineDateObjectISO8601Moment from './src/demos/eventcalendar/timeline/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import TimelineDisallowPastEventCreation from './src/demos/eventcalendar/timeline/disallow-past-event-creation/disallow-past-event-creation';
import TimelineDragDropBetweenCalendarInstances from './src/demos/eventcalendar/timeline/drag-drop-between-calendar-instances/drag-drop-between-calendar-instances';
import TimelineDynamicallyColorAndInvalidate from './src/demos/eventcalendar/timeline/dynamically-color-and-invalidate/dynamically-color-and-invalidate';
import TimelineEmployeeShifts from './src/demos/eventcalendar/timeline/employee-shifts/employee-shifts';
import TimelineEventBulkActionsEditDeleteUpdate from './src/demos/eventcalendar/timeline/event-bulk-actions-edit-delete-update/event-bulk-actions-edit-delete-update';
import TimelineEventDataStructure from './src/demos/eventcalendar/timeline/event-data-structure/event-data-structure';
import TimelineEventHooks from './src/demos/eventcalendar/timeline/event-hooks/event-hooks';
import TimelineEventListing from './src/demos/eventcalendar/timeline/event-listing/event-listing';
import TimelineFlightSchedulingTwoSynchronizedTimelines from './src/demos/eventcalendar/timeline/flight-scheduling-two-synchronized-timelines/flight-scheduling-two-synchronized-timelines';
import TimelineGregorianJalaliHijri from './src/demos/eventcalendar/timeline/gregorian-jalali-hijri/gregorian-jalali-hijri';
import TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate from './src/demos/eventcalendar/timeline/hour-day-week-month-quarter-year-header-footer-template/hour-day-week-month-quarter-year-header-footer-template';
import TimelineLoadEventsFromGoogleCalendar from './src/demos/eventcalendar/timeline/load-events-from-google-calendar/load-events-from-google-calendar';
import TimelineLoadEventsFromRemoteApi from './src/demos/eventcalendar/timeline/load-events-from-remote-api/load-events-from-remote-api';
import TimelineLoadEventsOnDemand from './src/demos/eventcalendar/timeline/load-events-on-demand/load-events-on-demand';
import TimelineLoadInlineData from './src/demos/eventcalendar/timeline/load-inline-data/load-inline-data';
import TimelineLoadResourcesOnDemand from './src/demos/eventcalendar/timeline/load-resources-on-demand/load-resources-on-demand';
import TimelineLoadingBigDataSets from './src/demos/eventcalendar/timeline/loading-big-data-sets/loading-big-data-sets';
import TimelineLocalization from './src/demos/eventcalendar/timeline/localization/localization';
import TimelineMealPlanner from './src/demos/eventcalendar/timeline/meal-planner/meal-planner';
import TimelineMonthView from './src/demos/eventcalendar/timeline/month-view/month-view';
import TimelineMonthlyTimetableVerticalDaysHorizontalTimes from './src/demos/eventcalendar/timeline/monthly-timetable-vertical-days-horizontal-times/monthly-timetable-vertical-days-horizontal-times';
import TimelineMoveResizeDragDropToCreateEvents from './src/demos/eventcalendar/timeline/move-resize-drag-drop-to-create-events/move-resize-drag-drop-to-create-events';
import TimelineMultiClassroomTimetable from './src/demos/eventcalendar/timeline/multi-classroom-timetable/multi-classroom-timetable';
import TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution from './src/demos/eventcalendar/timeline/multiple-days-weeks-months-quarters-years-variable-resolution/multiple-days-weeks-months-quarters-years-variable-resolution';
import TimelineMultipleTimezoneSupport from './src/demos/eventcalendar/timeline/multiple-timezone-support/multiple-timezone-support';
import TimelinePreventDoubleBookingEvents from './src/demos/eventcalendar/timeline/prevent-double-booking-events/prevent-double-booking-events';
import TimelinePrintingTheView from './src/demos/eventcalendar/timeline/printing-the-view/printing-the-view';
import TimelineRecurringEvents from './src/demos/eventcalendar/timeline/recurring-events/recurring-events';
import TimelineResourceDataStructure from './src/demos/eventcalendar/timeline/resource-data-structure/resource-data-structure';
import TimelineResourceGroupingHierarchy from './src/demos/eventcalendar/timeline/resource-grouping-hierarchy/resource-grouping-hierarchy';
import TimelineResourceHeaderTemplate from './src/demos/eventcalendar/timeline/resource-header-template/resource-header-template';
import TimelineRestaurantShiftManagement from './src/demos/eventcalendar/timeline/restaurant-shift-management/restaurant-shift-management';
import TimelineRtlRightToLeft from './src/demos/eventcalendar/timeline/rtl-right-to-left/rtl-right-to-left';
import TimelineSearchingEventsInSidebar from './src/demos/eventcalendar/timeline/searching-events-in-sidebar/searching-events-in-sidebar';
import TimelineSettingRowHeight from './src/demos/eventcalendar/timeline/setting-row-height/setting-row-height';
import TimelineSettingTheTimezone from './src/demos/eventcalendar/timeline/setting-the-timezone/setting-the-timezone';
import TimelineShiftTemplate from './src/demos/eventcalendar/timeline/shift-template/shift-template';
import TimelineSwitchingDayWeekWorkWeekTimeline from './src/demos/eventcalendar/timeline/switching-day-week-work-week-timeline/switching-day-week-work-week-timeline';
import TimelineSyncEventsGoogleCalendar from './src/demos/eventcalendar/timeline/sync-events-google-calendar/sync-events-google-calendar';
import TimelineSyncEventsOutlookCalendar from './src/demos/eventcalendar/timeline/sync-events-outlook-calendar/sync-events-outlook-calendar';
import TimelineThemesIosMaterialWindows from './src/demos/eventcalendar/timeline/themes-ios-material-windows/themes-ios-material-windows';
import TimelineTimelineCustomEventRendering from './src/demos/eventcalendar/timeline/timeline-custom-event-rendering/timeline-custom-event-rendering';
import TimelineTimelineResourceDetailsSidePanelFooter from './src/demos/eventcalendar/timeline/timeline-resource-details-side-panel-footer/timeline-resource-details-side-panel-footer';
import TimelineTimelineResourceHeight from './src/demos/eventcalendar/timeline/timeline-resource-height/timeline-resource-height';
import TimelineTimelineTimeGrid from './src/demos/eventcalendar/timeline/timeline-time-grid/timeline-time-grid';
import TimelineTimezoneMeetingPlanner from './src/demos/eventcalendar/timeline/timezone-meeting-planner/timezone-meeting-planner';
import TimelineWorkOrderScheduling from './src/demos/eventcalendar/timeline/work-order-scheduling/work-order-scheduling';
import FormsAlertConfirmPrompt from './src/demos/form-components/forms/alert-confirm-prompt/alert-confirm-prompt';
import FormsButtonSegmentedStepperColors from './src/demos/form-components/forms/button-segmented-stepper-colors/button-segmented-stepper-colors';
import FormsButtons from './src/demos/form-components/forms/buttons/buttons';
import FormsCheckbox from './src/demos/form-components/forms/checkbox/checkbox';
import FormsDesktop from './src/demos/form-components/forms/desktop/desktop';
import FormsInputLabelTypes from './src/demos/form-components/forms/input-label-types/input-label-types';
import FormsInputsTextAreasDateFields from './src/demos/form-components/forms/inputs-text-areas-date-fields/inputs-text-areas-date-fields';
import FormsMobile from './src/demos/form-components/forms/mobile/mobile';
import FormsNotifications from './src/demos/form-components/forms/notifications/notifications';
import FormsPopup from './src/demos/form-components/forms/popup/popup';
import FormsRadioButton from './src/demos/form-components/forms/radio-button/radio-button';
import FormsResponsive from './src/demos/form-components/forms/responsive/responsive';
import FormsSegmented from './src/demos/form-components/forms/segmented/segmented';
import FormsStepper from './src/demos/form-components/forms/stepper/stepper';
import FormsSwitch from './src/demos/form-components/forms/switch/switch';
import FormsThemesIosMaterialWindows from './src/demos/form-components/forms/themes-ios-material-windows/themes-ios-material-windows';
import RangeAddingEventStartEnd from './src/demos/datepicker/range/adding-event-start-end/adding-event-start-end';
import RangeBookRentalMonthsAhead from './src/demos/datepicker/range/book-rental-months-ahead/book-rental-months-ahead';
import RangeCalendarScrollerDropdown from './src/demos/datepicker/range/calendar-scroller-dropdown/calendar-scroller-dropdown';
import RangeCustomizeMarkedDayShapes from './src/demos/datepicker/range/customize-marked-day-shapes/customize-marked-day-shapes';
import RangeCustomizingLabelsSelection from './src/demos/datepicker/range/customizing-labels-selection/customizing-labels-selection';
import RangeDateFilteringWithPredefinedRanges from './src/demos/datepicker/range/date-filtering-with-predefined-ranges/date-filtering-with-predefined-ranges';
import RangeDateObjectISO8601Moment from './src/demos/datepicker/range/date-object-ISO-8601-moment/date-object-ISO-8601-moment';
import RangeDateRange from './src/demos/datepicker/range/date-range/date-range';
import RangeDateTimeRange from './src/demos/datepicker/range/date-time-range/date-time-range';
import RangeDisabledInvalidValues from './src/demos/datepicker/range/disabled-invalid-values/disabled-invalid-values';
import RangeDotsColorsLabels from './src/demos/datepicker/range/dots-colors-labels/dots-colors-labels';
import RangeEventHooks from './src/demos/datepicker/range/event-hooks/event-hooks';
import RangeFlightBooking from './src/demos/datepicker/range/flight-booking/flight-booking';
import RangeFormattingReturnValues from './src/demos/datepicker/range/formatting-return-values/formatting-return-values';
import RangeGregorianJalaliHijri from './src/demos/datepicker/range/gregorian-jalali-hijri/gregorian-jalali-hijri';
import RangeHalfDayStyling from './src/demos/datepicker/range/half-day-styling/half-day-styling';
import RangeLocalization from './src/demos/datepicker/range/localization/localization';
import RangeMinMaxLength from './src/demos/datepicker/range/min-max-length/min-max-length';
import RangeMinMaxRestrictions from './src/demos/datepicker/range/min-max-restrictions/min-max-restrictions';
import RangeMobileDesktopDisplay from './src/demos/datepicker/range/mobile-desktop-display/mobile-desktop-display';
import RangeMobileDesktopUsage from './src/demos/datepicker/range/mobile-desktop-usage/mobile-desktop-usage';
import RangePresets from './src/demos/datepicker/range/presets/presets';
import RangeRecurringValues from './src/demos/datepicker/range/recurring-values/recurring-values';
import RangeResponsive from './src/demos/datepicker/range/responsive/responsive';
import RangeRtlRightToLeft from './src/demos/datepicker/range/rtl-right-to-left/rtl-right-to-left';
import RangeSettingThePickerTimezone from './src/demos/datepicker/range/setting-the-picker-timezone/setting-the-picker-timezone';
import RangeThemesIosMaterialWindows from './src/demos/datepicker/range/themes-ios-material-windows/themes-ios-material-windows';
import RangeTimeRange from './src/demos/datepicker/range/time-range/time-range';
import RangeUsageOnInputOrInline from './src/demos/datepicker/range/usage-on-input-or-inline/usage-on-input-or-inline';
import RangeWeekMonthViewScrollingDirection from './src/demos/datepicker/range/week-month-view-scrolling-direction/week-month-view-scrolling-direction';
import SelectCountryPicker from './src/demos/pickers/select/country-picker/country-picker';
import SelectDataSources from './src/demos/pickers/select/data-sources/data-sources';
import SelectDisabledInvalidValues from './src/demos/pickers/select/disabled-invalid-values/disabled-invalid-values';
import SelectEventHooks from './src/demos/pickers/select/event-hooks/event-hooks';
import SelectFilteringValues from './src/demos/pickers/select/filtering-values/filtering-values';
import SelectGroupOptions from './src/demos/pickers/select/group-options/group-options';
import SelectImageText from './src/demos/pickers/select/image-text/image-text';
import SelectItemTemplating from './src/demos/pickers/select/item-templating/item-templating';
import SelectLinkedHierarchicalPickers from './src/demos/pickers/select/linked-hierarchical-pickers/linked-hierarchical-pickers';
import SelectLocalization from './src/demos/pickers/select/localization/localization';
import SelectMobileDesktopDisplay from './src/demos/pickers/select/mobile-desktop-display/mobile-desktop-display';
import SelectMobileDesktopUsage from './src/demos/pickers/select/mobile-desktop-usage/mobile-desktop-usage';
import SelectMultipleLines from './src/demos/pickers/select/multiple-lines/multiple-lines';
import SelectMultipleSelect from './src/demos/pickers/select/multiple-select/multiple-select';
import SelectResponsive from './src/demos/pickers/select/responsive/responsive';
import SelectRtlRightToLeft from './src/demos/pickers/select/rtl-right-to-left/rtl-right-to-left';
import SelectSettingValuesDefaults from './src/demos/pickers/select/setting-values-defaults/setting-values-defaults';
import SelectSingleSelect from './src/demos/pickers/select/single-select/single-select';
import SelectThemesIosMaterialWindows from './src/demos/pickers/select/themes-ios-material-windows/themes-ios-material-windows';

var router = new Router();

function loadPage(page) {
  // app[0].innerHTML = "<div id='jquery-demo-placeholder'>" + page.markup + '</div>';
  app.html("<div id='jquery-demo-placeholder'>" + page.markup + '</div>');

  if (page.css && !page.loaded) {
    page.loaded = true;
    var style = document.createElement('style');
    style.innerHTML = page.css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  if (page.init) {
    page.init();
  }

  enhance(app[0]);
}

router
  .on('/', function () {
    loadPage(HomePage);
  })
  .on('/datetime/date-picker', function () {
    loadPage(DatetimeDatePicker);
  })
  .on('/datetime/disabled-invalid-values', function () {
    loadPage(DatetimeDisabledInvalidValues);
  })
  .on('/datetime/time-picker', function () {
    loadPage(DatetimeTimePicker);
  })
  .on('/datetime/month-year-picker', function () {
    loadPage(DatetimeMonthYearPicker);
  })
  .on('/datetime/date-time-picker', function () {
    loadPage(DatetimeDateTimePicker);
  })
  .on('/datetime/event-hooks', function () {
    loadPage(DatetimeEventHooks);
  })
  .on('/datetime/time-value-steps', function () {
    loadPage(DatetimeTimeValueSteps);
  })
  .on('/datetime/formatting-return-values', function () {
    loadPage(DatetimeFormattingReturnValues);
  })
  .on('/datetime/setting-values-defaults', function () {
    loadPage(DatetimeSettingValuesDefaults);
  })
  .on('/datetime/date-object-ISO-8601-moment', function () {
    loadPage(DatetimeDateObjectISO8601Moment);
  })
  .on('/datetime/themes-ios-material-windows', function () {
    loadPage(DatetimeThemesIosMaterialWindows);
  })
  .on('/datetime/mobile-desktop-usage', function () {
    loadPage(DatetimeMobileDesktopUsage);
  })
  .on('/datetime/localization', function () {
    loadPage(DatetimeLocalization);
  })
  .on('/datetime/gregorian-jalali-hijri', function () {
    loadPage(DatetimeGregorianJalaliHijri);
  })
  .on('/datetime/responsive', function () {
    loadPage(DatetimeResponsive);
  })
  .on('/datetime/mobile-desktop-display', function () {
    loadPage(DatetimeMobileDesktopDisplay);
  })
  .on('/datetime/min-max-restrictions', function () {
    loadPage(DatetimeMinMaxRestrictions);
  })
  .on('/datetime/single-select', function () {
    loadPage(DatetimeSingleSelect);
  })
  .on('/datetime/recurring-values', function () {
    loadPage(DatetimeRecurringValues);
  })
  .on('/datetime/range-select', function () {
    loadPage(DatetimeRangeSelect);
  })
  .on('/datetime/usage-on-input-or-inline', function () {
    loadPage(DatetimeUsageOnInputOrInline);
  })
  .on('/datetime/rtl-right-to-left', function () {
    loadPage(DatetimeRtlRightToLeft);
  })
  .on('/datetime/setting-the-picker-timezone', function () {
    loadPage(DatetimeSettingThePickerTimezone);
  })
  .on('/calendar/date-time-picker', function () {
    loadPage(CalendarDateTimePicker);
  })
  .on('/calendar/event-hooks', function () {
    loadPage(CalendarEventHooks);
  })
  .on('/calendar/week-view', function () {
    loadPage(CalendarWeekView);
  })
  .on('/calendar/dots-colors-labels', function () {
    loadPage(CalendarDotsColorsLabels);
  })
  .on('/calendar/formatting-return-values', function () {
    loadPage(CalendarFormattingReturnValues);
  })
  .on('/calendar/disabled-invalid-values', function () {
    loadPage(CalendarDisabledInvalidValues);
  })
  .on('/calendar/setting-values-defaults', function () {
    loadPage(CalendarSettingValuesDefaults);
  })
  .on('/calendar/date-object-ISO-8601-moment', function () {
    loadPage(CalendarDateObjectISO8601Moment);
  })
  .on('/calendar/themes-ios-material-windows', function () {
    loadPage(CalendarThemesIosMaterialWindows);
  })
  .on('/calendar/week-to-month', function () {
    loadPage(CalendarWeekToMonth);
  })
  .on('/calendar/localization', function () {
    loadPage(CalendarLocalization);
  })
  .on('/calendar/mobile-desktop-usage', function () {
    loadPage(CalendarMobileDesktopUsage);
  })
  .on('/calendar/gregorian-jalali-hijri', function () {
    loadPage(CalendarGregorianJalaliHijri);
  })
  .on('/calendar/responsive', function () {
    loadPage(CalendarResponsive);
  })
  .on('/calendar/mobile-desktop-display', function () {
    loadPage(CalendarMobileDesktopDisplay);
  })
  .on('/calendar/date-picker', function () {
    loadPage(CalendarDatePicker);
  })
  .on('/calendar/multiple-months', function () {
    loadPage(CalendarMultipleMonths);
  })
  .on('/calendar/month-change-direction-week-numbers-outer-days', function () {
    loadPage(CalendarMonthChangeDirectionWeekNumbersOuterDays);
  })
  .on('/calendar/min-max-restrictions', function () {
    loadPage(CalendarMinMaxRestrictions);
  })
  .on('/calendar/single-select', function () {
    loadPage(CalendarSingleSelect);
  })
  .on('/calendar/multiple-select', function () {
    loadPage(CalendarMultipleSelect);
  })
  .on('/calendar/recurring-values', function () {
    loadPage(CalendarRecurringValues);
  })
  .on('/calendar/customizing-header', function () {
    loadPage(CalendarCustomizingHeader);
  })
  .on('/calendar/range-select', function () {
    loadPage(CalendarRangeSelect);
  })
  .on('/calendar/half-day-styling', function () {
    loadPage(CalendarHalfDayStyling);
  })
  .on('/calendar/customize-marked-day-shapes', function () {
    loadPage(CalendarCustomizeMarkedDayShapes);
  })
  .on('/calendar/usage-on-input-or-inline', function () {
    loadPage(CalendarUsageOnInputOrInline);
  })
  .on('/calendar/rtl-right-to-left', function () {
    loadPage(CalendarRtlRightToLeft);
  })
  .on('/calendar/appointment-booking', function () {
    loadPage(CalendarAppointmentBooking);
  })
  .on('/calendar/activity-calendar', function () {
    loadPage(CalendarActivityCalendar);
  })
  .on('/calendar/week-select', function () {
    loadPage(CalendarWeekSelect);
  })
  .on('/calendar/quarter-year-view', function () {
    loadPage(CalendarQuarterYearView);
  })
  .on('/calendar/setting-the-picker-timezone', function () {
    loadPage(CalendarSettingThePickerTimezone);
  })
  .on('/select/multiple-select', function () {
    loadPage(SelectMultipleSelect);
  })
  .on('/select/multiple-lines', function () {
    loadPage(SelectMultipleLines);
  })
  .on('/select/country-picker', function () {
    loadPage(SelectCountryPicker);
  })
  .on('/select/event-hooks', function () {
    loadPage(SelectEventHooks);
  })
  .on('/select/themes-ios-material-windows', function () {
    loadPage(SelectThemesIosMaterialWindows);
  })
  .on('/select/setting-values-defaults', function () {
    loadPage(SelectSettingValuesDefaults);
  })
  .on('/select/mobile-desktop-usage', function () {
    loadPage(SelectMobileDesktopUsage);
  })
  .on('/select/group-options', function () {
    loadPage(SelectGroupOptions);
  })
  .on('/select/localization', function () {
    loadPage(SelectLocalization);
  })
  .on('/select/mobile-desktop-display', function () {
    loadPage(SelectMobileDesktopDisplay);
  })
  .on('/select/single-select', function () {
    loadPage(SelectSingleSelect);
  })
  .on('/select/responsive', function () {
    loadPage(SelectResponsive);
  })
  .on('/select/rtl-right-to-left', function () {
    loadPage(SelectRtlRightToLeft);
  })
  .on('/select/disabled-invalid-values', function () {
    loadPage(SelectDisabledInvalidValues);
  })
  .on('/select/filtering-values', function () {
    loadPage(SelectFilteringValues);
  })
  .on('/select/data-sources', function () {
    loadPage(SelectDataSources);
  })
  .on('/select/linked-hierarchical-pickers', function () {
    loadPage(SelectLinkedHierarchicalPickers);
  })
  .on('/select/item-templating', function () {
    loadPage(SelectItemTemplating);
  })
  .on('/select/image-text', function () {
    loadPage(SelectImageText);
  })
  .on('/range/disabled-invalid-values', function () {
    loadPage(RangeDisabledInvalidValues);
  })
  .on('/range/flight-booking', function () {
    loadPage(RangeFlightBooking);
  })
  .on('/range/presets', function () {
    loadPage(RangePresets);
  })
  .on('/range/event-hooks', function () {
    loadPage(RangeEventHooks);
  })
  .on('/range/dots-colors-labels', function () {
    loadPage(RangeDotsColorsLabels);
  })
  .on('/range/date-object-ISO-8601-moment', function () {
    loadPage(RangeDateObjectISO8601Moment);
  })
  .on('/range/themes-ios-material-windows', function () {
    loadPage(RangeThemesIosMaterialWindows);
  })
  .on('/range/gregorian-jalali-hijri', function () {
    loadPage(RangeGregorianJalaliHijri);
  })
  .on('/range/mobile-desktop-usage', function () {
    loadPage(RangeMobileDesktopUsage);
  })
  .on('/range/responsive', function () {
    loadPage(RangeResponsive);
  })
  .on('/range/mobile-desktop-display', function () {
    loadPage(RangeMobileDesktopDisplay);
  })
  .on('/range/min-max-restrictions', function () {
    loadPage(RangeMinMaxRestrictions);
  })
  .on('/range/calendar-scroller-dropdown', function () {
    loadPage(RangeCalendarScrollerDropdown);
  })
  .on('/range/usage-on-input-or-inline', function () {
    loadPage(RangeUsageOnInputOrInline);
  })
  .on('/range/date-range', function () {
    loadPage(RangeDateRange);
  })
  .on('/range/time-range', function () {
    loadPage(RangeTimeRange);
  })
  .on('/range/date-time-range', function () {
    loadPage(RangeDateTimeRange);
  })
  .on('/range/week-month-view-scrolling-direction', function () {
    loadPage(RangeWeekMonthViewScrollingDirection);
  })
  .on('/range/formatting-return-values', function () {
    loadPage(RangeFormattingReturnValues);
  })
  .on('/range/customizing-labels-selection', function () {
    loadPage(RangeCustomizingLabelsSelection);
  })
  .on('/range/min-max-length', function () {
    loadPage(RangeMinMaxLength);
  })
  .on('/range/recurring-values', function () {
    loadPage(RangeRecurringValues);
  })
  .on('/range/half-day-styling', function () {
    loadPage(RangeHalfDayStyling);
  })
  .on('/range/customize-marked-day-shapes', function () {
    loadPage(RangeCustomizeMarkedDayShapes);
  })
  .on('/range/localization', function () {
    loadPage(RangeLocalization);
  })
  .on('/range/adding-event-start-end', function () {
    loadPage(RangeAddingEventStartEnd);
  })
  .on('/range/rtl-right-to-left', function () {
    loadPage(RangeRtlRightToLeft);
  })
  .on('/range/date-filtering-with-predefined-ranges', function () {
    loadPage(RangeDateFilteringWithPredefinedRanges);
  })
  .on('/range/book-rental-months-ahead', function () {
    loadPage(RangeBookRentalMonthsAhead);
  })
  .on('/range/setting-the-picker-timezone', function () {
    loadPage(RangeSettingThePickerTimezone);
  })
  .on('/forms/mobile', function () {
    loadPage(FormsMobile);
  })
  .on('/forms/responsive', function () {
    loadPage(FormsResponsive);
  })
  .on('/forms/themes-ios-material-windows', function () {
    loadPage(FormsThemesIosMaterialWindows);
  })
  .on('/forms/desktop', function () {
    loadPage(FormsDesktop);
  })
  .on('/forms/popup', function () {
    loadPage(FormsPopup);
  })
  .on('/forms/alert-confirm-prompt', function () {
    loadPage(FormsAlertConfirmPrompt);
  })
  .on('/forms/notifications', function () {
    loadPage(FormsNotifications);
  })
  .on('/forms/buttons', function () {
    loadPage(FormsButtons);
  })
  .on('/forms/segmented', function () {
    loadPage(FormsSegmented);
  })
  .on('/forms/stepper', function () {
    loadPage(FormsStepper);
  })
  .on('/forms/button-segmented-stepper-colors', function () {
    loadPage(FormsButtonSegmentedStepperColors);
  })
  .on('/forms/inputs-text-areas-date-fields', function () {
    loadPage(FormsInputsTextAreasDateFields);
  })
  .on('/forms/input-label-types', function () {
    loadPage(FormsInputLabelTypes);
  })
  .on('/forms/checkbox', function () {
    loadPage(FormsCheckbox);
  })
  .on('/forms/switch', function () {
    loadPage(FormsSwitch);
  })
  .on('/forms/radio-button', function () {
    loadPage(FormsRadioButton);
  })
  .on('/eventcalendar/event-hooks', function () {
    loadPage(EventcalendarEventHooks);
  })
  .on('/eventcalendar/load-events-from-remote-api', function () {
    loadPage(EventcalendarLoadEventsFromRemoteApi);
  })
  .on('/eventcalendar/desktop-month-view', function () {
    loadPage(EventcalendarDesktopMonthView);
  })
  .on('/eventcalendar/load-events-on-demand', function () {
    loadPage(EventcalendarLoadEventsOnDemand);
  })
  .on('/eventcalendar/mobile-month-view', function () {
    loadPage(EventcalendarMobileMonthView);
  })
  .on('/eventcalendar/month-week-view', function () {
    loadPage(EventcalendarMonthWeekView);
  })
  .on('/eventcalendar/date-object-ISO-8601-moment', function () {
    loadPage(EventcalendarDateObjectISO8601Moment);
  })
  .on('/eventcalendar/switching-day-week-month-view', function () {
    loadPage(EventcalendarSwitchingDayWeekMonthView);
  })
  .on('/eventcalendar/responsive-month-view', function () {
    loadPage(EventcalendarResponsiveMonthView);
  })
  .on('/eventcalendar/event-popover', function () {
    loadPage(EventcalendarEventPopover);
  })
  .on('/eventcalendar/localization', function () {
    loadPage(EventcalendarLocalization);
  })
  .on('/eventcalendar/event-labels', function () {
    loadPage(EventcalendarEventLabels);
  })
  .on('/eventcalendar/gregorian-jalali-hijri', function () {
    loadPage(EventcalendarGregorianJalaliHijri);
  })
  .on('/eventcalendar/event-data-structure', function () {
    loadPage(EventcalendarEventDataStructure);
  })
  .on('/eventcalendar/themes-ios-material-windows', function () {
    loadPage(EventcalendarThemesIosMaterialWindows);
  })
  .on('/eventcalendar/recurring-events', function () {
    loadPage(EventcalendarRecurringEvents);
  })
  .on('/eventcalendar/load-events-from-google-calendar', function () {
    loadPage(EventcalendarLoadEventsFromGoogleCalendar);
  })
  .on('/eventcalendar/customize-event-popover', function () {
    loadPage(EventcalendarCustomizeEventPopover);
  })
  .on('/eventcalendar/customize-label-look-and-feel', function () {
    loadPage(EventcalendarCustomizeLabelLookAndFeel);
  })
  .on('/eventcalendar/customizing-header', function () {
    loadPage(EventcalendarCustomizingHeader);
  })
  .on('/eventcalendar/resource-filtering-in-header', function () {
    loadPage(EventcalendarResourceFilteringInHeader);
  })
  .on('/eventcalendar/load-inline-data', function () {
    loadPage(EventcalendarLoadInlineData);
  })
  .on('/eventcalendar/move-resize-drag-drop-to-create-events', function () {
    loadPage(EventcalendarMoveResizeDragDropToCreateEvents);
  })
  .on('/eventcalendar/create-read-update-delete-CRUD', function () {
    loadPage(EventcalendarCreateReadUpdateDeleteCRUD);
  })
  .on('/eventcalendar/blocked-days-ranges', function () {
    loadPage(EventcalendarBlockedDaysRanges);
  })
  .on('/eventcalendar/external-drag-drop-schedule-unschedule', function () {
    loadPage(EventcalendarExternalDragDropScheduleUnschedule);
  })
  .on('/eventcalendar/external-event-presets', function () {
    loadPage(EventcalendarExternalEventPresets);
  })
  .on('/eventcalendar/colored-cell-background', function () {
    loadPage(EventcalendarColoredCellBackground);
  })
  .on('/eventcalendar/custom-event-sort', function () {
    loadPage(EventcalendarCustomEventSort);
  })
  .on('/eventcalendar/setting-the-timezone', function () {
    loadPage(EventcalendarSettingTheTimezone);
  })
  .on('/eventcalendar/multiple-timezone-support', function () {
    loadPage(EventcalendarMultipleTimezoneSupport);
  })
  .on('/eventcalendar/recurring-event-add-edit-dialog', function () {
    loadPage(EventcalendarRecurringEventAddEditDialog);
  })
  .on('/eventcalendar/quarter-year-view', function () {
    loadPage(EventcalendarQuarterYearView);
  })
  .on('/eventcalendar/custom-event-tooltip', function () {
    loadPage(EventcalendarCustomEventTooltip);
  })
  .on('/eventcalendar/printing-the-view', function () {
    loadPage(EventcalendarPrintingTheView);
  })
  .on('/eventcalendar/show-more-all-labels', function () {
    loadPage(EventcalendarShowMoreAllLabels);
  })
  .on('/eventcalendar/sync-events-google-calendar', function () {
    loadPage(EventcalendarSyncEventsGoogleCalendar);
  })
  .on('/eventcalendar/sync-events-outlook-calendar', function () {
    loadPage(EventcalendarSyncEventsOutlookCalendar);
  })
  .on('/eventcalendar/disallow-past-event-creation', function () {
    loadPage(EventcalendarDisallowPastEventCreation);
  })
  .on('/eventcalendar/event-bulk-actions-edit-delete-update', function () {
    loadPage(EventcalendarEventBulkActionsEditDeleteUpdate);
  })
  .on('/eventcalendar/cut-copy-paste-events-between-calendars', function () {
    loadPage(EventcalendarCutCopyPasteEventsBetweenCalendars);
  })
  .on('/eventcalendar/searching-events-in-popup', function () {
    loadPage(EventcalendarSearchingEventsInPopup);
  })
  .on('/eventcalendar/searching-events-in-sidebar', function () {
    loadPage(EventcalendarSearchingEventsInSidebar);
  })
  .on('/eventcalendar/conditional-move-resize', function () {
    loadPage(EventcalendarConditionalMoveResize);
  })
  .on('/eventcalendar/drag-drop-between-calendar-instances', function () {
    loadPage(EventcalendarDragDropBetweenCalendarInstances);
  })
  .on('/eventcalendar/prevent-double-booking-events', function () {
    loadPage(EventcalendarPreventDoubleBookingEvents);
  })
  .on('/scheduler/mobile-day-view', function () {
    loadPage(SchedulerMobileDayView);
  })
  .on('/scheduler/desktop-day-view', function () {
    loadPage(SchedulerDesktopDayView);
  })
  .on('/scheduler/desktop-week-view', function () {
    loadPage(SchedulerDesktopWeekView);
  })
  .on('/scheduler/mobile-week-view', function () {
    loadPage(SchedulerMobileWeekView);
  })
  .on('/scheduler/responsive-day-week-schedule', function () {
    loadPage(SchedulerResponsiveDayWeekSchedule);
  })
  .on('/scheduler/switching-calendar-scheduler-agenda', function () {
    loadPage(SchedulerSwitchingCalendarSchedulerAgenda);
  })
  .on('/scheduler/event-data-structure', function () {
    loadPage(SchedulerEventDataStructure);
  })
  .on('/scheduler/load-events-on-demand', function () {
    loadPage(SchedulerLoadEventsOnDemand);
  })
  .on('/scheduler/load-events-from-remote-api', function () {
    loadPage(SchedulerLoadEventsFromRemoteApi);
  })
  .on('/scheduler/gregorian-jalali-hijri', function () {
    loadPage(SchedulerGregorianJalaliHijri);
  })
  .on('/scheduler/event-hooks', function () {
    loadPage(SchedulerEventHooks);
  })
  .on('/scheduler/localization', function () {
    loadPage(SchedulerLocalization);
  })
  .on('/scheduler/themes-ios-material-windows', function () {
    loadPage(SchedulerThemesIosMaterialWindows);
  })
  .on('/scheduler/recurring-events', function () {
    loadPage(SchedulerRecurringEvents);
  })
  .on('/scheduler/load-events-from-google-calendar', function () {
    loadPage(SchedulerLoadEventsFromGoogleCalendar);
  })
  .on('/scheduler/date-object-ISO-8601-moment', function () {
    loadPage(SchedulerDateObjectISO8601Moment);
  })
  .on('/scheduler/customizing-events', function () {
    loadPage(SchedulerCustomizingEvents);
  })
  .on('/scheduler/resource-filtering-in-header', function () {
    loadPage(SchedulerResourceFilteringInHeader);
  })
  .on('/scheduler/customizing-header', function () {
    loadPage(SchedulerCustomizingHeader);
  })
  .on('/scheduler/load-inline-data', function () {
    loadPage(SchedulerLoadInlineData);
  })
  .on('/scheduler/move-resize-drag-drop-to-create-events', function () {
    loadPage(SchedulerMoveResizeDragDropToCreateEvents);
  })
  .on('/scheduler/create-read-update-delete-CRUD', function () {
    loadPage(SchedulerCreateReadUpdateDeleteCRUD);
  })
  .on('/scheduler/prevent-double-booking-events', function () {
    loadPage(SchedulerPreventDoubleBookingEvents);
  })
  .on('/scheduler/time-off-blocked-ranges', function () {
    loadPage(SchedulerTimeOffBlockedRanges);
  })
  .on('/scheduler/work-week-hours', function () {
    loadPage(SchedulerWorkWeekHours);
  })
  .on('/scheduler/show-hide-hours-days', function () {
    loadPage(SchedulerShowHideHoursDays);
  })
  .on('/scheduler/disable-all-day-events', function () {
    loadPage(SchedulerDisableAllDayEvents);
  })
  .on('/scheduler/external-drag-drop-schedule-unschedule', function () {
    loadPage(SchedulerExternalDragDropScheduleUnschedule);
  })
  .on('/scheduler/external-event-presets', function () {
    loadPage(SchedulerExternalEventPresets);
  })
  .on('/scheduler/colored-cell-background', function () {
    loadPage(SchedulerColoredCellBackground);
  })
  .on('/scheduler/resource-view', function () {
    loadPage(SchedulerResourceView);
  })
  .on('/scheduler/group-by-resource-by-day', function () {
    loadPage(SchedulerGroupByResourceByDay);
  })
  .on('/scheduler/shared-events-across-resources', function () {
    loadPage(SchedulerSharedEventsAcrossResources);
  })
  .on('/scheduler/dynamic-add-remove-resources-filter', function () {
    loadPage(SchedulerDynamicAddRemoveResourcesFilter);
  })
  .on('/scheduler/custom-resource-header-template', function () {
    loadPage(SchedulerCustomResourceHeaderTemplate);
  })
  .on('/scheduler/setting-the-timezone', function () {
    loadPage(SchedulerSettingTheTimezone);
  })
  .on('/scheduler/multiple-timezone-support', function () {
    loadPage(SchedulerMultipleTimezoneSupport);
  })
  .on('/scheduler/date-header-template', function () {
    loadPage(SchedulerDateHeaderTemplate);
  })
  .on('/scheduler/custom-event-tooltip', function () {
    loadPage(SchedulerCustomEventTooltip);
  })
  .on('/scheduler/printing-the-view', function () {
    loadPage(SchedulerPrintingTheView);
  })
  .on('/scheduler/display-multiple-days-weeks', function () {
    loadPage(SchedulerDisplayMultipleDaysWeeks);
  })
  .on('/scheduler/recurring-event-add-edit-dialog', function () {
    loadPage(SchedulerRecurringEventAddEditDialog);
  })
  .on('/scheduler/sync-events-google-calendar', function () {
    loadPage(SchedulerSyncEventsGoogleCalendar);
  })
  .on('/scheduler/sync-events-outlook-calendar', function () {
    loadPage(SchedulerSyncEventsOutlookCalendar);
  })
  .on('/scheduler/disallow-past-event-creation', function () {
    loadPage(SchedulerDisallowPastEventCreation);
  })
  .on('/scheduler/custom-range-view', function () {
    loadPage(SchedulerCustomRangeView);
  })
  .on('/scheduler/show-multiple-timezones', function () {
    loadPage(SchedulerShowMultipleTimezones);
  })
  .on('/scheduler/event-bulk-actions-edit-delete-update', function () {
    loadPage(SchedulerEventBulkActionsEditDeleteUpdate);
  })
  .on('/scheduler/searching-events-in-sidebar', function () {
    loadPage(SchedulerSearchingEventsInSidebar);
  })
  .on('/scheduler/colors-invalids-css-class', function () {
    loadPage(SchedulerColorsInvalidsCssClass);
  })
  .on('/scheduler/resource-data-structure', function () {
    loadPage(SchedulerResourceDataStructure);
  })
  .on('/scheduler/doctors-appointment', function () {
    loadPage(SchedulerDoctorsAppointment);
  })
  .on('/scheduler/conditional-move-resize', function () {
    loadPage(SchedulerConditionalMoveResize);
  })
  .on('/scheduler/drag-drop-between-calendar-instances', function () {
    loadPage(SchedulerDragDropBetweenCalendarInstances);
  })
  .on('/scheduler/control-number-of-concurrently-shown-events', function () {
    loadPage(SchedulerControlNumberOfConcurrentlyShownEvents);
  })
  .on('/agenda/load-events-from-remote-api', function () {
    loadPage(AgendaLoadEventsFromRemoteApi);
  })
  .on('/agenda/load-events-on-demand', function () {
    loadPage(AgendaLoadEventsOnDemand);
  })
  .on('/agenda/load-events-from-google-calendar', function () {
    loadPage(AgendaLoadEventsFromGoogleCalendar);
  })
  .on('/agenda/event-data-structure', function () {
    loadPage(AgendaEventDataStructure);
  })
  .on('/agenda/event-hooks', function () {
    loadPage(AgendaEventHooks);
  })
  .on('/agenda/date-object-ISO-8601-moment', function () {
    loadPage(AgendaDateObjectISO8601Moment);
  })
  .on('/agenda/recurring-events', function () {
    loadPage(AgendaRecurringEvents);
  })
  .on('/agenda/daily-weekly-monthly-annual-agenda', function () {
    loadPage(AgendaDailyWeeklyMonthlyAnnualAgenda);
  })
  .on('/agenda/event-content-customization', function () {
    loadPage(AgendaEventContentCustomization);
  })
  .on('/agenda/full-event-customization', function () {
    loadPage(AgendaFullEventCustomization);
  })
  .on('/agenda/resource-filtering-in-header', function () {
    loadPage(AgendaResourceFilteringInHeader);
  })
  .on('/agenda/customizing-header', function () {
    loadPage(AgendaCustomizingHeader);
  })
  .on('/agenda/load-inline-data', function () {
    loadPage(AgendaLoadInlineData);
  })
  .on('/agenda/daily-agenda-with-week-calendar', function () {
    loadPage(AgendaDailyAgendaWithWeekCalendar);
  })
  .on('/agenda/synchronized-views', function () {
    loadPage(AgendaSynchronizedViews);
  })
  .on('/agenda/themes-ios-material-windows', function () {
    loadPage(AgendaThemesIosMaterialWindows);
  })
  .on('/agenda/gregorian-jalali-hijri', function () {
    loadPage(AgendaGregorianJalaliHijri);
  })
  .on('/agenda/basic-usage', function () {
    loadPage(AgendaBasicUsage);
  })
  .on('/agenda/custom-event-sort', function () {
    loadPage(AgendaCustomEventSort);
  })
  .on('/agenda/localization', function () {
    loadPage(AgendaLocalization);
  })
  .on('/agenda/setting-the-timezone', function () {
    loadPage(AgendaSettingTheTimezone);
  })
  .on('/agenda/custom-event-tooltip', function () {
    loadPage(AgendaCustomEventTooltip);
  })
  .on('/agenda/printing-the-view', function () {
    loadPage(AgendaPrintingTheView);
  })
  .on('/agenda/sync-events-google-calendar', function () {
    loadPage(AgendaSyncEventsGoogleCalendar);
  })
  .on('/agenda/sync-events-outlook-calendar', function () {
    loadPage(AgendaSyncEventsOutlookCalendar);
  })
  .on('/agenda/event-bulk-actions-edit-delete-update', function () {
    loadPage(AgendaEventBulkActionsEditDeleteUpdate);
  })
  .on('/agenda/searching-events-in-popup', function () {
    loadPage(AgendaSearchingEventsInPopup);
  })
  .on('/agenda/empty-state', function () {
    loadPage(AgendaEmptyState);
  })
  .on('/timeline/timeline-time-grid', function () {
    loadPage(TimelineTimelineTimeGrid);
  })
  .on('/timeline/daily-weekly-monthly-yearly-timeline', function () {
    loadPage(TimelineDailyWeeklyMonthlyYearlyTimeline);
  })
  .on('/timeline/switching-day-week-work-week-timeline', function () {
    loadPage(TimelineSwitchingDayWeekWorkWeekTimeline);
  })
  .on('/timeline/timeline-resource-details-side-panel-footer', function () {
    loadPage(TimelineTimelineResourceDetailsSidePanelFooter);
  })
  .on('/timeline/timeline-resource-height', function () {
    loadPage(TimelineTimelineResourceHeight);
  })
  .on('/timeline/timeline-custom-event-rendering', function () {
    loadPage(TimelineTimelineCustomEventRendering);
  })
  .on('/timeline/month-view', function () {
    loadPage(TimelineMonthView);
  })
  .on('/timeline/event-listing', function () {
    loadPage(TimelineEventListing);
  })
  .on('/timeline/employee-shifts', function () {
    loadPage(TimelineEmployeeShifts);
  })
  .on('/timeline/resource-grouping-hierarchy', function () {
    loadPage(TimelineResourceGroupingHierarchy);
  })
  .on('/timeline/work-order-scheduling', function () {
    loadPage(TimelineWorkOrderScheduling);
  })
  .on('/timeline/timezone-meeting-planner', function () {
    loadPage(TimelineTimezoneMeetingPlanner);
  })
  .on('/timeline/meal-planner', function () {
    loadPage(TimelineMealPlanner);
  })
  .on('/timeline/shift-template', function () {
    loadPage(TimelineShiftTemplate);
  })
  .on('/timeline/restaurant-shift-management', function () {
    loadPage(TimelineRestaurantShiftManagement);
  })
  .on('/timeline/resource-header-template', function () {
    loadPage(TimelineResourceHeaderTemplate);
  })
  .on('/timeline/setting-the-timezone', function () {
    loadPage(TimelineSettingTheTimezone);
  })
  .on('/timeline/multiple-timezone-support', function () {
    loadPage(TimelineMultipleTimezoneSupport);
  })
  .on('/timeline/custom-event-tooltip', function () {
    loadPage(TimelineCustomEventTooltip);
  })
  .on('/timeline/printing-the-view', function () {
    loadPage(TimelinePrintingTheView);
  })
  .on('/timeline/multiple-days-weeks-months-quarters-years-variable-resolution', function () {
    loadPage(TimelineMultipleDaysWeeksMonthsQuartersYearsVariableResolution);
  })
  .on('/timeline/move-resize-drag-drop-to-create-events', function () {
    loadPage(TimelineMoveResizeDragDropToCreateEvents);
  })
  .on('/timeline/event-data-structure', function () {
    loadPage(TimelineEventDataStructure);
  })
  .on('/timeline/date-object-ISO-8601-moment', function () {
    loadPage(TimelineDateObjectISO8601Moment);
  })
  .on('/timeline/recurring-events', function () {
    loadPage(TimelineRecurringEvents);
  })
  .on('/timeline/load-events-from-remote-api', function () {
    loadPage(TimelineLoadEventsFromRemoteApi);
  })
  .on('/timeline/load-events-on-demand', function () {
    loadPage(TimelineLoadEventsOnDemand);
  })
  .on('/timeline/create-read-update-delete-CRUD', function () {
    loadPage(TimelineCreateReadUpdateDeleteCRUD);
  })
  .on('/timeline/themes-ios-material-windows', function () {
    loadPage(TimelineThemesIosMaterialWindows);
  })
  .on('/timeline/gregorian-jalali-hijri', function () {
    loadPage(TimelineGregorianJalaliHijri);
  })
  .on('/timeline/event-hooks', function () {
    loadPage(TimelineEventHooks);
  })
  .on('/timeline/localization', function () {
    loadPage(TimelineLocalization);
  })
  .on('/timeline/rtl-right-to-left', function () {
    loadPage(TimelineRtlRightToLeft);
  })
  .on('/timeline/load-inline-data', function () {
    loadPage(TimelineLoadInlineData);
  })
  .on('/timeline/sync-events-google-calendar', function () {
    loadPage(TimelineSyncEventsGoogleCalendar);
  })
  .on('/timeline/sync-events-outlook-calendar', function () {
    loadPage(TimelineSyncEventsOutlookCalendar);
  })
  .on('/timeline/disallow-past-event-creation', function () {
    loadPage(TimelineDisallowPastEventCreation);
  })
  .on('/timeline/load-events-from-google-calendar', function () {
    loadPage(TimelineLoadEventsFromGoogleCalendar);
  })
  .on('/timeline/custom-range-view', function () {
    loadPage(TimelineCustomRangeView);
  })
  .on('/timeline/dynamically-color-and-invalidate', function () {
    loadPage(TimelineDynamicallyColorAndInvalidate);
  })
  .on('/timeline/event-bulk-actions-edit-delete-update', function () {
    loadPage(TimelineEventBulkActionsEditDeleteUpdate);
  })
  .on('/timeline/loading-big-data-sets', function () {
    loadPage(TimelineLoadingBigDataSets);
  })
  .on('/timeline/connecting-linking-events-arrows', function () {
    loadPage(TimelineConnectingLinkingEventsArrows);
  })
  .on('/timeline/searching-events-in-sidebar', function () {
    loadPage(TimelineSearchingEventsInSidebar);
  })
  .on('/timeline/colors-invalids-css-class', function () {
    loadPage(TimelineColorsInvalidsCssClass);
  })
  .on('/timeline/hour-day-week-month-quarter-year-header-footer-template', function () {
    loadPage(TimelineHourDayWeekMonthQuarterYearHeaderFooterTemplate);
  })
  .on('/timeline/setting-row-height', function () {
    loadPage(TimelineSettingRowHeight);
  })
  .on('/timeline/monthly-timetable-vertical-days-horizontal-times', function () {
    loadPage(TimelineMonthlyTimetableVerticalDaysHorizontalTimes);
  })
  .on('/timeline/multi-classroom-timetable', function () {
    loadPage(TimelineMultiClassroomTimetable);
  })
  .on('/timeline/load-resources-on-demand', function () {
    loadPage(TimelineLoadResourcesOnDemand);
  })
  .on('/timeline/resource-data-structure', function () {
    loadPage(TimelineResourceDataStructure);
  })
  .on('/timeline/conditional-move-resize', function () {
    loadPage(TimelineConditionalMoveResize);
  })
  .on('/timeline/drag-drop-between-calendar-instances', function () {
    loadPage(TimelineDragDropBetweenCalendarInstances);
  })
  .on('/timeline/prevent-double-booking-events', function () {
    loadPage(TimelinePreventDoubleBookingEvents);
  })
  .on('/timeline/compare-resources-fixed-at-top', function () {
    loadPage(TimelineCompareResourcesFixedAtTop);
  })
  .on('/timeline/assign-unassign-work-orders-fixed-top-row', function () {
    loadPage(TimelineAssignUnassignWorkOrdersFixedTopRow);
  })
  .on('/timeline/control-number-of-concurrently-shown-events', function () {
    loadPage(TimelineControlNumberOfConcurrentlyShownEvents);
  })
  .on('/timeline/flight-scheduling-two-synchronized-timelines', function () {
    loadPage(TimelineFlightSchedulingTwoSynchronizedTimelines);
  });

var app = $('#app');

$(document).on('click', function (ev) {
  var link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
