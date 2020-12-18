<template> 
  <section id="previaquemsomos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="title"></h1>
          <p>
              A <strong>Ultrimagem - Ubá </strong> se preocupa com o bem-estar de seus pacientes, através do cuidado no atendimento, da alta qualidade em seus serviços e na promoção da saúde, incentivando o autocuidado e prevenção.
          </p>
          <p>
            O <strong> acolhimento </strong> e <strong> atendimento especializado  </strong> faz com que seus pacientes se sintam seguros e confortáveis para realizar exames por imagem com alta qualidade, colaborando para um tratamento preciso e eficaz.
          </p>
          <p>
            Todo atendimento realizado, seja na recepção ou com a equipe médica, é pensando especialmente para que o paciente se sinta confortável no ambiente durante o procedimento e em todas as fases, enquanto estiver na clínica.
          </p>

          <q-btn outline color="primary" class="button-primary-blue">
              <span> Conheça mais sobre nós </span>
              <i class="mdi mdi-chevron-right" aria-hidden="true" ></i>
          </q-btn>
        </div>
        <div class="col-md-6">
          <img
            class="q-mr-sm"
            src="../../assets/img/components/oquesomos/image.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: " <strong> O que nos define  </strong>",
    };
  },
  componentes: {}
};
</script>
<style scoped></style>
