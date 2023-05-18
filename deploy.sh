#!/bin/bash

../gitsync.sh "sync" "master"
npm run build
npx gh-pages -d build
../gitsync.sh "sync" "master"
git checkout gh-pages
touch .nojekyll
../gitsync.sh "added .nojekyll" "gh-pages"
git checkout master
