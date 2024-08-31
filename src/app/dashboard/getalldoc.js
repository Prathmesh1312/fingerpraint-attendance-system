import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});

export default async function getDocuments(collection) {
    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
}