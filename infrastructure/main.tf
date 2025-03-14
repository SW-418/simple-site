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

# Bucket Policy to allow CDN to retrieve objects from S3
resource "aws_s3_bucket_policy" "cloudfront_access_policy" {
  bucket = aws_s3_bucket.sam-wells-simple-site.id
  policy = data.aws_iam_policy_document.cloudfront_access_policy.json
}

# IAM Policy to allow CDN to retrieve objects from S3
data "aws_iam_policy_document" "cloudfront_access_policy" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.sam-wells-simple-site.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.s3_distribution.arn]
      variable = "AWS:SourceArn"
    }
  }
}

locals {
  s3_origin_id = "simpleSiteS3Origin"
}

resource "aws_cloudfront_origin_access_control" "cloudfront_s3_access" {
  name                              = "simple-site-oac"
  description                       = "Allows CDN to pull files from S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "url_rewriter" {
  name    = "url-rewriter"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = file("${path.module}/viewer-request.js")
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.sam-wells-simple-site.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront_s3_access.id
  }

  enabled             = true
  default_root_object = "index.html"
  is_ipv6_enabled     = true

  aliases = ["www.sam-wells.com", "sam-wells.com"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.url_rewriter.arn
    }
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.cdn_viewer_cert_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
