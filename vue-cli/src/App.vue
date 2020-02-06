<template>
  <div>
      <app-Header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-Header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    data: function(){
        return{
            str: 'header'
        }
    },
    components: {
        'app-Header': AppHeader
    },
    methods: {
        renewStr: function(){
            this.str = 'headerChange'
        }
    }
}
</script>

<style>

</style>