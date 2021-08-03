<template>
    <section id="homeheader">
        <section class="blurred">
            <header class="container">
                <page-header></page-header>
            </header>
            <welcome-section></welcome-section>
        </section>
    </section>
</template>

<script>
    import WelcomeSection from '../HomePage/WelcomeSection.vue';
    import PageHeader from '../Layouts/PageHeader.vue';

    export default {
        components: {
            WelcomeSection,
            PageHeader,
        },
    };
</script>

<style lang="scss" scoped>
    #homeheader {
        background-image: url('../../assets/homeheader2.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
        // height: 35vh;
    }
</style>
