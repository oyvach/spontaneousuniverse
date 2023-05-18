#!/bin/bash

npm run build
touch build/.nojekyll
npx gh-pages -d build
