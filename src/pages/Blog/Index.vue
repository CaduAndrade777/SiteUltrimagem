<template>
  <div id="blog-ultrimagem">
    <Banner
      title="<strong> Blog </strong>"
      subtitle="No blog de saúde da Ultrimagem – Ubá você confere dicas e informações sobre campanhas da clínica, novidades em equipamentos, exames e muito mais. Confira já!"
      page="blog"
    />

    <div class="container">
      <section>
        <div class="row">
          <div class="col-12">
            <h2 class="text-weight-regular grey-text">
              Últimas postagens
            </h2>
          </div>
        </div>

        <!-- Carregamento -->
        <div
          v-if="carregando"
          class="row justify-center q-pa-lg"
        >
          <q-spinner color="primary" size="40px" />
          <div class="col-12 text-center q-mt-md">
            Carregando as últimas postagens...
          </div>
        </div>

        <!-- Erro -->
        <div
          v-else-if="erro"
          class="row q-pa-md"
        >
          <div class="col-12 text-center">
            <p>Não foi possível carregar as postagens agora.</p>

            <q-btn
              color="primary"
              label="Tentar novamente"
              @click="fetchPosts"
            />
          </div>
        </div>

        <!-- Posts -->
        <div
          v-else-if="displayedPosts.length"
          class="row"
        >
          <div
            v-for="post in displayedPosts"
            :key="post.guid || post.link"
            class="col-xs-12 col-sm-6 col-md-4 q-mb-lg"
          >
            <Posts :post="post" />
          </div>
        </div>

        <!-- Nenhum post -->
        <div
          v-else
          class="row q-pa-md"
        >
          <div class="col-12 text-center">
            Nenhuma postagem encontrada.
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import Posts from "../../components/Cards/CardPost.vue";

export default {
  name: "BlogUltrimagem",

  components: {
    Banner,
    Posts
  },

  data: function () {
    return {
      posts: [],
      tags: [],
      selectedTag: "todos",
      carregando: false,
      erro: false
    };
  },

  computed: {
    displayedPosts: function () {
      if (this.selectedTag === "todos") {
        return this.posts;
      }

      return this.posts.filter(function (post) {
        return (
          Array.isArray(post.categories) &&
          post.categories.indexOf(this.selectedTag) !== -1
        );
      }, this);
    }
  },

  mounted: function () {
    this.fetchPosts();
  },

  methods: {
    async fetchPosts() {
      this.carregando = true;
      this.erro = false;

      try {
        // Em desenvolvimento (quasar dev) o PHP não roda, então usa o
        // conversor público. No site publicado usa o PHP do servidor.
        var url = process.env.DEV
          ? "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent("https://medium.com/feed/@ultrimagemuba")
          : "/api/medium-posts.php";

        var response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erro HTTP " + response.status);
        }

        var data = await response.json();

        if (
          data.status !== "ok" ||
          !Array.isArray(data.items)
        ) {
          throw new Error("A API não retornou uma lista válida.");
        }

        this.posts = data.items.map(function (item, index) {
          return {
            guid: item.guid || item.link || String(index),
            title: item.title || "Notícia da Ultrimagem",
            link: item.link || "",
            pubDate: item.pubDate || "",
            thumbnail: item.thumbnail || "",
            description: item.description
              ? item.description
                  .replace(/<[^>]*>/g, " ")
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 220)
              : "",
            categories: Array.isArray(item.categories)
              ? item.categories
              : []
          };
        });

        this.extractTags();
      } catch (error) {
        console.error("Erro ao carregar posts do Medium:", error);
        this.posts = [];
        this.tags = [];
        this.erro = true;
      } finally {
        this.carregando = false;
      }
    },

    extractTags: function () {
      var allTags = new Set();

      this.posts.forEach(function (post) {
        if (Array.isArray(post.categories)) {
          post.categories.forEach(function (category) {
            allTags.add(category);
          });
        }
      });

      this.tags = Array.from(allTags);
    },

    filterByTag: function (tag) {
      this.selectedTag = tag;
    }
  }
};
</script>

<style scoped>
#blog-ultrimagem .text-color-default {
  color: #444;
}
</style>