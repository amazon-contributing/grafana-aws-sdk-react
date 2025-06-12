import React, { useState, useMemo, useEffect } from 'react';
import { useStyles2, FieldSet, InlineField, Select, Input, ButtonGroup, ToolbarButton, Collapse } from '@grafana/ui';
import { onUpdateDatasourceJsonDataOptionSelect, onUpdateDatasourceJsonDataOption, onUpdateDatasourceResetOption, onUpdateDatasourceSecureJsonDataOption } from '@grafana/data';
import { config } from '@grafana/runtime';
import { standardRegions } from '../regions.js';
import { AwsAuthType } from '../types.js';
import { awsAuthProviderOptions } from '../providers.js';
import { css } from '../../node_modules/@emotion/css/dist/emotion-css.esm.js';
import { NewConnectionConfig } from './NewConnectionConfig.js';

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
const DEFAULT_LABEL_WIDTH = 28;
const DS_TYPES_THAT_SUPPORT_TEMP_CREDS = ["cloudwatch", "grafana-athena-datasource"];
const toOption = (value) => ({ value, label: value });
const isAwsAuthType = (value) => {
  return typeof value === "string" && awsAuthProviderOptions.some((opt) => opt.value === value);
};
const ConnectionConfig = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const [isARNInstructionsOpen, setIsARNInstructionsOpen] = useState(false);
  const [regions, setRegions] = useState((props.standardRegions || standardRegions).map(toOption));
  const { loadRegions, onOptionsChange, skipHeader = false, skipEndpoint = false } = props;
  const { labelWidth = DEFAULT_LABEL_WIDTH, options, inExperimentalAuthComponent } = props;
  let profile = options.jsonData.profile;
  if (profile === void 0) {
    profile = options.database;
  }
  const tempCredsFeatureEnabled = config.featureToggles.awsDatasourcesTempCredentials && DS_TYPES_THAT_SUPPORT_TEMP_CREDS.includes(options.type);
  const awsAssumeRoleEnabled = (_a = config.awsAssumeRoleEnabled) != null ? _a : true;
  const awsAllowedAuthProviders = useMemo(
    () => config.awsAllowedAuthProviders.filter((provider) => provider === AwsAuthType.GrafanaAssumeRole ? tempCredsFeatureEnabled : true).filter(isAwsAuthType),
    [tempCredsFeatureEnabled]
  );
  const currentProvider = awsAuthProviderOptions.find((p) => p.value === options.jsonData.authType);
  useEffect(() => {
    if (!currentProvider && awsAllowedAuthProviders.length) {
      onOptionsChange(__spreadProps(__spreadValues({}, options), {
        jsonData: __spreadProps(__spreadValues({}, options.jsonData), {
          authType: awsAllowedAuthProviders[0]
        })
      }));
    }
  }, [currentProvider, options, onOptionsChange, awsAllowedAuthProviders]);
  useEffect(() => {
    if (!loadRegions) {
      return;
    }
    loadRegions().then((regions2) => setRegions(regions2.map(toOption)));
  }, [loadRegions]);
  const inputWidth = inExperimentalAuthComponent ? "width-20" : "width-30";
  const styles = useStyles2(getStyles);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.newFormStylingEnabled ? /* @__PURE__ */ React.createElement(
    NewConnectionConfig,
    __spreadValues({
      currentProvider,
      awsAllowedAuthProviders,
      isARNInstructionsOpen,
      setIsARNInstructionsOpen,
      awsAssumeRoleEnabled,
      regions,
      assumeRoleInstructionsStyle: styles.assumeRoleInstructions
    }, props)
  ) : /* @__PURE__ */ React.createElement(FieldSet, { label: skipHeader ? "" : "Connection Details", "data-testid": "connection-config" }, /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: "Authentication Provider",
      labelWidth,
      tooltip: "Specify which AWS credentials chain to use."
    },
    /* @__PURE__ */ React.createElement(
      Select,
      {
        "aria-label": "Authentication Provider",
        className: inputWidth,
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
    InlineField,
    {
      label: "Credentials Profile Name",
      labelWidth,
      tooltip: "Credentials profile name, as specified in ~/.aws/credentials, leave blank for default."
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        "aria-label": "Credentials Profile Name",
        className: inputWidth,
        placeholder: "default",
        value: profile,
        onChange: onUpdateDatasourceJsonDataOption(props, "profile")
      }
    )
  ), options.jsonData.authType === "keys" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(InlineField, { label: "Access Key ID", labelWidth }, ((_b = props.options.secureJsonFields) == null ? void 0 : _b.accessKey) ? /* @__PURE__ */ React.createElement(ButtonGroup, { className: inputWidth }, /* @__PURE__ */ React.createElement(Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ React.createElement(
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
      "aria-label": "Access Key ID",
      className: inputWidth,
      value: (_d = (_c = options.secureJsonData) == null ? void 0 : _c.accessKey) != null ? _d : "",
      onChange: onUpdateDatasourceSecureJsonDataOption(props, "accessKey")
    }
  )), /* @__PURE__ */ React.createElement(InlineField, { label: "Secret Access Key", labelWidth }, ((_e = props.options.secureJsonFields) == null ? void 0 : _e.secretKey) ? /* @__PURE__ */ React.createElement(ButtonGroup, { className: inputWidth }, /* @__PURE__ */ React.createElement(Input, { disabled: true, placeholder: "Configured" }), /* @__PURE__ */ React.createElement(
    ToolbarButton,
    {
      icon: "edit",
      type: "button",
      tooltip: "Edit Secret Access Key",
      onClick: onUpdateDatasourceResetOption(props, "secretKey")
    }
  )) : /* @__PURE__ */ React.createElement(
    Input,
    {
      "aria-label": "Secret Access Key",
      className: inputWidth,
      value: (_g = (_f = options.secureJsonData) == null ? void 0 : _f.secretKey) != null ? _g : "",
      onChange: onUpdateDatasourceSecureJsonDataOption(props, "secretKey")
    }
  ))), options.jsonData.authType === AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement("div", { className: styles.assumeRoleInstructions }, /* @__PURE__ */ React.createElement(
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
    InlineField,
    {
      label: "Assume Role ARN",
      labelWidth,
      tooltip: "Optionally, specify the ARN of a role to assume. Specifying a role here will ensure that the selected authentication provider is used to assume the specified role rather than using the credentials directly. Leave blank if you don't need to assume a role at all"
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        "aria-label": "Assume Role ARN",
        className: inputWidth,
        placeholder: "arn:aws:iam:*",
        value: options.jsonData.assumeRoleArn || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "assumeRoleArn")
      }
    )
  ), options.jsonData.authType !== AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: "External ID",
      labelWidth,
      tooltip: "If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        "aria-label": "External ID",
        className: inputWidth,
        placeholder: "External ID",
        value: options.jsonData.externalId || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "externalId")
      }
    )
  )), !skipEndpoint && options.jsonData.authType !== AwsAuthType.GrafanaAssumeRole && /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: "Endpoint",
      labelWidth,
      tooltip: "Optionally, specify a custom endpoint for the service"
    },
    /* @__PURE__ */ React.createElement(
      Input,
      {
        "aria-label": "Endpoint",
        className: inputWidth,
        placeholder: (_h = props.defaultEndpoint) != null ? _h : "https://{service}.{region}.amazonaws.com",
        value: options.jsonData.endpoint || "",
        onChange: onUpdateDatasourceJsonDataOption(props, "endpoint")
      }
    )
  ), /* @__PURE__ */ React.createElement(
    InlineField,
    {
      label: "Default Region",
      labelWidth,
      tooltip: "Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region."
    },
    /* @__PURE__ */ React.createElement(
      Select,
      {
        "aria-label": "Default Region",
        className: inputWidth,
        value: regions.find((region) => region.value === options.jsonData.defaultRegion),
        options: regions,
        defaultValue: options.jsonData.defaultRegion,
        allowCustomValue: true,
        onChange: onUpdateDatasourceJsonDataOptionSelect(props, "defaultRegion"),
        formatCreateLabel: (r) => `Use region: ${r}`,
        menuShouldPortal: true
      }
    )
  ), props.children));
};
function getStyles() {
  return {
    assumeRoleInstructions: css({
      maxWidth: "715px"
    })
  };
}

export { ConnectionConfig, DEFAULT_LABEL_WIDTH };
//# sourceMappingURL=ConnectionConfig.js.map
