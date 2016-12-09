#!/bin/sh

echo "executing build.sh..."

echo "node version"
node --version

echo "npm version"
npm --version

echo "clear existing dependencies..."
rm -rf node_modules/ > /dev/null 2>&1

echo "clearing NPM caches..."
npm cache clean

echo "installing project dependencie"
echo "installing NPM packages"
npm install

echo "gulp version"
./node_modules/.bin/gulp --version

echo "typescript version"
./node_modules/.bin/tsc --version

echo "running the build..."
npm run ci