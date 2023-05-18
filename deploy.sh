#!/bin/bash

./gitsync.sh "sync" "master"
npm run build
npx gh-pages -d build
./gitsync.sh "sync" "master"
git checkout gh-pages
touch .nojekyll
./gitsync "added .nojekyll" "gh-pages"
git checkout master
