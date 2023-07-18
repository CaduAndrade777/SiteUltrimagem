<template>
  <div class="row" id="blog-list-news">
    <div class="col-md-6 col-12 bg-primary">
      <section>
        <div class="container-2 text-secondary">
          <h2>Informações sobre saúde</h2>
          <p style="font-size:1.2rem">
            No blog de saúde da Ultrimagem – Ubá você confere dicas e
            informações interessantes sobre as campanhas da clínica, novidades
            em equipamentos, exames e muito mais. Confira!
          </p>
        </div>
      </section>
    </div>

    <div class="col-md-6 col-12 bg-grey-2">
      <section>
        <div class="container-2 text-secondary">
          <h2 class="text-grey-8">Últimas Notícias</h2>

          <a
            class="card-new-slim blog-list-news-card q-mb-md cursor-pointer"
            v-for="(noticia, index) in noticias"
            :key="index"
            @click="open(noticia.link)"
          >
            <q-img
              :src="noticia.thumbnail"
              alt="Ultrimagem"
              class="q-mb-md blog-list-news-card-img"
            />
            <div class="card-body full-width">
              <div class="card-title mx-3" ellipsis>
                <h3 class="my-0 grey-text ellipsis-2-lines news-title">
                  {{ noticia.title }}
                </h3>
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
          const itens = data.items;

          if (itens.length > 0) {
            for (let index = 0; index < data.items.length; index++) {
              if (index <= 3) {
                this.noticias.push(data.items[index]);
                let desc = this.noticias[index].description.split("<p>");
                this.noticias[index].description = desc[1];
              }
            }
          }
        });
    },
    open(link) {
      window.open(link);
    }
  }
};
</script>

<style>
.container-2 {
  max-width: 620px;
  width: 100%;

  margin: auto;
  padding: 0px 15px;
}

.bg-blue-clean {
  background-color: #b8def0;
}

.blog-list-news-card {
  display: flex;

  border-bottom: 2px solid #ccc;
}

.blog-list-news-card:last-child {
  border-bottom: none;
}

#blog-list-news .blog-list-news-card-img {
  max-width: 212px;
  width: 100%;
  height: 100%;
}

#blog-list-news .news-title {
  line-height: 26px;
}

@media only screen and (max-width: 375px) {
  #blog-list-news .blog-list-news-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #blog-list-news .blog-list-news-card-img {
    max-width: 100%;
  }
}
</style>
