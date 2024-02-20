import {db} from "./conectDB";
import { doc, setDoc, collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";


export async function getData(){
  const ref = collection(db, "pratos");
  const data = await getDocs(ref);
  return await data.docs.map(doc => ({...doc.data(), id: doc.id}));
}

export async function getDataById(pasta, id){
  const ref = doc(db, pasta, id);
  const docSnap = await getDoc(ref);
  return await docSnap.data();
}

export async function createData(pasta, data){
  const ref = collection(db, pasta);
  await setDoc(doc(ref), data)
}

export async function updateData(pasta, id, data){
  const ref = doc(db, pasta, id);
  await setDoc(ref, data);
}

 export async function deleteData(pasta, id){
  const ref = doc(db, pasta, id);
  await deleteDoc(ref);
  alert(`item ${id} deletado`)
  window.location.reload();
}

