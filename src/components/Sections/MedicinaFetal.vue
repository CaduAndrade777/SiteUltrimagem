<template>
  <div id="medicina-fetal" class="q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h1 class="grey-text">Medicina fetal</h1>

          <p class="grey-text">
            A medicina fetal é uma especialidade que visa o acompanhamento
            detalhado da gestação através de aconselhamento genético,
            ultrassonografias e outros procedimentos, sempre visando o bem-estar
            da mãe e do bebê.
          </p>
          <p class="grey-text">
            Na Ultrimagem Ubá, você realiza seus exames radiológicos de alta
            qualidade com uma equipe médica experiente. Abaixo você confere os
            exames disponíveis e uma área exclusiva sobre o desenvolvimento da
            mãe e do bebê por trimestre.
          </p>
          <p class="grey-text">
            Para acompanhar toda a gestação, a Ultrimagem criou a cartilha:
            <strong>"Primeiras memórias - guia para gestantes e primeiras memórias do bebê"</strong>,
            com informações sobre o desenvolvimento do bebê, sentimentos da mãe,
            e espaço para registrar memórias.
          </p>

          <q-btn
            class="button-primary q-mb-md"
            color="primary"
            text-color="secondary"
            unelevated
            label="Clique aqui e baixe a cartilha"
            @click="modalLead = true"
          />
        </div>

        <div class="col-md-6 col-12 q-px-xl q-pt-lg">
          <q-img
            class="gt-sm medicine-fetal-img"
            src="../../assets/img/section/medicinaFetal/medicina-fetal-introducao.svg"
            alt="Ilustração representando a medicina fetal"
            loading="lazy"
          />
        </div>
      </div>

      <q-dialog v-model="modalLead">
        <q-card id="modal-lead" class="text-center" style="width: 700px; max-width: 90vw;">
          <q-card-section class="row q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-stepper v-model="step" ref="stepper" color="primary" animated flat class="column reverse">
              <q-step :name="1" title="">
                <h2>Carinho em forma de informação</h2>
                <p class="q-px-lg">
                  Envie seu e-mail para ter acesso aos nossos conteúdos sobre medicina fetal.
                </p>

                <q-input
                  v-model="name"
                  style="max-width: 300px"
                  placeholder="Digite seu nome"
                  type="text"
                  outlined
                  class="q-mx-auto q-mb-md"
                  inputmode="text"
                  bg-color="white"
                />

                <q-input
                  v-model="email"
                  style="max-width: 300px"
                  placeholder="Digite seu e-mail"
                  type="email"
                  outlined
                  class="q-mx-auto q-mb-md"
                  inputmode="email"
                  bg-color="white"
                  :rules="[ val => isEmail(val) || 'Você deve escrever um e-mail válido' ]"
                />

                <q-btn
                  @click="checkField"
                  class="button-primary"
                  color="primary"
                  label="Enviar"
                />
              </q-step>

              <q-step :name="2" title="" icon="create_new_folder">
                <h2>Informação instantânea</h2>
                <p>
                  Baixe agora: "Primeiras memórias - guia para gestantes e primeiras memórias do bebê"
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
                  @click="download"
                />
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
  data () {
    return {
      modalLead: false,
      step: 1,
      email: "",
      name: "",
      ebook: ""
    };
  },
  methods: {
    checkField () {
      if (!this.name) {
        this.$q.notify({ position: "top", color: "red", message: "Por favor informe seu nome!" });
        return;
      }
      if (!this.email) {
        this.$q.notify({ position: "top", color: "red", message: "Por favor informe seu e-mail!" });
        return;
      }
      this.send();
      this.$refs.stepper.next();
    },
    send () {
      const data = {
        email: this.email,
        name: this.name
      };
      this.$axios.post("lead", data)
        .then(res => {
          this.ebook = res.data && res.data.hash ? res.data.hash : "";
        })
        .catch(e => {
          let msg = "Erro ao enviar dados";
          if (e && e.response && e.response.data && e.response.data.error) {
            msg = e.response.data.error;
          }
          this.$q.notify({ position: "top", color: "red", message: msg });
        });
    },
    download () {
      if (this.ebook !== "") {
        const link = document.createElement("a");
        link.href = this.$base_url + "get-ebook?email=" + this.email + "&hash=" + this.ebook;
        link.download = "ultrimagem.pdf";
        link.rel = "noopener noreferrer";
        link.target = "_blank";
        link.click();
      }
    },
    isEmail (email) {
      var regex = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
      return regex.test(email);
    }
  }
};
</script>

<style scoped>
#medicine-fetal {
  background-color: #f4f7f9;
}

.medicine-fetal-img {
  border-radius: 8px;
}

#modal-lead .q-stepper__label:after,
.q-stepper__dot:before {
  display: none;
}

#modal-lead .q-stepper__tab {
  padding: 0;
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
