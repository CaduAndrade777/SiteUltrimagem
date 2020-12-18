<template>

  <q-layout view="lHh Lpr lFf">
    <Header></Header>
    <q-page-container>
        <router-view />
    </q-page-container>
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
