<template>
  <section id="servicos" class="bg-warning">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="grey-text">Exames oferecidos</h2>
          <p class="grey-text">
            A Ultrimagem – Ubá se preocupa em investir constantemente em
            tecnologia para proporcionar alta qualidade e precisão em seus
            diagnósticos para um cuidado seguro e eficaz.
          </p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
          v-for="(item, index) in exam"
          :key="index"
        >
          <CardExame :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardExame from "../../components/Cards/CardExame.vue";
import exam from "../../util/exam.js";

export default {
  components: {
    CardExame
  },

  data() {
    return {
      exam: []
    };
  },

  mounted() {
    this.exam = exam;
  }
};
</script>
