/* eslint-disable es5/no-arrow-functions */
/* eslint-disable es5/no-block-scoping */
/* eslint-disable es5/no-shorthand-properties */

export default function myPlugin() {
  return {
    name: 'transform-file',
    transform(src, id) {
      if (/\.(js)$/.test(id)) {
        return {
          code: replaceDynamicDates(src),
          map: null, // provide source map if available
        };
      }
    },
  };
}

const now = new Date();

const replaceDynamicDates = (src) =>
  src.replace(/['|"]dyndatetime\(([^)])*\)['|"]/g, function (i) {
    return parseDatestring(i);
  });

const parseDatestring = (s) => {
  s = s.replace(/dyndatetime/, '');
  s = s.replace(/\(/, '');
  s = s.replace(/\)/, '');
  s = s.replace(/y/, now.getFullYear());
  s = s.replace(/m/, now.getMonth() + 1);
  s = s.replace(/d/, now.getDate());
  s = s.replace(/h/, now.getHours());
  s = s.replace(/i/, now.getMinutes());
  s = s.replace(/['|"](.*)['|"]/, function (i) {
    const dateDict = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    };
    const date = i.replace(/['|"]/g, '');
    const dateArray = date.split(',');
    dateArray.forEach((i, index) => {
      const splittedNum = i.split(/[/+|/-]/);
      if (splittedNum.length > 1) {
        const minus = i.indexOf('-') !== -1;
        dateDict[index] = minus ? +splittedNum[0] - +splittedNum[1] : +splittedNum[0] + +splittedNum[1];
      } else {
        dateDict[index] = +splittedNum[0];
      }
    });
    const dd = new Date(dateDict[0], dateDict[1] - 1, dateDict[2], dateDict[3], dateDict[4]);
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1;
    const d = dd.getDate();
    const h = dd.getHours();
    const mm = dd.getMinutes();
    return (
      "'" +
      y +
      '-' +
      (m < 10 ? '0' : '') +
      m +
      '-' +
      (d < 10 ? '0' : '') +
      d +
      'T' +
      (h < 10 ? '0' : '') +
      h +
      ':' +
      (mm < 10 ? '0' : '') +
      mm +
      "'"
    );
  });
  return s;
};
