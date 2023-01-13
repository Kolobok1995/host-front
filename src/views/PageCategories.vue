<template>
    <div>
        categories slug = {{ $route.params.slug }}
    </div>
</template>


<script>

export default {
    name: 'PageCategories',
    data() {
        return {
            slug: this.$route.params.slug
        }
    },

}
</script>
