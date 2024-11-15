
variable "s3_aws_region" {
  type = string
  default =  "us-east-2"
}

variable "bucket_names" {
  type    = list(string)
  default = [ 
    "www-ashgw-public", 
  ] 
}

variable "bucket_owner" {
  type = string
  default = "ashref"
}


