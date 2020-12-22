<template>
  <q-card flat>
    <q-tabs
      v-model="tab"
      dense
      class="text-secondary bg-primary"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab
        name="mails"
        label="Ultrassonografia Geral"
        class="text-secondary q-py-md"
      />
      <q-tab
        name="alarms"
        label="Ultrassonografia com Doppler"
        class="text-secondary q-py-md"
      />
      <q-tab name="movies" label="Movies" class="text-secondary q-py-md" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails" class="q-pa-none">
        <q-card class="my-card" flat>
          <div class="row">
            <div class="col-md-7 col-sm-7  q-px-xl ">
              <h3 class="text-weight-bolder">Ultrassonografia Geral</h3>
              <h3>1) O que é</h3>
              <p>
                A ultrassonografia constitui uma modalidade de exame de imagem
                sem a utilização da radiação, constituindo um exame inócuo para
                os pacientes e praticamente sem contraindicações Com isso,
                podemos perceber que a ultrassonografia é o principal meio de
                visualização interna e por isso, um dos exames por imagem mais
                solicitados.
              </p>
              <h3>2) Preparação</h3>
              <ul class="q-pa-lg">
                <li>- Abdomem</li>
              </ul>
            </div>
            <div class="col-md-5 col-sm-5 bg-primary card-exam-info-right">
              <q-img
                class="gt-sm"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
              <div class="q-pa-lg text-secondary">
                <p>Regiões do corpo</p>
                <ul class="q-pa-none">
                  <li>- Abdomem</li>
                </ul>
                <!-- <q-img
                  class="gt-sm"
                  src="../../assets/img/template/logo-blue-light-vertical.svg"
                /> -->
              </div>
            </div>
          </div>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "mails"
    };
  },
  components: {}
};
</script>
<style scoped>
@media only screen and (max-width: 425px) {
  .card-exam-info-right {
    width: 100%;
    text-align: center;
  }
}
</style>
