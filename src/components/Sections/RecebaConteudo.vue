<template> 
  <section id="conteudo">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h3 class="text-secondary">{{title}}</h3>
           <p class="text-secondary">Ultrimagem – Ubá agora direto na sua caixa de e-mails! Para receber nosso conteúdo mensal, cadastre seus dados abaixo e saiba novidades da clínica em poucos cliques.</p>
        </div>
        <div class="col-md-3">
            <p class="text-secondary">Email:</p>
            <q-input placeholder="Digite seu e-mail" class="input-primary-default" filled v-model="email" />
        </div>
        <div class="col-md-1 send">
            <q-btn flat color="primary" label="Enviar" class="btn-submit" @click="send()"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Receba conteúdos",
      email: "",
    };
  },
  componentes: {},
  methods: {
      send() {
         console.log('ok');
      }
  }
};
</script>
<style scoped lang="scss">

#conteudo {
    height: 201px;
    background: #006AA1;
}
.send {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -9px;
}
.btn-submit {
    background: $primary !important;
    height: 40px;
    color: $secondary !important;
    text-transform: capitalize;
}


</style>