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
            <h2 class="text-weight-regular grey-text">Últimas postagens</h2>
          </div>
        </div>

        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-4 q-mb-lg"
            v-for="(post, index) in displayedPosts"
            :key="index"
          >
            <Posts :post="post" />
          </div>
        </div>

        <div class="row justify-center items-center">
          <!-- Paginação futura aqui -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import Posts from "../../components/Cards/CardPost.vue";

export default {
  components: {
    Banner,
    Posts,
  },
  data() {
    return {
      posts: [],
      tags: [],
      selectedTag: "todos",
    };
  },
  computed: {
    displayedPosts() {
      if (this.selectedTag === "todos") return this.posts;
      return this.posts.filter(post =>
        post.categories.includes(this.selectedTag)
      );
    },
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ultrimagemuba"
        );
        const data = await response.json();
        this.posts = data.items || [];
        this.extractTags();
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    },
    extractTags() {
      const allTags = new Set();
      this.posts.forEach(post =>
        post.categories.forEach(cat => allTags.add(cat))
      );
      this.tags = this.shuffleArray([...allTags]);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    filterByTag(tag) {
      this.selectedTag = tag;
    },
  },
};
</script>

<style scoped>
#blog-ultrimagem .text-color-default {
  color: #444;
}
</style>
