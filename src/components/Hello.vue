
<template>
  <div id="meet">
    <ul class="friendList">
    	<li v-for="elem in friendList">
    			<img :src="elem.img" alt="" />
    			
    			<br clear="both" />
    			<div class="box">
	    				<p class="name">{{elem.username}}</p>
	    				<p class="info">{{elem.year-2000}}岁,{{elem.sex}}</p>
	    				
	    				<div class="left">
	    					点赞
	    				</div>
	    				<div class="right" @click="addFriend(elem.username)">
	    					加好友
	    				</div>
    			</div>
    	</li>
    </ul>
     <loading :class="{loadingHide:!meetHide}"></loading>
  </div>
</template>

<script>
export default {
  data () {
    return {
      	friendList:[],
      	meetHide:true,
    }
  },
  methods:{
	  	addFriend(name){
	  		
	  		
	  		//获取本地用户名
	  		let t = document.cookie.split(";");
	  		var obj={};
	  		for(var i=0;i<t.length;i++){
	  				let tt = t[i].split("=");
	  				obj[tt[0].replace(/(^\s*)|(\s*$)/g,'')]=tt[1];
	  		}
	  		
	  		//构造消息时间
	  		var date=new Date();
				var time = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
					  		
	  		
	  		this.$http.post('/sendMsg',{"source":obj['username'],"target":name,'message':obj['username']+"请求加您为好友！","readed":false,'date':time,'type':'addFriend'}).then(function(res){
						console.log("添加好友返回的数据..........");
						console.log(res);
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
								this.$notify({
				          title: '申请好友',
				          message: '添加好友申请发送成功',
				          type: 'success'
				        });
						}else{
							
						}
					},function(err){
						this.$message({
				          showClose: true,
				          message: "网络异常，请检查网络链接!",
				          type: 'error'
				        });
				        console.log(err);
					});
	  		
	  	}
  },
  created(){
			this.$http.post('/getAllFriend').then(function(res){
						console.log("请求所有的好友返回的数据..........");
						console.log(res);
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
								this.friendList=resData.msg;
								this.meetHide=false;
						}else{
							
						}
					},function(err){
						this.$message({
				          showClose: true,
				          message: "网络异常，请检查网络链接!",
				          type: 'error'
				        });
				        console.log(err);
					});
  }
}
</script>


<style lang="scss">
	#meet{
			min-height: 800px;
			width: 870px;
			overflow: auto;
			box-sizing: border-box;
			margin:15px 15px 0;
			padding:0px 0px 15px;
			background: #fff;
			position: relative;
			.friendList{
				padding-left: 15px;
				li{
					width:22%;
					height: 256px;
					overflow: hidden;
					padding: 0;
					margin: 10px;
					border: 1px solid #eaeaea;
					float: left;
					background: #fff;
					list-style: none;
					position: relative;
					
					
						.box{
								/*position: absolute;*/
								z-index: 3;
								bottom: 0px;
								width: 100%;
								/*height: 140px;*/
								transform: translateY(0px);
								transition: all 500ms;
								/*opacity: 0;*/
								text-align:center;
								line-height:70px;
								font-size: 18px;
								-webkit-text-size-adjust:none;
								.left{
									width: 50%;
									float: left;
									background: orange;
									cursor: pointer;
								}
								.right{
									float: left;
									width: 50%;
									background: grey;
									cursor: pointer;
								}
						}
						
					.box:hover{
							transform: translateY(-70px);
					}
						
					
						img{
							width: 185px;
							height: 188px;
							z-index: 6;
							position: relative;
						}
						p{
							padding: 0;
							margin: 0;
							line-height: 20px;
							text-align: center;
						}
						.name{
							margin-top: 10px;
							margin-bottom: 6px;
							color:#5073b1;
						}
						
						
						.info{
							color:#9b9b9b;
							margin-bottom: 10px;
						}
						
						
						.info:after{
							content: "";
							display: block;
							clear: both;
						}
					
				}
			}
			
			
	}

</style>

<!--http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html-->