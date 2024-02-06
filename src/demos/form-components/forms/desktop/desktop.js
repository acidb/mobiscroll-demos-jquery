import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

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
<div mbsc-page>
    <div class="mbsc-grid mbsc-grid-fixed">
        <div class="mbsc-form-group">
            <div class="mbsc-row mbsc-justify-content-center">
                <div class="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
                    <div class="mbsc-form-group-title">Multi column grid</div>
                    <div class="mbsc-row">
                        <div class="mbsc-col-md-6 mbsc-col-12">
                            <label>
                            <input mbsc-input data-label="Email" data-input-style="box" data-label-style="floating" type="text" placeholder="Email" />
                        </label>
                        </div>
                        <div class="mbsc-col-md-6 mbsc-col-12">
                            <label>
                            <input mbsc-input data-label="Password" data-input-style="box" data-label-style="floating" type="password" placeholder="Password" data-password-toggle="true" />
                        </label>
                        </div>
                    </div>
                    <div class="mbsc-row">
                        <div class="mbsc-col-12">
                            <label>
                            <input mbsc-input data-label="Address" data-input-style="box" data-label-style="floating" type="text" placeholder="Address" />
                        </label>
                        </div>
                    </div>
                    <div class="mbsc-row">
                        <div class="mbsc-col-md-6 mbsc-col-12">
                            <label>
                            <input mbsc-input data-label="City" data-input-style="box" data-label-style="floating" type="text" placeholder="City" />
                        </label>
                        </div>
                        <div class="mbsc-col-md-4 mbsc-col-6">
                            <div>
                                <label>
                                <select mbsc-dropdown data-label="State" data-input-style="box" data-label-style="floating">
                                    <option value="Alabama">Alabama</option> 
                                    <option value="Alaska">Alaska</option>
                                    <option value="Arizona">Arizona</option> 
                                    <option value="Arkansas">Arkansas</option>
                                    <option value="California">California</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Connecticut">Connecticut</option>
                                    <option value="Delaware">Delaware</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Hawaii">Hawaii</option>
                                    <option value="Idaho">Idaho</option>
                                    <option value="Illinois Indiana">Illinois Indiana</option>
                                    <option value="Iowa">Iowa</option>
                                    <option value="Kansas">Kansas</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Louisiana">Louisiana</option>
                                    <option value="Maine">Maine</option>
                                    <option value="Maryland">Maryland</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                    <option value="Michigan">Michigan</option>
                                    <option value="Minnesota">Minnesota</option>
                                    <option value="Mississippi">Mississippi</option>
                                    <option value="Missouri">Missouri</option>
                                    <option value="Montana Nebraska">Montana Nebraska</option>
                                    <option value="Nevada">Nevada</option>
                                    <option value="New Hampshire">New Hampshire</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="New Mexico">New Mexico</option>
                                    <option value="New York">New York</option>
                                    <option value="North Carolina">North Carolina</option>
                                    <option value="North Dakota">North Dakota</option>
                                    <option value="Ohio">Ohio</option>
                                    <option value="Oklahoma">Oklahoma</option>
                                    <option value="Oregon">Oregon</option>
                                    <option value="Pennsylvania Rhode Island">Pennsylvania Rhode Island</option>
                                    <option value="South Carolina">South Carolina</option>
                                    <option value="South Dakota">South Dakota</option>
                                    <option value="Tennessee">Tennessee</option>
                                    <option value="Texas">Texas</option>
                                    <option value="Utah">Utah</option>
                                    <option value="Vermont">Vermont</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington">Washington</option>
                                    <option value="West Virginia">West Virginia</option>
                                    <option value="Wisconsin">Wisconsin</option>
                                    <option value="Wyomin">Wyomin</option>
                                </select>
                            </label>
                            </div>
                        </div>
                        <div class="mbsc-col-md-2 mbsc-col-6">
                            <label>
                            <input mbsc-input data-label="Zip" data-input-style="box" data-label-style="floating" type="text" placeholder="Zip" />
                        </label>
                        </div>
                    </div>
                    <button mbsc-button>Sign in</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mbsc-grid">
        <div class="mbsc-row mbsc-justify-content-center">
            <div class="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
                <div class="mbsc-form-group-inset">
                    <div class="mbsc-form-group-title">Single column grid</div>
                    <label>
                    <input mbsc-input data-label="First Name" type="text" placeholder="First Name" />
                </label>
                    <label>
                    <input mbsc-input data-label="Last Name" type="text" placeholder="Last Name" />
                </label>
                    <label>
                    <input mbsc-input data-label="User Name" type="text" placeholder="User Name" />
                </label>
                    <label>
                    <input mbsc-input data-label="Company" type="text" placeholder="Company Name" />
                </label>
                    <label>
                    <input mbsc-input data-label="Email" type="text" placeholder="Email Address" />
                </label>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-ios .mbsc-form-grid .mbsc-textfield-wrapper {
    margin: 0.75em 1em;
}
  `,
};
