import {
  Button,
  CalendarNav,
  CalendarNext,
  CalendarPrev,
  CalendarToday,
  Checkbox,
  Datepicker,
  Draggable,
  Dropcontainer,
  Dropdown,
  enhance,
  Eventcalendar,
  getInst,
  Input,
  localeAr,
  localeBg,
  localeCa,
  localeCs,
  localeDa,
  localeDe,
  localeEl,
  localeEn,
  localeEnGB,
  localeEs,
  localeFa,
  localeFi,
  localeFr,
  localeHe,
  localeHi,
  localeHr,
  localeHu,
  localeIt,
  localeJa,
  localeKo,
  localeLt,
  localeNl,
  localeNo,
  localePl,
  localePtBR,
  localePtPT,
  localeRo,
  localeRu,
  localeRuUA,
  localeSk,
  localeSr,
  localeSv,
  localeTh,
  localeTr,
  localeUa,
  localeVi,
  localeZh,
  Page,
  Popup,
  Radio,
  registerComponent,
  Segmented,
  SegmentedGroup,
  Select,
  setOptions,
  Stepper,
  Switch,
  Textarea,
} from '@mobiscroll/jquery';

import { Router } from 'html5-history-router';
import $ from 'jquery';
import '@mobiscroll/jquery/dist/css/mobiscroll.min.css';
import '@mobiscroll/print/dist/css/mobiscroll.min.css';
import './style.css';

import { demos, demoTitleMap } from './src/demos';
import HomePage from './src/pages/home';

registerComponent(Datepicker);
registerComponent(Draggable);
registerComponent(Dropcontainer);
registerComponent(Eventcalendar);
registerComponent(CalendarNav);
registerComponent(CalendarNext);
registerComponent(CalendarPrev);
registerComponent(CalendarToday);
registerComponent(Button);
registerComponent(Checkbox);
registerComponent(Input);
registerComponent(Dropdown);
registerComponent(Textarea);
registerComponent(Page);
registerComponent(Radio);
registerComponent(Segmented);
registerComponent(SegmentedGroup);
registerComponent(Select);
registerComponent(Stepper);
registerComponent(Switch);
registerComponent(Popup);

window.isMbscDemo = true;

var router = new Router();

var app = document.getElementById('app');
var appBack = document.getElementById('app-back');
var appPath = document.getElementById('app-path');
var appTitle = document.getElementById('app-title');
var appFooter = document.querySelector('.app-footer');

var currentPage;

function updatePath() {
  appPath.style.display = '';
  appPath.style.display = appFooter.scrollWidth > appFooter.clientWidth ? 'none' : '';
}

window.addEventListener('resize', updatePath);

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
  appPath.style.display = '';
  updatePath();

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

// --- THEME/VARIANT/LOCALE FOOTER CONTROLS ---

var locales = [
  { value: localeEn, text: 'English' },
  { value: localeAr, text: 'Arabic' },
  { value: localeBg, text: 'Bulgarian' },
  { value: localeCa, text: 'Català' },
  { value: localeCs, text: 'Cestina' },
  { value: localeZh, text: 'Chinese' },
  { value: localeHr, text: 'Croatian' },
  { value: localeDa, text: 'Dansk' },
  { value: localeDe, text: 'Deutsch' },
  { value: localeEnGB, text: 'English (UK)' },
  { value: localeEs, text: 'Español' },
  { value: localeFr, text: 'Français' },
  { value: localeEl, text: 'Greek' },
  { value: localeHi, text: 'Hindi' },
  { value: localeIt, text: 'Italiano' },
  { value: localeJa, text: 'Japanese' },
  { value: localeKo, text: 'Korean' },
  { value: localeLt, text: 'Lietuvių' },
  { value: localeHu, text: 'Magyar' },
  { value: localeNl, text: 'Nederlands' },
  { value: localeNo, text: 'Norsk' },
  { value: localePl, text: 'Polski' },
  { value: localePtPT, text: 'Português Europeu' },
  { value: localePtBR, text: 'Pt. Brasileiro' },
  { value: localeRo, text: 'Română' },
  { value: localeSr, text: 'Serbian' },
  { value: localeSk, text: 'Slovencina' },
  { value: localeFi, text: 'Suomi' },
  { value: localeSv, text: 'Svenska' },
  { value: localeTh, text: 'Thai' },
  { value: localeTr, text: 'Türkçe' },
  { value: localeUa, text: 'Ukrainian' },
  { value: localeVi, text: 'Vietnamese' },
  { value: localeRu, text: 'Русский' },
  { value: localeRuUA, text: 'Русский (UA)' },
  { value: localeHe, text: 'עברית' },
  { value: localeFa, text: 'فارسی' },
];

var themes = [
  { value: 'ios', text: 'iOS' },
  { value: 'material', text: 'Material' },
  { value: 'windows', text: 'Windows' },
  { value: 'auto', text: 'Auto' },
];

var themeVariants = [
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
  { value: 'auto', text: 'Auto' },
];

var theme = 'auto';
var themeVariant = 'auto';
var locale = localeEn;

function setGlobalOptions() {
  setOptions({
    theme: theme,
    themeVariant: themeVariant,
    locale: locale,
  });
}

var themeSelect = $('#mobiscroll-theme')
  .mobiscroll()
  .select({
    data: themes,
    touchUi: false,
    onChange: function (args) {
      theme = args.value;
      setGlobalOptions();
    },
  })
  .mobiscroll('getInst');

themeSelect.setVal('auto');

var themeVariantSelect = $('#mobiscroll-theme-variant')
  .mobiscroll()
  .select({
    data: themeVariants,
    touchUi: false,
    onChange: function (args) {
      themeVariant = args.value;
      setGlobalOptions();
    },
  })
  .mobiscroll('getInst');

themeVariantSelect.setVal('auto');

var localeSelect = $('#mobiscroll-locale')
  .mobiscroll()
  .select({
    data: locales,
    touchUi: false,
    onChange: function (args) {
      locale = args.value;
      setGlobalOptions();
    },
  })
  .mobiscroll('getInst');

localeSelect.setVal(localeEn);

setGlobalOptions();
