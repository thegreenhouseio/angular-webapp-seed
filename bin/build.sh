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
npm install

echo "running the build..."
export NODE_ENV=production
# npm run test
npm run build