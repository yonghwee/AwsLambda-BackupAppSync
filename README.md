# Backup AppSync.

There are no simple and comprehensive way to backup AWS AppSync schema and resolver, especially the mapping templates, via the AWS Console. AppSync resolvers can be easily deleted when schema changes. I created this Lambda function that outputs it into CloudWatch as a form of backup.


### To use
- Create a new Lambda function with IAM permission to write to CloudWatch, and AppSync Admin permission (you can be more granula, but I kept it simple).
- Download this repo as a ZIP file and upload to the Lambda function.
- Make sure have sufficient timeout period, usually less than 10sec.
- Deploy then run under Test.
- Everything will be logged into CloudWatch.
- Missing the AppSync functions but that can be easily added.


