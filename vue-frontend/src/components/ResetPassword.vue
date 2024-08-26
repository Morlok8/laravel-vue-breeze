<script setup>
import {useAuthStore} from "../stores/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
    password: "",
    password_confirmation: "",
    email: route.query.email,
    token: route.params.token,
});
</script>

<template>
<div class="container">
    <div class="row d-flex justify-content-center mt-3">
        <div class="col-sm-6 col-sm-offset-3">
        <h1 >Измените пароль</h1>
        

            <p class="text-center">Используйте форму ниже для того, чтобы изменить ваш пароль. Ваш пароль не может совпадать с вашим именем пользователя</p>
            <form method="post" id="passwordForm" v-on:submit.prevent="authStore.handResetPassword(form)">
                <div v-if="authStore.status" class = "flex">
                    <span class = "alert alert-primary m-2 p-2">{{ authStore.status }}</span>
                </div>
                <input type="password" v-model="form.password" class="mt-3 input-lg form-control" name="password1" id="password1" placeholder="Новый пароль" autocomplete="off">
                <div v-if="authStore.errors.password" class = "flex">
                    <span class = "alert alert-danger m-2 p-2">{{ authStore.errors.password[0] }}</span>
                </div>
                <input type="password" v-model="form.password_confirmation" class="mt-3 input-lg form-control" name="password2" id="password2" placeholder="Повторите пароль" autocomplete="off">

                <input type="submit" class="mt-3 col-xs-12 btn btn-primary btn-load btn-lg" data-loading-text="Changing Password..." value="Изменить пароль">
            </form>
        </div>
    </div>

</div>
</template>