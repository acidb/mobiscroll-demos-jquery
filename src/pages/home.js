import { demos } from '../demos';

var html = '';

demos.forEach(function (main) {
  html += '<div>';
  html += '<h2>' + main.name + '</h2>';
  main.items.forEach(function (sub) {
    html += '<div>';
    html += '<h3>' + sub.name + '</h3>';
    sub.items.forEach(function (group) {
      html += '<div>';
      html += '<h4>' + group.name + '</h4>';
      html += '<ul>';
      group.items.forEach(function (demo) {
        var path = '/' + main.unique + '/' + sub.unique + '/' + demo.unique;
        html += '<li><a class="app-link" href="' + path + '">' + demo.name + '</a></li>';
      });
      html += '</ul>';
      html += '</div>';
    });
    html += '</div>';
  });
  html += '</div>';
});

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {},
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page>
  <div class="app-home mbsc-padding">${html}</div>
</div>
  `,
};
