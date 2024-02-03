import db from "./conectDB";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";


export async function getData(){
  const ref = collection(db, "pratos");
  const data = await getDocs(ref);
  return await data.docs.map(doc => ({...doc.data(), id: doc.id}));
}

export async function getDataById(collection, id){
  const ref = doc(db, collection, id);
  const docSnap = await getDoc(ref);
  return await docSnap.data();
}

export async function createData(data){
  const ref = collection(db, "pratos");
  await setDoc(doc(ref), data)
}