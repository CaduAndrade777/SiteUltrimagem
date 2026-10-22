<template>
  <footer id="footer" class="bg-info text-secondary">
    <div class="container footer-container">
      <!-- LOGO -->
      <div class="row justify-center footer-brand">
        <div class="col-12 text-center">
          <q-btn flat to="/" class="footer-logo-link">
            <img
              src="../../assets/img/template/logo-blue-light-horizontal.png"
              alt="Ultrimagem"
              class="footer-logo"
            />
          </q-btn>
        </div>
      </div>

      <!-- NAVEGAÇÃO PRINCIPAL -->
      <nav class="footer-navigation" aria-label="Navegação do rodapé">
        <a href="#/" class="footer-nav-link">Início</a>
        <a href="#/exames-e-convenios" class="footer-nav-link">
          Exames e convênios
        </a>
        <a href="#/blog" class="footer-nav-link">Dicas de saúde</a>
        <a href="#/contato" class="footer-nav-link">Contato</a>
        <a
          href="#/politica-privacidade"
          class="footer-nav-link"
        >
          Privacidade
        </a>
      </nav>

      <q-separator class="footer-divider" />

      <!-- LINKS E INFORMAÇÕES -->
      <div class="row q-col-gutter-xl footer-content">
        <!-- EXAMES 1 -->
        <div class="col-12 col-sm-6 col-md-3">
          <h3 class="footer-title">Exames</h3>

          <a
            v-for="(item, index) in exames"
            :key="'exame-1-' + index"
            class="footer-item"
            :href="item.link"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- EXAMES 2 -->
        <div class="col-12 col-sm-6 col-md-3">
          <h3 class="footer-title">Mais exames</h3>

          <a
            v-for="(item, index) in exames2"
            :key="'exame-2-' + index"
            class="footer-item"
            :href="item.link"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- ATENDIMENTO -->
        <div class="col-12 col-sm-6 col-md-3">
          <h3 class="footer-title">Atendimento</h3>

          <a
            v-for="(item, index) in atendimento"
            :key="'atendimento-' + index"
            class="footer-item"
            :href="item.link"
            :target="item.external ? '_blank' : null"
            :rel="item.external ? 'noopener noreferrer' : null"
          >
            {{ item.name }}
            <q-icon
              v-if="item.external"
              name="open_in_new"
              size="14px"
              class="q-ml-xs"
            />
          </a>

          <a
            class="footer-item"
            href="#/lgpd"
          >
            Lei Geral de Proteção de Dados (LGPD)
          </a>
        </div>

        <!-- REDES SOCIAIS -->
        <div class="col-12 col-sm-6 col-md-3">
          <h3 class="footer-title">Siga a Ultrimagem</h3>

          <p class="footer-social-description">
            Acompanhe nossas novidades e informações sobre saúde.
          </p>

          <div class="footer-social">
            <a
              v-for="item in buttonsSocial"
              :key="item.id"
              :href="item.url"
              :aria-label="item.name"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
            >
              <img
                :src="require(
                  `../../assets/img/components/banner/${item.icon}`
                )"
                :alt="item.name"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- RODAPÉ INFERIOR -->
      <q-separator class="footer-divider footer-divider-bottom" />

      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} Ultrimagem. Todos os direitos reservados.
        </p>

        <div class="footer-legal">
          <a href="#/politica-privacidade">
            Política de Privacidade
          </a>
          <span class="footer-legal-separator">•</span>
          <a href="#/lgpd">
            LGPD
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterUltrimagem",

  data() {
    return {
      currentYear: new Date().getFullYear(),

      exames: [
        {
          name: "Biópsia",
          link: "#/exames-e-convenios/biopsia",
        },
        {
          name: "Densitometria óssea",
          link: "#/exames-e-convenios/densitometria-ossea",
        },
        {
          name: "Ecocardiografia",
          link: "#/exames-e-convenios/ecocardiografia",
        },
        {
          name: "Elastografia Hepática",
          link: "#/exames-e-convenios/elastografia-hepatica",
        },
        {
          name: "Eletrocardiograma",
          link: "#/exames-e-convenios/eletrocardiograma",
        },
      ],

      exames2: [
        {
          name: "Mamografia",
          link: "#/exames-e-convenios/mamografia",
        },
        {
          name: "Raio-x",
          link: "#/exames-e-convenios/raio-x",
        },
        {
          name: "Ressonância",
          link: "#/exames-e-convenios/ressonancia",
        },
        {
          name: "Tomografia",
          link: "#/exames-e-convenios/tomografia",
        },
        {
          name: "Ultrassonografia",
          link: "#/exames-e-convenios/ultrassonografia",
        },
      ],

      atendimento: [
        {
          name: "Ver resultados",
          link: "https://pixeon.clickvita.com.br/#/instituicao/ULTRI",
          external: true,
        },
        {
          name: "Agendar exames",
          link: "https://api.whatsapp.com/send?phone=5532984020650",
          external: true,
        },
        {
          name: "Contato",
          link: "#/contato",
          external: false,
        },
      ],

      buttonsSocial: [
        {
          id: "instagram",
          name: "Instagram da Ultrimagem",
          icon: "instagram.svg",
          url: "https://www.instagram.com/ultrimagemuba/?hl=pt",
        },
        {
          id: "facebook",
          name: "Facebook da Ultrimagem",
          icon: "facebook.svg",
          url: "https://www.facebook.com/UltrimagemUba",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#footer {
  width: 100%;
  padding: 52px 0 20px;
  font-family: "Google Sans", "Roboto", sans-serif;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }

  /* LOGO */
  .footer-brand {
    margin-bottom: 28px;
  }

  .footer-logo-link {
    padding: 0;
    min-height: auto;
  }

.footer-logo {
  display: block;
  width: 100%;
  max-width: 280px;
  height: auto;
  transition: opacity 0.25s ease;
}


  .footer-logo-link:hover .footer-logo {
    opacity: 0.8;
  }

  /* NAVEGAÇÃO CENTRAL */
  .footer-navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px 30px;
    padding: 0 0 28px;
  }

  .footer-nav-link {
    color: inherit;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.25s ease;
  }

  .footer-nav-link:hover {
    color: $positive;
  }

  /* DIVISÓRIAS */
  .footer-divider {
    background: currentColor;
    opacity: 0.15;
  }

  /* CONTEÚDO */
  .footer-content {
    padding-top: 36px;
    padding-bottom: 32px;
  }

  .footer-title {
    margin: 0 0 18px;
    color: inherit;
    font-family: "HP", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }

  .footer-item {
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;
    margin-bottom: 12px;
    color: inherit;
    font-size: 14px;
    line-height: 1.6;
    text-decoration: none;
    overflow-wrap: anywhere;
    transition:
      color 0.25s ease,
      transform 0.25s ease;
  }

  .footer-item:hover {
    color: $positive;
    transform: translateX(3px);
  }

  /* REDES SOCIAIS */
  .footer-social-description {
    margin: 0 0 18px;
    color: inherit;
    font-size: 14px;
    line-height: 1.7;
  }

  .footer-social {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-social-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border: 1px solid currentColor;
    border-radius: 50%;
    color: inherit;
    opacity: 0.8;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease,
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .footer-social-link img {
    display: block;
    width: 18px;
    height: 18px;
    object-fit: contain;
  }

  .footer-social-link:hover {
    color: $positive;
    border-color: $positive;
    opacity: 1;
    transform: translateY(-3px);
  }

  /* BASE DO FOOTER */
  .footer-divider-bottom {
    margin-bottom: 20px;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px 24px;
  }

  .footer-copyright {
    margin: 0;
    color: inherit;
    font-size: 12px;
    line-height: 1.7;
    opacity: 0.8;
  }

  .footer-legal {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 12px;
  }

  .footer-legal a {
    color: inherit;
    text-decoration: none;
    transition: color 0.25s ease;
  }

  .footer-legal a:hover {
    color: $positive;
  }

  .footer-legal-separator {
    opacity: 0.5;
  }
}

/* TABLETS */
@media only screen and (max-width: 768px) {
  #footer {
    padding-top: 40px;

    .footer-container {
      padding-left: 20px;
      padding-right: 20px;
    }

    .footer-navigation {
      gap: 14px 22px;
    }

    .footer-content {
      padding-top: 30px;
      padding-bottom: 24px;
    }

    .footer-title {
      margin-bottom: 14px;
    }

    .footer-bottom {
      justify-content: center;
      text-align: center;
    }

    .footer-legal {
      justify-content: center;
    }
  }
}

/* CELULARES */
@media only screen and (max-width: 425px) {
  #footer {
    padding-top: 32px;

    .footer-logo {
      max-width: 190px;
    }

    .footer-navigation {
      gap: 14px 18px;
      padding-bottom: 22px;
    }

    .footer-nav-link {
      font-size: 13px;
    }

    .footer-content {
      padding-top: 26px;
      padding-bottom: 18px;
    }

    .footer-social-link {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
