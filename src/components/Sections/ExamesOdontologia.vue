<template>
  <section class="bg-white">
    <div class="container">
      <!-- <h2 class="text-center grey-text">Detalhes de exames</h2>
      <p class="text-red">
        Pendência de quais exames serão exibidos nessa área*
      </p> -->
      <q-card>
        <CardExames :exames="exames"  />
      </q-card>
    </div>
  </section>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import examOdontologia from "../../util/examOdontologia.js";

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
    this.exames = examOdontologia;
  }
};
</script>
<style></style>
