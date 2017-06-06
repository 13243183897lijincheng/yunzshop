<style lang="scss">
    .side{
    	width: 200px;
    	z-index:30;
    	margin-left:-230px;
    	height: 732px;
    	background: #fff;
    	position:fixed;
    	top:66px;
    	float:left;
    	padding: 15px;
    	.top{
    		width: 200px;
    		height: 60px;
    		img{
    			width: 60px;
    			height: 60px;
    			border-radius: 30px;
    			float:left;
    			vertical-align: top;
    		}
    		.topRight{
    			width: 120px;
    			height: 55px;
    			float: right;
    			h4{
    				color: #333;
    				font-size: 16px;
    				padding: 0;
    				margin: 2px 0 15px 0;
    			}
    			span{
    				color: #999;
    				font-size: 12px;
    			}
    		}
    	}
    	
    	.mySign{
    		margin-top: 25px;
    		width: 200px;
    		height: 34px;
    		font-size: 14px;
    	}
    	.member{
    		width: 200px;
    		height: 30px;
    		margin:25px 0;
    		div{
	    		width: 120px;
	    		height: 30px;
	    		margin: 0 auto;
	    		border-radius: 10px;
	    		background-color: #e4e1e1;
	    		line-height: 30px;
	    		text-align: center;
	    		span{
	    			display: inline-block;
	    			width: 20px;
	    			height: 26px;
	    			margin-right: 5px;
	    			background: url('../../static/img/little.png') -1px -634px no-repeat;
	    		}
	    		b{
	    			position: relative;
	    			top: -4px;
	    		}
	    	}
    	}
    	
    	.sideList{
    		padding: 0;
    		margin: 30px 0 0;
    		.topLink{
    			text-decoration: none;
    		}
    		li{
    			padding: 0;
    			margin: 0;
    			list-style: none;
    			width: 200px;
    			height: 21px;
    			margin-bottom: 28px;
    			i{
    				display: inline-block;
    				width: 21px;
    				height: 20px;
    				margin:0 3px 0 3px;
    				transform: translateY(11px);
    				background: url("../../static/img/little.png") -30px -617px no-repeat;
    			}
    			.likeme{
    				background: url("../../static/img/little.png") -30px -638px no-repeat;
    			
    			}
    			.melike{
    				background: url("../../static/img/little.png") -28px -663px no-repeat;
    			
    			}
    			.liketo{
    				background: url("../../static/img/little.png") -26px -688px no-repeat;
    			
    			}
    			.visted{
    				background: url("../../static/img/little.png") -52px -685px no-repeat;
    			
    			}
    			.el-badge{
    				width: auto;
    				height: 19px;
    				button{
    					border: none;
    					padding: none;
    					font-size: 14px;
    				}
    			}
    			
    		}
    	}
    }
    .loadingHide{
    	display: none;
    }
</style>
<template>
    <div class="side">
    	<div class="top">
    		<img :src="imgsrc" alt="头像" />
    		<div class="topRight">
    			<h4 id="specialName">{{name}}</h4>
    			<span>GaGaID:{{gagaId}}</span>
    		</div>
    	</div>
    	<div class="mySign">
   			{{signName}}
    	</div>
    	
    	<div class="member">
    		<div >
    			<span></span>
    			<b>{{goldNum}}</b>
    		</div>
    	</div>
    	
    	<ul class="sideList">
    		<li>
    			<i></i>
    			<el-badge  :value="privateMsgTotal" class="item">
				  <el-button size="small">
				  	<router-link :to="privateMsgUrl" class="topLink">私信</router-link>
				  </el-button>
				</el-badge>
    		</li>
    		
    		<li>
    			<i class="likeme"></i>
    			<el-badge :value="likeMeTotal" class="item">
				  <el-button size="small">
				  	<router-link :to="likeMeUrl" class="topLink">喜欢我的人</router-link></el-button>
				</el-badge>
    		</li>
    		<li>
    			<i  class="melike"></i>
    			<el-badge :value="meLikeTotal" class="item">
				  <el-button size="small">
				  	<router-link :to="meLikeUrl" class="topLink">我喜欢的人</router-link></el-button>
				</el-badge>
    		</li>
    		<li>
    			<i class="visted"></i>
    			<el-badge  :value="visitedTotal" class="item">
				  <el-button size="small"><router-link :to="visitedUrl" class="topLink">访客</router-link></el-button>
				</el-badge>
    		</li>
    	</ul>
    
    	<loading :class="{loadingHide:!sideHide}"></loading>
    	<!--{{sideHide}}-->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:"无法无天",
                gagaId:"30067411",
                signName:"每一个你讨厌的现在都有一个不努力的曾经。",
                goldNum:20,
                imgsrc:"/public/img/tou.png",
                privateMsgTotal:2,
                privateMsgUrl:"",
                likeMeUrl:"",
                meLikeUrl:"",
                visitedUrl:"",
                sideHide:true
                
            }
        },
        props:['username'],
        watch:{
        	username:function(val){
        			this.$http.post('/myinformation',{"username":val}).then(function(res){
						console.log("请求个人信息返回的数据..........");
						console.log(res);
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
							console.log("个人信息进行了赋值");
							this.name=val;
							this.gagaId=resData.msg.gagaid;
							this.signName=resData.msg.mySignName;
							this.goldNum=resData.msg.goldNum;
							this.imgsrc=resData.msg.img;
							this.privateMsgTotal=resData.msg.privateMsgTotal;
							this.privateMsgUrl="/myinformation/privatemsg/"+val;
							this.likeMeUrl="/myinformation/likeme/"+val;
							this.meLikeUrl="/myinformation/melike/"+val;
							this.visitedUrl="/myinformation/visited/"+val;
							this.sideHide=false;
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
        }
    }
</script>
