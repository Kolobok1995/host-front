<template>
  <div id="app">
    <!-- <SiteHeader />
    <SiteContent />
    <FooterMain />
  -->
  <SiteHeader />


  </div>
</template>

<script>
import SiteHeader from '@/components/header/SiteHeader'
//import SiteContent from '@/components/body/SiteContent'
//import FooterMain from '@/components/footer/FooterMain'

export default {
    name: 'App',
    components: {
        SiteHeader,
       // SiteContent,
      //  FooterMain
    }
}
</script>

<style scoped lang="scss">

    .content, .footer {
       // @include border-test(red);
       /* background: #fff; */
    }

    #app {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 140px 1fr 50px;
    }
</style>
