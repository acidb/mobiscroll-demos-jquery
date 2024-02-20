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
      var activities = [
        {
          date: 'dyndatetime(y,m,d-6)',
          move: 200,
          exercise: 360,
          stand: 180,
        },
        {
          date: 'dyndatetime(y,m,d-5)',
          move: 360,
          exercise: 150,
          stand: 230,
        },
        {
          date: 'dyndatetime(y,m,d-4)',
          move: 180,
          exercise: 200,
          stand: 280,
        },
        {
          date: 'dyndatetime(y,m,d-3)',
          move: 120,
          exercise: 150,
          stand: 200,
        },
        {
          date: 'dyndatetime(y,m,d-2)',
          move: 320,
          exercise: 180,
          stand: 100,
        },
        {
          date: 'dyndatetime(y,m,d-1)',
          move: 120,
          exercise: 100,
          stand: 200,
        },
        {
          date: 'dyndatetime(y,m,d)',
          move: 230,
          exercise: 170,
          stand: 330,
        },
        {
          date: 'dyndatetime(y,m,d+1)',
          move: 320,
          exercise: 260,
          stand: 80,
        },
        {
          date: 'dyndatetime(y,m,d+2)',
          move: 200,
          exercise: 140,
          stand: 180,
        },
        {
          date: 'dyndatetime(y,m,d+3)',
          move: 360,
          exercise: 300,
          stand: 160,
        },
        {
          date: 'dyndatetime(y,m,d+4)',
          move: 80,
          exercise: 360,
          stand: 360,
        },
        {
          date: 'dyndatetime(y,m,d+5)',
          move: 220,
          exercise: 170,
          stand: 290,
        },
        {
          date: 'dyndatetime(y,m,d+6)',
          move: 120,
          exercise: 40,
          stand: 100,
        },
        {
          date: 'dyndatetime(y,m,d+7)',
          move: 120,
          exercise: 200,
          stand: 80,
        },
      ];

      $('#demo-activity-calendar')
        .mobiscroll()
        .datepicker({
          // context,
          controls: ['calendar'],
          touchUi: true,
          display: 'inline',
          renderDayContent: function (args) {
            var a = activities.find(function (obj) {
              return +new Date(obj.date) === +args.date;
            });

            function getDeg(nr) {
              return {
                rotate1: nr > 180 ? 180 : nr,
                rotate2: nr > 180 ? nr - 180 : 0,
              };
            }

            function getStyle(rotate) {
              return ' style="transform: rotateZ(' + rotate + 'deg)"';
            }

            return (
              '<div class="screen">' +
              '<div class="' +
              (a ? 'dial move' : '') +
              '">' +
              '<div class="dial-background"' +
              (a ? ' style="background:#752a2a"' : '') +
              '></div>' +
              '<div class="dial-container container1">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.move).rotate1) : '') +
              '></div>' +
              '</div>' +
              '<div class="dial-container container2">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.move).rotate2) : '') +
              '></div>' +
              '</div>' +
              '<div class="marker start"></div>' +
              '<div class="marker end"' +
              (a ? getStyle(a.move) : '') +
              '></div>' +
              '</div>' +
              '<div class="' +
              (a ? 'dial exercise' : '') +
              '">' +
              '<div class="dial-background"' +
              (a ? ' style="background:#4a6915"' : '') +
              '></div>' +
              '<div class="dial-container container1">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.exercise).rotate1) : '') +
              '></div>' +
              '</div>' +
              '<div class="dial-container container2">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.exercise).rotate2) : '') +
              '></div>' +
              '</div>' +
              '<div class="marker start"></div>' +
              '<div class="marker end"' +
              (a ? getStyle(a.exercise) : '') +
              '></div>' +
              '</div>' +
              '<div class="' +
              (a ? 'dial stand' : '') +
              '">' +
              '<div class="dial-background"' +
              (a ? ' style="background:#157b76"' : '') +
              '></div>' +
              '<div class="dial-container container1">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.stand).rotate1) : '') +
              '></div>' +
              '</div>' +
              '<div class="dial-container container2">' +
              '<div class="wedge"' +
              (a ? getStyle(getDeg(a.stand).rotate2) : '') +
              '></div>' +
              '</div>' +
              '<div class="marker start"></div>' +
              '<div class="marker end"' +
              (a ? getStyle(a.stand) : '') +
              '></div>' +
              '</div>' +
              '</div>'
            );
          },
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-activity-calendar"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.screen {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 5px auto 10px auto;
}

.screen * {
    box-sizing: content-box;
}

.screen .dials {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: absolute;
    top: 0.875em;
    left: 0;
}

.screen .dial {
    border: 1px solid #000;
    border-radius: 50%;
}

/**** DIAL 1 ****/

.dial.move {
    position: absolute;
    width: 2em;
    height: 2em;
}

.dial.move::before {
    content: "";
    width: 0.75em;
    height: 0.75em;
    position: absolute;
    top: -0.29em;
    left: calc(50% - 0.1875em);
    z-index: 10;
}

.dial.move::after {
    content: "";
    background: #000;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    top: 0.25em;
    left: 0.25em;
}

.dial.move .dial-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1em;
    overflow: hidden;
}

.dial.move .wedge {
    width: 1em;
    height: 2em;
    position: absolute;
    top: 0;
    left: 0;
}

.dial.move .container1 {
    left: 1em;
}

.dial.move .container1 .wedge {
    border-radius: 2em 0 0 2em;
    background: #fc1d20;
    left: -1em;
    transform-origin: 100% 50%;
}

.dial.move .container2 {
    left: 0;
}

.dial.move .container2 .wedge {
    background: #fc1d20;
    border-radius: 0 2em 2em 0;
    transform-origin: 0 50%;
    left: 1em;
}

.dial.move .marker {
    width: 0.25em;
    height: 0.25em;
    background: #fc1d20;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - 0.125em);
}

.dial.move .end {
    transform-origin: 50% 1em;
}

/**** DIAL 2 ****/

.dial.exercise {
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: 0.25em;
    left: 0.25em;
}

.dial.exercise::before {
    content: "";
    width: 0.75em;
    height: 0.75em;
    position: absolute;
    top: -0.29em;
    left: calc(50% - 0.1875em);
    z-index: 10;
}

.dial.exercise::after {
    content: "";
    background: #000;
    border-radius: 50%;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 0.25em;
    left: 0.25em;
}

.dial.exercise .dial-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.75em;
    overflow: hidden;
}

.dial.exercise .wedge {
    border-radius: 50%;
    width: 0.75em;
    height: 1.5em;
    position: absolute;
}

.dial.exercise .container1 {
    left: 0.75em;
}

.dial.exercise .container1 .wedge {
    border-radius: 2em 0 0 2em;
    position: absolute;
    background: #9cfc33;
    left: -0.75em;
    transform-origin: 100% 50%;
}

.dial.exercise .container2 {
    left: 0;
}

.dial.exercise .container2 .wedge {
    background: #9cfc33;
    border-radius: 0 2em 2em 0;
    transform-origin: 0 50%;
    left: .75em;
}

.dial.exercise .marker {
    width: 0.25em;
    height: 0.25em;
    background: #9cfc33;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - 0.125em);
}

.dial.exercise .end {
    transform-origin: 45% 0.75em;
}

/**** DIAL 3 ****/

.dial.stand {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 0.5em;
    left: 0.5em;
}

.dial.stand::before {
    content: "";
    width: 0.75em;
    height: 0.75em;
    position: absolute;
    top: -0.24em;
    left: calc(50% - 0.1875em);
    z-index: 10;
}

.dial.stand::after {
    content: "";
    background: #000;
    border-radius: 50%;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    top: 0.25em;
    left: 0.25em;
}

.dial.stand .dial-container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1em;
    overflow: hidden;
}

.dial.stand .wedge {
    border-radius: 50%;
    width: 0.5em;
    height: 1em;
    position: absolute;
}

.dial.stand .container1 {
    left: 0.5em;
}

.dial.stand .container1 .wedge {
    position: absolute;
    background: #32cbd4;
    border-radius: 2em 0 0 2em;
    left: -0.5em;
    transform-origin: 100% 50%;
}

.dial.stand .container2 {
    left: 0;
}

.dial.stand .container2 .wedge {
    background: #32cbd4;
    border-radius: 0 2em 2em 0;
    transform-origin: 0 50%;
    left: 0.5em;
}

.dial.stand .marker {
    width: 0.25em;
    height: 0.25em;
    background: #32cbd4;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: calc(50% - .125em);
}

.dial.stand .end {
    transform-origin: 50% .5em;
}

.dial-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
}
  `,
};
