<template>
  <header>
      {{propsdata}}
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function(){
            this.$emit('renew');
        }
    }

}
</script>

<style>

</style>