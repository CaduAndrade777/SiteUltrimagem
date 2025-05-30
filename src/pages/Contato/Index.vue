<template>
  <div>
    <Banner
      title="<strong> Seja bem-vindo!  </strong>"
      subtitle="Entre em contato com a Ultrimagem – Ubá através dos canais de comunicação facilitados para você ficar por dentro de tudo o que acontece na clínica."
      page="contato"
    />

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-7 col-xs-12">
            <h2 class="text-h5 text-weight-regular text-primary q-mb-sm">
              Um jeito prático de comunicar
            </h2>
            <p class="text-grey-8">
              Confira nossos horários de atendimento e formas de falar conosco de onde estiver.
              Horário de funcionamento de
              <strong>segunda a sexta:</strong> recepção de 07:00 às 19:30 e telefone de 07:00 às 18:00.
              E aos <strong>sábados</strong> de 07:30 às 11:00.
            </p>

            <q-chip
              dense
              :color="closed ? 'red' : 'positive'"
              text-color="white"
              class="q-px-md q-mb-md"
              style="font-size: 14px"
            >
              {{ availability }}
            </q-chip>

            <div class="q-pt-md">
              <q-btn
                outline
                color="primary"
                class="q-mb-md"
                @click="openWhatsApp"
                aria-label="Abrir WhatsApp para contato"
              >
                <i class="mdi mdi-whatsapp q-mr-xs" aria-hidden="true"></i>
                (32) 98402-0650
              </q-btn>

              <div
                v-for="(item, index) in contact"
                :key="index"
                class="q-mb-sm flex items-center text-grey-8"
              >
                <i
                  :class="item.icon"
                  class="text-primary q-mr-sm"
                  aria-hidden="true"
                ></i>
                <span>{{ item.text }}</span>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-xs-12 text-center q-mt-md q-mt-none-md">
            <q-img
              src="../../assets/img/pages/contato/ultrinho-contato.png"
              alt="Ultrimagem Ubá"
              style="max-width: 400px; width: 100%; height: auto;"
              loading="lazy"
            />
          </div>
        </div>

        <h3 class="bg-primary text-secondary text-center q-py-md rounded-borders q-mt-xl">
          Veja no mapa
        </h3>
        <div id="map"></div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";

export default {
  name: "ContatoPage",
  components: {
    Banner,
  },
  data() {
    return {
      contact: [
        { icon: "mdi mdi-phone-in-talk-outline", text: "(32) 3531-5783" },
        { icon: "mdi mdi-phone-in-talk-outline", text: "(32) 3301-0150" },
        {
          icon: "mdi mdi-email-outline",
          text: "ultrimagem@ultrimagemuba.com.br",
        },
        {
          icon: "mdi mdi-map-marker-outline",
          text: "Praça Mercês, 88 - Centro, Ubá - MG",
        },
      ],
      availability: "estamos abertos",
      closed: false,
    };
  },
  created() {
    this.checkAvailability();
  },
  mounted() {
    this.initMap();
  },
  methods: {
    checkAvailability() {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();

      if (day === 0 || hour < 7 || hour >= 18) {
        this.availability = "estamos fechados";
        this.closed = true;
      }
    },
    openWhatsApp() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650", "_blank");
    },
    initMap() {
      const uluru = { lat: -21.1179656, lng: -42.9478683 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
      });
      new google.maps.Marker({
        position: uluru,
        map,
      });
    },
  },
};
</script>

<style scoped lang="scss">
#map {
  height: 18.75em;
  width: 100%;
  margin-top: 1em;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.mdi {
  font-size: 1.3em;
}

@media only screen and (max-width: 768px) {
  .contact-list {
    margin-left: 0;
    flex-wrap: wrap;
  }
}
</style>
