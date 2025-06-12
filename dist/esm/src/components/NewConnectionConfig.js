import React from 'react';
import { Field, Select, Input, ButtonGroup, ToolbarButton, Collapse } from '@grafana/ui';
import { onUpdateDatasourceJsonDataOptionSelect, onUpdateDatasourceJsonDataOption, onUpdateDatasourceResetOption, onUpdateDatasourceSecureJsonDataOption } from '@grafana/data';
import { AwsAuthType } from '../types.js';
import { awsAuthProviderOptions } from '../providers.js';
import { ConfigSection, ConfigSubSection } from '@grafana/experimental';

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const NewConnectionConfig = (_a) => {
  var _b = _a, {
    isARNInstructionsOpen,
    setIsARNInstructionsOpen,
    awsAssumeRoleEnabled,
    currentProvider,
    awsAllowedAuthProviders,
    skipHeader,
    regions,
    assumeRoleInstructionsStyle
  } = _b, props = __objRest(_b, [
    "isARNInstructionsOpen",
    "setIsARNInstructionsOpen",
    "awsAssumeRoleEnabled",
    "currentProvider",
    "awsAllowedAuthProviders",
    "skipHeader",
    "regions",
    "assumeRoleInstructionsStyle"
  ]);
  var _a2, _b2, _c, _d, _e, _f, _g;
  const options = props.options;
  return /* @__PURE__ */ React.createElement("div", { "data-testid": "connection-config" }, /* @__PURE__ */ React.createElement(ConfigSection, { title: skipHeader ? "" : "Connection Details", "data-testid": "connection-config" }, /* @__PURE__ */ React.createElement(ConfigSubSection, { title: "Authentication" }, /* @__PURE__ */ React.createElement(
    Field,
    {
      label: "Authentication Provider",
      description: "Specify which AWS credentials chain to use.",
      htmlFor: "authProvider"
    },
    /* @__PURE__ */ React.createElement(
      Select,
      {
        id: "authProvider",
        "aria-label": "Authentication Provider",
        value: currentProvider,
        options: awsAuthProviderOptions.filter((opt) => awsAllowedAuthProviders.includes(opt.value)),
        defaultValue: options.jsonData.authType,
        onChange: (option) => {
          onUpdateDatasourceJsonDataOptionSelect(props, "authType")(option);
        },
        menuShouldPortal: true
      }
    )
  ), options.jsonData.authType === "credentials" && /* @__PURE__ */ React.createElement(
    Field,
    {
      label: "Credentials Profile Name",
      description: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default.",
      htmlFor: "credentialsProfileName"
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "credentialsProfileName",
        placeholder: "default",
        value: options.jsonData.profile,
        onChange: onUpdateDatasourceJsonDataOption(props, "profile")
      }
    )
  ), options.jsonData.authType === "keys" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Field, { label: "Access Key ID", htmlFor: "accessKeyId" }, ((_a2 = props.options.secureJsonFields) == null ? void 0 : _a2.accessKey) ? /* @__PURE__ */ React.createElement(ButtonGroup, null, /* @__PURE__ */ React.createElement(Input, { disabled: true, placeholder: "Configured", id: "accessKeyId" }), /* @__PURE__ */ React.createElement(
    ToolbarButton,
    {
      icon: "edit",
      tooltip: "Edit Access Key ID",
      type: "button",
      onClick: onUpdateDatasourceResetOption(props, "accessKey")
    }
  )) : /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "accessKeyId",
      value: (_c = (_b2 = options.secureJsonData) == null ? void 0 : _b2.accessKey) != null ? _c : "",
      onChange: onUpdateDatasourceSecureJsonDataOption(props, "accessKey")
    }
  )), /* @__PURE__ */ React.createElement(Field, { label: "Secret Access Key", htmlFor: "secretKey" }, ((_d = props.options.secureJsonFields) == null ? void 0 : _d.secretKey) ? /* @__PURE__ */ React.createElement(ButtonGroup, null, /* @__PURE__ */ React.createElement(Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ React.createElement(
    ToolbarButton,
    {
      id: "secretKey",
      icon: "edit",
      type: "button",
      tooltip: "Edit Secret Access Key",
      onClick: onUpdateDatasourceResetOption(props, "secretKey")
    }
  )) : /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "secretKey",
      value: (_f = (_e = options.secureJsonData) == null ? void 0 : _e.secretKey) != null ? _f : "",
      onChange: onUpdateDatasourceSecureJsonDataOption(props, "secretKey")
    }
  )))), /* @__PURE__ */ React.createElement(ConfigSubSection, { title: "Assume Role" }, options.jsonData.authType === AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement("div", { className: assumeRoleInstructionsStyle }, /* @__PURE__ */ React.createElement(
    Collapse,
    {
      label: "How to create an IAM role for grafana to assume:",
      collapsible: true,
      isOpen: isARNInstructionsOpen,
      onToggle: () => setIsARNInstructionsOpen(!isARNInstructionsOpen)
    },
    /* @__PURE__ */ React.createElement("ol", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "1. Create a new IAM role in the AWS console, and select ", /* @__PURE__ */ React.createElement("code", null, "Another AWS account"), " as the", " ", /* @__PURE__ */ React.createElement("code", null, "Trusted entity"), ".")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "2. Enter the account ID of the Grafana account that has permission to assume this role:", /* @__PURE__ */ React.createElement("code", null, " 008923505280 "), " and check the ", /* @__PURE__ */ React.createElement("code", null, "Require external ID"), " box.")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "3. Enter the following external ID:", " ", /* @__PURE__ */ React.createElement("code", null, props.externalId || "External Id is currently unavailable"), " and click", " ", /* @__PURE__ */ React.createElement("code", null, "Next"), ".")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "4. Add any required permissions you would like Grafana to be able to access on your behalf. For more details on our permissions please", " ", /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/",
        target: "_blank",
        rel: "noreferrer"
      },
      "read through our documentation"
    ), ".")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "5. Give the role a name and description, and click ", /* @__PURE__ */ React.createElement("code", null, "Create role"), ".")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("p", null, "6. Copy the ARN of the role you just created and paste it into the ", /* @__PURE__ */ React.createElement("code", null, "Assume Role ARN"), " ", "field below.")))
  )), awsAssumeRoleEnabled && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Field,
    {
      htmlFor: "assumeRoleArn",
      label: "Assume Role ARN",
      description: "Optional. Specifying the ARN of a role will ensure that the\n                  selected authentication provider is used to assume the role rather than the\n                  credentials directly."
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "assumeRoleArn",
        placeholder: "arn:aws:iam:*",
        value: options.jsonData.assumeRoleArn || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "assumeRoleArn")
      }
    )
  ), options.jsonData.authType !== AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement(
    Field,
    {
      htmlFor: "externalId",
      label: "External ID",
      description: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "externalId",
        placeholder: "External ID",
        value: options.jsonData.externalId || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "externalId")
      }
    )
  ))), /* @__PURE__ */ React.createElement(ConfigSubSection, { title: "Additional Settings" }, !props.skipEndpoint && options.jsonData.authType !== AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement(
    Field,
    {
      label: "Endpoint",
      description: "Optionally, specify a custom endpoint for the service",
      htmlFor: "endpoint"
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "endpoint",
        placeholder: (_g = props.defaultEndpoint) != null ? _g : "https://{service}.{region}.amazonaws.com",
        value: options.jsonData.endpoint || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "endpoint")
      }
    )
  ), /* @__PURE__ */ React.createElement(
    Field,
    {
      label: "Default Region",
      description: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region.",
      htmlFor: "defaultRegion"
    },
    /* @__PURE__ */ React.createElement(
      Select,
      {
        id: "defaultRegion",
        "aria-label": "Default Region",
        value: regions.find((region) => region.value === options.jsonData.defaultRegion),
        options: regions,
        defaultValue: options.jsonData.defaultRegion,
        allowCustomValue: true,
        onChange: onUpdateDatasourceJsonDataOptionSelect(props, "defaultRegion"),
        formatCreateLabel: (r) => `Use region: ${r}`,
        menuShouldPortal: true
      }
    )
  )), props.children));
};

export { NewConnectionConfig };
//# sourceMappingURL=NewConnectionConfig.js.map
