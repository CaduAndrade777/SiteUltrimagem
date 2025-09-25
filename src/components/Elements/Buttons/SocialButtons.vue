<template>
  <div class="banner-buttons q-ml-md">
    <q-btn
      v-for="item in buttonsSocial"
      :key="item.id || item.name"
      solid
      color="primary"
      class="q-mr-md q-mb-md button-secondary justify-center"
    >
      <a :href="item.url" target="_blank" rel="noopener noreferrer" class="flex items-center">
        <img
          alt="Midias"
          class="q-mr-sm"
          :src="getIcon(item.icon)"
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
          id: 1,
          name: "@ultrimagemuba",
          icon: "instagram.svg",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          id: 2,
          name: "ultrimagem ubá",
          icon: "facebook.svg",
          url: "https://www.facebook.com/UltrimagemUba/"
        }
      ]
    };
  },
  methods: {
    getIcon(name) {
      try {
        return require(`../../../assets/img/components/banner/${name}`);
      } catch (e) {
        console.warn(`Ícone não encontrado: ${name}`);
        return ""; 
      }
    }
  }
};
</script>

<style scoped></style>
