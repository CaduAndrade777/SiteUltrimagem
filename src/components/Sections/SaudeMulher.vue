
<template>
  <section id="health-woman" class="q-py-md">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-9 col-xs-7 text-secondary">
          <h3 class="font-hp-regular q-mb-md">
            Saúde da Mulher
          </h3>

          <div class="flex items-center">
            <p class="q-mb-sm q-mr-md">
              Conheça soluções e exames para cuidado com as mulheres em todas as
              fases da sua vida.
            </p>

            <q-btn
              color="white"
              text-color="primary"
              class="button-primary q-mb-sm"
              unelevated
              to="/saude-da-mulher"
            >
              Ir para saúde da mulher &gt;
            </q-btn>
          </div>
        </div>

        <div class="col-md-3 col-sm-3 col-xs-5 text-center">
          <img
            alt="Saúde da Mulher"
            src="../../assets/img/components/saudeMulher/mulher.svg"
            style="max-width: 133px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HealthWomanSection'
};
</script>

<style>
#health-woman {
  background: linear-gradient(
    270.06deg,
    #7b8fca 17.03%,
    #4d6abf 40.38%
  );
}
</style>
