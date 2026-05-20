To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/eventcalendar/navigate-from-external-date-picker#).

## Demo description

This example demonstrates how can the Eventcalendar navigated externally. Here we have a two-pane layout with a Datepicker on the left and a Calendar on the right. Changing date on the Datepicker will trigger the date change on the Calendar.

framework{only="vue"}
@change

:::

`onChange`

event, while the Calendar updates the datepicker value from its 

`onSelectedDateChange` event.
:::

framework{only="vue"}
@change

:::

`onChange`

event, while the Calendar updates the datepicker value from its 

`onSelectedDateChange` event.
:::

The Datepicker calls the `navigate` method of the Calendar in its <!-- UNPARSED_RAZOR_START -->
@Html.DocsOptLink(framework,  "`onChange`")
<!-- UNPARSED_RAZOR_END --> event,
while the Calendar sets the datepicker value with the `setVal` method from its `onSelectedDateChange` event.
