import Vue from 'vue'
import axios from 'axios'
import { Notify } from "quasar";
import _ from 'lodash'


Vue.prototype.$axios = axios
const baseurl = process.env.DEV ?
    "https://www.admuba.ultrimagem.com.br/api/" : "https://www.admuba.ultrimagem.com.br/api/"
    // "http://127.0.0.1:8000/api/" : "http://127.0.0.1:8000/api/"
    
export default async({ Vue, store, router, ssrContext }) => {
    Vue.prototype.axios = axios;
    const axiosInstance = axios.create({
        baseURL: baseurl,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
      
    });
    store.$axios = axiosInstance;
    router.$axios = axiosInstance;
    Vue.prototype.$axios = axiosInstance;
    Vue.prototype.$base_url = baseurl;
}
      