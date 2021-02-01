<template>
  <q-card
    class="my-card q-py-xl text-center bg-warning column justify-between items-center full-height"
    flat
  >
    <ExamImg :item="item" />

    <q-card-section>
      <div class="text-h6">
        <!-- <h3 class="q-px-md">{{ item.name }}</h3> -->
        <h3
          class="q-px-md grey-text"
          :class="item.id === 9 ? 'help-card-title' : ''"
        >
          {{ item.name }}
        </h3>
      </div>

      <p class="grey-text">{{ item.description }}</p>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-btn
        style="text-transform: initial"
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
<style scoped lang="scss">
.help-card-title {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
