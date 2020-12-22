<template>
  <q-card class="my-card full-width">
    <q-card-section horizontal>
      <img
        :src="require(`../../assets/img/components/equipeMedica/${item.img}`)"
      />
      <q-card-section>
        <h3>{{ item.name }}</h3>
        <p>
          <i class="mdi mdi-stethoscope" aria-hidden="true"></i>
          {{ item.specialty }}
        </p>
      </q-card-section>
    </q-card-section>
  </q-card>
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
