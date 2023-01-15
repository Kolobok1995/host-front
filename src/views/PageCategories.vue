<template>
    <div class="container">
        categories slug = {{ $route.params.slug }} <br>
    </div>
</template>


<script>

export default {
    name: 'PageCategories',
    data() {
        return {
            slug: this.$route.params.slug
        }
    }
}
</script>
