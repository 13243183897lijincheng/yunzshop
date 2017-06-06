import { mapState } from 'vuex';
import cTitle from 'components/title';
import cMent from 'components/ment';
import cGoodsList from 'components/goodsList';
//import { Swipe, SwipeItem } from 'mint-ui';
import banner from 'components/temp/banner';
import showbanner from 'components/temp/banner';
import showmenu from 'components/temp/menu';
import showtitle from 'components/temp/title';
import showsearch from 'components/temp/search';
import showline from 'components/temp/line';
import showblank from 'components/temp/blank';
import showrichtext from 'components/temp/richtext';
import showpicture from 'components/temp/picture';
import showcube from 'components/temp/cube';
import showarea from 'components/temp/area';
import showshop from 'components/temp/shop';
import showgoods from 'components/temp/goods';
import shownotice from 'components/temp/notice';

import cMyswipe from 'components/myswipe';
import { Swipe, SwipeItem } from 'c-swipe';
require('c-swipe/dist/swipe.css');
var items = [{
    "id": "M1491471961972",
    "temp": "showsearch",
    "params": {
        "placeholder": "", "style": "style2", "color": "#000",
        "bgcolor": "#FFF", "bordercolor": "#fa1f24", "searchurl": "", "uniacid": "6"
    }
    , "data": "", "other": "", "content": ""
}]

export default {
    data() {

        return {
            toi: this.fun.getKeyByI(),
            amout: false, index2: 1,
            category: [],
            goodsListData: [],
            ads: [],
            bannerData: [],
            "other": "",
            "content": "",
            show: true,
            tempData: items,
            oftemp: false,
            dftempData: false,
            follow:false,
            
            isfollow:true,
            username:"用户昵称",
            signName:"个性签名",
            userImg:"",
            carousel:[],
            bgImg:"",
            havaShop:false,//是否已有商品
        }
        
    },
    //computed: mapState(['mailInfo']),
    activated() {
//      this.getShopId();
        
    },
    mounted() {
		window.addEventListener('scroll', this.slider)
        //this.slider();
       
          this.getShopId();
        //this.tempDatas();
    },
    created() {
//			document.cookie="shop_id="+that.fun.getKeyByMicroShopId();	
    },

    methods: {
    	getShopId(){
    		let that = this;
    		
    		let val = that.fun.getKeyByMicroShopId()?that.fun.getKeyByMicroShopId():0;
    		
    		$http.get('plugin.micro.frontend.controllers.MicroShop.default.verifyShopId',{'shop_id':val})
    		.then((response) => {
                if(response.data.status==1){
                	document.cookie="shop_id="+that.fun.getKeyByMicroShopId();	
                	that.havedShop=false;
                	that.getMsg();
                }else if(response.data.status==2){
                	that.havedShop=true;
                	that.getMsg();
                }else if(response.data.status==-12){
                	that.$router.push(that.fun.getUrl('microShop_apply'));
                }else{
                	that.$router.push(that.fun.getUrl('home'));
                }
                
              
            }),(response) => {
            	
            }
    	},
    	
    	getMsg(){
    		let that = this;
    		$http.post('plugin.micro.frontend.controllers.MicroShop.default').then((response) => {
                console.log("商城首页请求个人信息返回的信息。。。。。");
                console.log(response);
                if (response.result == 1) {
           	
                	that.username=response.data.nickname;
                	that.signName=response.data.signature;
                	that.userImg=response.data.shop_avatar;
                	that.bgImg=response.data.shop_background;
                	that.ads=response.data.ads;
                	that.bannerData=response.data.carousel;
                	that.category = that.fun.chunk(response.data.category, 8);
                	that.goodsListData = response.data.goods;
                	
                	
                }else{
                	this.follow = false;
                	console.log(response.msg)
                }
            }),(response) => {
            	
            }
    	}
    	,
    	goTop(e){
    		document.body.scrollTop =0
    	},
    	goBack(){
		  		this.$router.push(this.fun.getUrl('home'));
		  	},
	

    },



    components: { cTitle, cMent, cGoodsList, banner, showbanner, showmenu, showtitle, showsearch, showline, showblank, showrichtext, showpicture, showcube, showarea, showshop, showgoods, shownotice, cMyswipe, Swipe, SwipeItem },

    compiled() {

        this.datate();
    }
}