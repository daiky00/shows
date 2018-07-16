<template>
<div>
    <grid :rwd="{compact: 'stack'}">
        <grid-item size="6/12" :rwd="{ compact: '12/12' }" v-bind:key="show.name" v-for="show in shows">
            <grid :rwd="{compact: 'stack'}">
                <grid-item  size="6/12" :rwd="{ compact: '12/12' }">
                    <FancyTitle :title="'🎥 ' + show.name" />
                </grid-item>
                <grid-item size="6/12" :rwd="{ compact: '12/12' }">
                    <Summary :summary="show.summary" />
                </grid-item>
            </grid>
            <Seasons :seasons="show.seasons" />
        </grid-item>
    </grid>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import Seasons from '@/components/Seasons.vue'; // @ is an alias to /src
import FancyTitle from '@/components/FancyTitle.vue'; // @ is an alias to /src
import Summary from '@/components/Summary.vue'; // @ is an alias to /src
import store from '@/store';
import {
    mapGetters,
    mapState
} from 'vuex';

@Component({
    components: {
        Card,
        Seasons,
        FancyTitle,
        Summary
    },
    computed: {
        ...mapState([
            'shows'
        ])
    }
})
export default class Shows extends Vue {
    constructor() {
        super();
     
    }

    mounted() {
        this.$store.dispatch('LoadShows');
    }
}
</script>
