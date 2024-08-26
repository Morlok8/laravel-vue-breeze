<script setup>
import { useAuthStore } from "../stores/auth"
import { ref, onMounted} from "vue"

const authStore = useAuthStore();

onMounted(async ()=>{
    await authStore.getUser();
})

</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link v-bind:to="{name:'Home'}" class="nav-link">Главная</router-link>
        </li>
      
        <template v-if="!authStore.user">
          <li class="nav-item">
            <router-link v-bind:to="{name:'Login'}" class="nav-link" >Логин</router-link>
          </li>
          <li class="nav-item">
            <router-link v-bind:to="{name:'Register'}" class="nav-link" >Регистрация</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link v-bind:to="{name:'LeadCreate'}" class="nav-link" >Создать лид</router-link>
          </li>
          <li class="nav-item">
            <router-link v-bind:to="{name:'ForgotPassword'}" class="nav-link" >Сменить пароль</router-link>
          </li>
          
          <button class = "btn btn-success px-5 w-40" v-on:click="authStore.handleLogout">Выйти из аккаунта</button>
        </template>
      </ul>

    </div>
  </nav>
</template>