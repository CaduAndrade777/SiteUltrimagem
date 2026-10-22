<template>
  <section class="convenios-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="grey-text">Convênios atendidos</h2>

          <div class="marquee-container">
            <div class="marquee-track">
              <!-- Primeira sequência de logos -->
              <div class="marquee-group">
                <div
                  v-for="item in conveniados"
                  :key="`original-${item.numberImg}`"
                  class="convenio-logo"
                >
                  <img
                    :src="getImageSrc(item.numberImg)"
                    :alt="`Convênio ${item.numberImg}`"
                    width="200"
                    height="120"
                    loading="lazy"
                  />
                </div>
              </div>

              <!-- Segunda sequência: permite o loop infinito -->
              <div
                class="marquee-group"
                aria-hidden="true"
              >
                <div
                  v-for="item in conveniados"
                  :key="`clone-${item.numberImg}`"
                  class="convenio-logo"
                >
                  <img
                    :src="getImageSrc(item.numberImg)"
                    alt=""
                    width="200"
                    height="120"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
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
      conveniados: [
        { numberImg: "2.svg" },
        { numberImg: "3.svg" },
        { numberImg: "4.svg" },
        { numberImg: "5.svg" },
        { numberImg: "7.svg" },
        { numberImg: "8.svg" },
        { numberImg: "9.svg" },
        { numberImg: "10.svg" },
        { numberImg: "11.svg" },
        { numberImg: "12.svg" }
      ]
    };
  },

  methods: {
    getImageSrc(imgName) {
      return require(
        `../../assets/img/section/convenios/conveniado-${imgName}`
      );
    }
  }
};
</script>

<style scoped>
.convenios-section {
  width: 100%;
  overflow: hidden;
}

.marquee-container {
  width: 100%;
  overflow: hidden;

  /* Gradiente nas extremidades */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 40s linear infinite;
  will-change: transform;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 32px;
  padding-right: 32px;
}

.convenio-logo {
  display: flex;
  flex: 0 0 200px;
  width: 200px;
  height: 120px;
  align-items: center;
  justify-content: center;
}

.convenio-logo img {
  display: block;
  width: 200px;
  height: 120px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}

/* Movimento contínuo */
@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* Pausa ao passar o mouse no desktop */
@media (hover: hover) {
  .marquee-container:hover .marquee-track {
    animation-play-state: paused;
  }
}

/* Ajustes para celulares */
@media (max-width: 599px) {
  .marquee-track {
    animation-duration: 30s;
  }

  .marquee-group {
    gap: 20px;
    padding-right: 20px;
  }

  .convenio-logo {
    flex-basis: 160px;
    width: 160px;
    height: 100px;
  }

  .convenio-logo img {
    width: 160px;
    height: 100px;
  }
}

/* Respeita a preferência por movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation-play-state: paused;
  }
}
</style>
