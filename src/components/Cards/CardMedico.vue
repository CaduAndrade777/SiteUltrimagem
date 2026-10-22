<template>
  <q-card-section horizontal id="card-doctor" class="q-pa-none">
    <img
      class="border-round doctor-photo"
      :src="require(`../../assets/img/components/equipeMedica/${item.img}`)"
      :alt="`Foto do médico ${item.name}`"
    />

    <div
      class="absolute-bottom text-subtitle1 text-center bg-secondary text-primary q-pa-md ellipsis card-doctor-name"
    >
      {{ item.name }}
    </div>

<q-card-section class="card-doctor-info">
  <h3 class="grey-text text-h6" :id="`doctor-name-${item.id}`">{{ item.name }}</h3>

  <div class="row no-wrap items-start">
    <i class="mdi mdi-stethoscope q-mr-sm card-doctor-icon" aria-hidden="true" />
    <p class="grey-text card-doctor-specialty" :id="`doctor-specialty-${item.id}`">{{ item.specialty }}</p>
  </div>
</q-card-section>

  </q-card-section>
</template>

<script>
export default {
  name: "CardDoctor",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.doctor-photo {
  max-height: 400px;
  width: 300px;
  object-fit: cover;
}

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

.card-doctor-specialty {
  white-space: pre-line;
  margin: 0;
}

.card-doctor-icon {
  flex-shrink: 0;
  line-height: inherit;
}

</style>