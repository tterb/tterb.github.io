#!/bin/bash

# Enable error reporting to the console
set -e

# Install bundles if needed
bundle check || bundle install

# NPM install if needed
npm install

# Build the site
gulp

# Checkout `master` and remove everything
git clone https://github.com/tterb/tterb.github.io.git ../tterb.github.io.master --depth=1
cd ../tterb.github.io.master
git checkout master
rm -rf *

# Copy generated HTML site from source branch in original repository
cp -R ../tterb.github.io/_site/* .

# Make sure we have the updated .travis.yml file so tests won't run on master
cp ../tterb.github.io/.travis.yml .
git config user.email ${GH_EMAIL}
git config user.name "tterb"

# Commit and push generated content to `master` branch
git status
git add -A .
git status
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push origin master

# Purge Cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/${CF_ZONE}/purge_cache" \
     -H "X-Auth-Email: ${GH_EMAIL}" \
     -H "X-Auth-Key: ${CF_API}" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}'
