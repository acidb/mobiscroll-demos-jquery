import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';
import { dyndatetime } from '../../../../dyndatetime';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var myEvents = [
        // Resource 1–3 (size <=3.5)
        {
          resource: 1,
          from: '100 Main St, Dallas, TX',
          to: '50 Congress Ave, Tulsa, OK',
          size: 3,
          pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
          drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
          status: 'completed',
        },
        {
          resource: 2,
          from: '200 Elm St, Fargo, ND',
          to: '75 N 3rd St, Bismarck, ND',
          size: 2.5,
          pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
          drop: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
          status: 'in progress',
        },
        {
          resource: 3,
          from: '150 Broadway, Manchester, NH',
          to: '50 Kennedy Memorial Dr, Waterville, ME',
          size: 3.5,
          pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
          drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,14')],
          status: 'scheduled',
        },
        {
          resource: 1,
          from: '50 N Main St, Phoenix, AZ',
          to: '200 Broadway Ave, Albuquerque, NM',
          size: 3,
          pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
          drop: [dyndatetime('y,m,d+3,15'), dyndatetime('y,m,d+3,17')],
          status: 'scheduled',
        },
        // Resource 4–6 (size <=7)
        {
          resource: 4,
          from: '85 Arch St, Boston, MA',
          to: '40 Middle St, Portland, ME',
          size: 6.5,
          pickup: [dyndatetime('y,m,d-1,8'), dyndatetime('y,m,d-1,10')],
          drop: [dyndatetime('y,m,d-1,12'), dyndatetime('y,m,d-1,14')],
          status: 'completed',
        },
        {
          resource: 5,
          from: '300 E Main St, Richmond, VA',
          to: '100 S Tryon St, Charlotte, NC',
          size: 7,
          pickup: [dyndatetime('y,m,d,5'), dyndatetime('y,m,d,7')],
          drop: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,12')],
          status: 'completed',
        },
        {
          resource: 6,
          from: '900 W Belmont Ave, Chicago, IL',
          to: '300 Market St, St Louis, MO',
          size: 6,
          pickup: [dyndatetime('y,m,d+6,9'), dyndatetime('y,m,d+6,11')],
          drop: [dyndatetime('y,m,d+6,14'), dyndatetime('y,m,d+6,16')],
          status: 'scheduled',
        },
        {
          resource: 4,
          from: '250 King St, Greensboro, NC',
          to: '200 Hay St, Fayetteville, NC',
          size: 6.5,
          pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
          drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,20')],
          status: 'scheduled',
        },
        // Resource 7–9 (size <=12)
        {
          resource: 7,
          from: '233 S Wacker Dr, Chicago, IL',
          to: '10 Public Square, Cleveland, OH',
          size: 11,
          pickup: [dyndatetime('y,m,d,8'), dyndatetime('y,m,d,11')],
          drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,19')],
          status: 'scheduled',
        },
        {
          resource: 8,
          from: '180 S High St, Columbus, OH',
          to: '75 E Main St, Lexington, KY',
          size: 12,
          pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,10')],
          drop: [dyndatetime('y,m,d+2,15'), dyndatetime('y,m,d+2,18')],
          status: 'scheduled',
        },
        {
          resource: 9,
          from: '100 E Capitol St, Jackson, MS',
          to: '250 Riverfront Pkwy, Chattanooga, TN',
          size: 10,
          pickup: [dyndatetime('y,m,d+5,7'), dyndatetime('y,m,d+5,10')],
          drop: [dyndatetime('y,m,d+5,16'), dyndatetime('y,m,d+5,19')],
          status: 'scheduled',
        },
        {
          resource: 7,
          from: '50 Arch St, Boston, MA',
          to: '200 Middle St, Portland, ME',
          size: 9,
          pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,10')],
          drop: [dyndatetime('y,m,d+6,12'), dyndatetime('y,m,d+6,14')],
          status: 'scheduled',
        },
        // Resource 10–12 (size <=20)
        {
          resource: 10,
          from: '50 N 1st Ave, Phoenix, AZ',
          to: '200 Broadway Ave, Albuquerque, NM',
          size: 20,
          pickup: [dyndatetime('y,m,d,10'), dyndatetime('y,m,d,13')],
          drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
          status: 'in progress',
        },
        {
          resource: 11,
          from: '120 Broadway, New York, NY',
          to: '55 Canal St, New Orleans, LA',
          size: 18,
          pickup: [dyndatetime('y,m,d+3,6'), dyndatetime('y,m,d+3,9')],
          drop: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,14')],
          status: 'scheduled',
        },
        {
          resource: 12,
          from: '600 Poydras St, New Orleans, LA',
          to: '200 Commerce St, Montgomery, AL',
          size: 20,
          pickup: [dyndatetime('y,m,d+7,6'), dyndatetime('y,m,d+7,9')],
          drop: [dyndatetime('y,m,d+7,14'), dyndatetime('y,m,d+7,17')],
          status: 'scheduled',
        },
        {
          resource: 10,
          from: '120 Main St, Boston, MA',
          to: '50 Canal St, New Orleans, LA',
          size: 19,
          pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,10')],
          drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,17')],
          status: 'scheduled',
        },
        // Resource 13–15 (size <=24)
        {
          resource: 13,
          from: '100 Main St, Dallas, TX',
          to: '15 Broadway St, Denver, CO',
          size: 22,
          pickup: [dyndatetime('y,m,d,7'), dyndatetime('y,m,d,10')],
          drop: [dyndatetime('y,m,d+1,4'), dyndatetime('y,m,d+1,8')],
          status: 'scheduled',
        },
        {
          resource: 14,
          from: '300 Main St, Houston, TX',
          to: '120 W Capitol Ave, Little Rock, AR',
          size: 24,
          pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,13')],
          drop: [dyndatetime('y,m,d+2,18'), dyndatetime('y,m,d+2,22')],
          status: 'scheduled',
        },
        {
          resource: 15,
          from: '900 S Flower St, Los Angeles, CA',
          to: '300 2nd Ave, Seattle, WA',
          size: 23,
          pickup: [dyndatetime('y,m,d+5,5'), dyndatetime('y,m,d+5,8')],
          drop: [dyndatetime('y,m,d+5,12'), dyndatetime('y,m,d+5,16')],
          status: 'scheduled',
        },
        {
          resource: 13,
          from: '350 S Spring St, Los Angeles, CA',
          to: '500 E Rim Rd, El Paso, TX',
          size: 24,
          pickup: [dyndatetime('y,m,d+8,6'), dyndatetime('y,m,d+8,9')],
          drop: [dyndatetime('y,m,d+8,18'), dyndatetime('y,m,d+8,21')],
          status: 'scheduled',
        },
        {
          resource: 14,
          from: '200 Market St, Philadelphia, PA',
          to: '400 Washington Ave, Minneapolis, MN',
          size: 23,
          pickup: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,16')],
          drop: [dyndatetime('y,m,d+3,20'), dyndatetime('y,m,d+3,23')],
          status: 'scheduled',
        },
        {
          resource: 15,
          from: '500 S Wacker Dr, Chicago, IL',
          to: '100 State St, Portland, ME',
          size: 24,
          pickup: [dyndatetime('y,m,d+6,8'), dyndatetime('y,m,d+6,11')],
          drop: [dyndatetime('y,m,d+6,16'), dyndatetime('y,m,d+6,19')],
          status: 'scheduled',
        },
        // Extra scheduled events
        {
          resource: 1,
          from: '300 W Madison St, Chicago, IL',
          to: '500 Euclid Ave, Cleveland, OH',
          size: 3,
          pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
          drop: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,16')],
          status: 'scheduled',
        },
        {
          resource: 4,
          from: '800 N 3rd St, Philadelphia, PA',
          to: '200 W Baltimore St, Baltimore, MD',
          size: 6.5,
          pickup: [dyndatetime('y,m,d+2,7'), dyndatetime('y,m,d+2,9')],
          drop: [dyndatetime('y,m,d+2,12'), dyndatetime('y,m,d+2,15')],
          status: 'scheduled',
        },
        {
          resource: 5,
          from: '900 Biscayne Blvd, Miami, FL',
          to: '400 N Orange Ave, Orlando, FL',
          size: 7,
          pickup: [dyndatetime('y,m,d+1,9'), dyndatetime('y,m,d+1,11')],
          drop: [dyndatetime('y,m,d+1,14'), dyndatetime('y,m,d+1,18')],
          status: 'scheduled',
        },
        {
          resource: 7,
          from: '100 S 5th St, Minneapolis, MN',
          to: '300 W Kellogg Blvd, St Paul, MN',
          size: 9,
          pickup: [dyndatetime('y,m,d+3,8'), dyndatetime('y,m,d+3,10')],
          drop: [dyndatetime('y,m,d+3,14'), dyndatetime('y,m,d+3,17')],
          status: 'scheduled',
        },
        {
          resource: 8,
          from: '500 W 2nd St, Austin, TX',
          to: '2200 Post Oak Blvd, Houston, TX',
          size: 12,
          pickup: [dyndatetime('y,m,d+4,7'), dyndatetime('y,m,d+4,10')],
          drop: [dyndatetime('y,m,d+4,15'), dyndatetime('y,m,d+4,18')],
          status: 'scheduled',
        },
        {
          resource: 11,
          from: '600 Grant St, Pittsburgh, PA',
          to: '200 W Washington St, Indianapolis, IN',
          size: 18,
          pickup: [dyndatetime('y,m,d+1,6'), dyndatetime('y,m,d+1,9')],
          drop: [dyndatetime('y,m,d+1,16'), dyndatetime('y,m,d+1,20')],
          status: 'scheduled',
        },
        {
          resource: 14,
          from: '400 N Michigan Ave, Chicago, IL',
          to: '250 E Wisconsin Ave, Milwaukee, WI',
          size: 23,
          pickup: [dyndatetime('y,m,d+5,8'), dyndatetime('y,m,d+5,11')],
          drop: [dyndatetime('y,m,d+5,15'), dyndatetime('y,m,d+5,18')],
          status: 'scheduled',
        },
        {
          resource: 13,
          from: '700 Figueroa St, Los Angeles, CA',
          to: '50 W San Fernando St, San Jose, CA',
          size: 22,
          pickup: [dyndatetime('y,m,d+4,6'), dyndatetime('y,m,d+4,9')],
          drop: [dyndatetime('y,m,d+4,17'), dyndatetime('y,m,d+4,21')],
          status: 'scheduled',
        },
      ];

      var myResources = [
        {
          id: 'cap1',
          name: '3.5 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 1,
              name: 'Isuzu N-Series N35',
              capacity: 3.5,
              status: 'operational',
              plate: 'AB14 KTP',
            },
            {
              id: '1-actual',
              name: '',
              capacity: 3.5,
              status: 'operational',
              plate: 'AB14 KTP',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 2,
              name: 'Mercedes-Benz Sprinter 3500',
              capacity: 3.5,
              status: 'operational',
              plate: 'FR19 XDL',
            },
            {
              id: '2-actual',
              name: '',
              capacity: 3.5,
              status: 'operational',
              plate: 'FR19 XDL',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 3,
              name: 'Ford Transit 350',
              capacity: 3.5,
              status: 'operational',
              plate: 'QN62 RPV',
              maintenanceFrom: dyndatetime('y,m,d-2,0'),
              maintenanceTo: dyndatetime('y,m,d+2,0'),
            },
            {
              id: '3-actual',
              name: '',
              capacity: 3.5,
              status: 'operational',
              plate: 'QN62 RPV',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
              maintenanceFrom: dyndatetime('y,m,d-2,0'),
              maintenanceTo: dyndatetime('y,m,d+2,0'),
            },
          ],
        },
        {
          id: 'cap2',
          name: '7 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 4,
              name: 'Ford F-650 Super Duty',
              capacity: 7,
              status: 'operational',
              plate: 'GR12 PEV',
            },
            {
              id: '4-actual',
              name: '',
              capacity: 7,
              status: 'operational',
              plate: 'GR12 PEV',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 5,
              name: 'Isuzu F-Series FTR',
              capacity: 7,
              status: 'operational',
              plate: 'MB27 FTK',
            },
            {
              id: '5-actual',
              name: '',
              capacity: 7,
              status: 'operational',
              plate: 'MB27 FTK',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 6,
              name: 'Hino 300 Series 716',
              capacity: 7,
              status: 'operational',
              plate: 'KT73 ZLD',
              maintenanceFrom: dyndatetime('y,m,d+2,0'),
              maintenanceTo: dyndatetime('y,m,d+5,0'),
            },
            {
              id: '6-actual',
              name: '',
              capacity: 7,
              status: 'operational',
              plate: 'KT73 ZLD',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
              maintenanceFrom: dyndatetime('y,m,d+2,0'),
              maintenanceTo: dyndatetime('y,m,d+5,0'),
            },
          ],
        },
        {
          id: 'cap3',
          name: '12 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 7,
              name: 'Hino 500 Series FD',
              capacity: 12,
              status: 'operational',
              plate: 'EP17 GMF',
            },
            {
              id: '7-actual',
              name: '',
              capacity: 12,
              status: 'operational',
              plate: 'EP17 GMF',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 8,
              name: 'Isuzu F-Series FVR',
              capacity: 12,
              status: 'operational',
              plate: 'DS41 CXP',
            },
            {
              id: '8-actual',
              name: '',
              capacity: 12,
              status: 'operational',
              plate: 'DS41 CXP',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 9,
              name: 'Mercedes-Benz Atego 1218',
              capacity: 12,
              status: 'operational',
              plate: 'NH65 QWD',
              maintenanceFrom: dyndatetime('y,m,d-1,0'),
              maintenanceTo: dyndatetime('y,m,d+1,0'),
            },
            {
              id: '9-actual',
              name: '',
              capacity: 12,
              status: 'operational',
              plate: 'NH65 QWD',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
              maintenanceFrom: dyndatetime('y,m,d-1,0'),
              maintenanceTo: dyndatetime('y,m,d+1,0'),
            },
          ],
        },
        {
          id: 'cap4',
          name: '20 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 10,
              name: 'Mercedes Actros 2545',
              capacity: 20,
              status: 'operational',
              plate: 'KT19 LNV',
            },
            {
              id: '10-actual',
              name: '',
              capacity: 20,
              status: 'operational',
              plate: 'KT19 LNV',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 11,
              name: 'DAF XF 530',
              capacity: 20,
              status: 'operational',
              plate: 'WP64 GBX',
            },
            {
              id: '11-actual',
              name: '',
              capacity: 20,
              status: 'operational',
              plate: 'WP64 GBX',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 12,
              name: 'Renault T High 520',
              capacity: 20,
              status: 'operational',
              plate: 'CD70 UJE',
              maintenanceFrom: dyndatetime('y,m,d+4,0'),
              maintenanceTo: dyndatetime('y,m,d+7,0'),
            },
            {
              id: '12-actual',
              name: '',
              capacity: 20,
              status: 'operational',
              plate: 'CD70 UJE',
              eventCreation: false,
              maintenanceFrom: dyndatetime('y,m,d+4,0'),
              maintenanceTo: dyndatetime('y,m,d+7,0'),
              cssClass: 'mds-dispatch-actual-resource',
            },
          ],
        },
        {
          id: 'cap5',
          name: '24 tons capacity',
          eventCreation: false,
          children: [
            {
              id: 13,
              name: 'Volvo FH16',
              capacity: 24,
              status: 'operational',
              plate: 'BD67 HTA',
            },
            {
              id: '13-actual',
              name: '',
              capacity: 24,
              status: 'operational',
              plate: 'BD67 HTA',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 14,
              name: 'Freightliner Cascadia',
              capacity: 24,
              status: 'operational',
              plate: 'VA18 RQW',
            },
            {
              id: '14-actual',
              name: '',
              capacity: 24,
              status: 'operational',
              plate: 'VA18 RQW',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
            {
              id: 15,
              name: 'Kenworth T680',
              capacity: 24,
              status: 'operational',
              plate: 'HY22 BPL',
            },
            {
              id: '15-actual',
              name: '',
              capacity: 24,
              status: 'operational',
              plate: 'HY22 BPL',
              eventCreation: false,
              cssClass: 'mds-dispatch-actual-resource',
            },
          ],
        },
      ];

      var externalEvents = [
        // Week 1
        {
          id: 1,
          from: '2000 Q St, Sacramento, CA',
          to: '500 Poydras St, New Orleans, LA',
          size: 9,
          pickup: [dyndatetime('y,m,d,9'), dyndatetime('y,m,d,11')],
          drop: [dyndatetime('y,m,d,12'), dyndatetime('y,m,d,17')],
        },
        {
          id: 2,
          from: '100 State St, Madison, WI',
          to: '300 S Wacker Dr, Chicago, IL',
          size: 22,
          pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,15')],
          drop: [dyndatetime('y,m,d,16'), dyndatetime('y,m,d,21')],
        },
        {
          id: 3,
          from: '1500 Market St, Philadelphia, PA',
          to: '600 Liberty St, Pittsburgh, PA',
          size: 13,
          pickup: [dyndatetime('y,m,d,13'), dyndatetime('y,m,d,17')],
          drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,22')],
        },
        {
          id: 25,
          from: '350 Fifth Ave, New York, NY',
          to: '100 Broad St, Newark, NJ',
          size: 3.5,
          pickup: [dyndatetime('y,m,d,14'), dyndatetime('y,m,d,16')],
          drop: [dyndatetime('y,m,d,18'), dyndatetime('y,m,d,21')],
        },
        {
          id: 26,
          from: '800 Market St, San Francisco, CA',
          to: '400 Capitol Mall, Sacramento, CA',
          size: 6,
          pickup: [dyndatetime('y,m,d,15'), dyndatetime('y,m,d,17')],
          drop: [dyndatetime('y,m,d,19'), dyndatetime('y,m,d,22')],
        },
        {
          id: 4,
          from: '1100 Congress Ave, Austin, TX',
          to: '500 E Main St, Dallas, TX',
          size: 20,
          pickup: [dyndatetime('y,m,d+1,7'), dyndatetime('y,m,d+1,9')],
          drop: [dyndatetime('y,m,d+1,10'), dyndatetime('y,m,d+1,15')],
        },
        {
          id: 5,
          from: '200 Peachtree St NW, Atlanta, GA',
          to: '50 Music Sq E, Nashville, TN',
          size: 8,
          pickup: [dyndatetime('y,m,d+1,8'), dyndatetime('y,m,d+1,10')],
          drop: [dyndatetime('y,m,d+1,12'), dyndatetime('y,m,d+1,16')],
        },
        {
          id: 6,
          from: '500 Boylston St, Boston, MA',
          to: '200 State St, Portland, ME',
          size: 3.5,
          pickup: [dyndatetime('y,m,d+1,8,30'), dyndatetime('y,m,d+1,10,30')],
          drop: [dyndatetime('y,m,d+1,12,30'), dyndatetime('y,m,d+1,18,30')],
        },
        {
          id: 27,
          from: '200 S Lamar Blvd, Austin, TX',
          to: '500 Commerce St, Dallas, TX',
          size: 19,
          pickup: [dyndatetime('y,m,d+1,13'), dyndatetime('y,m,d+1,15')],
          drop: [dyndatetime('y,m,d+1,18'), dyndatetime('y,m,d+1,22')],
        },
        {
          id: 28,
          from: '300 W Colfax Ave, Denver, CO',
          to: '100 N Main St, Pueblo, CO',
          size: 10,
          pickup: [dyndatetime('y,m,d+2,10'), dyndatetime('y,m,d+2,12')],
          drop: [dyndatetime('y,m,d+2,14'), dyndatetime('y,m,d+2,18')],
        },
        {
          id: 7,
          from: '400 S 4th St, Louisville, KY',
          to: '1400 Main St, Cincinnati, OH',
          size: 7,
          pickup: [dyndatetime('y,m,d+2,6'), dyndatetime('y,m,d+2,8')],
          drop: [dyndatetime('y,m,d+2,9'), dyndatetime('y,m,d+2,12')],
        },
        {
          id: 8,
          from: '410 S Houston Ave, Tulsa, OK',
          to: '250 W Capitol Ave, Little Rock, AR',
          size: 11.5,
          pickup: [dyndatetime('y,m,d+2,6,30'), dyndatetime('y,m,d+2,8,30')],
          drop: [dyndatetime('y,m,d+2,10,30'), dyndatetime('y,m,d+2,15,30')],
        },
        {
          id: 29,
          from: '450 Sutter St, San Francisco, CA',
          to: '200 Pine Ave, Long Beach, CA',
          size: 22,
          pickup: [dyndatetime('y,m,d+3,7'), dyndatetime('y,m,d+3,9')],
          drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,17')],
        },
        {
          id: 9,
          from: '999 3rd Ave, Seattle, WA',
          to: '500 W 8th St, Vancouver, WA',
          size: 3,
          pickup: [dyndatetime('y,m,d+3,9'), dyndatetime('y,m,d+3,11')],
          drop: [dyndatetime('y,m,d+3,12'), dyndatetime('y,m,d+3,17')],
        },
        {
          id: 10,
          from: '50 S Main St, Salt Lake City, UT',
          to: '300 N Broadway, Denver, CO',
          size: 5,
          pickup: [dyndatetime('y,m,d+3,10'), dyndatetime('y,m,d+3,12')],
          drop: [dyndatetime('y,m,d+3,13'), dyndatetime('y,m,d+3,18')],
        },
        // Week 2
        {
          id: 11,
          from: '300 S Grand Ave, Los Angeles, CA',
          to: '400 E Van Buren St, Phoenix, AZ',
          size: 5,
          pickup: [dyndatetime('y,m,d+7,8'), dyndatetime('y,m,d+7,10')],
          drop: [dyndatetime('y,m,d+7,13'), dyndatetime('y,m,d+7,18')],
        },
        {
          id: 12,
          from: '200 W Washington St, Indianapolis, IN',
          to: '100 N Main St, Louisville, KY',
          size: 18,
          pickup: [dyndatetime('y,m,d+8,7'), dyndatetime('y,m,d+8,9')],
          drop: [dyndatetime('y,m,d+8,12'), dyndatetime('y,m,d+8,17')],
        },
        {
          id: 13,
          from: '500 N Michigan Ave, Chicago, IL',
          to: '250 Marquette Ave, Minneapolis, MN',
          size: 3,
          pickup: [dyndatetime('y,m,d+9,9'), dyndatetime('y,m,d+9,11')],
          drop: [dyndatetime('y,m,d+9,14'), dyndatetime('y,m,d+9,19')],
        },
        {
          id: 14,
          from: '600 Congress Ave, Austin, TX',
          to: '700 Texas Ave, Houston, TX',
          size: 12,
          pickup: [dyndatetime('y,m,d+10,6'), dyndatetime('y,m,d+10,8')],
          drop: [dyndatetime('y,m,d+10,11'), dyndatetime('y,m,d+10,16')],
        },
        {
          id: 15,
          from: '100 Broad St, Newark, NJ',
          to: '200 S Orange Ave, Orlando, FL',
          size: 7,
          pickup: [dyndatetime('y,m,d+12,10'), dyndatetime('y,m,d+12,12')],
          drop: [dyndatetime('y,m,d+12,15'), dyndatetime('y,m,d+12,20')],
        },
        // Week 3
        {
          id: 16,
          from: '400 Pike St, Seattle, WA',
          to: '800 SW Broadway, Portland, OR',
          size: 9,
          pickup: [dyndatetime('y,m,d+14,7'), dyndatetime('y,m,d+14,9')],
          drop: [dyndatetime('y,m,d+14,12'), dyndatetime('y,m,d+14,16')],
        },
        {
          id: 17,
          from: '300 Main St, Buffalo, NY',
          to: '500 Euclid Ave, Cleveland, OH',
          size: 22,
          pickup: [dyndatetime('y,m,d+15,8'), dyndatetime('y,m,d+15,11')],
          drop: [dyndatetime('y,m,d+15,14'), dyndatetime('y,m,d+15,19')],
        },
        {
          id: 18,
          from: '150 S Miami Ave, Miami, FL',
          to: '300 Peachtree St, Atlanta, GA',
          size: 6,
          pickup: [dyndatetime('y,m,d+16,9'), dyndatetime('y,m,d+16,11')],
          drop: [dyndatetime('y,m,d+16,13'), dyndatetime('y,m,d+16,18')],
        },
        {
          id: 19,
          from: '700 W 3rd St, Kansas City, MO',
          to: '400 N Broadway, St Louis, MO',
          size: 15,
          pickup: [dyndatetime('y,m,d+18,6'), dyndatetime('y,m,d+18,8')],
          drop: [dyndatetime('y,m,d+18,10'), dyndatetime('y,m,d+18,15')],
        },
        {
          id: 20,
          from: '250 E Houston St, San Antonio, TX',
          to: '1200 Commerce St, Dallas, TX',
          size: 4,
          pickup: [dyndatetime('y,m,d+19,11'), dyndatetime('y,m,d+19,13')],
          drop: [dyndatetime('y,m,d+19,15'), dyndatetime('y,m,d+19,20')],
        },
        // Week 4
        {
          id: 21,
          from: '800 N Michigan Ave, Chicago, IL',
          to: '500 Woodward Ave, Detroit, MI',
          size: 11,
          pickup: [dyndatetime('y,m,d+21,7'), dyndatetime('y,m,d+21,9')],
          drop: [dyndatetime('y,m,d+21,12'), dyndatetime('y,m,d+21,17')],
        },
        {
          id: 22,
          from: '900 Market St, San Francisco, CA',
          to: '600 Wilshire Blvd, Los Angeles, CA',
          size: 20,
          pickup: [dyndatetime('y,m,d+22,8'), dyndatetime('y,m,d+22,10')],
          drop: [dyndatetime('y,m,d+22,14'), dyndatetime('y,m,d+22,19')],
        },
        {
          id: 23,
          from: '350 5th Ave, New York, NY',
          to: '100 Federal St, Boston, MA',
          size: 3.5,
          pickup: [dyndatetime('y,m,d+23,9'), dyndatetime('y,m,d+23,11')],
          drop: [dyndatetime('y,m,d+23,13'), dyndatetime('y,m,d+23,17')],
        },
        {
          id: 24,
          from: '200 S Tryon St, Charlotte, NC',
          to: '100 N Main St, Greenville, SC',
          size: 8,
          pickup: [dyndatetime('y,m,d+25,6'), dyndatetime('y,m,d+25,8')],
          drop: [dyndatetime('y,m,d+25,10'), dyndatetime('y,m,d+25,14')],
        },
      ];

      var $calendarElm = $('#demo-dispatch-calendar');
      var $popupElm = $('#dispatch-filtering-popup');
      var $resourceList = $('#dispatch-resource-list');
      var scheduledJobIds = [];

      var filters = {};
      var statusFilters = {
        scheduled: true,
        'in progress': true,
        completed: true,
      };
      var filteredResources = myResources;
      var searchTimeout;
      var searchQuery;
      var zoomLevel = 3;
      var now = new Date();
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var myInvalids = [];
      var currentViewStart = today;
      var currentViewEnd = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      var maintenanceInvalids = [];

      function getActualDates(start, end) {
        var possibleOffsets = [-120, -90, -60, -30, -15, 0, 15, 30, 60, 90, 120];
        var departureOffset = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
        var arrivalOffset = possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)] * 60000;
        return [new Date(start.getTime() + departureOffset), new Date(end.getTime() + arrivalOffset)];
      }

      var statusColors = {
        scheduled: '#2196f3',
        'in progress': '#f97316',
        completed: '#78909c',
      };

      var maintenanceColors = {
        'in-maintenance': '#f44336',
        'maintenance-planned': '#ff9800',
        operational: '#4caf50',
      };

      var maintenanceLabels = {
        'in-maintenance': 'In Maintenance',
        'maintenance-planned': 'Maintenance Planned',
        operational: 'Operational',
      };

      function getResourceMaintenanceStatus(resource) {
        if (!resource.maintenanceFrom || !resource.maintenanceTo) {
          return 'operational';
        }
        var from = resource.maintenanceFrom;
        var to = resource.maintenanceTo;
        if (now >= from && now <= to) {
          return 'in-maintenance';
        }
        if (from < currentViewEnd && to > currentViewStart) {
          return 'maintenance-planned';
        }
        return 'operational';
      }

      function buildMaintenanceInvalids() {
        var invalids = [];
        myResources.forEach(function (group) {
          group.children.forEach(function (resource) {
            if (resource.maintenanceFrom && resource.maintenanceTo && !String(resource.id).includes('actual')) {
              invalids.push({
                start: resource.maintenanceFrom,
                end: resource.maintenanceTo,
                resource: resource.id,
                cssClass: 'mds-dispatch-maintenance-invalid',
              });
            }
          });
        });
        return invalids;
      }

      function setupMaintenanceDates() {
        myResources.forEach(function (group) {
          group.children.forEach(function (resource) {
            if (resource.maintenanceFrom) {
              resource.maintenanceFrom = new Date(resource.maintenanceFrom);
            }
            if (resource.maintenanceTo) {
              resource.maintenanceTo = new Date(resource.maintenanceTo);
            }
          });
        });
      }

      function addActualEvents(events) {
        for (var i = 0; i < events.length; ++i) {
          var event = events[i];
          // Convert dates to date objects
          event.start = event.start ? new Date(event.start) : event.start;
          event.end = event.end ? new Date(event.end) : event.end;

          if (event.status === 'actual') continue;

          // Derive color from time-relative state, not hardcoded status
          if (event.end <= now) {
            event.color = statusColors['completed'];
          } else if (event.start < now) {
            event.color = statusColors['in progress'];
          } else {
            event.color = statusColors[event.status] || statusColors['scheduled'];
          }

          event.editable = now < event.start;

          if (event.start < now && event.end > now) {
            if (!event.actual) {
              // Create actual event — clamp actualStart so it never exceeds now
              var actualDates = getActualDates(event.start, new Date(event.drop[0]));
              var actualStart = actualDates[0] >= event.start && actualDates[0] < now ? actualDates[0] : event.start;
              var newEvent = {
                resource: event.resource + '-actual',
                from: event.from,
                to: event.to,
                pickup: event.pickup,
                drop: event.drop,
                size: event.size,
                start: actualStart,
                end: now,
                title: 'In progress',
                status: 'actual',
                color: event.color,
                cssClass: 'mds-dispatch-actual-event mds-dispatch-pulse',
                editable: false,
              };
              event.actual = true;
              event.actualRef = newEvent;
              events.push(newEvent);
            } else if (event.actualRef) {
              // Keep actual end in sync with current time on each refresh
              event.actualRef.end = now;
            }
          } else if (event.end <= now) {
            if (!event.actual) {
              var completedActualDates = getActualDates(event.start, new Date(event.drop[0]));
              var completedActualStart =
                completedActualDates[0] >= event.start && completedActualDates[0] < event.end ? completedActualDates[0] : event.start;
              var completedActualEnd = completedActualDates[1];
              var minEnd = new Date(completedActualStart.getTime() + 30 * 60000);
              if (completedActualEnd < minEnd) completedActualEnd = minEnd;
              var completedNewEvent = {
                resource: event.resource + '-actual',
                from: event.from,
                to: event.to,
                pickup: event.pickup,
                drop: event.drop,
                size: event.size,
                start: completedActualStart,
                end: completedActualEnd,
                title: 'Completed',
                status: 'actual',
                color: event.color,
                cssClass: 'mds-dispatch-actual-event',
                editable: false,
              };
              event.actual = true;
              event.actualRef = completedNewEvent;
              events.push(completedNewEvent);
            } else if (event.actualRef && event.actualRef.title !== 'Completed') {
              var transitionDates = getActualDates(event.actualRef.start, new Date(event.drop[0]));
              var transitionEnd = transitionDates[1];
              var transitionMinEnd = new Date(event.actualRef.start.getTime() + 30 * 60000);
              if (transitionEnd < transitionMinEnd) transitionEnd = transitionMinEnd;
              event.actualRef.end = transitionEnd;
              event.actualRef.color = event.color;
              event.actualRef.cssClass = 'mds-dispatch-actual-event';
              event.actualRef.title = 'Completed';
            }
          }
        }
      }

      function refresh() {
        now = new Date();
        filteredResources = computeFilteredResources();
        addActualEvents(myEvents);
        setTimeout(function () {
          calendar.setOptions({
            resources: filteredResources,
            invalid: $.merge([], myInvalids).concat(maintenanceInvalids),
            data: getStatusFilteredEvents(),
          });
        });
      }

      function setEventData(events) {
        for (var i = 0; i < events.length; i++) {
          var event = events[i];
          event.start = event.start ? event.start : event.pickup[0];
          event.end = event.end ? event.end : event.drop[0];
          event.title = event.from + ' → ' + event.to;
        }
      }

      function getMaxAvailableCapacity() {
        var max = 0;
        myResources.forEach(function (group) {
          if (filters[group.id]) {
            group.children.forEach(function (child) {
              if (!String(child.id).includes('actual') && child.capacity > max) {
                max = child.capacity;
              }
            });
          }
        });
        return max;
      }

      function refreshJobList() {
        var container = $('#dispatch-events');
        container.empty();

        var rangeEnd = new Date(currentRangeStart.getTime() + currentRangeDays * 24 * 60 * 60 * 1000);
        var minPickup = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        var maxCapacity = getMaxAvailableCapacity();
        var visibleJobs = externalEvents.filter(function (job) {
          if (scheduledJobIds.indexOf(job.id) !== -1) return false;
          if (job.size > maxCapacity) return false;
          var pickupStart = new Date(job.pickup[0]);
          if (pickupStart < minPickup) return false;
          return pickupStart >= currentRangeStart && pickupStart < rangeEnd;
        });

        if (visibleJobs.length === 0) {
          container.html(
            '<p class="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted mds-dispatch-jobs-empty">No jobs for this period.</p>',
          );
          return;
        }

        var lastDayKey = null;
        for (var i = 0; i < visibleJobs.length; i++) {
          var job = visibleJobs[i];
          var pickupDate = new Date(job.pickup[0]);
          var dayKey = mobiscroll.formatDate('YYYY-MM-DD', pickupDate);
          if (dayKey !== lastDayKey) {
            container.append('<div class="mds-dispatch-job-day-header">' + mobiscroll.formatDate('DDD, DD MMM', pickupDate) + '</div>');
            lastDayKey = dayKey;
          }
          var $jobEl = $('<div></div>')
            .attr('id', 'mds-dispatch-event-' + job.id)
            .addClass('mds-dispatch-jobs mbsc-flex');

          var $routeEl = $('<div class="mds-dispatch-job-route"></div>');
          var $fromEl = $('<div class="mds-dispatch-job-stop mbsc-flex"></div>').html(
            '<span class="mds-dispatch-job-dot mds-dispatch-job-dot-origin"></span>' +
              '<span class="mds-dispatch-job-addr">' +
              job.from +
              '</span>',
          );
          var $connectorEl = $('<div class="mds-dispatch-job-connector"></div>');
          var $toEl = $('<div class="mds-dispatch-job-stop mbsc-flex"></div>').html(
            '<span class="mds-dispatch-job-dot mds-dispatch-job-dot-dest"></span>' +
              '<span class="mds-dispatch-job-addr">' +
              job.to +
              '</span>',
          );
          $routeEl.append($fromEl, $connectorEl, $toEl);

          var $metaEl = $('<div class="mds-dispatch-job-meta mbsc-flex-col mbsc-flex-none"></div>').html(
            '<span class="mds-dispatch-job-time">' +
              mobiscroll.formatDate('H:mm', new Date(job.pickup[0])) +
              ' – ' +
              mobiscroll.formatDate('H:mm', new Date(job.drop[1])) +
              '</span>' +
              '<span class="mds-dispatch-job-size">' +
              job.size +
              ' t</span>',
          );

          $jobEl.append($routeEl, $metaEl);
          container.append($jobEl);

          $jobEl.mobiscroll().draggable({
            dragData: job,
          });
        }
      }

      function computeFilteredResources() {
        return myResources
          .map(function (category) {
            var keptIds = {};
            category.children.forEach(function (resource) {
              if (String(resource.id).includes('actual')) return;
              var filterKey = getResourceMaintenanceStatus(resource) === 'operational' ? 'operational' : 'maintenance';
              if (
                filters[filterKey] &&
                (!searchQuery ||
                  resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  resource.plate.toLowerCase().includes(searchQuery.toLowerCase()))
              ) {
                keptIds[resource.id] = true;
              }
            });
            return {
              id: category.id,
              name: category.name,
              eventCreation: category.eventCreation,
              children: category.children.filter(function (resource) {
                if (String(resource.id).includes('actual')) {
                  var parentId = String(resource.id).replace('-actual', '');
                  if (!keptIds[parentId]) return false;
                  var parent = category.children.find(function (r) {
                    return String(r.id) === parentId;
                  });
                  return !parent || getResourceMaintenanceStatus(parent) === 'operational';
                }
                return keptIds[resource.id];
              }),
            };
          })
          .filter(function (res) {
            return res.children.length > 0 && filters[res.id];
          });
      }

      function filterResources() {
        filteredResources = computeFilteredResources();
        calendar.setOptions({ resources: filteredResources });
      }

      function getEffectiveStatus(ev) {
        if (ev.status === 'actual') return ev.title === 'Completed' ? 'completed' : 'in progress';
        if (ev.end && ev.end <= now) return 'completed';
        if (ev.start && ev.start < now) return 'in progress';
        return ev.status || 'scheduled';
      }

      function getStatusFilteredEvents() {
        return myEvents.filter(function (ev) {
          return statusFilters[getEffectiveStatus(ev)] !== false;
        });
      }

      function handleZoom(zoom) {
        zoomLevel = zoom;

        $('#dispatch-zoom-level-slider').val(zoomLevel);
        $('#dispatch-zoom-level-in').prop('disabled', zoomLevel === 5);
        $('#dispatch-zoom-level-out').prop('disabled', zoomLevel === 1);

        calendar.setOptions({
          refDate: currentRangeStart,
          view: buildViewConfig(currentRangeDays),
          zoomLevel: zoomLevel,
        });
      }

      function buildViewConfig(days) {
        return {
          timeline: {
            type: 'day',
            size: days,
            timeCellStep: 60,
            timeLabelStep: 60,
            eventHeight: 'variable',
            zoomLevels: {
              1: { type: 'day', size: days, columnWidth: 'xsmall', timeCellStep: 240, timeLabelStep: 240 },
              2: { type: 'day', size: days, columnWidth: 'small', timeCellStep: 120, timeLabelStep: 120 },
              3: { type: 'day', size: days, columnWidth: 'medium', timeCellStep: 60, timeLabelStep: 60 },
              4: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 30, timeLabelStep: 60 },
              5: { type: 'day', size: days, columnWidth: 'xlarge', timeCellStep: 15, timeLabelStep: 60 },
            },
          },
        };
      }

      function applyDaysRange(days, startDate) {
        var target = startDate || today;
        currentViewStart = target;
        currentViewEnd = new Date(target.getTime() + days * 24 * 60 * 60 * 1000);
        filteredResources = computeFilteredResources();
        calendar.setOptions({ refDate: target, view: buildViewConfig(days), zoomLevel: zoomLevel, resources: filteredResources });
        var navigateTo = today >= target && today < currentViewEnd ? now : target;
        setTimeout(function () {
          calendar.navigate(navigateTo);
        }, 100);
      }

      function invalidateResources(event) {
        now = new Date();
        var minTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        var sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

        var invalidIds = [];
        var validIds = [];

        var windowStart = new Date(event.pickup[0]);
        var windowEnd = new Date(event.drop[1]);

        for (var i = 0; i < myResources.length; i++) {
          var group = myResources[i];

          for (var j = 0; j < group.children.length; j++) {
            var truck = group.children[j];
            var isValid = true;

            // Capacity check
            if (truck.capacity < event.size) {
              truck.eventCreation = false;
              invalidIds.push(truck.id);
              isValid = false;
            }

            // Overlap check — only run if capacity is sufficient
            if (isValid) {
              var truckEvents = calendar.getEvents().filter(function (ev) {
                return ev.resource === truck.id;
              });
              var overlappingEvent = truckEvents.find(function (ev) {
                var evEnd = ev.drop ? new Date(ev.drop[1]) : ev.end;
                return evEnd > windowStart && ev.start < windowEnd;
              });
              if (overlappingEvent && event.resource !== truck.id) {
                truck.eventCreation = false;
                invalidIds.push(truck.id);
                if (!String(truck.id).includes('actual')) {
                  invalidIds.push(truck.id + '-actual');
                }
                isValid = false;
              }
            }

            // Add to valid list if no issues found and not an actual resource
            if (isValid && !String(truck.id).includes('actual')) {
              validIds.push(truck.id);
            }
          }
        }

        myInvalids = [
          {
            start: today,
            end: windowStart < minTime ? minTime : windowStart,
            cssClass: 'mds-dispatch-disabled-row',
          },
          {
            start: windowStart < minTime ? minTime : windowStart,
            end: windowEnd,
            resource: invalidIds,
            cssClass: 'mds-dispatch-disabled-row',
          },
          {
            start: windowEnd,
            end: sevenDaysFromNow,
            cssClass: 'mds-dispatch-disabled-row',
          },
        ];

        calendar.setOptions({
          invalid: myInvalids.concat(maintenanceInvalids),
          min: minTime,
        });

        return validIds.length > 0 ? validIds[0] : null;
      }

      function resetEventCreationFlags() {
        for (var i = 0; i < myResources.length; i++) {
          var group = myResources[i];

          for (var j = 0; j < group.children.length; j++) {
            var truck = group.children[j];
            if (!String(truck.id).includes('actual')) {
              truck.eventCreation = true;
            }
          }
        }
      }

      function findResourceById(id) {
        var baseId = String(id).replace('-actual', '');
        for (var i = 0; i < myResources.length; i++) {
          var group = myResources[i];
          for (var j = 0; j < group.children.length; j++) {
            if (String(group.children[j].id) === baseId) {
              return group.children[j];
            }
          }
        }
        return null;
      }

      function findFirstSlot(draggedEvent) {
        now = new Date();
        var minStart = new Date(now.getTime() + 2 * 60 * 60 * 1000);
        var windowStart = new Date(draggedEvent.pickup[0]);
        var windowEnd = new Date(draggedEvent.drop[1]);
        var eventStart = new Date(draggedEvent.start);
        var eventEnd = new Date(draggedEvent.end);

        // Window start cannot be earlier than two hours from now
        var effectiveWindowStart = windowStart < minStart ? minStart : windowStart;

        var eventDuration = eventEnd - eventStart;
        var windowSize = windowEnd - effectiveWindowStart;

        // Event is bigger than window -> cannot place
        if (eventDuration > windowSize) {
          return null;
        }

        // Event starts before window -> push forward
        if (eventStart < effectiveWindowStart) {
          eventStart = new Date(effectiveWindowStart);
          eventEnd = new Date(effectiveWindowStart.getTime() + eventDuration);
        }

        // Event ends after window -> push backward
        if (eventEnd > windowEnd) {
          eventEnd = new Date(windowEnd);
          eventStart = new Date(windowEnd.getTime() - eventDuration);
        }

        // Push slot past maintenance period if needed
        if (draggedEvent.resource) {
          var resource = findResourceById(draggedEvent.resource);
          if (resource && resource.maintenanceFrom && resource.maintenanceTo) {
            var mFrom = new Date(resource.maintenanceFrom);
            var mTo = new Date(resource.maintenanceTo);
            if (eventStart < mTo && eventEnd > mFrom) {
              eventStart = new Date(mTo);
              eventEnd = new Date(mTo.getTime() + eventDuration);
              if (eventEnd > windowEnd) {
                return null;
              }
            }
          }
        }

        return {
          start: eventStart,
          end: eventEnd,
        };
      }

      function moveToFirstAvailableSlot(draggedEvent, isEdit) {
        var slot = findFirstSlot(draggedEvent);
        if (slot) {
          draggedEvent.start = slot.start;
          draggedEvent.end = slot.end;

          if (isEdit) {
            calendar.updateEvent(draggedEvent);
          } else {
            calendar.addEvent(draggedEvent);
          }
          return true;
        }
        return false;
      }

      var popup = $popupElm
        .mobiscroll()
        .popup({
          buttons: [
            'cancel',
            {
              text: 'Apply',
              keyCode: 'enter',
              handler: function () {
                $('.mds-dispatch-checkbox').each(function () {
                  filters[this.value] = this.checked;
                });
                filterResources();
                refreshJobList();
                popup.close();
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'Filters applied',
                });
              },
              cssClass: 'mbsc-popup-button-primary',
            },
          ],
          contentPadding: false,
          display: 'anchored',
          focusOnClose: false,
          focusOnOpen: false,
          showOverlay: false,
          width: 400,
        })
        .mobiscroll('getInst');

      $calendarElm.on('input', '#dispatch-search-input', function (event) {
        clearTimeout(searchTimeout);
        searchQuery = event.target.value.toLowerCase();
        searchTimeout = setTimeout(filterResources, 300);
      });

      $calendarElm.on('click', '#dispatch-filter-button', function () {
        // Create resource checkbox list
        var checkboxes = '';
        myResources.forEach(function (res) {
          checkboxes +=
            '<label>' +
            '<input type="checkbox" mbsc-checkbox class="mds-dispatch-checkbox" value="' +
            res.id +
            '" checked /> ' +
            res.name +
            '</label>';
        });

        $resourceList.html(checkboxes);
        mobiscroll.enhance($resourceList[0]);

        // Set checkbox checked states
        $('.mds-dispatch-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = filters[this.value];
        });

        popup.setOptions({ anchor: this });
        popup.open();
      });

      $('#mds-status-filter').on('change', 'input[type="checkbox"]', function () {
        statusFilters[this.value] = this.checked;
        calendar.setOptions({ data: getStatusFilteredEvents() });
      });

      $calendarElm.on('click', '#dispatch-reset-filters', function () {
        searchQuery = '';

        $('#dispatch-search-input').val('');
        $('.mds-dispatch-checkbox').each(function () {
          var checkbox = $(this).mobiscroll('getInst');
          checkbox.checked = true;
          filters[this.value] = true;
        });

        filterResources();
        refreshJobList();

        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Filters cleared',
        });
      });

      // Set initial filters
      filters['operational'] = true;
      filters['maintenance'] = true;

      myResources.forEach(function (category) {
        filters[category.id] = true;
      });

      setEventData(myEvents);
      addActualEvents(myEvents);
      setupMaintenanceDates();
      maintenanceInvalids = buildMaintenanceInvalids();
      filteredResources = computeFilteredResources();

      var calendar = $calendarElm
        .mobiscroll()
        .eventcalendar({
          // context,
          clickToCreate: false,
          dragToCreate: false,
          dragToResize: false,
          dragToMove: true,
          externalDrop: true,
          eventOverlap: false,
          cssClass: 'mds-dispatch-calendar',
          refDate: today,
          zoomLevel: zoomLevel,
          view: buildViewConfig(7),
          data: getStatusFilteredEvents(),
          resources: filteredResources,
          invalid: maintenanceInvalids,
          renderResource: function (resource) {
            var mStatus = getResourceMaintenanceStatus(resource);
            return (
              '<div>' +
              '<div class="mds-dispatch-name">' +
              resource.name +
              (resource.name && resource.plate ? '<span class="mds-dispatch-plate">' + resource.plate + '</span>' : '') +
              '</div>' +
              (!resource.isParent && resource.name
                ? '<div class="mds-dispatch-status">' +
                  '<span class="mds-dispatch-status-dot" style="background-color:' +
                  maintenanceColors[mStatus] +
                  ';"></span>' +
                  maintenanceLabels[mStatus] +
                  '</div>'
                : '') +
              '</div>'
            );
          },
          renderResourceEmpty: function () {
            return (
              '<div class="mds-dispatch-empty mbsc-flex mbsc-align-items-center">' +
              '<div class="mbsc-flex-1-1">' +
              '<img src="https://img.mobiscroll.com/demos/filter-no-result.png" alt="Empty list" style="width:100px;" />' +
              '<p class="mbsc-font mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">No resources match your search.</p>' +
              '<p class="mbsc-margin mbsc-medium mbsc-italic mbsc-txt-muted">Adjust your filters or try a different keyword.</p>' +
              '<button mbsc-button id="dispatch-reset-filters" data-variant="outline">Reset Filters</button>' +
              '</div>' +
              '</div>'
            );
          },
          renderResourceHeader: function () {
            return (
              '<div class="mbsc-flex mbsc-align-items-center mbsc-font mds-dispatch-search">' +
              '<label class="mbsc-flex-1-1">' +
              '<input type="text" mbsc-input id="dispatch-search-input" autocomplete="off" data-input-style="outline" data-start-icon="material-search" placeholder="Search..." />' +
              '</label>' +
              '<button mbsc-button id="dispatch-filter-button" data-start-icon="material-filter-list" data-variant="outline" class="mbsc-flex-none">Filter</button>' +
              '</div>'
            );
          },
          renderTimelineEventContent: function (data) {
            var job = data.original;
            if (job.status === 'actual') {
              return job.title === 'In progress' ? '<span class="mds-dispatch-actual-label">In progress</span>' : '';
            }
            return (
              '<div class="mds-dispatch-event-content-wrapper mbsc-flex">' +
              '<span class="mds-dispatch-event-route mbsc-flex-1-1">' +
              job.from +
              ' → ' +
              job.to +
              '</span>' +
              '<span class="mds-dispatch-event-planned-badge"><span class="mds-dispatch-event-planned-badge-text">Planned</span></span>' +
              '</div>'
            );
          },
          onEventCreated: function (args) {
            if (args.action === 'externalDrop') {
              scheduledJobIds.push(args.event.id);
              $('#mds-dispatch-event-' + args.event.id).remove();
              var scheduledEvent = Object.assign({}, args.event, { status: 'scheduled', color: statusColors['scheduled'] });
              calendar.updateEvent(scheduledEvent);
              myEvents.push(scheduledEvent);
            }
            mobiscroll.toast({
              //<hidden>
              // theme,//</hidden>
              // context,
              message: args.event.from + ' → ' + args.event.to + ' added',
            });
          },
          onEventCreateFailed: function (args) {
            var draggedEvent = args.event;
            var moved = moveToFirstAvailableSlot(draggedEvent, false);
            if (moved) {
              if (args.action === 'externalDrop') {
                $('#mds-dispatch-event-' + args.event.id).remove();
              }
              setTimeout(function () {
                calendar.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource });
              });
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: draggedEvent.from + ' → ' + draggedEvent.to + ' added to first available slot',
              });
            } else {
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'No available slot found for ' + args.event.from + ' → ' + args.event.to,
              });
            }
          },
          onEventUpdateFailed: function (args) {
            var draggedEvent = args.event;
            var moved = moveToFirstAvailableSlot(draggedEvent, true);
            if (moved) {
              setTimeout(function () {
                calendar.navigateToEvent({ start: draggedEvent.start, resource: draggedEvent.resource });
              });
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: draggedEvent.from + ' → ' + draggedEvent.to + ' moved to first available slot',
              });
            } else {
              var originalEvent = args.oldEvent;
              setTimeout(function () {
                calendar.navigateToEvent({ start: originalEvent.start, resource: originalEvent.resource });
              });
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'No available slot found for ' + args.event.from + ' → ' + args.event.to,
              });
            }
          },
          onEventDragStart: function (args) {
            var resourceToNavigate = invalidateResources(args.event);
            if (!args.event.resource) {
              if (resourceToNavigate && findFirstSlot(args.event)) {
                calendar.navigateToEvent({ start: args.event.start, resource: resourceToNavigate });
              } else {
                mobiscroll.toast({
                  //<hidden>
                  // theme,//</hidden>
                  // context,
                  message: 'No available slot for: ' + args.event.from + ' → ' + args.event.to,
                });
              }
            }
          },
          onEventDragEnd: function () {
            resetEventCreationFlags();
            myInvalids = [];
            calendar.setOptions({
              resources: filteredResources,
              invalid: maintenanceInvalids,
              min: null,
            });
          },
          onEventClick: function (args) {
            if (args.event.status === 'actual') {
              var ev = args.event;
              var actualStart = new Date(ev.start);
              var scheduledDeparture = new Date(ev.pickup[0]);
              var departureDelay = Math.round((actualStart - scheduledDeparture) / 60000);
              var msg;
              if (ev.title === 'In progress') {
                msg =
                  'Actual transport: departed ' + formatDelay(departureDelay) + ' · running ' + formatDuration(new Date() - actualStart);
              } else {
                var actualEnd = new Date(ev.end);
                var scheduledArrival = new Date(ev.drop[0]);
                var arrivalDelay = Math.round((actualEnd - scheduledArrival) / 60000);
                msg = 'Actual transport: departed ' + formatDelay(departureDelay) + ' · arrived ' + formatDelay(arrivalDelay);
              }
              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: msg,
                duration: 5000,
              });
            }
          },
          onPageLoaded: function (args) {
            currentViewStart = args.firstDay;
            currentViewEnd = args.lastDay;
          },
        })
        .mobiscroll('getInst');

      $('#dispatch-zoom-level-slider').on('input', function (ev) {
        handleZoom(+ev.target.value);
      });

      $('#dispatch-zoom-level-in').on('click', function () {
        handleZoom(zoomLevel + 1);
      });

      $('#dispatch-zoom-level-out').on('click', function () {
        handleZoom(zoomLevel - 1);
      });

      setEventData(externalEvents);

      var pendingRangeStart = today;
      var pendingRangeDays = 7;
      var currentRangeStart = today;
      var currentRangeDays = 7;

      function formatDuration(ms) {
        var totalMin = Math.round(ms / 60000);
        var h = Math.floor(totalMin / 60);
        var m = totalMin % 60;
        if (h === 0) return m + ' min';
        if (m === 0) return h + ' h';
        return h + ' h ' + m + ' min';
      }

      function formatDelay(minutes) {
        if (Math.abs(minutes) < 5) return 'on time';
        if (minutes > 0) return minutes + ' min late';
        return Math.abs(minutes) + ' min early';
      }

      function formatRangeLabel(start, days) {
        var end = new Date(start.getTime() + (days - 1) * 24 * 60 * 60 * 1000);
        return mobiscroll.formatDate('MMM D', start) + ' – ' + mobiscroll.formatDate('MMM D, YYYY', end);
      }

      function applyPendingRange() {
        var dates = rangeCalendar.getVal();
        if (dates && dates[0] && dates[1]) {
          var rawStart = dates[0];
          var rawEnd = dates[1];
          currentRangeStart = typeof rawStart === 'string' ? new Date(rawStart + 'T00:00:00') : new Date(rawStart);
          var rangeEnd = typeof rawEnd === 'string' ? new Date(rawEnd + 'T00:00:00') : new Date(rawEnd);
          currentRangeDays = Math.round((rangeEnd.getTime() - currentRangeStart.getTime()) / (24 * 60 * 60 * 1000)) + 1;
        } else {
          currentRangeStart = pendingRangeStart;
          currentRangeDays = pendingRangeDays;
        }
        applyDaysRange(currentRangeDays, currentRangeStart);
        $('#mds-dispatch-range-label').text(formatRangeLabel(currentRangeStart, currentRangeDays));
        refreshJobList();
      }

      function disableRangeInputs(disable) {
        var startInst = mobiscroll.getInst($('#mds-dispatch-range-start')[0]);
        var endInst = mobiscroll.getInst($('#mds-dispatch-range-end')[0]);
        if (startInst) startInst.setOptions({ disabled: disable });
        if (endInst) endInst.setOptions({ disabled: disable });
      }

      var rangePopup = $('#mds-dispatch-range-popup')
        .mobiscroll()
        .popup({
          responsive: {
            xsmall: {
              display: 'bottom',
              touchUi: true,
              buttons: [
                {
                  text: 'Apply',
                  keyCode: 'enter',
                  handler: function () {
                    applyPendingRange();
                    rangePopup.close();
                  },
                  cssClass: 'mbsc-popup-button-primary',
                },
                'cancel',
              ],
            },
            custom: {
              breakpoint: 575,
              buttons: [],
              display: 'anchored',
              anchor: document.getElementById('mds-dispatch-range-trigger'),
              anchorAlign: 'start',
              touchUi: false,
              scrollLock: false,
              maxWidth: 920,
            },
          },
        })
        .mobiscroll('getInst');

      var rangeSelectInst = $('#mds-dispatch-range-select')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('mds-dispatch-range-select-input'),
          responsive: {
            xsmall: { touchUi: true },
            small: { touchUi: false },
          },
          onChange: function (args) {
            var val = args.value;
            if (val === 'custom') {
              disableRangeInputs(false);
            } else {
              disableRangeInputs(true);
              pendingRangeDays = +val;
              pendingRangeStart = today;
              if (rangeCalendar) {
                var end = new Date(today.getTime() + (pendingRangeDays - 1) * 24 * 60 * 60 * 1000);
                rangeCalendar.setVal([today, end]);
              }
            }
          },
        })
        .mobiscroll('getInst');

      var rangeCalendar = $('#mds-dispatch-range-calendar')
        .mobiscroll()
        .datepicker({
          controls: ['calendar'],
          select: 'range',
          display: 'inline',
          showRangeLabels: false,
          pages: 'auto',
          startInput: '#mds-dispatch-range-start',
          endInput: '#mds-dispatch-range-end',
          returnFormat: 'iso8601',
          showOnClick: false,
          showOnFocus: false,
          onInit: function (event, inst) {
            var end = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000);
            inst.setVal([today, end]);
          },
          onChange: function (event, inst) {
            var dates = inst.getVal();
            if (dates && dates[0]) {
              disableRangeInputs(false);
              rangeSelectInst.setVal('custom', true);
              if (dates[1]) {
                var start = new Date(dates[0]);
                var end = new Date(dates[1]);
                pendingRangeStart = start;
                pendingRangeDays = Math.round((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)) + 1;
              }
            }
          },
        })
        .mobiscroll('getInst');

      $('#mds-dispatch-range-trigger').on('click', function () {
        rangePopup.open();
      });

      $('#mds-dispatch-go-live').on('click', function () {
        now = new Date();
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        currentRangeStart = today;
        applyDaysRange(currentRangeDays, today);
        $('#mds-dispatch-range-label').text(formatRangeLabel(today, currentRangeDays));
        calendar.navigateToEvent({ start: now });
        refreshJobList();
      });

      $('#mds-dispatch-range-apply').on('click', function () {
        applyPendingRange();
        rangePopup.close();
      });

      $('#mds-dispatch-range-cancel').on('click', function () {
        rangePopup.close();
      });

      disableRangeInputs(true);
      $('#mds-dispatch-range-label').text(formatRangeLabel(today, 7));
      refreshJobList();

      setInterval(refresh, 60000);
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mds-dispatch-outer mbsc-flex-col">
  <div id="mds-dispatch-custom-header" class="mds-dispatch-custom-header mbsc-flex">
    <button id="mds-dispatch-range-trigger" mbsc-button data-variant="flat"><span id="mds-dispatch-range-label" class="mds-dispatch-range-label"></span></button>
    <div class="mds-dispatch-header-right mbsc-flex">
      <div class="mds-dispatch-status-filter" id="mds-status-filter" mbsc-segmented-group>
        <label class="mds-dispatch-seg-scheduled">
          <input type="checkbox" mbsc-segmented value="scheduled" checked />
          <span class="mds-dispatch-seg-dot mds-dispatch-seg-dot-scheduled"></span>Scheduled
        </label>
        <label class="mds-dispatch-seg-inprogress">
          <input type="checkbox" mbsc-segmented value="in progress" checked />
                    <span class="mds-dispatch-seg-dot mds-dispatch-seg-dot-inprogress"></span>In progress
        </label>
        <label class="mds-dispatch-seg-completed">
          <input type="checkbox" mbsc-segmented value="completed" checked />
                    <span class="mds-dispatch-seg-dot mds-dispatch-seg-dot-completed"></span>Completed
        </label>
      </div>
      <div class="mds-dispatch-zoom mbsc-flex">
        <button id="dispatch-zoom-level-out" mbsc-button data-icon="minus" data-variant="flat"></button>
        <input type="range" id="dispatch-zoom-level-slider" min="1" max="5" value="3" class="mds-dispatch-zoom-slider" />
        <button id="dispatch-zoom-level-in" mbsc-button data-icon="plus" data-variant="flat"></button>
      </div>
      <button id="mds-dispatch-go-live" mbsc-button data-variant="outline" data-start-icon="clock" class="mds-dispatch-now-btn">Now</button>
    </div>
  </div>
  <div class="mbsc-grid mbsc-no-padding mds-dispatch-content">
    <div class="mbsc-row mds-dispatch-full-height">
      <div class="mbsc-col-sm-3 mds-dispatch-full-height mds-dispatch-wrapper">
        <div id="dispatch-events" class="mbsc-flex-col mbsc-flex-1-0 mbsc-padding"></div>
      </div>
      <div class="mbsc-col-sm-9 mds-dispatch-column mds-dispatch-full-height">
        <div id="demo-dispatch-calendar"></div>
      </div>
    </div>
  </div>
</div>
<div style="display:none">
  <div id="dispatch-filtering-popup">
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Capacity</div>
      <div id="dispatch-resource-list"></div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Operational Status</div>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="In maintenance/Maintenance planned"
          class="mds-dispatch-checkbox"
          value="maintenance"
          checked
        />
      </label>
      <label>
        <input
          type="checkbox"
          mbsc-checkbox
          data-label="Operational"
          class="mds-dispatch-checkbox"
          value="operational"
          checked
        />
      </label>
    </div>
  </div>
  <div id="mds-dispatch-range-popup" class="mds-dispatch-range-popup">
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-4 mbsc-push-sm-8 mbsc-flex mbsc-flex-col">
          <div class="mds-dispatch-range-inputs">
            <label>
              Date range
              <input mbsc-input id="mds-dispatch-range-select-input" data-dropdown="true" data-input-style="box" data-label-style="stacked" />
            </label>
            <select id="mds-dispatch-range-select">
              <option value="custom">Custom</option>
              <option value="7" selected>Next 7 days</option>
              <option value="14">Next 14 days</option>
              <option value="30">Next 30 days</option>
              <option value="60">Next 60 days</option>
              <option value="90">Next 90 days</option>
            </select>
            <div id="mds-dispatch-custom-range-wrapper">
              <label class="mds-dispatch-range-input">
                Start
                <input id="mds-dispatch-range-start" mbsc-input data-input-style="box" data-label-style="stacked" />
              </label>
              <label class="mds-dispatch-range-input">
                End
                <input id="mds-dispatch-range-end" mbsc-input data-input-style="box" data-label-style="stacked" />
              </label>
            </div>
          </div>
          <div class="mds-dispatch-range-desktop-btns mbsc-button-group-justified">
            <button id="mds-dispatch-range-apply" mbsc-button>Apply</button>
            <button id="mds-dispatch-range-cancel" mbsc-button>Cancel</button>
          </div>
        </div>
        <div class="mbsc-col-sm-8 mbsc-pull-sm-4">
          <div id="mds-dispatch-range-calendar"></div>
        </div>
      </div>
    </div>
  </div>
</div>

`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-dispatch-calendar .mbsc-calendar-header {
  display: none;
}
.mds-dispatch-calendar .mbsc-timeline-resource-header {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.mds-dispatch-calendar .mbsc-timeline-resource-col {
  width: 300px;
}
.mds-dispatch-calendar .mbsc-timeline-resource-title {
  height: 100%;
  box-sizing: border-box;
}
.mds-dispatch-calendar .mbsc-timeline-row:not(.mds-dispatch-actual-resource):not(.mbsc-timeline-parent) {
  height: 60px;
}
.mds-dispatch-calendar .mds-dispatch-actual-resource {
  height: 8px;
}
.mbsc-timeline-row:has(+ .mds-dispatch-actual-resource) {
  border-bottom: none;
}
.mds-dispatch-actual-resource .mbsc-timeline-event {
  height: 10px;
  margin-top: -9px;
}
.mds-dispatch-actual-resource .mbsc-timeline-event-background {
  margin: 0;
}
.mds-dispatch-calendar .mbsc-timeline-parent {
  height: 34px;
}
.mds-dispatch-calendar .mbsc-timeline-parent .mbsc-timeline-invalid {
  display: none;
}
.mds-dispatch-calendar .mbsc-timeline-parent .mbsc-timeline-column {
  border: 0;
}
.mds-dispatch-calendar .mbsc-timeline-row-gutter {
  height: 6px;
}
.mds-dispatch-search .mbsc-textfield-wrapper {
  margin: 0;
}
.mds-dispatch-search .mbsc-textfield-wrapper.mbsc-ltr {
  margin-right: 8px;
}
.mds-dispatch-search .mbsc-textfield-wrapper.mbsc-rtl {
  margin-left: 8px;
}
.mds-dispatch-search .mbsc-textfield-wrapper.mbsc-material {
  margin-top: 2px;
}
.mds-dispatch-search .mbsc-textfield {
  height: 36px;
  padding: 0 8px 0 38px;
}
.mds-dispatch-search .mbsc-textfield-icon {
  top: 50%;
  left: 8px;
  font-size: 20px;
  height: 24px;
  line-height: 24px;
  margin-top: -12px;
}
.mds-dispatch-search .mbsc-button {
  margin: 0;
  height: 36px;
  font-size: 14px;
}
.mds-dispatch-actual-event .mbsc-schedule-event-range,
.mds-dispatch-actual-event .mbsc-schedule-event-bar,
.mds-dispatch-actual-event .mbsc-schedule-event-title,
.mds-dispatch-actual-event .mbsc-schedule-event-time,
.mds-dispatch-actual-event .mbsc-timeline-event-time {
  display: none;
}
.mds-dispatch-disabled-row.mbsc-schedule-invalid {
  background: rgba(128, 128, 128, 0.2);
}
.mds-dispatch-maintenance-invalid.mbsc-schedule-invalid {
  background: repeating-linear-gradient(-45deg, rgba(128,128,128,0.12), rgba(128,128,128,0.12) 11px, rgba(128,128,128,0.28) 11px, rgba(128,128,128,0.28) 22px);
}
.mds-dispatch-pulse:not(.mbsc-schedule-event-hover) .mbsc-timeline-event-background {
  box-shadow: 0 0 0 rgba(249, 115, 22, 0.4);
  animation: pulse 2s infinite;
}
.mds-dispatch-now-btn.mbsc-ios {
  padding-top: 0;
  padding-bottom: 0;
}

.mds-dispatch-seg-dot {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}
.mds-dispatch-seg-dot-scheduled {
  background: #2196f3;
}
.mds-dispatch-seg-dot-inprogress {
  background: #f97316;
}
.mds-dispatch-seg-dot-completed {
  background: #78909c;
}
.mbsc-ios-dark .mds-dispatch-custom-header,
.mbsc-material-dark .mds-dispatch-custom-header,
.mbsc-ios-dark .mds-dispatch-wrapper,
.mbsc-material-dark .mds-dispatch-wrapper {
  background-color: #000;
}
.mbsc-windows-dark .mds-dispatch-custom-header,
.mbsc-windows-dark .mds-dispatch-wrapper {
  background-color: #1f1f1f;
}
.mds-dispatch-range-popup .mbsc-datepicker-inline {
  border: none;
  border-radius: 20px;
  overflow: hidden;
}
.mds-dispatch-range-popup .mbsc-textfield-wrapper-box {
  margin-top: 0;
  margin-right: 0;
}
.mds-dispatch-range-desktop-btns.mbsc-button-group-justified,
.mds-dispatch-range-desktop-btns.mbsc-button-group-justified button {
  margin-bottom: 0;
}
.mds-dispatch-content > .mbsc-row {
  height: 100%;
}
.mds-dispatch-calendar.mbsc-eventcalendar .mbsc-calendar-wrapper {
  border: none;
}
@media (max-width: 575px) {
  .mds-dispatch-range-desktop-btns {
    display: none;
  }
  .mds-dispatch-range-popup .mbsc-textfield-wrapper-box {
    margin-left: 0;
  }
}
/* --- Demo styles --- */
.mds-dispatch-full-height {
  height: 100%;
}
.mds-dispatch-column {
  border-left: 1px solid #ccc;
}
.mds-dispatch-wrapper {
  overflow: auto;
  background-color: #fff;
}
.mds-dispatch-job-day-header {
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b7280;
  padding: 10px 2px 4px;
}
.mds-dispatch-job-day-header:first-child {
  padding-top: 2px;
}
.mds-dispatch-jobs {
  align-items: center;
  gap: 8px;
  margin: 4px 0;
  padding: 6px 10px;
  touch-action: none;
  color: #fff;
  background-color: #488dc5;
  border-radius: 8px;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 12px;
  cursor: grab;
}
.mds-dispatch-job-route {
  flex: 1 1 0;
  min-width: 0;
}
.mds-dispatch-job-stop {
  align-items: center;
  gap: 6px;
}
.mds-dispatch-job-dot {
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.mds-dispatch-job-dot-origin {
  background: transparent;
}
.mds-dispatch-job-dot-dest {
  background: #fff;
}
.mds-dispatch-job-addr {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-weight: bold;
}
.mds-dispatch-job-connector {
  width: 2px;
  height: 5px;
  background: rgba(255, 255, 255, 0.4);
  margin-left: 3px;
}
.mds-dispatch-job-meta {
  align-items: flex-end;
  gap: 3px;
  font-size: 11px;
  opacity: 0.9;
}
.mds-dispatch-job-size {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1px 7px;
  font-weight: 600;
}
.mds-dispatch-actual-event {
  height: 20px;
}
.mds-dispatch-actual-label {
  font-size: 9px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0.9;
  line-height: 1;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(249, 115, 22, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
  }
}
.mds-dispatch-event-content-wrapper {
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 5px;
  overflow: hidden;
}
.mds-dispatch-event-route {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mds-dispatch-event-planned-badge {
  flex-shrink: 100;
  min-width: 0;
  overflow: hidden;
}
.mds-dispatch-event-planned-badge-text {
  font-size: 10px;
  padding: 0 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);
  white-space: nowrap;
  display: block;
}
.mds-dispatch-search {
  height: 100%;
}
.mds-dispatch-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}
.mds-dispatch-plate {
  border: 1px solid #488dc5;
  border-radius: 4px;
  margin: 0 5px;
  padding: 0 5px;
}
.mds-dispatch-status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}
.mds-dispatch-status {
  font-size: 13px;
  font-weight: normal;
}
.mds-dispatch-empty {
  height: 100%;
  text-align: center;
}
.mds-dispatch-header-right {
  align-items: center;
  gap: 16px;
  margin-left: auto;
}
.mds-dispatch-status-filter.mbsc-ios {
  width: 300px;
}
.mds-dispatch-zoom {
  align-items: center;
  gap: 6px;
}
.mds-dispatch-zoom-slider {
  width: 80px;
  cursor: pointer;
}
.mds-dispatch-outer {
  height: 100%;
}
.mds-dispatch-custom-header {
  align-items: center;
  flex-shrink: 0;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid #ccc;
  gap: 12px;
}
.mds-dispatch-range-label {
  font-size: 20px;
  font-weight: bold;
}
.mds-dispatch-range-inputs {
  flex: 1;
}
.mds-dispatch-content {
  flex: 1 1 0;
  min-height: 0;
}
`,
};
