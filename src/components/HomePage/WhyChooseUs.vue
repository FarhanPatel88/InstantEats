<template>
    <section id="whychooseus">
        <section class="blurred pb-5">
            <div class="container">
                <div class="row mb-4">
                    <header class="col-12 d-flex align-items-center justify-content-center">
                        <p class="display-5 m-4 text-white">Why <span class="text-warning">Choose</span> Us?</p>
                    </header>
                </div>
                <div class="row mb-5">
                    <div class="col-6">
                        <base-card>
                            <div class="row w-100">
                                <figure class="col-6 mb-0">
                                    <img src="../../assets/cardimg1.jpg" class="cardimg1" />
                                </figure>
                                <p class="col-6 mb-0 h3 text-capitalize d-flex flex-column justify-content-center align-items-start">
                                    <span class="text-danger">Hygiene is our Top Most Priority!</span> <br />
                                    Hence, <span class="text-primary">our foods are freshly prepared.</span>
                                </p>
                            </div>
                        </base-card>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-6"></div>
                    <div class="col-6">
                        <base-card>
                            <div class="row w-100">
                                <figure class="col-6 mb-0">
                                    <img src="../../assets/cardimg2.jpg" class="cardimg1" />
                                </figure>
                                <p class="col-6 mb-0 h3 text-capitalize d-flex flex-column justify-content-center align-items-start">
                                    <span class="text-danger">Bang for buck!</span> <br />
                                    <span class="text-primary">our foods are delicious yet afforable.</span>
                                </p>
                            </div>
                        </base-card>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-6">
                        <base-card>
                            <div class="row w-100">
                                <figure class="col-6 mb-0">
                                    <img src="../../assets/cardimg3.jpg" class="cardimg1" />
                                </figure>
                                <p class="col-6 mb-0 h3 text-capitalize d-flex flex-column justify-content-center align-items-start">
                                    <span class="text-danger">Safe Delivery!</span> <br />
                                    <span class="text-primary">Sit back and relax, your food will be delivered safely.</span>
                                </p>
                            </div>
                        </base-card>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import BaseCard from '../BaseLayouts/BaseCard.vue';
    export default {
        components: {
            BaseCard,
        },
    };
</script>

<style lang="scss" scoped>
    .w-100 {
        width: 100vmax !important;
    }

    #whychooseus {
        background-image: url('../../assets/whychooseus.jpg');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center;
        background-size: cover;

        header p {
            font-weight: 500;
        }
    }

    .cardimg1 {
        width: 100%;
        height: 100%;
        border-radius: 50px;
        border: 1px solid orange;
    }
    .blurred {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
