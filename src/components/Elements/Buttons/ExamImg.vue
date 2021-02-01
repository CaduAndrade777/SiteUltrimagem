<template>
  <q-btn
    round
    flat
    class="q-pa-md full-width card-exames-img-bd"
    :class="item.class"
    :to="`/o-que-oferecemos/${item.slug}`"
  >
    <q-avatar size="120px">
      <img
        class="q-mr-sm"
        :src="
          require(`../../../assets/img/components/cards/cardExame/${item.icon}`)
        "
      />
    </q-avatar>
  </q-btn>
</template>

<script>
export default {
  props: ["item"],

  data() {
    return {
      exam: []
    };
  },
  components: {}
};
</script>

<style scoped></style>
