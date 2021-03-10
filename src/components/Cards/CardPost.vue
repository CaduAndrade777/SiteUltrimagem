<template>
  <q-intersection once transition="scale">
    <q-card class="my-card">
      <!-- <q-img :src="post.link" style="height: 200px;"></q-img> -->
      <q-img
        :src="post.thumbnail"
        alt="Ultrimagem"
        style="height: 200px;"
      />
      <div class="row">
        <div class="col-12">
          <p class="title-card px-3 py-2 mb-0 text-center">
            {{ post.title | truncate(31) }}
          </p>
        </div>
      </div>
      <div class="row px-3 py-3">
        <div class="col-2">
          <q-avatar class="text-white" size="36px"  color="blue">U
          <q-tooltip>
          Ultrimagem Ubá
          </q-tooltip>
          </q-avatar>
        </div>
        <div class="col">
          <p class="subtitle-card">
            <b class="text-weight-bold">{{ post.author.name }}</b>
            <br />
           
            {{moment(post.pubDate).locale('pt-br').format('LL')}}
          </p>
        </div>
      </div>
      <div class="row px-3 py-3 center">
        <div class="col-2">
          <q-btn
            outline
            color="primary"
            class="btn-blog"
            @click="open(post.link)"
          >
            <span> Ler notícia </span>
          </q-btn>
        </div>
        <!-- <div class="col">
            <p class="subtitle-card">
              <b class="text-weight-bold">{{ post.name }}</b>
              <br />
            </p>
          </div> -->
      </div>
    </q-card>
  </q-intersection>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      moment: moment,
    };
  },
  filters: {
    truncate(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "(...)";
      }
      return value;
    }
  },
  methods: {
    open(link) {
      window.open(link);
    }
  },
  componentes: {},
  props: ["post"]
};
</script>
<style scoped lang="scss">
.my-card {
  margin: 15px;
}
.col-xs-4.pt-4 {
  padding-bottom: 1.5rem !important;
}

.title-card {
  font-family: Poppins, Roboto, sans-serif;
  font-style: normal;
  font-size: 18px;
  color: #444444;
  line-height: 26px !important;
}

.subtitle-card {
  font-family: Poppins, Roboto, sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 150% !important;
  color: #444444;
}
</style>
