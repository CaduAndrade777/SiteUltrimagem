<template id="card-doctor">
  <q-card-section horizontal>
    <img
      style="max-height:400px; width:300px;"
      class="border-round"
      alt="Medico Ultrimagem"
      :src="require(`../../assets/img/components/equipeMedica/${item.img}`)"
    />

    <div
      class="absolute-bottom text-subtitle1 text-center bg-secondary text-primary q-pa-md ellipsis card-doctor-name"
    >
      {{ item.name }}
    </div>

    <q-card-section class="card-doctor-info">
      <h3 class="grey-text">{{ item.name }}</h3>
      <p class="grey-text">
        <i class="mdi mdi-stethoscope" aria-hidden="true"></i>
        {{ item.specialty }}
      </p>
    </q-card-section>
  </q-card-section>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.card-doctor-name {
  display: none;
}
@media only screen and (max-width: 1024px) {
  .card-doctor-info {
    display: none;
  }
  .card-doctor-name {
    display: block;
  }
}
</style>
