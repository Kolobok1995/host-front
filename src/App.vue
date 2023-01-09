<template>
  <div id="app">
    <SiteHeader />
    <PageMain />
    <FooterMain />
  </div>
</template>

<script>
import SiteHeader from '@/components/header/SiteHeader'
import PageMain from '@/components/page/PageMain'
import FooterMain from '@/components/footer/FooterMain'

export default {
    name: 'App',
    components: {
        SiteHeader,
        PageMain,
        FooterMain
    }
}
</script>
