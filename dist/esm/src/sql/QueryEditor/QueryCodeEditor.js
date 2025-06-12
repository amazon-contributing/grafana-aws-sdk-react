import { defaults } from 'lodash';
import React, { useRef, useEffect } from 'react';
import { CodeEditor } from '@grafana/ui';

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
function QueryCodeEditor(props) {
  const { getSuggestions, query } = props;
  const { rawSQL } = defaults(props.query, { rawSQL: "" });
  const onRawSqlChange = (rawSQL2) => {
    const query2 = __spreadProps(__spreadValues({}, props.query), {
      rawSQL: rawSQL2
    });
    props.onChange(query2);
    props.onRunQuery();
  };
  const suggestionsRef = useRef([]);
  useEffect(() => {
    suggestionsRef.current = getSuggestions(query);
  }, [getSuggestions, query]);
  return /* @__PURE__ */ React.createElement(
    CodeEditor,
    __spreadValues({
      language: props.language,
      value: rawSQL,
      onBlur: onRawSqlChange,
      showMiniMap: false,
      showLineNumbers: true,
      getSuggestions: () => suggestionsRef.current,
      height: "240px"
    }, props.editorProps)
  );
}

export { QueryCodeEditor };
//# sourceMappingURL=QueryCodeEditor.js.map
