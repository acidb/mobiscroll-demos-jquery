function showAlert() {
  alert(
    'The calendar integration add-on is not available with the trial.' +
      ' It might be included with your license or as an add-on,' +
      " if that's the case, please run `npm install @mobiscroll/calendar-integration` in the project root.",
  );
}

var mockSync = {
  init: function () {
    setTimeout(showAlert);
  },
  signIn: function () {
    setTimeout(showAlert);
    return Promise.resolve();
  },
  signOut: function () {
    return Promise.resolve();
  },
  isSignedIn: function () {
    return false;
  },
  getCalendars: function (callback) {
    if (callback) {
      callback();
    }
    return Promise.resolve([]);
  },
  getEvents: function (calendarIds, start, end, callback) {
    if (callback) {
      callback();
    }
    return Promise.resolve([]);
  },
  addEvent: function (calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
  updateEvent: function (calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
  deleteEvent: function (calendarId, event, callback) {
    if (callback) {
      callback(null);
    }
    return Promise.resolve(null);
  },
};

export var googleCalendarSync = mockSync;
export var outlookCalendarSync = mockSync;
