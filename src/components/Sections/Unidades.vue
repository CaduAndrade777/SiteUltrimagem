<template>
  <section id="oferecemos">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <q-img
            class="q-mr-sm units-img"
            src="../../assets/img/components/oquesomos/image.svg"
          />
        </div>

        <div class="col-md-6 q-px-lg col-sm-6 col-xs-12">
          <h2 class="q-mb-none q-mb-md text-weight-regular grey-text">
            Nossas Unidades
          </h2>

          <q-img
            class="q-mb-sm lt-sm "
            src="../../assets/img/components/oquesomos/image.svg"
          />

          <div
            class="text-secondary q-py-xs q-px-xl bg-primary rounded-borders units-main"
          >
            <h2 class="q-mb-lg">
              Ubá
            </h2>
            <p>
              <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
              Praça Mercês, 88 - Centro, Ubá - MG
            </p>
            <p>
              <i class="mdi mdi-phone-outline" aria-hidden="true"></i>
              (32) 3532-5783
            </p>
          </div>

          <q-timeline color="info" class="q-pt-sm">
            <q-timeline-entry
              :title="item.name"
              v-for="(item, index) in units"
              :key="index"
              class="q-pb-none grey-text"
            >
              <p class="q-ma-none grey-text">
                <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
                {{ item.address }}
              </p>

              <p class="q-ma-none grey-text">
                <i class="mdi mdi-phone-outline" aria-hidden="true"></i>
                {{ item.phone }}
              </p>
            </q-timeline-entry>
          </q-timeline>
          <p class="q-ma-none grey-text">
            Acesse
            <a href="http://www.ultrimagemjf.com.br/">
              www.ultrimagemjf.com.br
            </a>
            e tenha mais informações sobre as unidades de Juiz de Fora.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      units: [
        {
          name: "Castelinho ",
          address:
            "Avenida Barão do Rio Branco, 3029, Centro - Juiz de Fora (MG)",
          phone: "(32) 3257-4000"
        },
        {
          name: "Centro Médico Rio Branco",
          address:
            "Avenida Barão do Rio Branco, 1034, Centro - Juiz de Fora (MG)",
          phone: "(32) 3213-2349"
        },
        {
          name: "Sabin",
          address:
            "Rua Doutor Edgard Carlos Pereira, 600, Santa Teresa  - Juiz de Fora (MG)",
          phone: "(32) 3218-3418 | (32) 3211-3979"
        },
        {
          name: "Santa Casa ",
          address:
            "Avenida Barão do Rio Branco, 3353, Centro  - Juiz de Fora (MG)",
          phone: "(32) 3212-9404 | (32) 3218-6670"
        }
      ],
      subtitle:
        "Acolhimento através de um atendimento especializado e alta qualidade nos exames para proporcionar cuidado, bem-estar e qualidade de vida. Saiba mais."
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
.q-timeline__title {
  margin-bottom: 13px;
}

.units-main {
  position: relative;
  left: -50px;

  h2 {
    line-height: 0px;
  }

  p {
    font-size: 1.5em;
  }
}

@media only screen and (max-width: 425px) {
  .units-img {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .units-main {
    left: 0px;
    padding: 10px 15px;
    p {
      font-size: 1em;
    }
  }
}
</style>
