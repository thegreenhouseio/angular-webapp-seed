#!/bin/sh

echo "executing build.sh..."

echo "node version"
node --version

echo "yarn version"
yarn --version

echo "clear existing dependencies..."
rm -rf node_modules/ > /dev/null 2>&1

# echo "check NPM caches..."
# npm cache verify
#npm cache clean

echo "installing project dependencie"
yarn install

echo "running the build..."
export NODE_ENV=production
# yarn run test
yarn run build