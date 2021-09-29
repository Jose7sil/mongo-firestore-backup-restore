'use strict';
const fs = require('fs');
const url = require('url');
//const zipFolder = require('zip-folder');
const exec = require('child_process').exec;
const config = require('../config/settings');
// Environment variables
const http = require("http");
//const mongoURI = 'mongodb://admin1:admin1@localhost:27017/mytienda';
const host = config.HOST + ':' + config.PORT;
const username = config.USER_NAME;
const pass = config.PASSWORD;
const dbName = config.DB_NAME;
let collection = process.argv;
//let fileName = (new Date()).toDateString().replace(/ /g, '') + '_' + (new Date()).getTime();
let folderName = config.DIRECTORY;
//let filePath = `${folderName}${dbName}.zip`;

(collection.length > 2) ?
    (collection.forEach((e, i) => {
        if (i >= 2) {
            exec(`mongodump -h ${host} -d ${dbName} --collection ${e} -u ${username} -p ${pass} -o ${folderName}`, (error, stderr, stdout) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
                console.log(`Backup collection ${e} success..`);
            })

        }
    })) :
    (exec(`mongodump -h ${host} -d ${dbName} -u ${username} -p ${pass} -o ${folderName}`, (error, stderr, stdout) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Backup ${dbName} success...`);
    }));