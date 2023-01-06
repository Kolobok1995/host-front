<template>
    <div class="body-main container-fluid">
        <CatalogLeftBlock />
    </div>
</template>

<script>
import CatalogLeftBlock from '@/components/body/catalog/CatalogLeftBlock'

export default {
    name: 'HeaderMain',
    components: {
        CatalogLeftBlock,
    }
}
</script>