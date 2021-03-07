<template>
  <q-card-section horizontal>
    <img
      style="width:300px; heigth:400px;"
      class="border-round"
      alt="Medico Ultrimagem"
      :src="require(`../../assets/img/components/equipeMedica/${item.img}`)"
    />
    <q-card-section>
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
<style scoped></style>
