export var print = {
  init: function (inst) {
    inst.print = function () {
      alert(
        'The print add-on is not available with the trial.' +
          ' It might be included with your license or as an add-on,' +
          " if that's the case, please run `npm install @mobiscroll/print` in the project root.",
      );
    };
  },
};
