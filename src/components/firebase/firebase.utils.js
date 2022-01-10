import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const config = {
  apiKey: "AIzaSyDSi1J_Mrnl4xfHY5hJb6IIA64Df4Lgfgw",
  authDomain: "test-97955.firebaseapp.com",
  databaseURL: "https://test-97955.firebaseio.com",
  projectId: "test-97955",
  storageBucket: "test-97955.appspot.com",
  messagingSenderId: "825533695182",
  appId: "1:825533695182:web:f55aec6bc126e6f027bc9f",
  measurementId: "G-M9LV0DEZ58",
};


// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app)


export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth)
    return;
  const userRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createDate = Date.now();
    try {
      await setDoc(doc(userRef, userAuth.uid), {
        displayName,
        email,
        createDate,
        ...aditionalData
      })
    }
    catch (error) {
      console.log('errot getting doc', error)
    }
  }  // end if
  return userRef;
}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider)