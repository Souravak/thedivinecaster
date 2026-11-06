
const firebaseConfig = require('./FirebaseConfig/FirebaseConfig');
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://thedivinecaster-877cc-default-rtdb.firebaseio.com"
});


const firestore = admin.firestore();
module.exports = firestore;
