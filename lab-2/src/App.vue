<template>
  <div id="app">
    <AdrBook/>
  </div>
</template>

<script>
import AdrBook from './components/AdrBook'

export default {
  name: 'App',
  components: {
    AdrBook
  },
  methods:{
    someWork(){
     
    }
  },
  mounted(){

  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
#app {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color:#ffffff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#707070;
}
</style>
