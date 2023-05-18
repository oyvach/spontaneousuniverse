#!/bin/bash
git pull origin "$2"
git add --all
git commit -m "$1"
git push origin "$2"

