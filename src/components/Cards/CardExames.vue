<template>
  <q-card id="card-exams">
    <q-tabs
      v-model="tab"
      dense
      :class="woman ? 'card-bg-exam-woman' : 'card-bg-exam'"
      indicator-color="transparent"
      align="justify"
      narrow-indicator
      outside-arrows
      class="text-secondary"
    >
      <q-tab
        v-for="(exame, index) in itemExame"
        :key="exame.id"
        :name="exame.id"
        :label="exame.name"
        no-caps
        class="text-white q-py-md"
        @click="changeTab(exame.id)"
      />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel
        v-for="(exame, index) in itemExame"
        :key="`panel-${exame.id}`"
        :name="exame.id"
        class="q-pa-none"
      >
        <q-card class="my-card" flat>
          <div class="row">
            <!-- Lado esquerdo -->
            <div class="col-md-7 col-sm-12 q-px-xl">
              <h2 class="grey-text">{{ exame.name }}</h2>

              <h6 class="grey-text q-mb-md">1) O que é</h6>
              <p class="grey-text">{{ exame.oque }}</p>

              <h6 class="grey-text q-mb-md">
                <i class="mdi mdi-account-outline q-mr-xs" style="color:#3B9DD5" aria-hidden="true" />
                Preparação
              </h6>
              <ul class="grey-text">
                <li v-for="(prep, idx) in getPreparacao(exame.preparacao)" :key="idx">
                  - {{ prep }}
                </li>
              </ul>

              <q-btn
                outline
                color="primary"
                class="q-mr-md button-secondary-blue q-mt-md"
                label="Agende seu exame"
                no-caps
                @click="openAgendamento"
              />
              <q-btn
                class="button-primary q-mt-md q-mb-md"
                color="primary"
                text-color="secondary"
                unelevated
                label="Ver resultado"
                no-caps
                @click="openVita"
              />
            </div>

            <!-- Lado direito -->
            <div
              class="col-md-5 col-sm-12 card-exam-info-right"
              :class="woman ? 'card-bg-exam-woman-2' : 'card-bg-exam-2'"
            >
              <q-img
                class="gt-sm"
                :src="getImageSrc(exame.image)"
                :alt="`Imagem do exame ${exame.name}`"
                loading="lazy"
              />
              <div class="q-pa-lg text-secondary">
                <p>
                  <i class="mdi mdi-timer-outline q-mr-xs" aria-hidden="true" />
                  Duração
                </p>
                <ul class="q-pa-none q-mb-lg">
                  <li>- {{ exame.duracao }}</li>
                </ul>
                <div class="text-center">
                  <img
                    src="../../assets/img/template/logo-blue-light.svg"
                    class="card-exams-logo"
                    alt="Logo da Ultrimagem"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
export default {
  props: ["exames", "woman"],
  data() {
    return {
      tab: "",
      itemExame: []
    };
  },
  created() {
  if (this.exames) {
    if (this.exames.variacoes && this.exames.variacoes.length > 0) {
      this.itemExame = this.exames.variacoes;
    } else {
      this.itemExame = [this.exames];
    }

    if (this.itemExame.length > 0) {
      this.tab = this.itemExame[0].id;

      if (this.itemExame[0].key === "elastografia-hepatica") {
        this.itemExame[0].preparacao = this.itemExame[0].preparacao.split("|");
      }
    }
  }
},
  methods: {
    changeTab(value) {
      this.tab = value;
    },
    getPreparacao(prep) {
      if (Array.isArray(prep)) return prep;
      if (typeof prep === "string" && prep.includes("|")) {
        return prep.split("|");
      }
      return [prep];
    },
    getImageSrc(name) {
      try {
        return require(`../../assets/img/components/exame/${name}`);
      } catch (e) {
        return ""; // fallback opcional
      }
    },
    openVita() {
      window.open("https://pixeon.clickvita.com.br/#/instituicao/ULTRI", "_blank", "noopener,noreferrer");
    },
    openAgendamento() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650", "_blank", "noopener,noreferrer");
    }
  }
};
</script>

<style scoped>
#card-exams .card-bg-exam,
#card-exams .card-bg-exam-2 {
  background-image: linear-gradient(#1e4cd2, #0a5ca3);
}
#card-exams .card-bg-exam-woman,
#card-exams .card-bg-exam-woman-2 {
  background-image: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
#card-exams .card-exams-logo {
  max-width: 10.6em;
}
#card-exams .q-tab__label {
  font-weight: bold;
}

@media only screen and (max-width: 425px) {
  #card-exams .card-exam-info-right {
    width: 100%;
    text-align: center;
  }
  #card-exams .card-exam-info-right .text-secondary {
    color: #444 !important;
  }
  #card-exams .card-exam-info-right .card-exams-logo {
    display: none;
  }
  #card-exams .card-bg-exam-2,
  #card-exams .card-bg-exam-woman-2 {
    background-image: linear-gradient(#fff, #fff);
    border-top: solid 1px #ccc;
  }
}
</style>