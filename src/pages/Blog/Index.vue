<template>
  <div>
    <Banner
      title="<strong> Blog  </strong>"
      subtitle="No blog de saúde da Ultrimagem – Ubá você confere dicas e informações sobre as campanhas clínica, novidades em equipamentos, exames e muito mais. Confira já!"
      page="blog"
    >
    </Banner>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-weight-regular">Últimas postagens</h2>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4 col-lg-4 col-sm-6 col-xs-12 q-mb-lg"
            v-for="(item, index) in posts"
            :key="item.id"
          >
            <Posts :post="item"></Posts>
          </div>
        </div>
        <div
          class="row"
          style="display: flex;
            justify-content: center;
            align-items: center;"
        >
          <!-- <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="current" :max="5"> </q-pagination>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import Posts from "../../components/Cards/CardPost.vue";

export default {
  data() {
    return {
      current: 1,
      // posts: [
      //   {
      //     link: "https://www.google.com/",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   },
      //   {
      //     link: "https://www.google.com/",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   },
      //   {
      //     link: "https://www.google.com/",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   },
      //   {
      //     link: "https://www.google.com/",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   },
      //   {
      //     link: "https://google.com",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   },
      //   {
      //     link: "https://google.com",
      //     name:
      //       "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
      //     image: "../../assets/img/components/blog/fakeImage.svg",
      //     sigla: "U",
      //     author: "Ultrimagem"
      //   }
      // ],
      posts: [],
      postsSearch: [],
      tags: [],
      selecionadaTag: "todos"
    };
  },
  components: {
    Banner,
    Posts
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
          this.posts = data.items;

          this.colocarTags();
        })
        .finally(() => {
          //this.$refs.bar.stop();
        });
    },
    colocarTags() {
      this.tags = [];
      this.posts.forEach(el => {
        el.categories.forEach(cat => {
          if (!this.tags.includes(cat)) {
            this.tags.push(cat);
          }
        });
      });
      this.embaralhar(this.tags);
    },

    filtrarTag(texto) {
      this.selecionadaTag = null;
      this.selecionadaTag = texto;

      this.postsSearch = [];
      this.posts.forEach(el => {
        el.categories.forEach(el2 => {
          if (el2 == texto) {
            this.postsSearch.push(el);
          }
        });
      });
    },
    resetFiter(item) {
      this.postsSearch = [];
      this.selecionadaTag = null;
      this.selecionadaTag = item;
      if (this.selecionadaTag == "todos") {
        this.postsSearch = [];
      }
    },

    embaralhar(array) {
      var indice_atual = array.length,
        valor_temporario,
        indice_aleatorio;

      while (0 !== indice_atual) {
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;

        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
      }
      return array;
    }
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
