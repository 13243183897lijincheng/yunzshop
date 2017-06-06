<template>
  <div id="app" >
    <main-header :class="{LoginShow:loginShow}"></main-header>
    <div class="main" :class="{LoginShow:loginShow}">
    	  <my-side :username="username"></my-side>
    		<router-view></router-view>
    </div>
    
    <main-footer :class="{LoginShow:loginShow}"></main-footer>
    <my-login @changeLogin="changeLogin" :class="{LoginShow:!loginShow}"></my-login>
  </div>
</template>

<script>
	
	
	
export default {
  name: 'app',
	data(){
            return{
                loginShow:true,
                username:""
            }
        },
   methods:{
   	
	   		changeLogin(elem,name){
		   			console.log("收到传来的新消息",elem,name);
		   			this.username=name;
		   			this.loginShow=elem;
	   		}
   },
   created(){
// 	console.log("app重新创建执行了....");
// 	var  name = localStorage.getItem("name");
// 	console.log("缓存的name",name);
// 	if(name)
// 	{
// 			this.username=name;
// 			this.loginShow=false;
// 	}else{
// 		this.username="";
// 			this.loginShow=true;
// 	}
   }
}
</script>

<style lang="scss">
	.temptemp{
		background: url("./static/img/tou1.png") -52px -685px no-repeat;
		background: url("./static/img/tou2.png") -52px -685px no-repeat;
		background: url("./static/img/tou3.png") -52px -685px no-repeat;
		background: url("./static/img/tou4.png") -52px -685px no-repeat;
		
	}
	
	
body,html{
	padding: 0 ;
	margin: 0;
	width: 100%;
	height: 100%;
}
.LoginShow{
	display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  min-width: 1200px;
  padding-top: 50px;
  background: #eeeef6;
  .main{
  	box-sizing: border-box;
  	width: 1200px;
  	margin: 0 auto;
  	padding-left: 230px;
  	
  }
  .main:after{
  	display:block;
  	clear:both;
  	content:"";
  }
}
</style>
