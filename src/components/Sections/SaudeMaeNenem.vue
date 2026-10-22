<template>
  <section id="mother-and-baby" class="q-py-xl">
    <div class="container timeline-container">
      <header class="timeline-header text-center">
        <span class="timeline-eyebrow">
          ACOMPANHAMENTO DA GESTAÇÃO
        </span>

        <h2 class="text-white">
          Saúde da mãe e do neném
        </h2>

        <div class="row justify-center">
          <div class="col-12 col-md-7">
            <p class="timeline-intro">
              Seja bem-vinda, mamãe! Acompanhe o desenvolvimento do seu bebê
              e mantenha o calendário de exames atualizado para cuidar da
              sua saúde e do seu neném em cada etapa da gestação.
            </p>
          </div>
        </div>
      </header>

      <div ref="timeline" class="pregnancy-timeline">
        <!-- Eixo vertical central, alinhado às bolinhas -->
        <div
          class="timeline-progress"
          :style="{ transform: 'scaleY(' + lineProgress + ')' }"
        ></div>

        <article
          v-for="(fase, index) in fases"
          :key="index"
          :ref="'timelineItem' + index"
          class="timeline-item"
          :class="{ 'timeline-item--visible': visibleItems[index] }"
        >
          <!-- ESQUERDA: ETAPA -->
          <div class="timeline-stage">
            <span class="timeline-stage-label">
              ETAPA {{ String(index + 1).padStart(2, '0') }}
            </span>

            <h3 class="timeline-stage-number">
              {{ fase.periodo }}
            </h3>

            <span class="timeline-stage-unit">semanas</span>
          </div>

          <!-- CENTRO: BOLINHA -->
          <div class="timeline-marker">
            <span></span>
          </div>

          <!-- DIREITA: INFORMAÇÕES -->
          <div class="timeline-content">
            <h3 class="timeline-phase-title">
              {{ fase.titulo }}
            </h3>

            <div class="timeline-illustration">
              <img
                :src="fase.imagem"
                :alt="fase.alt"
                class="mother-and-baby-item-img"
                loading="lazy"
              />
            </div>

            <div class="timeline-development">
              <h4>Desenvolvimento do bebê</h4>

              <ul>
                <li
                  v-for="(item, i) in fase.itens"
                  :key="'item-' + index + '-' + i"
                >
                  {{ cleanItem(item) }}
                </li>
              </ul>
            </div>

            <div class="timeline-exams">
              <h4>
                <q-icon name="favorite_border" />
                Exames por imagem necessários
              </h4>

              <ul>
                <li
                  v-for="(exame, i) in fase.exames"
                  :key="'exame-' + index + '-' + i"
                >
                  {{ cleanItem(exame) }}
                </li>
              </ul>
            </div>

            <div class="timeline-actions">
              <q-btn
                unelevated
                no-caps
                icon="event"
                label="Agendar"
                class="timeline-btn-primary"
                @click="open()"
              />

              <q-btn
                outline
                no-caps
                icon="description"
                label="Ver resultado"
                class="timeline-btn-secondary"
                @click="clickVita()"
              />
            </div>
          </div>
        </article>
      </div>

      <div class="timeline-footer text-center">
        <p>
          Cada gestação é única. Siga sempre as orientações do profissional
          responsável pelo seu pré-natal.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MotherAndBabyTimeline",

  data() {
    return {
      observer: null,
      visibleItems: [],
      lineProgress: 0,
      _updateTimelineLine: null,

      fases: [
        {
          periodo: "0 – 13",
          titulo: "Primeiro trimestre",
          imagem: require(
            "../../assets/img/components/medicinaFetal/ilustra.svg"
          ),
          alt: "Ilustração da gestação entre 0 e 13 semanas",
          itens: [
            "Você vai perceber o aumento dos seios;",
            "Com 6 semanas, o bebê é do tamanho de um grão de arroz;",
            "De 9 a 12 semanas, o rosto já está quase todo formado;",
            "Ao final do terceiro mês, o coração já pode ser ouvido durante a consulta de pré-natal."
          ],
          exames: [
            "Ultrassom obstétrico com translucência nucal;",
            "Ultrassom obstétrico endovaginal."
          ]
        },
        {
          periodo: "14 – 27",
          titulo: "Segundo trimestre",
          imagem: require(
            "../../assets/img/components/medicinaFetal/ilustragravida2.png"
          ),
          alt: "Ilustração da gestação entre 14 e 27 semanas",
          itens: [
            "Você começa a perceber os primeiros movimentos do bebê;",
            "Iniciam-se os movimentos respiratórios e das mãozinhas;",
            "O bebê já tem cílios e sobrancelhas;",
            "Já consegue sugar, engolir e piscar."
          ],
          exames: [
            "Ultrassom obstétrico morfológico;",
            "Ultrassom com Doppler obstétrico."
          ]
        },
        {
          periodo: " 28 – 40",
          titulo: "Terceiro trimestre",
          imagem: require(
            "../../assets/img/components/medicinaFetal/ilustragravida3.png"
          ),
          alt: "Ilustração da gestação entre 28 e 40 semanas",
          itens: [
            "Seu corpo está se preparando para o parto e para acolher quem vai chegar;",
            "Poderá sair do seu peito um líquido amarelado, chamado colostro;",
            "Seu útero pode ficar durinho por instantes, sem que você sinta dor;",
            "Seu bebê já percebe a luz fora do útero e abre e fecha os olhos;",
            "Escuta e identifica vários sons, como vozes e músicas."
          ],
          exames: [
            "Ultrassom com Doppler obstétrico."
          ]
        }
      ]
    };
  },

  mounted() {
    this.visibleItems = this.fases.map(() => false);

    this.$nextTick(() => {
      this.initTimelineObserver();
      this.initTimelineLine();
    });
  },

  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this._updateTimelineLine) {
      window.removeEventListener(
        "scroll",
        this._updateTimelineLine
      );

      window.removeEventListener(
        "resize",
        this._updateTimelineLine
      );
    }
  },

  methods: {
    initTimelineObserver() {
      if (!("IntersectionObserver" in window)) {
        this.visibleItems = this.fases.map(() => true);
        return;
      }

      this.observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = Number(entry.target.dataset.timelineIndex);

            if (!Number.isNaN(index)) {
              this.$set(this.visibleItems, index, true);
            }

            this.observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -30px 0px"
        }
      );

      this.fases.forEach((fase, index) => {
        const ref = this.$refs["timelineItem" + index];
        const element = Array.isArray(ref) ? ref[0] : ref;

        if (element) {
          element.dataset.timelineIndex = index;
          this.observer.observe(element);
        }
      });
    },

    initTimelineLine() {
      const updateLine = () => {
        const timeline = this.$refs.timeline;
        if (!timeline) return;

        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const start = viewportHeight * 0.72;
        const distance = rect.height + start;
        const progress = (start - rect.top) / distance;

        this.lineProgress = Math.max(0, Math.min(1, progress));
      };

      this._updateTimelineLine = updateLine;

      window.addEventListener("scroll", updateLine, {
        passive: true
      });

      window.addEventListener("resize", updateLine);

      updateLine();
    },

    cleanItem(item) {
      return String(item || "").replace(/^\s*-\s*/, "");
    },

    open() {
      window.open(
        "https://api.whatsapp.com/send?phone=5532984020650",
        "_blank",
        "noopener,noreferrer"
      );
    },

    clickVita() {
      window.open(
        "https://pixeon.clickvita.com.br/#/instituicao/ULTRI",
        "_blank",
        "noopener,noreferrer"
      );
    }
  }
};
</script>



<style>
#mother-and-baby {
  --timeline-bg: #91a6e3;

  position: relative;
  overflow: hidden;
  isolation: isolate;

  background:
    radial-gradient(
      ellipse at 12% 10%,
      rgba(255, 220, 236, 0.16),
      transparent 36%
    ),
    radial-gradient(
      ellipse at 90% 55%,
      rgba(190, 216, 255, 0.18),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      #8faee8 0%,
      #879bdc 48%,
      #a6b6e8 100%
    );
}

.timeline-container {
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

.timeline-header {
  margin-bottom: 68px;
}

.timeline-eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.timeline-header h2 {
  margin: 0 0 18px;
  color: #fff;
}

.timeline-intro {
  margin: 0;
  color: rgba(255, 255, 255, 0.94);
  font-size: 1rem;
  line-height: 1.8;
}

/* =========================================
   ESTRUTURA DA TIMELINE
========================================= */

.pregnancy-timeline {
  --stage-width: 190px;
  --axis-width: 20px;
  --column-gap: 36px;

  --axis-center: calc(
    var(--stage-width) +
    var(--column-gap) +
    (var(--axis-width) / 2)
  );

  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0 20px;
  isolation: isolate;
}

/* Cada etapa */

.timeline-item {
  position: relative;
  display: grid;

  grid-template-columns:
    var(--stage-width)
    var(--axis-width)
    minmax(0, 1fr);

  column-gap: var(--column-gap);
  align-items: start;

  width: 100%;
  padding: 26px 0 72px;
  box-sizing: border-box;

  opacity: 0;
  transform: translateY(65px);

  transition:
    opacity 1.8s ease,
    transform 2.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-item:last-child {
  padding-bottom: 12px;
}

.timeline-item--visible {
  opacity: 1;
  transform: translateY(0);
}

/* =========================================
   LINHA VERTICAL ANIMADA
========================================= */

.timeline-progress {
  position: absolute;

  /*
   * A linha usa exatamente o centro da coluna
   * reservada para os marcadores.
   */
  left: var(--axis-center);
  top: 0;
  bottom: 0;

  width: 3px;
  margin-left: -1.5px;

  border-radius: 999px;
  border: 0;
  padding: 0;

  /*
   * A linha fica atrás dos marcadores.
   */
  z-index: 0;
  pointer-events: none;

  background: linear-gradient(
    180deg,
    #f7c9e4 0%,
    #e0c9ef 48%,
    #c3ddff 100%
  );

  transform: scaleY(0);
  transform-origin: top center;
  will-change: transform;
}

/* =========================================
   ETAPA À ESQUERDA
========================================= */

.timeline-stage {
  grid-column: 1;
  position: relative;
  z-index: 2;

  min-width: 0;
  margin: 0;
  padding: 0;

  text-align: right;
}

.timeline-stage-label {
  display: block;
  margin: 0 0 13px;

  color: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;

  white-space: nowrap;
}

.timeline-stage-number {
  margin: 0;

  color: #fff;
  font-size: clamp(2.2rem, 3.6vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.055em;

  white-space: nowrap;

  text-shadow: 0 3px 18px rgba(49, 64, 119, 0.1);
}

/*
 * O span precisa existir dentro do h3 para que
 * a animação individual dos números funcione.
 */

.timeline-stage-number span {
  display: inline-block;

  opacity: 0;
  transform: translateY(150%);

  transition:
    transform 2.2s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1.6s ease;

  transition-delay: 0.4s;
}

.timeline-item--visible .timeline-stage-number span {
  opacity: 1;
  transform: translateY(0);
}

.timeline-stage-unit {
  display: block;
  margin-top: 9px;

  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
}

/* =========================================
   MARCADOR CENTRAL
   CORTE VISUAL DA LINHA
========================================= */

.timeline-marker {
  grid-column: 2;

  position: relative;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  min-width: 0;
  margin: 0;
  padding: 8px 0 0;

  box-sizing: border-box;

  /*
   * Não usar overflow:hidden aqui:
   * ele pode cortar o brilho da bolinha.
   */
}

/*
 * Máscara circular que cobre a linha.
 *
 * Importante:
 * - z-index acima da linha;
 * - fundo opaco;
 * - tamanho maior que a bolinha;
 * - centro alinhado ao eixo.
 *
 * A linha não deve aparecer dentro desse disco.
 */

.timeline-marker::before {
  content: "";

  position: absolute;
  z-index: 1;

  top: 1px;
  left: 50%;

  width: 30px;
  height: 30px;

  transform: translateX(-50%);

  border-radius: 50%;
  background: #91a6e3;

  pointer-events: none;
}

/*
 * Bolinha por cima da máscara.
 */

.timeline-marker span {
  position: relative;
  z-index: 2;

  display: block;
  flex: 0 0 15px;

  width: 15px;
  height: 15px;

  margin: 0;
  box-sizing: border-box;

  border: 3px solid #fff;
  border-radius: 50%;

  background: #f5c9e2;

  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.15);

  transition:
    transform 0.6s ease,
    box-shadow 0.6s ease;
}

.timeline-item--visible .timeline-marker span {
  transform: scale(1.15);

  box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.17);
}

/* =========================================
   CONTEÚDO À DIREITA
========================================= */

.timeline-content {
  grid-column: 3;

  position: relative;
  z-index: 2;

  min-width: 0;
  margin: 0;
  padding: 0;

  color: #fff;
  overflow-wrap: anywhere;
}

.timeline-phase-title {
  margin: 0 0 28px;

  color: #fff;
  font-size: clamp(1.7rem, 2.6vw, 2.35rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.timeline-illustration {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 0 0 28px;
}

.mother-and-baby-item-img {
  display: block;

  width: auto;
  max-width: 200px;
  max-height: 210px;

  object-fit: contain;

  filter: drop-shadow(0 5px 10px rgba(75, 89, 130, 0.08));
}

.timeline-development {
  margin-bottom: 26px;
}

.timeline-development h4,
.timeline-exams h4 {
  margin: 0 0 12px;

  color: rgba(255, 255, 255, 0.98);
  font-size: 0.98rem;
  font-weight: 700;
  line-height: 1.5;
}

.timeline-exams h4 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.timeline-exams h4 .q-icon {
  flex: 0 0 auto;

  color: #f5d4e8;
  font-size: 1.2rem;
}

.timeline-content ul {
  margin: 0;
  padding-left: 20px;

  color: rgba(255, 255, 255, 0.94);
  font-size: 0.94rem;
  line-height: 1.85;
}

.timeline-content li {
  margin-bottom: 6px;
  padding-left: 4px;
}

.timeline-content li::marker {
  color: #f2c9e1;
}

.timeline-exams {
  margin-top: 6px;
}

/* =========================================
   BOTÕES
========================================= */

.timeline-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 24px;
}

.timeline-btn-primary,
.timeline-btn-secondary {
  min-height: 40px;
  padding: 0 16px;

  border-radius: 8px;
  font-weight: 600;
  text-transform: none;

  transition: transform 0.3s ease;
}

.timeline-btn-primary {
  color: #586e9e !important;
  background: #fff !important;
}

.timeline-btn-primary:hover,
.timeline-btn-secondary:hover {
  transform: translateY(-2px);
}

.timeline-btn-secondary {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.75) !important;
}

/* =========================================
   RODAPÉ
========================================= */

.timeline-footer {
  max-width: 650px;

  margin: 48px auto 0;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.timeline-footer p {
  margin: 0;

  color: rgba(255, 255, 255, 0.94);
  font-size: 0.86rem;
  line-height: 1.7;
}

/* =========================================
   TABLETS
========================================= */

@media (min-width: 600px) and (max-width: 800px) {
  .timeline-header {
    margin-bottom: 48px;
  }

  .pregnancy-timeline {
    --stage-width: 150px;
    --axis-width: 18px;
    --column-gap: 26px;
  }

  .timeline-item {
    padding-bottom: 54px;
  }

  .timeline-stage-number {
    font-size: clamp(2rem, 4.5vw, 2.8rem);
  }

  .timeline-phase-title {
    font-size: 1.7rem;
  }
}

/* =========================================
   CELULARES
========================================= */

@media (max-width: 599px) {
  #mother-and-baby {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .timeline-container {
    padding-right: 14px;
    padding-left: 14px;
  }

  .timeline-header {
    margin-bottom: 38px;
  }

  .timeline-eyebrow {
    font-size: 0.62rem;
    letter-spacing: 0.11em;
  }

  .timeline-intro {
    padding: 0 8px;
    font-size: 0.92rem;
  }

  .pregnancy-timeline {
    --stage-width: 82px;
    --axis-width: 14px;
    --column-gap: 22px;
  }

  .timeline-item {
    padding: 22px 0 44px;
    transform: translateY(45px);
  }

  .timeline-item--visible {
    transform: translateY(0);
  }

  .timeline-progress {
    width: 2px;
    margin-left: -1px;
  }

  .timeline-stage-label {
    margin-bottom: 10px;
    font-size: 0.49rem;
    letter-spacing: 0;
  }

  .timeline-stage-number {
    font-size: clamp(1.3rem, 5.3vw, 1.8rem);
    line-height: 1.25;
    letter-spacing: -0.045em;
  }

  .timeline-stage-unit {
    margin-top: 8px;
    font-size: 0.65rem;
  }

  .timeline-marker {
    padding-top: 5px;
  }

  .timeline-marker::before {
    top: -2px;
    width: 26px;
    height: 26px;
  }

  .timeline-marker span {
    flex-basis: 12px;
    width: 12px;
    height: 12px;
    border-width: 2px;
  }

  .timeline-phase-title {
    margin-bottom: 20px;
    font-size: 1.16rem;
    line-height: 1.3;
  }

  .timeline-illustration {
    margin-bottom: 22px;
  }

  .mother-and-baby-item-img {
    max-width: 130px;
    max-height: 145px;
  }

  .timeline-development h4,
  .timeline-exams h4 {
    font-size: 0.84rem;
  }

  .timeline-content ul {
    padding-left: 16px;
    font-size: 0.8rem;
    line-height: 1.7;
  }

  .timeline-content li {
    padding-left: 2px;
  }

  .timeline-actions {
    gap: 8px;
  }

  .timeline-btn-primary,
  .timeline-btn-secondary {
    min-height: 36px;
    padding: 0 8px;
    font-size: 0.73rem;
  }

  .timeline-footer {
    margin-top: 30px;
  }
}

/* =========================================
   CELULARES MUITO ESTREITOS
========================================= */

@media (max-width: 360px) {
  .timeline-container {
    padding-right: 9px;
    padding-left: 9px;
  }

  .pregnancy-timeline {
    --stage-width: 70px;
    --axis-width: 12px;
    --column-gap: 17px;
  }

  .timeline-stage-label {
    font-size: 0.44rem;
  }

  .timeline-stage-number {
    font-size: 1.22rem;
    letter-spacing: -0.05em;
  }

  .timeline-stage-unit {
    font-size: 0.59rem;
  }

  .timeline-phase-title {
    font-size: 1.02rem;
  }

  .timeline-content ul {
    font-size: 0.76rem;
  }

  .timeline-btn-primary,
  .timeline-btn-secondary {
    padding: 0 6px;
    font-size: 0.68rem;
  }

  .timeline-marker::before {
    width: 24px;
    height: 24px;
  }
}

/* =========================================
   ACESSIBILIDADE
========================================= */

@media (prefers-reduced-motion: reduce) {
  .timeline-item,
  .timeline-stage-number span,
  .timeline-marker span,
  .timeline-btn-primary,
  .timeline-btn-secondary {
    transition: none !important;
  }

  .timeline-item {
    opacity: 1;
    transform: none;
  }

  .timeline-stage-number span {
    opacity: 1;
    transform: none;
  }
}
</style>

