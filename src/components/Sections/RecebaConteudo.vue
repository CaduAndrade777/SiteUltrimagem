<template>
  <section id="conteudo" class="q-py-md">
    <div class="container">
      <div class="row justify-between">
        <div class="col-md-7 col-12 text-secondary">
          <h3>Receba conteúdos</h3>
          <p>
            Ultrimagem – Ubá agora direto na sua caixa de e-mails! Para receber
            nosso conteúdo mensal, cadastre seus dados abaixo e saiba novidades
            da clínica em poucos cliques.
          </p>
        </div>

        <div class="col-md-4 col-12">
          <p class="text-secondary q-mt-md">Email:</p>
          <div class="full-width row">
            <q-input
              placeholder="Digite seu e-mail"
              type="email"
              bg-color="white"
              class="q-mr-xs"
              filled
              v-model="email"
              style=" width:77%"
              inputmode="email"
            />

            <q-btn
              flat
              color="primary"
              label="Enviar"
              class="btn-submit bg-secondary"
              @click="send()"
            />
          </div>
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
  componentes: {},
  methods: {
    send() {
      console.log("ok");
    }
  }
};
</script>
<style scoped lang="scss">
#conteudo {
  background: #006aa1;

  .send {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -9px;

    .btn-submit {
      height: 40px;
      text-transform: capitalize;
    }
  }
}
</style>
