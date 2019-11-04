#!/bin/bash

set -e

if [ "$TRAVIS_REPO_SLUG" = "ttc-buehl/www-beta" ]; then
    BRANCH="gh-pages"
else
    BRANCH="master"
fi

echo $GITHUB_AUTH_SECRET > ~/.git-credentials && chmod 0600 ~/.git-credentials
git config --global credential.helper store
git config --global user.email "ttcbot@users.noreply.github.com"
git config --global user.name "TTC Bot"
git config --global push.default simple

rm -rf deployment
git clone -b $BRANCH https://github.com/${TRAVIS_REPO_SLUG} deployment
rsync -av --delete --exclude ".git" public/ deployment
cd deployment
git add -A

git commit -m "rebuilding site on `date`, commit ${TRAVIS_COMMIT} and job ${TRAVIS_JOB_NUMBER}" || true
git push origin $BRANCH

cd ..
rm -rf deployment