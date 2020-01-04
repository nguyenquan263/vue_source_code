<template>
    <div>
        <input v-on:input="onInput" type="text" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }

}
</script>

<style scoped>
    input {
        width: 90%;
    
    }

    div {
        text-align: center;
        margin: 15px;
    }

</style>