<template>
  <section class="exam-section exam-section--fetal q-py-xl">
    <div class="container">
      <CardExames
        :exames="exames"
        :fetal="true"
      />
    </div>
  </section>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import examMulher from "../../util/examMulher.js";

export default {
  name: "MedicinaFetalExames",

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

<style scoped>
.exam-section--fetal {
  display: block;
  width: 100%;
  margin: 0;
  padding-top: 48px;
  padding-bottom: 64px;

  background: transparent !important;
  border: none;
  box-shadow: none;
}

.exam-section--fetal .container {
  background: transparent !important;
  border: none;
  box-shadow: none;
}

/* Mantém o espaçamento entre as linhas e colunas dos cards */
.exam-section--fetal .container > * {
  min-width: 0;
}

@media (max-width: 599px) {
  .exam-section--fetal {
    padding-top: 32px;
    padding-bottom: 40px;
  }
}
</style>
