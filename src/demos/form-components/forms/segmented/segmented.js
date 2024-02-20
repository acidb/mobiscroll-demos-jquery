import * as mobiscroll from '@mobiscroll/jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Single select</div>
    <label>
        Day
        <input mbsc-segmented type="radio" name="range">
    </label>
    <label>
        Week
        <input mbsc-segmented type="radio" name="range">
    </label>
    <label>
        Month
        <input mbsc-segmented type="radio" name="range">
    </label>
    <label>
        Year
        <input mbsc-segmented type="radio" name="range" checked>
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Multiple select</div>
    <label>
        S
        <input mbsc-segmented type="checkbox" name="week" disabled>
    </label>
    <label>
        M
        <input mbsc-segmented type="checkbox" name="week" checked>
    </label>
    <label>
        T
        <input mbsc-segmented type="checkbox" name="week" >
    </label>
    <label>
        W
        <input mbsc-segmented type="checkbox" name="week" >
    </label>
    <label>
        T
        <input mbsc-segmented type="checkbox" name="week" checked>
    </label>
    <label>
        F
        <input mbsc-segmented type="checkbox" name="week" >
    </label>
    <label>
        S
    <input mbsc-segmented type="checkbox" name="week" disabled>
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Text and Icon</div>
    <label>
        Featured
        <input mbsc-segmented type="radio" data-icon="material-star" name="app" checked>
    </label>
    <label>
        Explore
        <input mbsc-segmented type="radio" data-icon="material-explore" name="app">
    </label>
    <label>
        Updates
        <input mbsc-segmented type="radio" data-icon="material-system-update" name="app">
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Icon</div>
    <label>
        <input mbsc-segmented type="radio" data-icon="fa-mail-reply" name="settings">
    </label>
    <label>
        <input mbsc-segmented type="radio" data-icon="fa-retweet" name="settings">
    </label>
    <label>
        <input mbsc-segmented type="radio" data-icon="star3" name="settings" checked>
    </label>
    <label>
        <input mbsc-segmented type="radio" data-icon="cogs" name="settings">
    </label>
</div>
<div class="mbsc-form-group">
    <div class="mbsc-form-group-title">Disabled</div>
    <label>
        Idividual
        <input mbsc-segmented type="radio" name="org" disabled checked>
    </label>
    <label>
        Team
        <input mbsc-segmented type="radio" name="org" disabled>
    </label>
    <label>
        Company
        <input mbsc-segmented type="radio" name="org" disabled>
    </label>
</div>
  `,
};
