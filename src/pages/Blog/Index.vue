<template>
  <div>
    <Banner
      title="<strong> Blog  </strong>"
      subtitle="Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel."
    >
    </Banner>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-12">
            <h2>Últimas postagens</h2>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
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
          <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="current" :max="5"> </q-pagination>
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
  data() {
    return {
      current: 1,
      posts: [
        {
          link: "https://www.google.com/",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        },
        {
          link: "https://www.google.com/",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        },
        {
          link: "https://www.google.com/",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        },
        {
          link: "https://www.google.com/",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        },
        {
          link: "https://google.com",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        },
        {
          link: "https://google.com",
          name:
            "Autocuidado em meio ao turbilhão de informaçõe precisa precisa  em meio (...)",
          image: "../../assets/img/components/blog/fakeImage.svg",
          sigla: "U",
          author: "Ultrimagem"
        }
      ]
    };
  },
  components: {
    Banner,
    Posts
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
