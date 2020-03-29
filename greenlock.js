"use strict";

var app = require("./server.js");
var exec = require('child_process').exec;

let auto_update_server = () => {
   exec('git status',
      (error, stdout, stderr) => {
         if (stdout.includes('Your branch is behind')) {
            console.log('branch is behind')
            process.exit(0)
         }
         else {
            //console.log('branch is up to date')
            setTimeout(auto_update_server, 10000);
         }
         if (error !== null) {
            console.log('exec error: ' + error);
         }
      });
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

