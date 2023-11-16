<template>
  <section id="lead" class="q-py-md">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-12 text-secondary q-pr-xl">
          <h3>Receba conteúdos</h3>
          <p>
            Ultrimagem – Ubá agora direto na sua caixa de e-mails! Para receber
            nosso conteúdo, cadastre seus dados abaixo e saiba novidades da
            clínica em poucos cliques.
          </p>
        </div>

        <div class="col-md-5 col-12">
          <p class="text-secondary q-mt-md">Email:</p>
          <div class="full-width flex">
            <q-input
              placeholder="Digite aqui seu e-mail"
              type="email"
              bg-color="white"
              class="q-mr-xs"
              filled
              height="48px"
              v-model="email"
              style="width: 70%"
              inputmode="email"
              required
            />

            <q-btn
              flat
              color="primary"
              no-caps
              label="Enviar"
              class="btn-submit bg-secondary"
              @click="checkEmail()"
            />
          </div>
          <!-- <span class="text-red"> Aguardando e-mail de encaminhamento* </span> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    checkEmail() {
      if (this.email == "") {
        this.$q.notify({
          position: "top",
          color: "red",
          message: "Por favor informe seu e-mail!",
        });
        return;
      }
      if (!this.validateEmail()) {
        this.$q.notify({
          position: "top",
          color: "red",
          message: "Por favor informe um e-mail válido!",
        });
        return;
      }
      this.send();
    },
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    send() {
      let data = {
        email: this.email,
        name: "Lead Anonimo",
        type: 1,
      };
      fetch("https://ec2-18-188-194-174.us-east-2.compute.amazonaws.com/api/leads", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          name: data.email,
          type: data.type,
        }),
      })
        .then((res) => {
          this.$q.notify({
            position: "top",
            color: "green",
            message: "Obrigado por se inscrever. Seu informativo será baixado!",
          });
          this.downloadLast();
        })
        .then((res) => console.log(res))
        .catch((e) => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: e.response.data.error,
          });
        });
    },
    downloadLast() {
        
        var link = document.createElement("a");
        link.href =
          "https://ec2-18-188-194-174.us-east-2.compute.amazonaws.com/api/download-last"
          ;
        link.download = "ultrimagem.pdf";
        link.dispatchEvent(new MouseEvent("click"));
      
  }
}
};
</script>
<style>
#lead {
  background: #2849a3;
}
</style>
