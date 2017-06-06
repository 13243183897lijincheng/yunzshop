<style lang="scss" rel="stylesheet/scss" scoped>
p,ul,li{margin:0; padding:0;}
	li{list-style: none;}
	#shopKeeperCenter{
		.m_header{
	        width:100%;
	        height:45px;
	        padding-right: 15px;
	        box-sizing: border-box;
	        background:#fff;
	        line-height:45px;
	        font-size:16px;
	        span{
	            display:inline-block;
	            width:16px;
	            height:24px;
	            float:left;
	            margin-left:10px;
	            font-size:30px;
	        }
	        i{
	        	font-size: 14px;
	        	float: right;
	        	font-style: normal;
	        }
	    }
		.main{
			.content{
				
				.nav{
					background: #fff;
					li{
						width: 25%;
						line-height: 50px;
						text-align: center;
						float: left;
						font-size: 13px;
					}
				}
				.nav:after,.conte:after{
						content: "";
						display: block;
						clear: both;
				}
				.conte{
					width:100%;
					
					.list{
						margin-bottom:10px;
						padding-bottom: 5px;
						background:#fff;
						.title1{
							background:#fff;
							padding: 15px;
							font-size: 14px;
							text-align:left;
							padding: 15px;
							margin-bottom: 1px;
							.status1{
								display: inline-block;
								width: 60px;
								color:#fff;
								text-align: center;
								float: right;
								line-height: 24px;
								background: green;
							}
							.status2{
								display: inline-block;
								width: 60px;
								color:#fff;
								text-align: center;
								float: right;
								line-height: 24px;
								background: #f15353;
							}
						}
						
						
						.middle{
							padding: 15px;
							background:#f0f0f0;
							text-align: left;
							float: left;
							width: 100%;
							box-sizing: border-box;
							margin-bottom:6px ;
							.img{
								width: 65px;
								height: 65px;
								float: left;
								background:grey;
								img{
									width: 65px;
									vertical-align: middle;
								}
							}
							
							.orderNum{
								height: 65px;
								margin-left: 15px;
								float:left;
								/*padding-top: 5px;*/
								line-height: 22px;
							}
							
						}
						
						/*.shareMoney{
							float: left;
							width: 120px;
						}*/
						
						.date{
							padding:20px 15px;
							background:#fff;
							text-align: left;
							color:#555555;
							line-height: 26px;
							b{
								color:red;
								font-size: 17px;
							}
							span{
								color:#ff9800;
								font-size: 12px;
							}
							.left{
								width: 50%;
								float:left;
								text-align: left;
								color:#d2d2d2;
								font-size: 12px;
							}
							.right{
								width: 50%;
								float:right;
								text-align: right;
								color:#d2d2d2;
								font-size: 12px;
							}
						}	
					}
					
					
					.list:after{
						content: "";
						display: block;
						clear: both;
					}
					
				}
				
				
			}
			
			
		}
	}
</style>
<template>
 <div id="shopKeeperCenter">
    	
        <div class="m_header">
            <span class="iconfont icon-left" @click="goBack"></span>
         	   店主中心
       	</div>
       	
       <div class="main">
       	
			<div class="content">
				<ul class="nav">
					<li @click="changeData($event,1)" >全部</li>
					<li @click="changeData($event,2)">已付款</li>
					<li @click="changeData($event,3)">已完成</li>
					<li @click="changeData($event,4)">已失效</li>
				</ul>
				
				<div class="conte">
					
					<div v-for="elem in orderData" class="list">
						
						<div class="title1">订单号：{{elem.order_sn}}
							<span v-if="elem.status_name=='已完成'" class="status1">{{elem.status_name}}</span>
							<span v-else  class="status2">{{elem.status_name}}</span>
						</div>
						
						<div class="middle">
							<div class="img"><img :src="elem.avatar" alt="" /></div>
							<div class="orderNum">
								{{elem.goods_title}} <br />
								X{{elem.goods_total}}<br />
								付款金额：￥{{elem.goods_price}} 
							</div>
						</div>
						
						<div class="date">
							共计{{elem.goods_total}}件商品，预计分红&nbsp;<b>￥ {{elem.bonus_money}}</b><br />
							<span>个别店主预计分红可能存在误差，以最终结算分红为准</span><br clear="all"/>
							<div class="left">付款：{{elem.pay_time}}</div>
							<div class="right">完成：{{elem.complete_time}}</div>
						</div>
						
					</div>
				</div>
			</div>
       		
       	
       </div>
       
    </div>
</template>


<script>
	export default{
		 data(){
		      return {
		      	orderData:[	],
		      	orderType:'',
            		
		      }
		  },
		  methods:{
		  	
		  	
		  	init(){
		  		let that = this;
	        	$http.get('plugin.micro.frontend.controllers.MicroShopOrder.list',{'order_status':that.orderType,"time_type":this.$route.params.date}).then(function (response) {
	              
	                console.log("订单页请求到的数据----------------------");
	                console.log(response);
	                //alert(response.data)
	                if (response.result == 1) {
	                	that.orderData=response.data.list.data;
	                } else {
	                    console.log(response.msg);
	                }
	            }, function (response) {
	                // error callback
	                console.log(response);
	            });
		  	},
		  	
		  	
		  	changeData(e,val){
		  		
		  		var lia=document.getElementsByClassName('nav')[0].getElementsByTagName('li');
		  		for(var i=0;i<lia.length;i++){
		  			lia[i].style="";
		  		}
		  		e.target.style="border-bottom:1px solid #f15353";
		  		
		  		if(val==1){
		  			this.orderType = "";
		  			this.init();
		  		}else if(val==2){
		  			this.orderType = "1";
		  			this.init();
		  		}else if(val==3){
		  			this.orderType = "3";
		  			this.init();
		  		}else if(val==3){
		  			this.orderType = "-1";
		  			this.init();
		  			
		  		}
		  		
		  	},
		  	
		  	goBack(){
		  		console.log(11111);
		  		this.$router.go(-1);
		  	}
		  	
		  },
		  mounted(){
		  	this.data=this.shareData;
		  	document.getElementsByClassName('nav')[0].getElementsByTagName('li')[0].style="border-bottom:1px solid #f15353";
		  },
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
