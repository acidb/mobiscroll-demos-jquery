To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-jquery?tab=readme-ov-file#mobiscroll-jquery-demos).

To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/jquery/agenda/daily-agenda-with-week-calendar#).

## Demo description

With the agenda you can list out events for any range grouped by days. Use it as a stand alone UI component or combine it with a [calendar week view](https://demo.mobiscroll.com/jquery/calendar/week-view#) to make navigation easier.

You can add the components - like the calendar and agenda - and configure them in the `view` option.

- **Interested to learn about the calendar view?** [Check out the event calendar →](https://demo.mobiscroll.com/jquery/eventcalendar/#)

## Related demos

- [Check out the event calendar →](https://demo.mobiscroll.com/jquery/eventcalendar/#)

## Implementation instructions

- Use `view: { calendar: { type: 'week' }, agenda: { type: 'day' } }` — the week calendar grid and the daily agenda list are rendered together as a single component; clicking a day in the calendar scrolls the agenda to that day.
- Load events from `https://trial.mobiscroll.com/events/?vers=5` via JSONP using `getJson(url, callback, 'jsonp')`. Angular: use `HttpClient.jsonp()` instead. JS/jQuery: call `inst.setEvents(events)` in the callback.
- On `onEventClick`: show a Mobiscroll `Toast` with `args.event.title`.
