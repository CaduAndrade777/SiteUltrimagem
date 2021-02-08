<template>
  <div>
    <Banner
      title="<strong> Saúde da mulher e da gestante  </strong>"
      subtitle="Encontre abaixo soluções em exames por imagem para o autocuidado e prevenção da saúde da mulher e da gestante. Conheça mais sobre suas necessidades e previna-se com a qualidade que você merece."
    >
    </Banner>

    <section class="bg-secondary">
      <div class="container">
        <h2 class="text-center grey-text">Detalhes de Exames</h2>
        <div class="row justify-center">
          <div class="col-md-8 q-mb-xl">
            <p class="grey-text">
              Essa é uma área dedicada à mulher, que já sabe que os cuidados
              preventivos são as melhores formas de se cuidar. E para diversas
              fases da vida, a Ultrimagem – Ubá oferece apoio, acolhimento e uma
              equipe pronta para lhe auxiliar em todos os seus momentos.
            </p>
          </div>

          <div class="container">
            <CardExames :exames="exames" :woman="true" />
          </div>
        </div>
      </div>
    </section>

    <MedicinaFetal></MedicinaFetal>
    <RecebaConteudo></RecebaConteudo>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import CardExames from "../../components/Cards/CardExames.vue";
import MedicinaFetal from "../../components/Sections/MedicinaFetal.vue";
import RecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
import examMulher from "../../util/examMulher.js";

export default {
  data() {
    return {
      exames: {}
    };
  },
  components: {
    Banner,
    MedicinaFetal,
    RecebaConteudo,
    CardExames
  },
  created() {
    this.exames = examMulher;
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
