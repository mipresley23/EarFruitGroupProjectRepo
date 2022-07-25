from flask import Blueprint
import boto3  # pipenv install boto3


aws = Blueprint('aws', __name__)

@aws.route('/')
def awsHome():
    # Let's use Amazon S3

    s3 = boto3.resource("s3")
    buckets = []
    # Print out bucket names

    for bucket in s3.buckets.all():
        print(bucket.name)
        buckets.append(bucket.name)

    return buckets
