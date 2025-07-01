<template>
  <header id="ultrimagem-toolbar">
    <q-toolbar class="bg-primary q-pa-none q-pr-none text-white toolbar">
      <q-btn flat to="/">
        <img
          src="../../assets/img/template/logo-blue-light.svg"
          class="toolbar-logo q-py-sm"
          alt="Logo da Ultrimagem"
        />
      </q-btn>
      <q-space />

      <!-- Menu Desktop -->
      <q-tabs>
        <template v-for="(item, index) in menu">
          <a
            v-if="!item.external"
            :key="index"
            :href="item.to"
            :class="{
              'toolbar-btn-special text-primary': item.to === '#/radiologia-odontologica',
              'toolbar-btn text-secondary': item.to !== '#/radiologia-odontologica'
            }"
            class="q-py-lg q-px-lg toolbar-desktop text-weight-bold text-no-wrap toolbar-btn text-primary font-hp-comum text-weight-bold"
          >
            {{ item.name }}
          </a>
         <a
           v-else
            :key="index"
            :href="item.to"
            target="_blank"
            rel="noopener"
            :class="[
            'q-py-lg q-px-lg toolbar-desktop text-weight-bold text-no-wrap',
            item.special ? 'bg-info text-secondary rounded-borders' : 'text-secondary'
           ]"
           >
          {{ item.name }}
         </a>
        </template>

        <!-- Menu Mobile -->
        <q-btn
          icon="menu"
          flat
          class="text-secondary bg-primary q-py-md toolbar-mobile hidden"
          aria-label="Abrir menu mobile"
        >
          <q-menu fit transition-show="jump-down" transition-hide="jump-up">
            <q-list
              flat
              class="column items-center alignt-center bg-primary q-pa-sm"
              style="min-width: 304px"
            >
              <template v-for="(item, index) in menu">
                <a
                  v-if="!item.external"
                  :key="index"
                  :href="item.to"
                  :class="{
                    'text-primary bg-secondary': item.to === '#/radiologia-odontologica',
                    'text-secondary bg-primary': item.to !== '#/radiologia-odontologica'
                  }"
                  class="q-py-lg q-px-lg toolbar-mobile-btn full-width text-center"
                >
                  {{ item.name }}
                </a>
                <a
                  v-else
                  :key="index"
                  :href="item.to"
                  target="_blank"
                  rel="noopener"
                  class="q-py-lg q-px-lg toolbar-mobile-btn full-width text-center text-secondary bg-primary"
                >
                  {{ item.name }}
                </a>
              </template>

              <a
                class="q-py-lg q-px-lg toolbar-mobile-btn text-secondary bg-accent full-width text-center q-mb-sm"
                href="https://api.whatsapp.com/send?phone=5532984020650"
                target="_blank"
                rel="noopener"
              >
                Agendar Exame
              </a>
            </q-list>
          </q-menu>
        </q-btn>
      </q-tabs>

      <q-btn
        unelevated
        class="toolbar-btn-main rotate-270"
        color="info"
        text-color="secondary"
        @click="open"
        aria-label="Agendar exame via WhatsApp"
      >
        Agendar Exame
        <i class="fab fa-whatsapp q-ml-sm" aria-hidden="true"></i>
      </q-btn>
    </q-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
           menu: [
            { to: "#/exames-e-convenios", name: "Exames e Convênios" },
            { to: "#/quem-somos", name: "Quem Somos" },
            { to: "#/radiologia-odontologica", name: "Radiologia Odontológica" },
            { to: "#/saude-da-mulher", name: "Saúde da Mulher" },
            { to: "#/medicina-fetal", name: "Medicina Fetal" },
            { to: "#/blog", name: "Blog" },
            { to: "#/contato", name: "Contato" },
            {
            to: "https://pixeon.clickvita.com.br/#/instituicao/ULTRI",
            name: "Resultado de Exames",
            external: true,
          special: true  // 👈 adiciona isso
                }
              ]
             };
             },
  methods: {
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650", "_blank");
    }
  }
};
</script>

<style scoped lang="scss">
#ultrimagem-toolbar {
  .toolbar {
    z-index: 100;
  }

  .toolbar-logo {
    max-width: 13em;
  }

  .toolbar-mobile {
    font-size: 1.3em;
  }

  .toolbar-btn {
    text-decoration: none;
    font-size: 0.9em;
    white-space: normal;
  }

  .toolbar-btn:hover,
  .toolbar-btn:focus {
    background: $accent;
    transition: 1s;
  }

  .toolbar-btn-special {
    background: $secondary;
    text-decoration: none;
    font-size: 0.90em;
    white-space: nowrap;
  }

  .toolbar-btn-special:hover,
  .toolbar-btn-special:focus {
    color: "#ffffff";
    transition: 1s;
  }
}

.toolbar-btn-main {
  position: fixed;
  padding: 8px 0;
  right: -61px;
  top: 124px;
  z-index: 9999;

  i {
    font-size: 1.3em;
  }
}

.toolbar-mobile-btn {
  text-decoration: none;
}

/* MOBILE */
@media only screen and (max-width: 320px) {
  #ultrimagem-toolbar {
    .toolbar-logo {
      max-width: 197px;
    }
  }
}

@media only screen and (max-width: 425px) {
  #ultrimagem-toolbar {
    .toolbar-btn-main {
      display: none;
    }
  }
}

@media only screen and (max-width: 1280px) {
  #ultrimagem-toolbar {
    .toolbar-btn-main {
      top: 135px;
    }

    .toolbar-mobile {
      display: block !important;
    }

    .toolbar-desktop {
      display: none;
    }
  }
}
</style>
