import { storage } from "../../dbConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export async function POST(request, response){
   try {
    const req = await request.body
    const data = await new Response(req).text()
    return new Response(JSON.stringify({data, status: 200}))
   } catch (error) {
    return new Response(JSON.stringify({error, status: 500}))
   }
}