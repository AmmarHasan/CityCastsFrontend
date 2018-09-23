#/bin/bash

aws s3 cp ./dist/CityCasts s3://citycast.com --recursive --acl public-read
