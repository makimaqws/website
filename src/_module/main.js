import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update, DataSnapshot } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgwdoAaoFTwdkt7JlLG1pzEyPyK4dmiuE",
  authDomain: "website-db0.firebaseapp.com",
  databaseURL: "https://website-db0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "website-db0",
  storageBucket: "website-db0.appspot.com",
  messagingSenderId: "20765192128",
  appId: "1:20765192128:web:f2e9fdb424e7966dbd2225"
};

const app = initializeApp(firebaseConfig);
window.db = getDatabase(app);

set(ref(db, "products"), {
  salt: {
    id: 0,
    cost: 10, 
  },
  bread: {
    id: 1,
    cost: 23, 
  },
});
