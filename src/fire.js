import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDnU4zQOBNsQLWgmNFFl6bAHQJng4nAn0w",
  authDomain: "zeb-pokemon-app-321.firebaseapp.com",
  databaseURL: "https://zeb-pokemon-app-321.firebaseio.com",
  projectId: "zeb-pokemon-app-321",
  storageBucket: "",
  messagingSenderId: "445484510387",
  appId: "1:445484510387:web:033f352fa9bf24d52ad4c6"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
