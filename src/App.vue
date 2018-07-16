<template>
<div id="app">
    <Header>
        <Navigation/>
    </Header>
    <container>
        <router-view/>
    </container>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import Header from '@/components/Header.vue' // @ is an alias to /src
import Navigation from '@/components/Navigation.vue'; // @ is an alias to /src
import VueFractionGrid from "vue-fraction-grid";

Vue.use(VueFractionGrid, {
    container: '1200px',
    gutter: '24px',
    approach: 'mobile-first',
    breakpoints: {
        compact: '0px 996px'
    }
});

@Component({
    components: {
        Header,
        Navigation
    },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: Montserrat, HelveticaNeue-Light, helvetica neue light, helvetica neue, Helvetica, Arial, lucida grande, sans-serif;
    background: linear-gradient(to top, transparent, #fdf9ea);
    min-height: 100vh;
}

a {
    color: #41b883;
}
</style>
