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
              style=" width:70%; "
              inputmode="email"
            />

            <q-btn
              flat
              color="secondary"
              no-caps
              label="Enviar"
              class="btn-submit bg-primary"
              @click="send()"
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
      email: ""
    };
  },
  methods: {
    send() {
      console.log("ok");
    }
  }
};
</script>
<style>
#lead {
  background: #006aa1;
}
</style>
