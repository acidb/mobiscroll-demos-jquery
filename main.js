import { enhance, getInst } from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';
import { Router } from 'html5-history-router';
import '@mobiscroll/jquery/dist/css/mobiscroll.min.css';
import '@mobiscroll/print/dist/css/mobiscroll.min.css';
import './style.css';

import { demos, demoTitleMap } from './src/demos';
import HomePage from './src/pages/home';

var router = new Router();

var app = document.getElementById('app');
var appBack = document.getElementById('app-back');
var appPath = document.getElementById('app-path');
var appTitle = document.getElementById('app-title');

var currentPage;

function destroyPage() {
  var selectors = [
    '[mbsc-button]',
    '[mbsc-calendar-nav]',
    '[mbsc-calendar-next]',
    '[mbsc-calendar-prev]',
    '[mbsc-calendar-today]',
    '[mbsc-segmented]',
    '[mbsc-segmented-group]',
    '[mbsc-page]',
    '.mbsc-eventcalendar',
    '.mds-popup',
    '.mds-select',
  ];
  app.querySelectorAll(selectors.join(',')).forEach(function (elm) {
    getInst(elm).destroy();
  });
}

function loadPage(page, title, path) {
  if (currentPage) {
    destroyPage();
    if (currentPage.destroy) {
      currentPage.destroy();
    }
  }

  app.innerHTML = '<div id="app-placeholder">' + page.markup + '</div>';
  appTitle.innerHTML = title;
  appPath.innerHTML = path ? './src/demos' + path : '';
  appBack.style.display = path ? 'block' : 'none';

  if (page.css && !page.loaded) {
    page.loaded = true;
    var style = document.createElement('style');
    style.innerHTML = page.css;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  if (page.init) {
    page.init();
  }

  enhance(app);
}

demos.forEach(function (main) {
  main.items.forEach(function (sub) {
    sub.items.forEach(function (group) {
      group.items.forEach(function (demo) {
        var path = '/' + main.unique + '/' + sub.unique + '/' + demo.unique;
        demoTitleMap[path] = demo.name;
        router.on(path, function () {
          loadPage(demo.component, demo.name, path);
        });
      });
    });
  });
});

router.on('/', function () {
  loadPage(HomePage, 'Mobiscroll jQuery Demos');
});

document.addEventListener('click', function (ev) {
  var link = ev.target.closest('.app-link');
  if (link) {
    ev.preventDefault();
    router.pushState(link.getAttribute('href'));
  }
});
