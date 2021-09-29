var fs = require('fs');
var admin = require("firebase-admin");
const config = require('../config/settings');
var firestoreService = require('firestore-export-import');
let folderName = config.DIRECTORY;
let collection = process.argv;
var serviceAccount = require("./../config/firebase.json"); // Initiate Firebase App
const http = require("http");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

if (collection.length > 2) {
  (collection.forEach((e, i) => {
      if (i >= 2) {
        fs.readFile(`${folderName}firestore/${e}.json`,  'utf8' , (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          firestoreService.restore(JSON.parse(data)) //json file
          .then(function () {
            console.log(`Successfully restored ${e}`)
          })
          .catch(function (err) {
            console.log('Error'+err)
          });
        })
      }
  }))
}else{
  console.log('Ingresar la collection a restaurar')
}