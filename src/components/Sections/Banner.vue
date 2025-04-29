<template>
  <section
    id="banner"
    class="text-secondary"
    :class="
      page === 'servico'
        ? 'img-servico'
        : page === 'quem-somos'
        ? 'img-quem-somos'
        : page === 'saude-da-mulher'
        ? 'img-saude-mulher'
        : page === 'radiologia-odontologica'
        ? 'img-radiologia-odontologica'
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

<style>
#banner {
  background-color: #299dd5;
  background-repeat: no-repeat;
  background-size: cover;         /* <-- adicionado */
  background-position: center;    /* <-- adicionado */

  padding: 4em 0 4.5em;
  width: 100%;
  height: 100%;
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

.img-radiologia-odontologica {
  background-image: url("../../assets/img/components/banner/radiologia-odontologica.svg");
}

@media only screen and (max-width: 425px) {
  #banner {
    background-image: none;
  }
}

@media only screen and (min-width: 1450px) {
  #banner {
    display: flex;
  }
  .img-servico {
    background-image: url("../../assets/img/components/banner/servicos-lg.svg");
    height: 33em;
  }

  .img-quem-somos {
    background-image: url("../../assets/img/components/banner/quem-somos-lg.svg");
  }

  .img-saude-mulher {
    background-image: url("../../assets/img/components/banner/saude-mulher-lg.svg");
  }

  .img-medicina-fetal {
    background-image: url("../../assets/img/components/banner/medicina-fetal-lg.svg");
  }

  .img-blog {
    background-image: url("../../assets/img/components/banner/blog-lg.svg");
  }

  .img-contato {
    background-image: url("../../assets/img/components/banner/contato-lg.svg");
  }
}
</style>
