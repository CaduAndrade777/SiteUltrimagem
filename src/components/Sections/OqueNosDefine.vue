<template>
  <section id="oqueosDefine">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1><span> O que nos define </span></h1>
          <p>
            Cras mattis vestibulum quam missão mattis euismod. Ut posuere dolor
            neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed
            viverra, felis nec tincidunt pretium, ipsum ante scelerisque massa,
            visão sed semper purus augue eget diam.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-3 col-sm-6 q-mt-lg q-px-md text-center"
        v-for="(item, index) in mission"
        :key="item.id"
      >
        <img
          :src="
            require(`../../assets/img/components/oferecemosHome/${item.img}`)
          "
        />
        <h3>Humanismo</h3>
        <p>
          Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis
          vestibulum quam mattis euismod. Ut posuere dolor neque.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mission: [
        {
          id: 1,
          img: "item1.svg",
          title: "Humanismo",
          description:
            "Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque."
        },
        {
          id: 2,
          img: "item2.svg",
          title: "Informação",
          description:
            "Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque."
        },
        {
          id: 3,
          img: "item3.svg",
          title: "Dedicação",
          description:
            "Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque."
        },
        {
          id: 4,
          img: "item4.svg",
          title: "Imagens de qualidade",
          description:
            "Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque."
        }
      ]
    };
  },
  componentes: {}
};
</script>
<style scoped></style>
