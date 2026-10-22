<template>
  <q-card
    class="exam-card cursor-pointer"
    :class="`exam-card--${theme}`"
    flat
    tabindex="0"
    role="button"
    :aria-label="`Conhecer exame: ${item.name}`"
    @click="$emit('select', item)"
    @keyup.enter="$emit('select', item)"
    @keyup.space.prevent="$emit('select', item)"
  >
    <div class="exam-card-media">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="`Imagem de ${item.name}`"
        class="exam-card-image"
        loading="lazy"
        decoding="async"
      />

      <div v-else class="exam-card-placeholder">
        <img
          src="../../assets/img/template/logo-blue-light.svg"
          alt=""
          class="exam-card-placeholder-logo"
        />
      </div>

      <div
        v-if="imageSrc && theme === 'woman'"
        class="exam-card-tint"
      ></div>

      <div
        v-if="imageSrc && theme === 'fetal'"
        class="exam-card-wash"
      ></div>

      <div class="exam-card-overlay"></div>
    </div>

    <div class="exam-card-content">
      <h3 class="exam-card-title">
        {{ item.name }}
      </h3>

      <p v-if="subtitle" class="exam-card-subtitle">
        {{ subtitle }}
      </p>

      <p v-if="description" class="exam-card-description">
        {{ description }}
      </p>

      <span class="exam-card-link">
        Conhecer exame
        <q-icon name="arrow_forward" />
      </span>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "CardExam",

  props: {
    item: {
      type: Object,
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

  computed: {
    theme: function () {
      if (this.woman) {
        return "woman";
      }

      return this.fetal ? "fetal" : "default";
    },

    subtitle: function () {
      return this.item.subtitulo
        ? String(this.item.subtitulo).trim()
        : "";
    },

    description: function () {
      var text =
        this.item.description ||
        this.item.decription ||
        this.item.oque ||
        "";

      return String(text).trim();
    },

    imageSrc: function () {
      return this.getImageSrc(this.item.image);
    }
  },

  methods: {
    getImageSrc: function (name) {
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
    }
  }
};
</script>

<style scoped>
/* =========================================
   TEMA PADRÃO — AZUL-MARINHO
========================================= */

.exam-card {
  --card-bg: #f5f8fd;

  /* Sombra azul-escuro visível em repouso */
  --card-shadow:
    0 8px 26px rgba(0, 59, 128, 0.32);

  /* Sombra azul mais forte ao passar o mouse */
  --card-shadow-hover:
    0 14px 32px rgba(0, 45, 105, 0.55),
    0 0 18px rgba(0, 91, 187, 0.35);

  --card-overlay: linear-gradient(
    180deg,
    rgba(15, 25, 48, 0.10) 0%,
    rgba(15, 25, 48, 0.24) 18%,
    rgba(15, 25, 48, 0.52) 35%,
    rgba(4, 33, 95, 0.8) 50%,
    rgba(18, 41, 88, 0.94) 68%,
    rgba(2, 39, 117, 0.99) 100%
  );

  --card-link: #e0edff;
  --card-focus: #a8cafa;

  --card-placeholder: linear-gradient(
    145deg,
    #e8f1fc,
    #dce9f8
  );
}

/* =========================================
   SAÚDE DA MULHER — AZUL-VIOLETA
========================================= */

.exam-card--woman {
  --card-bg: #fff9fc;

  --card-shadow:
    0 8px 26px rgba(35, 55, 130, 0.30);

  --card-shadow-hover:
    0 14px 32px rgba(25, 45, 110, 0.52),
    0 0 18px rgba(55, 95, 205, 0.32);

  --card-overlay: linear-gradient(
    180deg,
    rgba(15, 25, 48, 0.10) 0%,
    rgba(15, 25, 48, 0.24) 18%,
    rgba(15, 25, 48, 0.52) 35%,
    rgba(4, 33, 95, 0.8) 50%,
    rgba(18, 41, 88, 0.94) 68%,
    rgba(2, 39, 117, 0.99) 100%
  );

  --card-link: #ffe8f2;
  --card-focus: #edc1d8;

  --card-placeholder: linear-gradient(
    145deg,
    #fff5fa 0%,
    #f9eaf2 100%
  );
}

/* =========================================
   MEDICINA FETAL — AZUL PROFUNDO
========================================= */

.exam-card--fetal {
  --card-bg: #f7f9ff;

  --card-shadow:
    0 8px 26px rgba(0, 75, 160, 0.32);

  --card-shadow-hover:
    0 14px 32px rgba(0, 45, 115, 0.55),
    0 0 20px rgba(0, 105, 220, 0.38);

  --card-overlay: linear-gradient(
    180deg,
    rgba(15, 25, 48, 0.10) 0%,
    rgba(15, 25, 48, 0.24) 18%,
    rgba(15, 25, 48, 0.52) 35%,
    rgba(4, 33, 95, 0.8) 50%,
    rgba(18, 41, 88, 0.94) 68%,
    rgba(2, 39, 117, 0.99) 100%
  );

  --card-link: #e4edff;
  --card-focus: #c5c9ee;

  --card-placeholder: linear-gradient(
    135deg,
    #fbeaf3 0%,
    #f4edf8 50%,
    #e7f1ff 100%
  );
}

/* =========================================
   ESTRUTURA DO CARD
========================================= */

.exam-card {
  position: relative;
  display: block;
  width: 100%;
  height: 290px;
  padding: 0;
  overflow: hidden;
  isolation: isolate;
  border-radius: 18px;
  background: var(--card-bg);
  box-shadow: var(--card-shadow);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.exam-card:hover,
.exam-card:focus-visible {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow-hover);
}

.exam-card:focus-visible {
  outline: 3px solid var(--card-focus);
  outline-offset: 3px;
}

/* =========================================
   IMAGEM
========================================= */

.exam-card-media {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.exam-card-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  transition: transform 0.5s ease;
}

.exam-card:hover .exam-card-image {
  transform: scale(1.04);
}

/* Imagem alternativa */

.exam-card-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--card-placeholder);
}

.exam-card-placeholder-logo {
  width: 140px;
  max-width: 60%;
}

/* =========================================
   CAMADA ROSA — SAÚDE DA MULHER
========================================= */

.exam-card-tint {
  position: absolute;
  inset: 0;
  background: rgba(255, 213, 233, 0.20);
  opacity: 0.35;
  mix-blend-mode: soft-light;
  pointer-events: none;
}

/* =========================================
   CAMADA ROSA E AZUL — MEDICINA FETAL
========================================= */

.exam-card-wash {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    135deg,
    rgba(255, 207, 229, 0.15) 0%,
    rgba(245, 232, 246, 0.07) 48%,
    rgba(190, 218, 255, 0.16) 100%
  );

  pointer-events: none;
}

/* =========================================
   DEGRADÊ SOBRE A IMAGEM
========================================= */

.exam-card-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--card-overlay);
  pointer-events: none;
}

/* =========================================
   CONTEÚDO
========================================= */

.exam-card-content {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding: 18px 20px 20px;
}

.exam-card-title {
  display: -webkit-box;
  margin: 0 0 8px;
  overflow: hidden;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  text-shadow:
    0 2px 4px rgba(0, 18, 48, 0.75),
    0 1px 10px rgba(0, 24, 65, 0.40);
}

.exam-card-subtitle {
  margin: -2px 0 8px;
  color: var(--card-link);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.35;

  text-shadow:
    0 2px 4px rgba(0, 18, 48, 0.80);
}

.exam-card-description {
  display: -webkit-box;
  margin: 0 0 12px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.98);
  font-size: 0.86rem;
  letter-spacing: normal;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;

  text-shadow:
    0 2px 4px rgba(0, 18, 48, 0.80),
    0 1px 8px rgba(0, 24, 65, 0.45);
}

.exam-card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: normal;

  text-shadow:
    0 2px 4px rgba(0, 18, 48, 0.80);
}

/* =========================================
   CELULARES
========================================= */

@media (max-width: 599px) {
  .exam-card {
    height: 270px;
  }

  .exam-card-content {
    padding: 16px;
  }

  .exam-card-title {
    font-size: 1.1rem;
  }
}

/* =========================================
   ACESSIBILIDADE
========================================= */

@media (prefers-reduced-motion: reduce) {
  .exam-card,
  .exam-card-image {
    transition: none;
  }
}
</style>
