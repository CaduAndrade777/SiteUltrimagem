<template>
  <section
    id="banner"
    :class="
      page === 'servico'
        ? 'img-servico'
        : page === 'quem-somos'
        ? 'img-quem-somos'
        : page === 'saude-da-mulher'
        ? 'img-saude-mulher'
        : page === 'medicina-fetal'
        ? 'img-medicina-fetal'
        : page === 'blog'
        ? 'img-blog'
        : page === 'contato'
        ? 'img-contato'
        : ''
    "
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="q-mb-sm" v-html="title"></h1>
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
  props: ["title", "subtitle", "page"],

  data() {
    return {};
  },
  components: {
    SocialButtons
  }
};
</script>

<style scoped lang="scss">
#banner {
  background-color: $primary;
  background-repeat: no-repeat;

  color: $secondary;
  padding: 4em 0 4.5em;
  width: 100%;
}

.img-servico {
  background-image: url("../../assets/img/components/banner/servicos.svg");
}

.img-quem-somos {
  background-image: url("../../assets/img/components/banner/quem-somos.svg");
}

.img-saude-mulher {
  background-image: url("../../assets/img/components/banner/saude-mulher.svg");
}

.img-medicina-fetal {
  background-image: url("../../assets/img/components/banner/medicina-fetal.svg");
}

.img-blog {
  background-image: url("../../assets/img/components/banner/blog.svg");
}

.img-contato {
  background-image: url("../../assets/img/components/banner/contato.svg");
}

@media only screen and (max-width: 425px) {
  #banner {
    background-image: none;
  }
}
</style>
