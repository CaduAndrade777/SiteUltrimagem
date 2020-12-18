<template>
  <section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="title"></h1>
          <h2 class="display-2" v-html="subtitle"></h2>

          <div class="banner-buttons">
            <q-btn
              outline
              color="secondary"
              class="q-mr-md q-mb-md button-secondary justify-center"
              v-for="(item, index) in buttonsSocial"
              :key="item.id"
            >
              <a :href="item.url" target="_blank" class="flex">
                <img
                  class="q-mr-sm"
                  :src="
                    require(`../../assets/img/components/banner/${item.icon}`)
                  "
                  style="max-width: 19px"
                />
                <span style="font-size: 14px" class="text-secondary">
                  {{ item.name }}
                </span>
              </a>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: " <strong> Seja bem-vindo!  </strong>",
      subtitle:
        "Entre em contato com a Ultrimagem – Ubá através dos canais de comunicação facilitados para você ficar por dentro de tudo o que acontece na clínica.",
      buttonsSocial: [
        {
          name: "@ultrimagemuba",
          icon: "instagram.svg",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt"
        },
        {
          name: "ultrimagem ubá",
          icon: "facebook.svg",
          url: "https://www.facebook.com/UltrimagemUba/"
        }
      ]
    };
  },
  components: {}
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

/* Geral */
* {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1em;
  line-height: 1.5em;
}

h1 {
  font-family: Montserrat, sans-serif;
  font-size: 2.25em;
  line-height: 44px;

  margin-bottom: 34px;
}

/* h2 */
.display-2 {
  font-size: 1.5em;
  line-height: 32px;

  margin-bottom: 2em;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1300px;
  padding: 0em 1em;
  margin: auto;
}

.button-secondary {
  font-size: 16px;
  border-radius: 10px;

  text-transform: lowercase;
}
</style>
