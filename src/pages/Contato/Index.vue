<template>
  <div>
    <Header></Header>

    <Banner> </Banner>
    <div class="container">
      <section>
        <h2>Um jeito prático de comunicar</h2>

        <div class="contact-info-primary">
          <p>
            Horário de funcionamento da recepção 07:00 às 19:30 de segunda a
            sexta - através da linha telefônica atendemos até as 18:00. E de
            07:30 às 11:00 nos sabádos.
          </p>
          <q-chip dense color="positive" text-color="white" class="q-px-md">
            Estamos abertos
          </q-chip>
        </div>

        <ul>
          <li>(32) 99131-6663</li>
          <li>(32) 3532-5052</li>
          <li>ultrimagem@ultrimagemuba.com.br</li>
          <li>Praça Mercês, 88 - Centro, Ubá - MG</li>
        </ul>

        <div class="contact-map">
          <div class="contact-map-title q-py-xs">
            <h3 class="text-center">Veja no mapa</h3>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import Header from "../../components/Navs/Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    Header
  }
};
</script>
<style scoped>
/* Accent */
.contact-map-title {
  background-color: #d9f0ff;
}

/* Geral */
* {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
}

ul {
  list-style: none;
}

ul li {
  margin-bottom: 16px;
}

h1 {
  font-family: Montserrat, sans-serif;
  font-size: 36px;
  line-height: 44px;

  margin-bottom: 34px;
}

h2 {
  font-size: 24px;
  line-height: 32px;

  margin-bottom: 39px;
}

section {
  padding: 115px 0px 117px;
}

.container {
  max-width: 1300px;
  margin: auto;
}

.button-secondary {
  font-size: 16px;
  border-radius: 10px;

  text-transform: lowercase;
}
</style>
