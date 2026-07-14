<template>
  <div>
    <Banner
      title="<strong> Lei Geral de Proteção de Dados!  </strong>"
      subtitle="Entre em contato com a Ultrimagem – Ubá através dos canais de comunicação facilitados para você ficar por dentro de tudo o que acontece na clínica."
      page="contato"
    >
    </Banner>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-5">
            <h2 class="text-weight-regular grey-text">
              Quer exercer seus direitos de titular relacionados aos seus dados
              pessoais e sensíveis?
            </h2>
            <p class="grey-text">
              Para requisitar direitos relacionados aos seus dados pessoais e
              sensíveis, clique no botão abaixo para visualizar as informações
              de contato.
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
              Quer saber mais sobre nossas políticas de dados pessoais e
              sensíveis?
            </h2>
            <p class="grey-text">
              Tenha acesso às nossas políticas na íntegra. Clique no botão
              abaixo para ter acesso aos documentos.
            </p>
            <div class="q-pb-md">
              <q-btn color="primary" class="button-secondary-blue politica-btn">
                <a class="text-secondary" @click="enableTerms()">
                  <span> Acesse aqui </span>
                </a>
              </q-btn>
            </div>
          </div>
        </div>
        <!-- Termos LGPD -->
        <div class="row justify-center" v-if="terms">
          <div class="col-md-6 q-pt-xl">
            <h3 class="text-weight-regular grey-text">
              Documentações Disponíveis
            </h3>
            <p>
              A
              <span class="text-weight-bold"> Ultrimagem LTDA </span>
              disponibiliza os seguintes meios para que você possa entrar em
              contato para exercer seus direitos de titular:
            </p>
            <div class="column justify-center grey-text">
              <a class="p-2 text-weight-regular cursor-pointer">
                - Código de Conduta.
                <a class="text-primary text-weight-bold"
                  >Acesse Aqui.</a
                ></a>
              <a class="p-2 text-weight-regular cursor-pointer">
                - Política de Entrega de Resultados de Exames.
                <a class="text-primary text-weight-bold"
                  >Acesse Aqui.</a
                ></a>
              <a class="p-2 text-weight-regular cursor-pointer">
                - Política de Mesa Limpa e Tela Limpa.
                <a class="text-primary text-weight-bold"
                  >Acesse Aqui.</a
                ></a>
              <a class="p-2 text-weight-regular cursor-pointer">
                - Política de Privacidade de Dados Pessoais.
                <a class="text-primary text-weight-bold" href="#/lgpd/codigo-de-conduta"
                  >Acesse Aqui.</a
                ></a>

            </div>
          </div>
        </div>

        <!-- Formulario LGPD -->
        <div class="formulario-lgpd" v-if="enable">
          <div class="formulario-conteudo">
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
                  :class="{ selected: topic1 === item.name }"
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
                  :class="{ 'selected-request': topic2 === item.name }"
                  @click="setRequest($event, item.name)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="form-action" v-if="formActive">
              <p class="topic">Seus dados, sua decisão:</p>
              <p class="grey-text">
                Com intuito de proteger seus dados pessoais de acessos não
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

          <aside class="encarregado-dados">
            <h3 class="encarregado-titulo">Encarregado de Dados</h3>
            <p class="encarregado-nome">Girceli Soares de Assis</p>
            <p class="encarregado-email">
              <a href="mailto:encarregadodedados@ultrimagemuba.com.br">encarregadodedados@ultrimagemuba.com.br</a>
            </p>

            <hr class="encarregado-divisor" />

            <p>Praça das Mercês, 88</p>
            <p>Centro</p>
            <p class="encarregado-cidade">Ubá – MG</p>
          </aside>
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
        email: "",
      },
      enable: false,
      terms: false,
      formActive: false,
      topic1: null,
      topic2: null,
      itemsRelashionship: [
        {
          id: 1,
          name: "Cliente",
        },
        {
          id: 2,
          name: "Colaborador(a)",
        },
        {
          id: 3,
          name: "Ex-Colaborador(a)",
        },
        {
          id: 4,
          name: "Fornecedor(a) / Prestador(a) de Serviço",
        },
        {
          id: 5,
          name: "Candidato(a) a vaga de emprego",
        },
      ],
      requests: [
        {
          id: 1,
          name: "Quero a confirmação se há existência do tratamento dos meus dados",
        },
        {
          id: 2,
          name: "Quero saber quais dados pessoais possuem sobre mim",
        },
        {
          id: 3,
          name: "Quero solicitar a correção ou atualização dos meus dados pessoais",
        },
        {
          id: 4,
          name: "Quero solicitar a portabilidade dos meus dados pessoais",
        },
        {
          id: 5,
          name: "Quero solicitar a exclusão dos meus dados pessoais",
        },
        {
          id: 6,
          name: "Quero informações sobre o uso compartilhado dos meus dados",
        },
        {
          id: 7,
          name: "Quero informações sobre a possibilidade de não fornecer consentimento",
        },
        {
          id: 8,
          name: "Quero revogar um consentimento",
        },
        {
          id: 9,
          name: "Quero informações sobre as decisões tomadas com base em tratamento automatizado",
        },
      ],
    };
  },
  components: {
    Banner,
  },
  mounted() {
    // console.log(emailjs);
  },
  methods: {
    enableTerms() {
      this.terms = true;
      this.enable = false;
    },
    enableQuestions() {
      this.enable = true;
      this.terms = false;
    },
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    },
    setRelashionship(e, item) {
      this.topic1 = item;
      this.enableFormToSend();
    },
    setRequest(e, item) {
      this.topic2 = item;
      this.enableFormToSend();
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
      var templateParams = {
        type: this.topic1,
        name: this.form.name,
        cpf: this.form.cpf,
        email: this.form.email,
        action: this.topic2,
      };
      emailjs.send("service_1knd78c", "template_0q5bzuq", templateParams).then(
        function (response) {
          alert(
            "Solicitação enviado com sucesso! Em breve nossa equipe ira entrar em contato!"
          );
          window.reload();
        },
        function (error) {
          alert(
            "Não foi possivel enviar sua solicitação, tente novamente mais tarde!"
          );
        }
      );
    },
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.form.email).toLowerCase());
    },
  },
};
</script>
  
  <style scoped lang="scss">
/* Accent */
.politica-btn {
  width: 400px;
}
.topic {
  font-weight: bold;
  color: #0a33a3;
}
.topic span {
  color: red;
}

.box-items {
  margin-bottom: 28px;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    min-height: 64px;
    padding: 12px 10px;
    border: 1px solid grey;
    border-radius: 8px;
    text-align: center;
    color: grey;
    background-color: #ddd3;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  }

  li.selected,
  li.selected-request {
    border-color: #0a33a3;
    background-color: #0a33a3;
    color: #fff;
  }
}

.formulario-lgpd {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 56px;
  padding-top: 48px;
}

.formulario-conteudo {
  flex: 1 1 480px;
  max-width: 600px;
}

.mdi {
  font-size: 1.562em;
}

.encarregado-dados {
  flex: 1 1 300px;
  max-width: 340px;
  padding-left: 40px;
  border-left: 1px solid #eee;
  color: #333;
  font-size: 14px;
  line-height: 1.6;
}

@media only screen and (max-width: 1023px) {
  .encarregado-dados {
    max-width: 100%;
    padding-left: 0;
    padding-top: 24px;
    border-left: none;
    border-top: 1px solid #eee;
  }
}

.encarregado-dados p {
  margin: 0 0 4px;
}

.encarregado-dados a {
  color: inherit;
  text-decoration: none;
}

.encarregado-titulo {
  margin: 0 0 12px;
  font-size: 28px;
  font-weight: 800;
  color: #000;
}

.encarregado-nome {
  font-weight: 700;
  font-size: 16px;
  color: #000;
}

.encarregado-email {
  margin-bottom: 16px;
}

.encarregado-divisor {
  border: none;
  border-top: 1px solid #ddd;
  margin: 0 0 12px;
}

.encarregado-cidade {
  font-weight: 700;
}

@media only screen and (max-width: 768px) {
  .contact-list {
    margin-left: 0px;
  }

  .box-items li {
    width: calc(50% - 5px);
  }
}

@media only screen and (max-width: 480px) {
  .box-items li {
    width: 100%;
  }
}
</style>