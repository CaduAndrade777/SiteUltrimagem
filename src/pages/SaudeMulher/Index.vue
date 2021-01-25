<template>
  <div>
    <Banner
      title="<strong> Saúde da mulher e da gestante  </strong>"
      subtitle="Encontre abaixo soluções em exames por imagem para o autocuidado e prevenção da
saúde da mulher e da gestante. Conheça mais sobre suas necessidades e previna-se
com a qualidade que você merece."
    >
    </Banner>

    <section class="bg-secondary">
      <div class="container">
        <!-- <h2 class="text-center">Detalhes de Exames</h2> -->
        <div class="row justify-center">
          <div class="col-md-8 q-mb-xl">
            Essa é uma área dedicada à mulher, que já sabe que os cuidados
            preventivos são as melhores formas de se cuidar. E para diversas
            fases da vida, a Ultrimagem – Ubá oferece apoio, acolhimento e uma
            equipe pronta para lhe auxiliar em todos os seus momentos.
          </div>

          <p>
            <b>Ultrassonografia endovaginal:</b><br />
            A ultrassonografia endovaginal ou transvaginal é um exame
            diagnóstico muito utilizado por ginecologistas e obstetras, que
            consiste na inserção de um aparelho chamado transdutor na vagina,
            que vai gerar imagens dos órgãos internos daquela região: útero,
            trompas e ovários. Preparação: a paciente deve estar com bexiga
            vazia. Duração: 15 a 20 minutos. <br /><br /><br />

            <b> Medicina Fetal: saúde da mãe e do neném</b><br />
            Seja bem-vinda, mamãe! Confira informações sobre o desenvolvimento
            do seu bebê e mantenha sempre o calendário de exames atualizado para
            a sua saúde e do seu neném.
          </p>

          <CardExames />
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

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    CardExames,
    MedicinaFetal,
    RecebaConteudo
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
