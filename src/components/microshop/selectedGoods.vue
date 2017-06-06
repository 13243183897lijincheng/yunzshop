<style lang="scss" rel="stylesheet/scss" scoped>
	p,ul,li{margin:0; padding:0;}
	li{list-style: none;}
	#selectedGood{
		
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
	    
	    .rationList{
	    	margin-bottom: 70px;
	    	li{
	    		padding:15px;
	    		padding-bottom: 0;
	    		background: #fff;
	    		margin-top:5px ;
	    		img{
	    			width: 18%;
	    			float: left;
	    			max-height: 75px;
	    			vertical-align: middle;
	    		}
	    		p{
	    			width: 80%;
	    			float: left;
	    			text-align: left;
	    			line-height: 18px;
	    			box-sizing: border-box;
	    			padding-left: 10px;
	    			font-size: 14px;
	    			span{
	    				color:#f23030;
	    			}
	    		}
	    	}
	    	
	    	li:after{
		    	content: "";
		    	display: block;
		    	clear: both;
		    }
	    	
	    }
	    
	    
	    
	    .bottom{
            width: 100%;
            box-sizing: border-box;
            padding: 15px;
            border-top: 1px solid #eaeaea;
            position: fixed;
            bottom: 0;
            background: #fff;
            font-size: 18px;
            text-align:left;
            line-height:40px;
            b{
                color:#f37385;
                
            }
            span{
                width: 130px;
                text-align: center;
                height: 40px;
                
                color:#fff;
                background: #f15353;
                float:right;
                display: inline-block;
                a{
                    font-size: 16px;
                    color:#FFF;
                }
            }
        }
	    
	    
	    
		
	}
</style>
<template>
 <div id="selectedGood">
    	
        <div class="m_header">
            <span class="iconfont icon-left" @click="goBack"></span>
         	   已选商品
       	</div>
       	
       	
       <ul class='rationList'>
       		
       		
	       	 <li v-for="elem in selectGood">
	       	 	
	       	 	<!-- 跳转至商品详情（待定） -->
	       	 	<!--<router-link :to="fun.getUrl('goods',{ id: items.goods_id })">-->
		       		<img :src="elem.thumb" alt="" />
		       		<p>
		       			{{elem.title}}
		       			<br />
		       			<span>￥{{elem.market_price}}</span><br />
		       			<span>分红 {{elem.bonus_money}}</span>
		       		</p>
		       		
		     	<!--</router-link>-->
		     </li>
      </ul>
      
      
      
      
      <div class="bottom">
		<i >
			已选&nbsp;<b>{{totalGoodsNum}}</b>&nbsp;件商品
		</i>
		<span  @click="pushFn" >
			确定选择
		</span>
		</div>
	</div>
	
     
</template>


<script>
	export default{
		 data(){
		      return {
            		selectGood:[],
            		totalGoodsNum:0
		      }
		 },
		 
		 methods:{
		 	pushFn(){
				let that = this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShop.set-goods",{"goods_ids":that.$route.params.goods}).then(function (response) {	
					 if (response.result == 1) {   
					 	that.$router.push(that.fun.getUrl('microShop_home'));
					 }else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
			},
		 	goBack(){
		  		console.log(11111);
		  		this.$router.go(-1);
		  },
		  init(){
		 		let that = this;
		 		$http.get("plugin.micro.frontend.controllers.MicroShop.get-goods",{"goods_ids":this.$route.params.goods}).then(function (response) {
              		console.log("-------------显示已选商品列表",);
              		console.log(response);
					 if (response.result == 1) {   
					 	that.selectGood=response.data.list;
					 	that.totalGoodsNum=response.data.count;
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




























<!--<style  lang="scss" rel="stylesheet/scss" scoped>
	
</style>

<template>
   
</template>

<script>
    
</script>
-->
