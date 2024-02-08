import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./conectDB";

export function handleImageUpload(image, id){
    const ref = ref(storage, `/pratos/${image.name + id}`);
    uploadBytes(ref, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
        });
    });
}