<template>
    <li class="list-group-item media" v-on:click="onVideoSelect">
        <img class="mr-3" v-bind:src="thumbnailUrl" />
        <div class="media-body"> 
            {{video.snippet.title}} 
        </div>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect: function() {
            this.$emit('videoSelect', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
    }

    li:hover {
        background-color: aquamarine
    }
</style>