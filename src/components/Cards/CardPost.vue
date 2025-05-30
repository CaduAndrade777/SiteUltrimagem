<template>
  <q-card class="my-card q-mb-md">
    <q-img
      :src="post.thumbnail"
      :alt="`Imagem de capa da notícia: ${post.title}`"
      style="max-height: 200px; height: 100%; object-fit: cover"
      loading="lazy"
    />

    <div class="q-pa-md">
      <h2 class="title-card text-h6 ellipsis-2-lines">
        {{ post.title }}
      </h2>

      <div class="autor q-mt-sm row items-center">
        <q-avatar size="36px" color="blue" class="text-white q-mr-sm">
          {{ post.author.charAt(0) }}
        </q-avatar>
        <span class="text-body2">{{ post.author }}</span>
      </div>
    </div>

    <div class="q-px-md q-pb-md row items-center justify-between">
      <q-btn
        color="primary"
        class="btn-blog"
        label="Ler notícia"
        @click="open(post.link)"
        no-caps
        unelevated
      />
      <span class="card-blog-date text-caption">
        {{ formatDate(post.pubDate) }}
      </span>
    </div>
  </q-card>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";

export default {
  name: "CardBlogPost",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    open(link) {
      window.open(link, "_blank", "noopener");
    },
    formatDate(date) {
      return moment(date).locale("pt-br").format("LL");
    }
  }
};
</script>

<style scoped>
.my-card {
  margin: 15px;
  color: #444;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.title-card {
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-blog-date {
  color: #666;
}

@media (max-width: 425px) {
  .card-blog-date {
    display: block;
    text-align: left;
    margin-top: 12px;
  }
}
</style>