<script setup>
import {ref, onMounted} from "vue"
import  useLeads  from "../../composables/leads"

const {errors, storeLead} = useLeads();

const form = ref({
  name:"",
  surname:"",
  phone: "",
  email: "",
  status: 1,
  text: ""
});
///onMounted(()=> getLeads());
//v-on:submit.prevent="authStore.handleLogin(form)"
</script>

<template>
    <div class="row d-flex justify-content-center mt-3">
        <div class="col-12 col-md-8 col-lg-6 col-xl-6">
          <form v-on:submit.prevent ="storeLead(form)">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="mb-md-5 mt-md-4 pb-5">

                  <h2 class="fw-bold mb-2 text-uppercase">Добавить лид</h2>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="text" v-model="form.name" id="typeNameX" class="form-control form-control-lg">
                    <label class="form-label" for="typeNameX" style="margin-left: 0px;">Имя</label>
                    <div v-if="errors.name" class = "flex">
                      <span class = "alert alert-danger m-2 p-2">{{ errors.name[0] }}</span>
                    </div>
                  </div>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="text" v-model="form.surname" id="typeSurNameX" class="form-control form-control-lg">
                    <label class="form-label" for="typeSurNameX" style="margin-left: 0px;">Фамилия</label>
                    <div v-if="errors.name" class = "flex">
                      <span class = "alert alert-danger m-2 p-2">{{ errors.name[0] }}</span>
                    </div>
                  </div>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="text" v-model="form.phone" id="typePhoneX" class="form-control form-control-lg">
                    <label class="form-label" for="typePhoneX" style="margin-left: 0px;">Номер телефона</label>
                    <div v-if="errors.name" class = "flex">
                      <span class = "alert alert-danger m-2 p-2">{{ errors.name[0] }}</span>
                    </div>
                  </div>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <input type="email" v-model="form.email" id="typeEmailX" class="form-control form-control-lg">
                    <label class="form-label" for="typeEmailX" style="margin-left: 0px;">Email</label>
                    <div v-if="errors.email" class = "flex">
                      <span class = "alert alert-danger m-2 p-2">{{ errors.email[0] }}</span>
                    </div>
                  </div>

                  <div data-mdb-input-init="" class="form-outline form-white mb-4" data-mdb-input-initialized="true">
                    <textarea  type="text" v-model="form.text" id="typeTextX" class="form-control form-control-lg" name = "text"></textarea>
                    <label class="form-label" for="typeTextX" style="margin-left: 0px;">Текст обращения</label>
                    <div v-if="errors.name" class = "flex">
                      <span class = "alert alert-danger m-2 p-2">{{ errors.name[0] }}</span>
                    </div>
                  </div>

                  <button data-mdb-button-init="" data-mdb-ripple-init="" class="btn btn-success px-5 w-40" type="submit" data-mdb-button-initialized="true">Отправить</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>