import "@testing-library/jest-dom";

// polyfill for require.context (definition from webpack)
require.context = function () {
  const fn = (path) => path;
  fn.keys = () => [];
  return fn;
};
