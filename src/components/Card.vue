<template>
<div class="card">
<slot></slot>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.card {
    background: #ffffff;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 #41b883, 0 1px 5px 0 rgb(245, 234, 60);
    color: #35495e;
    margin-bottom: 24px;
}
</style>
