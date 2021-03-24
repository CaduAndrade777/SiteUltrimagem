<template>
  <section id="give">
    <div class="container">
      <div class="row justify-center q-mb-lg">
        <div class="col-md-6 text-center">
          <h2 class="text-weight-regular grey-text">O que oferecemos</h2>
          <p class="grey-text">
            Acolhimento através de um atendimento especializado e alta qualidade
            nos exames para proporcionar cuidado, bem-estar e qualidade de vida.
            Saiba mais.
          </p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-6 col-sm-6 q-px-md q-mb-md"
          v-for="(item, index) in servicos"
          :key="index"
        >
          <q-card class="my-card q-py-md full-height">
            <img
              alt="Serviços Ultrimagem"
              :src="
                require(`../../assets/img/components/oferecemosHome/${item.img}`)
              "
              class="q-mx-auto"
              :class="
                item.img == 'examesImagem.svg' ? 'width-img-1' : 'width-img-2'
              "
            />

            <q-card-section class="text-center">
              <h3 class="text-weight-regular grey-text">{{ item.title }}</h3>
              <p class="grey-text">
                {{ item.description }}
              </p>
              <q-btn
                v-if="item.btnTo"
                text-color="secondary"
                unelevated
                color="primary"
                class="button-primary"
                :to="item.btnTo"
                :label="item.btnLabel"
              />
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
    return {
      servicos: [
        {
          id: 1,
          title: "Exames por Imagem",
          img: "examesImagem.svg",
          description:
            "Exames de alta qualidade e tecnologia para avaliar possíveis anomalias no corpo humano, auxiliando para um tratamento preciso e eficaz.",
          btnLabel: "Veja o que oferecemos >",
          btnTo: "exames-e-convenios"
        },
        {
          id: 2,
          title: "Possibilidade de convênios",
          img: "opConvenios.svg",
          description:
            "Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? Saiba mais informações através do número: (32) 3301-0155."
        }
      ]
    };
  }
};
</script>

<style>
#give {
  background-color: #f4f7f9;
}
#give .width-img-1 {
  max-width: 400px;
}
#give .width-img-2 {
  max-width: 346px;
}
</style>
