To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/timeline/loading-big-data-sets#).

## Demo description

The scheduler supports virtual horizontal and vertical scrolling. The view virtualization makes it possible to work with many resources across long date ranges.

The following examples shows that navigating 20 resources across a whole month with 2000 events won't pose any problems for the browser neither on mobile or desktop.

View virtualization is always enabled and doesn't need to be turned on explicitly.

## Implementation instructions

- Use `view: { scheduler: { type: 'month', timeCellStep: 15, timeLabelStep: 15 } }` with `groupBy="date"` — a month view with 15-minute cells and date-grouped columns (rows = resources, columns = days).
- Programmatically generate 20 resources at module level.
- **`onPageLoading` handler** (Vue: `@page-loading`): generates 2,000 random events for the currently visible month on every page navigation.
  1. Extract `year` and `month` from `args.firstDay.getFullYear()` / `args.firstDay.getMonth()`.
  2. Wrap the generation loop in `setTimeout` (no delay) to defer heavy computation off the current render cycle.
  3. For each event, pick a random `day`, `resource`, `color`, `startHour`, and `startMinute` (multiples of 15), then compute `end` as 2–8 × 15-minute blocks after `start`. Skip any event whose end crosses midnight — all generated events stay within a single day.
  4. After the loop, update the events; for the imperative API, call `inst.setEvents(myEvents)`.

## What this demo shows

- A desktop monthly scheduler layout with a fixed month strip at the top, repeated resources for each day, a fixed all-day row below it, and a scrollable scheduler time grid for the selected month.
- **Virtual scroll** The scheduler supports virtual horizontal and vertical scrolling. The view virtualization makes it possible to work with many resources across long date ranges.
- **Header navigation** The month and year label in the top left opens date navigation, while the blue previous and next arrows and the Today button on the right make it easy to move between weeks and jump back to the current day.
- **Week view** The fixed strip below the header displays the days of the selected month, with the current date highlighted by a blue circle.
- **Resources**: Each day repeats the same 20 resources.
- **All-day events** All-day events appear in a dedicated row that stays fixed above the time grid.
- **Time grid** The scheduler grid scrolls vertically through the hours of the selected month.
- **Timed events** Timed events are displayed in the monthly scheduler grid as colored cards with a colored stripe on the left, the event title in bold, and the exact start and end time displayed above the title.
- **Event overlapping** If events overlap, the scheduler places them side by side without hiding any of them or causing other conflicts.
- **Current time** A blue current-time line appears across the time grid.
- **Event interaction** Hovering over events highlights them and shows drag and resize handles for repositioning or changing duration.
- **Event selection** Clicking an event selects and highlights it.
- **Event creation** Double-clicking the time grid or clicking and dragging on it creates a new event.

## Best for

- **Virtual scrolling** Demonstrating how horizontal and vertical virtual scroll works with the scheduler.
