<template lang="html">
    <section id="menuheader">
        <section class="blurred pb-4">
            <header class="container">
                <page-header></page-header>
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-7 d-flex justify-content-center align-items-center flex-wrap" id="offertext">
                        <p class="fw-normal text-white display-6 text-uppercase m-5 mb-3 border-bottom pb-1">
                            Today<span class="text-danger">'s</span> Offer
                        </p>
                        <p class="fw-bold m-5 mb-3 mt-0 display-5 text-lemon text-capitalize"><span class="text-danger">30%</span> Off on Biryani</p>
                        <p class="fw-bold m-5 mb-3 mt-0 display-5 text-lemon text-capitalize"><span class="text-danger">20%</span> Off on Pizzas</p>
                    </div>
                    <figure class="col-5 d-flex justify-content-start align-items-center">
                        <img src="../../assets/pizzaimage.png" alt="" id="offerimage" />
                    </figure>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    import PageHeader from '../Layouts/PageHeader.vue';
    export default {
        components: {
            PageHeader,
        },
    };
</script>
<style lang="css" scoped>
    #menuheader {
        background-image: url('../../assets/menuheader.jpg');
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #offertext {
        padding: 3rem;
        padding-top: 1rem;
        padding-left: 4rem;
    }

    .text-lemon {
        color: rgb(255, 238, 0);
    }

    #offerimage {
        width: 60%;
        border-radius: 1000px;
    }

    .blurred {
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }

    .fw-bold {
        font-weight: 600 !important;
    }
</style>
