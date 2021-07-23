<template>
  <div class="banner-buttons q-ml-md">
    <q-btn
      outline
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center"
      v-for="(item, index) in buttonsSocial"
      :key="item.id"
    >
      <a :href="item.url" target="_blank" class="flex">
        <!-- <img
          alte="Midias"
          class="q-mr-sm"
          :src="require(`../../../assets/img/components/banner/${item.icon}`)"
          style="max-width: 19px"
        /> -->
        <i
          style="color:#299DD5; font-size: 1.2em; padding-top: 4px; margin-left: -5px;
          margin-right: 3px;"
          class="q-mr-sm"
          :class="item.icon"
        ></i>
        <span style="font-size: 14px" class="text-primary">
          {{ item.name }}
        </span>
      </a>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsSocial: [
        {
          name: "@ultrimagemuba",
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          name: "ultrimagem ubá",
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/UltrimagemUba/"
        }
      ]
    };
  },
  components: {}
};
</script>
<style scoped>
.banner-buttons {
  margin-top: -20px;
}
</style>
