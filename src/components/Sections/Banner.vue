<template>
  <section id="banner">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1 v-html="title"></h1>
          <h2 v-html="subtitle"></h2>

          <div class="banner-buttons">
            <q-btn
              outline
              color="secondary"
              label="@ultrimagemuba"
              icon="instagram"
              class="q-mr-md button-secondary"
            />
            <q-btn
              outline
              color="secondary"
              label="ultrimagem ubá"
              icon="facebook"
              class="button-secondary"
            />
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
      title: "Bem vindo <strong> teste </strong>",
      subtitle:
        "Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec. "
    };
  },
  components: {}
};
</script>
<style scoped>
#banner {
  color: #f0f9ff;
  background-color: purple;
  padding: 94px 0 72px;
}

/* Geral */
* {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 16px;
  line-height: 24px;
}

h1 {
  font-family: Montserrat, sans-serif;
  font-size: 36px;
  line-height: 44px;

  margin-bottom: 34px;
}

h2 {
  font-size: 24px;
  line-height: 32px;

  margin-bottom: 39px;
}

.container {
  max-width: 1300px;
  margin: auto;
}

.button-secondary {
  font-size: 16px;
  border-radius: 10px;

  text-transform: lowercase;
}
</style>
