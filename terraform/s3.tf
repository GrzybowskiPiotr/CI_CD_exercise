resource "aws_s3_bucket" "mc-rmcatalog-pg" {
  bucket              = "mc-rmcatalog-pg"
  bucket_prefix       = null
  force_destroy       = null
  object_lock_enabled = false
  tags = {
    Feature = "Website"
  }
  tags_all = {
    Feature = "Website"
  }
}
