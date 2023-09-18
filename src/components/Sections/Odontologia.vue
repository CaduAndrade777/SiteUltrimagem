<template>
  <div id="odontologia" class="q-py-xl">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="grey-text">Radiologia Odontológica</h2>

          <p class="grey-text">
            A <b>Radiologia Odontológica</b> é um campo essencial para o diagnóstico e
            planejamento de tratamentos odontológicos, permitindo uma abordagem
            mais personalizada e segura para cada paciente. Com a aquisição dos
            equipamentos mais modernos, somos capazes de capturar imagens
            radiográficas de alta resolução que proporcionam aos nossos
            profissionais uma visão detalhada da estrutura bucal, permitindo um
            diagnóstico preciso e um planejamento de tratamento personalizado.
          </p>

          <!-- <p class="text-red">Pendência de texto*</p> -->
          <q-btn
            class="button-primary q-mb-md"
            color="primary"
            text-color="secondary"
            unelevated
            label="Saiba mais"
            href="https://api.whatsapp.com/send?phone=5532984020650"
            target="_blank"
          />
        </div>
        <!--
        <div class="col-md-6 col-12 q-px-xl q-pt-lg">
          <q-img
            class="gt-sm medicine-fetal-img"
            src="../../assets/img/section/medicinaFetal/medicina-fetal-introducao.svg"
          />
        </div>
      --></div>
    </div>
  </div>
</template>


<style lang="scss">
#medicine-fetal {
  background-color: #f4f7f9;
}
#medicina-fetal .medicine-fetal-img {
  border-radius: 8px;
}

#modal-lead .q-stepper__label:after,
.q-stepper__dot:before {
  display: none;
}

#modal-lead .q-stepper__tab {
  padding: 0px;
}

#modal-lead .q-stepper__dot {
  border: solid 2px #299dd5;
  background: white;
  min-width: 16px !important;
  height: 16px !important;
}

#modal-lead .q-stepper__dot i {
  display: none;
}

#modal-lead .q-stepper__tab--active .q-stepper__dot {
  background: #299dd5;
}

#modal-lead .q-stepper__header--standard-labels .q-stepper__tab {
  min-height: 50px;
  margin-bottom: 20px;
}
#modal-lead .q-focus-helper {
  position: inherit;
}
</style>
