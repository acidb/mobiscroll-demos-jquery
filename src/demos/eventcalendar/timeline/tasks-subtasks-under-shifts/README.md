To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/timeline/tasks-subtasks-under-shifts#).

## Demo description

Visualize shifts and tasks within them using the timeline view. With the help of the `order` property of the data object you can always guarantee that shifts are always displayed at the top (alternatively below tasks) and tasks within those shifts are rendered below.

The shift and task events are bind together with custom data properties. Every shift contains the task IDs in the `tasks` property, and every task has a `shift` property which indicates the parent shift.
These properties are used later in the validation logic to handle the two distinct event type behaviours. The validation is implemented by dynamically setting invalid ranges through the 

`onEventCreated`,

`onEventUpdated` and

`onEventDeleted` lifecycle events.

- **Do you want to learn about the event ordering?** [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/jquery/eventcalendar/timeline#event-order)

## Related demos

- [Learn more about it in the documentation &#8594;](https://docs.mobiscroll.com/jquery/eventcalendar/timeline#event-order)
