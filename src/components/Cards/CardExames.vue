<template>
  <q-card flat>
    <q-tabs
      v-model="tab"
      dense
      :class="woman === true ? 'card-bg-exam-woman' : 'card-bg-exam'"
      indicator-color="secondary"
      align="justify"
      narrow-indicator
      outside-arrows
      class="text-secondary"
    >
      <!-- :class="woman == true ? 'card-bg-exam-woman' : 'card-bg-exam'" -->
      <div v-for="(exame, index) in itemExame" :key="exame.id">
        <q-tab
          :name="exame.id"
          :label="exame.name"
          class="text-white q-py-md "
          @click="changeTab(exame.id)"
        />
        <q-separator />
      </div>
    </q-tabs>

    <div v-for="(exame, index) in itemExame" :key="exame.id">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel :name="exame.id" class="q-pa-none">
          <q-card class="my-card" flat>
            <div class="row">
              <div class="col-md-7 col-sm-7 q-px-xl">
                <h2 class="grey-text">{{ exame.name }}</h2>
                <h6 class="grey-text">1) O que é</h6>
                <p class="grey-text">
                  {{ exame.oque }}
                </p>
                <h6 class="grey-text">2) Preparação</h6>
                <ul class="q-pa-lg grey-text">
                  <li>- {{ exame.preparacao }}</li>
                </ul>

                <q-btn
                  outline
                  color="primary"
                  class="q-mr-md button-secondary-blue"
                  label="Agende seu exame"
                  no-caps
                  @click="open()"
                >
                </q-btn>

                <q-btn
                  class="button-primary q-mb-md q-mt-md"
                  color="primary"
                  text-color="secondary"
                  unelevated
                  label="Ver resultado"
                  @click="openVita()"
                >
                </q-btn>
              </div>
              <div
                class="col-md-5 col-sm-5 card-exam-info-right"
                :class="woman === true ? 'card-bg-exam-woman' : 'card-bg-exam'"
              >
                <q-img
                  class="gt-sm"
                  :src="
                    require(`../../assets/img/components/exame/${exame.image}`)
                  "
                />
                <div class="q-pa-lg text-secondary">
                  <p>Duração</p>
                  <ul class="q-pa-none q-mb-lg">
                    <li>- {{ exame.duracao }}</li>
                  </ul>
                  <div class="text-center">
                    <img
                      src="../../assets/img/template/logo-blue-light.svg"
                      class="card-exams-logo"
                      alt="Logo da Ultrimagem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-card>
</template>

<script>
export default {
  props: ["exames", "woman"],
  data() {
    return {
      tab: "",
      selectedTab: 1,
      itemExame: []
    };
  },
  components: {},

  created() {
    if (
      typeof this.exames != "undefined" &&
      this.exames != null &&
      this.exames
    ) {
      if (this.exames.variacoes.length > 0) {
        this.itemExame = this.exames.variacoes;
      } else {
        this.itemExame.push(this.exames);
      }
      this.tab = this.itemExame[0].id;
    }
  },
  methods: {
    changeTab(value) {
      this.tab = value;
    },
    openVita() {
      window.open("https://www.clickvita.com.br/code/ULTRI");
    },
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    }
  }
};
</script>
<style scoped>
.card-bg-exam {
  background-color: #00d5cf;
}
.card-bg-exam-woman {
  background-color: #95b4ee;
}

.card-exams-logo {
  max-width: 10.6em;
}
@media only screen and (max-width: 425px) {
  .card-exam-info-right {
    width: 100%;
    text-align: center;
  }
}
</style>
