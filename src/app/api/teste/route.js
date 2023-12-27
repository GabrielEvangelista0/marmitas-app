import { db } from "../dbConfig";
import { collection, onSnapshot, getDocs, setDoc, doc, addDoc } from "firebase/firestore";

export async function GET(request, response, next) {
    const pratos = collection(db, "pratos")
    const snapshot = await getDocs(pratos)
    const data = (await snapshot).docs.map(doc => doc.data());
    return new Response(JSON.stringify(data))
}

export async function POST(request, response, next) {
    try {
        const pratos = collection(db, "pratos")
        const data = await request.body
        const jsondata = JSON.parse(data)
        await addDoc(pratos, jsondata)
        return new Response(data, { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
