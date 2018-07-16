<template>
<header class="header">
    <span class="header-spacer"></span>
    <slot></slot>
</header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
    background: linear-gradient(to right, #f5ea3c, #41b883);
    top: 0;
    left: 0;
    right: 0;
    padding: 16px;
    display: flex;
    height: 18px;
}

.header-spacer {
    flex: 1 1 auto;
}
</style>
