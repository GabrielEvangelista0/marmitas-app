import { db } from "../dbConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

export async function GET(request, response, next) {
    const pratos = collection(db, "pratos")
    const snapshot = getDocs(pratos)
    const data = (await snapshot).docs.map(doc => doc.data());
    return new Response(JSON.stringify(data))
}

export async function POST(request, response, next) {
    
}
