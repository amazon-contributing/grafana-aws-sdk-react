import React from 'react';
import { Select, Input, InlineField } from '@grafana/ui';
import { EditorField } from '@grafana/experimental';

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
var FillValueOptions = /* @__PURE__ */ ((FillValueOptions2) => {
  FillValueOptions2[FillValueOptions2["Previous"] = 0] = "Previous";
  FillValueOptions2[FillValueOptions2["Null"] = 1] = "Null";
  FillValueOptions2[FillValueOptions2["Value"] = 2] = "Value";
  return FillValueOptions2;
})(FillValueOptions || {});
const SelectableFillValueOptions = [
  {
    label: "Previous Value",
    value: 0 /* Previous */
  },
  {
    label: "NULL",
    value: 1 /* Null */
  },
  {
    label: "Value",
    value: 2 /* Value */
  }
];
function FillValueSelect(props) {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.newFormStylingEnabled ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(EditorField, { label: "Fill with", tooltip: "value to fill missing points", htmlFor: "fillWith" }, /* @__PURE__ */ React.createElement(
    Select,
    {
      id: "fillWith",
      "aria-label": "Fill with",
      "data-testid": "table-fill-with-select",
      options: SelectableFillValueOptions,
      value: (_b = (_a = props.query.fillMode) == null ? void 0 : _a.mode) != null ? _b : 0 /* Previous */,
      onChange: ({ value }) => {
        var _a2;
        props.onChange(__spreadProps(__spreadValues({}, props.query), {
          fillMode: __spreadProps(__spreadValues({}, props.query.fillMode), { mode: value })
        }));
        (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      },
      menuShouldPortal: true
    }
  )), ((_c = props.query.fillMode) == null ? void 0 : _c.mode) === 2 /* Value */ && /* @__PURE__ */ React.createElement(EditorField, { label: "Value", htmlFor: "valueToFill", width: 6 }, /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "valueToFill",
      "aria-label": "Value",
      type: "number",
      value: props.query.fillMode.value,
      onChange: ({ currentTarget }) => props.onChange(__spreadProps(__spreadValues({}, props.query), {
        fillMode: {
          mode: 2 /* Value */,
          value: currentTarget.valueAsNumber
        }
      })),
      onBlur: () => {
        var _a2;
        return (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      }
    }
  ))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(InlineField, { label: "Fill value", tooltip: "value to fill missing points" }, /* @__PURE__ */ React.createElement(
    Select,
    {
      "aria-label": "Fill value",
      options: SelectableFillValueOptions,
      value: (_e = (_d = props.query.fillMode) == null ? void 0 : _d.mode) != null ? _e : 0 /* Previous */,
      onChange: ({ value }) => {
        var _a2;
        props.onChange(__spreadProps(__spreadValues({}, props.query), {
          fillMode: __spreadProps(__spreadValues({}, props.query.fillMode), { mode: value })
        }));
        (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      },
      className: "width-12",
      menuShouldPortal: true
    }
  )), ((_f = props.query.fillMode) == null ? void 0 : _f.mode) === 2 /* Value */ && /* @__PURE__ */ React.createElement(InlineField, { label: "Value", labelWidth: 11 }, /* @__PURE__ */ React.createElement(
    Input,
    {
      type: "number",
      "aria-label": "Value",
      value: props.query.fillMode.value,
      onChange: ({ currentTarget }) => props.onChange(__spreadProps(__spreadValues({}, props.query), {
        fillMode: {
          mode: 2 /* Value */,
          value: currentTarget.valueAsNumber
        }
      })),
      onBlur: () => {
        var _a2;
        return (_a2 = props.onRunQuery) == null ? void 0 : _a2.call(props);
      }
    }
  ))));
}

export { FillValueOptions, FillValueSelect, SelectableFillValueOptions };
//# sourceMappingURL=FillValueSelect.js.map
