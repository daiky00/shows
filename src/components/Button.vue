<template>
<button class="btn btn-primary">{{msg}}</button>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop() private msg!: string;
}
</script>
<style lang="scss" scoped>
.btn {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    margin: 8px 0;
}

.btn-primary {
    background: #41b883;
    color: #f5ea3c;
}
</style>