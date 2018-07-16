<template>
<div class="seasons">
    <div v-bind:key="season.title" v-for="season in seasons">
        <h3>{{season.slug.split('-').join(' ') | capitalize }}</h3>
        <Button @click.native="seeEpisodes()" msg="👁️ See Episodes" />
        <Episodes v-if="toggle" :episodes="season.show_episodes" />
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import Episodes from '@/components/Episodes.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'; // @ is an alias to /src

@Component({
    components: {
        Episodes,
        Button
    },
    filters: {
        capitalize(value: string) {
            if (!value) return ''
            return value.toUpperCase()
        }
    }
})
export default class Seasons extends Vue {
    @Prop() private seasons!: Array<object>;
    toggle = false;

    seeEpisodes() {
        this.toggle = !this.toggle
    }


}
</script>
