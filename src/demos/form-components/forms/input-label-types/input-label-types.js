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
<div class="mbsc-grid">
    <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Underline inputs with stacked labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="stacked" data-input-style="underline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="stacked" data-input-style="underline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="stacked" data-input-style="underline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="stacked" data-input-style="underline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="stacked" data-input-style="underline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="stacked" data-input-style="underline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="stacked" data-input-style="underline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Underline inputs with inline labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="inline" data-input-style="underline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="inline" data-input-style="underline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="inline" data-input-style="underline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="inline" data-input-style="underline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="inline" data-input-style="underline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="inline" data-input-style="underline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="inline" data-input-style="underline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Underline inputs with floating labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="floating" data-input-style="underline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="floating" data-input-style="underline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="floating" data-input-style="underline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="floating" data-input-style="underline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="floating" data-input-style="underline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="floating" data-input-style="underline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="floating" data-input-style="underline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
    </div>
    <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Box inputs with stacked labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="stacked" data-input-style="box" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="stacked" data-input-style="box" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="stacked" data-input-style="box" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="stacked" data-input-style="box" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="stacked" data-input-style="box" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="stacked" data-input-style="box" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="stacked" data-input-style="box" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">box inputs with inline labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="inline" data-input-style="box" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="inline" data-input-style="box" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="inline" data-input-style="box" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="inline" data-input-style="box" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="inline" data-input-style="box" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="inline" data-input-style="box" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="inline" data-input-style="box" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">box inputs with floating labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="floating" data-input-style="box" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="floating" data-input-style="box" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="floating" data-input-style="box" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="floating" data-input-style="box" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="floating" data-input-style="box" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="floating" data-input-style="box" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="floating" data-input-style="box" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
    </div>
    <div class="mbsc-row mbsc-justify-content-center">
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Outline inputs with stacked labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="stacked" data-input-style="outline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="stacked" data-input-style="outline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="stacked" data-input-style="outline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="stacked" data-input-style="outline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="stacked" data-input-style="outline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="stacked" data-input-style="outline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="stacked" data-input-style="outline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Outline inputs with inline labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="inline" data-input-style="outline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="inline" data-input-style="outline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="inline" data-input-style="outline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="inline" data-input-style="outline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="inline" data-input-style="outline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="inline" data-input-style="outline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="inline" data-input-style="outline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-8 mbsc-col-xl-4">
            <div class="mbsc-form-group">
                <div class="mbsc-form-group-title">Outline inputs with floating labels</div>
                <label>
                    Name
                    <input mbsc-input data-label-style="floating" data-input-style="outline" type="text" data-start-icon="user4" placeholder="Input with label" />
                </label>
                <label class="mbsc-err">
                    Email
                    <input mbsc-input data-label-style="floating" data-input-style="outline" type="text" data-start-icon="material-email" placeholder="With error styling" data-error="true" />
                </label>
                <label class="mbsc-err">
                    Password
                    <input mbsc-input data-label-style="floating" data-input-style="outline" type="password" data-password-toggle="true" placeholder="With icons and error message" data-start-icon="lock2" data-error="true" data-error-message="An error occurred" />
                </label>
                <label>
                    <input mbsc-input data-label-style="floating" data-input-style="outline" type="text" data-start-icon="empty" placeholder="Without label" />
                </label>
                <label>
                    About me
                    <textarea mbsc-textarea data-label-style="floating" data-input-style="outline" data-start-icon="bubble" data-start-icon-align="left" placeholder="Textarea with left icon"></textarea>
                </label>
                <label>
                    <select mbsc-dropdown data-label-style="floating" data-input-style="outline" data-start-icon="plus" data-end-icon="close">
                        <option>Select with icons</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Citroen">Citroen</option>
                        <option value="Lotus">Lotus</option>
                    </select>
                </label>
                <label>
                    File upload
                    <input mbsc-input data-label-style="floating" data-input-style="outline" type="file" placeholder="Select file..." />
                </label>
            </div>
        </div>
    </div>
</div>
  `,
};
