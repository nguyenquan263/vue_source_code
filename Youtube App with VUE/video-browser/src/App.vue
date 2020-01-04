<template>
  <div class="container">
    <div class="row">
        <SearchBar class="col-12" v-on:termChange="onTermChange"></SearchBar>
    </div>
    <div class="row">
        <div class="col-8">
            <VideoDetail v-bind:video="selectedVideo" />
        </div>
        <div class="col-4">
            <VideoList v-on:videoSelect="onVideoSelect" v-bind:videos="videos"></VideoList>
        </div>
        
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCRSYQS2hbFP0S1z5HT5BByo8Zg-QK_6hw';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return {
            videos : [],
            selectedVideo : null
        }

    },
    methods: {
        onTermChange(searchTerm) {

            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response => {
                this.videos = response.data.items;
            });
        },
        onVideoSelect(video) {
            this.selectedVideo = video;
        }
    }
};
</script>

<style>

</style>