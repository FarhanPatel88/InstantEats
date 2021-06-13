<template>
    <div class="container">
        <div class="row">
            <section class="col-7" id="message">
                <p class="lead">
                    Wanna Enjoy the <span>Tastiest</span> Meal possible? <br />
                    Click the below button to see our <span>Menu.</span> <br />
                    Or <span>Register</span> now to avail discounts!!
                </p>
                <div>
                    <base-button :link="false"><router-link to="/menu">Menu</router-link></base-button>
                    <base-button :link="false"><router-link to="/signup">Register</router-link></base-button>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import BaseButton from '../BaseLayouts/BaseButton.vue';
    export default {
        components: {
            BaseButton,
        },
    };
</script>
<style lang="scss" scoped>
    section#message {
        padding: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        // max-width: 40%;

        div {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                margin: 0.5rem 2rem;
            }
        }
    }
    p {
        font-weight: 500;
        font-size: 30px;
        line-height: 3rem;
        color: rgba(255, 255, 255, 0.7);
        font-variant-caps: all-petite-caps;
    }
    span {
        color: orange;
    }
    a {
        margin: 5px;
        text-decoration: none;
        color: inherit;
        font-weight: 500;
        font-size: 18px;
    }
</style>
