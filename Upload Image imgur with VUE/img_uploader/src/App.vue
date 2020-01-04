<template>
    <div id="app">
        <AppHeader></AppHeader>
        <dir class="ui container">
            <router-view></router-view>
        </dir>
        
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name: 'App',
    components: {
        AppHeader
    }

}
</script>

<style>

</style>