<template>
  <div id="app">
    <SiteHeader />
    <PageContent />
    <FooterMain />
  </div>
</template>

<script>
import SiteHeader from '@/components/header/SiteHeader'
import PageContent from '@/components/body/PageContent'
import FooterMain from '@/components/footer/FooterMain'

export default {
    name: 'App',
    components: {
        SiteHeader,
        PageContent,
        FooterMain
    }
}
</script>
