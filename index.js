import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDgJhWRdExjibvasAqZtSDI7A2htug3-1Q",
    authDomain: "personalportfolio-dac96.firebaseapp.com",
    projectId: "personalportfolio-dac96",
    storageBucket: "personalportfolio-dac96.firebasestorage.app",
    messagingSenderId: "950339141544",
    appId: "1:950339141544:web:93edf7614cba8bbbb7679d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    try{

        await addDoc(collection(db,"messages"),{

            name:name,
            email:email,
            message:message,
            date:new Date()

        });

        document.getElementById("status").innerHTML="✅ Message Sent Successfully!";

        form.reset();

    }catch(error){

        document.getElementById("status").innerHTML="❌ Failed to Send.";

        console.log(error);

    }

});
