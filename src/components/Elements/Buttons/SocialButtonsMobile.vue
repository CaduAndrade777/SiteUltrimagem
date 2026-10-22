<template>
  <div class="banner-buttons q-ml-md flex justify-start flex-wrap">
    <q-btn
      v-for="item in buttonsSocial"
      :key="item.id"
      outline
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center"
      :aria-label="`Link para rede social ${item.name}`"
      :to="item.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        :class="['q-mr-sm', item.icon]"
        style="color:#299DD5; font-size: 1.2em; padding-top: 4px; margin-left: -5px; margin-right: 3px;"
      ></i>
      <span style="font-size: 14px" class="text-primary">
        {{ item.name }}
      </span>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsSocial: [
        {
          id: 1,
          name: "@ultrimagemuba",
          icon: "fab fa-instagram",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          id: 2,
          name: "ultrimagem ubá",
          icon: "fab fa-facebook",
          url: "https://www.facebook.com/UltrimagemUba/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.banner-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.banner-buttons q-btn {
  flex: 1 1 auto;
  max-width: 180px;
}

@media only screen and (max-width: 768px) {
  .banner-buttons q-btn {
    flex: 1 1 48%;
  }
}

@media only screen and (max-width: 425px) {
  .banner-buttons q-btn {
    flex: 1 1 100%;
  }
}
</style>
