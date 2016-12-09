#! /usr/bin/env bash

echo -e "*** Starting installation... ***"

echo -e "*** Updating packages ***"
apt-get -qq update

echo -e "*** Installing base packages ***"
apt-get -y install vim curl git libfontconfig > /dev/null 2>&1
apt-get update

echo -e "*** Installing Node and NPM ***"
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
apt-get install -y nodejs
apt-get install --yes build-essential

npm install

echo "node -v"
node -v
echo "npm -v"
npm -v

echo -e "*** Installing Project Dependencies ***"
cd /vagrant

rm -rf node_modules > /dev/null 2>&1
npm install