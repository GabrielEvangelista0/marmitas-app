import { db } from "../dbConfig";
import { collection, onSnapshot, getDocs, setDoc, doc, addDoc } from "firebase/firestore";

export async function GET(request, response, next) {
    const pratos = collection(db, "pratos")
    const snapshot = await getDocs(pratos)
    const data = snapshot.docs.map(doc => doc.data());
    return new Response(JSON.stringify(data))
}

export async function POST(request, response, next) {
    try {
        const req = await request.body;
        const data = await new Response(req).text()
        console.log(JSON.parse(data))
        await addDoc(collection(db, "pratos"), JSON.parse(data))
        //const res = {status: 200};
        return new Response(JSON.stringify(data, {status: 200}))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({error, status: 500}));
    }
}
