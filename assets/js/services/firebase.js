import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
import { hashCode } from "./util.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkU1hBbqoVbpBdmtQkHhf4tVKlXNG9fsE",
  authDomain: "gotech-io.firebaseapp.com",
  projectId: "gotech-io",
  storageBucket: "gotech-io.appspot.com",
  messagingSenderId: "300477604058",
  appId: "1:300477604058:web:7e83dc9a1d7dbed0e7c5e3",
  databaseURL:
    "https://gotech-io-default-rtdb.europe-west1.firebasedatabase.app/",
  measurementId: "G-16SZPX0CE1",
};

class Store {
  app;
  database;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.database = getDatabase(this.app);
  }

  sendScore = (email, name, score) => {
    set(ref(this.database, "users/" + hashCode(email)), {
      email,
      score,
      name,
    });
  };
}

export default new Store();
