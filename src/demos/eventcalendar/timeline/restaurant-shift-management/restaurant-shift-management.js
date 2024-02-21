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
      var calendar;
      var resources = [
        {
          id: 1,
          name: 'Barista',
          icon: '&#x2615;&#xfe0f;',
          eventCreation: false,
          children: [
            {
              id: 11,
              name: 'Jude Chester',
              color: '#1dab2f',
            },
            {
              id: 12,
              name: 'Willis Kane',
              color: '#1dab2f',
            },
            {
              id: 13,
              name: 'Ryan Melicent',
              color: '#1dab2f',
            },
          ],
        },
        {
          id: 2,
          name: 'Bartenders',
          icon: '&#127864;',
          eventCreation: false,
          children: [
            {
              id: 21,
              name: 'Derek Austyn',
              color: '#4981d6',
            },
            {
              id: 22,
              name: 'Merv Kenny',
              color: '#4981d6',
            },
            {
              id: 23,
              name: 'Theo Calanthia',
              color: '#4981d6',
            },
          ],
        },
        {
          id: 3,
          name: 'Chefs',
          icon: '&#128105;&#8205;&#127859;',
          eventCreation: false,
          children: [
            {
              id: 31,
              name: 'Ford Kaiden',
              color: '#d6d145',
            },
            {
              id: 32,
              name: 'Jewell Ryder',
              color: '#d6d145',
            },
            {
              id: 33,
              name: 'Dory Edie',
              color: '#d6d145',
            },
          ],
        },
        {
          id: 4,
          name: 'Cleaners',
          icon: '&#x1f9f9;',
          eventCreation: false,
          children: [
            {
              id: 41,
              name: 'Breanne Lorinda',
              color: '#ff1717',
            },
            {
              id: 42,
              name: 'Jenifer Kalyn',
              color: '#ff1717',
            },
            {
              id: 43,
              name: 'Natalie Racquel',
              color: '#ff1717',
            },
            {
              id: 44,
              name: 'Kaylin Toni',
              color: '#ff1717',
            },
            {
              id: 45,
              name: 'Gray Kestrel',
              color: '#ff1717',
            },
            {
              id: 46,
              name: 'Florence Amy',
              color: '#ff1717',
            },
          ],
        },
        {
          id: 5,
          name: 'Cooks',
          icon: '&#127858;',
          eventCreation: false,
          children: [
            {
              id: 51,
              name: 'Meredith Chantelle',
              color: '#f7961e',
            },
            {
              id: 52,
              name: 'Jon Drake',
              color: '#f7961e',
            },
            {
              id: 53,
              name: 'Carlyn Dorothy',
              color: '#f7961e',
            },
            {
              id: 54,
              name: 'Isadora Lyric',
              color: '#f7961e',
            },
          ],
        },
        {
          id: 6,
          name: 'Hosts',
          icon: '&#128718;',
          eventCreation: false,
          children: [
            {
              id: 61,
              name: 'Layton Candace',
              color: '#7056ff',
            },
            {
              id: 62,
              name: 'Sylvia Cale',
              color: '#7056ff',
            },
          ],
        },
        {
          id: 7,
          name: 'Managers',
          icon: '&#128105;&#8205;&#128188;',
          eventCreation: false,
          children: [
            {
              id: 71,
              name: 'Fred Valdez',
              color: '#3a8700',
            },
            {
              id: 72,
              name: 'Antonia Cindra',
              color: '#3a8700',
            },
            {
              id: 73,
              name: 'Gerry Irma',
              color: '#3a8700',
            },
          ],
        },
        {
          id: 8,
          name: 'Servers',
          icon: '&#129333;',
          eventCreation: false,
          children: [
            {
              id: 81,
              name: 'Reg Izabelle',
              color: '#e25dd2',
            },
            {
              id: 82,
              name: 'Adrianna Sawyer',
              color: '#e25dd2',
            },
            {
              id: 83,
              name: 'Lou Andie',
              color: '#e25dd2',
            },
            {
              id: 84,
              name: 'Leon Porter',
              color: '#e25dd2',
            },
          ],
        },
        {
          id: 9,
          name: 'Sommeliers',
          icon: '&#127863;',
          eventCreation: false,
          children: [
            {
              id: 91,
              name: 'Yancy Dustin',
              color: '#34c8e0',
            },
            {
              id: 92,
              name: 'Sierra Clark',
              color: '#34c8e0',
            },
          ],
        },
      ];

      var data = [
        //<hide-comment>
        {
          start: 'dyndatetime(y,m,d-2,2)',
          end: 'dyndatetime(y,m,d-2,10)',
          title: 'Derek',
          resource: 21,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,2)',
          end: 'dyndatetime(y,m,d-2,10)',
          title: 'Florence',
          resource: 46,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Willis',
          resource: 12,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Jenifer',
          resource: 42,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Jon',
          resource: 52,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Fred',
          resource: 71,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Adrianna',
          resource: 82,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-2,8)',
          end: 'dyndatetime(y,m,d-2,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Jewell',
          resource: 32,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Gray',
          resource: 45,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Isadora',
          resource: 54,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Antonia',
          resource: 72,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Adrianna',
          resource: 82,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,15)',
          title: 'Yancy',
          resource: 91,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Ryan',
          resource: 13,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Merv',
          resource: 22,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Ford',
          resource: 31,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Breanne',
          resource: 41,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Meredith',
          resource: 51,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Carlyn',
          resource: 53,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2, 16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Layton',
          resource: 61,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Gerry',
          resource: 73,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2, 16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,16)',
          end: 'dyndatetime(y,m,d-2,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-2,11)',
          end: 'dyndatetime(y,m,d-2,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-1,2)',
          end: 'dyndatetime(y,m,d-1,10)',
          title: 'Merv',
          resource: 22,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,2)',
          end: 'dyndatetime(y,m,d-1,10)',
          title: 'Florence',
          resource: 46,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Ryan',
          resource: 13,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Florence',
          resource: 46,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Carlyn',
          resource: 53,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Fred',
          resource: 71,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Leon',
          resource: 84,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d-1,8)',
          end: 'dyndatetime(y,m,d-1,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Ford',
          resource: 31,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Natalie',
          resource: 43,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Carlyn',
          resource: 53,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Gerry',
          resource: 73,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Lou',
          resource: 83,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,15)',
          title: 'Yancy',
          resource: 91,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Willis',
          resource: 12,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Merv',
          resource: 22,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Jewell',
          resource: 32,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Gray',
          resource: 45,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Jon',
          resource: 52,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Isadora',
          resource: 54,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1, 16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Layton',
          resource: 61,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Antonia',
          resource: 72,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1, 16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,16)',
          end: 'dyndatetime(y,m,d-1,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d-1,11)',
          end: 'dyndatetime(y,m,d-1,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        }, //</hide-comment>
        {
          start: 'dyndatetime(y,m,d,2)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Derek',
          resource: 21,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,2)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Florence',
          resource: 46,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Willis',
          resource: 12,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Jenifer',
          resource: 42,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Jon',
          resource: 52,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Fred',
          resource: 71,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Adrianna',
          resource: 82,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Jewell',
          resource: 32,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Gray',
          resource: 45,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Isadora',
          resource: 54,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Antonia',
          resource: 72,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Adrianna',
          resource: 82,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Yancy',
          resource: 91,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Ryan',
          resource: 13,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Merv',
          resource: 22,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Ford',
          resource: 31,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Breanne',
          resource: 41,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Meredith',
          resource: 51,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Carlyn',
          resource: 53,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d, 16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Layton',
          resource: 61,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Gerry',
          resource: 73,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d, 16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,16)',
          end: 'dyndatetime(y,m,d,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        }, //<hide-comment>
        {
          start: 'dyndatetime(y,m,d+1,2)',
          end: 'dyndatetime(y,m,d+1,10)',
          title: 'Theo',
          resource: 23,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+1,2)',
          end: 'dyndatetime(y,m,d+1,10)',
          title: 'Jenifer',
          resource: 42,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Jude',
          resource: 11,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Florence',
          resource: 46,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Jon',
          resource: 52,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Gerry',
          resource: 73,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Adrianna',
          resource: 82,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+1,8)',
          end: 'dyndatetime(y,m,d+1,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Dory',
          resource: 33,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Natalie',
          resource: 43,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Meredith',
          resource: 51,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Fred',
          resource: 71,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Lou',
          resource: 83,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,15)',
          title: 'Sierra',
          resource: 92,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Willis',
          resource: 12,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Derek',
          resource: 21,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Ford',
          resource: 31,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Kaylin',
          resource: 44,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Meredith',
          resource: 51,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Isadora',
          resource: 54,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1, 16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Sylvia',
          resource: 62,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Antonia',
          resource: 72,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1, 16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,16)',
          end: 'dyndatetime(y,m,d+1,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+1,11)',
          end: 'dyndatetime(y,m,d+1,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+2,2)',
          end: 'dyndatetime(y,m,d+2,10)',
          title: 'Merv',
          resource: 22,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+2,2)',
          end: 'dyndatetime(y,m,d+2,10)',
          title: 'Florence',
          resource: 46,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Ryan',
          resource: 13,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Florence',
          resource: 46,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Carlyn',
          resource: 53,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Fred',
          resource: 71,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Leon',
          resource: 84,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+2,8)',
          end: 'dyndatetime(y,m,d+2,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Ford',
          resource: 31,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Natalie',
          resource: 43,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Carlyn',
          resource: 53,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Gerry',
          resource: 73,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Lou',
          resource: 83,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,15)',
          title: 'Yancy',
          resource: 91,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Willis',
          resource: 12,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Merv',
          resource: 22,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Jewell',
          resource: 32,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Gray',
          resource: 45,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Jon',
          resource: 52,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Isadora',
          resource: 54,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2, 16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Layton',
          resource: 61,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Antonia',
          resource: 72,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2, 16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,16)',
          end: 'dyndatetime(y,m,d+2,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+2,11)',
          end: 'dyndatetime(y,m,d+2,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+3,2)',
          end: 'dyndatetime(y,m,d+3,10)',
          title: 'Derek',
          resource: 21,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+3,2)',
          end: 'dyndatetime(y,m,d+3,10)',
          title: 'Florence',
          resource: 46,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Willis',
          resource: 12,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Jenifer',
          resource: 42,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Jon',
          resource: 52,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Fred',
          resource: 71,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Adrianna',
          resource: 82,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+3,8)',
          end: 'dyndatetime(y,m,d+3,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Jewell',
          resource: 32,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Gray',
          resource: 45,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Isadora',
          resource: 54,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Antonia',
          resource: 72,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Adrianna',
          resource: 82,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,15)',
          title: 'Yancy',
          resource: 91,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Ryan',
          resource: 13,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Merv',
          resource: 22,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Ford',
          resource: 31,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Breanne',
          resource: 41,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Meredith',
          resource: 51,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Carlyn',
          resource: 53,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3, 16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Layton',
          resource: 61,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Gerry',
          resource: 73,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3, 16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,16)',
          end: 'dyndatetime(y,m,d+3,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+3,11)',
          end: 'dyndatetime(y,m,d+3,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+4,2)',
          end: 'dyndatetime(y,m,d+4,10)',
          title: 'Theo',
          resource: 23,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+4,2)',
          end: 'dyndatetime(y,m,d+4,10)',
          title: 'Jenifer',
          resource: 42,
          slot: 1,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Jude',
          resource: 11,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Jewell',
          resource: 32,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Florence',
          resource: 46,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Jon',
          resource: 52,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Gerry',
          resource: 73,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Adrianna',
          resource: 82,
          slot: 2,
        },
        {
          start: 'dyndatetime(y,m,d+4,8)',
          end: 'dyndatetime(y,m,d+4,12)',
          title: 'Jude',
          resource: 11,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Dory',
          resource: 33,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Natalie',
          resource: 43,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Meredith',
          resource: 51,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Fred',
          resource: 71,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Lou',
          resource: 83,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Leon',
          resource: 84,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,15)',
          title: 'Sierra',
          resource: 92,
          slot: 3,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Willis',
          resource: 12,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Derek',
          resource: 21,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Ford',
          resource: 31,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Dory',
          resource: 33,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Kaylin',
          resource: 44,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Meredith',
          resource: 51,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Isadora',
          resource: 54,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4, 16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Sylvia',
          resource: 62,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Antonia',
          resource: 72,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Reg',
          resource: 81,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4, 16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Lou',
          resource: 83,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,16)',
          end: 'dyndatetime(y,m,d+4,23)',
          title: 'Sierra',
          resource: 92,
          slot: 4,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,11,59)',
          title: 'Derek',
          resource: 21,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,11,59)',
          title: 'Natalie',
          resource: 43,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,11,59)',
          title: 'Kaylin',
          resource: 44,
          slot: 5,
        },
        {
          start: 'dyndatetime(y,m,d+4,11)',
          end: 'dyndatetime(y,m,d+4,11,59)',
          title: 'Fred',
          resource: 71,
          slot: 5,
        }, //</hide-comment>
      ];

      var slots = [
        {
          id: 1,
          name: 'Night',
          time: '2AM - 10AM',
        },
        {
          id: 2,
          name: 'Breakfast',
          time: '8AM - 12PM',
        },
        {
          id: 3,
          name: 'Lunch',
          time: '11AM - 3PM',
        },
        {
          id: 4,
          name: 'Dinner',
          time: '4PM - 11PM',
        },
        {
          id: 5,
          name: 'After hours',
          time: '11PM - 1AM',
        },
      ];

      calendar = $('#demo-restaurant-shift-management')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'week',
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          },
          data: data,
          resources: resources,
          slots: slots,
          clickToCreate: true,
          dragToMove: true,
          renderSlot: function (args) {
            var slot = args.slot;
            var date = formatDate(args.date);
            var shiftsElm = '';
            var shiftList = getShiftsNrs(date, slot.id);
            var length = 0;

            if (shiftList.length > 0) {
              for (var i = 0; i < shiftList.length; ++i) {
                if (shiftList[i]) {
                  shiftsElm +=
                    '<div class="md-shift-count">' +
                    '<span class="md-shift-icon">' +
                    resources[i].icon +
                    '</span>' +
                    '<span class="md-shift-nr md-shift-nr-' +
                    date +
                    '-' +
                    slot.id +
                    '-' +
                    (i + 1) +
                    '">' +
                    shiftList[i] +
                    '</span></div>' +
                    (length === 3 ? '<br />' : '');
                  ++length;
                }
              }
            } else {
              shiftsElm += '<div class="md-shift-count">&#x1f636; empty...</div>';
            }

            return (
              '<div class="md-shift-header">' +
              '<div class="md-shift-name">' +
              slot.name +
              '<span class="md-shift-time">' +
              slot.time +
              '</span></div>' +
              '<div class="md-shift-counts-' +
              date +
              '-' +
              slot.id +
              '">' +
              shiftsElm +
              '</div></div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
              '<label>Night' +
              '<input mbsc-checkbox type="checkbox" data-theme="material" class="md-shift-filter" value="1" checked>' +
              '</label>' +
              '<label>Breakfast' +
              '<input mbsc-checkbox type="checkbox" data-theme="material" class="md-shift-filter" value="2" checked>' +
              '</label>' +
              '<label>Lunch' +
              '<input mbsc-checkbox type="checkbox" data-theme="material" class="md-shift-filter" value="3" checked>' +
              '</label>' +
              '<label>Dinner' +
              '<input mbsc-checkbox type="checkbox" data-theme="material" class="md-shift-filter" value="4" checked>' +
              '</label>' +
              '<label>After hours' +
              '<input mbsc-checkbox type="checkbox" data-theme="material" class="md-shift-filter" value="5" checked>' +
              '</label>' +
              '<label>' +
              '<input mbsc-input id="shift-management-view" data-dropdown="true" data-input-style="box" />' +
              '</label>' +
              '<select id="shift-management-select">' +
              '<option value="day">Day</option>' +
              '<option value="week" selected>Week</option>' +
              '</select>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          renderResource: function (resource) {
            var parent = resource.children;
            return (
              '<div class="' +
              (parent ? 'md-shift-resource' : '') +
              '" style="color:' +
              (parent ? parent[0].color : '') +
              '">' +
              (parent ? '<span class="md-shift-resource-icon">' + resource.icon + '</span>' : '') +
              resource.name +
              '</div>'
            );
          },
          extendDefaultEvent: function (event) {
            return {
              title: getEmployeeName(event),
            };
          },
          onEventCreate: function (args, inst) {
            return addUpdateEvent(args.event, inst);
          },
          onEventUpdate: function (args, inst) {
            var event = $.extend({}, args.event);
            if (addUpdateEvent(event, inst)) {
              event.title = getEmployeeName(event);
              if (event.title) {
                inst.updateEvent(event);
              }
            } else {
              return false;
            }
          },
        })
        .mobiscroll('getInst');

      function addUpdateEvent(event, inst) {
        var date = event.start.setHours(0);
        var events = inst.getEvents(date);
        var ev = events.find(function (e) {
          return new Date(e.start).setHours(0) === date && e.resource === event.resource && e.slot === event.slot;
        });
        return ev ? false : true;
      }

      function getEmployeeName(event) {
        for (var i = 0; i < resources.length; ++i) {
          for (var j = 0; j < resources[i].children.length; ++j) {
            var employee = resources[i].children[j];
            if (employee.id === event.resource) {
              return employee.name.substr(0, employee.name.indexOf(' '));
            }
          }
        }
      }

      function getShiftsNrs(date, slotId) {
        var shifts = calendar ? calendar.getEvents(date) : data;
        var shiftNrs = [];

        for (var i = 0; i < shifts.length; ++i) {
          var shift = shifts[i];
          // get slot id from resource id
          var resourceNr = +shift.resource.toString().charAt(0);
          if (shift.slot == slotId && date == formatDate(shift.start)) {
            shiftNrs[resourceNr - 1] = (shiftNrs[resourceNr - 1] || 0) + 1;
          }
        }
        return shiftNrs;
      }

      function formatDate(date) {
        return mobiscroll.formatDate('YYYY-MM-DD', new Date(date));
      }

      $('#shift-management-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('shift-management-view'),
          touchUi: false,
          onChange: function (args) {
            if (args.value == 'day') {
              calendar.setOptions({
                view: {
                  timeline: {
                    type: 'day',
                    eventList: true,
                  },
                },
              });
            } else {
              calendar.setOptions({
                view: {
                  timeline: {
                    type: 'week',
                    eventList: true,
                    startDay: 1,
                    endDay: 5,
                  },
                },
              });
            }
          },
        });

      $('.md-shift-filter').change(function () {
        var selected = [];
        var displayedSlots = [];

        $('.md-shift-filter:checked').each(function () {
          selected.push(+$(this).val());
          $(this).mobiscroll('getInst').setOptions({ disabled: false });
        });

        for (var i = 0; i < slots.length; ++i) {
          var slot = slots[i];

          if (selected.indexOf(slot.id) > -1) {
            displayedSlots.push(slot);
          }
        }

        if (selected.length === 1) {
          $('.md-shift-filter[value=' + selected[0] + ']')
            .mobiscroll('getInst')
            .setOptions({ disabled: true });
        }

        calendar.setOptions({ slots: displayedSlots });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-restaurant-shift-management" class="md-shift-management-calendar"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-shift-management-calendar .mbsc-schedule-event {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
}

.md-shift-management-calendar .mbsc-timeline-slots {
    height: 94px;
}

.md-shift-management-calendar .mbsc-timeline-header-placeholder {
    height: 120px;
}

.md-shift-management-calendar .mbsc-timeline-resource {
    display: flex;
    align-items: center;
}

.md-shift-management-calendar .mbsc-timeline-slot {
    width: 200px;
}

.md-shift-management-calendar .mbsc-timeline-parent {
    height: 40px;
}

.md-shift-management-calendar .mbsc-checkbox {
    padding: 18px 0 18px 45px;
}

.md-shift-management-calendar .mbsc-textfield-wrapper {
    margin: 12px 12px 12px 28px;
}

.md-shift-management-calendar .mbsc-select.mbsc-textfield {
    height: 32px;
    width: 120px;
}

.md-shift-management-calendar .mbsc-icon.mbsc-select-icon {
    width: 20px;
    height: 20px;
    top: 7px;
}

.md-shift-resource {
    font-size: 18px;
}

.md-shift-resource-icon {
    margin-right: 10px;
}

.md-shift-header {
    margin: 3px 6px;
    display: flex;
    flex-direction: column;
}

.md-shift-name {
    font-size: 15px;
}

.md-shift-time {
    opacity: .5;
    font-size: 12px;
    margin-left: 5px;
}

.md-shift-count {
    margin-top: 6px;
    margin-right: 12px;
    display: inline-block;
    width: 26px;
    height: 20px;
}

.md-shift-icon {
    padding-right: 3px;
}
  `,
};
