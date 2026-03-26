var now = new Date();

/**
 * Returns an ISO 8601 date string generated dynamically relative to the current date.
 * It is useful for generating dates for sample data.
 * @param {string} s The string to parse the date from, e.g. 'y,m,d,8,30'
 * @returns {string} An ISO 8601 date string.
 */
export function dyndatetime(s) {
  s = s.replace(/y/, now.getFullYear());
  s = s.replace(/m/, now.getMonth() + 1);
  s = s.replace(/d/, now.getDate());
  s = s.replace(/h/, now.getHours());
  s = s.replace(/i/, now.getMinutes());
  s = s.replace(/(.*)/, function (date) {
    var dateDict = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
    var dateArray = date.split(',');
    dateArray.forEach(function (item, index) {
      var splittedNum = item.split(/[/+|-]/);
      if (splittedNum.length > 1) {
        var minus = item.indexOf('-') !== -1;
        dateDict[index] = minus ? +splittedNum[0] - +splittedNum[1] : +splittedNum[0] + +splittedNum[1];
      } else {
        dateDict[index] = +splittedNum[0];
      }
    });
    var dd = new Date(dateDict[0], dateDict[1] - 1, dateDict[2], dateDict[3], dateDict[4]);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var h = dd.getHours();
    var mm = dd.getMinutes();
    return (
      y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d + 'T' + (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm
    );
  });
  return s;
}
