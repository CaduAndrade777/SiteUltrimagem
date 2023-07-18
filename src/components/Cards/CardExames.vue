<template>
  <q-card id="card-exams">
    <q-tabs
      v-model="tab"
      dense
      :class="woman === true ? 'card-bg-exam-woman' : 'card-bg-exam'"
      indicator-color="transparent"
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
          no-caps
          class="text-white q-py-md"
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
                <h6 class="grey-text q-mb-md">1) O que é</h6>
                <p class="grey-text">
                  {{ exame.oque }}
                </p>

                <h6 class="grey-text q-mb-md">
                  <!-- 2) -->
                  <i
                    style="color:#3B9DD5"
                    class="mdi mdi-account-outline q-mr-xs "
                    aria-hidden="true"
                  ></i>
                  Preparação
                </h6>
                <!-- q-pa-lg -->
                <template v-if="Array.isArray(exame.preparacao)">
                  <ul class=" grey-text" v-for="(preparacao, index) in exame.preparacao" :key="preparacao">
                    <li>- {{ preparacao }}</li>
                  </ul>
                </template>
                <ul v-else>
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
                :class="
                  woman === true ? 'card-bg-exam-woman-2' : 'card-bg-exam-2'
                "
              >
                <q-img
                  class="gt-sm"
                  :src="
                    require(`../../assets/img/components/exame/${exame.image}`)
                  "
                />
                <div class="q-pa-lg text-secondary">
                  <p>
                    <i
                      class="mdi mdi-timer-outline q-mr-xs "
                      aria-hidden="true"
                    />

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
      if (this.selectItemElastografia(this.itemExame)) {
        this.itemExame[0].preparacao = this.explodeLinesPreparation(this.itemExame)
      }
    },

    methods: {
      selectItemElastografia(itemExame) {
        if (itemExame[0].key === "elastografia-hepatica") {
          return true;
        } else {
          return false;
        }
      },
      explodeLinesPreparation(itemExame) {
          return itemExame[0].preparacao.split("|")
      },
      changeTab(value) {
        this.tab = value;
      },
      openVita() {
        window.open("https://pixeon.clickvita.com.br/#/instituicao/ULTRI");
      },
      open() {
        window.open("https://api.whatsapp.com/send?phone=5532984020650");
      }
    }
  };
</script>
<style>
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
