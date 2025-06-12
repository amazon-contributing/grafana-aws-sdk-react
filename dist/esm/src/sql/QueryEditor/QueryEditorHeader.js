import React from 'react';
import { LoadingState } from '@grafana/data';
import { EditorHeader, FlexItem } from '@grafana/experimental';
import { Button } from '@grafana/ui';
import { RunQueryButtons } from '@grafana/async-query-data';

function QueryEditorHeader({
  query,
  showAsyncQueryButtons,
  extraHeaderElementLeft,
  extraHeaderElementRight,
  enableRunButton,
  onRunQuery,
  data,
  cancel
}) {
  return /* @__PURE__ */ React.createElement(EditorHeader, null, extraHeaderElementLeft, /* @__PURE__ */ React.createElement(FlexItem, { grow: 1 }), showAsyncQueryButtons ? /* @__PURE__ */ React.createElement(
    RunQueryButtons,
    {
      onRunQuery,
      enableRun: enableRunButton,
      query,
      onCancelQuery: cancel,
      state: data == null ? void 0 : data.state
    }
  ) : /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: enableRunButton ? "primary" : "secondary",
      size: "sm",
      onClick: onRunQuery,
      icon: (data == null ? void 0 : data.state) === LoadingState.Loading ? "fa fa-spinner" : void 0,
      disabled: (data == null ? void 0 : data.state) === LoadingState.Loading || !enableRunButton
    },
    "Run query"
  ), extraHeaderElementRight);
}

export { QueryEditorHeader };
//# sourceMappingURL=QueryEditorHeader.js.map
