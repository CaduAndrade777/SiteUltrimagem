<template>
  <section
    id="team-doctors"
    class="bg-warning q-pb-lg"
    v-if="doctor.length"
  >
    <div class="container">
      <!-- CABEÇALHO -->
      <div class="row">
        <div class="col-md-6 col-12">
          <h1 class="text-weight-regular grey-text doctor-section-title">
            Equipe médica
          </h1>

          <p class="grey-text doctor-section-description">
            Profissionais atualizados, experientes e comprometidos com
            diagnósticos precisos e o cuidado com cada paciente.
          </p>
        </div>
      </div>

      <!-- MOBILE -->
      <div class="row doctor-mobile">
        <div class="col-12">
          <q-virtual-scroll
            :items="doctor"
            virtual-scroll-horizontal
            class="q-py-md doctor-mobile-scroll"
          >
            <template v-slot="{ item }">
              <div
                class="doctor-card doctor-mobile-card"
                @click="openDoctor(item)"
                @keydown.enter="openDoctor(item)"
                tabindex="0"
                role="button"
                :aria-label="'Ver informações de ' + item.name"
              >
                <img
                  class="doctor-image"
                  :src="getImageSrc(item.img)"
                  :alt="'Médico ' + item.name"
                  loading="lazy"
                />

                <div class="doctor-gradient"></div>

                <div class="doctor-info">
                  <h3 class="doctor-name" v-if="item.name">
                    {{ item.name }}
                  </h3>

                  <p class="doctor-description">
                    Conheça o profissional
                  </p>
                </div>
              </div>
            </template>
          </q-virtual-scroll>
        </div>
      </div>

      <!-- DESKTOP -->
      <div class="row doctor-desktop no-gap">
        <div class="col-md-12 no-gap">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="primary"
            navigation
            arrows
            height="500px"
            class="bg-warning equipe-carousel"
          >
            <q-carousel-slide
              v-for="(group, pageIndex) in doctorChunks"
              :key="pageIndex"
              :name="'page-' + pageIndex"
              class="column no-wrap slide-no-gap"
            >
              <div class="row doctor-cards-row">
                <div
                  class="col-md-6 doctor-card-column"
                  v-for="item in group"
                  :key="item.id"
                >
                  <div
                    class="doctor-card doctor-desktop-card"
                    @click="openDoctor(item)"
                    @keydown.enter="openDoctor(item)"
                    tabindex="0"
                    role="button"
                    :aria-label="'Ver informações de ' + item.name"
                  >
                    <img
                      class="doctor-image"
                      :src="getImageSrc(item.img)"
                      :alt="'Médico ' + item.name"
                      loading="lazy"
                    />

                    <div class="doctor-gradient"></div>

                    <div class="doctor-info">
                      <h3 class="doctor-name" v-if="item.name">
                        {{ item.name }}
                      </h3>

                      <p class="doctor-description">
                        Conheça o profissional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>

    <!-- MODAL DO MÉDICO -->
    <q-dialog
      v-model="doctorDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
      @hide="selectedDoctor = null"
    >
      <q-card
        v-if="selectedDoctor"
        class="doctor-dialog-card"
      >
        <div class="doctor-dialog-image-container">
          <img
            class="doctor-dialog-image"
            :src="getImageSrc(selectedDoctor.img)"
            :alt="'Médico ' + selectedDoctor.name"
          />

          <q-btn
            round
            flat
            dense
            icon="close"
            color="white"
            class="doctor-dialog-close"
            aria-label="Fechar informações do médico"
            v-close-popup
          />
        </div>

        <q-card-section class="doctor-dialog-content">
          <h2 class="doctor-dialog-name">
            {{ selectedDoctor.name }}
          </h2>

          <!-- ESPECIALIDADE / FORMAÇÃO EM TÓPICOS -->
          <ul
            v-if="specialtyList.length"
            class="doctor-dialog-list"
          >
            <li
              v-for="(topic, i) in specialtyList"
              :key="i"
            >
              {{ topic }}
            </li>
          </ul>

          <div class="doctor-dialog-details">
            <p
              v-if="selectedDoctor.description || selectedDoctor.descricao"
            >
              {{ selectedDoctor.description || selectedDoctor.descricao }}
            </p>

            <p
              v-if="selectedDoctor.crm"
            >
              CRM: {{ selectedDoctor.crm }}
            </p>

            <p
              v-if="selectedDoctor.exams || selectedDoctor.exames"
            >
              Exames: {{ selectedDoctor.exams || selectedDoctor.exames }}
            </p>

            <p
              v-if="!hasDoctorDetails(selectedDoctor)"
              class="doctor-dialog-placeholder"
            >
              Consulte a equipe da Ultrimagem para obter mais informações
              sobre este profissional.
            </p>
          </div>

          <div class="row justify-end q-mt-md">
            <q-btn
              label="Fechar"
              unelevated
              color="primary"
              rounded
              v-close-popup
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import doctor from "../../util/doctor.js";

export default {
  name: "TeamDoctors",

  data() {
    return {
      doctor: [],
      slide: "page-0",
      doctorDialog: false,
      selectedDoctor: null,
    };
  },

  computed: {
    doctorChunks() {
      const chunkSize = 2;
      const chunks = [];

      for (let i = 0; i < this.doctor.length; i += chunkSize) {
        chunks.push(this.doctor.slice(i, i + chunkSize));
      }

      return chunks;
    },

    // Transforma o texto de "specialty" (com "•" e "\n") em uma lista de tópicos
    specialtyList() {
      const d = this.selectedDoctor;
      if (!d) return [];

      const raw = d.specialty || d.especialidade;
      if (!raw) return [];

      if (Array.isArray(raw)) {
        return raw.map((item) => this.cleanTopic(item)).filter(Boolean);
      }

      return String(raw)
        .split("\n")
        .map((line) => this.cleanTopic(line))
        .filter(Boolean);
    },
  },

  mounted() {
    this.doctor = doctor;
  },

  methods: {
    getImageSrc(imgName) {
      if (!imgName) return "";

      try {
        return require(
          `../../assets/img/components/equipeMedica/${imgName}`
        );
      } catch (e) {
        console.error("Não foi possível carregar a imagem do médico:", imgName);
        return "";
      }
    },

    // Remove o "•" do início, espaços e caracteres invisíveis (ex.: \u2060 do WhatsApp)
    cleanTopic(text) {
      return String(text)
        .replace(/^[\s•\u2060\u200B\uFEFF]+/, "")
        .replace(/[\s\u2060\u200B\uFEFF]+$/, "")
        .trim();
    },

    openDoctor(item) {
      this.selectedDoctor = item;
      this.doctorDialog = true;
    },

    hasDoctorDetails(item) {
      return Boolean(
        item.specialty ||
        item.especialidade ||
        item.description ||
        item.descricao ||
        item.crm ||
        item.exams ||
        item.exames
      );
    },
  },
};
</script>

<style scoped>
/* CABEÇALHO */
#team-doctors .doctor-section-title {
  font-family: "HP", sans-serif;
}

#team-doctors .doctor-section-description {
  font-family: "Google Sans", "Roboto", sans-serif;
}

/* VISIBILIDADE */
.doctor-mobile {
  display: none;
}

.doctor-desktop {
  display: block;
}

/* CARROSSEL */
.no-gap {
  margin: 0 !important;
  padding: 0 !important;
}

.slide-no-gap {
  padding: 0 72px !important;
  margin: 0 !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
}

.equipe-carousel {
  margin-left: -72px;
  margin-right: -72px;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.equipe-carousel ::v-deep .q-carousel__arrow--left {
  left: 12px;
}

.equipe-carousel ::v-deep .q-carousel__arrow--right {
  right: 12px;
}

.doctor-cards-row {
  width: 100%;
  height: 100%;
}

.doctor-card-column {
  height: 420px;
  padding-right: 25px;
  min-width: 0;
}

/* CARD */
.doctor-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  isolation: isolate;
  border-radius: 16px;
  background: #202830;
  cursor: pointer;
  outline: none;
  transform: translateZ(0);
}

.doctor-card:focus-visible {
  outline: 3px solid #6dccec;
  outline-offset: 4px;
}

.doctor-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center top;
  transform: scale(1);
  transition: transform 500ms ease-in-out;
}

.doctor-card:hover .doctor-image,
.doctor-card:focus-visible .doctor-image {
  transform: scale(1.05);
}

/* DEGRADÊ */
.doctor-gradient {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.88) 0%,
    rgba(0, 0, 0, 0.62) 22%,
    rgba(0, 0, 0, 0.16) 52%,
    transparent 75%
  );
  pointer-events: none;
}

/* TEXTOS SOBRE A IMAGEM */
.doctor-info {
  position: absolute;
  z-index: 2;
  inset: auto 0 0;
  padding: 24px;
  color: #fff;
  pointer-events: none;
}

.doctor-name {
  margin: 0 0 6px;
  color: #fff;
  font-family: "HP", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.doctor-description {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Google Sans", "Roboto", sans-serif;
  font-size: 0.95rem;
  line-height: 1.45;
}

/* MOBILE */
.doctor-mobile-scroll {
  width: 100%;
}

.doctor-mobile-card {
  width: 250px;
  height: 310px;
  margin-right: 16px;
}

.doctor-mobile-card .doctor-info {
  padding: 18px;
}

.doctor-mobile-card .doctor-name {
  font-size: 1.15rem;
}

/* MODAL */
.doctor-dialog-card {
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 20px;
  background: #fff;
}

.doctor-dialog-image-container {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: #202830;
}

.doctor-dialog-image {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center top;
}

.doctor-dialog-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.55);
}

.doctor-dialog-content {
  padding: 24px;
}

.doctor-dialog-name {
  margin: 0 0 12px;
  color: #252b33;
  font-family: "HP", sans-serif;
  font-size: 1.8rem;
  line-height: 1.2;
}

/* LISTA DE TÓPICOS (formação / especialidade) */
.doctor-dialog-list {
  margin: 0 0 18px;
  padding-left: 20px;
  color: #555f6b;
  font-family: "Google Sans", "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

.doctor-dialog-list li {
  margin-bottom: 8px;
  padding-left: 4px;
  overflow-wrap: anywhere;
}

.doctor-dialog-list li:last-child {
  margin-bottom: 0;
}

.doctor-dialog-details {
  color: #414852;
  font-family: "Google Sans", "Roboto", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.doctor-dialog-details p {
  margin: 0 0 12px;
}

.doctor-dialog-placeholder {
  color: #68717c;
}

/* TELAS MENORES */
@media only screen and (max-width: 1200px) {
  .slide-no-gap {
    padding: 0 52px !important;
  }

  .equipe-carousel {
    margin-left: -52px;
    margin-right: -52px;
  }

  .equipe-carousel ::v-deep .q-carousel__arrow--left {
    left: 4px;
  }

  .equipe-carousel ::v-deep .q-carousel__arrow--right {
    right: 4px;
  }

  .doctor-info {
    padding: 18px;
  }
}

@media only screen and (max-width: 768px) {
  .doctor-mobile {
    display: flex;
  }

  .doctor-desktop {
    display: none;
  }
}

/* RESPEITA A PREFERÊNCIA DO USUÁRIO POR MENOS ANIMAÇÕES */
@media (prefers-reduced-motion: reduce) {
  .doctor-image {
    transition: none;
  }
}
</style>