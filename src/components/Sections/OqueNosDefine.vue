<template> 
  <section id="oqueosDefine">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="title"></h1>
          <p>
              Cras mattis vestibulum quam missão mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec tincidunt pretium, ipsum ante scelerisque massa, visão sed semper purus augue eget diam.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <img src="../../assets/img/components/oferecemosHome/item2.svg">
            <h3 class="text-center">Humanismo</h3>
            <p class="text-center">Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque.</p>
        </div>
        <div class="col-md-4">
            <img src="../../assets/img/components/oferecemosHome/item2.svg">
            <h3 class="text-center">Informação</h3>
            <p class="text-center">Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque.</p>
        </div>
        <div class="col-md-4">
            <img src="../../assets/img/components/oferecemosHome/item2.svg">
            <h3 class="text-center">Dedicação</h3>
            <p class="text-center">Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque.</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: " <strong> O que nos define  </strong>",
    };
  },
  componentes: {}
};
</script>
<style scoped></style>
