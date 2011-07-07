#!/bin/sh

#get the latest
git submodule update
#update version number
./version.js
#build...
dpkg-deb -b Files npm.deb
