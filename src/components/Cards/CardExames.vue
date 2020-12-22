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
      <div v-for="(exame, index) in itemExame" :key="exame.id">
        <q-tab
          :name="exame.id"
          :label="exame.name"
          class="text-secondary q-py-md"
          @click="changeTab(exame.id)"
        />
        <q-separator />
      </div>

      <!-- <q-tab
        name="alarms"
        label="Ultrassonografia com Doppler"
        class="text-secondary q-py-md"
      />
      <q-tab name="movies" label="Movies" class="text-secondary q-py-md" /> -->
    </q-tabs>

    <div v-for="(exame, index) in itemExame" :key="exame.id">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel :name="exame.id" class="q-pa-none">
          <q-card class="my-card" flat>
            <div class="row">
              <div class="col-md-7 col-sm-7  q-px-xl ">
                <h3 class="text-weight-bolder">{{ exame.name }}</h3>
                <h3>1) O que é</h3>
                <p>
                  {{ exame.description }}
                </p>
                <h3>2) Preparação</h3>
                <ul class="q-pa-lg">
                  <li>- {{ exame.preparacao }}</li>
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
                    <li>- {{ exame.regioes }}</li>
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
    </div>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
      selectedTab: 1,
      itemExame: []
    };
  },
  components: {},
  props: ["exames"],
  mounted() {
    console.log(this.exames);
    if (this.exames.variacoes.length > 0) {
      this.itemExame = this.exames.variacoes;
    } else {
      this.itemExame.push(this.exames);
    }
    this.tab = this.itemExame[0].id;
  },
  methods: {
    changeTab(value) {
      this.tab = value;
    }
  }
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
