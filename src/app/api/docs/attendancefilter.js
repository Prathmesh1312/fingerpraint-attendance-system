import { db } from "@/config/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function attendancefilter(month, grade) {
  const temp = [];
  const temp1 = [];
  let tempDoc = [];
  const snap = await getDocs(
    query(collection(db, "students"), where("grade", "==", grade))
  );
  snap.forEach((id) => {
    temp.push(id.id);
    temp1.push(id.data());
  });
  let i;
  for (i = 0; i < temp.length; i++) {
    const res = await getDoc(
      doc(db, `students/${temp[i]}/attendance/${month}`)
    );
    tempDoc.push({ student: temp1[i], month: res.id, days: { ...res.data() } });
  }
  let Data = [];
  for (i = 0; i < tempDoc.length; i++) {
    let X = {
      stu_id: tempDoc[i].student.id,
      name: tempDoc[i].student.name,
      grade: tempDoc[i].student.grade,
      month: tempDoc[i].month,
      days: tempDoc[i].days,
    };
    Data.push(X);
  }
  console.log(Data)
  return Data 
}
