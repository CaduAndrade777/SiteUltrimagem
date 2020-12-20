<template>
  <div>
    <Banner> </Banner>
    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-7">
            <h2>Um jeito prático de comunicar</h2>
            <p>
              Confira nossos horários de atendimento e formas de falar conosco
              de onde estiver. Horário de funcionamento de
              <strong> segunda a sexta: </strong> recepção de 07:00 às 19:30 e
              telefone de 07:00 às 18:00. E aos <strong> sabádos </strong> de
              07:30 às 11:00.
            </p>

            <q-chip
              dense
              color="positive"
              text-color="white"
              class="q-px-md"
              style="font-size: 14px"
            >
              estamos abertos
            </q-chip>

            <div class="q-pt-xl q-pb-md">
              <q-btn outline color="primary" class="button-secondary-blue ">
                <i class="mdi mdi-whatsapp q-mr-xs " aria-hidden="true"></i>
                <span> (32) 98402-0650 </span>
              </q-btn>

              <div
                v-for="(item, index) in contact"
                :key="item.id"
                class="q-mb-md flex q-ml-md contact-list"
              >
                <i
                  :class="item.icon"
                  class="text-primary q-mr-xs "
                  aria-hidden="true"
                ></i>
                <span> {{ item.text }} </span>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div
              class="q-pt-lg"
              style="display:flex; justify-content: flex-end"
            >
              <q-img
                src="../../assets/img/pages/contato/logo-u.svg"
                alt="Ultrimagem"
                style="max-width:400px"
              />
            </div>
          </div>
        </div>

        <h3
          class="bg-primary text-secondary text-center q-py-md rounded-borders"
        >
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
  data() {
    return {
      contact: [
        { icon: "", text: "" },
        { icon: "mdi mdi-phone-in-talk-outline", text: "(32) 3532-5052" },
        {
          icon: "mdi mdi-email-outline",
          text: "ultrimagem@ultrimagemuba.com.br"
        },
        {
          icon: "mdi mdi-map-marker-outline",
          text: "Praça Mercês, 88 - Centro, Ubá - MG"
        }
      ]
    };
  },
  components: {
    Banner
  },

  mounted() {
    // The location of Uluru
    const uluru = { lat: -21.1179656, lng: -42.9478683 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
};
</script>

<style scoped lang="scss">
/* Accent */

#map {
  height: 18.75em;
  width: 100%;
  margin-top: -1em;
}

.mdi {
  font-size: 1.562em;
}

/* Geral */
* {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1em;
  line-height: 24px;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 1em;
}

h2 {
  font-family: Montserrat, sans-serif;
  font-size: 2.25em;
  line-height: 44px;

  margin-bottom: 34px;
}

section {
  padding: 75px 0px 117px;
}

.container {
  max-width: 1300px;
  padding: 0em 1em;
  margin: auto;
}

.button-secondary-blue {
  font-size: 1em;
  border-radius: 10px;

  text-transform: lowercase;

  :hover {
    background: $primary;
    color: $secondary;

    transition: 0.5s;
  }
}

@media only screen and (max-width: 768px) {
  .contact-list {
    margin-left: 0px;
  }
}
</style>
