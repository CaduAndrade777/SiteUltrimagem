<template>
  <div>
    <Banner
      title="<strong> Política de Privacidade!  </strong>"
      subtitle="Entre em contato com a Ultrimagem – Ubá através dos canais de comunicação facilitados para você ficar por dentro de tudo o que acontece na clínica."
      page="contato"
    >
    </Banner>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-5">
            <h2 class="text-weight-regular grey-text">
              Quer exercer seus direitos relacionados aos seus dados pessoais?
            </h2>
            <p class="grey-text">
              Para requisitar direitos relacionados aos seus dados pessoais,
              preencha o formulário
            </p>

            <div class="q-pb-md">
              <q-btn
                color="primary"
                class="button-secondary-blue politica-btn"
                @click="enableQuestions()"
              >
                <span> Acesse aqui </span>
              </q-btn>
            </div>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-4">
            <h2 class="text-weight-regular grey-text">
              Quer saber mais?
            </h2>
            <p class="grey-text" style="height:137px">
              Acesse nossa política de privacidade na íntegra
            </p>
            <div class="q-pb-md">
              <q-btn color="primary" class="button-secondary-blue politica-btn">
                <span> Acesse aqui </span>
              </q-btn>
            </div>
          </div>
        </div>
        <div class="row justify-center" v-if="enable">
          <div class="col-md-6 q-pt-xl ">
            <p class="grey-text">
              Os direitos relacionados a sua Privacidade e à Proteção de Dados
              Pessoais, de acordo com a Lei Geral de Proteção de Dados Pessoais
              (LGPD), poderão ser exercidos por meio desse canal.
            </p>

            <p class="grey-text">
              Nós precisamos de algumas informações para processar sua
              solicitação de maneira apropriada e validar sua identidade.
              Pedimos que preencha o formulário abaixo com os mesmos dados
              utlizados no seu cadastro.
            </p>
            <br />
            <p class="topic">
              <span>*</span>
              Tipo de relação com o grupo Ultrimagem Ubá
            </p>
            <div class="box-items">
              <ul>
                <li
                  v-for="(item, index) in itemsRelashionship"
                  :key="item.id"
                  @click="setRelashionship($event, item.name)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <p class="topic">
              <span>*</span>
              Selecione o tipo de pedido:
            </p>
            <div class="box-items">
              <ul>
                <li
                  v-for="(item, index) in requests"
                  :key="item.id"
                  @click="setRequest($event, item.name)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="form-action" v-if="formActive">
              <p class="topic">
                Seus dados, sua decisão:
              </p>
              <p class="grey-text">
                Com intuidto de proteger seus dados pessoais de acessos não
                autorizados, conforme previsto na Lei Geral de Proteção de Dados
                (art.46), solicitamos algumas confirmações que comprovam que
                você é o titular das informações para que possamos dar
                prosseguimento à sua solicitação:
              </p>
              <p class="topic">
                <span>*</span>
                Nome completo
                <q-input
                  placeholder="Digite seu Nome"
                  type="text"
                  bg-color="white"
                  class=""
                  outlined
                  required
                  inputmode="email"
                  v-model="form.name"
                />
              </p>
              <p class="topic">
                <span>*</span>
                CPF
                <q-input
                  placeholder="Digite seu CPF"
                  type="text"
                  bg-color="white"
                  class=""
                  outlined
                  required
                  inputmode="email"
                  v-model="form.cpf"
                />
              </p>
              <p class="topic">
                <span>*</span>
                E-mail
                <q-input
                  placeholder="Digite seu E-mail"
                  type="email"
                  bg-color="white"
                  class=""
                  outlined
                  required
                  inputmode="email"
                  v-model="form.email"
                />
              </p>
              <q-btn
                color="primary"
                class="button-secondary-blue"
                @click="send()"
              >
                <span> Enviar </span>
              </q-btn>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Banner from "../../components/Sections/Banner.vue";

  export default {
    data() {
      return {
        form: {
          name: "",
          cpf: "",
          email: ""
        },
        enable: false,
        formActive: false,
        topic1: null,
        topic2: null,
        itemsRelashionship: [
          {
            id: 1,
            name: "Cliente"
          },
          {
            id: 2,
            name: "Colaborador(a)"
          },
          {
            id: 3,
            name: "Ex-Colaborador(a)"
          },
          {
            id: 4,
            name: "Fornecedor(a) / Prestador(a) de Serviço"
          },
          {
            id: 5,
            name: "Candidato(a) a vaga de emprego"
          }
        ],
        requests: [
          {
            id: 1,
            name:
              "Quero a confirmação se há existência do tratamento dos meus dados"
          },
          {
            id: 2,
            name: "Quero saber quais dados pessoais possuem sobre mim"
          },
          {
            id: 3,
            name:
              "Quero solicitar a correção ou atualização dos meus dados pessoais"
          },
          {
            id: 4,
            name: "Quero solicitar a portabilidade dos meus dados pessoais"
          },
          {
            id: 5,
            name: "Quero solicitar a exclusão dos meus dados pessoais"
          },
          {
            id: 6,
            name: "Quero informações sobre o uso compartilhado dos meus dados"
          },
          {
            id: 7,
            name:
              "Quero informações sobre a possibilidade de não fornecer consentimento"
          },
          {
            id: 8,
            name: "Quero revogar um consentimento"
          },
          {
            id: 9,
            name:
              "Quero informações sobre as decisões tomadas com base em tratamento automatizado"
          }
        ]
      };
    },
    components: {
      Banner
    },
    methods: {
      enableQuestions() {
        this.enable = true;
      },
      open() {
        window.open("https://api.whatsapp.com/send?phone=5532984020650");
      },
      setRelashionship(e, item) {
        if (this.topic1 != null) {
          this.removeClass();
        }
        this.topic1 = item;
        e.target.classList.add("selected");
        this.enableFormToSend();
      },
      setRequest(e, item) {
        if (this.topic2 != null) {
          this.removeClassRequest();
        }
        this.topic2 = item;
        e.target.classList.add("selected-request");
        this.enableFormToSend();
      },
      removeClass() {
        var element = document.querySelector("ul > li.selected");
        element.classList.remove("selected");
      },
      removeClassRequest() {
        var element = document.querySelector("ul > li.selected-request");
        element.classList.remove("selected-request");
      },
      enableFormToSend() {
        if (this.checkOptionsSelected()) {
          this.formActive = true;
        }
      },
      checkOptionsSelected() {
        if (this.topic1 != null && this.topic2 != null) {
          return true;
        } else {
          return false;
        }
      },
      send() {
        if (this.form.name == "") {
          alert("Por favor preencha seu nome completo.");
          return;
        }

        if (this.form.cpf == "") {
          alert("Por favor preencha seu cpf.");
          return;
        }

        if (this.form.email == "") {
          alert("Por favor preencha seu e-mail.");
          return;
        }
        if (!this.validateEmail()) {
          alert("Por favor preencha um e-mail valído.");
          return;
        }
      },
      validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.form.email).toLowerCase());
      }
    }
  };
</script>

<style scoped lang="scss">
  /* Accent */
  .politica-btn {
    width: 400px;
  }
  .topic {
    font-weight: bold;
    color: #299dd5;
  }
  .topic span {
    color: red;
  }
  .box-items ul {
    display: flex;
    flex-wrap: wrap;
  }
  .box-items ul li {
    margin-right: 5px;
    border: 1px solid grey;
    padding: 12px 10px 0px 10px;
    border-radius: 8px;
    width: 150px;
    text-align: center;
    color: grey;
    background-color: #ddd3;
    cursor: pointer;
  }
  .selected {
    margin-right: 5px !important;
    border: 1px solid #299dd5 !important;
    padding: 12px 10px 0px 10px !important;
    border-radius: 8px !important;
    width: 150px !important;
    text-align: center !important;
    cursor: pointer !important;
    background-color: #299dd5 !important;
    color: #fff !important;
  }

  .selected-request {
    margin-right: 5px !important;
    border: 1px solid #299dd5 !important;
    padding: 12px 10px 0px 10px !important;
    border-radius: 8px !important;
    width: 150px !important;
    text-align: center !important;
    cursor: pointer !important;
    background-color: #299dd5 !important;
    color: #fff !important;
  }

  .mdi {
    font-size: 1.562em;
  }

  @media only screen and (max-width: 768px) {
    .contact-list {
      margin-left: 0px;
    }
  }
</style>
