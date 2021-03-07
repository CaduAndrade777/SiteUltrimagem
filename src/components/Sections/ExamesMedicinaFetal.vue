<template>
  <section class="bg-white">
    <div class="container">
      <h2 class="text-center">Detalhes de exames</h2>
      <p class="text-red">
        Pendência de quais exames serão exibidos nessa área*
      </p>
      <q-card flat bordered>
        <CardExames :exames="exames" :woman="true" />
      </q-card>
    </div>
  </section>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import examMulher from "../../util/examMulher.js";

export default {
  components: {
    CardExames
  },

  data() {
    return {
      exames: []
    };
  },

  created() {
    this.exames = examMulher;
  }
};
</script>
<style></style>
