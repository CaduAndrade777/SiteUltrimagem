<template>
  <div class="row">
    <div class="col-md-6 bg-primary">
      <section>
        <div class="container-2 text-secondary">
          <h2>{{ infos }}</h2>
          <p style="font-size:1.2rem">{{ infosSub }}</p>
        </div>
      </section>
    </div>

    <div class="col-md-6 bg-blue-clean">
      <section>
        <div class="container-2 text-secondary">
          <h2 class="grey-text">Últimas Notícias</h2>

          <a
            class="card-new-slim q-mb-md"
            v-for="(noticia, index) in noticias"
            :key="index"
            @click="open(noticia.link)"
            style="cursor:pointer"
          >
            <!-- <img alt="Ilustra" class="card-image" src="" /> -->
            <q-img
              :src="noticia.thumbnail"
              alt="Ultrimagem"
              style="max-width: 130px; max-height:130px"
              />
              <!-- <q-tooltip>
                {{noticia.title}}
              </q-tooltip>-->

            <div class="card-body full-width" >
              <div class="card-title mx-3" ellipsis>
                <h3 class="my-0 grey-text"> {{ noticia.title }}</h3>
              </div>

              <p class="card-text ellipsis-2-lines m-3 grey-text" ellipsis>
                {{ noticia.description }}
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: "Informações sobre saúde",
      infosSub:
        "No blog de saúde da Ultrimagem – Ubá você confere dicas e informações interessantes sobre as campanhas da clínica, novidades em equipamentos, exames e muito mais. Confira!",
      // noticias: [
      //   {
      //     title: "Aumenta o número de contaminados por covid",
      //     img: "",
      //     description:
      //       "Prefeitura de Ubá çança nota pedindo a diminuição de frequência a bares. você confere dicas e informações interessantes sobre as campanhas da clínica, novidades em equipamentos"
      //   },
      //   {
      //     title: "Aumenta o número de contaminados por covid",
      //     img: "",
      //     description:
      //       "Prefeitura de Ubá çança nota pedindo a diminuição de frequência a bares. você confere dicas e informações interessantes sobre as campanhas da clínica, novidades em equipamentos"
      //   }
      // ],
      noticias: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ultrimagemuba"
      )
        .then(res => res.json())
        .then(data => {

          
          for (let index = 0; index < data.items.length; index++) {
            if (index <= 3) {
                this.noticias.push(data.items[index])
                let desc = this.noticias[index].description.split('<p>');
                this.noticias[index].description = desc[1]; 
            }
          }
        })
        .finally(() => {
          //this.$refs.bar.stop();
        });

    },
    open(link) {
      window.open(link);
    }
  },
};
</script>

<style scoped lang="scss">
.container-2 {
  max-width: 620px;
  width: 100%;

  margin: auto;
  padding: 0px 15px;
}

.bg-blue-clean {
  background-color: #b8def0;
}

.card-new-slim {
  display: flex;

  border-bottom: 2px solid #ccc;
}

.card-new-slim:last-child {
  border-bottom: none;
}
</style>
