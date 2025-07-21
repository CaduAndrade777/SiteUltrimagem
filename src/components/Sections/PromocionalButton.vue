<template>
  <div class="type-floating-box">
    <div class="container">
      <div class="copy">
        <p class="heading">Fale com a gente pelo WhatsApp</p>
        <p class="description">
          Agende seu exame ou tire dúvidas com apenas um clique.
        </p>
      </div>
      <button class="button">
        <div class="text-container">
          <a
            class="CTA"
            href="https://bit.ly/4lEGgj6"
            rel="noopener noreferrer"
            target="_blank"
          >
            Quero agendar agora
          </a>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeFloatingBox",
};
</script>

<style>
/* Importa a fonte Ubuntu */
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');

.type-floating-box {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  gap: 48px;
  justify-content: center;
  padding: 96px 16px;
  position: relative;
  font-family: 'Ubuntu', sans-serif;
}

.type-floating-box .container {
  align-items: center;
  background-color: #0a32a3;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  max-width: 1024px;
  padding: 64px 32px;
  width: 100%;
}

.type-floating-box .copy {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  max-width: 800px;
  width: 100%;
}

.type-floating-box .heading {
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}

.type-floating-box .description {
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  line-height: 28.6px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
}

.type-floating-box .button {
  all: unset;
  align-items: center;
  background-color: #2ebf5a;
  border-radius: 8px;
  display: inline-flex;
  gap: 4px;
  justify-content: center;
  padding: 16px 40px;
}

.type-floating-box .text-container {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  padding: 0 4px;
}

.type-floating-box .CTA {
  color: #ecfdf5;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  text-decoration: underline;
  white-space: nowrap;
  font-family: 'Ubuntu', sans-serif;
}
</style>
