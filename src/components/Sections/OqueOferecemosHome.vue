<template> 
  <section id="oferecemos">
    <div class="container">
      <div class="row">
        <div class="col-md-12 main">
          <h2>{{title}}</h2>
           <p>{{subtitle}}</p>
        </div>

      </div>
      <div class="row">
            <div class="col-md-6 items q-px-md">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/oferecemosHome/item1.svg">
                    <q-card-section>
                        <h3 class="text-center">Exames por Imagem</h3>
                        <p class="text-center">Exames de alta qualidade e tecnologia. Laudos feitos por dois médicos radiologistas para um tratamento preciso e eficaz.</p>
                        <q-btn outline color="primary" class="button-primary-blue">
                            <span> Veja o que oferecemos </span>
                        <i class="mdi mdi-chevron-right" aria-hidden="true" ></i>
                        </q-btn>
                    </q-card-section>
                </q-card>
                
            </div>
            <div class="col-md-6 items q-px-md">
                <q-card class="my-card full-width" >
                    <img src="../../assets/img/components/oferecemosHome/item2.svg">
                    <q-card-section>
                        <h3 class="text-center">Possibilidade de convênios</h3>
                        <p class="text-center">Quer fazer parte dos convênios atendidos na Ultrimagem - Ubá? <strong>Saiba mais </strong></strong> informações através do número: (32) 3301-0155.</p>
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
      title: "O que oferecemos",
      subtitle: "Acolhimento através de um atendimento especializado e alta qualidade nos exames para proporcionar cuidado, bem-estar e qualidade de vida. Saiba mais."
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.my-card {
    img {
        max-height: 300px;
    }
    button {
        display: flex;
        justify-content: center;
        margin: auto;
    }
}

  

</style>