<template>
  <q-card class="my-card q-py-xl text-center bg-warning" flat>
    <ExamImg :item="item" />

    <q-card-section>
      <div class="text-h6">
        <h3>{{ item.name }}</h3>
      </div>
      <div>
        <p>{{ item.description }}</p>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn
        color="primary"
        label="Ver exames"
        class="button-secondary-blue"
        unelevated
        :to="`/o-que-oferecemos/${item.slug}`"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import ExamImg from "../Elements/Buttons/ExamImg.vue";

export default {
  props: ["item"],

  data() {
    return {
      exam: []
    };
  },
  components: {
    ExamImg
  }
};
</script>
<style scoped lang="scss"></style>
