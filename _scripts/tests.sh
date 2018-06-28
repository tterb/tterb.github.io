#!/usr/bin/env bash
set -e
npm install -g gulp
gulp test
bundle exec rake test -f Rakefile
