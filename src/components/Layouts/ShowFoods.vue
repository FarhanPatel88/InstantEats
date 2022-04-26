<template>
    <div class="row justify-content-center">
        <base-card
            v-for="(item, index) in Items.slice(0, Number(numberOfItems))"
            :key="item.Itemid"
            class="col-lg-3 col-5 justify-content-center m-2 bg-no-image"
            @basecardref="showfood(item.Itemid)"
        >
            <figure class="bg-white rounded-4 h-70 border border-3 border-warning">
                <transition name="scalefood" mode="out-in">
                    <img
                        v-if="!showrating[index]"
                        :src="item.Itemimgurl"
                        :alt="item.Itemname"
                        class="h-100 w-100 rounded-4"
                        @mouseenter="changetorating(index)"
                        @mouseleave="changetorating(index)"
                    />
                    <div v-else class="d-flex justify-content-center align-items-center flex-wrap h-100 w-100" @mouseleave="changetorating(index)">
                        <div class="d-flex justify-content-center align-items-center mx-5 mb-3 mt-2">
                            <p class="display-6 m-0 mx-1 pointer-default">{{ item.Itemrating }}</p>
                            <i class="bi bi-star h2 m-0 text-warning"></i>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mx-5 mb-3">
                            <i v-for="(i, index) in Math.round(item.Itemrating)" :key="index" class="bi bi-star-fill text-warning"></i>
                        </div>
                        <p class="display-6 mx-5 mb-3 pointer-default">{{ item.Itemprice }}₹</p>
                    </div>
                </transition>
            </figure>
            <div class="w-100 d-flex justify-content-center align-items-center"></div>
            <base-card class="justify-content-center bg-item-name">
                <div class="px-3 fw-bold">
                    {{ item.Itemname }}
                </div>
            </base-card>
        </base-card>
    </div>
</template>

<script>
    import BaseCard from '../BaseLayouts/BaseCard.vue';

    export default {
        components: {
            BaseCard,
        },
        data() {
            return {
                showrating: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                },
            };
        },
        props: ['numberOfItems', 'recommendation'],
        computed: {
            Items() {
                if (this.recommendation) {
                    return this.$store.getters.getItems;
                } else {
                    const category = this.$store.getters.getCategory;
                    if (category === 'All') {
                        return this.$store.getters.getItems;
                    } else {
                        const fooditems = this.$store.getters.getItems;
                        const items = fooditems.filter((fooditem) => fooditem.ItemCategory === category);
                        return items;
                    }
                }
            },
        },
        methods: {
            changetorating(id) {
                this.showrating[id] = !this.showrating[id];
            },
            showfood(id) {
                this.$emit('showitem', id);
            },
        },
    };
</script>

<style lang="css" scoped>
    .rounded-4 {
        border-radius: 20px;
    }

    .fw-bold {
        font-weight: 600 !important;
    }

    .h-70 {
        height: 70%;
    }

    @media (min-width: 992px) {
        .col-lg-3 {
            flex: 0 0 auto;
            width: 23%;
        }
    }

    .bg-no-image {
        background-image: none;
        /* background-color: rgba($color: #ff9204, $alpha: 0.2); */
        background-color: rgba(#ff9204, 0.2);
        backdrop-filter: blur(5px);
    }

    .bg-item-name {
        background-image: none;
        /* background-color: rgba($color: #ffffff, $alpha: 1); */
        background-color: rgba(#ffffff, 1);
    }

    .scalefood-enter-from,
    .scale-leave-to {
        transform: scale(0);
    }

    .scalefood-enter-active {
        transition: transform 0.15s ease-in;
    }

    .scalefood-leave-active {
        transition: transform 0.1s ease-out;
    }

    .scalefood-enter-to,
    .scale-leave-from {
        transform: scale(1);
    }

    .w-inherit {
        width: inherit;
    }
</style>
