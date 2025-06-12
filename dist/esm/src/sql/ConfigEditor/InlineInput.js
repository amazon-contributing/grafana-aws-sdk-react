import React from 'react';
import { InlineField, Input } from '@grafana/ui';
import { DEFAULT_LABEL_WIDTH } from '../../components/ConnectionConfig.js';

function InlineInput(props) {
  var _a;
  return /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: props.label,
      labelWidth: (_a = props.labelWidth) != null ? _a : DEFAULT_LABEL_WIDTH,
      tooltip: props.tooltip,
      hidden: props.hidden,
      disabled: props.disabled
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        "data-testid": props["data-testid"],
        className: "width-30",
        value: props.value,
        onChange: props.onChange,
        placeholder: props.placeholder,
        disabled: props.disabled
      }
    )
  );
}

export { InlineInput };
//# sourceMappingURL=InlineInput.js.map
