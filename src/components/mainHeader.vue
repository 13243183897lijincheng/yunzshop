<style lang="scss">
	#head{
		width: 100%;
		position: fixed;
		top:0px;
		background:#2d57a1 ;
		z-index: 20;
		.header{
		    background:#2d57a1 ;
		    height: 50px;
		    line-height: 50px;
		    width: 1200px;
		    margin: 0 auto;
		    font-size:14px;
		    padding-left:10px;
		    img{
		    	vertical-align: middle;
		    }
		    .topLink{
		    	display: inline-block;
		    	width: 70px;
		    	line-height: 50px;
		    	padding: 0 3px;
		    	margin:0 3px;
		    	color:#FFFFFF;
		    	text-align: center;
		    	text-decoration: none;
		    }
		    .mybtn{
		    	background: #ff8a00;
		    	color:#FFFFFF;
		    	width: 60px;
		    	height: 26px;
		    	line-height: 24px;
		    	font-size: 14px;
		    	padding: 0;
		    	margin-left: 10px;
		    	border: none;
		    }
		    .el-input{
		    	width: 180px;
		    	background:#6281b9 ;
		    	display: inline-block;
		    	border-radius: 15px;
		    	margin-left: 210px;
		    	input{
		    		width: 180px;
		    		color:#FFFFFF;
		    		border-radius: 15px;
		    		height: 30px;
		    		background:none ;
		    		border: none;
		    	}
		    }
		    .el-button{
		    	border: none;
		    	background: none;
		    	margin:0px ;
		    }
		    .el-badge{
		    	width: 25px;
		    	height: 23px;
		    	position: relative;
		    	top:2px;
		    	
		    	button{
		    		border: none;
		    		background: none;
		    	}
		    }
		    .message{
		    	background-image: url('../static/img/little.png');
		    	background-position: 0 -513px;
		    }
		    .addFriend{
		    	background-image: url('../static/img/little.png');
		    	background-position: 0 -540px;
		    }
		    .setting{
		    	background-image: url('../static/img/little.png');
		    	background-position: 0 -566px;
		    }
		    .el-badge__content{
		    	width: 22px;
		    	height: 20px;
		    	padding: 0 2px;
		    	border: none;
		    }
		    .messageBadge{
		    	width: 270px !important;
		    }
		    .addFriendBadge{
		    	width: 130px !important;
		    }
		    .settingBadge{
		    	width: 100px !important;
		    	height: 100px !important;
		    }
   		}
	}
</style>



<template>
	<div id="head">
		<header class="header" >
  			<img src="../static/img/logo.png" alt="" />
  			
  			<router-link to="/" class="topLink">偶遇</router-link>
  			<router-link to="/dynamic" class="topLink">动态</router-link>
  			<!--<router-link to="/foo" class="topLink">商城</router-link>-->
  			<el-input
			  placeholder="昵称/GaGaID"
			  icon="search"
			  :on-icon-click="handleIconClick">
			</el-input>
			<button  class="mybtn">充值</button>
			<button class="mybtn">升级</button>
			
			<el-popover popper-class="messageBadge"
			  ref="popover1"
			  placement="top-start"
			  width="200"
			  trigger="hover">
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			</el-popover>
			
			<el-popover  popper-class="addFriendBadge"
			  ref="popover2"
			  placement="top-start"
			  width="200"
			  trigger="hover">
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			</el-popover>
			
			<el-popover  popper-class="settingBadge"
			  ref="popover3"
			  placement="top-start"
			  width="200"
			  trigger="hover">
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			  <a href='http://www.baidu.com'>百度</a><br>
			</el-popover>
			
			
			<el-button  v-popover:popover1>
				<el-badge :value="12" class="item message">
				  <el-button size="small"></el-button>
				</el-badge>
			</el-button>
			
			<el-button  v-popover:popover2>
				<el-badge :value="2" class="item addFriend">
				  <el-button size="small"></el-button>
				</el-badge>
			</el-button>
			
			
			<el-button  v-popover:popover3>
				<el-badge :value="'99+'" class="item setting">
				  <el-button size="small"></el-button>
				</el-badge>
			</el-button>
			

    	</header>
	</div>
    
</template>

<script>
    export default {
        data(){
            return{
            	
            }
        },
         methods: {
		    handleIconClick(ev) {
		    	console.log("点击搜索按钮");
		        console.log(ev);
		    }
		},
		created(){
//			console.log(document.getElementsByClassName("settingBadge"));
//			document.getElementsByClassName("settingBadge")[0].style.cssText="width: 100px;height: 100px;"
		}
    }
</script>
















