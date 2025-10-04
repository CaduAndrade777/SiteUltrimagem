import Vue from 'vue'
import axios from 'axios'
import { Notify } from "quasar";
import _ from 'lodash'


Vue.prototype.$axios = axios
const baseurl = process.env.DEV ?
     "https://api-ultrimagem.copparpg.xyz/api" : "https://api-ultrimagem.copparpg.xyz/api"
   //"https://api-ultrimagem.copparpg.xyz/" : "https://api-ultrimagem.copparpg.xyz/"
 
    
export default async({ Vue, store, router, ssrContext }) => {
    Vue.prototype.axios = axios;
    const axiosInstance = axios.create({
        baseURL: baseurl,
        headers: {
        },
      
    });
    store.$axios = axiosInstance;
    router.$axios = axiosInstance;
    Vue.prototype.$axios = axiosInstance;
    Vue.prototype.$base_url = baseurl;
}
      