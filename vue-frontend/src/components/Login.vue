<script setup>
import { ref } from "vue"
import { useAuthStore } from "../stores/auth";
//import axios from 'axios'; 
//import { useRouter } from "vue-router"

//const router = useRouter();
const authStore = useAuthStore();

const form = ref({
  email: "",
  password: ""
});

</script>
<template>
    <div class="row d-flex justify-content-center mt-3">
        <div class="col-12 col-md-8 col-lg-6 col-xl-6">
          <form v-on:submit.prevent="authStore.handleLogin(form)">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">

                  <h2 class="fw-bold mb-2 text-uppercase">Логин</h2>
                  <p class="text-white-50 mb-5">Пожалуйста, введите почту и пароль!</p>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="email" v-model="form.email" id="typeEmailX" class="form-control form-control-lg">
                    <label class="form-label" for="typeEmailX" style="margin-left: 0px;">Email</label>
                    <div v-if="authStore.errors.email" class = "flex">
                      <span v-if="authStore.errors.email[0] == 'These credentials do not match our records.'" class = "alert alert-danger m-2 p-2">Введенные вами данные не соотвествуют нашим записям</span>
                    </div>
                  <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 40px;"></div><div class="form-notch-trailing"></div></div></div>

                 
                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="password" v-model="form.password" id="typePasswordX" class="form-control form-control-lg">
                    <label class="form-label" for="typePasswordX" style="margin-left: 0px;">Пароль</label>
                    <div v-if="authStore.errors.password" class = "flex">
                      <span v-if="authStore.errors.password[0] == 'These credentials do not match our records.'" class = "alert alert-danger m-2 p-2"> Введенные вами данные не соотвествуют нашим записям </span>
                  </div>
                  <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 64px;"></div><div class="form-notch-trailing"></div></div></div>

                  <p class="small mb-5 pb-lg-2"><router-link to="/forgot-password" class="text-white-50" >Забыли пароль?</router-link></p>

                  <button data-mdb-button-init="" data-mdb-ripple-init="" class="btn btn-outline-light btn-lg px-5" type="submit" data-mdb-button-initialized="true">Войти</button>

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                  </div>

                </div>

                <div>
                  <p class="mb-0">У вас нет акканута? <router-link v-bind:to="{name:'Register'}" class="text-white-50 fw-bold" >Зарегистрироваться</router-link> </p> 
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
</template>