import * as cdk from '@aws-cdk/core';
import ec2 = require('@aws-cdk/aws-ec2');

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, 'CDK Hub VPC', {
      cidr: "10.0.0.0/16",
      maxAzs: 2,
      subnetConfiguration: [{
        cidrMask: 26,
        name: 'isolatedSubnet',
        subnetType: ec2.SubnetType.ISOLATED,
      },
      {
        cidrMask: 26,
        name: 'privateSubnet',
        subnetType: ec2.SubnetType.PRIVATE
      },
      {
        cidrMask: 26,
        name: 'publicSubnet',
        subnetType: ec2.SubnetType.PUBLIC,
      }],
    natGateways: 1
   });
  }
}
