import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtNS3VdU6ZDe2iHmfD59UXi-qI4a6doR8",
    authDomain: "plant-db-66a26.firebaseapp.com",
    projectId: "plant-db-66a26",
    storageBucket: "plant-db-66a26.appspot.com",
    messagingSenderId: "546986862204",
    appId: "1:546986862204:web:aa7e2f67666af7b4a94bf9",
    measurementId: "G-WKG3ZBQLFD"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);