import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from 'firebase/auth';
import { 
  getFirestore,
   doc,
   getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
  
  } from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
  
  export const db = getFirestore();
  
  //add documents shop.data to db 
  export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
      const  docRef =  doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    });

    await batch.commit();
    console.log('done');
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
    
    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap;
  };

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };


  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
  };
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  
  export const signOutUser = async () => await signOut(auth);
  
  export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);