<template>
  <div>
    <Banner
      title="<strong>Exames</strong> para você <strong>cuidar</strong> de sua saúde "
      subtitle="Prevenção e cuidado através de exames por imagem de alta qualidade. "
    >
    </Banner>

    <section class="bg-warning">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Tipos de exames oferecidos</h2>
            <p>
              Importância da ressonância mágnetíca. Ut posuere dolor neque, et
              vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis
              euismod. Ut posuere dolor neque.
            </p>
          </div>
        </div>

        <div class="row">
          <div
            class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
            v-for="(item, index) in exam"
            :key="item.id"
          >
            <CardExame :item="item" />
          </div>
        </div>
      </div>
    </section>

    <SectionRecebaConteudo />
    <Convenios />
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import CardExame from "../../components/Cards/CardExame.vue";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
import Convenios from "../../components/Sections/Convenios.vue";
import exam from "../../util/exam.js";

export default {
  components: {
    Banner,
    CardExame,
    SectionRecebaConteudo,
    Convenios
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
<style scoped></style>
