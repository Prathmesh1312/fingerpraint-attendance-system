import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPSon3aciMI1AbTrv2HcJcuDrXrAUsJNw",
    authDomain: "student-attendance-syste-32acd.firebaseapp.com",
    projectId: "student-attendance-syste-32acd",
    storageBucket: "student-attendance-syste-32acd.appspot.com",
    messagingSenderId: "123444238254",
    appId: "1:123444238254:web:a624f14eaeb2593e90da3f",
    measurementId: "G-9V5383JRQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export  { db, app };