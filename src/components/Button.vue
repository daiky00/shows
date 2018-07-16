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
    background: linear-gradient(to right, rgba(107, 183, 86, 0.95), #008f68);
    color: #f5ea3c;
}
</style>