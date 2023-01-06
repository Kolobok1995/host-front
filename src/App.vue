<template>
  <div id="app">
    <HeaderMain />
    <BodyMain />
  </div>
</template>

<script>
import HeaderMain from '@/components/header/HeaderMain'
import BodyMain from '@/components/body/BodyMain'

export default {
    name: 'App',
    components: {
        HeaderMain,
        BodyMain,
    }
}
</script>

