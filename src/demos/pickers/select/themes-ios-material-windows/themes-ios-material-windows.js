import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
    });

    $(function () {
      $('#demo').mobiscroll().select({
        display: 'inline',
        theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
        themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<select id="demo">
    <option value="atl">Atlanta</option>
    <option value="ber">Berlin</option>
    <option value="bos">Boston</option>
    <option value="chi">Chicago</option>
    <option value="lon">London</option>
    <option value="la">Los Angeles</option>
    <option value="ny">New York</option>
    <option value="par">Paris</option>
    <option value="sf">San Francisco</option>
</select>
  `,
};
