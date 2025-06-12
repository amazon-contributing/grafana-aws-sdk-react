import React from 'react';
import { useTheme2 } from '@grafana/ui';

function Divider() {
  const theme = useTheme2();
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { borderTop: `1px solid ${theme.colors.border.weak}`, margin: theme.spacing(2, 0), width: "100%" }
    }
  );
}

export { Divider };
//# sourceMappingURL=Divider.js.map
