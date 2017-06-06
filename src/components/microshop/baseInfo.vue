<style lang="scss" rel="stylesheet/scss" scoped>
	p,ul,li{margin:0; padding:0;}
	li{list-style: none;}
	

	#baseInfo{
		
			 /*上传头像的样式*/
			 .avatar-uploader .el-upload {
			    border: 1px dashed #d9d9d9;
			    border-radius: 6px;
			    cursor: pointer;
			    position: relative;
			    overflow: hidden;
			  }
			  .avatar-uploader .el-upload:hover {
			    border-color: #20a0ff;
			  }
			  .avatar-uploader-icon {
			    font-size: 28px;
			    color: #8c939d;
			    width: 178px;
			    height: 178px;
			    line-height: 178px;
			    text-align: center;
			  }
			  .avatar {
			    width: 178px;
			    height: 178px;
			    display: block;
			  }
						
		
		
		position:relative;
		width: 100%;
		height: 100%;
		.popupInput{
			height: 300px;
			/*padding:20px 0;*/
			background: #eeeeee;
			position:relative;
			text-align:left;
			p{
				padding: 15px;
				color:deepskyblue;
			}
			.m_header{
				padding-left: 20px;
				background: #eeeeee;
				height: 46px;
			}
			.inputBox{
				padding-left: 20px;
				padding-top: 20px;
				background: #fff;
				height: 200px;
				/*input{
					width: 90%;
					height: 40px;
					margin-left: 15px;
					font-size: 18px;
					box-sizing: border-box;
					display: inline-block;
					padding-left: 10px;
					border: none;
					outline: none;
					margin-top: 20px;
					border-bottom: 1px solid green;
				}*/
				.avatar-uploader{
					position: relative;
					i{
						font-style: normal;
						position: absolute;
						top:15px;
						color:blue;
						right: 15px;
					}
					div{
						width: 80px;
						height: 80px;
						background: rgb(241, 83, 83);
					}
					img{
						max-width: 200px;
					}
				}
			}
			
			
			span{
				display: inline-block;
				margin-right: 30px;
			}
			button{
				color:#fff;
				background: green;
				border-radius: 5px;
				width: 60px;
				border: none;
				outline: none;
				font-size: 12px;
				line-height: 24px;
				float: right;
				margin-top: 8px;
			}
		}
		
		
		.m_header{
	        width:100%;
	        height:45px;
	        padding-right: 15px;
	        box-sizing: border-box;
	        background:#fff;
	        line-height:45px;
	        font-size:14px;
	        span{
	            display:inline-block;
	            width:16px;
	            height:22px;
	            float:left;
	            margin-left:10px;
	            font-size:28px;
	        }
	        i{
	        	font-size: 14px;
	        	float: right;
	        	font-style: normal;
	        }
	    }
	    
	    
	    .nav{
	    	padding: 15px;
	    	li{
	    		width:40%;
	    		display: inline-block;
	    		text-align: center;
	    		font-size: 14px;
	    		padding: 6px 0;
	    		line-height: 24px;
	    		background: #fff;
	    		color:#f15353;
	    	}
	    	li:first-child{
	    		border-radius: 10px 0 0 10px;
	    	}
	    	li:last-child{
	    		border-radius: 0 10px 10px 0;
	    	}
	    }
	    
	    
	    
	    .info{
	    	margin-top: 15px;
	    	li:after{
	    		content: "";
	    		display: block;
	    		clear: both;
	    	}
	    	li{
	    		padding:6px 15px;
	    		font-size: 14px;
	    		text-align: left;
	    		background: #fff;
	    		margin-bottom: 8px;
	    		line-height: 20px;
	    		.right{
	    			float: right;
	    			text-align: right;
	    			border:none !important;
	    			.img{
	    				width: 35px;
	    				height: 35px;
	    				/*background: url('../../../../static/app/images/photo-mr.jpg');
	    				background-size: 38px 38px;
	    				background-position: -1px -1px;*/
	    				border:none !important;
	    				img{width: 35px;height: 35px;vertical-align: middle;border: 0;margin-top: -3px;}
	    			}
	    		}
	    		input{
	    			width: 70%;
	    			border:none;
	    			outline: none;
	    			line-height: 20px;
	    			float:right;
	    			text-align: right;
	    			font-size: 14px;
	    			position: relative;
	    			top:-2px;
	    		};
	    	}
	    	
	    	.tou{
	    		line-height: 36px;
	    		padding-bottom: 0px;
	    		
	    	}
	    	.tou2{
	    		margin-bottom: 10px;
	    		i{
	    			float: right;
	    		}
	    	}
	    	.btn{
	    		margin: 60px auto;
	    		border-radius: 7px;
	    		width: 280px;
	    		padding: 10px;
	    		text-align: center;
	    		background: #f15353;
	    	
	    			font-size: 16px;
		    		
		    		color:#fff;
	    		
	    	}
	    	
	    }
	    
	    
	    
	    .selectGoods{
	    	padding: 15px;
	    	.selectedGood{
	    		li{
	    			float: left;
	    			width: 40px;
	    			margin: 10px;
	    			img{
	    				
	    				width: 40px;
	    			}
	    		}
	    	}
	    	.selectedGood:after{
	    		content: "";
	    		display: block;
	    		clear: both;
	    	}
	    	.content{
	    		padding: 15px;
	    		/*height: 130px;*/
	    		font-size: 14px;
	    		background: #fff;
	    		margin-bottom: 20px;
	    		text-align: center;
	    	}
	    	.add{
	    		width: 100%;
	    		
	    		background: #fff;
	    		
	    		box-sizing: border-box;
	    		padding: 20px;
				
	    		div{
	    			width: 70%;
	    			border: 1px solid gray;
	    			font-size: 20px;
	    			color:#b5b5b5;
	    			margin:0 auto;
	    			border-radius: 10px;
	    			line-height: 40px;
	    			text-align: center;
	    			span{
	    			font-size: 28px;
	    		}
	    		}
	    		
				
	    	}
	    	.btn{
	    		margin: 120px auto 10px;
	    		border-radius: 7px;
	    		width: 80%;
	    		padding: 12px;
	    		text-align: center;
	    		background: #f15353;
	    			font-size: 20px;
		    		color:#fff;
	    	}
	    	
	    	p{
	    		margin-top: 15px;
	    		line-height: 20px;
	    		text-align: left;
	    		font-size: 12px;
	    		/*padding: 15px;*/
	    	}
	    }
	    
		
	}
	.active22{
				color:#fff !important;
	    		background: #f15353 !important;
		}	
</style>





<template>
 <div id="baseInfo">

		<!-- 主内容区域 -->
    	<div v-if="showBox=='main'">
    		<div class="m_header">
	            <span class="iconfont icon-left" @click="goBack1"></span>
		         	   微店设置
	       	</div>
	       	
	       	<ul class="nav">
	       		<li @click="changeActive(true)" :class="{active22:showInfo}">基本信息</li><li @click="changeActive(false)" :class="{active22:!showInfo}">自选商品</li>
	       	</ul>
	       	
	    	<!-- 基本信息板块 -->
	   		<ul  v-if="showInfo" class="info" >
	   			<li >微店名称	
	   				<input type="text" v-model="shopName" maxlength="20"/>
	   			
	   			</li>
	   			
	   			<li class="tou tou2"  @click="changeShowBox('微店头像')" >微店头像
	   				<div class="right">
	   					<el-upload
						  class="avatar-uploader"
						  action="http://localhost:8081/addons/yun_shop/api.php?i=2&type=1&route=plugin.micro.frontend.controllers.MicroShop.set-shop.upload"
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload">
					      
	   					<div class="img" v-if="imageUrl1"><img  :src="imageUrl1" alt="" /></div>
	   					<div class="img" v-if="!imageUrl1"><img  src="../../../../static/app/images/photo-mr.jpg" alt="" /> </div>
	   				
				    	</el-upload>
	   				</div>
	   			</li>
	   			
	   			<li class="tou">会员头像
	   				<div class="right">
	   					<div class="img" v-if="imageUrl2"><img  :src="imageUrl2" alt="" /></div>
	   					<div class="img" v-if="!imageUrl2"><img  src="../../../../static/app/images/photo-mr.jpg" alt="" /> </div>
	   				</div>
	   			</li>
	   			<li  >会员昵称
	   				<div class="right">
	   					{{username}}
	   				</div>
	   			</li>
	   			
	   			<li class=" tou2"  @click="changeShowBox('店招背景')">店招背景
	   				<i class="iconfont icon-right"></i>
	   			</li>
	   			
	   			<li >个性签名
	   					<input type="text" v-model="signName"  maxlength="120"/>
	   			</li>
	   			
	   			<li class="btn"  @click="changeActive(false,1)">
	            		确 定
	            </li>
	   		</ul>
	   		
	   		<!-- 自选商品板块 -->
	       	<div v-else class="selectGoods">
	       		<div class="content"><img :src="bannerImg" alt="" /></div>
	       		<router-link :to="fun.getUrl('microShop_selectGoods',{num:0,isSelect:true})">
	       			<div class="add" >
	       				<div >
		            		<span>+</span>&nbsp;&nbsp;选择 商品
		            	</div>
	       			</div>
		       		
	            </router-link>
	            
	            <p>店主可以通过选择商品就可以生成微店，将微店分享给好友，好友通过自己的微店链接进入购买商品就可以获得分红啦~<br />快去选择您的微店商品吧！</p>
	       	
	       	</div>
    	</div>
        
       
       
       
        <div class="popupInput" v-else-if="showBox=='upLoadBox'">
       		<div class="m_header">
	            <span class="iconfont icon-left" @click="closePopInput()"></span>
		         	   修改{{changeType}}
		         	   <button @click="closePopInput">保存</button>
	       	</div>
	       	<div class="inputBox">
	       			<el-upload
					  class="avatar-uploader"
					   action="http://localhost:8081/addons/yun_shop/api.php?i=2&type=1&route=plugin.micro.frontend.controllers.MicroShop.set-shop.upload"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <i>更换背景</i>
					  	 <img v-if="bgImg" :src="bgImg" class="avatar">
					  	 <div v-else></div>
				    </el-upload>
				    
				    <br /><br />
				    
			</div>
			<p>请上传不大于2M的jpeg或者png格式的图片。</p>
       </div>
       
       
    </div>
</template>


<script>
	export default{
		 data(){
		      return {
            		showInfo:true,//控制左右的切换
            		shopName:"张三的微店",
            		userName:"无懈可击",
            		signName:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
            		showBox:"main",//控制主页，和不同弹出框的隐现
            		changeType:"",//用来标示修改的是哪个属性
            		changeVal:"",//用来存储用户输入的值
            		imageUrl:"",
            		imageUrl1: '',//用来存储微店头像
            		imageUrl2: '',//用来存储用户头像
            		bgImg:'',
            		temp:false,
            		bannerImg:'',
            		postUrl:'',
            		shopModle:{
            			shop_name:"",
            			shop_avatar:"",
            			shop_background:"",
            			signature:"",
            		},
		      }
		 },
		 activated(){
		 	this.temp=this.$route.params.showSelectGood;
		 	this.showInfo=true;
		 	this.init();
		 },
		 methods:{
		 	
		 	init(){
		 		let that =this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShop.set-shop").then(function (response) {
              		console.log("+++++++++++个人信息++++++++++++++");
              		console.log(response);
              		let temp = response.data.micro_shop;
					 if (response.result == 1) {              		
              		 	that.shopName=temp.shop_name;	
              		 	that.username=temp.has_one_member.nickname;	
              		 	that.signName=temp.signature;	
              		 	that.imageUrl1=temp.shop_avatar;
              		 	that.imageUrl2=temp.has_one_member.avatar;	
              		 	that.postUrl=temp.api;
              		 	that.bannerImg=response.data.select_goods_thumb;
              		 	that.bgImg=temp.shop_background;
					 }else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
		 	},
		 	
		 	
		 	
		 	//修改信息时候 用变量来标示修改的是哪个属性
		 	changeShowBox(val){
		 		this.changeType=val;
		 		if(val=="店招背景"){
		 			this.showBox='upLoadBox';
		 		}else if(val=="个性签名"||val=="微店名称"||val=="店主昵称"){
		 			this.showBox='inputBox';
		 		}else{
		 			this.showBox="main";
		 		}
		 	},
		 	
		 	//控制基本信息和自选商品的切换
		  	changeActive(val,type){
		  		
//		  		

				if(type==1){//提交数据
					let that = this;
		  			this.shopModle.shop_name=this.shopName;
			  		this.shopModle.shop_avatar=this.imageUrl1;
			  
			  		
			  		this.shopModle.shop_background=this.bgImg?this.bgImg:this.imageUrl;
			  		this.shopModle.signature=this.signName;
			  		
			  		let json={"shop_set":JSON.stringify(this.shopModle)};
			  		
			  		
			  		if(this.shopModle.shop_name==""){
			  			alert("微点名称不能为空");
			  		}else if(this.shopModle.shop_avatar==""){
			  			alert("微店头像不能为空");
			  		}else if(this.shopModle.shop_background==""){
			  			alert("微店背景不能为空");
			  		}else{
			  			$http.get("plugin.micro.frontend.controllers.MicroShop.set-shop.edit",json).then(function (response) {
	              		
		              		if (response.result == 1) {
		              		 	that.$router.push(that.fun.getUrl('microShop_home'));
							 }else{
								console.log(response);
							}
				           	}, function (response) {
				                console.log(response);
				            });
			  		}
			  		
			  		
			  		
			  		
				}else{
					this.showInfo=val;
				}
				
		  		
		  	},
		  	
		  	//点击输入信息关闭的时候 把输入框输入的值按照修改的类型赋值给指定的属性即可完成修改
		  	closePopInput(){
		  		
		  		//隐藏输入弹框
		  		this.showBox='main';
		  		
		  		//清空输入框内容
		  		this.changeVal="";
		  	},
		  	
		  	// 输入和选择头像弹窗回退按钮
		  	goBack(){
		  		this.showBox='main';
		  	},
		  	
		  	//页面回退按钮
		  	goBack1(){
		  		this.$router.push(this.fun.getUrl('microShop_ShopKeeperCenter'));
			},
		  	
		  	//处理头像上传
		  	handleAvatarSuccess(res, file) {
		  		
		  	 	this.imageUrl=URL.createObjectURL(file.raw);
		  	 		if(this.changeType=='微店头像'){
			  			this.imageUrl1 = res.data.img;
			  		}else if(this.changeType=='店招背景'){
			  			this.bgImg = res.data.img;
			  		}
		  	 	
		    },
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg'||file.type === 'image/png';
			        const isLt2M = file.size / 1024 / 1024 < 2;
			
			        if (!isJPG) {
			          this.$message.error('上传图片只能是 JPG 或PNG格式!');
			        }
			        if (!isLt2M) {
			          this.$message.error('上传图片大小不能超过 2MB!');
			        }
			        return isJPG && isLt2M;
		    }
		     
		     
		  	
		  }
		  
   }
</script>




























<!--<style  lang="scss" rel="stylesheet/scss" scoped>
	
</style>

<template>
   
</template>

<script>
    
</script>
-->
