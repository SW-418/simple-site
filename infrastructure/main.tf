terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.88"
    }
  }

  # Use S3 to store current state - Locking overkill for now
  backend "s3" {
    bucket = "sw-418-tf-state"
    key    = "sam-wells-simple-site"
    region = "ca-central-1"
  }
}

provider "aws" {
  region = "ca-central-1"
}

module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "sam-wells-simple-site"
  acl    = "private"

  control_object_ownership = true
  object_ownership         = "ObjectWriter"

  versioning = {
    enabled = true
  }
}
