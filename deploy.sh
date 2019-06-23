#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'nhapeman.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:nate-h/nhapeman_v3.git master:gh-pages

cd -