<template>
    <div class="row mb-3 p-0">
        <div class="col-12 d-flex justify-content-center align-items-center flex-wrap display-6">Food Details</div>
    </div>
    <div class="row mb-4 p-0">
        <div class="col-5 d-flex justify-content-center align-items-center flex-wrap">
            <figure>
                <img :src="fooditem.Itemimgurl" alt="food image" class="w-100 rounded-5 border-1 border border-danger" />
            </figure>
            <base-card class="p-0">
                <p class="p-2 px-3 lead m-0 fw-normal">{{ fooditem.Itemname }}</p>
            </base-card>
        </div>
        <div class="col-7 d-flex justify-content-between align-items-center flex-wrap">
            <base-card class="rounded-3 w-100 p-0 px-2">
                <div class="row">
                    <div class="col-12 d-flex justify-content-start align-items-center flex-wrap">
                        <p class="lead m-0 mb-2 mr-5 text-primary fw-normal border-bottom border-dark">Description</p>
                        <p class="lead m-0 mb-2 text-danger fw-normal">{{ fooditem.Itemdescription }}</p>
                    </div>
                </div>
            </base-card>
            <base-card class="rounded-3 p-0 mr-5 w-40">
                <p class="lead m-0 p-2 fw-normal">Price: {{ fooditem.Itemprice }}₹/- only</p>
            </base-card>
            <base-card class="rounded-3 p-0 justify-content-center w-40">
                <p class="lead m-0 p-2 fw-normal">Quantity:</p>
                <input type="number" class="w-40 px-2 pe-0 me-1" v-model.number="itemqty" />
            </base-card>
            <base-card class="rounded-3 p-0">
                <i v-for="(item, index) in Math.round(fooditem.Itemrating)" :key="index" class="bi bi-star-fill text-warning p-2"></i>
            </base-card>
        </div>
        <div
            class="col-12 d-flex justify-content-center align-items-center mt-2 mb-0 border border-primary border-1 rounded-3 bg-info-gradient"
            v-if="itemadded"
        >
            <h4 class="fw-normal text-black">Item is added to your cart</h4>
        </div>
    </div>
    <div class="row w-100">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <base-button class="px-3 py-2 bg-info fw-bold" @click="addToCart">Add to Cart</base-button>
            <base-button class="fw-bold">
                <router-link to="/cart" class="px-3 py-2 text-decoration-none text-dark"> Go to Cart </router-link>
            </base-button>
            <base-button class="px-3 py-2 bg-danger fw-bold">Order Now</base-button>
        </div>
    </div>
</template>

<script>
    import BaseCard from '../BaseLayouts/BaseCard.vue';
    import BaseButton from '../BaseLayouts/BaseButton.vue';
    export default {
        components: {
            BaseCard,
            BaseButton,
        },
        data() {
            return {
                fooditem: null,
                itemqty: 1,
                itemadded: false,
            };
        },
        props: ['id'],
        watch: {
            id(newid) {
                const items = this.$store.getters.getItems;
                const singleitem = items.find((item) => item.Itemid === newid);
                this.fooditem = singleitem;
            },
        },
        created() {
            this.findfooditem();
        },
        methods: {
            findfooditem() {
                const items = this.$store.getters.getItems;
                let singleitem = items.find((item) => item.Itemid == this.id);
                this.fooditem = singleitem;
            },
            addToCart() {
                const cartitems = this.$store.getters.getCartItems;
                const cartitem = cartitems.find((item) => item.foodId == this.id);
                if (cartitem) {
                    this.$store.dispatch('changeQuantityInCart', {
                        id: cartitem.foodId,
                    });
                } else {
                    this.$store.dispatch('addItemsToCart', {
                        foodName: this.fooditem.Itemname,
                        foodDescription: this.fooditem.Itemdescription,
                        foodImgUrl: this.fooditem.Itemimgurl,
                        foodPrice: this.fooditem.Itemprice,
                        foodQty: this.itemqty,
                        foodId: this.id,
                    });
                }
                this.itemadded = true;
                setTimeout(() => {
                    this.itemadded = false;
                }, 2000);
            },
        },
    };
</script>

<style lang="css" scoped>
    .rounded-5 {
        border-radius: 30px;
    }

    .mr-5 {
        margin-right: 6rem !important;
    }

    .w-40 {
        width: 40% !important;
    }

    .bg-info-gradient {
        /* background-color: rgba($color: #00d9ff, $alpha: 0.3); */
        background-color: rgba(0, 217, 255, 0.3);
        backdrop-filter: blur(3px);
    }
</style>
