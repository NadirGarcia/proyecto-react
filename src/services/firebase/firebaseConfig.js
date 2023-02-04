import { initializeApp,  } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQlyN31bgiQx6WWQwXF38gbRDh98i_DLE",
  authDomain: "backend-curso-react-4694f.firebaseapp.com",
  projectId: "backend-curso-react-4694f",
  storageBucket: "backend-curso-react-4694f.appspot.com",
  messagingSenderId: "236066846725",
  appId: "1:236066846725:web:2f6ae30bf3e8a630da846c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)