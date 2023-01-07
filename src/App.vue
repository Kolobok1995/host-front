<template>
  <div id="app">
    <HeaderMain />
    <PageMain />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from '@/components/header/HeaderMain'
import PageMain from '@/components/page/PageMain'
import FooterMain from '@/components/footer/FooterMain'

export default {
    name: 'App',
    components: {
        HeaderMain,
        PageMain,
        FooterMain
    }
}
</script>

<style>
    .main-container {
        max-width: 1360px;   
    }
  </style>