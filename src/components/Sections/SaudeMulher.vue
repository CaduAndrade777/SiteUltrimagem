<template>
  <section id="saudeMulher" class="q-py-md">
    <div class="container">
      <div class="row">
        <div class="col-md-7  col-sm-7  col-xs-7  text-secondary">
          <h3>Saúde da Mulher</h3>
          <div class="flex items-center">
            <p class="q-mb-none">
              Conheça soluções e exames para cuidado com as mulheres em todas as
              fases da sua vida.
            </p>
          </div>
          <q-btn
            color="white"
            text-color="primary"
            class="button-primary q-mt-md"
            unelevated
            to="/saude-da-mulher"
          >
            Ir para saúde da mulher >
          </q-btn>
        </div>

        <div class="col-md-5 col-sm-5  col-xs-5 text-center">
          <img
            src="../../assets/img/components/saudeMulher/mulher.svg"
            style="max-width:133px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
#saudeMulher {
  background: linear-gradient(270.06deg, #a3caff 17.03%, #8090dd 40.38%);
}

// .button-mulher {
//   font-size: 16px;
//   border-radius: 10px;
//   width: 200px !important;
//   background: #f4f7f9 !important;
//   color: $primary !important;
//   height: 40px !important;
//   text-transform: capitalize;
//   font-family: Montserrat, sans-serif;
//   font-size: 0.875em;
// }
</style>
