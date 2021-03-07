<template>
  <footer class="bg-info text-secondary q-py-xl" id="footer">
    <q-toolbar>
      <div class="container">
        <div class="row">
          <!-- LOGO -->
          <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12 q-mb-lg q-px-sm">
            <q-btn flat to="/" class="footer-logo-mobile">
              <img
                src="../../assets/img/template/logo-blue-light-vertical.svg"
                alt="Logo"
                class="footer-logo"
              />
            </q-btn>
          </div>

          <!-- EXAMES - COLUNA 1 -->
          <div class="col-md-2 col-lg-2 col-sm-4 col-xs-12 ">
            <q-toolbar-title class="footer-title">Exames</q-toolbar-title>
            <a
              v-for="(item, index) in exames"
              :key="index"
              class="text-secondary footer-item"
              :href="item.link"
            >
              - {{ item.name }}
            </a>
          </div>

          <!-- EXAME 2 - COLUNA 2 -->
          <div
            class="q-pt-xl col-md-2 col-lg-2 col-sm-4 col-xs-12 q-mb-lg footer-item-column-2"
          >
            <a
              v-for="(item, index) in exames2"
              :key="index"
              class="text-secondary footer-item "
              :href="item.link"
            >
              - {{ item.name }}
            </a>
          </div>

          <!-- DICAS DE SAÚDE E REDES SOCIAIS -->
          <div class="col-md-3 col-lg-3 col-sm-4 col-xs-12">
            <q-toolbar-title class="footer-title"
              >Dicas de Saúde</q-toolbar-title
            >

            <a class="text-secondary  footer-item" href="#/blog">
              - Blog Ultrimagem Ubá
            </a>

            <q-toolbar-title class="footer-title q-px-none q-pt-md"
              >Redes Sociais</q-toolbar-title
            >
            <q-btn
              outline
              color="secondary"
              class="q-mr-md q-mb-lg button-secondary"
              v-for="(item, index) in buttonsSocial"
              :key="item.id"
              @click="openSocial(item.url)"
            >
              <a :href="item.url" target="_blank" class="flex">
                <img
                  alt="Midias"
                  :src="
                    require(`../../assets/img/components/banner/${item.icon}`)
                  "
                  style="max-width: 19px"
                />
              </a>
            </q-btn>
          </div>

          <!-- ATENDIMENTO -->
          <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12">
            <q-toolbar-title class="footer-title">Atendimento</q-toolbar-title>
            <a
              v-for="(item, index) in atendimento"
              :key="index"
              class="text-secondary footer-item"
              :href="item.link"
              target="_blanck"
            >
              - {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </q-toolbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      exames: [
        { name: "Biópsia", link: "#/exames-e-convenios/biopsia" },
        {
          name: "Densitometria óssea",
          link: "#/exames-e-convenios/densitometria-ossea"
        },
        {
          name: "Ecocardiografia",
          link: "#/exames-e-convenios/ecocardiografia"
        },
        {
          name: "Eletrocardiograma",
          link: "#/exames-e-convenios/eletrocardiograma"
        },
        { name: "Mamografia", link: "#/o-que-oferecemos/mamografia" },
        { name: "Raio x", link: "#/exames-e-convenios/raio-x" }
      ],
      exames2: [
        { name: "Ressonância", link: "#/exames-e-convenios/ressonancia" },
        { name: "Tomografia", link: "#/exames-e-convenios/tomografia" },
        {
          name: "Ultrassonografia",
          link: "#/exames-e-convenios/ultrassonografia"
        }
      ],
      atendimento: [
        {
          name: "Ver Resultados",
          link: "https://www.clickvita.com.br/code/ULTRI"
        },
        {
          name: "Agendar Exames",
          link: "https://api.whatsapp.com/send?phone=5532984020650"
        },
        { name: "Contato", link: "#/contato" }
      ],
      buttonsSocial: [
        {
          icon: "instagram.svg",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          icon: "facebook.svg",
          url: "https://www.facebook.com/UltrimagemUba"
        }
      ]
    };
  },
  methods: {
    openSocial(url) {
      window.open(url);
    }
  }
};
</script>

<style scoped lang="scss">
#footer {
  .footer-logo {
    max-width: 12.8em;
  }
  .footer-title {
    font-size: 1.5em;
    margin-bottom: 17px;
  }
  .footer-item {
    display: block;
    margin-bottom: 10px;
  }
  .footer-item:hover {
    text-decoration: underline;
    color: $positive !important;
    transition: 0.5s;
  }
}

@media only screen and (max-width: 768px) {
  .footer-logo-mobile {
    display: flex;
    margin: auto;
  }
}

@media only screen and (max-width: 425px) {
  .footer-item-column-2 {
    padding: 0px;
  }
}
</style>
