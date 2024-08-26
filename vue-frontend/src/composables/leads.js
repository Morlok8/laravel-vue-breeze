import {ref} from "vue";
import axios from "axios";
import { useRouter } from "vue-router"

export default function useLeads(){
    const leads = ref([]);
    const lead = ref([]);
    const statuses = ref([]);
    const errors = ref({});
    const statusVisible = ref({});
    const router = useRouter();

    const getLeads = async() => {
        const response = await axios.get("/api/v1/leads");
        leads.value = response.data.data;
    }

    const getLead = async(id) => {
        const response = await axios.get("/api/v1/leads/" + id);
        lead.value = response.data.data;
    }

    const storeLead = async(data) =>{
        try{
            const response = await axios.post("/api/v1/leads/", data);
            router.push("/"); 
        }catch(error){
            if(error.response.status === 422)
                errors.value = error.response.data.errors;
        }
    }

    const updateLead = async(id) =>{
        try{
            const update = await axios.put("/api/v1/leads/" + id, lead.value);
            statusVisible.value = update.data;
            router.push("/");
        }catch(error){
            if(error.response.status === 422)
                errors.value = error.response.data.errors;
        }
    }

    const destroyLead = async(id) =>{
        if(window.confirm("Вы уверены, что хотите удалить запись?")){
            try{
                await axios.delete("/api/v1/leads/" + id);
                await getLeads();
            }catch(error){
                if(error.response.status === 422)
                    errors.value = error.response.data.errors;
            }
        }
    }

    const getStatuses = async() =>{
        const response = await axios.get("/api/v1/statuses/");
        statuses.value = response.data.data;
    }

    return {
        lead,
        leads,
        getLeads,
        getLead,
        storeLead,
        updateLead,
        destroyLead,
        getStatuses,
        errors,
        statuses,
    };
}