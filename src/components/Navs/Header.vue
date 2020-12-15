<template>
  <header>
    <q-toolbar class="container bg-primary">
      <q-btn flat to="/">
        <img
          src="../../assets/img/template/logo-blue-light.svg"
          style="max-width:233px"
        />
      </q-btn>
      <q-space />

      <!-- Menu -->
      <q-tabs>
        <a
          v-for="(item, index) in menu"
          :key="index"
          class="q-py-lg q-px-lg toolbar-btn text-secondary"
          :href="item.to"
        >
          {{ item.name }}
        </a>
        <!-- <a
            href="https://www.clickvita.com.br/code/ULTRI"
            >Resultado de exame</a
          >

          <q-btn
            :to="item.to"
            class="q-pa-none"
            v-for="(item, index) in menu"
            :key="index"
          >
            <q-tab
              :name="item.name"
              :label="item.label"
              class="q-pa-lg text-grey-9"
              style="text-transform: initial"
            />
          </q-btn> -->

        <!-- Menu Mobile -->
        <!-- <q-btn
          icon="menu"
          class="text-grey-8 bg-white no-shadow btn__menu-mobile"
        >
          <q-menu>
            <q-list
              style="min-width: 320px"
              class="column items-center alignt-center bg-grey-2 q-pa-sm"
            >
              <q-btn
                flat
                :to="item.to"
                class="q-py-lg"
                clickable
                v-close-popup
                v-for="(item, index) in menuMobile"
                :key="index"
              >
                <q-item-section class="text-grey-8">{{
                  item.name
                }}</q-item-section>
              </q-btn>
            </q-list>
          </q-menu>
        </q-btn> -->
      </q-tabs>
    </q-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
      menu: [
        {
          to: "/o-que-oferecemos",
          name: "O que oferecemos",
          label: "O que oferecemos"
        },
        { to: "/quem-somos", name: "Atuação" },
        { to: "/saude-da-mulher", name: "Khora Lab" },
        { to: "/blog", name: "Blog" },
        { to: "/contato", name: "Contato" },
        {
          to: "https://www.clickvita.com.br/code/ULTRI",
          name: "Resultado de Exames"
        }
      ],
      menuMobile: [
        { to: "/sobre", name: "Sobre" },
        { to: "/atuacao", name: "Atuacao" },
        { to: "/khora-lab", name: "Khora Lab" },
        { to: "/contato", name: "Contato" }
      ],
      classe: false
    };
  },
  componentes: {}
};
</script>
<style scoped>
.toolbar-btn {
  text-decoration: none;
  font-size: 14px;
}

.toolbar-btn:hover,
.toolbar-btn:focus {
  background: #238dc0;
  transition: 1s;
}
</style>
