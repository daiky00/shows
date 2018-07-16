<template>
<div class="summary" v-html="summary"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Summary extends Vue {
    @Prop() private summary!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.summary {
    background: #35495e;
    border: 1px solid #41b883;
    color: #fff;
    font-size: 14px;
    padding: 16px;
    margin-bottom: 24px;

    @media only screen and (max-width: 996px) {
        padding: 8px;
    }
}

</style>
