'use strict';

const build = require('@microsoft/sp-build-web');
build.addSuppression(/Module Warning \(from .*?\/postcss-loader\/.*?\):/);

build.addSuppression(/Warning/gi);
build.addSuppression(/Module Warning \(from .*?\/postcss-loader\/.*?\):/);
var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

/* fast-serve */
const { addFastServe } = require("spfx-fast-serve-helpers");
addFastServe(build);
/* end of fast-serve */
build.tslintCmd.enabled = false;
build.initialize(require('gulp'));

