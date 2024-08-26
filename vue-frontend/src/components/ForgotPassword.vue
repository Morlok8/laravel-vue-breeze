<script setup>
import {ref} from "vue";
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore();

const email = ref("");
</script>
<template>
    <div class="container">
	    <div class="row d-flex justify-content-center mt-3 bg-dark text-white">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                            <h3><i class="fa fa-lock fa-4x"></i></h3>
                            <h2 class="text-center">Забыли пароль?</h2>
                            
                            <p>Здесь вы сможете изменить свой пароль</p>
                            <div class="panel-body">
                
                                <form v-on:submit.prevent="authStore.handleForgotPassword(email)" id="register-form" role="form" autocomplete="off" class="form p-4 mt-12 rounded-lg" method="post">
                
                                <div class="form-group">
                                    <div v-if="authStore.status" class="m-2 p-2 alert alert-success">{{ authStore.status }}</div>
                                    <div class="input-group">
                                        
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                    <input v-model="email" id="email" name="email" placeholder="email" class="form-control"  type="email">
                                    </div>
                                    <div v-if="authStore.errors.email" class = "flex">
                                        <span class = "alert alert-danger m-2 p-2">{{ authStore.errors.email[0] }}</span>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <input name="recover-submit" class="btn btn-lg btn-primary btn-block mt-3" value="Сменить пароль" type="submit">
                                </div>
                                
                                <input type="hidden" class="hide" name="token" id="token" value=""> 
                                </form>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>