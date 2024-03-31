import { db } from "./conectDB";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

// Busca todos os documentos na coleção especificada por `pasta`
export async function getData() {
  const ref = collection(db, 'pratos');
  const data = await getDocs(ref);
  // Converte os documentos em objetos JavaScript e adiciona o ID de cada documento
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

// Busca um documento específico na coleção especificada por `pasta` com o ID fornecido por `id`
export async function getDataById(pasta, id) {
  const ref = doc(db, pasta, id);
  const docSnap = await getDoc(ref);
  // Retorna os dados do documento como um objeto JavaScript
  return docSnap.data();
}

// Cria um novo documento na coleção especificada por `pasta` com os dados fornecidos por `data`
export async function createData(pasta, data) {
  const ref = collection(db, pasta);
  await setDoc(doc(ref), data);
}

// Atualiza um documento existente na coleção especificada por `pasta` com o ID fornecido por `id` com os dados fornecidos por `data`
export async function updateData(pasta, id, data) {
  const ref = doc(db, pasta, id);
  await setDoc(ref, data);
}

// Exclui um documento existente na coleção especificada por `pasta` com o ID fornecido por `id`
export async function deleteData(pasta, id) {
  const ref = doc(db, pasta, id);
  await deleteDoc(ref);
  // Exibe um alerta informando que o item foi excluído
  alert(`item ${id} deletado`);
  // Recarrega a página da web
  window.location.reload();
}
