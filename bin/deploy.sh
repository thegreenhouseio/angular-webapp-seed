#!/usr/bin/env bash

echo "clean webroot..."
for d in /var/www/html/*/ ; do
  sudo rm -rvf "$d"
  echo
done

echo "deploy to webroot..."
sudo cp -rvf ./build/* /var/www/html/