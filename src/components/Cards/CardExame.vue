<template>
  <q-card
    id="card-exam"
    class="my-card q-py-xl text-center bg-warning column justify-between items-center full-height"
    flat
  >
    <ExamImg :item="item" />

    <q-card-section class="q-px-md">
      <h3
        :id="`exam-title-${item.id}`"
        class="text-h6 grey-text q-mb-sm"
        :class="item.id === 9 ? 'help-card-title' : 'card-title'"
      >
        {{ item.name }}
      </h3>
      <p class="grey-text" aria-describedby="exam-desc">
        {{ item.description }}
      </p>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn
        :aria-labelledby="`exam-title-${item.id}`"
        color="primary"
        label="Ver exames"
        class="button-secondary-blue"
        unelevated
        :to="`/exames-e-convenios/${item.slug}`"
        no-caps
      />
    </q-card-section>
  </q-card>
</template>

<script>
import ExamImg from "../Elements/Buttons/ExamImg.vue";

export default {
  name: "CardExam",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ExamImg
  }
};
</script>

<style scoped>
#card-exam .help-card-title {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media only screen and (max-width: 425px) {
  #card-exam .card-title,
  #card-exam .help-card-title {
    font-size: 1.2em;
    line-height: 1.4;
    height: auto;
    text-align: center;
  }
}
</style>