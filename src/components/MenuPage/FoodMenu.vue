<template>
    <section id="foodmenu">
        <section class="blurred pb-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-center flex-wrap py-3">
                        <header>
                            <h2 class="m-0 display-6 text-capitalize text-white fw-normal">Grab your <span class="text-warning">Food!</span></h2>
                        </header>
                    </div>
                </div>
                <category-selector @clickedCategory="choosenCategory"></category-selector>
                <show-all-foods no-of-items="10" :recommendation="false"></show-all-foods>
            </div>
        </section>
    </section>
    <base-footer></base-footer>
</template>

<script>
    import CategorySelector from './CategorySelector.vue';
    import ShowAllFoods from '../Layouts/ShowAllFoods.vue';
    import BaseFooter from '../BaseLayouts/BaseFooter.vue';
    export default {
        components: {
            CategorySelector,
            ShowAllFoods,
            BaseFooter,
        },
        methods: {
            choosenCategory(category) {
                this.$store.dispatch('changeCategory', {
                    categoryName: category,
                });
            },
        },
    };
</script>

<style lang="css" scoped>
    #foodmenu {
        background-color: #aa9670;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(36,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23aa9670'/%3E%3Cstop offset='1' stop-color='%23ffa53d'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1' gradientTransform='rotate(72,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23fdff7d' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fdff7d' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23fdff7d' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23fdff7d' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.57'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }

    .blurred {
        background-color: rgba(0, 0, 0, 0.35);
        backdrop-filter: none;
    }
</style>
