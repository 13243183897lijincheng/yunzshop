<template>
  <div id="privatemsg">
    <div class="left">
    	<el-tabs type="border-card">
			  <el-tab-pane :label="'全部('+alluser.length+')'">
			  	<ul>
			  		<li v-for="(elem,index) in alluser"  @click="goToMsgDetail(elem.chat,elem.username,index,elem.img)">
			  				
			  			
			  			<div class="left1">
			  				<el-badge :value="elem.noRead" class="item">
			  						<img :src="elem.img" alt="" />
			  				</el-badge>
			  			</div>
			  		
			  			<div class="right1">
			  				<p>{{elem.username}}</p>
			  				<span>{{elem.chat[0].date}}</span>
			  			</div>
			  			
			  		</li>
			  	</ul>
			  </el-tab-pane>
			  <el-tab-pane :label="'在线('+onlineuser.length+')'">
			  	<ul>
			  		<li v-for="(elem,index) in onlineuser"  @click="goToMsgDetail(elem.chat,elem.username,index,elem.img)">
			  			
			  			<div class="left1">
			  				<img :src="elem.img" alt="" />
			  			</div>
			  			<div class="right1">
			  				<p>{{elem.username}}</p>
			  				<span>{{elem.chat[0].date}}</span>
			  			</div>
			  			
			  		</li>
			  	</ul>
			  </el-tab-pane>
			</el-tabs>
    </div>
    
    
    <div class="right">
 
    	<div>
    		<ul>
    			<li v-for="elem in specialMsg">
    				<div class="cc1" v-if="elem.source==user">
    					<div class="left2">
			  				<img :src="myImg" alt="" />
			  			</div>
			  			<div class="right2">
			  				<p>{{elem.message}}</p>
			  				<span>{{elem.date}}</span>
			  			</div>
			  			
    				</div>
    				<div  class="cc2"  v-else>
    					<div class="left1">
			  				<img :src="friendImg" alt="" />
			  			</div>
			  			<div class="right1">
			  				<p>{{elem.message}}</p>
			  				<span>{{elem.date}}</span>
			  			</div>
    					
    				</div>
    			</li>
    		</ul>
    	</div>
    
    	<div class="contentText">
    		<textarea v-model="sendText" resize="none"></textarea>
    		<div @click="sendMsg()">发 送</div>
    	</div>
    </div>
    
    
    
    <loading :class="{loadingHide:privateMsgLoadingShow}"></loading>
  </div>
</template>

<script>
export default {
			  data () {
					    return {
						    	routeParam:"",
						     	alluser:[],
						     	onlineuser:[],
						     	allMsg:[],
						     	user:"",
						     	specialMsg:[],
						     	privateMsgLoadingShow:false,
						     	sendText:"",
						     	targetName:"",
						     	myImg:'',
						     	friendImg:'',
					    }
			  },
 				methods:{
					  	goToMsgDetail(chat,targetname,index,img){
//					  		
								this.targetName = targetname;
					  		this.specialMsg=chat;
					  		this.friendImg=img;
					  		console.log("收到的索引值",index);
					  		this.alluser[index].noRead=0;
					  		this.$http.post('/readMsg',{"source":this.$route.params.username,"target":targetname}).then(function(err,res){
					  			if(!err){
					  				console.log("消息已读取");
					  				
					  			}else{
					  				
					  				console.log(err);
					  			}
					  		})
					  		console.log("所有的聊天记录");
					  		console.log(this.specialMsg);
					  	}
					  	,
					  	sendMsg(){
					  		console.log("发送消息")
					  		var date=new Date();
					  		var time = date.getFullYear()+"-"+date.getMonth()+1+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
					  		this.$http.post('/sendMsg',{"source":this.$route.params.username,"target":this.targetName,"message":this.sendText,"readed":false,date:time}).then(function(res){
					  			var resData = JSON.parse(res.bodyText);
					  			if(parseInt(resData.status)==200){
					  				this.$message({
							          message: '消息发送成功',
							          type: 'success',
							           showClose: true,
							        });
							        this.specialMsg.push({source:this.$route.params.username,target:this.targetName,imgsrc:this.myImg,message:this.sendText,date:time})
					  					this.sendText="";
					  			}
					  		})
					  	}
  		},
  		
  created(){
  	this.user=this.$route.params.username;
  	console.log("开始请求私有信息.....");
  		this.$http.post('/privatemsg',{"username":this.$route.params.username}).then(function(res){
				
						var resData = JSON.parse(res.bodyText);
						console.log(resData);
						if(parseInt(resData.status)==200){
						
							
							this.privateMsgLoadingShow=true;

							this.alluser=resData.msg;
							this.onlineuser=resData.msg.filter(function(elem){return elem.onLine});
							this.myImg=resData.user.img;
			
						}else{
							
						}
					},function(err){
						this.$message({
				          showClose: true,
				          message: "网络异常，请检查网络链接!",
				          type: 'error'
				        });
				        console.log(err);
					})
  
  	}
//}
  	
  	
  
  
}
</script>


<style lang="scss">
	#privatemsg{
		min-height: 780px;
		width: 870px;
		box-sizing: border-box;
		margin: 15px;
		background: #fff;
		position: relative;
		.left1{
			padding: 0px 5px 0 5px;
			width: 40px;
			height: 50px;
			float: left;
			border-radius:10px;
			img{
				width: 40px;
				height: 40px;
				vertical-align: middle;
				margin-top: 4px;
				
				border-radius: 20px;
			}
		}
		.right1{
			float: left;
			text-align: left;
			display: inline-block;
			height: 42px;
			padding-top: 5px;
			padding-left: 10px;
			span{
				color:#bbb;
				font-size: 13px;;
			}
			p{
			    height: 22px;
			    line-height: 22px;
			    padding: 0;
			    margin: 0;
			    margin-bottom: 1px;
			    color: #264378;
			    font-size: 14px;
			}
		}
		
		
		.left2{
			padding: 0px 0px 0 5px;
			width: 50px;
			height: 50px;
			float: right;
			border-radius:10px;
			img{
				width: 40px;
				height: 40px;
				vertical-align: middle;
				margin-top: 4px;
				border-radius: 20px;
			}
		}
		.right2{
			float: right;
			text-align: right;
			display: inline-block;
			height: 42px;
			padding-top: 8px;
			padding-right: 10px;
			span{
				color:#bbb;
				font-size: 13px;
			}
			p{
			    height: 22px;
			    line-height: 22px;
			    padding: 0;
			    margin: 0;
			    margin-bottom: 1px;
			    color: #264378;
			    font-size: 14px;
			}
		}
		
		
		
		
		.left
		{
			width: 280px;
			height: 780px;
			overflow: auto;
			border-right: 1px solid gainsboro;
			float:left;
			.el-tabs__nav{
				width: 100%;
			}
			.el-tabs__item{
				/*margin-left: 40px;*/
				width: 50%;
				text-align: center;
				font-size: 18px;
			}
			ul{
				padding: 0;
				margin: 0;
				li{
					padding: 0;
					margin: 0;
					list-style: none;
					width: 100%;
					height: 75px;
					cursor: pointer;
				}
			}
		}
		.right{
			width: 480px;
			float:left;
			margin-left: 40px;
			height: 780px;
			overflow: auto;
			position:relative;
			.contentText{
				position:absolute;
				bottom :0px;
				border:1px solid black;
				textarea{
					display: inline-block;
					width: 400px;
					height: 34px;
					resize: none;
					font-size: 16px;
					vertical-align: middle;
					outline: none;
					border: none;
				}
				div{
					display: inline-block;
					width: 64px;
					height: 40px;
					border: none;
					line-height: 40px;
					font-size: 20px;
					border: none;
					text-align: center;
					background: darkcyan;
					color:white;
				}
			}
			
			
			ul{
				padding: 0;
				margin: 0;
				height: 720px;
				overflow: auto;
				li{
					padding: 0;
					margin: 0;
					list-style: none;
					width: 100%;
					height: 70px;
					.cc1{
						border: 1px solid gold;
						border-radius: 10px;
						display: inline-block;
						float:right;
						padding-left: 5px;
					}
					.cc2{
						border: 1px dotted purple;
						border-radius: 10px;
						display: inline-block;
					}
				}
			}
		}
		
	}

</style>



	
	