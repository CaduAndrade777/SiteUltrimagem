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

        <CardExame />
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

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    CardExame,
    SectionRecebaConteudo,
    Convenios
  }
};
</script>
<style scoped></style>
