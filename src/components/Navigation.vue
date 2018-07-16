<template>
<ul class="navigation">
    <li class="navigation-item">
        <router-link class="navigation-link" to="/">Shows</router-link>
    </li>
    <li class="navigation-item">
        <router-link class="navigation-link" to="/about">About</router-link>
    </li>
</ul>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Navigation extends Vue {
    constructor() {
        super();
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.navigation-item {
    display: inline-block;
    margin-right: 16px;
}

.navigation-link {
    color: honeydew;
    text-decoration: none;

    &:hover {
        border-bottom: 2px solid honeydew;
    }
}
</style>
