<template>
  <q-card class="my-card q-mb-md">
    <div class="q-pa-md">
      <h2 class="title-card text-h6 ellipsis-2-lines">
        {{ post.title || "Notícia da Ultrimagem" }}
      </h2>

      <div class="autor q-mt-sm row items-center">
        <q-avatar
          size="36px"
          color="blue"
          class="text-white q-mr-sm"
        >
          {{ authorInitial }}
        </q-avatar>

        <span class="text-body2">{{ authorName }}</span>
      </div>

      <p v-if="post.description" class="post-description q-mt-md">
        {{ post.description }}
      </p>
    </div>

    <div class="q-px-md q-pb-md row items-center justify-between">
      <q-btn
        color="primary"
        class="btn-blog"
        label="Ler notícia"
        :disable="!post.link"
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

  computed: {
    authorName: function () {
      return this.post.author || "Ultrimagem";
    },

    authorInitial: function () {
      return this.authorName.charAt(0).toUpperCase();
    }
  },

  methods: {
    open: function (link) {
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
      }
    },

    formatDate: function (date) {
      if (!date) {
        return "Data não disponível";
      }

      var parsedDate = moment(date);

      if (!parsedDate.isValid()) {
        return "Data não disponível";
      }

      return parsedDate.locale("pt-br").format("LL");
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
  height: calc(100% - 30px);
  border-radius: 8px;
}

.title-card {
  margin: 0 0 8px;
  line-height: 1.4;
}

.post-description {
  color: #555;
  line-height: 1.6;
  overflow-wrap: anywhere;
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
