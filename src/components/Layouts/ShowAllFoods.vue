<template lang="html">
    <show-foods @showitem="showfooditem" :numberOfItems="noOfItems" :recommendation="recommendation"></show-foods>
    <transition name="modal">
        <base-dialog v-if="fooditemname" @close="hidefooditem">
            <router-view v-slot="slotProps">
                <component :is="slotProps.Component"></component>
            </router-view>
        </base-dialog>
    </transition>
</template>
<script>
    import ShowFoods from '../Layouts/ShowFoods.vue';
    import BaseDialog from '../BaseLayouts/BaseDialog.vue';
    export default {
        components: {
            ShowFoods,
            BaseDialog,
        },
        props: ['noOfItems', 'recommendation'],
        data() {
            return {
                fooditemname: false,
            };
        },
        methods: {
            showfooditem(id) {
                this.fooditemname = !this.fooditemname;
                this.$router.push(`/menu/${id}`);
            },
            hidefooditem() {
                this.fooditemname = false;
                this.$router.go(-1);
            },
        },
    };
</script>
<style lang="css" scoped>
    .modal-enter-from,
    .modal-leave-to {
        transform: translate(-100vw);
    }

    .modal-enter-active {
        transition: transform 0.15s ease-in;
    }

    .modal-leave-active {
        transition: transform 0.15s ease-out;
    }

    .modal-enter-to,
    .modal-leave-from {
        transform: translate(0);
    }
</style>
