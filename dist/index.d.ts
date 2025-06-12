import React, { FC, DependencyList } from 'react';
import { DataSourceJsonData, DataSourceSettings, DataSourcePluginOptionsEditorProps, SelectableValue, DataQuery, DataSourceApi, QueryEditorProps, ScopedVars } from '@grafana/data';
import { InputActionMeta, SelectCommonProps, CodeEditorSuggestionItem, CodeEditorMonacoOptions } from '@grafana/ui';
import { FormEvent } from 'react-dom/node_modules/@types/react';

declare enum AwsAuthType {
    Keys = "keys",
    Credentials = "credentials",
    Default = "default",
    EC2IAMRole = "ec2_iam_role",
    /**
     * @deprecated use default
     */
    ARN = "arn",
    GrafanaAssumeRole = "grafana_assume_role"
}
interface AwsAuthDataSourceJsonData extends DataSourceJsonData {
    authType?: AwsAuthType;
    assumeRoleArn?: string;
    externalId?: string;
    profile?: string;
    defaultRegion?: string;
    endpoint?: string;
}
interface AwsAuthDataSourceSecureJsonData {
    accessKey?: string;
    secretKey?: string;
    sessionToken?: string;
}
declare type AwsAuthDataSourceSettings = DataSourceSettings<AwsAuthDataSourceJsonData, AwsAuthDataSourceSecureJsonData>;

declare const DEFAULT_LABEL_WIDTH = 28;
interface ConnectionConfigProps<J extends AwsAuthDataSourceJsonData = AwsAuthDataSourceJsonData, S = AwsAuthDataSourceSecureJsonData> extends DataSourcePluginOptionsEditorProps<J, S> {
    standardRegions?: string[];
    loadRegions?: () => Promise<string[]>;
    defaultEndpoint?: string;
    skipHeader?: boolean;
    skipEndpoint?: boolean;
    children?: React.ReactNode;
    labelWidth?: number;
    inExperimentalAuthComponent?: boolean;
    externalId?: string;
    newFormStylingEnabled?: boolean;
}
declare const ConnectionConfig: FC<ConnectionConfigProps>;

declare function Divider(): JSX.Element;

interface SIGV4ConnectionConfigProps extends DataSourcePluginOptionsEditorProps<any, any> {
    inExperimentalAuthComponent?: boolean;
}
declare const SIGV4ConnectionConfig: React.FC<SIGV4ConnectionConfigProps>;

interface ConfigSelectProps extends DataSourcePluginOptionsEditorProps<AwsAuthDataSourceJsonData, AwsAuthDataSourceSecureJsonData> {
    value: string;
    fetch: () => Promise<Array<string | SelectableValue<string>>>;
    onChange: (e: SelectableValue<string> | null) => void;
    dependencies?: string[];
    id: string;
    label: string;
    'data-testid'?: string;
    hidden?: boolean;
    disabled?: boolean;
    allowCustomValue?: boolean;
    saveOptions: () => Promise<void>;
    autoFocus?: boolean;
    backspaceRemovesValue?: boolean;
    className?: string;
    invalid?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    inputId?: string;
    showAllSelectedWhenOpen?: boolean;
    maxMenuHeight?: number;
    minMenuHeight?: number;
    maxVisibleValues?: number;
    menuPlacement?: 'auto' | 'bottom' | 'top';
    menuPosition?: 'fixed' | 'absolute';
    noOptionsMessage?: string;
    onBlur?: () => void;
    onCreateOption?: (value: string) => void;
    onInputChange?: (value: string, actionMeta: InputActionMeta) => void;
    placeholder?: string;
    width?: number;
    isOptionDisabled?: () => boolean;
    labelWidth?: number;
    newFormStylingEnabled?: boolean;
}
declare function ConfigSelect(props: ConfigSelectProps): JSX.Element;

interface InlineInputProps extends DataSourcePluginOptionsEditorProps<{}, AwsAuthDataSourceSecureJsonData> {
    value: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    label?: string;
    tooltip?: string;
    placeholder?: string;
    'data-testid'?: string;
    hidden?: boolean;
    disabled?: boolean;
    labelWidth?: number;
}
declare function InlineInput(props: InlineInputProps): JSX.Element;

interface ResourceSelectorProps extends SelectCommonProps<string> {
    tooltip?: string;
    hidden?: boolean;
    newFormStylingEnabled?: boolean;
    value: string | null;
    dependencies?: DependencyList;
    id: string;
    label: string;
    'data-testid'?: string;
    default?: string;
    title?: string;
    labelWidth?: number;
    saveOptions?: () => Promise<void>;
    fetch?: () => Promise<Array<string | SelectableValue<string>>>;
    resources?: string[];
    onChange: (e: SelectableValue<string> | null) => void;
}
declare function ResourceSelector(props: ResourceSelectorProps): JSX.Element;

declare enum FillValueOptions {
    Previous = 0,
    Null = 1,
    Value = 2
}
declare type FillValueSelectProps<TQuery extends DataQuery> = {
    query: TQuery;
    onChange: (value: TQuery) => void;
    newFormStylingEnabled?: boolean;
    onRunQuery?: () => void;
};
declare function FillValueSelect<TQuery extends DataQuery & Record<string, any>>(props: FillValueSelectProps<TQuery>): JSX.Element;

interface SQLQuery extends DataQuery {
    rawSQL: string;
    format?: number;
    fillMode?: {
        mode: FillValueOptions;
        value?: number;
    };
}

declare type EditorProps = {
    width?: number | string;
    height?: number | string;
    readOnly?: boolean;
    showMiniMap?: boolean;
    showLineNumbers?: boolean;
    monacoOptions?: CodeEditorMonacoOptions;
};
declare type Props$1<TQuery extends DataQuery> = {
    query: TQuery;
    language: string;
    editorProps?: EditorProps;
    onChange: (value: TQuery) => void;
    onRunQuery: () => void;
    getSuggestions: (query: TQuery) => CodeEditorSuggestionItem[];
};
declare function QueryCodeEditor<TQuery extends DataQuery>(props: Props$1<TQuery>): JSX.Element;

interface Props<Datasource extends DataSourceApi<TQuery, JsonData>, TQuery extends DataQuery, JsonData extends DataSourceJsonData> extends QueryEditorProps<Datasource, TQuery, JsonData> {
    showAsyncQueryButtons?: boolean;
    extraHeaderElementLeft?: JSX.Element;
    extraHeaderElementRight?: JSX.Element;
    enableRunButton: boolean;
    cancel?: (target: TQuery) => void;
    onRunQuery: () => void;
}
declare function QueryEditorHeader<Datasource extends DataSourceApi<TQuery, JsonData>, TQuery extends DataQuery, JsonData extends DataSourceJsonData>({ query, showAsyncQueryButtons, extraHeaderElementLeft, extraHeaderElementRight, enableRunButton, onRunQuery, data, cancel, }: Props<Datasource, TQuery, JsonData>): JSX.Element;

declare type FormatSelectProps<TQuery extends DataQuery, FormatOptions> = {
    newFormStylingEnabled?: boolean;
    id?: string;
    query: TQuery;
    options: Array<SelectableValue<FormatOptions>>;
    onChange: (value: TQuery) => void;
    onRunQuery?: () => void;
};
declare function FormatSelect<TQuery extends DataQuery & Record<string, any>, FormatOptions>(props: FormatSelectProps<TQuery, FormatOptions>): JSX.Element;

/**
 * Do not execute queries that do not exist yet
 */
declare function filterSQLQuery(query: SQLQuery): boolean;
declare function applySQLTemplateVariables(query: SQLQuery, scopedVars: ScopedVars, getTemplateSrv: () => any): SQLQuery;
declare const appendTemplateVariablesAsSuggestions: (getTemplateSrv: () => any, sugs: CodeEditorSuggestionItem[]) => CodeEditorSuggestionItem[];

declare const standardRegions: string[];

declare const awsAuthProviderOptions: Array<SelectableValue<AwsAuthType>>;

export { AwsAuthDataSourceJsonData, AwsAuthDataSourceSecureJsonData, AwsAuthDataSourceSettings, AwsAuthType, ConfigSelect, ConnectionConfig, ConnectionConfigProps, DEFAULT_LABEL_WIDTH, Divider, FillValueOptions, FillValueSelect, FormatSelect, InlineInput, QueryCodeEditor, QueryEditorHeader, ResourceSelector, ResourceSelectorProps, SIGV4ConnectionConfig, SQLQuery, appendTemplateVariablesAsSuggestions, applySQLTemplateVariables, awsAuthProviderOptions, filterSQLQuery, standardRegions };
