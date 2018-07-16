<template>
<h1 class="title">{{title}}</h1>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';

@Component
export default class Title extends Vue {
    @Prop() private title!: string;
}
</script>
<style lang="scss" scoped>
.title {
    border-bottom: 6px dotted #41b883;
    padding-bottom: 20px;
    color: #35495e;
    text-align: center;
    }
</style>
