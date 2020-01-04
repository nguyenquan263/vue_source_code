<template>
  <div v-if="video">

    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" v-bind:src="videoUrl" frameborder="0"></iframe>
    </div>
    <div class="details">
      <h4>{{video.snippet.title}}</h4>
      <p> {{video.snippet.description}} </p>
    </div>
      
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['video'],
    computed: {
      videoUrl() {
        const { videoId } = this.video.id;

        return `http://www.youtube.com/embed/${videoId}`;
      }
      

    }
}
</script>

<style scoped>
  .details {
    margin-top: 10px;
    padding: 10px;
    border: 0px solid black;
    border-radius: 4px;
  }

</style>