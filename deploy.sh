#!/bin/bash

set -e

echo $GITHUB_AUTH_SECRET > ~/.git-credentials && chmod 0600 ~/.git-credentials
git config --global credential.helper store
git config --global user.email "ttcbot@users.noreply.github.com"
git config --global user.name "TTC Bot"
git config --global push.default simple

rm -rf deployment
git clone -b master https://github.com/ttc-buehl/ttc-buehl.github.io deployment
rsync -av --delete --exclude ".git" public/ deployment
cd deployment
git add -A

git commit -m "rebuilding site on `date`, commit ${TRAVIS_COMMIT} and job ${TRAVIS_JOB_NUMBER}" || true
git push origin master

cd ..
rm -rf deployment