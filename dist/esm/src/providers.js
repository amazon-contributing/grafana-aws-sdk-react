import { AwsAuthType } from './types.js';

const awsAuthProviderOptions = [
  {
    label: "Workspace IAM Role",
    value: AwsAuthType.EC2IAMRole
  },
  {
    label: "Grafana Assume Role",
    value: AwsAuthType.GrafanaAssumeRole
  },
  {
    label: "AWS SDK Default",
    value: AwsAuthType.Default
  },
  {
    label: "Access & secret key",
    value: AwsAuthType.Keys
  },
  {
    label: "Credentials file",
    value: AwsAuthType.Credentials
  }
];

export { awsAuthProviderOptions };
//# sourceMappingURL=providers.js.map
