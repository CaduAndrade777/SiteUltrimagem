<template>
  <div id="ultrimagem-toolbar">
    <!-- HEADER ORIGINAL: permanece intacto -->
    <header class="toolbar-original">
      <q-toolbar class="bg-primary q-pa-none q-pr-none text-white toolbar">
        <q-btn flat to="/" class="toolbar-logo-btn">
          <img
            src="../../assets/img/template/logo-blue-light.svg"
            class="toolbar-logo q-py-sm"
            alt="Logo da Ultrimagem"
          />
        </q-btn>

        <q-space />

        <!-- MENU DESKTOP ORIGINAL -->
        <q-tabs class="toolbar-tabs">
          <template v-for="(item, index) in menu">
            <a
              v-if="!item.external"
              :key="'menu-' + index"
              :href="item.to"
              :class="[
                'q-py-lg q-px-lg toolbar-desktop text-weight-bold text-no-wrap font-hp-comum',
                item.to === '#/radiologia-odontologica'
                  ? 'toolbar-btn-special text-primary'
                  : 'toolbar-btn text-secondary'
              ]"
            >
              {{ item.name }}
            </a>

            <a
              v-else
              :key="'external-' + index"
              :href="item.to"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'q-py-lg q-px-lg toolbar-desktop text-weight-bold text-no-wrap',
                item.special
                  ? 'bg-info text-secondary rounded-borders'
                  : 'text-secondary'
              ]"
            >
              {{ item.name }}
            </a>
          </template>

          <!-- MENU MOBILE ORIGINAL -->
          <q-btn
            icon="menu"
            flat
            class="text-secondary bg-primary q-py-md toolbar-mobile"
            aria-label="Abrir menu mobile"
          >
            <q-menu
              fit
              transition-show="jump-down"
              transition-hide="jump-up"
            >
              <q-list
                class="column items-center bg-primary q-pa-sm"
                style="min-width: 304px"
              >
                <template v-for="(item, index) in menu">
                  <a
                    v-if="!item.external"
                    :key="'mobile-' + index"
                    :href="item.to"
                    :class="[
                      'q-py-lg q-px-lg toolbar-mobile-btn full-width text-center',
                      item.to === '#/radiologia-odontologica'
                        ? 'text-primary bg-secondary'
                        : 'text-secondary bg-primary'
                    ]"
                  >
                    {{ item.name }}
                  </a>

                  <a
                    v-else
                    :key="'mobile-external-' + index"
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="q-py-lg q-px-lg toolbar-mobile-btn full-width text-center text-secondary bg-primary"
                  >
                    {{ item.name }}
                  </a>
                </template>

                <a
                  class="q-py-lg q-px-lg toolbar-mobile-btn text-secondary bg-accent full-width text-center q-mb-sm"
                  href="https://api.whatsapp.com/send?phone=5532984020650"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Exame
                </a>
              </q-list>
            </q-menu>
          </q-btn>
        </q-tabs>

        <!-- WHATSAPP LATERAL ORIGINAL -->
        <q-btn
          unelevated
          class="toolbar-btn-main rotate-270"
          color="info"
          text-color="secondary"
          @click="open"
          aria-label="Agendar exame via WhatsApp"
        >
          Agendar Exame
          <i class="fab fa-whatsapp q-ml-sm" aria-hidden="true"></i>
        </q-btn>
      </q-toolbar>
    </header>

    <!-- NAVBAR FLUTUANTE: aparece ao subir a página -->
    <transition name="floating-nav">
      <nav
        v-if="showFloatingNav"
        class="floating-nav"
        aria-label="Navegação rápida"
      >
        <a
          href="#/"
          class="floating-logo"
          aria-label="Página inicial"
          title="Início"
        >
          <img
            src="../../assets/img/template/logo-only.png"
            alt="Ultrimagem"
          />
        </a>

        <a
          v-for="item in floatingMenu"
          :key="item.name"
          :href="item.to"
          :target="item.external ? '_blank' : null"
          :rel="item.external ? 'noopener noreferrer' : null"
          :class="['floating-link', { 'floating-link--contact': item.contact }]"
        >
          {{ item.name }}
        </a>

        <button
          type="button"
          class="floating-action"
          aria-label="Agendar exame pelo WhatsApp"
          title="Agendar exame"
          @click="open"
        >
          <i class="fab fa-whatsapp" aria-hidden="true"></i>
          <span>Agendar</span>
        </button>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UltrimagemToolbar',

  data () {
    return {
      lastScrollY: 0,
      showFloatingNav: false,
      scrollThreshold: 140,
      scrollDelta: 4,

      menu: [
        {
          to: '#/exames-e-convenios',
          name: 'Exames e Convênios'
        },
        {
          to: '#/quem-somos',
          name: 'Quem Somos'
        },
        {
          to: '#/saude-da-mulher',
          name: 'Saúde da Mulher'
        },
        {
          to: '#/medicina-fetal',
          name: 'Medicina Fetal'
        },
        {
          to: '#/blog',
          name: 'Blog'
        },
        {
          to: '#/contato',
          name: 'Contato'
        },
        {
          to: 'https://pixeon.clickvita.com.br/#/instituicao/ULTRI',
          name: 'Resultado de Exames',
          external: true,
          special: true
        }
      ],

      floatingMenu: [
        {
          to: '#/exames-e-convenios',
          name: 'Exames'
        },
        {
          to: '#/quem-somos',
          name: 'Quem somos'
        },
        {
          to: '#/saude-da-mulher',
          name: 'Saúde da Mulher'
        },
        {
          to: '#/medicina-fetal',
          name: 'Medicina Fetal'
        },
        {
          to: '#/blog',
          name: 'Blog'
        },
        {
          to: '#/contato',
          name: 'Contato',
          contact: true
        }
      ]
    }
  },

  mounted () {
    this.lastScrollY = window.pageYOffset || 0

    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    })
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      const currentY = Math.max(window.pageYOffset || 0, 0)
      const difference = currentY - this.lastScrollY

      // No topo, a navbar flutuante desaparece.
      if (currentY <= this.scrollThreshold) {
        this.showFloatingNav = false
      } else if (difference < -this.scrollDelta) {
        // Subindo: mostrar a navbar flutuante.
        this.showFloatingNav = true
      } else if (difference > this.scrollDelta) {
        // Descendo: esconder a navbar flutuante.
        this.showFloatingNav = false
      }

      this.lastScrollY = currentY
    },

    open () {
      window.open(
        'https://api.whatsapp.com/send?phone=5532984020650',
        '_blank',
        'noopener,noreferrer'
      )
    }
  }
}
</script>


<style scoped lang="scss">
#ultrimagem-toolbar {
  position: relative;
  width: 100%;

  /* HEADER ORIGINAL: mantido com as cores e dimensões existentes */
  .toolbar-original {
    position: relative;
    z-index: 10;
    width: 100%;
    background: $primary;
  }

  .toolbar {
    width: 100%;
    min-height: 76px;
  }

  .toolbar-logo-btn {
    min-height: auto;
    padding: 0 16px;
  }

  .toolbar-logo {
    display: block;
    width: 100%;
    max-width: 13em;
    height: auto;
  }

  .toolbar-tabs {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .toolbar-btn,
  .toolbar-btn-special {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.9em;
    white-space: normal;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .toolbar-btn:hover,
  .toolbar-btn:focus {
    background: $accent;
  }

  .toolbar-btn-special {
    background: $secondary;
    white-space: nowrap;
  }

  .toolbar-btn-special:hover,
  .toolbar-btn-special:focus {
    color: #ffffff;
  }

  .toolbar-mobile {
    display: none;
    font-size: 1.3em;
  }

  .toolbar-mobile-btn {
    display: block;
    text-decoration: none;
    transition: background-color 0.25s ease;
  }

  .toolbar-mobile-btn:hover {
    background-color: $accent;
  }

  .toolbar-btn-main {
    position: fixed;
    padding: 8px 0;
    right: -61px;
    top: 124px;
    z-index: 9999;

    i {
      font-size: 1.3em;
    }
  }

  /* NAVBAR FLUTUANTE */
  .floating-nav {
    position: fixed;
    top: 18px;
    left: 50%;
    z-index: 10000;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: max-content;
    max-width: calc(100vw - 32px);
    padding: 8px 12px;

    transform: translateX(-50%);

    /* Mesma cor de fundo da navbar original */
    background: $primary;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;

    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.18),
      0 2px 8px rgba(0, 0, 0, 0.08);

    color: $secondary;
  }

  /* LOGO FLUTUANTE: sem círculo e em tamanho maior */
  .floating-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;

    width: 54px;
    height: 42px;
    padding: 4px 8px;
    overflow: hidden;

    background: transparent;
    border: none;
    border-radius: 10px;

    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
      outline: none;
    }
  }

  .floating-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 9px 10px;

    color: $secondary;
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    text-decoration: none;

    border-radius: 999px;

    transition:
      color 0.2s ease,
      background-color 0.2s ease;
  }

  .floating-link:hover,
  .floating-link:focus {
    color: $secondary;
    background: rgba(255, 255, 255, 0.14);
    outline: none;
  }

  .floating-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    min-height: 34px;
    padding: 0 13px;

    color: $secondary;
    background: $info;
    border: 0;
    border-radius: 999px;

    font: inherit;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;

    cursor: pointer;

    transition:
      background-color 0.2s ease,
      transform 0.2s ease;

    i {
      font-size: 15px;
    }

    &:hover {
      background: $accent;
      transform: translateY(-1px);
    }
  }
}

/* ANIMAÇÃO DE ENTRADA E SAÍDA */
.floating-nav-enter-active,
.floating-nav-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

.floating-nav-enter,
.floating-nav-leave-to {
  opacity: 0;
  transform: translate(-50%, -16px) scale(0.96);
}

.floating-nav-enter-to,
.floating-nav-leave {
  opacity: 1;
  transform: translate(-50%, 0) scale(1);
}

/* TABLETS */
@media only screen and (max-width: 1280px) {
  #ultrimagem-toolbar {
    .toolbar-btn-main {
      top: 135px;
    }

    .toolbar-mobile {
      display: block !important;
    }

    .toolbar-desktop {
      display: none;
    }

    .floating-nav {
      gap: 5px;
      padding: 7px 10px;
    }

    .floating-link {
      padding: 8px;
    }
  }
}

/* CELULARES */
@media only screen and (max-width: 700px) {
  #ultrimagem-toolbar {
    .toolbar-btn-main {
      display: none;
    }

    .toolbar-logo-btn {
      padding-left: 10px;
    }

    .toolbar-logo {
      max-width: 197px;
    }

    .floating-nav {
      top: 12px;
      gap: 6px;
      width: max-content;
      max-width: calc(100vw - 20px);
      padding: 6px 8px;
    }

    .floating-logo {
      flex-basis: 44px;
      width: 44px;
      height: 36px;
      padding: 3px 5px;
    }

    /* No mobile, esconde todos os links e mostra só o Contato */
    .floating-link {
      display: none;
      padding: 8px 10px;
      font-size: 12px;
    }

    .floating-link.floating-link--contact {
      display: inline-flex;
    }

    .floating-action {
      min-height: 32px;
      padding: 0 12px;
      font-size: 12px;
    }
  }
}

/* CELULARES PEQUENOS */
@media only screen and (max-width: 380px) {
  #ultrimagem-toolbar {
    .floating-logo {
      flex-basis: 38px;
      width: 38px;
      height: 32px;
      padding: 2px 4px;
    }

    .floating-link {
      padding: 7px 8px;
      font-size: 11px;
    }

    .floating-action {
      min-height: 30px;
      padding: 0 10px;
      font-size: 11px;
    }
  }
}

/* ACESSIBILIDADE */
@media (prefers-reduced-motion: reduce) {
  .floating-nav-enter-active,
  .floating-nav-leave-active {
    transition: none !important;
  }
}
</style>