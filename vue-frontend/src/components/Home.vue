<script setup>
import { ref, onMounted} from "vue"
import { useAuthStore } from "../stores/auth"

import LeadIndex from './leads/LeadIndex.vue';
import LeadCreate from './leads/LeadCreate.vue';

const authStore = useAuthStore();

onMounted(async ()=>{
    await authStore.getUser();
})

</script>
<template>
   <div v-if="authStore.user" class = "mt-3 mt-3 col-11 mx-auto">
    <LeadIndex/>
   </div>
   <div v-else>
    <LeadCreate/>
   </div>
</template>

<style>
body{
    background-color: #41697b;
}
</style>