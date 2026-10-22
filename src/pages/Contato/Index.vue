<template>
  <div class="contact-page">
    <!-- Banner da página -->
    <Banner
      title="<strong>Seja bem-vindo!</strong>"
      subtitle="Entre em contato com a Ultrimagem – Ubá através dos canais de comunicação facilitados para você ficar por dentro de tudo o que acontece na clínica."
      page="contato"
    />

    <div class="container">
      <section class="contact-section">
        <!-- Informações de contato -->
        <div class="row items-center q-col-gutter-lg">
          <div class="col-md-7 col-xs-12">
            <h2 class="text-h5 text-weight-regular text-primary q-mb-sm">
              Um jeito prático de comunicar
            </h2>

            <p class="text-grey-8 contact-description">
              Confira nossos horários de atendimento e formas de falar conosco
              de onde estiver. Horário de funcionamento de
              <strong>segunda a sexta:</strong> recepção de 07:00 às 19:30 e
              telefone de 07:00 às 18:00. E aos
              <strong>sábados</strong> de 07:30 às 11:00.
            </p>

            <!-- Status de funcionamento -->
            <q-chip
              dense
              :color="closed ? 'red' : 'positive'"
              text-color="white"
              class="q-px-md q-mb-md availability-chip"
            >
              <q-icon
                :name="closed ? 'mdi-clock-outline' : 'mdi-check-circle-outline'"
                size="16px"
                class="q-mr-xs"
              />
              {{ availability }}
            </q-chip>

            <!-- WhatsApp -->
            <div class="q-pt-sm">
              <q-btn
                outline
                color="primary"
                class="whatsapp-button q-mb-md"
                no-caps
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp para contato com a Ultrimagem"
              >
                <i
                  class="mdi mdi-whatsapp q-mr-sm"
                  aria-hidden="true"
                ></i>
                (32) 98402-0650
              </q-btn>

              <!-- Outros contatos -->
              <div
                v-for="(item, index) in contact"
                :key="index"
                class="contact-item q-mb-md"
              >
                <i
                  :class="item.icon"
                  class="text-primary contact-item-icon"
                  aria-hidden="true"
                ></i>

                <a
                  v-if="item.href"
                  :href="item.href"
                  :target="item.external ? '_blank' : null"
                  :rel="item.external ? 'noopener noreferrer' : null"
                  class="contact-item-text"
                >
                  {{ item.text }}
                </a>

                <span
                  v-else
                  class="contact-item-text"
                >
                  {{ item.text }}
                </span>
              </div>
            </div>
          </div>

          <!-- Imagem da clínica -->
          <div class="col-md-5 col-xs-12 text-center">
            <q-img
              src="../../assets/img/pages/contato/ultrinho-contato.png"
              alt="Ultrinho, personagem da Ultrimagem"
              class="contact-character"
              loading="lazy"
              contain
            />
          </div>
        </div>

        <!-- Mapa -->
        <section class="map-section">
          <h3
            class="map-heading bg-primary text-white text-center q-py-md"
          >
            <i
              class="mdi mdi-map-marker-outline q-mr-sm"
              aria-hidden="true"
            ></i>
            Veja no mapa
          </h3>

          <div class="map-wrapper">
            <iframe
              title="Mapa de localização da Ultrimagem em Ubá"
              src="https://maps.google.com/maps?q=Pra%C3%A7a%20Merc%C3%AAs%2C%2088%2C%20Centro%2C%20Ub%C3%A1%2C%20MG%2C%20Brasil&z=16&output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="map-address">
            <i
              class="mdi mdi-map-marker-outline text-primary"
              aria-hidden="true"
            ></i>

            <span>Praça Mercês, 88 - Centro, Ubá - MG</span>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a%20Merc%C3%AAs%2C%2088%2C%20Centro%2C%20Ub%C3%A1%2C%20MG%2C%20Brasil"
              target="_blank"
              rel="noopener noreferrer"
              class="map-directions"
            >
              Como chegar
              <i
                class="mdi mdi-open-in-new q-ml-xs"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";

export default {
  name: "ContatoPage",

  components: {
    Banner
  },

  data() {
    return {
      contact: [
        {
          icon: "mdi mdi-phone-in-talk-outline",
          text: "(32) 3531-5783",
          href: "tel:+553235315783"
        },
        {
          icon: "mdi mdi-phone-in-talk-outline",
          text: "(32) 3301-0150",
          href: "tel:+553233010150"
        },
        {
          icon: "mdi mdi-email-outline",
          text: "ultrimagem@ultrimagemuba.com.br",
          href: "mailto:ultrimagem@ultrimagemuba.com.br"
        },
        {
          icon: "mdi mdi-map-marker-outline",
          text: "Praça Mercês, 88 - Centro, Ubá - MG"
        }
      ],

      availability: "",
      closed: true
    };
  },

  computed: {
    whatsappUrl() {
      return "https://api.whatsapp.com/send?phone=5532984020650";
    }
  },

  created() {
    this.checkAvailability();
  },

  methods: {
    checkAvailability() {
      // Utiliza o horário local do navegador.
      // O horário de funcionamento é considerado de segunda a sábado.
      const now = new Date();
      const day = now.getDay();
      const minutes = now.getHours() * 60 + now.getMinutes();

      const weekday = day >= 1 && day <= 5;
      const saturday = day === 6;

      const receptionOpen =
        (weekday && minutes >= 420 && minutes < 1170) ||
        (saturday && minutes >= 450 && minutes < 660);

      this.closed = !receptionOpen;
      this.availability = receptionOpen
        ? "Estamos abertos"
        : "Estamos fechados";
    }
  }
};
</script>

<style scoped lang="scss">
.contact-page {
  width: 100%;
  color: #3d4856;
}

.contact-section {
  padding-top: 32px;
  padding-bottom: 40px;
}

.contact-description {
  font-size: 15px;
  line-height: 1.8;
}

.availability-chip {
  font-size: 13px;
  font-weight: 600;
}

.whatsapp-button {
  min-height: 42px;
  border-radius: 8px;
  font-weight: 600;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
  line-height: 1.7;
}

.contact-item-icon {
  flex: 0 0 22px;
  margin-top: 3px;
  font-size: 20px;
}

.contact-item-text {
  min-width: 0;
  color: #596575;
  overflow-wrap: anywhere;
  text-decoration: none;
}

a.contact-item-text:hover {
  color: var(--q-color-primary, #1976d2);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact-character {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Seção do mapa */
.map-section {
  margin-top: 40px;
}

.map-heading {
  margin: 0 0 16px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
  background: #f0f3f6;
  border: 1px solid #e3e8ee;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.map-wrapper iframe {
  display: block;
  width: 100%;
  height: 100%;
}

.map-address {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
  color: #596575;
  font-size: 14px;
  line-height: 1.6;
}

.map-address > .mdi {
  font-size: 20px;
}

.map-directions {
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  color: var(--q-color-primary, #1976d2);
  font-weight: 600;
  text-decoration: none;
}

.map-directions:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Tablets */
@media (max-width: 1023px) {
  .contact-section {
    padding-top: 24px;
  }

  .contact-character {
    max-width: 340px;
  }

  .map-wrapper {
    height: 320px;
  }
}

/* Celulares */
@media (max-width: 599px) {
  .contact-section {
    padding-top: 20px;
    padding-bottom: 28px;
  }

  .contact-description {
    font-size: 14px;
  }

  .contact-character {
    max-width: 260px;
    margin-top: 12px;
  }

  .map-section {
    margin-top: 28px;
  }

  .map-heading {
    padding: 14px 10px;
    font-size: 18px;
  }

  .map-wrapper {
    height: 280px;
    border-radius: 8px;
  }

  .map-address {
    align-items: flex-start;
    font-size: 13px;
  }

  .map-directions {
    width: 100%;
    margin-left: 30px;
  }
}
</style>
