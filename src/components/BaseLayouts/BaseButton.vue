<template>
    <button v-if="!link">
        <slot></slot>
    </button>
    <a v-else :href="to">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: {
            link: {
                type: Boolean,
                default: false,
                required: false,
            },
            to: {
                type: String,
                required: false,
                default: null,
            },
        },
    };
</script>

<style lang="scss" scoped>
    button,
    a {
        padding: 0.5rem 0;
        border-radius: 20px;
        box-shadow: 0 0 5px black;
        text-decoration: none;
        background-color: rgba(255, 153, 0, 1);
        border: none;
        margin: 0 1rem;
        transition: all 0.5s;
    }

    button:hover {
        transform: scale(1.1);
    }
</style>
