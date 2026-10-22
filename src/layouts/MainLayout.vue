<template>
  <q-layout view="lHh Lpr lFf">
    <Header v-if="!$route.path.includes('/promocional')" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer v-if="!$route.path.includes('/promocional')" />
  </q-layout>
</template>

<script>
import Header from "../components/Navs/Header.vue";
import Footer from "../components/Navs/Footer.vue";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.container {
  max-width: 1300px;
  padding: 0em 1em;
  margin: auto;
}
</style>
