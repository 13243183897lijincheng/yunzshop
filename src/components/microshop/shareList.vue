<style lang="scss" rel="stylesheet/scss" scoped>
p,ul,li{margin:0; padding:0;}
	li{list-style: none;}
	#share{
		
		.m_header{
	        width:100%;
	        height:45px;
	        padding-right: 15px;
	        box-sizing: border-box;
	        background:#fff;
	        line-height:45px;
	        font-size:18px;
	        span{
	            display:inline-block;
	            width:16px;
	            height:24px;
	            float:left;
	            margin-left:10px;
	            font-size:30px;
	        }
	        i{
	        	font-size: 16px;
	        	float: right;
	        	font-style: normal;
	        }
	    }
		.shareNav{
			 
					background: #fff;
					margin-top: 10px;
					li{
						width: 25%;
						line-height: 50px;
						text-align: center;
						float: left;
						font-size:18px;
					}
				}
				
				
				.ratioNav{
				      padding: 0px;
				      margin: 0px;
				      height: 40px;
				      width: 100%;
				      background: #fff;
				      border-bottom: 1px solid #cdcdcd;
				      border-top: 1px solid #cdcdcd;
				      li{
				        float: left;
				        width: 33%;
				        text-align: center;
				        line-height: 40px;
				        font-size:16px;
				        color: #666;
				      }
				    }
				    .rationList{
				      padding: 0px;
				      margin: 0px;
				     
				      li{
				        width: 100%;
				        height: 90px;
				        padding: 15px;
				        box-sizing:border-box;
				        font-size:16px;
				         background: #fff;
				        margin-bottom: 8px;
				        .left{
				          width:70%;
				          float: left;
				          text-align: left;
				          /*padding-left: 22px;*/
				          box-sizing:border-box;
				          line-height:30px;
				          span{
				            font-size: 16px;
				            font-weight: 400;
				            color:#333;
				          }
				          p{
				            font-size: 12px;
				            color:#999;
				          }
				        }
				        .right{
				          line-height: 26px;
				          padding-top: 3px;
				          float: left;
				          text-align: right;
				          width: 30%;
				          font-size:16px;
				          color:#999;
				          span{
				          	 font-size:16px;
				          	color:#e51c23
				          }
				        }
				      }
				     }
				     
				     
				     .shareNav:after,.rationList:after{
				     	content: "";
				     	display: block;
				     	clear: both;
				     }
	}
</style>
<template>
 <div id="share">
    	
        <div class="m_header">
            <span class="iconfont icon-left" @click="goBack"></span>
         	   店主中心
       	</div>
       	
       	<ul class="shareNav">
					<li  class="navli" @click="changeStyle($event,1)">全部</li>
					<li  class="navli" @click="changeStyle($event,2)">未结算</li>
					<li  class="navli" @click="changeStyle($event,3)">已结算</li>
					<li  class="navli" @click="changeStyle($event,4)">已失效</li>
		</ul>
				
       	
       	
       <ul class='rationList'>
       	
	       	 <li v-if="orderData" v-for="elem in orderData">
		       		<router-link :to="fun.getUrl('microShop_shareDetail',{orderID:elem.id})">
				          <div class="left">
				            <span>{{elem.mode_type}}</span>
				            <p>{{elem.created_at}}</p>
				          </div>
				
				          <div class="right">
				            <span>￥{{elem.bonus_money}}</span><br />
				            {{elem.status_name}}
				          </div>
			       
			       </router-link>
		     </li>
		     <div v-if="!orderData">您还未下订单，赶快去商城选购吧~</div>
      </ul>
       
    </div>
</template>


<script>
	export default{
		 data(){
		      return {
            		orderData:[
		                ],
		            getType:""
		      }
		 },
		 
		 methods:{
		 	init(){
		 		let that =this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShopBonusLog.list.apply",{"apply_status":this.getType,"time_type":this.$route.params.date}).then(function (response) {
              		console.log("分红列表");
              		console.log(response);
					 if (response.result == 1) {              		
              		 	that.orderData=response.data.list.data;	
					 }else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
		 	},
		 	goBack(){
		  		this.$router.push(this.fun.getUrl('microShop_ShopKeeperCenter'));
		  	},
		  	
		  	//第二个参数用来控制过滤内容
		  	changeStyle(e,val){
		  		
		  		var lia=document.getElementsByClassName('navli');
	  			//清除所有的下划线
	  			for(var i=0;i<lia.length;i++){
	  				lia[i].style="";
	  			}
	  			if(val==1){
	  				this.getType="";
	  				this.init();
	  			}else if(val==2){
	  				this.getType="1";
	  				this.init();
	  			}else if(val ==3){
	  				this.getType="0";
	  				this.init();
	  			}else if(val ==4){
	  				this.getType="-1";
	  				this.init();
	  			}
		  		
		  		//为当前选中的元素加下划线
		  		e.target.style="border-bottom:2px solid #f15353";
		  	}
		  },
		  mounted(){
		  	//构建一开始页面加载的时候默认选中
		  	var lia=document.getElementsByClassName('navli');
		  	lia[0].style="border-bottom:2px solid #f15353";
		  	this.data=this.orderData;
		  },
		  
		  //通过路由传参数来控制显示 哪个时间的订单
		 created(){
		 	console.log(this.$route.params.date);
		 	
		 	this.init();
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
