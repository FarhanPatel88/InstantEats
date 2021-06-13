<template>
    <home-header></home-header>
    <stats-section></stats-section>
    <why-choose-us></why-choose-us>
    <home-footer></home-footer>
</template>
<script>
    import HomeHeader from '../HomePage/HomeHeader.vue';
    import StatsSection from '../HomePage/StatsSection.vue';
    import WhyChooseUs from '../HomePage/WhyChooseUs.vue';
    import HomeFooter from '../HomePage/HomeFooter.vue';
    export default {
        components: {
            HomeHeader,
            StatsSection,
            WhyChooseUs,
            HomeFooter,
        },
    };
</script>

<style lang="scss" scoped></style>
