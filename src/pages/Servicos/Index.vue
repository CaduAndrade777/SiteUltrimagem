<template>
  <div id="servicos">
    <Banner
      title="<strong>Exames</strong> para você <strong>cuidar</strong> de sua saúde "
      subtitle="Prevenção e cuidado através de exames por imagem de alta qualidade. "
      page="servico"
    />

    <Exames />
    <Convenios />
    <SectionRecebaConteudo />
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import Exames from "../../components/Sections/Exames.vue";
import Convenios from "../../components/Sections/Convenios.vue";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";

export default {
  components: {
    Banner,
    Exames,
    Convenios,
    SectionRecebaConteudo
  }
};
</script>
