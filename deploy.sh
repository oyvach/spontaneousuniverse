#!/bin/bash

git checkout master
npm run build
npx gh-pages -d build
git checkout gh-pages
touch .nojekyll
git add .nojekyll
git commit -m "added nojekyll file"
git push origin gh-pages
git checkout master
