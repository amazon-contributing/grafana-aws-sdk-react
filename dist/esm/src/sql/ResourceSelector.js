import { Select, InlineField } from '@grafana/ui';
import { isEqual } from 'lodash';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { defaultKey } from './types.js';

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
function ResourceSelector(props) {
  const propsDependencies = props.dependencies;
  const propsOnChange = props.onChange;
  const dependencies = useRef(props.dependencies);
  const fetched = useRef(false);
  const resource = useRef(props.value || props.default || null);
  const [resources, setResources] = useState(
    resource.current ? [resource.current] : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const defaultOpts = useMemo(() => {
    const opts = [
      {
        label: `default (${props.default})`,
        value: defaultKey,
        description: `Default value set in the data source`
      }
    ];
    if (props.value && props.value !== defaultKey) {
      opts.push({ label: props.value, value: props.value });
    }
    return opts;
  }, [props.default, props.value]);
  const [options, setOptions] = useState(props.default ? defaultOpts : []);
  useEffect(() => {
    if (props.resources !== void 0) {
      setResources(props.resources);
    }
  }, [props.resources]);
  useEffect(() => {
    const newOptions = props.default ? defaultOpts : [];
    if (resources.length) {
      resources.forEach((r) => {
        const value = typeof r === "string" ? r : r.value;
        if (!newOptions.find((o) => o.value === value)) {
          typeof r === "string" ? newOptions.push({ label: r, value: r }) : newOptions.push(r);
        }
      });
      setOptions(newOptions);
    } else {
      setOptions([]);
    }
  }, [resources, defaultOpts, props.default]);
  useEffect(() => {
    if (!isEqual(propsDependencies, dependencies.current)) {
      fetched.current = false;
      resource.current = null;
      dependencies.current = propsDependencies;
      propsOnChange(null);
    }
  }, [propsDependencies, propsOnChange]);
  const fetch = async () => {
    var _a;
    if (fetched.current) {
      return;
    }
    if (props.saveOptions) {
      await props.saveOptions();
    }
    try {
      const resources2 = await ((_a = props.fetch) == null ? void 0 : _a.call(props)) || [];
      setResources(resources2);
    } finally {
      fetched.current = true;
    }
  };
  const onChange = (e) => {
    propsOnChange(e);
    if (e.value) {
      resource.current = e.value;
    }
  };
  const onClick = async () => {
    setIsLoading(true);
    try {
      await fetch();
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.newFormStylingEnabled ? /* @__PURE__ */ React.createElement(
    Select,
    __spreadProps(__spreadValues({}, props), {
      id: props.id,
      "aria-label": props.label,
      options,
      onChange,
      isLoading,
      className: props.className || "min-width-6",
      onOpenMenu: () => props.fetch && onClick(),
      menuShouldPortal: true
    })
  ) : /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: props.label,
      labelWidth: props.labelWidth,
      tooltip: props.tooltip,
      hidden: props.hidden,
      htmlFor: props.id
    },
    /* @__PURE__ */ React.createElement("div", { "data-testid": props["data-testid"], title: props.title }, /* @__PURE__ */ React.createElement(
      Select,
      __spreadProps(__spreadValues({}, props), {
        id: props.id,
        "aria-label": props.label,
        options,
        onChange,
        isLoading,
        className: props.className || "min-width-6",
        onOpenMenu: () => props.fetch && onClick(),
        menuShouldPortal: true
      })
    ))
  ));
}

export { ResourceSelector };
//# sourceMappingURL=ResourceSelector.js.map
