<template>
  <section id="oferecemos">
    <div class="container">
      <div class="row justify-center q-mb-lg">
        <div class="col-md-6 text-center">
          <h2>O que oferecemos</h2>
          <p>
            Acolhimento através de um atendimento especializado e alta qualidade
            nos exames para proporcionar cuidado, bem-estar e qualidade de vida.
            Saiba mais.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-6 q-px-md q-mb-md">
          <q-card class="my-card q-py-md full-height">
            <img
              src="../../assets/img/components/oferecemosHome/examesImagem.svg"
              class="q-mx-auto"
              style="max-width: 400px;"
            />
            <q-card-section class="text-center">
              <h3>Exames por Imagem</h3>
              <p>
                Exames de alta qualidade e tecnologia. Laudos feitos por dois
                médicos radiologistas para um tratamento preciso e eficaz.
              </p>
              <q-btn
                text-color="secondary"
                unelevated
                color="primary"
                class="button-primary"
                to="o-que-oferecemos"
              >
                Veja o que oferecemos >
              </q-btn>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-md-6 col-sm-6 q-px-md q-mb-md">
          <q-card class="my-card  q-pt-md full-height">
            <img
              src="../../assets/img/components/oferecemosHome/opConvenios.svg"
              class="q-mx-auto"
              style="max-width: 346px;"
            />
            <q-card-section class="text-center">
              <h3>Possibilidade de convênios</h3>
              <p>
                Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá?
                <span>Saiba mais </span> informações através do número: (32)
                3301-0155.
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  componentes: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
#oferecemos {
  background-color: #f4f7f9;
}
</style>
