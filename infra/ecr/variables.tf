variable "ecr_aws_region" {
  type    = string
  default = "us-east-2"
}

variable "ecr_force_delete" {
  type        = bool
  description = "Forces deletion of Docker images before resource is destroyed"
  default     = true
}


variable "repo_namespace" {
  type    = string
  default = "ashgw"
}

variable "image_name" {
  type    = string
  default = "www"
}

variable "image_mutability" {
  type    = string
  default = "MUTABLE"
}
