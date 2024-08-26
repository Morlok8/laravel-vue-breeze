import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters:{
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions:{
        async getToken(){
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser(){
            await this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },
        async handleLogin(data) { //login in the app
            this.authErrors = [];
            await this.getToken();
    
            try{
                await axios.post("/login", {
                    email: data.email,
                    password: data.password,
                  }/*,
                  {
                    headers: {
                      'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN'),
                    }
                  }*/);
                  this.router.push("/");
            } catch(error){
                if(error.response.status === 422){
                    this.authErrors = error.response.data.errors;
                }
            }
            
          },
          async handleRegister(data){//register in the app
            this.authErrors = [];
            await this.getToken();

            try{
                await axios.post("/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
                }/*,
                {
                headers: {
                    'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN'),
                }
                }*/);
                this.router.push("/");
            } catch(error){
                if(error.response.status === 422){
                    this.authErrors = error.response.data.errors;
                }
            }
          },
          async handleLogout(){
            this.authErrors = [];
            await this.getToken();

            await axios.post("/logout");
            this.authUser = null;
              //this.router.push("/");
          },
          async handleForgotPassword(email){
            this.authErrors = [];
            await this.getToken();

            try{
                const response = await axios.post("/forgot-password", {
                    email: email
                });
                this.authStatus = response.data.status;
            } catch(error){
                if(error.response.status === 422){
                    this.authErrors = error.response.data.errors;
                }
            }
          },
          async handResetPassword(resetData){
            this.authErrors = [];
            
            try{
                const response = await axios.post("/reset-password", resetData);
                this.authStatus = response.data.status;
                //this.router.push("/login");
            } catch(error){
                if(error.response.status === 422){
                    this.authErrors = error.response.data.errors;
                }
            }

          },
          getCookie(cname){
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    }
})