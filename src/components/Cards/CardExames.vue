<template>

  <div id="card-exams" class="exam-gallery">

    <!-- Grade de exames -->

    <div class="row q-col-gutter-lg exam-gallery-grid">

      <div v-for="exame in itemExame" :key="exame.id" class="col-12 col-sm-6 col-md-4 exam-gallery-item">

        <CardExam :item="exame" :woman="woman" :fetal="fetal" @select="openExam" />

      </div>

    </div>

    <!-- Modal com detalhes do exame -->

    <q-dialog v-model="dialog" :maximized="$q.screen.lt.md" transition-show="fade" transition-hide="fade">

      <q-card v-if="activeExam" class="exam-detail-modal" :class="`is-${theme}`" :style="$q.screen.lt.md

        ? null

        : { width: '960px', maxWidth: '94vw' }">

        <q-btn round flat dense icon="close" aria-label="Fechar detalhes do exame" class="exam-modal-close"
          v-close-popup />

        <div class="exam-modal-layout">

          <div class="exam-modal-info">

            <div class="exam-modal-info-inner">

              <span class="exam-modal-eyebrow">

                ULTRIMAGEM · EXAMES

              </span>

              <h2 class="exam-modal-title">

                {{ activeExam.name }}

              </h2>

              <h3 v-if="clean(activeExam.subtitulo)" class="exam-modal-subtitle">

                {{ clean(activeExam.subtitulo) }}

              </h3>

              <div class="exam-modal-divider"></div>

              <div v-if="getDescription(activeExam)" class="exam-modal-section">

                <h3>Sobre o exame</h3>

                <p class="exam-modal-text">

                  {{ getDescription(activeExam) }}

                </p>

              </div>

              <div v-if="getOque(activeExam)" class="exam-modal-section">

                <h3>Como funciona</h3>

                <p class="exam-modal-text">

                  {{ getOque(activeExam) }}

                </p>

              </div>

              <div v-if="clean(activeExam.entenda)" class="exam-modal-section">

                <h3>Entenda o exame</h3>

                <p class="exam-modal-text">

                  {{ clean(activeExam.entenda) }}

                </p>

              </div>

              <div v-if="getPreparacao(activeExam.preparacao).length" class="exam-modal-section">

                <h3>

                  <q-icon name="event_available" class="exam-modal-icon q-mr-sm" />

                  Preparação

                </h3>

                <ul class="exam-preparation">

                  <li v-for="(prep, index) in getPreparacao(activeExam.preparacao)" :key="index">

                    {{ prep }}

                  </li>

                </ul>

              </div>

              <div v-if="clean(activeExam.duracao)" class="exam-modal-section">

                <h3>

                  <q-icon name="schedule" class="exam-modal-icon q-mr-sm" />

                  Duração

                </h3>

                <p class="exam-modal-text">

                  {{ clean(activeExam.duracao) }}

                </p>

              </div>

              <div class="exam-modal-actions">

                <q-btn unelevated no-caps icon="event" label="Agende seu exame" class="exam-action-primary"
                  @click="openAgendamento" />

                <q-btn outline no-caps icon="description" label="Ver resultado" class="exam-action-secondary"
                  @click="openVita" />

              </div>

            </div>

          </div>

          <div class="exam-modal-visual">

            <img v-if="activeImage" :src="activeImage" :alt="`Imagem de ${activeExam.name}`" class="exam-modal-image"
              decoding="async" />

            <div v-if="activeImage && theme === 'woman'" class="exam-modal-image-tint"></div>

            <div v-if="activeImage && theme === 'fetal'" class="exam-modal-image-wash"></div>

            <!-- Sombra inferior escura para melhorar a leitura -->

            <div class="exam-modal-image-overlay"></div>

            <div class="exam-modal-image-caption">

              <img src="../../assets/img/template/logo-blue-light.svg" alt="Logo da Ultrimagem"
                class="exam-modal-logo" />

              <p>

                Cuidado, tecnologia e confiança em cada exame.

              </p>

            </div>

          </div>

        </div>

      </q-card>

    </q-dialog>

  </div>

</template>

<script>

import CardExam from "./CardExame.vue";

export default {

  name: "CardExames",

  components: {

    CardExam

  },

  props: {

    exames: {

      type: [Object, Array],

      required: true

    },

    woman: {

      type: Boolean,

      default: false

    },

    fetal: {

      type: Boolean,

      default: false

    }

  },

  data() {

    return {

      dialog: false,

      activeExam: null

    };

  },

  computed: {

    theme() {

      if (this.woman) {

        return "woman";

      }

      return this.fetal ? "fetal" : "default";

    },

    itemExame() {

      if (Array.isArray(this.exames)) {

        return this.exames;

      }

      if (

        this.exames &&

        Array.isArray(this.exames.variacoes) &&

        this.exames.variacoes.length > 0

      ) {

        return this.exames.variacoes;

      }

      return this.exames ? [this.exames] : [];

    },

    activeImage() {

      return this.activeExam

        ? this.getImageSrc(this.activeExam.image)

        : null;

    }

  },

  methods: {

    openExam(exame) {

      this.activeExam = exame;

      this.dialog = true;

    },

    clean(text) {

      return text == null ? "" : String(text).trim();

    },

    getDescription(exame) {

      return this.clean(

        exame.description ||

        exame.decription ||

        exame.oque

      );

    },

    // Evita repetir o texto de "Sobre o exame".

    getOque(exame) {

      const oque = this.clean(exame.oque);

      return oque && oque !== this.getDescription(exame)

        ? oque

        : "";

    },

    getPreparacao(prep) {

      if (Array.isArray(prep)) {

        return prep

          .filter(Boolean)

          .map(item => String(item).trim())

          .filter(Boolean);

      }

      if (typeof prep === "string") {

        return prep

          .split("|")

          .map(item => item.trim())

          .filter(Boolean);

      }

      return [];

    },

    getImageSrc(name) {

      if (!name) {

        return null;

      }

      try {

        return require(

          `../../assets/img/components/exame/${name}`

        );

      } catch (error) {

        console.warn("Imagem não encontrada:", name);

        return null;

      }

    },

    openVita() {

      window.open(

        "https://pixeon.clickvita.com.br/#/instituicao/ULTRI",

        "_blank",

        "noopener,noreferrer"

      );

    },

    openAgendamento() {

      window.open(

        "https://api.whatsapp.com/send?phone=5532984020650",

        "_blank",

        "noopener,noreferrer"

      );

    }

  }

};

</script>

<style scoped>
/* =========================================

   GALERIA — SEM CAIXA EXTERNA

========================================= */

#card-exams,

#card-exams.exam-gallery {

  display: block;

  width: 100%;

  max-width: 100%;

  height: auto;

  min-height: 0;

  padding: 0 !important;

  margin: 0;

  background: transparent !important;

  border: none !important;

  border-radius: 0 !important;

  box-shadow: none !important;

  outline: none;

}

#card-exams>.exam-gallery-grid,

#card-exams>.row,

#card-exams .exam-gallery-item {

  background: transparent !important;

  border: none !important;

  box-shadow: none !important;

}

/* =========================================

   TEMA PADRÃO DO MODAL

========================================= */

.exam-detail-modal {

  --exam-bg-solid: #ffffff;

  --exam-bg-from: #fffafd;

  --exam-bg-mid: #fbfaff;

  --exam-bg-to: #f5f8ff;

  --exam-shadow: rgba(133, 157, 204, 0.16);

  --exam-close: #7288b5;

  --exam-close-bg: rgba(255, 255, 255, 0.97);

  --exam-close-border: rgba(181, 197, 231, 0.38);

  --exam-eyebrow: #8c9fce;

  --exam-title: #303b55;

  --exam-heading: #4c5874;

  --exam-text: #69748a;

  --exam-icon: #91a5d3;

  --exam-marker: #b5c4e8;

  --exam-divider: linear-gradient(90deg,

      #9cb9e8 0%,

      #c4d7f4 65%,

      #e0eafa 100%);

  --exam-accent: #819bd0;

  --exam-accent-hover: #6e89c2;

  --exam-accent-shadow: rgba(129, 155, 208, 0.17);

  --exam-accent-shadow-hover: rgba(110, 137, 194, 0.24);

  --exam-outline: #8197c6;

  --exam-outline-border: #c9d5ef;

  --exam-outline-hover: rgba(198, 212, 241, 0.16);

  --exam-visual-bg: #f8f5fc;

  /* Mais escura na parte inferior */

  --exam-overlay: linear-gradient(180deg,
      rgba(15, 25, 48, 0.04) 0%,
      rgba(15, 25, 48, 0.10) 18%,
      rgba(15, 25, 48, 0.18) 35%,
      rgba(4, 33, 95, 0.34) 50%,
      rgba(18, 41, 88, 0.48) 68%,
      rgba(2, 39, 117, 0.68) 100%);

}

/* =========================================

   SAÚDE DA MULHER

========================================= */

.exam-detail-modal.is-woman {

  --exam-bg-solid: #ffffff;

  --exam-bg-from: #fffafd;

  --exam-bg-mid: #fbfaff;

  --exam-bg-to: #f5f8ff;

  --exam-shadow: rgba(133, 157, 204, 0.16);

  --exam-close: #7288b5;

  --exam-close-bg: rgba(255, 255, 255, 0.97);

  --exam-close-border: rgba(181, 197, 231, 0.38);

  --exam-eyebrow: #8c9fce;

  --exam-title: #303b55;

  --exam-heading: #4c5874;

  --exam-text: #69748a;

  --exam-icon: #91a5d3;

  --exam-marker: #b5c4e8;

  --exam-divider: linear-gradient(90deg,

      #9cb9e8 0%,

      #c4d7f4 65%,

      #e0eafa 100%);

  --exam-accent: #819bd0;

  --exam-accent-hover: #6e89c2;

  --exam-accent-shadow: rgba(129, 155, 208, 0.17);

  --exam-accent-shadow-hover: rgba(110, 137, 194, 0.24);

  --exam-outline: #8197c6;

  --exam-outline-border: #c9d5ef;

  --exam-outline-hover: rgba(198, 212, 241, 0.16);

  --exam-visual-bg: #f8f5fc;

  /* Sombra mais forte, mantendo o tom quente */

  --exam-overlay: linear-gradient(180deg,
      rgba(15, 25, 48, 0.04) 0%,
      rgba(15, 25, 48, 0.10) 18%,
      rgba(15, 25, 48, 0.18) 35%,
      rgba(4, 33, 95, 0.34) 50%,
      rgba(18, 41, 88, 0.48) 68%,
      rgba(2, 39, 117, 0.68) 100%);

}

/* =========================================

   MEDICINA FETAL

========================================= */

.exam-detail-modal.is-fetal {

  --exam-bg-solid: #ffffff;

  --exam-bg-from: #fffafd;

  --exam-bg-mid: #fbfaff;

  --exam-bg-to: #f5f8ff;

  --exam-shadow: rgba(133, 157, 204, 0.16);

  --exam-close: #7288b5;

  --exam-close-bg: rgba(255, 255, 255, 0.97);

  --exam-close-border: rgba(181, 197, 231, 0.38);

  --exam-eyebrow: #8c9fce;

  --exam-title: #303b55;

  --exam-heading: #4c5874;

  --exam-text: #69748a;

  --exam-icon: #91a5d3;

  --exam-marker: #b5c4e8;

  --exam-divider: linear-gradient(90deg,

      #9cb9e8 0%,

      #c4d7f4 65%,

      #e0eafa 100%);

  --exam-accent: #819bd0;

  --exam-accent-hover: #6e89c2;

  --exam-accent-shadow: rgba(129, 155, 208, 0.17);

  --exam-accent-shadow-hover: rgba(110, 137, 194, 0.24);

  --exam-outline: #8197c6;

  --exam-outline-border: #c9d5ef;

  --exam-outline-hover: rgba(198, 212, 241, 0.16);

  --exam-visual-bg: #f8f5fc;

  /* Sombra escura com leve nuance azul */

  --exam-overlay: linear-gradient(180deg,
      rgba(15, 25, 48, 0.04) 0%,
      rgba(15, 25, 48, 0.10) 18%,
      rgba(15, 25, 48, 0.18) 35%,
      rgba(4, 33, 95, 0.34) 50%,
      rgba(18, 41, 88, 0.48) 68%,
      rgba(2, 39, 117, 0.68) 100%);

}

/* =========================================

   ESTRUTURA DO MODAL

========================================= */

.exam-detail-modal {

  position: relative;

  height: min(90vh, 640px);

  border-radius: 22px;

  overflow: hidden;

  background: var(--exam-bg-solid);

  box-shadow: 0 24px 80px var(--exam-shadow);

}

.exam-modal-layout {

  display: grid;

  grid-template-columns: minmax(0, 1fr) 46%;

  grid-template-rows: minmax(0, 1fr);

  width: 100%;

  height: 100%;

}

.exam-modal-close {

  position: absolute;

  top: 14px;

  right: 14px;

  z-index: 10;

  width: 36px;

  height: 36px;

  color: var(--exam-close) !important;

  background: var(--exam-close-bg);

  border: 1px solid var(--exam-close-border);

  border-radius: 50%;

  box-shadow: 0 2px 8px rgba(20, 20, 40, 0.08);

}

/* =========================================

   INFORMAÇÕES DO EXAME

========================================= */

.exam-modal-info {

  min-width: 0;

  min-height: 0;

  padding: 40px 32px 28px;

  overflow-y: auto;

  background: linear-gradient(145deg,

      var(--exam-bg-from) 0%,

      var(--exam-bg-mid) 55%,

      var(--exam-bg-to) 100%);

}

.exam-modal-info-inner {

  width: 100%;

  max-width: 480px;

  margin: 0 auto;

}

.exam-modal-eyebrow {

  display: inline-block;

  margin-bottom: 10px;

  color: var(--exam-eyebrow);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.06em;

  line-height: 1.5;

}

.exam-modal-title {

  margin: 0 0 8px;

  color: var(--exam-title);

  font-size: 1.55rem;

  font-weight: 700;

  line-height: 1.25;

  text-align: left;

  overflow-wrap: break-word;

}

.exam-modal-subtitle {

  margin: 0;

  color: var(--exam-accent);

  font-size: 0.82rem;

  font-weight: 700;

  line-height: 1.4;

  text-align: left;

}

.exam-modal-divider {

  width: 60px;

  height: 4px;

  margin-top: 14px;

  margin-bottom: 22px;

  border-radius: 10px;

  background: var(--exam-divider);

}

.exam-modal-section {

  margin: 0 0 22px;

  padding: 0;

  border: 0;

  background: transparent;

}

.exam-modal-section h3 {

  display: flex;

  align-items: center;

  margin: 0 0 8px;

  padding: 0;

  color: var(--exam-heading);

  font-size: 1rem;

  font-weight: 700;

  line-height: 1.4;

}

.exam-modal-icon {

  color: var(--exam-icon);

  font-size: 1.25rem;

}

.exam-modal-text {

  margin: 0;

  padding: 0;

  color: var(--exam-text);

  font-size: 0.9rem;

  line-height: 1.65;

  text-align: left;

  white-space: pre-line;

  overflow-wrap: break-word;

}

.exam-preparation {

  margin: 0;

  padding: 0 0 0 20px;

  color: var(--exam-text);

  font-size: 0.9rem;

  line-height: 1.65;

  text-align: left;

}

.exam-preparation li {

  margin-bottom: 6px;

  padding-left: 4px;

}

.exam-preparation li:last-child {

  margin-bottom: 0;

}

.exam-preparation li::marker {

  color: var(--exam-marker);

}

/* =========================================

   BOTÕES DO MODAL

========================================= */

.exam-modal-actions {

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 10px;

  margin-top: 26px;

}

.exam-action-primary,

.exam-action-secondary {

  min-height: 42px;

  padding: 0 16px;

  border-radius: 10px;

  font-weight: 600;

  transition:

    transform 0.2s ease,

    box-shadow 0.2s ease,

    background 0.2s ease;

}

.exam-action-primary {

  color: #fff !important;

  background: var(--exam-accent) !important;

  box-shadow: 0 6px 16px var(--exam-accent-shadow);

}

.exam-action-primary:hover {

  background: var(--exam-accent-hover) !important;

  box-shadow: 0 8px 20px var(--exam-accent-shadow-hover);

  transform: translateY(-2px);

}

.exam-action-secondary {

  color: var(--exam-outline) !important;

  border-color: var(--exam-outline-border) !important;

}

.exam-action-secondary:hover {

  background: var(--exam-outline-hover);

}

/* =========================================

   IMAGEM DO MODAL E SHADERS

========================================= */

.exam-modal-visual {

  position: relative;

  min-width: 0;

  min-height: 0;

  overflow: hidden;

  isolation: isolate;

  background: var(--exam-visual-bg);

}

.exam-modal-image {

  position: absolute;

  inset: 0;

  display: block;

  width: 100%;

  height: 100%;

  object-fit: cover;

  object-position: 35% center;

}

/* Tonalidade rosa para saúde da mulher */

.exam-modal-image-tint {

  position: absolute;

  inset: 0;

  z-index: 1;

  background: rgba(125, 175, 235, 0.22);

  opacity: 0.65;

  mix-blend-mode: soft-light;

  pointer-events: none;

}

/* Camada pastel para medicina fetal */

.exam-modal-image-wash {

  position: absolute;

  inset: 0;

  z-index: 1;

  background: linear-gradient(135deg,

      rgba(125, 175, 235, 0.10) 0%,

      rgba(105, 155, 220, 0.08) 48%,

      rgba(75, 125, 205, 0.16) 100%);

  opacity: 0.7;

  pointer-events: none;

}

/*

 * SOMBRA INFERIOR REFORÇADA

 * Usa a variável de cada tema.

 * A parte inferior fica escura para melhorar

 * o contraste da logo e da legenda.

 */

.exam-modal-image-overlay {

  position: absolute;

  inset: 0;

  z-index: 2;

  background: var(--exam-overlay);

  pointer-events: none;

}

.exam-modal-image-caption {

  position: absolute;

  right: 22px;

  bottom: 24px;

  left: 22px;

  z-index: 3;

  color: #fff;

  text-align: center;

  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);

}

.exam-modal-logo {

  display: block;

  width: 140px;

  max-width: 80%;

  margin: 0 auto 10px;

}

.exam-modal-image-caption p {

  max-width: 280px;

  margin: 0 auto;

  color: #fff;

  font-size: 0.9rem;

  font-weight: 600;

  line-height: 1.55;

}

/* =========================================

   TABLETS

========================================= */

@media (max-width: 1023px) {

  .exam-detail-modal {

    height: 100%;

    max-height: 100vh;

    border-radius: 0;

    overflow-y: auto;

  }

  .exam-modal-layout {

    grid-template-columns: 1fr;

    grid-template-rows: auto;

    height: auto;

    min-height: 100%;

  }

  .exam-modal-info {

    padding: 56px 30px 28px;

    overflow: visible;

  }

  .exam-modal-info-inner {

    max-width: 650px;

  }

  .exam-modal-visual {

    min-height: 300px;

  }

}

/* =========================================

   CELULARES

========================================= */

@media (max-width: 599px) {

  .exam-gallery {

    padding: 0 !important;

  }

  .exam-modal-info {

    padding: 56px 20px 24px;

  }

  .exam-modal-eyebrow {

    font-size: 0.68rem;

  }

  .exam-modal-title {

    font-size: 1.4rem;

  }

  .exam-modal-text,

  .exam-preparation {

    font-size: 0.88rem;

  }

  .exam-modal-actions {

    flex-direction: column;

    align-items: stretch;

  }

  .exam-action-primary,

  .exam-action-secondary {

    width: 100%;

    margin: 0;

  }

  .exam-modal-visual {

    min-height: 240px;

  }

  .exam-modal-image-caption {

    right: 16px;

    bottom: 18px;

    left: 16px;

  }

  .exam-modal-logo {

    width: 120px;

  }

}

/* =========================================

   ACESSIBILIDADE

========================================= */

@media (prefers-reduced-motion: reduce) {

  .exam-action-primary,

  .exam-action-secondary {

    transition: none;

  }

}
</style>
