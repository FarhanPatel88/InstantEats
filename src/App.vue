<template>
    <router-view></router-view>
</template>

<style lang="css">
    @import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italicp00,600italic,700,700italic,800,800italic,900,900italic);

    html,
    button,
    input {
        font-family: 'Poppins', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body,
    input {
        margin: 0;
        padding: 0;
    }

    .blurred {
        background-color: rgba(0, 0, 0, 0.5);
        /* // height: 35vh; */
        backdrop-filter: blur(6.5px);
    }

    .pointer-default {
        cursor: default;
    }
</style>
