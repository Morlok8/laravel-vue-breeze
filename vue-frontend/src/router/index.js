import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "../stores/auth"

import Home from "../components/Home.vue"

const routes = [
    { path: '/', name: "Home", component: Home},
    { path: '/login', name: "Login", component: () => import("../components/Login.vue"), meta: {
        allowAnonymous: true
      }},
    { path: '/register', name: "Register", component: () => import("../components/Register.vue")},
    { path: '/forgot-password', name: "ForgotPassword", component: () => import("../components/ForgotPassword.vue")},
    { path: '/password-reset/:token', name: "ResetPassword", component: () => import("../components/ResetPassword.vue")},
    //leads routes
    { 
        path: '/lead-create', 
        name: "LeadCreate", 
        component: () => import("../components/leads/LeadCreate.vue"),
        meta: {
            allowAnonymous: true
          }
    },
    { 
        path: '/lead-edit/:id', 
        name: "LeadEdit", 
        component: () => import("../components/leads/LeadEdit.vue"),
        props: true
    },
    { 
        path: '/lead-destroy/:id', 
        name: "LeadDestroy", 
        /*component: () => import("../components/leads/LeadEdit.vue"),
        props: true*/
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/*router.beforeEach((to, from, next) => {
    async ()=>{
        try{const authStore = useAuthStore();
        await authStore.getUser();
        if (!to.meta.allowAnonymous && !isLoggedIn()) {
            next({
              path: '/login',
              query: { redirect: to.fullPath }
            })
          }
          else {
            next()
          }}
          catch(error){
            next({
                path: '/login',
                query: { redirect: to.fullPath }
              })
          } 
    }
  })*/
  

export default router;