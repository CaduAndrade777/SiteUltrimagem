<template>
  <section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="title"></h1>
          <h2 class="display-2" v-html="subtitle"></h2>
          <SocialButtons />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialButtons from "../../components/Elements/Buttons/SocialButtons.vue";

export default {
  props: ["title", "subtitle"],

  data() {
    return {
      title: " ",
      subtitle: " "
    };
  },
  components: { SocialButtons }
};
</script>
<style scoped lang="scss">
#banner {
  background-image: url("../../assets/img/components/banner/bg-img-default.svg");
  background-color: $primary;
  background-repeat: no-repeat, repeat;

  color: $secondary;
  padding: 4em 0 4.5em;
}
</style>
