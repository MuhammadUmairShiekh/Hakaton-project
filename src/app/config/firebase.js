import { initializeApp } from
    "firebase/app";
import { getAuth }
    from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from
    "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyByBCVM68STSpHImH53PmfFCcwC8RXVaYs",
    authDomain: "nextjs-62680.firebaseapp.com",
    projectId: "nextjs-62680",
    storageBucket: "nextjs-62680.appspot.com",
    messagingSenderId: "294109006395",
    appId: "1:294109006395:web:0ed3bcb6a6fedbf45caa1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);
export const authentication = getAuth(app);

const Facebook = async () => {


    try {
        const face = signInWithPopup(auth, provider);
        // return face;
        // alert('Successfully Login')

    }

    catch (e) {
        alert(e.message)
    }
}

async function postAds({ text,  file }) {
    try {
        const url = await uploadImages(file)
        const data = { text, image: url }
        await addDoc(collection(db, "ads"), data);
        alert("Succesfully")
    } catch (e) {
        alert(e.message)
    }
}

async function uploadImages(file) {
    const storageRef = ref(storage, 'AdsImage/' + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef)
    return url
}
async function getData() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const Ads = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        Ads.push(data)
    });
    return Ads

}


export { Facebook, postAds ,getData }