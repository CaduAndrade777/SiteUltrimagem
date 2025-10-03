import Vue from 'vue'
import axios from 'axios'
import { Notify } from "quasar";
import _ from 'lodash'


Vue.prototype.$axios = axios
const baseurl = process.env.DEV ?
     "http://intranet.ultrimagemuba.com.br:8083/api" : "https://intranet.ultrimagemuba.com.br:8083/api"
   //"http://intranet.ultrimagemuba.com.br:8083/api" : "https://intranet.ultrimagemuba.com.br:8083/api"
    
    
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
      