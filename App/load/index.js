"use strict";function sequence(e){function r(){e||(e=require("gulp"));var r={},n=slice.call(arguments),t=n[n.length-1];if("function"==typeof t?n.pop():t=null,!n.length)throw new gutil.PluginError(packageName,"No tasks were provided to gulp-sequence!");var u=thunk.seq(n.filter(function(e){return e}).map(function(n){return function(t){function u(e){var u=n.indexOf(e.task);if(!(u<0)){n[u]=r;for(var o=0;o<n.length;o++)if(n[o]!==r)return;i(),t()}}function o(e){!e.err||n.indexOf(e.task)<0||(i(),t(e.err))}function i(){e.removeListener("task_stop",u).removeListener("task_not_found",o).removeListener("task_recursion",o).removeListener("task_err",o)}Array.isArray(n)||(n=[n]),e.on("task_stop",u).on("task_not_found",o).on("task_recursion",o).on("task_err",o).start(n.slice())}}));return t?u(t):u}return r.use=function(e){return sequence(e)},r}var thunk=require("thunks")(),gutil=require("gulp-util"),packageName=require("./package.json").name,slice=Array.prototype.slice;module.exports=sequence();