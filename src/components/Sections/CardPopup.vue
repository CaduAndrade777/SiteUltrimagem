<template>
  <section class="q-pa-md q-gutter-sm" id="new-section">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-9 col-xs-7 text-secondary">
          <h3 class="q-mb-md">Teste Section p/ popup</h3>
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
              @click="card = true"
            >
              Abrir PopUp >
            </q-btn>
          </div>
        </div>
      </div>
    </div>

    <!-- POPUP DIALOG-->
    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Teste Card</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Teste card</div>
          <div class="text-caption text-grey">
            {{ lorem }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Baixar" />
          <q-btn v-close-popup flat color="primary" round icon="event" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </section>
</template>
  <script>
export default {
  data() {
    return {
      card: false,

      slide: 1,
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",

      stars: 3,
    };
  },
};
</script>

<style>
#new-section {
  background: linear-gradient(270.06deg, #8ba5ec 17.03%, #547ff7 40.38%);
}
</style>