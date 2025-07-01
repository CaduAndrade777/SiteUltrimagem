<template>
  <section
    id="banner"
    class="text-secondary"
    :class="getBannerClass"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="banner-title q-mb-sm" v-html="title"></h1>
          <h2 class="banner-subtitle" v-html="subtitle"></h2>
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

  computed: {
    getBannerClass() {
      switch (this.page) {
        case "servico":
          return "img-servico";
        case "quem-somos":
          return "img-quem-somos";
        case "saude-da-mulher":
          return "img-saude-mulher";
        case "radiologia-odontologica":
          return "img-radiologia-odontologica";
        case "medicina-fetal":
          return "img-medicina-fetal";
        case "blog":
          return "img-blog";
        case "contato":
          return "img-contato";
        default:
          return "";
      }
    }
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
  background-size: cover;
  background-position: center;
  padding: 4em 0 4.5em;
  width: 100%;
  height: 100%;
}


.banner-title {
  font-size: 30px;
  line-height: 1.2;
 
}

.banner-subtitle {
  font-size: 21px;
  line-height: 1.5;
  margin-top: 0.5em;
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 24px;
  }

  .banner-subtitle {
    font-size: 16px;
  }
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
    background-image: url("../../assets/img/components/banner/quem-somos.svg");
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
