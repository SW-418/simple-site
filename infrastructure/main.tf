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

resource "aws_s3_bucket" "sam-wells-simple-site" {
  bucket        = "sam-wells-simple-site"
  force_destroy = true
}
