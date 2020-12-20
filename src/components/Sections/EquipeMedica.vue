<template> 
  <section id="equipeMedica">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="titleEquipe"></h1>
          <p>
              Cras mattis vestibulum quam missão mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec tincidunt pretium, ipsum ante scelerisque massa, visão sed semper purus augue eget diam.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12">

        <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="501px"
        class=""
      >

      <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/equipeMedica/bruno.jpg">
                    <q-card-section>
                        <h3 class="text-center">DR. BRUNO LEITE</h3>
                        <p class="text-center">Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? <strong>Saiba mais </strong></strong> informações através do número: (32) 3301-0155.</p>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/equipeMedica/camila.jpg">
                    <q-card-section>
                        <h3 class="text-center">Possibilidade de convênios</h3>
                        <p class="text-center">Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? <strong>Saiba mais </strong></strong> informações através do número: (32) 3301-0155.</p>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="pag2" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/equipeMedica/carlos.jpg">
                    <q-card-section>
                        <h3 class="text-center">Possibilidade de convênios</h3>
                        <p class="text-center">Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? <strong>Saiba mais </strong></strong> informações através do número: (32) 3301-0155.</p>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/equipeMedica/caroline.jpg">
                    <q-card-section>
                        <h3 class="text-center">Possibilidade de convênios</h3>
                        <p class="text-center">Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? <strong>Saiba mais </strong></strong> informações através do número: (32) 3301-0155.</p>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        </q-carousel>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleEquipe: " <strong> Equipe médica  </strong>",
      slide: 'style',
      "lorem": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
#equipeMedica {
    img {
        max-width: 300px;;
    }
}
</style>
