<template>
  <div id="app">
    <FlexBoxLayout/>

  </div>
</template>

<script>
import FlexBoxLayout from './components/FlexBoxLayout'


export default {
  name: 'App',
  components: {
    FlexBoxLayout,
    
  },
  methods:{

  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
#app {
  padding: 30px 0;
  width: 100%;
  background-color:#dbad69;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:whitesmoke;
}
</style>
