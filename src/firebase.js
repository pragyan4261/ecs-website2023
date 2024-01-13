import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAXRi7UfDvFRv8eiHFEFKED0Z61wg088ZM",
  authDomain: "my-project-1-64eb2.firebaseapp.com",
  databaseURL: "https://my-project-1-64eb2-default-rtdb.firebaseio.com",
  projectId: "my-project-1-64eb2",
  storageBucket: "my-project-1-64eb2.appspot.com",
  messagingSenderId: "135539632178",
  appId: "1:135539632178:web:dc267326d919a2f733b42b",
  measurementId: "G-J7HMY3FWG0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
