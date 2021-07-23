<template>
  <div class="banner-buttons q-ml-md" id="bannerButtons">
    <q-btn
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center"
      style="width: 134px;"
    >
      <i style="font-size: 1.2em;" class="fab fa-whatsapp q-mr-sm"></i>
      <a @click="open()" class="flex">
        <!-- <img
          alte="Midias"
          class="q-mr-sm"
          :src="require(`../../../assets/img/components/banner/${item.icon}`)"
          style="max-width: 19px"
        /> -->
        <span style="font-size: 14px" class="text-secondary text-bold">
          Agendar
        </span>
      </a>
    </q-btn>

    <q-btn
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center"
      style="width: 134px;"
    >
      <a
        href="https://www.clickvita.com.br/code/ULTRI"
        target="_blank"
        class="flex"
      >
        <span style="font-size: 14px" class="text-secondary">
          Resultados
        </span>
      </a>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsBanner: [
        {
          name: "Agendar"
        },
        {
          name: "Resultado"
        }
      ]
    };
  },
  components: {},
  methods: {
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    }
  }
};
</script>
<style scoped>
.banner-buttons {
  display: none;
}
@media only screen and (max-width: 768px) {
  .banner-buttons {
    display: block;
  }
}
</style>
