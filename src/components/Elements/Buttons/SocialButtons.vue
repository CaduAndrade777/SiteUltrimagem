<template>
  <div class="banner-buttons q-ml-md">
    <q-btn
      solid
      color="primary"
      class="q-mr-md q-mb-md button-secondary justify-center"
      v-for="(item, index) in buttonsSocial"
      :key="item.id"
    >
      <a :href="item.url" target="_blank" class="flex">
        <img
          alte="Midias"
          class="q-mr-sm"
          :src="require(`../../../assets/img/components/banner/${item.icon}`)"
          style="max-width: 19px"
        />

        <span style="font-size: 14px" class="text-secondary">
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
<style scoped></style>
