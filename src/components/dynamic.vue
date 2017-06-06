 
<template>
  <div id="dynamicSquare">
    <ul class="dynamicList">
    	<li v-for="(elem,index) in dynamicList">
    		<div class="name">
    				<img @click="detail(elem)" :src="elem.userImg" alt="" />
    				<p>{{elem.source}}<br /><span v-if="elem.area">elem.area</span><i>{{elem.date}}</i></p>
    		</div>
    		
    		
    		<p class="text" v-if="elem.content">{{elem.content}}</p>
    		
    		<img v-if="elem.imgSrc" class="img" :src="elem.imgSrc" alt="" />
    		
    		
    		
    		<div class="option">
    			  <i class="el-icon-star-off" v-if="elem.havezan" @click="zan($event,index)"></i><i v-else class="el-icon-star-on" ></i>&nbsp;{{elem.zanNum}}&nbsp;&nbsp;&nbsp;<i class="el-icon-message" @click="showContent($event)"></i>&nbsp;{{elem.contentNum}}
    				<ul class="contentList">
    					<li v-for="data in elem.cont">
    							<img :src="data.img" alt="" />
    							<p>{{data.username}}&nbsp;&nbsp;<span>{{data.time}} </span><br /><b>{{data.msg}}</b></p>
    					</li>
    				</ul>
    		</div>
    		
    		<div class="content">
    				<div class="info" @click="beginCont($event,1)">喜欢你有趣的点评~</div><div class="input" v-loading="contentLoading">
    					<textarea maxlength="200"></textarea><br />
    					<span>最多不可超过200字</span><i  @click="beginCont($event,2,index)" class="el-icon-upload2"></i>
    				</div>
    		</div>
    		
    	</li>
    </ul>
   
     <loading :class="{loadingHide:!dynamicHide}"></loading>
  </div>
</template>

<script>
export default {
  data () {
    return {
      	dynamicList:[],
      	dynamicHide:true,
      	contentLoading:true,
    }
  },
  methods:{
  	showContent(e){
  		var pupA=document.getElementsByClassName("contentList");
  		for(var i=0;i<pupA.length;i++){
  			pupA[i].style.display="none";
  		}
  		e.target.nextSibling.nextSibling.style.display="block";
  	},
  	zan(e,index){
  		e.target.className="el-icon-star-on";
  		this.dynamicList[index].zanNum+=1;
  		e.target.onclick = null;
  		e.target.removeEventListener('click',this.zan);
  		this.$message({
	          message: "点赞成功",
	          type: 'success',
	          showClose: true,
	        });
  	},
  	beginCont(e,t,i){
  		if(t==1){
  			e.target.style.display="none";
  			e.target.nextSibling.style.display="block";
  			let that = this;
  			that.contentLoading=true;
  			var timer = setTimeout(function(){
  			
  				that.contentLoading=false;
  			},700);
  			
  			
  		}else if(t==2){
  			e.target.parentNode.style.display="none";
  			e.target.parentNode.previousSibling.style.display="block";
  			var time = new Date();
  			this.dynamicList[i].cont.push({img:'/public/img/tou.png',username:'wx',time:time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds(),msg:e.target.parentNode.innerText});
  			this.$message({
	          message: "评论成功",
	          type: 'success',
	          showClose: true,
	        });
  		}
  		
  		
  	}

  },
  created(){
			this.$http.post('/getAllDynamic').then(function(res){
						console.log("请求所有的动态返回的数据..........");
						console.log(res);
						var resData = JSON.parse(res.bodyText);
						if(parseInt(resData.status)==200){
								this.dynamicList=resData.msg;
								this.dynamicHide=false;
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
	#dynamicSquare{
			min-height: 800px;
			width: 870px;
			overflow: auto;
			box-sizing: border-box;
			margin:15px 15px 0;
			padding:0px 0px 15px;
			background: #fff;
			position: relative;
			.dynamicList{
				padding-left: 15px;
				
				-webkit-column-count: 3;
				-webkit-column-gap: 10px;
				-webkit-column-fill: auto;
				
				
				li{
					box-sizing: border-box;
					width:270px;
					/*background: grey;*/
					border: 1px solid gray;
					padding: 10px;
					margin-bottom: 20px;
					list-style: none;
					display: inline-block;
					.img{
						max-width: 250px;
					}
					.content{
						padding: 10px;
						.info{
							width: 200px;
							line-height: 30px;
							padding-left: 10px;
							border: 1px solid #dcdcdc;
							border-radius: 10px;
						}
						.input{
							width: 200px;
							display: none;
							text-align: right;
							textarea{
								text-align: left;
								max-width: 220px;
								width: 200px;
								display: block;
								margin-bottom: 10px;
							}
							span{float: left}
							i{
								font-size: 24px;
								display: inline-block;
								width: 50px;
								line-height: 30px;
								height: 30px;
								text-align: center;
								background: skyblue;
								position: relative;
								top:-6px;
							}
						}
					}
					.option{
						/*height: 20px;*/
						color:#c3c3c3;
						padding: 10px;
						i{
							font-size: 18px;
							display: inline-block;
							margin-left: 10px;
						}
						.contentList{
							padding: 0;
							margin: 0;
							display: none;
							li{
								padding: 0px;
								margin:10px 0;
								margin-bottom: 0px;
								border: none;
								img{
									width: 30px;
									height: 30px;
									vertical-align: top;
									position: relative;
									top:3px;
								}
								p{
									display: inline-block;
									padding-top: 5px;
									line-height: 18px;
									font-size: 14px;
									margin: 0px;
									color: #266ab9;
									span{
										color:#c0a599;
									}
									b{
										font-weight: normal;
										color:#6b338a;
									}
								}
							}
						}
					}
					.text{
						margin: 10px;
					}
					
					.name{
						padding:10px;
						height:30px;
						img{
							width: 30px;
							height: 30px;
							border-radius: 15px;
							vertical-align: middle;
						}
						p{
							display: inline-block;
							padding: 0;
							margin: 0;
							color:#88438e;
							margin-left: 5px;
							span{
								color:#999999;
							}
							i{
								float:right;
								text-align: right;
								font-size: 12px;
							}
						}
					}
				}
			}
			
			
	}

</style>

<!--http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html-->