// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgYf2m7RVhtkVG7sRBZVz4fCWAvS1EF3Q",
  authDomain: "signhtml-66193.firebaseapp.com",
  databaseURL: "https://signhtml-66193-default-rtdb.firebaseio.com",
  projectId: "signhtml-66193",
  storageBucket: "signhtml-66193.appspot.com",
  messagingSenderId: "860283477033",
  appId: "1:860283477033:web:bc882ba639e87b784d1038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var messageref=firebase.database().ref('message');

document.getElementById('form').addEventListener('submit',submitform);
function submitform(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    saveMessage(name);
    saveMessage(email);

    document.getElementById('form').reset();
    const save=document.getElementById('save');
    save.addEventListener('click',saveform);
    function saveform(e){
        e.preventDefault();
        saveMessage(name);
        saveMessage(email);

        document.getElementById('form').reset();
    }
    
}
setTimeout(function())
{
    document.querySelector('alert').style.display='none';
}