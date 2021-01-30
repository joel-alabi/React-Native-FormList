import   * as  firebase from 'firebase';

import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAaNkiNspfcXSfaMe7uT7aIECRDTOnXJnQ",
    authDomain: "formlist-264df.firebaseapp.com",
    projectId: "formlist-264df",
    storageBucket: "formlist-264df.appspot.com",
    messagingSenderId: "518140597317",
    appId: "1:518140597317:web:3a8c1390469ab7fcfc7f2c"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase;