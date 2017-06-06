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
		.main{
			.linkShop{
				margin: 10px 0;
				padding: 10px;
				text-align: center;
				background: #fff;
				font-size: 18px;
				color:goldenrod,
			}
			
			.top1{
				width: 100%;
				padding: 15px;
				height: 80px;
				box-sizing: border-box;
				background: #f15353;
				text-align: left;
				color:#fff;
				.picture1{
					float: left;
					width: 50px;
					height: 50px;
					img{
						width: 50px;
						height: 50px;
						border-radius: 50%;
						vertical-align: middle;
					}
				}
				.name1{
					/*color:#7591fd;*/
					font-size: 0.9rem;
					float: left;
					line-height: 22px;
					padding-top: 4px;
					margin-left: 5px;
					width: 30%;
					color:#fff;
					span{
						font-size: 0.9rem;
					}
					b{
						color:#fff;
					}
				}
				.share{
					width: 52%;
					height: 50px;
					line-height: 22px;
					padding-top: 5px;
					font-size: 0.9rem;
					text-align: right;
					float:right;
					/*color:#26228d;*/
				}
			}
			
			.content{
				.title{
					padding: 15px;
					line-height: 20px;
					color:#4c3e8e;
					text-align: left;
					background: #fff;
					margin:15px 0 2px 0;
					span{
						float: right;
						color:#ea494c;
						margin-right: 5px;
					}
					i{
						float:right;
						font-size: 24px;
					}
					b{
						font-size: 16px;
					}
				}
				.nav{
					background: #fff;
					li{
						width: 25%;
						line-height: 50px;
						text-align: center;
						float: left;
						font-size: 14px;
						a{
							color:gray
						}
					}
				}
				.shareNav{
					background: #fff;
					margin-top: 10px;
					li{
						width: 33.3%;
						line-height: 50px;
						text-align: center;
						float: left;
						font-size: 14px;
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
				        font-size: 16px;
				        color: #666;
				      }
				    }
				    .rationList{
				      padding: 0px;
				      margin: 0px;
				      background: #fff;
				      li{
				        width: 100%;
				        height: 65px;
				        padding: 10px;
				        box-sizing:border-box;
				        border-bottom: 1px solid #f3f3f3;
				        .left{
				          width:60%;
				          float: left;
				          text-align: left;
				          padding-left: 22px;
				          box-sizing:border-box;
				          line-height:20px;
				          span{
				            font-size: 16px;
				            font-weight: 400;
				            color:#333;
				          }
				          p{
				            font-size: 14px;
				            color:#999;
				          }
				        }
				        .right{
				          line-height: 20px;
				          padding-top: 10px;
				          float: left;
				          text-align: right;
				          width: 40%;
				          color:#999;
				          span{
				          	color:#e51c23
				          }
				        }
				      }
				     }
								
				
				
				
				
				
				
				.shareNav:after,.nav:after,.conte:after{
						content: "";
						display: block;
						clear: both;
				}
				.conte{
					margin-top: 1px;
					.con{
						box-sizing: border-box;
						text-align: center;
						float: left;
						height: 65px;
						padding: 15px;
						background: #fff;
						.el-badge{
							border: none;
							position: relative;
							top:8px;
							.el-button--small{
								font-size: 15px;
							}
							button{
								border: none;}
							.el-badge__content{
								background: #ffa800 !important;
							}
						}
						b{
							color:#f15353;
						}
					}
					
					.con1{
						width:50%;
						box-sizing: border-box;
						margin-right: 1px;
						line-height: 19px;
					}
					.con2{
						width:33.3%;
						margin-top: 1px;
						border-right: 1px solid #f15353;
						line-height: 19px;
					}
					.con2:last-child{
						border: none;
					}
					.con3{
						width:49%;
						margin-right: 1px;
						
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
         	   <router-link :to="fun.getUrl('microShop_baseinfo')">
         	   		<i>微店设置</i>
         	   </router-link>
       	</div>
       	
       <div class="main">
       	
       		<div class="top1">
				<div class="picture1">
					<img v-if="!userImg" src="../../../../static/app/images/photo-mr.jpg" alt="用户头像" />
					<img v-if="userImg" :src="userImg" alt="用户头像" />
				
				</div>
				<div class="name1">
					<span>{{username1}}</span> <br />
					
					<router-link :to="fun.getUrl('microShop_apply')">
						<b>{{level1}}&nbsp;>></b>
					 </router-link>
				</div>
				<div class="share">
					分红比例：{{share1}}% <br />
					上级店主分红比例：{{share2}}%
				</div>
			</div>
			
			
			<router-link :to="fun.getUrl('microShop_home')">
				<div class="linkShop">我的商铺</div>
			 </router-link>
			<div class="content">

				<router-link :to="fun.getUrl('microShop_orderDetail',{date:'all'})">
					<div class="title">
						<b class="iconfont icon-weidiandingdan"></b> 微店订单
						<i class="iconfont icon-right"></i>
						<span>累计：{{totalTicket}}单</span>
						
					</div>
				</router-link>
				
				<ul class="nav">
					<li class="navli">今天</li>
					<li class="navli">昨日</li>
					<li class="navli">本周</li>
					<li class="navli">本月</li>
				</ul>
				
				
				<ul class="nav">
					<router-link :to="fun.getUrl('microShop_orderDetail',{date:'today'})">
						<li>{{shareData.today}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_orderDetail',{date:'yesterday'})">
						<li>{{shareData.yesterday}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_orderDetail',{date:'week'})">
						<li>{{shareData.week}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_orderDetail',{date:'month'})">
						<li>{{shareData.month}}</li>
					</router-link>
				</ul>
				
				
				<router-link :to="fun.getUrl('microShop_shareList',{date:'all'})">
					<div class="title">
						<b class="iconfont icon-weidiandingdan"></b> 微店分红
						<i class="iconfont icon-right"></i>
						<span>累计：￥{{totalShareMoney}}</span>
					</div>
				</router-link>
				
				<ul class="nav">
					<li class="navli">今天</li>
					<li class="navli">昨日</li>
					<li class="navli">本周</li>
					<li class="navli">本月</li>
				</ul>
				
				<ul class="nav">
					<router-link :to="fun.getUrl('microShop_shareList',{date:'1'})">
						<li>￥{{shareData.today}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_shareList',{date:'2'})">
						<li>￥{{shareData.yesterday}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_shareList',{date:'3'})">
						<li>￥{{shareData.week}}</li>
					</router-link>
					<router-link :to="fun.getUrl('microShop_shareList',{date:'4'})">
						<li>￥{{shareData.month}}</li>
					</router-link>
				</ul>
				
		
				
				
			</div>
       		
       	
       </div>
       
    </div>
</template>


<script>
	export default{
		 data(){
		      return {
            		username1:"微店名称",
            		level1:"级别",
            		share1:"0",
            		share2:"0",
            		totalTicket:200,
            		totalShareMoney:1000,
            		userImg:'',
            		orderData:'',
            		shareData:''
		      }
		  },
		  
		  methods:{
		  	goBack(){
		  		this.$router.push(this.fun.getUrl('microShop_home'));
		  	},
		  	init(){
		 		let that =this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShop.index").then(function (response) {
              		console.log("微店中心收据.....");
              		console.log(response);
					 if (response.result == 1) {              		
              		 	that.userImg=response.data.micro_shop_data.shop_avatar;	
              		 	that.username1=response.data.micro_shop_data.shop_name;	
              		 	that.level1=response.data.micro_shop_data.level_name;
              		 	
              		 	that.share1=response.data.micro_shop_data.bonus_ratio;	
              		 	that.share2=response.data.micro_shop_data.agent_bonus_ratio;	
              		 	
              		 	that.totalTicket=response.data.order_data.order_total;	
              		 	that.totalShareMoney=response.data.bonus_log_data.bonus_total;
              		 	
              		 	that.shareData=response.data.bonus_log_data;
              		 	that.orderData=response.data.order_data;
					 }else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
		 	}
		 },
		 activated(){
		 	this.init();
		 }
        
   }
</script>
