import React from 'react';
import { Select, InlineField } from '@grafana/ui';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function FormatSelect(props) {
  var _a;
  const onChangeFormat = (e) => {
    var _a2;
    props.onChange(__spreadProps(__spreadValues({}, props.query), {
      format: e.value || 0
    }));
    (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.newFormStylingEnabled ? /* @__PURE__ */ React.createElement(
    Select,
    {
      "aria-label": "Format data frames as",
      id: (_a = props.id) != null ? _a : "formatAs",
      options: props.options,
      value: props.query.format,
      onChange: onChangeFormat,
      menuShouldPortal: true
    }
  ) : /* @__PURE__ */ React.createElement(InlineField, { label: "Format as", labelWidth: 11 }, /* @__PURE__ */ React.createElement(
    Select,
    {
      "aria-label": "Format as",
      options: props.options,
      value: props.query.format,
      onChange: onChangeFormat,
      className: "width-12",
      menuShouldPortal: true
    }
  )));
}

export { FormatSelect };
//# sourceMappingURL=FormatSelect.js.map
