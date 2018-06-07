<template>
  <div class="adr-book">   
      <h1 class="adr-book__h1">Address Book</h1>
      <div class="main flex">
          <div class="filter">
              <input class="filter__input" type="text" v-model="search" placeholder="Filter..."/>
              <ul class="filter__input-ul">
                <li class="filter__input-li" v-on:click="showUser(item)"  v-for="item in filteredUs" :key="item.id" >{{item.name}}</li>                
              </ul>
          </div>
          
          <div class="users" v-if="!follows">    
                     
              <p class="users__elem">{{this.u_name.name}}</p>
              <img class="users__elem" v-bind:src="this.u_name.avatar">
              <p class="users__elem">{{this.u_name.email}}</p>
              <p class="users__elem">{{this.u_name.phone}}</p>
          </div>
          <div class="not-users" v-else>
            <p>Пользователь не выбран ...</p>   
          </div>
          
      </div>
      
  </div>
</template>

<script>
import users from './users.json'

export default {
  name: 'AdrBook',
  data(){
    return{
      userData: users,
      u_name: '',
      search: '',
      follows: true
    }
  },
  methods:{
    showUser: function(event){
      this.u_name = event;
      this.follows = false;     
    } 
  },
  computed:{
    filteredUs: function(){
      return this.userData.filter((item) => {
        return item.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin-top: 30px;
}
.flex{
  display: flex;
  justify-content: space-around;
}
.filter{
  width: 20%;  
  background-color:rgb(239, 239, 239);
  border: solid 1px #c6c6c6;
  padding: 20px;
  border-radius: 10px; 
}
.filter__input{
  font-size: 15px;
  padding: 5px;
  border-radius: 5px;
  border: solid 1px #c6c6c6;
}
.filter__input-li{
  margin-top:10px; 
  cursor: pointer;
  list-style-type: none;
}
.users{
  width: 20%;
  height:100%; 
  background-color:rgb(239, 239, 239);
  border: solid 1px #c6c6c6;
  padding: 20px;
  border-radius: 10px; 
}
.users__elem{
  margin-top: 10px;
}
.not-users{
  width: 20%;
  height:100%; 
  background-color:rgb(239, 239, 239);
  border: solid 1px #c6c6c6;
  padding: 20px;
  border-radius: 10px; 
}
</style>
