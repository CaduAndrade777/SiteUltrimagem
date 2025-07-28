<template>
  <div>
    <PromocionalHeader />
    <HeroSection />
    <Motivos />
    <VoceSabia />
    <ExamesRealizados />
    <PromocionalButton />
    <PromocionalFooter />
  </div>
</template>

<script setup>
import PromocionalHeader from 'components/Sections/PromocionalHeader.vue'
import HeroSection from 'components/Sections/Promocional.vue'
import Motivos from 'components/Sections/PromocionalMotivos.vue'
import VoceSabia from 'components/Sections/vocesabia.vue'
import ExamesRealizados from 'components/Sections/PromocionalExames.vue'
import PromocionalButton from 'components/Sections/PromocionalButton.vue'
import PromocionalFooter from 'components/Sections/PromocionalFooter.vue'
</script>