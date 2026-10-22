<template>
  <div class="row" id="blog-list-news">
    <!-- Introdução -->
    <div class="col-md-6 col-12 bg-primary">
      <section>
        <div class="container-2 text-secondary">
          <h2 class="font-hp-regular">
            Informações sobre saúde
          </h2>

          <p style="font-size: 1.2rem">
            No blog de saúde da Ultrimagem – Ubá você confere dicas e
            informações interessantes sobre as campanhas da clínica,
            novidades em equipamentos, exames e muito mais. Confira!
          </p>
        </div>
      </section>
    </div>

    <!-- Últimas notícias -->
    <div class="col-md-6 col-12 bg-grey-2">
      <section>
        <div class="container-2 text-secondary">
          <h2 class="font-hp-regular text-grey-8">
            Últimas Notícias
          </h2>

          <div v-if="carregando" class="blog-loading">
            Carregando notícias...
          </div>

          <div v-else-if="erroNoticias" class="blog-loading">
            <p>Não foi possível carregar as notícias no momento.</p>

            <button
              type="button"
              class="blog-retry-button"
              @click="getPosts"
            >
              Tentar novamente
            </button>

            <p class="blog-profile-link">
              Você também pode conferir os artigos diretamente no
              <a
                href="https://medium.com/@ultrimagemuba"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog da Ultrimagem no Medium
              </a>.
            </p>
          </div>

          <template v-else>
            <a
              v-for="noticia in noticias"
              :key="noticia.guid || noticia.link"
              href="#"
              class="card-new-slim blog-list-news-card q-mb-md cursor-pointer"
              @click.prevent="openCard(noticia)"
            >
              <div class="blog-card-image-wrapper">
                <q-img
                  v-if="noticia.thumbnail"
                  :src="noticia.thumbnail"
                  :alt="noticia.title"
                  class="blog-list-news-card-img"
                  @error="imagemComErro(noticia)"
                />

                <div
                  v-else
                  class="blog-list-news-card-img blog-image-placeholder"
                >
                  <q-icon name="article" size="36px" />
                </div>
              </div>

              <div class="card-body full-width">
                <div class="card-title mx-3">
                  <h3
                    class="my-0 grey-text ellipsis-2-lines news-title font-hp-regular"
                  >
                    {{ noticia.title }}
                  </h3>
                </div>

                <p class="card-text ellipsis-2-lines m-3 grey-text">
                  {{ noticia.description }}
                </p>

                <span class="blog-card-action">
                  Ver notícia
                </span>
              </div>
            </a>

            <div
              v-if="noticias.length === 0"
              class="blog-loading"
            >
              Nenhuma notícia disponível no momento.
            </div>

            <div class="blog-profile-link">
              <a
                href="https://medium.com/@ultrimagemuba"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todos os artigos no Medium
              </a>
            </div>
          </template>
        </div>
      </section>
    </div>

    <!-- Modal expandido -->
    <transition name="blog-expand">
      <div
        v-if="activeNews"
        class="blog-expand-overlay"
        @click.self="closeCard"
      >
        <div
          class="blog-expand-card bg-grey-2 text-secondary"
          role="dialog"
          aria-modal="true"
          :aria-label="activeNews.title"
          @click.stop
        >
          <button
            class="blog-expand-close"
            type="button"
            aria-label="Fechar notícia"
            @click="closeCard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div
            v-if="activeNews.thumbnail"
            class="blog-expand-image-wrapper"
          >
            <q-img
              :src="activeNews.thumbnail"
              :alt="activeNews.title"
              class="blog-expand-image"
            />
          </div>

          <div class="blog-expand-content">
            <h3
              class="grey-text news-title blog-expand-title font-hp-regular"
            >
              {{ activeNews.title }}
            </h3>

            <p
              v-if="activeNews.pubDate"
              class="blog-expand-date"
            >
              {{ formatarData(activeNews.pubDate) }}
            </p>

            <p class="grey-text blog-expand-description">
              {{ activeNews.description }}
            </p>

            <a
              v-if="activeNews.link"
              :href="activeNews.link"
              target="_blank"
              rel="noopener noreferrer"
              class="blog-expand-cta bg-primary text-white"
            >
              Ler artigo completo

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BlogListNews",

  data: function () {
    return {
      noticias: [],
      activeNews: null,
      carregando: false,
      erroNoticias: false
    };
  },

  mounted: function () {
    this.getPosts();
    window.addEventListener("keydown", this.handleKeydown);
  },

  beforeDestroy: function () {
    window.removeEventListener("keydown", this.handleKeydown);
    document.body.style.overflow = "";
  },

  methods: {
    async getPosts() {
      this.carregando = true;
      this.erroNoticias = false;

      try {
        var response = await fetch("/api/medium-posts");

        if (!response.ok) {
          throw new Error("Erro HTTP " + response.status);
        }

        var data = await response.json();

        if (
          data.status !== "ok" ||
          !Array.isArray(data.items)
        ) {
          throw new Error("Resposta inválida da API de notícias.");
        }

        this.noticias = data.items.map(function (item, index) {
          return {
            guid: item.guid || item.link || String(index),
            title: item.title || "Notícia da Ultrimagem",
            link: item.link || "",
            pubDate: item.pubDate || "",
            thumbnail: item.thumbnail || "",
            description:
              item.description || "Leia o artigo completo no Medium."
          };
        });

        this.erroNoticias = this.noticias.length === 0;
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);

        this.noticias = [];
        this.erroNoticias = true;
      } finally {
        this.carregando = false;
      }
    },

    formatarData: function (data) {
      if (!data) {
        return "";
      }

      var date = new Date(data);

      if (isNaN(date.getTime())) {
        return "";
      }

      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    },

    openCard: function (noticia) {
      this.activeNews = noticia;
      document.body.style.overflow = "hidden";
    },

    closeCard: function () {
      this.activeNews = null;
      document.body.style.overflow = "";
    },

    handleKeydown: function (event) {
      if (event.key === "Escape" && this.activeNews) {
        this.closeCard();
      }
    },

    imagemComErro: function (noticia) {
      noticia.thumbnail = "";
    }
  }
};
</script>

<style>
.container-2 {
  max-width: 620px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
}

.bg-blue-clean {
  background-color: #b8def0;
}

#blog-list-news .blog-list-news-card {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  border-bottom: 2px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#blog-list-news .blog-list-news-card:last-child {
  border-bottom: none;
}

#blog-list-news .blog-list-news-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);
}

.blog-card-image-wrapper {
  width: 212px;
  min-width: 212px;
  align-self: stretch;
  overflow: hidden;
}

#blog-list-news .blog-list-news-card-img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 135px;
}

.blog-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f1fc;
  color: #58718c;
}

#blog-list-news .news-title {
  line-height: 26px;
}

.blog-card-action {
  display: inline-block;
  margin: 0 16px 12px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.blog-list-news-card:hover .blog-card-action {
  opacity: 1;
}

.blog-loading {
  padding: 16px 0;
  text-align: center;
}

.blog-retry-button {
  padding: 9px 16px;
  border: none;
  border-radius: 6px;
  background: #1976d2;
  color: #fff;
  cursor: pointer;
}

.blog-profile-link {
  margin: 16px 0;
  text-align: center;
}

.blog-profile-link a {
  color: #1976d2;
  text-decoration: underline;
}

.blog-expand-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.55);
}

.blog-expand-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 12px;
  background: #f5f5f5;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.25);
  font-family: inherit;
  transform-origin: center;
}

.blog-expand-image-wrapper {
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
}

.blog-expand-image {
  width: 100%;
  height: 280px;
}

.blog-expand-content {
  padding: 24px;
  font-family: inherit;
}

.blog-expand-title {
  margin: 0 0 14px;
  overflow-wrap: anywhere;
}

.blog-expand-date {
  font-size: 0.9rem;
  opacity: 0.7;
}

.blog-expand-description {
  line-height: 1.7;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.blog-expand-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: #333;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.blog-expand-close svg {
  stroke: #333;
}

.blog-expand-close:hover {
  transform: rotate(90deg);
}

.blog-expand-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-family: inherit;
  transition: opacity 0.2s ease;
}

.blog-expand-cta:hover {
  opacity: 0.9;
}

.blog-expand-enter-active,
.blog-expand-leave-active {
  transition: opacity 0.2s ease;
}

.blog-expand-enter-active .blog-expand-card,
.blog-expand-leave-active .blog-expand-card {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.blog-expand-enter,
.blog-expand-leave-to {
  opacity: 0;
}

.blog-expand-enter .blog-expand-card,
.blog-expand-leave-to .blog-expand-card {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

@media only screen and (max-width: 600px) {
  .blog-expand-overlay {
    padding: 12px;
  }

  .blog-expand-card {
    max-height: 94vh;
  }

  .blog-expand-image {
    height: 220px;
  }

  .blog-expand-content {
    padding: 18px;
  }

  .blog-card-image-wrapper {
    width: 150px;
    min-width: 150px;
  }
}

@media only screen and (max-width: 375px) {
  #blog-list-news .blog-list-news-card {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  .blog-card-image-wrapper {
    width: 100%;
    min-width: 100%;
  }

  #blog-list-news .blog-list-news-card-img {
    width: 100%;
    min-height: 180px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #blog-list-news *,
  .blog-expand-overlay,
  .blog-expand-card {
    transition: none !important;
    animation: none !important;
  }
}
</style>
