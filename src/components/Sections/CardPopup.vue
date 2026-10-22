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
      <q-card
        class="text-center"
        id="card"
        style="width: 700px; max-width: 80vw"
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
                :rules="[ 
                  (val) => isEmail(val) || 'Você deve escrever um email válido'
                ]"
              />

              <q-btn
                @click="checkField()"
                class="button-primary"
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
              <h2>Informação instantânea</h2>
              <p>
                Baixe agora: "Primeiras memórias - guia para gestantes e
                primeiras memórias do bebê"
              </p>

              <q-btn
                v-if="step > 1"
                color="primary"
                @click="$refs.stepper.previous()"
                label="Voltar"
                class="q-mr-sm button-primary"
                outline
              />
              <q-btn
                color="primary"
                label="Baixar cartilha"
                class="button-primary"
                @click="download()"
              />
            </q-step>
          </q-stepper>
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import { Notify } from "quasar";

export default {
  data() {
    return {
      card: false,
      step: 1,
      email: "",
      name: "",
      ebook: "",
      hash: "",
    };
  },

  methods: {
    checkField() {
      if (this.name === "") {
        this.$q.notify({
          position: "top",
          color: "red",
          message: "Por favor informe seu nome!",
        });
        return;
      }
      if (this.email === "") {
        this.$q.notify({
          position: "top",
          color: "red",
          message: "Por favor informe seu e-mail!",
        });
        return;
      }

      this.send();
      this.$refs.stepper.next();
    },

    send() {
      let data = {
        email: this.email,
        name: this.name,
      };
      this.$axios
        .post("lead", data)
        .then((res) => {
          this.ebook = res.data.hash;
        })
        .catch((e) => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: e.response.data.error,
          });
        });
    },

    download() {
      if (this.ebook !== "") {
        var link = document.createElement("a");
        link.href =
          this.$base_url +
          "get-ebook?email=" +
          this.email +
          "&hash=" +
          this.ebook;
        link.download = "ultrimagem.pdf";
        link.dispatchEvent(new MouseEvent("click"));
      }
    },

    isEmail(email) {
      var filter =
        /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
      return String(email).search(filter) !== -1;
    },
  },
};
</script>

<style lang="scss">
#medicine-fetal {
  background-color: #f4f7f9;
}
#medicina-fetal .medicine-fetal-img {
  border-radius: 8px;
}

#modal-lead .q-stepper__label:after,
.q-stepper__dot:before {
  display: none;
}

#modal-lead .q-stepper__tab {
  padding: 0px;
}

#modal-lead .q-stepper__dot {
  border: solid 2px #299dd5;
  background: white;
  min-width: 16px !important;
  height: 16px !important;
}

#modal-lead .q-stepper__dot i {
  display: none;
}

#modal-lead .q-stepper__tab--active .q-stepper__dot {
  background: #299dd5;
}

#modal-lead .q-stepper__header--standard-labels .q-stepper__tab {
  min-height: 50px;
  margin-bottom: 20px;
}
#modal-lead .q-focus-helper {
  position: inherit;
}
</style>

<style>
#new-section {
  background: linear-gradient(270.06deg, #8ba5ec 17.03%, #547ff7 40.38%);
}
</style>
