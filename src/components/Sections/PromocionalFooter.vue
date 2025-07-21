<template>
  <div class="type-simplistic">
    <div class="content">
      <div class="info-container">
        <div class="links">
          <div class="nav-label">32 3531-5783</div>
          <p class="nav-label">Pça das Mercês, 88 - Centro, Ubá - MG</p>
        </div>

        <div class="group">
          <a
            class="group-link"
            href="https://www.instagram.com/ultrimagemuba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              alt="Instagram"
              src="../../assets/img/components/promocional/iconIG.svg"
            />
            @ultrimagemuba
          </a>
          <a
            class="group-link"
            href="https://www.fb.com/UltrimagemUba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              alt="Facebook"
              src="../../assets/img/components/promocional/iconFB.svg"
            />
            UltrimagemUba
          </a>
          <a
            class="group-link"
            href="https://www.uba.ultrimagem.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            uba.ultrimagem.com.br
          </a>
        </div>
      </div>

      <img
        class="vector"
        alt="Logo Ultri"
        src="../../assets/img/components/promocional/logofooter.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeSimplistic",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.type-simplistic {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700; 
  background-color: #319ff4;
  padding: 64px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}


.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-label {
  color: #0a32a3;
  font-size: 14px;
  white-space: nowrap;
}

.vector {
  height: 57px;
  width: 258px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start; 
}

.group-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0a32a3;
  font-size: 14px;
  text-decoration: underline;
  white-space: nowrap;
}

.icon {
  width: 16px;
  height: 16px;
}

@media (min-width: 426px) and (max-width: 1024px) {
  .type-simplistic {
    padding: 40px 24px; 
    align-items: stretch;
  }

  .content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    max-width: 100%;
    gap: 0;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    gap: 8px; 
    flex-grow: 1;
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 16px; 
  }

  .nav-label {
    white-space: nowrap;
    font-size: 14px;
    color: #0a32a3;
  }

  .group {
    display: flex;
    flex-direction: row;
    gap: 16px; 
    flex-wrap: nowrap;
  }

  .vector {
    width: auto;
    height: 50px; 
    flex-shrink: 0;
    margin-left: 16px; 
  }
}

@media (max-width: 425px) {
  .type-simplistic {
    padding: 48px 16px;
  }

  .content {
    gap: 24px;
  }

  .vector {
    width: 180px;
    height: auto;
    margin-top: 24px;
  }

  .group {
    gap: 10px;
    flex-direction: column; 
  }

  .group-link {
    font-size: 13px;
  }

  .nav-label {
    font-size: 13px;
  }
}

</style>
