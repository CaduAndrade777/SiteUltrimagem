<template>
  <section id="services" class="bg-warning q-pb-lg">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="grey-text" aria-label="Exames oferecidos">
            Exames oferecidos
          </h2>

          <p class="grey-text">
            A Ultrimagem – Ubá se preocupa em investir constantemente em
            tecnologia para proporcionar alta qualidade e precisão em seus
            diagnósticos para um cuidado seguro e eficaz.
          </p>
        </div>
      </div>

      <!-- Exames listados -->
      <div class="row">
        <div
          v-for="item in exam"
          :key="item.id || item.key"
          class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
        >
          <CardExameIcone
            :item="item"
            @select="openExam"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardExameIcone from "../../components/Cards/CardExameIcone.vue";
import exam from "../../util/exam.js";

export default {
  name: "ExamesOferecidos",

  components: {
    CardExameIcone
  },

  data() {
    return {
      exam: []
    };
  },

  mounted() {
    this.exam = exam;
  },

  methods: {
    openExam(item) {
      if (!item || !item.key) {
        console.error("O exame não possui uma key válida:", item);
        return;
      }

      this.$router.push({
        path: `/exames-e-convenios/${item.key}`
      }).catch(error => {
        // Evita mensagens de erro quando a navegação é cancelada
        // ou quando o usuário clica no exame em que já está.
        if (error.name !== "NavigationDuplicated") {
          console.error("Erro ao abrir o exame:", error);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#services {
  padding-bottom: 30px;
}

#services h2 {
  font-size: 2rem;
  font-weight: 600;
}

#services p {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  #services h2 {
    font-size: 1.5rem;
  }

  #services p {
    font-size: 1rem;
  }
}
</style>
