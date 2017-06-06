<template>
        <div id="microshop_apply">
            <div class="m_header">
                <span class="iconfont icon-left" @click="goBack"></span>
                <span class="title">店主等级申请</span>
                <el-button type="text" @click="open">店主说明</el-button>
            </div>
            <div class="banner">
            	<img v-if='bannerImgSrc' :src="bannerImgSrc" alt="" />
            </div>
            <h3>请选择店主等级</h3>
            <ul class="levelList" >
            	<li v-for="(elem,index) in data">
            		<section  v-if="elem.not_show!=1">
            			<b>{{elem.level_name}}</b><br />
	            		{{elem.has_one_goods.market_price}}元<br />
	            		<span>{{elem.has_one_goods.title}}</span>
	            		<div class="clickBox" @click="changeStyle($event,elem.goods_id)"></div>
	            		
            		</section>
            		
            		<section class="haveLevel" v-else>
            			<b>{{elem.level_name}}</b><br />
	            		{{elem.has_one_goods.market_price}}元<br />
	            		<span>{{elem.has_one_goods.title}}</span>
	            		<div ></div>
            		</section>
            		
            	</li>
            </ul>
            
            <!--<router-link :to="fun.getUrl('microShop_baseinfo')">-->
            	<div class="btn" @click="pay">立即支付</div>
            	<!--<div class="btn">确认支付</div>-->
            <!--</router-link>-->
            
            <!--<div class="success" :class="{applySucHide:sucHide}">
            	<div class="close" @click="closeApplySuc">
            		<i class="iconfont icon-guanbi"></i>
            	</div>
            	
            	<div class="top">
            		<div class="touxiang">
            			<img src="../../../../static/app/images/photo-mr.jpg" alt="用户头像" />
					
            		</div>
            		<div class="name">
						<span>{{name}}</span><br />
						{{level}}
					</div>
            	</div>
            	
            	<div class="content">
            		恭喜你成为微店店主
            	</div>
            	
            	<p>你可以选择商品生成自己的微店，通过分享微店链接可以获得微店分红哦~~</p>
            	
            	
            	<router-link :to="fun.getUrl('microShop_baseinfo')">
            	<div class="btn" @click="closeApplySuc">
            		
            		马上开店
            	</div></router-link>
            </div>-->
            
        </div>

</template>
<script>
    export default {
    	data:function(){
    		return {
    			data:[],
    			bannerImgSrc:"",
    			nextUrl:'',
    			goodsID:'',
    			signature:"",
    			sucHide:'true'
    		}
    	},
        methods: {

        	//点击支付按钮 进行支付操作 同时弹出支付成功页面
        	pay(){
//      		this.sucHide=false;
        		
        		
				let that =this;
				$http.get(this.nextUrl,{goods_id:this.goodsID,total:1}).then(function (response) {
              		console.log("点击申请，开始跳转..................");
              		
					 if (response.result == 1) {              		
              		 	that.$router.push(that.fun.getUrl('goodsorder',{tag: "-2", goodsId: that.goodsID, optionsId: "", total: "1"}));
					}else{
						console.log(response);
					}
	           }, function (response) {
	                console.log(response);
	            });
        	},
            open() {
                this.$alert(' ', ' ', {
//                          confirmButtonText: '确定',
                            title:'店主说明',
                            message:this.signature,
                });
            },
            
            //点击选择某一项进行样式修改
            changeStyle(e,val){
            	console.log("改变样式。。。。");
            	var lia = document.getElementsByClassName("clickBox");
            	for(var i=0;i<lia.length;i++){
            		lia[i].className="";
            	}
            	e.target.className="active";
            	this.goodsID=val;
            },
		  	
		  	goBack(){
		  		this.$router.go(-1);
		  	},
		  	
		  	//请求数据 初始化页面 
		  	init(){
		  		let that = this;
	        	$http.get('plugin.micro.frontend.controllers.MicroShopApply.apply').then(function (response) {
	              
	                console.log("申请页面内请求到的数据----------------------");
	                console.log(response);
	                //alert(response.data)
	                if (response.result == 1) {
	                	that.nextUrl=response.data.create_order_api;
	                	that.bannerImgSrc=response.data.micro_thumb;
	                	that.data=response.data.levels;
	                	that.goodsID=that.data[0].goods_id;
	                	that.signature=response.data.signature;
	                } else {
	                    console.log(response.msg);
	                }
	
	            }, function (response) {
	                // error callback
	                console.log(response);
	            });
		  	}
		  	
		  	
        },
        activated(){
        	this.init();
        	
        }
    }

</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.applySucHide{
	display: none;
}
#microshop_apply {
	.active{
		border-color:#f15353 !important ;
	}
    .m_header{
        width:100%;
        height:45px;
        line-height:45px;
        background:#fff;
        position: relative;
        border-bottom:1px solid #ccc;
        span{
            display:inline-block;
            width:16px;
            height:24px;
            float:left;
            font-weight: normal;
            margin-left:10px;
	            font-size:30px;
        }
        .el-button{width: 20%;
            float: right;
            font-size: .8rem;
            font-weight: normal;
            color: #888;
            line-height: 45px;
            padding: 0;
        }
        span.title{    width: 60%;
            font-size: 15px;
            font-weight: bold;
            box-sizing: border-box;
            padding-left: 30%;

        }

    }
    .banner{
        width: 100%;
        min-height:100px;
        background: #fff;
    }
    h3{
    	font-size: 18px;
    	 font-weight: bold;
    	text-align: left;
    	padding: 15px;
    	
    	margin-top: 10px;;
    }
    .levelList:after{
    	content: "";
    	display: block;
    	clear: both;
    }
    .levelList{
    	padding: 15px;
    	li:nth-child(3n){
    		margin-right:0;
    	}
    	li{
    		width: 30%;
    		max-height: 80px;
    		box-sizing: border-box;
    		padding:10px 3px;
    		font-size: 0.9rem;
    		line-height: 1.2rem;
    		float: left;
    		margin-right: 5%;
    		margin-bottom: 10px;
    		position: relative;
    		
    		span{
    				color:gray;
    				height: 18px;
    				display: block;
    				overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					word-break: break-all;
					font-size: 0.9rem;
    			}
    		
    		.haveLevel{
    			color:gray;
    			b{
    				color:gray;
    			}
    			span{
    				font-size: 0.9rem;
    				color:gray;
    				height: 18px;
    				display: block;
    				overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					word-break: break-all;
    			}
    			div{
    				background: gray;
    				opacity: 0.5;
    			}
    		}
    		div{
    			width: 100%;
    			height: 100%;
    			position: absolute;
    			top:0;
    			left: 0;
    			z-index: 2;
    			border: 1px solid gray;
    		}
    		
    		b{
    			color: forestgreen;
    			font-size: 14px;
    			font-weight: 600;
    		}
    		span{
    			color:#a9a9aa;
    			font-size: 14px;
    		}
    		
    	}
    	
    	li:last-child{
    		margin: 0;
    	}
    	
    }
    
    .btn{
    	width: 70%;
    	padding: 10px;
    	font-size: 14px;
    	color:#fff;
    	background: #f15353;
    	border-radius: 10px;
    	margin:  0 auto;
    	margin-top: 70px;
    }
    
    .success{
    	 position: absolute;
    	 top:0;
    	 left: 0;
    	 width: 100%;
    	 z-index: 6;
    	 height: 100%;
    	 background-image: url(../../../assets/images/applySuccessBg.png);
    	 background-size: cover;
    	 background-position: 0 -20px;
    	padding: 50px 15px;
    	box-sizing: border-box;
    	.close{
    		position: absolute;
    		width: 30px;
    		height: 30px;
    		top:30px;
    		right: 15px;
    		border-radius: 50%;
    		i{
    			width: 30px;
    			height: 30px;
    			color:#f25654;
    			font-size: 30px;
    		}
    	}
    	
    	.top{
    		text-align:left;
    		.touxiang{
    			width: 65px;
    			height: 65px;
    			float: left;
    			margin-left: 15px;
    			border-radius:50% ;
    			img{
    				width: 65px;
    				height: 65px;
    			}
    		
    		}
    		.name{
    			padding: 15px;
    			line-height: 24px;
    			font-size: 16px;
    			float: left;
    			color:#90886e;
    			margin-left: 5px;
    			span{
    				font-weight: bold;
    				font-size: 18px;
    				color:#676047;
    			}
    		}
    		
    		
    	}
    	
    	.top:after{
    		content: "";
    		display: block;
    		clear: both;
    	}
    	
    	
    	.content{
    		color:#f3635a;
    		font-size: 24px;
    		line-height: 200px;
    		font-weight: bold;
    	}
    	
    	
    	p{
    		color:#999179;
    		font-size: 16px;
    		line-height: 22px;
    		padding: 20px;
    		margin-top: 20px;
    	}
    	
    	.btn{
    		margin-top: 20px;
    		
    			color:#fff;
    			font-size: 18px;
    	
    	}
    }
    
    
    
}


</style>