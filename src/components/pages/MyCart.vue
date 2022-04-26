<template lang="html">
    <section id="mycartpage">
        <section class="blurred pb-4">
            <div class="container">
                <page-header></page-header>
            </div>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 d-flex justify-content-center align-items-center flex-wrap m-3">
                        <h2 class="display-6 fw-normal text-white">Items in your Cart</h2>
                    </div>
                </div>
                <div class="p-3 border border-3 border-warning rounded-5 shadow d-flex justify-content-center align-items-center" id="cartbg">
                    <div class="row" id="cartitems">
                        <h2 class="display-6 text-white" v-if="cartItems.length === 0">There are no items in your cart!</h2>
                        <div class="col-7 mx-auto my-2" v-else v-for="cartItem in cartItems" :key="cartItem.foodId">
                            <base-card class="row" id="cartcard">
                                <div class="col-5 d-flex justify-content-center align-items flex-wrap">
                                    <figure>
                                        <img
                                            :src="cartItem.foodImgUrl"
                                            :alt="cartItem.foodName"
                                            class="w-100 rounded-5 border-1 border border-danger"
                                        />
                                    </figure>
                                    <base-card class="p-0">
                                        <p class="p-2 px-3 lead m-0 fw-normal">{{ cartItem.foodName }}</p>
                                    </base-card>
                                </div>
                                <div class="col-7 d-flex justify-content-between align-items-center flex-wrap">
                                    <base-card class="rounded-3 w-100 p-0 px-2 my-3">
                                        <div class="row">
                                            <div class="col-12 d-flex justify-content-start align-items-center flex-wrap">
                                                <p class="lead m-0 mb-2 mr-5 text-primary fw-normal border-bottom border-dark">Description</p>
                                                <p class="lead m-0 mb-2 text-danger fw-normal">{{ cartItem.foodDescription }}</p>
                                            </div>
                                        </div>
                                    </base-card>
                                    <base-card class="rounded-3 p-0 mr-5 mb-3">
                                        <p class="lead m-0 p-2 fw-normal">Price: {{ cartItem.foodPrice }}₹/- only</p>
                                    </base-card>
                                    <base-card class="d-flex rounded-3 p-0 justify-content-center w-50">
                                        <p class="lead m-0 p-2 fw-normal">Quantity:</p>
                                        <input
                                            type="number"
                                            :value="cartItem.foodQty"
                                            class="w-40 px-2 pe-0 me-1"
                                            @input="changequantity($event, cartItem.foodId)"
                                        />
                                    </base-card>
                                    <base-card
                                        class="rounded-3 p-2 text-warning bg-none bg-danger fw-bold pointer-default animation"
                                        @click="removefromcart(cartItem.foodId)"
                                    >
                                        Remove from Cart
                                    </base-card>
                                </div>
                            </base-card>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 mx-3 p-3 justify-content-end align-items-center border border-2 border-danger rounded-5 bg-gradient">
                    <div class="col-3 d-flex justify-content-center align-items-center">
                        <div class="p-2 fw-normal lead bg-white rounded-3">
                            Total: {{ cartPrice }}₹-/
                            <button class="bg-primary text-white p-2 rounded-3 animation m-1" v-if="cartPrice != 0">
                                <router-link to="/checkout" class="text-white text-decoration-none">CheckOut</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    import PageHeader from '../Layouts/PageHeader.vue';
    import BaseCard from '../BaseLayouts/BaseCard.vue';
    export default {
        components: {
            PageHeader,
            BaseCard,
        },
        data() {
            return {};
        },
        computed: {
            cartItems() {
                return this.$store.getters.getCartItems;
            },
            cartPrice() {
                return this.$store.getters.getCartPrice;
            },
        },
        methods: {
            changequantity(event, id) {
                const value = event.target.value;
                this.$store.dispatch('changeQuantityInCart', {
                    quantity: Number(value),
                    id: id,
                });
            },
            removefromcart(id) {
                this.$store.dispatch('removeItemsFromCart', { id });
            },
        },
    };
</script>
<style lang="css" scoped>
    #mycartpage {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3137%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient3138)'%3e%3c/rect%3e%3cpath d='M396.59 630.26C559.98 627.61 686.02 432.17 1017.09 424.7 1348.15 417.23 1469.7 172.15 1637.58 167.1' stroke='rgba(51%2c 121%2c 194%2c 0.65)' stroke-width='2'%3e%3c/path%3e%3cpath d='M626.1 659.92C765.11 654.48 857.45 436.65 1131.91 427.97 1406.38 419.29 1502.16 235.36 1637.73 231.97' stroke='rgba(51%2c 121%2c 194%2c 0.65)' stroke-width='2'%3e%3c/path%3e%3cpath d='M961.27 565.98C1073.94 482.19 1000.3 69.48 1203.6 59.29 1406.9 49.1 1562.14 197.9 1688.25 199.29' stroke='rgba(51%2c 121%2c 194%2c 0.65)' stroke-width='2'%3e%3c/path%3e%3cpath d='M228.36 595.75C419.34 581 552.24 202.23 885.33 201.46 1218.42 200.69 1372.43 373.6 1542.3 375.06' stroke='rgba(51%2c 121%2c 194%2c 0.65)' stroke-width='2'%3e%3c/path%3e%3cpath d='M885.62 636.55C969.74 618.5 917.11 415.8 1134.4 398.78 1351.68 381.76 1496.73 190.38 1631.95 185.98' stroke='rgba(51%2c 121%2c 194%2c 0.65)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3137'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient3138'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 84%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
    }

    .blurred {
        min-height: 100vh;
    }

    #cartitems {
        max-height: 50vh;
        overflow: auto;
    }
    #cartitems::-webkit-scrollbar {
        width: 8px;
        margin-right: 1rem;
    }

    #cartitems::-webkit-scrollbar-track {
        box-shadow: inset 0px 0px 7px grey;
        border-radius: 30px;
    }
    #cartitems::-webkit-scrollbar-thumb {
        box-shadow: inset 0px 0px 7px orange;
        border-radius: 30px;
    }

    #cartcard {
        background-image: none;
        background: linear-gradient(to right, #6cdaf8, #fed392);
        box-shadow: 0 0 10px grey;
    }

    .rounded-5 {
        border-radius: 30px;
    }

    .mr-5 {
        margin-right: 6rem !important;
    }

    .w-40 {
        width: 40% !important;
    }

    .bg-none {
        background-image: none !important;
    }

    .animation {
        transition: transform 0.5s;
    }
    .animation:hover {
        transform: scale(1.1);
    }

    #cartbg {
        /* background-color: rgba($color: #d0ff00, $alpha: 0.1); */
        background-color: rgba(208, 255, 0, 0.1);
    }
</style>
