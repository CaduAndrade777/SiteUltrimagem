<template>
  <q-card class="my-card q-mb-md">
    <!-- <q-img :src="post.link" style="height: 200px;"></q-img> -->
    <q-img
      :src="post.thumbnail"
      alt="Ultrimagem"
      style="max-height: 200px; height:100%"
    />

    <div class="row">
      <div class="col-12 px-3 py-2">
        <h3 class="title-card  mb-2 ellipsis-2-lines">
          {{ post.title }}
        </h3>

        <div class="">
          <div class="autor q-mb-md">
            <q-avatar class="text-white q-mr-sm" size="36px" color="blue">
              U
            </q-avatar>
            {{ post.author }}
          </div>
        </div>
      </div>
    </div>

    <div class="px-3 mb-2">
      <q-btn color="primary" class="btn-blog q-mr-md" @click="open(post.link)">
        <span> Ler notícia </span>
      </q-btn>
      <span class="card-blog-date text-right">
        {{
          moment(post.pubDate)
            .locale("pt-br")
            .format("LL")
        }}
      </span>
    </div>
  </q-card>
</template>

<script>
import moment from "moment";
export default {
  props: ["post"],
  data() {
    return {
      moment: moment
    };
  },
  methods: {
    open(link) {
      window.open(link);
    }
  }
};
</script>
<style scoped>
.my-card {
  margin: 15px;
  color: #444444;
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
}
.title-card {
  line-height: 32px;
}

@media only screen and (max-width: 425px) {
  .card-blog-date {
    display: block;
    text-align: left !important;
    margin-bottom: 20px;
  }
}
</style>
