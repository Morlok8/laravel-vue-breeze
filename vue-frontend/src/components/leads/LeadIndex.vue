<script setup>
import { ref, onMounted, watch } from "vue"
import  useLeads  from "../../composables/leads"


const {leads, statuses, getLeads, getStatuses, destroyLead} = useLeads();

onMounted(()=> {getLeads();getStatuses();
});

function formatDate(value) {
    console.log(value);
      return new Date(value).toLocaleDateString();
    }

</script>
<template>
    <table class="table table-dark">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
        <th scope="col">Номер телефона</th>
        <th scope="col">Email</th>
        <th scope="col">Статус</th>
        <th scope="col">Дата создания</th>
        <th scope="col"> </th>
        <th scope="col"> </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(value, key) in leads">
            <td> {{ value.id }} </td>
            <td> {{ value.name }} </td>
            <td> {{ value.surname }} </td>
            <td> {{ value.phone }} </td>
            <td> {{ value.email }} </td>
            <td> 
                <template v-for="item in statuses" :value="item.id" :key="item.id" >
                    <span v-if="item.id == value.status">
                        {{ item.title }}
                    </span>
                </template>
            </td>
            <td> {{ formatDate(value.created_at) }} </td>
            <td> <router-link v-bind:to="{name:'LeadEdit', params: {id: value.id}}" class="nav-link" ><button type="button" class="btn btn-success">Изменить</button></router-link> </td>
            <td> <button type="button" class="btn btn-danger" v-on:click="destroyLead(value.id)">Удалить</button>
            </td>
        </tr>
    </tbody>
    </table>
</template>