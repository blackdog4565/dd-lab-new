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
      s_id:"id:",
      s_name:"name:",
      s_email:"email:",
      s_phone:"phone:",
      s_check:'',
      phn: '',
      nm:'',
      eml:'',
      id:'',
    
      
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
        
        if(this.search.length >= 6){
          this.phn = this.search.substring(this.s_phone.length,this.search.length);
          this.s_check = this.search.substring(0,this.s_phone.length);
          if(this.s_check == this.s_email)
            return item.email.match(this.phn);
          else if(this.s_check == this.s_phone)
            return item.phone.match(this.phn);
        }
        if(this.search.length >= 5){
          this.nm = this.search.substring(this.s_name.length,this.search.length);
          this.s_check = this.search.substring(0,this.s_name.length);
          if(this.s_check == this.s_name)
            return item.name.toUpperCase().match(this.nm.toUpperCase());
          else
            return item.name.toUpperCase().match(this.search.toUpperCase());
        }
        if(this.search.length >= 3){
          this.id = this.search.substring(this.s_id.length,this.search.length);
          this.s_check = this.search.substring(0,this.s_id.length);
          if(this.s_check == this.s_id)
            return item.id.match(this.id);
          else
            return item.name.toUpperCase().match(this.search.toUpperCase());
        }
        else 
          return item.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
}
console.log();
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