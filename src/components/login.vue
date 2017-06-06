
<template>
  <div class="login">
  	
  			<div class="content">
   				<h1>GaGaHi，我们一起说Hello World</h1>
   				<p>
   					专享无限沟通，让您随时畅享，沟通乐趣。<br />
   				推荐偶遇，让社交更轻松，去邂逅你喜欢的类型吧，发现更多优质好友
					这是一种打破僵局，跟朋友聊天的好方法
   				</p>
   		</div>
   		<div class="loginbox">
   			<el-tabs  v-model="activeName2" type="card" >
			    <el-tab-pane class="loginBoard zhuceBoard" label="注册" name="first">
			    	<input type="text" v-model="reEmail" placeholder="邮箱" @blur="validation(1)"/><span> *</span><br />
			    	<p>{{registEmailMessage}}</p>
			    	<input type="text"  v-model="reName"  placeholder="昵称"  @blur="validation(2)" /><span> *</span><br />
			    	<p>{{registNameMessage}}</p>
			    	<input type="password"  v-model="rePwd"  placeholder="密码" /><span> *</span><br />
			    	<p>{{registPwdMessage}}</p>
			    	<input type="password"  v-model="reRepPwd" placeholder="请再次输入密码"/><span> *</span><br />
			    	<p>{{registRePwdMessage}}</p>
			    	
			    	 <el-date-picker
					      v-model="reBirth"
					      type="date"
					      placeholder="选择出生日期">
					   </el-date-picker>
					    <el-select class="resex" v-model="reSex" placeholder="请选择性别">
						    <el-option
						      key="男"
						      label="男"
						      value="男">
						    </el-option>
						     <el-option
						      key="女"
						      label="女"
						      value="女">
						    </el-option>
						  </el-select>
			    	
			    	<input type="button" class="denglu zhuce" @click="zhuce" value="注 册"/><br />
			    	
			    </el-tab-pane>
			    <el-tab-pane label="登陆" name="second" class="loginBoard">
			    	<input type="text" v-model="loName" placeholder="邮箱/昵称/GaGa号"/><br />
			    	<p class="loginNameMessage">{{loginNameMessage}}</p>
			    	<input type="password" v-model="loPwd"  placeholder="密码" /><br />
			    	<p class="loginPwdMessage">{{loginPwdMessage}}</p>
			    	<input type="button" class="denglu" @click="denglu"  value="登 陆"/><br />
			    	
			    </el-tab-pane>
			    <!--<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
			    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
			  </el-tabs>
   		</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    	activeName2:"second",
      loginNameMessage:"请输入账号",
      loginPwdMessage:"请输入密码",
      registEmailMessage:"请输入邮箱",
      registNameMessage:"请输入昵称",
      registPwdMessage:"请输入密码",
      registRePwdMessage:"请再次输入密码",
      reBirth:"",
      reEmail:"",
      reName:"",
      rePwd:"",
      reRepPwd:"",
      loName:"",
      loPwd:"",
      reSex:"",
      registValid:true
    }
  },
  methods:{
  	
  		validation(val){
  			console.log("注册验证。。。。。。");
  			var reqData = {};
  			if(val==1){
  				reqData.email=this.reEmail;
  			}else if(val==2){
  				reqData.username=this.reName;
  			}
  			
  			var that= this;
  			this.registValid=true;
  			this.$http.post('/registValid',reqData).then(function(res){
						console.log(" 发送注册验证时返回的数据..........");
						console.log(res);
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
							if(val==1){
								that.registEmailMessage="";
							}else if(val==2){
									that.registNameMessage="";
							}
						}else if(parseInt(resData.status)==400){
							if(val==1){
								that.registEmailMessage="该邮箱已被注册过！";
							}else if(val==2){
								that.registNameMessage="该昵称已存在，请使用其它昵称！";
							}
							that.registValid=false;
						}
					},function(err){
						this.$message({
				          showClose: true,
				          message: "网络异常，请检查网络链接!",
				          type: 'error'
				        });
				        console.log(err);
					});
  			
  			
  		},
  	
	  	denglu(){
	  		var Ok=true;
	  		if(this.loName==""||this.loName==null){
	  			this.loginNameMessage="账号不能为空";
	  			Ok =false;
	  		}else{
	  			Ok=true;
	  			this.loginNameMessage="";
	  		}
		  	if(this.loPwd==""||this.loPwd==null){
		  			this.loginPwdMessage="密码不能为空";
		  			Ok =false;
		  	}else{
		  			Ok=true;
		  			this.loginPwdMessage="";
		  	}
		  	if(Ok){
		  		var postData ={
		  			username:this.loName,
		  			password:this.loPwd
		  	}
	  
				this.$http.post('/login',postData).then(function(res){
					
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
							this.$emit("changeLogin",false,this.loName);
							
							document.cookie="username="+this.loName;
							
							this.$message({
			          message: '恭喜你，登陆成功',
			          type: 'success',
			           showClose: true,
			        });
						}else{
							this.$message({
			          showClose: true,
			          message: resData.msg,
			          type: 'error'
			        });
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
		
  	},
  	zhuce(){
  		let  OK = true;
  		let OK1=true;
  		let OK2=true;
  		let OK3=true;
  		if(this.reEmail==""||this.reEmail==null){
  			this.registEmailMessage="邮箱不能为空";
  			OK =false;
  		}else if( !/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.reEmail)){
  			this.registEmailMessage="邮箱格式不正确";
  			OK =false;
  		}else{
  			this.registEmailMessage="";
  			OK =true;
  		}
  		
  		
  		if(this.reName==""||this.reName==null){
  			this.registNameMessage="昵称不能为空";
  			OK1 =false;
  		}else if( !(this.reName.length>1&&this.reName.length<21)){
  			this.registNameMessage="昵称长度限制为2-20位字符";
  			OK1 =false;
  		}else{
  			this.registNameMessage="";
  			OK1 =true;
  		}
  		
  		
  		if(this.rePwd==""||this.rePwd==null){
  			this.registPwdMessage="密码不能为空";
  			OK2 =false;
  		}else if( !(this.rePwd.length>5&&this.rePwd.length<19)){
  			this.registPwdMessage="密码长度限制为6-18位字符";
  			OK2 =false;
  		}else{
  			this.registPwdMessage="";
  			OK2 =true;
  		}
  		
  		
  		if(this.reRepPwd==""||this.reRepPwd==null){
  			this.registRePwdMessage="密码不能为空";
  			OK3 =false;
  		}else if(this.rePwd!=this.reRepPwd){
  			this.registRePwdMessage="两次输入密码不一致";
  			OK3 =false;
  		}else{
  			this.registRePwdMessage="";
  			OK3 =true;
  		}
  		
  		if(OK&&OK1&&OK2&&OK3&&this.registValid){
	  			var data ={
			  				email:this.reEmail,
								username:this.reName,
								password:this.rePwd,
	              year:this.reBirth.toString().split(" ")[3],
	              month:this.reBirth.toString().split(" ")[1],
	              date:this.reBirth.toString().split(" ")[2],
	              sex:this.reSex,
	              area:"",
	  			}
  
					this.$http.post('/register',data).then(function(res){
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
							this.$message({
			          message: resData.msg,
			          type: 'success',
			          showClose: true,
			        });
			        this.activeName2="second";
			        this.loName=this.reName;
						}else{
							this.$message({
			          showClose: true,
			          message: resData.msg,
			          type: 'error'
			        });
					}
				},function(err){
					this.$message({
		          showClose: true,
		          message: "网络异常，请检查网络链接!",
		          type: 'error'
		        });
					console.log(err);
				})
					
					
  		}else{
  			this.$message({
			          showClose: true,
			          message: "信息填写错误，请修改!",
			          type: 'error'
			        });
  		}
  		
  		
  	}
  
  
  }
}
</script>


<style lang="scss">
	.login{
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		min-width: 1200px;
		background: url(../static/img/01.jpg)  center 0 no-repeat;
		.content{
			width: 490px;
			height: 130px;
			position: absolute;
			top:170px;
			left: 260px;
			h1{
				font-size: 30px;
				font-weight: 500;
				color:white
			};
			p{
				font-size: 19px;
				color:#F0F0F0;
			}
		}
		.loginbox{
			width: 323px;
			background: #FFFFFF;
			position: absolute;
			top:100px;
			left: 830px;
			text-align: center;
		
			
			span{
				color:red;
				font-size: 28px;
				position: relative;
				top:6px;
			}
			.el-date-editor{
				width: 250px;
				margin-left: -20px;
			} 
			.el-tabs__nav{
				width: 100%;
			}
			.el-tabs__item{
				/*margin-left: 40px;*/
				width: 50%;
				text-align: center;
				font-size: 18px;
			}
			.resex{
				margin:10px 0 5px -20px ;
			}
			.loginBoard{
				input{
					width: 250px;
					padding: 4px;
					height: 32px;
					font-size: 18px;
					border: 1px solid #ff8a00;
					margin-bottom: 3px;
				}
				p{
					
					height: 28px;
					padding: 0;
					text-align: left;
					margin: 0;
						width: 250px;
						margin: 0 auto;
					color:#ff8a00;
					position: relative;
					right: 3px;
				}
				.denglu{
					background: #2d57a1;
			    color: #fff;
			    text-align: center;
			    border: none !important;
			    height: 36px;
			    font-size: 18px;
			    border-radius: 18px;
			    cursor: pointer;
			    margin: 5px 0  30px 0;
			    
				}
				.zhuce{
					margin: 10px 0 20px -15px;
				}
			}
			.zhuceBoard{
				p{
					position: relative;
					right: 12px;
				}
			}
		}
	}
</style>
