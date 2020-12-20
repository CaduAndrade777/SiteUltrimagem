<template>
  <section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="title"></h1>
          <h2 class="display-2" v-html="subtitle"></h2>

          <div class="banner-buttons">
            <q-btn
              outline
              color="secondary"
              class="q-mr-md q-mb-md button-secondary justify-center"
              v-for="(item, index) in buttonsSocial"
              :key="item.id"
            >
              <a :href="item.url" target="_blank" class="flex">
                <img
                  class="q-mr-sm"
                  :src="
                    require(`../../assets/img/components/banner/${item.icon}`)
                  "
                  style="max-width: 19px"
                />
                <span style="font-size: 14px" class="text-secondary">
                  {{ item.name }}
                </span>
              </a>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "subtitle"],

  data() {
    return {
      title: "",
      subtitle: "",
      buttonsSocial: [
        {
          name: "@ultrimagemuba",
          icon: "instagram.svg",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          name: "ultrimagem ubá",
          icon: "facebook.svg",
          url: "https://www.facebook.com/UltrimagemUba/"
        }
      ]
    };
  },
  components: {}
};
</script>
<style scoped lang="scss">
#banner {
  background-image: url("../../assets/img/components/banner/bg-img-default.svg");
  background-color: $primary;
  background-repeat: no-repeat, repeat;

  color: $secondary;
  padding: 4em 0 4.5em;
}


</style>
