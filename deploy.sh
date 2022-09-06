#!/bin/bash

URL="navibase.io"
FILE="heynavi_deploy.tar"

tar -czf $FILE build
scp $FILE root@"$URL":/var/www/
ssh root@"$URL" "cd /var/www; rm -rf ${URL}.old; mv ${URL} ${URL}.old; tar -xzf ${FILE} && mv build ${URL} && rm ${FILE}"

