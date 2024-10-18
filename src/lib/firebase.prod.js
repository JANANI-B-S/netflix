import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 import { seedDatabase } from '../seed';

 const config = {
  apiKey: "AIzaSyAqohN2pRCgqrWUvl5dM_gtaeZJGEVJfJM",
  authDomain: "heritage-fa9ba.firebaseapp.com",
  projectId: "heritage-fa9ba",
  storageBucket: "heritage-fa9ba.appspot.com",
  messagingSenderId: "800664333727",
  appId: "1:800664333727:web:75424dace0394a6dfee1aa",
  measurementId: "G-2K9YY1NJSK"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
