<template>
<div class="fancy-title">
    <h2>{{title}}</h2>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FancyTitle extends Vue {
    @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fancy-title {
    background: #f5ea3c;
    clip-path: polygon(50% 0%, 100% 0, 180% 0, 0 100%, 0 0, 0 0);
    min-height: 180px;
    margin: 0;
    padding: 16px;
    line-height: 1.5;
    @media only screen and (max-width: 996px) {
        clip-path: none;
        min-height: auto;
        padding: 8px;
    }
}
</style>
