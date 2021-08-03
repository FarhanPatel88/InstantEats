<template>
    <menu-header></menu-header>
    <recommendation-section></recommendation-section>
    <food-menu></food-menu>
</template>

<script>
    import MenuHeader from '../MenuPage/MenuHeader.vue';
    import RecommendationSection from '../MenuPage/RecommendationSection.vue';
    import FoodMenu from '../MenuPage/FoodMenu.vue';
    export default {
        components: {
            MenuHeader,
            RecommendationSection,
            FoodMenu,
        },
    };
</script>
