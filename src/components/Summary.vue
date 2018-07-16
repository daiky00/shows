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
    background: linear-gradient(to right, rgba(107, 183, 86, 0.95), #008f68);
    color: #000;
    font-size: 14px;
    padding: 16px;
    margin-bottom: 24px;

    @media only screen and (max-width: 996px) {
        background: linear-gradient(to left, #f5ea3c, #008f68);
        padding: 8px;
    }
}

</style>
