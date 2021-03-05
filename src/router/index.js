import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../components/Registro.vue"
import Login from "../components/Login.vue"
import Profile from "../components/Perfil.vue"
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      auth:true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta:{
        auth:true
      }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta:{
      auth:true
    }
  },
  {
        path:"*",
        redirect: '/login'
  },
  {
  path: "/register",
  name: "Register ",
  component: Registro
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next)=>{
 const currentUser = firebase.auth().currentUser;
 const auth = to.matched.some(record => record.meta.auth);
 if (auth && !currentUser) {
   next('/login');
 } else if (auth  && currentUser) {
   next();
 } else {
   next();
 }
});

export default router;

