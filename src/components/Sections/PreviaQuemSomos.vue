<template>
  <section id="previa-quem-somos" class="q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 ">
          <div class="q-pr-lg">
            <h1 class="text-weight-regular">
              <span class="text-weight-regular grey-text">
                O que nos define
              </span>
            </h1>
            <p class="grey-text">
              A <strong>Ultrimagem - Ubá </strong> se preocupa com o bem-estar
              de seus pacientes, através do cuidado no atendimento, da alta
              qualidade em seus serviços e na promoção da saúde, incentivando o
              autocuidado e prevenção.
            </p>
            <p class="grey-text">
              O <strong> acolhimento </strong> e atendimento especializado faz
              com que seus pacientes se sintam seguros e confortáveis para
              realizar exames por imagem com alta qualidade, colaborando para um
              tratamento preciso e eficaz.
            </p>
            <p class="grey-text">
              A busca por <strong> excelência </strong> é uma constante para a
              clínica, que se dedica em oferecer qualidade em seus exames e
              laudos, atendimento médico e técnico especializado e humanizado,
              pensado especialmente em cada paciente. Conforto e bem-estar em
              todos os procedimentos.
            </p>

            <p class="grey-text">
              Equipamentos modernos, equipe médica e técnica constantemente
              qualificadas e espaços organizados para o conforto e
              <strong> bem-estar </strong> de seus pacientes em todos os
              procedimentos oferecidos.
            </p>

            <q-btn
              class="button-primary q-mb-md"
              color="primary"
              text-color="secondary"
              unelevated
              to="/quem-somos"
            >
              Conheça mais sobre nós >
            </q-btn>
          </div>
        </div>

        <div class="col-md-6 col-sm-12 ">
          <div class="text-right q-pt-md">
            <q-img
              src="../../assets/img/components/oquesomos/fachada.jpeg"
              class="clinic-image"
              alt="Clinica Ultrimagem"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#previa-quem-somos .clinic-image {
  max-width: 830px;
  border-radius: 8px;
}
</style>
