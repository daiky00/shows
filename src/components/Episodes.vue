<template>
<div class="episodes">
    <h4>Episodes</h4>
    <div  v-bind:key="episode.title" v-for="(episode, index) in episodes">
    <Card>
        <grid vertical="center" :rwd="{compact: 'stack'}">
            <grid-item size="4/12" :rwd="{ compact: '12/12' }">
                <img class="episode-image" :src="episode.picture_url" />
            </grid-item>
            <grid-item size="8/12" :rwd="{ compact: '12/12' }">
                <h5 class="episode-title">Episode {{ index + 1 }} - {{episode.title}}</h5>
                <Button  @click.native="moreInfo(index)" msg="📝 See more info"/>
            </grid-item>
        </grid>
    </Card>
      <Summary v-if="toggle === index" :summary="episode.description" />
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from 'vue-property-decorator';
import Card from '@/components/Card.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'; // @ is an alias to /src
import Summary from '@/components/Summary.vue'; // @ is an alias to /src

@Component({
    components: {
        Card,
        Button,
        Summary
    }
})
export default class Episodes extends Vue {
    @Prop() private episodes!: Array<object>;
    @Prop(Number) toggle!: number;

     moreInfo(index: number) {
        this.toggle = index;
    }
    
}
</script>

<style lang="scss" scoped>
.episode-image {
    width: 100%;
    height: 100%;
}
</style>
