<template>
<div class="about">
    <Title title="😍 About VueJS and Fullscreen assignment" />
    <h3>I did this project with a lot of passion for Fullscreen. Things I use while building it </h3>
    <ul>
        <li>TypeScript</li>
        <li>VueJS</li>
        <li>Vuex</li>
        <li>Axios</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import Title from '@/components/Title.vue'; // @ is an alias to /src
import Card from '@/components/Card.vue'; // @ is an alias to /src

@Component({
    components: {
        Title,
        Card
    },
})
export default class About extends Vue {}
</script>
