#!/usr/bin/env bash
set -e
gulp build:test
bundle exec rake test -f Rakefile
