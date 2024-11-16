provider "aws" {
  region = "us-east-2"  
  }

resource "aws_iam_user" "ashgw_0" {
  name = "ashgw-0"
}

resource "aws_iam_policy" "s3_access" {
  name        = "S3AccessPolicy"
  description = "Policy granting access to private S3 buckets"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["s3:ListBucket", "s3:GetObject"]
        Resource = [
          "arn:aws:s3:::your-private-bucket", // TODO: replace with one source of truth 
          "arn:aws:s3:::your-private-bucket/*"  // TODO: replace with one source of truth 
        ]
      }
    ]
  })
}

resource "aws_iam_policy" "app_runner_access" {
  name        = "AppRunnerAccessPolicy"
  description = "Policy granting access to App Runner"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["apprunner:DescribeService", "apprunner:ListServices", "apprunner:CreateService", "apprunner:DeleteService"]
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "ecr_access" {
  name        = "ECRAccessPolicy"
  description = "Policy granting access to ECR repositories"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["ecr:BatchGetImage", "ecr:BatchCheckLayerAvailability", "ecr:GetAuthorizationToken", "ecr:ListImages"]
        Resource = "arn:aws:ecr:us-east-1:your-account-id:repository/your-repository"  # Replace wth the actual ECR repo ARN from a single source of truth vars
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "ashgw_0_s3" {
  user       = aws_iam_user.ashgw_0.name
  policy_arn = aws_iam_policy.s3_access.arn
}

resource "aws_iam_user_policy_attachment" "ashgw_0_app_runner" {
  user       = aws_iam_user.ashgw_0.name
  policy_arn = aws_iam_policy.app_runner_access.arn
}

resource "aws_iam_user_policy_attachment" "ashgw_0_ecr" {
  user       = aws_iam_user.ashgw_0.name
  policy_arn = aws_iam_policy.ecr_access.arn
}
