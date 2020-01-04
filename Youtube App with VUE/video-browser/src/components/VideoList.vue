<template>
    <ul class="list-group">

        <VideoListItem v-for="video in videos" 
            v-bind:video="video" 
            v-bind:key="video.etag"
            v-on:videoSelect="onVideoSelect"> 
        </VideoListItem>

    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: ['videos'],
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video);
        }
    }
}
</script>

<style>

</style>