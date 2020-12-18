<template>
  <header id="ultrimagem-toolbar">
    <q-toolbar class="bg-primary">
      <q-btn flat to="/">
        <img
          src="../../assets/img/template/logo-blue-light.svg"
          class="toolbar-logo"
        />
      </q-btn>
      <q-space />

      <!-- Menu -->
      <q-tabs>
        <a
          v-for="(item, index) in menu"
          :key="index"
          class="q-py-lg q-px-lg toolbar-btn text-secondary toolbar-desktop"
          :href="item.to"
        >
          {{ item.name }}
        </a>

        <a
          class="q-py-lg q-px-lg toolbar-btn text-secondary toolbar-desktop"
          href="https://www.clickvita.com.br/code/ULTRI"
          target="_blank"
        >
          Resultado de Exames
        </a>

        <!-- Menu Mobile -->
        <q-btn
          icon="menu"
          flat
          class="text-secondary bg-primary q-py-md toolbar-mobile hidden"
        >
          <q-menu fit transition-show="jump-down" transition-hide="jump-up">
            <q-list
              flat
              class="column items-center alignt-center bg-primary q-pa-sm"
              style="min-width:304px"
            >
              <a
                v-for="(item, index) in menu"
                :key="index"
                class="q-py-lg q-px-lg toolbar-mobile-btn text-secondary full-width text-center"
                :href="item.to"
              >
                {{ item.name }}
              </a>

              <a
                class="q-py-lg q-px-lg toolbar-mobile-btn text-secondary bg-accent full-width text-center q-mb-sm"
                href="https://www.clickvita.com.br/code/ULTRI"
                target="_blank"
              >
                Agendar Exame
              </a>

              <a
                class="q-py-lg q-px-lg toolbar-mobile-btn text-secondary bg-accent full-width text-center"
                href="https://www.clickvita.com.br/code/ULTRI"
                target="_blank"
              >
                Resultado de Exames
              </a>
            </q-list>
          </q-menu>
        </q-btn>
      </q-tabs>
    </q-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          to: "#/o-que-oferecemos",
          name: "O que oferecemos"
        },
        { to: "#/quem-somos", name: "Quem Somos" },
        { to: "#/saude-da-mulher", name: "Saúde da Mulher" },
        { to: "#/blog", name: "Blog" },
        { to: "#/contato", name: "Contato" }
      ]
    };
  },
  componentes: {}
};
</script>

<style scoped lang="scss">
#ultrimagem-toolbar {
  .toolbar-logo {
    max-width: 15.5em;
  }

  .toolbar-mobile {
    font-size: 1.2em;
  }

  .toolbar-btn {
    text-decoration: none;
    font-size: 0.87em;
  }

  .toolbar-btn:hover,
  .toolbar-btn:focus {
    background: $accent;
    transition: 1s;
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

@media only screen and (max-width: 1024px) {
  #ultrimagem-toolbar {
    .toolbar-mobile {
      display: block !important;
    }

    .toolbar-desktop {
      display: none;
    }
  }
}
</style>
