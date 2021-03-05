import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAgcs4wroONiGeRJ_L2yHVXd5yyXFfVaAk",
    authDomain: "parcial-proyecto.firebaseapp.com",
    projectId: "parcial-proyecto",
    storageBucket: "parcial-proyecto.appspot.com",
    messagingSenderId: "630300700875",
    appId: "1:630300700875:web:8ab660eaac6c9c3a9aab4e",
    measurementId: "G-YQ051WZVXF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
