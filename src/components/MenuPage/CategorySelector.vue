<template>
    <div class="row p-3">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <base-card v-for="category in categories" :key="category" class="p-0 rounded-3 m-2 mb-0" @click="$emit('clickedCategory', category)">
                <p class="p-2 px-3 m-0 fw-bold pointer-default">{{ category }}</p>
            </base-card>
        </div>
    </div>
</template>

<script>
    import BaseCard from '../BaseLayouts/BaseCard.vue';

    export default {
        components: {
            BaseCard,
        },
        computed: {
            categories() {
                return this.$store.getters.getCategories;
            },
        },
    };
</script>
