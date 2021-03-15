<template>
  <div id="medicina-fetal" class="q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 ">
          <h2 class="grey-text">Medicina fetal</h2>
          <!-- <p class="grey-text">
            Seja bem-vinda, mamãe! Confira informações sobre o desenvolvimento do seu bebê e
            mantenha sempre o calendário de exames atualizado para a sua saúde e do seu
            neném.
          </p> -->
          <p class="grey-text">
            Os aparelhos de ultrassom se sofisticaram de tal maneira, que
            tornaram possível obter imagens muito nítidas da criança e do
            interior da cavidade uterina. Foi só com o advento da
            ultrassonografia que se pôde visualizar o interior do útero para
            saber como o feto estava se desenvolvendo.
          </p>
          <p class="grey-text">
            Essas imagens não só satisfazem a curiosidade das mães, pais e avós,
            mas permitem que os médicos tenham acesso ao local, introduzam
            agulhas para colher material para exame e avaliem as condições da
            gravidez e do feto.
          </p>
          <!-- <p class="text-red">Pendência de texto*</p> -->
          <q-btn
            class="button-primary q-mb-md"
            color="primary"
            text-color="secondary"
            unelevated
            label="Receba mais informações"
            @click="modalLead = true"
          />
        </div>
        <div class="col-md-6 col-12 q-px-xl">
          <q-img
            class="gt-sm"
            src="../../assets/img/section/medicinaFetal/medicina-fetal-introducao.svg"
          />
        </div>
      </div>
      <q-dialog v-model="modalLead">
        <q-card
          class="text-center"
          id="modal-lead"
          style="width: 700px; max-width: 80vw;"
        >
          <q-card-section class="row q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
              flat
              header-class="q-mx-auto"
              class="column reverse"
            >
              <q-step :name="1" title="" icon="" :done="step > 1" inactive-icon>
                <h2>Carinho em forma de informação</h2>
                <p class="q-px-lg">
                  Envie seu e-mail para ter acesso aos nossos conteúdos sobre
                  medicina fetal e como ela poderá auxiliar sua gravidez.
                </p>
                <q-input
                  style="max-width: 300px"
                  placeholder="Digite seu Nome"
                  type="text"
                  bg-color="white"
                  class="q-mx-auto q-mb-md"
                  outlined
                  inputmode="email"
                  v-model="name"
                />
                <q-input
                  style="max-width: 300px"
                  placeholder="Digite seu e-mail"
                  type="email"
                  bg-color="white"
                  class="q-mx-auto q-mb-md"
                  outlined
                  inputmode="email"
                  v-model="email"
                  required
                  :rules="[val=> isEmail(val) || 'Você deve escrever um email válido' ]"
                />

                <q-btn
                  @click="checkField()"
                  color="primary"
                  label="Enviar"
                />
              </q-step>

              <q-step
                :name="2"
                title=""
                caption=""
                icon="create_new_folder"
                :done="step > 2"
              >
                <h2>Informação instatânea</h2>
                <p>
                  Baixe nossa cartilha e saiba informar conteúdos da cartilha e
                  objetivo dos conteúdos, ou vantagens.
                </p>

                <q-btn
                  v-if="step > 1"
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Voltar"
                  class="q-mr-sm"
                  outline
                />
                <q-btn color="primary" label="baixar cartilha" @click="download()" />
              </q-step>
            </q-stepper>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { Notify } from "quasar";
export default {
  data() {
    return {
      modalLead: false,
      step: 1,
      email: '',
      name: '',
      ebook: '',
      hash: '',
    };
  },

  methods: {
    checkField() {
      if (this.name == '') {
        this.$q.notify({
            position: "top",
            color: "red",
            message: "Por favor informe seu nome!"
          });
          return;
      }
      if (this.email == '') {
       this.$q.notify({
            position: "top",
            color: "red",
            message: "Por favor informe seu e-mail!"
        });
        return;
      }

      this.send();
      this.$refs.stepper.next()
    },
    send() {
      let data = {
        email: this.email,
        name: this.name
      }
       this.$axios
        .post("lead", data)
        .then(res => {
          this.ebook = res.data.hash;
        })
        .catch(e => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: e.response.data.error
          });
        });
    },
    download() {
      if (this.ebook != '') {
        var link = document.createElement('a');
        link.href = this.$base_url + 'get-ebook?email=' + this.email + '&hash=' + this.ebook;
        link.download = 'ultrimagem.pdf';
        link.dispatchEvent(new MouseEvent('click'));
      }
    },
    isEmail(e){
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(e).search (filter) != -1;
    },

  },
};
</script>

<style lang="scss">
#medicina-fetal {
  background-color: #f4f7f9;
}

#modal-lead {
  .q-stepper__label:after,
  .q-stepper__dot:before {
    display: none;
  }

  .q-stepper__tab {
    padding: 0px;
  }
  .q-stepper__dot {
    border: solid 2px #299dd5;
    background: white;
    min-width: 16px !important;
    height: 16px !important;
  }

  .q-stepper__dot i {
    display: none;
  }
  .q-stepper__tab--active .q-stepper__dot {
    background: #299dd5;
  }
  .q-stepper__header--standard-labels .q-stepper__tab {
    min-height: 50px;
    margin-bottom: 20px;
  }

  .q-focus-helper {
    position: inherit;
  }
}
</style>
