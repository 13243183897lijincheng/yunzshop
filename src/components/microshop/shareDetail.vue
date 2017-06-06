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
		.top{
			text-align: left;
			height: 95px;
			padding: 15px;
			background: #fff;
			position: relative;
			text-align: center;
			margin: 15px 0;
			i{
				
				font-style: normal;
				font-size: 16px;
				display: block;
			}
			.content{
				width: 120px;
				margin: 0 auto;
				font-size: 16px;
				text-align: center;
				span{
					font-size: 28px;
					color:green;
					display: inline-block;
					padding-top:12px;
					margin-bottom: 5px;
				}
				b{
					font-weight: normal;
					color:#fff;
					background: #f15353;
					width: 60px;
					height: 24px;
					display: inline-block;
					
				}
				
			}
			
		}
		.middle,.bott
		{
			text-align: left;
			padding: 25px 15px;
			line-height: 32px;
			font-size: 16px;
			color:#343434;
			background: #fff;
			margin-bottom: 8px;
		}
	}
</style>
<template>
 <div id="share">
    	<div v-if="shareType">
    		<div class="m_header">
            <span class="iconfont icon-left" @click="goBack"></span>
	         	   收入详情
	       	</div>
	       	
	       <div class="top">
	       		<i>微店分红</i>
	       		<div class="content">
	       			<span>{{data.bonus_money}}</span>元<br />
	       			<b>已结算</b>
	       		</div>
	       </div>
	       <div class="middle">
	       		购买会员：{{data.member_id}} <br />
	       		商品金额：{{data.goods_price}}元 <br />
	       		商品名：{{data.goods_title}}<br />
	       		分红比例：{{data.bonus_ratio}}% <br />
	       		支付方式：{{data.pay_type}} 
	       </div>
	       <div class="bott">
		       	订单状态：{{data.order_sn}} <br />
		       	订单编号：{{data.order_sn}}<br />
		       	支付编号：{{data.order_id}}<br />
		       	下单时间：{{data.created_at}} <br />
		       	付款时间：{{data.order_sn}} <br />
		       	完成时间：{{data.complete_time}}<br />
		       	结算时间：{{data.order_sn}} 
	       </div>
    	</div>
    	
    	<div v-else>
    		<div class="m_header">
            <span class="iconfont icon-left" @click="goBack"></span>
	         	   收入详情
	       	</div>
	       	
	       <div class="top">
	       		<i>下级微店店主销售分红</i>
	       		<div class="content">
	       			<span>{{data.bonus_money}}</span>元<br />
	       			<b>已结算</b>
	       		</div>
	       </div>
	       <div class="middle">
	       		下级店主：{{data.member_id}}<br />
	       		下级店主分红金额：{{data.goods_price}}元 <br />
	       		下级店主分红比例：{{data.bonus_ratio}}% <br />
	       		
	       </div>
	       <div class="bott">
	       	订单状态：{{data.order_sn}} <br />
	       	订单编号：{{data.order_sn}}<br />
	       	支付编号：{{data.order_id}}<br />
	       	下单时间：{{data.created_at}} <br />
	       	付款时间：{{data.order_sn}} <br />
	       	完成时间：{{data.complete_time}}<br />
	       	失效时间：{{data.order_sn}} 
	       </div>
    	</div>
        
       
    </div>
</template>


<script>
	export default{
		 data(){
		      return {
            		data:"",
            		shareType:true,
            		
		      }
		 },
		 
		 methods:{
		 	init(){
		 		let that = this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShopBonusLog.detail",{log_id:this.$route.params.orderID}).then(function (response) {
              		console.log("-------------详情页面",);
              		console.log(response);
					 if (response.result == 1) {   
					 	let temp =response.data.log;
              		 	if(temp.mode_type=="微店分红"){
              		 		that.shareType=true;
              		 		that.data=temp;
              		 	}
					 }else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
		 	}
		 	,
		  	goBack(){
		  		this.$router.go(-1);
		  	}
		 } ,
		 //通过路由传参数的形式可以展现某一个分红订单的详情
		 created(){
		 	this.init();
		 	console.log(this.$route.params.orderID);
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
