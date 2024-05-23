import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var defaultEvents = [
      {
        id: 1,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 2,
        start: 'dyndatetime(y,m,d-6)',
        end: 'dyndatetime(y,m,d-6)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 3,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 4,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-4)',
        title: 'orlando',
        consumption: 345345,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 5,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 6,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 7,
        start: 'dyndatetime(y,m,d-1)',
        end: 'dyndatetime(y,m,d-1)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 8,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 9,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 10,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 11,
        start: 'dyndatetime(y,m,d+3)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 12,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 13,
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 14,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'orlando',
        consumption: 0,
        distance: 0,
        resource: 'orlando',
      },
      {
        id: 15,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 16,
        start: 'dyndatetime(y,m,d-6)',
        end: 'dyndatetime(y,m,d-6)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 17,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 18,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-4)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 19,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 20,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 21,
        start: 'dyndatetime(y,m,d-1)',
        end: 'dyndatetime(y,m,d-1)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 22,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 23,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 24,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 25,
        start: 'dyndatetime(y,m,d+3)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 26,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 27,
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 28,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'las-vegas',
        consumption: 0,
        distance: 0,
        resource: 'las-vegas',
      },
      {
        id: 29,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 30,
        start: 'dyndatetime(y,m,d-6)',
        end: 'dyndatetime(y,m,d-6)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 31,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 32,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-4)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 33,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 34,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 35,
        start: 'dyndatetime(y,m,d-1)',
        end: 'dyndatetime(y,m,d-1)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 36,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 37,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 38,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 39,
        start: 'dyndatetime(y,m,d+3)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 40,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 41,
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      {
        id: 42,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'miami',
        consumption: 0,
        distance: 0,
        resource: 'miami',
      },
      ////////
      {
        id: 43,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: '#3ab19164',
        consumption: 1.5,
        distance: 24,
        resource: 'orlando1',
      },
      {
        id: 44,
        start: 'dyndatetime(y,m,d-6)',
        end: 'dyndatetime(y,m,d-6)',
        title: '#0f1cfc4f',
        consumption: 35,
        distance: 500,
        resource: 'orlando1',
      },
      {
        id: 45,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: '#75f15b75',
        consumption: 18.5,
        distance: 250,
        resource: 'orlando1',
      },
      {
        id: 46,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-4)',
        title: '#1735736a',
        consumption: 7,
        distance: 100,
        resource: 'orlando1',
      },
      {
        id: 47,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: '#c97875f1',
        consumption: 15.5,
        distance: 220,
        resource: 'orlando1',
      },
      {
        id: 48,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: '#9bdfef48',
        consumption: 21,
        distance: 300,
        resource: 'orlando1',
      },
      {
        id: 49,
        start: 'dyndatetime(y,m,d-1)',
        end: 'dyndatetime(y,m,d-1)',
        title: 'orlando1', // id s from here
        consumption: 42,
        distance: 600,
        resource: 'orlando1',
      },
      {
        id: 50,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'orlando1',
        consumption: 3.5,
        distance: 50,
        resource: 'orlando1',
      },
      {
        id: 51,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        title: 'orlando1',
        consumption: 21.5,
        distance: 320,
        resource: 'orlando1',
      },
      {
        id: 52,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'orlando1',
        consumption: 28,
        distance: 400,
        resource: 'orlando1',
      },
      {
        id: 53,
        start: 'dyndatetime(y,m,d+3)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'orlando1',
        consumption: 7,
        distance: 100,
        resource: 'orlando1',
      },
      {
        id: 54,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'orlando2',
        consumption: 38.5,
        distance: 550,
        resource: 'orlando2',
      },
      {
        id: 55,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'orlando2',
        consumption: 6,
        distance: 80,
        resource: 'orlando2',
      },
      {
        id: 56,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'orlando2',
        consumption: 22,
        distance: 320,
        resource: 'orlando2',
      },
      {
        id: 57,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'orlando2',
        consumption: 10.5,
        distance: 150,
        resource: 'orlando2',
      },
      {
        id: 58,
        start: 'dyndatetime(y,m,d+3)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'orlando2',
        consumption: 14,
        distance: 200,
        resource: 'orlando2',
      },
      {
        id: 59,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'orlando2',
        consumption: 3.6,
        distance: 46,
        resource: 'orlando2',
      },
      {
        id: 60,
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'orlando2',
        consumption: 21,
        distance: 300,
        resource: 'orlando2',
      },
      {
        id: 61,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'orlando2',
        consumption: 28,
        distance: 400,
        resource: 'orlando2',
      },
      {
        id: 63,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: 'orlando3',
        consumption: 42,
        distance: 600,
        resource: 'orlando3',
      },
      {
        id: 64,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'orlando3',
        consumption: 14,
        distance: 200,
        resource: 'orlando3',
      },
      {
        id: 65,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'orlando3',
        consumption: 31.5,
        distance: 450,
        resource: 'orlando3',
      },
      {
        id: 66,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'orlando3',
        consumption: 3.5,
        distance: 50,
        resource: 'orlando3',
      },
      {
        id: 67,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'orlando3',
        consumption: 30,
        distance: 430,
        resource: 'orlando3',
      },
      {
        id: 68,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'orlando3',
        consumption: 8.4,
        distance: 130,
        resource: 'orlando3',
      },
      {
        id: 69,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'orlando3',
        consumption: 35,
        distance: 500,
        resource: 'orlando3',
      },
      /////////////////////////////////////////////////////////
      {
        id: 70,
        start: 'dyndatetime(y,m,d-7)',
        end: 'dyndatetime(y,m,d-7)',
        title: 'las-vegas1',
        consumption: 1.5,
        distance: 24,
        resource: 'las-vegas1',
      },
      {
        id: 71,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'las-vegas1',
        consumption: 35,
        distance: 500,
        resource: 'las-vegas1',
      },
      {
        id: 72,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'las-vegas1',
        consumption: 18.5,
        distance: 250,
        resource: 'las-vegas1',
      },
      {
        id: 73,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'las-vegas1',
        consumption: 7,
        distance: 100,
        resource: 'las-vegas1',
      },
      {
        id: 74,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+1)',
        title: 'las-vegas1',
        consumption: 15.5,
        distance: 220,
        resource: 'las-vegas1',
      },
      {
        id: 75,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+2)',
        title: 'las-vegas1',
        consumption: 21,
        distance: 300,
        resource: 'las-vegas1',
      },
      {
        id: 76,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'las-vegas1',
        consumption: 42,
        distance: 600,
        resource: 'las-vegas1',
      },
      {
        id: 77,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'las-vegas1',
        consumption: 3.5,
        distance: 50,
        resource: 'las-vegas1',
      },
      {
        id: 78,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'las-vegas2',
        consumption: 21.5,
        distance: 320,
        resource: 'las-vegas2',
      },
      {
        id: 79,
        start: 'dyndatetime(y,m,d-3)',
        end: 'dyndatetime(y,m,d-3)',
        title: 'las-vegas2',
        consumption: 28,
        distance: 400,
        resource: 'las-vegas2',
      },
      {
        id: 80,
        start: 'dyndatetime(y,m,d-1)',
        end: 'dyndatetime(y,m,d-1)',
        title: 'las-vegas2',
        consumption: 7,
        distance: 100,
        resource: 'las-vegas2',
      },
      {
        id: 81,
        start: 'dyndatetime(y,m,d+1)',
        end: 'dyndatetime(y,m,d+3)',
        title: 'las-vegas2',
        consumption: 38.5,
        distance: 550,
        resource: 'las-vegas2',
      },
      {
        id: 82,
        start: 'dyndatetime(y,m,d+5)',
        end: 'dyndatetime(y,m,d+5)',
        title: 'las-vegas2',
        consumption: 6,
        distance: 80,
        resource: 'las-vegas2',
      },
      {
        id: 83,
        start: 'dyndatetime(y,m,d+6)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'las-vegas2',
        consumption: 22,
        distance: 320,
        resource: 'las-vegas2',
      },
      {
        id: 84,
        start: 'dyndatetime(y,m,d-5)',
        end: 'dyndatetime(y,m,d-5)',
        title: 'las-vegas3',
        consumption: 10.5,
        distance: 150,
        resource: 'las-vegas3',
      },
      {
        id: 85,
        start: 'dyndatetime(y,m,d-4)',
        end: 'dyndatetime(y,m,d-4)',
        title: 'las-vegas3',
        consumption: 14,
        distance: 200,
        resource: 'las-vegas3',
      },
      {
        id: 86,
        start: 'dyndatetime(y,m,d-2)',
        end: 'dyndatetime(y,m,d-2)',
        title: 'las-vegas3',
        consumption: 3.6,
        distance: 46,
        resource: 'las-vegas3',
      },
      {
        id: 87,
        start: 'dyndatetime(y,m,d)',
        end: 'dyndatetime(y,m,d)',
        title: 'las-vegas3',
        consumption: 21,
        distance: 300,
        resource: 'las-vegas3',
      },
      {
        id: 88,
        start: 'dyndatetime(y,m,d+2)',
        end: 'dyndatetime(y,m,d+4)',
        title: 'las-vegas3',
        consumption: 28,
        distance: 400,
        resource: 'las-vegas3',
      },
      {
        id: 89,
        start: 'dyndatetime(y,m,d+4)',
        end: 'dyndatetime(y,m,d+6)',
        title: 'las-vegas3',
        consumption: 31.5,
        distance: 450,
        resource: 'las-vegas3',
      },
    ];

    // var getMapping = function (str) {
    //   switch (str) {
    //     case 'sedan1':
    //     case 'sedan2':
    //     case 'sedan3':
    //       return 'sedans';
    //     case 'suv1':
    //     case 'suv2':
    //     case 'suv3':
    //       return 'suvs';
    //     case 'minivan1':
    //     case 'minivan2':
    //     case 'minivan3':
    //       return 'minivans';
    //     case 'cargo-van1':
    //     case 'cargo-van2':
    //     case 'cargo-van3':
    //       return 'cargo-vans';
    //     default:
    //       return str;
    //   }
    // };
    // var updateAggregates = function (dayEvents, firstDay, lastDay) {
    //   var parentIds = ['sedans', 'suvs'];
    //   var mapOfUpdates = {};

    //   var dayStart = +new Date(firstDay);
    //   var dayMid = +new Date(firstDay).setHours(12);
    //   var dayEnd = +new Date(lastDay);
    //   dayEvents.forEach(function (event) {
    //     var eventStart = +new Date(event.start);
    //     var eventEnd = +new Date(event.end);
    //     var isAM = eventStart < dayMid && eventEnd > dayStart;
    //     var isPM = eventStart < dayEnd && eventEnd > dayMid;
    //     var partOfDay = '';
    //     if (isAM) {
    //       partOfDay = 'am';
    //     }
    //     if (isPM) {
    //       partOfDay = 'pm';
    //     }
    //     if (parentIds.indexOf(event.resource) >= 0) {
    //       if (!mapOfUpdates[event.resource + partOfDay]) {
    //         mapOfUpdates[event.resource + partOfDay] = {
    //           event: event,
    //           consumption: 0,
    //           distance: 0,
    //         };
    //       }
    //     }
    //   });

    //   dayEvents.forEach(function (event) {
    //     var mapping = getMapping(event.resource);
    //     var eventStart = +new Date(event.start);
    //     var eventEnd = +new Date(event.end);
    //     var isAM = eventStart < dayMid && eventEnd > dayStart;
    //     var isPM = eventStart < dayEnd && eventEnd > dayMid;
    //     if (isAM) {
    //       mapOfUpdates[mapping + 'am'].consumption += event.consumption;
    //       mapOfUpdates[mapping + 'am'].distance += event.distance;
    //     }
    //     if (isPM) {
    //       mapOfUpdates[mapping + 'pm'].consumption += event.consumption;
    //       mapOfUpdates[mapping + 'pm'].distance += event.distance;
    //     }
    //   });
    //   var aggregates = {};
    //   Object.keys(mapOfUpdates).forEach(function (key) {
    //     var el = mapOfUpdates[key];
    //     var event = el.event;
    //     event.consumption = el.consumption;
    //     event.distance = el.distance;
    //     aggregates[event.id] = event;
    //   });
    //   return aggregates;
    // };

    $(function () {
      var inst = $('#demo-show-summaries-aggregates-for-resource-groups')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventList: true,
              eventHeight: 'variable',
              // timeCellStep: 720,
              // timeLabelStep: 360,
            },
          },
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          // onPageLoading: function (args, inst) {
          //   var dailyEvents = inst.getEvents(args.firstDay, args.lastDay);
          //   var updatedSummaries = updateAggregates(dailyEvents, args.firstDay, args.lastDay);
          //   var updatedEvents = defaultEvents.map(function (e) {
          //     if (updatedSummaries[e.id]) {
          //       return updatedSummaries[e.id];
          //     }
          //     return e;
          //   });
          //   setTimeout(function () {
          //     inst.setEvents(updatedEvents);
          //   });
          // },
          renderResource: function (res) {
            var isParent = res.isParent;
            if (isParent) {
              return '<div>' + res.name + '</div>';
            }
            return '<div>' + res.name + '</div><div>' + res.description + '</div>';
          },
          renderScheduleEventContent: function (event) {
            var isParent = event.currentResource.isParent;
            if (isParent) {
              return (
                '<div class="mds-show-summaries-aggregates-parent">' +
                '<div class="mds-show-summaries-aggregates-details"><div>Estimated distance: <div><span class="mds-show-summaries-aggregates-highlight">' +
                event.original.distance +
                '</span> miles</div></div><div>Total fuel consumption: <div><span class="mds-show-summaries-aggregates-highlight">' +
                event.original.consumption +
                '</span> gallons</div></div><div>Average fuel consumption: <div><span class="mds-show-summaries-aggregates-highlight">' +
                event.original.consumption +
                '</span> gallons</div></div></div></div></div>'
              );
            }
            return (
              '<div class="">' +
              '<div class="mds-show-summaries-aggregates-title">Carrier ID: ' +
              event.title +
              '</div><div class="mds-show-summaries-aggregates-details"><div>Distance covered: <span class="mds-show-summaries-aggregates-highlight">' +
              event.original.distance +
              '</span> miles</div><div>Consumption: <span class="mds-show-summaries-aggregates-highlight">' +
              event.original.consumption +
              '</span> gallons</div></div></div>'
            );
          },
          resources: [
            {
              id: 'orlando',
              name: 'Orlando, Florida',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: '#fff',
              children: [
                {
                  id: 'orlando1',
                  name: 'SUNSHNE1',
                  description: 'Lincoln Continental',
                },
                {
                  id: 'orlando2',
                  name: 'MAGICC1T',
                  description: 'Porsche Panamera',
                },
                {
                  id: 'orlando3',
                  name: 'OASIS4U',
                  description: 'Range Rover Velar',
                },
              ],
            },
            {
              id: 'las-vegas',
              name: 'Las Vegas, Nevada',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: '#fff',
              children: [
                {
                  id: 'las-vegas1',
                  name: 'LVBLISS',
                  description: 'Mercedes-Benz E-Class',
                },
                {
                  id: 'las-vegas2',
                  name: '5VEGAS',
                  description: 'BMW 5 Series',
                },
                {
                  id: 'las-vegas3',
                  name: 'A6VEGAS',
                  description: 'Audi A6',
                },
              ],
            },
            {
              id: 'miami',
              name: 'Miami, Florida',
              eventCreation: false,
              eventDragBetweenResources: false,
              eventDragInTime: false,
              eventResize: false,
              color: '#fff',
              children: [
                {
                  id: 'miami1',
                  name: 'MIASLEEK',
                  description: 'Lexus ES',
                },
                {
                  id: 'miami2',
                  name: 'MIACRUIZ',
                  description: 'Cadillac CT6',
                },
                {
                  id: 'miami3',
                  name: 'MIAJGAR',
                  description: 'Jaguar XF',
                },
              ],
            },
          ],
          data: defaultEvents,
        })
        .mobiscroll('getInst');

      //TODO B-E IMPL
      // $.getJSON(
      //   'https://trial.mobiscroll.com/timeline-events/?callback=?',
      //   function (events) {
      //     inst.setEvents(events);
      //   },
      //   'jsonp',
      // );
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-show-summaries-aggregates-for-resource-groups" class="demo-show-summaries-aggregates-for-resource-groups"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-resource-title{
    font-size: 16px;
    font-weight: 700;
  }
  .mds-show-summaries-aggregates-parent {
    /*background: #fafafa;
    color: #000;*/
  }
  .mds-show-summaries-aggregates-title {
    white-space: normal;
    line-height: 20px;
    font-size: 16px;
    font-weight: 700;
  }
  .mds-show-summaries-aggregates-description {
    padding: 4px 0;
    white-space: normal;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }
  /*.mds-show-summaries-aggregates-parent-description {
    font-weight: 700;
  }*/
  .mds-show-summaries-aggregates-highlight {
    font-weight: 700;
  }
  .mds-show-summaries-aggregates-details {
    white-space: normal;
    padding: 8px 0;
  }
  .demo-show-summaries-aggregates-for-resource-groups .mbsc-schedule-event-inner {
    height: auto;
    width: 100%;
  }
  /*.demo-show-summaries-aggregates-for-resource-groups .mbsc-timeline-parent .mbsc-schedule-event-inner {
    padding: 0;
  }*/
  `,
};
