<template>
<div class="home">
    <Title title="🤹 Watch your favorites shows"/>
    <Shows/>
</div>

</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import Title from '@/components/Title.vue'; // @ is an alias to /src
import Shows from '@/components/Shows.vue'; // @ is an alias to /src
import store from '@/store';

@Component({
    components: {
        Title,
        Shows
    }
})
export default class Home extends Vue {
    constructor() {
        super();
    }
}
</script>
