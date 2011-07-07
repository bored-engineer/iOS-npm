#!/usr/bin/env node

var fs = require("fs");

var version = "Unknown";
var package = JSON.parse(fs.readFileSync("Files/var/mobile/npm/package.json"));
version = package["version"];
var control = fs.readFileSync("Files/DEBIAN/control")+"";
control = control.split("\n");
control.forEach(function(val,index){
if(val.indexOf("Version:") >= 0){
control[index] = "Version: "+version
}
});
fs.writeFileSync("Files/DEBIAN/control", control.join("\n"));
