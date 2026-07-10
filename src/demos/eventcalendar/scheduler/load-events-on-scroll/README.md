To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/timeline/load-events-on-scroll#).

## Demo description

The scheduler view is virtualized which means that the markup is being generated and maintained on the fly. Navigating both vertically and horizontally through scrolling fires
the 

`onVirtualLoading` lifecycle event which can
be used to load the data on scroll rather than load everything on initial page rendering.

This dramatically improves performance in case of a large event count since not all data is loaded in memory from start.

## Implementation instructions

- Use `view: { scheduler: { type: 'month', timeCellStep: 15, timeLabelStep: 15 } }` with `groupBy="date"` — a month view with 15-minute grid cells and date-grouped columns (rows = resources, columns = days).
- Define 20 resources with varied colors.
- **Scroll-triggered loading** is driven by `onVirtualLoading` (Vue: `@virtual-loading`), which fires whenever the user scrolls. Inside the handler, format the visible time window using `formatDate('YYYY-MM-DDTHH:mm:ss', args.viewStart)` and `formatDate('YYYY-MM-DDTHH:mm:ss', args.viewEnd)`, and pass the visible resource range via `args.resourceStart` and `args.resourceEnd`. Build the URL: `https://trial.mobiscroll.com/load-data-scroll/?start=...&end=...&rstart=...&rend=...`. Use `getJson(url, callback, 'jsonp')` to fetch. The endpoint returns an object — read `data.events`, not the raw response. For the imperative API, call `inst.setEvents(data.events)`. Show a `Toast` with `message: "Loading events..."` and `duration: 1000`.

## What this demo shows

- A desktop monthly scheduler layout with a fixed month strip at the top, repeated resources for each day, a fixed all-day row below it, and a scrollable scheduler time grid for the selected month.
- **Loading events on demand** On the initial load or navigating both vertically and horizontally through scrolling, a `Loading events...` toast appears at the bottom center of the calendar. This indicates that the events were loaded real time.
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

- **On-scroll event loading** Explaining how to load calendar events as the user navigates both vertically and horizontally through scrolling.
- **Performance-sensitive calendars** Reducing the initial data load by fetching only the events needed for the currently visible date range.
- **Live data scenarios** Showing the most recent event data by requesting it when the calendar view changes.
