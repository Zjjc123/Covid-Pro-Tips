"use strict";

var app = require("./server.js");
var exec = require('child_process').exec;

let auto_update_server = () => {
    exec('git pull origin master',
       (error, stdout, stderr) => {
          if (error !== null) {
             console.log('exec error: ' + error);
          }
       });
       setTimeout(auto_update_server, 60000);
 }
 auto_update_server()

var greenlock = require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",

        // contact for security and critical bug notices
        maintainerEmail: "zjjc123@hotmail.com",

        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app)

