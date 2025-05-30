<template>
  <div id="odontologia" class="q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h1 class="grey-text">Radiologia Odontológica</h1>

          <p class="grey-text">
            A <strong>Radiologia Odontológica</strong> é um campo essencial para o diagnóstico e
            planejamento de tratamentos odontológicos, permitindo uma abordagem
            mais personalizada e segura para cada paciente. Com a aquisição dos
            equipamentos mais modernos, somos capazes de capturar imagens
            radiográficas de alta resolução que proporcionam aos nossos
            profissionais uma visão detalhada da estrutura bucal, permitindo um
            diagnóstico preciso e um planejamento de tratamento personalizado.
          </p>

          <q-btn
            class="button-primary q-mb-md"
            color="primary"
            text-color="secondary"
            unelevated
            label="Saiba mais"
            href="https://api.whatsapp.com/send?phone=5532984020650"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        <!-- Imagem comentada, mas estrutura mantida -->
        <!--
        <div class="col-md-6 col-12 q-px-xl q-pt-lg">
          <q-img
            class="gt-sm odontologia-img"
            src="../../assets/img/section/medicinaFetal/medicina-fetal-introducao.svg"
            alt="Ilustração representando radiologia odontológica"
            loading="lazy"
          />
        </div>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Odontologia"
};
</script>

<style scoped>
#odontologia {
  background-color: #f4f7f9;
}

.odontologia-img {
  border-radius: 8px;
}
</style>
