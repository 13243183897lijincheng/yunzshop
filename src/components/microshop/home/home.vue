<template>
<div id="microShop_main">
	<header :class="{amout}" v-if='follow'>
		<div class="attention">
			
			<span class="iconfont icon-left" @click="goBack"></span>
			
			<img :src="follow.logo">
			
			<div class="text">
				<p>{{follow.text}}的微店</p>
			</div>
			
			<div :class="{'search':'ture','mout':amout,isfollow}" id="d1">
				<div class="search-form-box" @click='tosearch'><i class="el-icon-search"></i>输入关键词搜索</div>
			</div>
		</div>
	</header>
	
	
	<div class="home" >
		
		<div class="top1" :style="{backgroundImage: 'url('+bgImg+')',backgroundSize:'cover'}">
			<div class="content1">
				<div class="picture1">
					<img v-if="userImg" :src="userImg" alt="" />
					<img v-else src="../../../../../static/app/images/photo-mr.jpg" alt="用户头像" />
				</div>
				<div class="name1"><span>{{username}}</span> <br />{{signName}}</div>
			</div>
			
			
		</div>
		
		<div class="ment">
			<c-ment :datas="category"></c-ment>
		</div>
		
		<div class="my-swipe">
			<swipe style="height: 150px;">
						<swipe-item v-for="item in bannerData">
							<template v-if='item.thumb'><img :src="item.thumb" width="100%"></template>
							<template v-if='!item.thumb'><img src="../../../../assets/images/img_default.png"></template>
						</swipe-item>
			</swipe>
		</div>
		
		
		<!-- 后台传的图片放置位置 -->
		<ul class="backEndGoods">
			<li v-for="i in 3">
				<router-link v-if="goodsListData[i+3-1].goods_id" :to="fun.getUrl('goods',{ id: goodsListData[i-1].goods_id })">
					<div><img :src="goodsListData[i-1].thumb" alt="" /></div>
					<p >
						<i class="goodname">{{goodsListData[i-1].title}}</i>
						<b>￥{{goodsListData[i-1].price}}</b><br />
						<del>￥{{goodsListData[i-1].market_price}}</del>
					</p>
				</router-link>
			</li>
		</ul>
		
	
		
		<div class="my-swipe">
			<swipe style="height: 150px;">
						<swipe-item v-for="item in ads">
							<template v-if='item.thumb'><img :src="item.thumb" width="100%"></template>
							<template v-if='!item.thumb'><img src="../../../../assets/images/img_default.png"></template>
						</swipe-item>
			</swipe>
		</div>
		
			<!-- 后台传的图片放置位置 -->
		<ul class="backEndGoods">
			
				<li v-for="i in 3">
					<router-link v-if="goodsListData[i+3-1].goods_id" :to="fun.getUrl('goods',{ id: goodsListData[i+3-1].goods_id })">
						<div><img v-if="goodsListData" :src="goodsListData[i+3-1].thumb" alt="" /></div>
						<p v-if="goodsListData" >
							<i class="goodname">{{goodsListData[i+3-1].title}}</i>
							<b>￥{{goodsListData[i+3-1].price}}</b><br />
							<del>￥{{goodsListData[i+3-1].market_price}}</del>
						</p>
					</router-link>
				</li>
		</ul>
		
		
		<div class="goodsList">
			<c-goodsList :goods='goodsListData' :num="6" text='商品列表'></c-goodsList>
		</div>
		
		
	</div>
<!--	
	<div class="temp" v-if='oftemp'>
		<div class="home" v-if='tempData'>
			<template v-for="item in tempData">
				<component :is="item.temp" :datas='item'></component>
			</template>
			<div style="height: 53px;"></div>
		</div>
	</div>-->

	<!-- 回归顶部按钮 -->
	<div v-if="amout" class="goTop" @click="goTop"></div>

	<!-- 页面底部的导航栏 -->
	<div class="footer">
		<ul>
			<router-link :to="fun.getUrl('microShop_home')">
				<li class="na"><i class="fa fa-home"></i><br />首页</li>
			</router-link>
			
			<router-link :to="fun.getUrl('microShop_selectGoods',{num:0,isSelect:false})">
				<li class="na"><i class="fa fa-th-large"></i><br />分类</li>
			</router-link>
			
			
			<!-- 判断用户是否已经开店， 如果有的话显示个人中心  没有的话显示我要开店 -->
			<router-link :to="fun.getUrl('microShop_apply')" v-if="!havedShop">
				<li class="openMyShop">我要<br />开店</li>
			</router-link>
			<router-link :to="fun.getUrl('microShop_ShopKeeperCenter')" v-if="havedShop">
				<li class="openMyShop">店主<br />中心</li>
			</router-link>
			
			
			<router-link :to="fun.getUrl('cart')">
				<li class="na righ"><i class="fa fa-cart-plus"></i><br />购物车</li>
			</router-link>
			
			<router-link :to="fun.getUrl('member')">
				<li class="na righ"><i class="fa fa-user"></i><br />
            		我的
				</li>
			</router-link>
		</ul>
	</div>

</div>
</template>


<script>
	import home1 from './home_controller';
	export default home1;
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	#microShop_main{
		padding-bottom:20px;
		
		
		.ad{
			min-height: 130px;
			width: 100%;
			margin: 15px 0;
			background: #fff;
		}
		
		
		.backEndGoods{
			padding:15px 0;
			background:#fff;
			li{
				width: 28%;
				
				margin-left: 15px;
				float:left;
				
				.goodname{
						height: 40px;
						line-height: 20px;
						font-size: 0.87rem;
						color:black;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						word-break: break-all;
						display: block;
						font-style: normal;
					}
				
				div{
					width: 100%;
					height: 100px;
					border:1px solid black;
					img{
						width: 100%;
						max-height: 100px;
					}
				}
				p{
					text-align: left;
					line-height: 21px;
					margin-top: 10px;
					text-align: left;
					b{
						color:#f15353;
						font-size: 0.9rem;
						float:left;
						-webkit-text-size-adjust:none; 
					}
					del{
						font-size: 0.7rem;
						-webkit-text-size-adjust:none; 
						
						display: inline-block;
						margin-left: 2px;
						position: relative;
						top:-2px;
						color:#3b3b3b;
						transform: translateY(-1px);
					}
				}
			}
		}
		.backEndGoods:after{
			content: "";
			display: block;
			clear: both;
		}
		.goTop{
			width: 40px;
			height:40px;
			border-radius: 20px;
			position: fixed;
			bottom: 80px;
			right: 10px;
			z-index: 40;
			color:#20a0ff;
			font-size: 24px;
			background-image: url(../../../../assets/images/top.png);
			background-repeat: no-repeat;
			background-size: 40px 20px;
			background-position: 0 10px;
			background-color: lightyellow;
		}
		.footer{
			position:fixed;
			bottom:0px;
			width: 100%;
			background:#fff;
			box-sizing: border-box;
			padding-bottom:10px;
			z-index:100;
			ul{
				box-sizing: border-box;padding: 0;margin: 0;width: 100%;height: 50px;padding: 15px;
				li{
					padding: 0;
					margin: 0;
					list-style: none;
					width: 20%;
					float: left;
					font-size: 0.8rem;
					color:#828282;
					i{
						/*color:#6a6a6a;*/
						font-size: 30px;
						line-height: 34px;
					}
				}
				
				.righ{
					position: relative;
					left: 4.7%;
				}
				.na:hover{
					color:#f15353;
				}
				.openMyShop{
					width: 55px;
					height: 55px;
					background: #f15353;
					margin-top: -6px;
					border-radius: 50%;
					line-height: 20px;
					padding-top: 8px;
					box-sizing: border-box;
					text-align: center;
					color:#fff;
					font-size: 16px;
					box-shadow: 0 0 0 6px  #e6e6e6;
					position: relative;
					left: 3%;
				}
			
			}
			
		}
		
		
	    header{height: 46px;background:#fff;padding: 7px;box-sizing: border-box;width: 100%;z-index: 99;
	        .attention{
	        	.iconfont{
	        		float: left;
	        		line-height: 32px;
	        		font-size: 30px;
	        		/*margin-right:0px ;*/
	        	}
	            img{float: left;  height: 26px;  width: 26px;vertical-align: middle;transform: translateY(3px);}
	            .text{float: left;margin-left: 3px;
	                p{  color: #333333;font-size: 1rem;margin: 0;text-align: left;
	                line-height: 32px;
	                    span{color: #f15353 }}
	            }
	            button{background: #48a3f1; border:0; border-radius:4px;height: 26px;float: right ;   margin: 3px 0; a{color: #fff;} }
	        }
	    }
	    header.amout{position: fixed;top: 0;}
	   
	   
	    
	    
	    .m-swipe{
	          position: relative;  z-index: 2;
	        .c-swipe {
	            overflow: hidden;
	            text-align: center;
	            position: relative;
	            width: 100%;
	            /*height: 100%;*/
	            .c-swipe-item{    
	            	text-align: center;
	                overflow: hidden;
	                position: relative;
	                width: 100%;
	                img{width: 100%;
	       				height: 130px !important;}
	                /*height: 100%;*/
	                }
	        }
	        .c-swipe:after{
	        	content:"";
	        	display: block;
	        	clear: both;
	        	
	        }
	       img{width: 100%;
	       height: 130px;}
	
	    }
	    
	    
	    .isfollow{top:45px;}
	    .search {
	        
	      
	        float:right;
	        width: 40%;
	        margin-right: 15px;
	        /*padding-left: 2px;*/
	        img {
	            width: 10%;
	            float: left;
	            max-height: 40px;
	        }
	        .search-form-box {
	            /*margin: 0 3%;*/
	            width: 100%;
	            color: #989191;
	             background: #f3f5f7;
	            border-radius: 15px;
	            height: 30px;
	            line-height: 30px;
	            text-align: left;
	            padding-left: 10px;
	            font-size: 14px;
	            margin-right: 15px;
	        }
	    }
	    

		.top1{
			width: 100%;
			padding: 15px;
			height: 110px;
			box-sizing: border-box;
			/*background: #f15353;*/
			position:relative;
			
			.content1{
				position: absolute;
				height: 50px;
				bottom: 15px;
				width: 100%;
				box-sizing: border-box;
				text-align: left;
				left: 15px;
				.picture1{
					float: left;
					width: 50px;
					height: 50px;
					
					margin-right: 15px;
					/*border:1px solid black;*/
					img{
						width: 50px;
						height: 50px;
						border-radius: 50%;
						vertical-align: middle;
					}
				}
				.name1{
					color:#fff;
					font-size: 12px;
					float: left;
					height: 40px;
					line-height: 20px;
					width: 80%;
					padding-top: 5px;
					span{
						font-size: 16px;
					}
					
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					word-break: break-all;
				}
			}
		}
		
		
		
		
	}
</style>