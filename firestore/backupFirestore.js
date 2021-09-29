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
            firestoreService.backup(e) // It's for Both collection Only
                .then(data => {
                    let dir = `${folderName}firestore`;    //name of the directory/folder
                    if (!fs.existsSync(dir)) fs.mkdirSync(dir);    //creating folder
                    fs.writeFile(`${folderName}firestore/${e}.json`, JSON.stringify(data), function (err) {
                        if (err) {
                            console.log("error:", err.message);
                        } else {
                            console.log(`Exported ${e} Successfully`);
                        }
                    });
                })
        }
    }))
}else{
    console.log('Ingresar la collection a respaldar')
}