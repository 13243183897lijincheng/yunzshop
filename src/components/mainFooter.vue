<template>
    <footer class="footer" v-if="showFooter" >
        @Copyright {{ copyright }}
        <span>{{record}}</span>
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                showFooter: true,
                copyright:"2017-"+(new Date()).getFullYear()+" 河南城建学院",
                record:"粤ICP备084413132号"
            }
        },
        create(){
                var path = this.$route.path;
                 this.showFooter=true;
                if(path.indexOf("liveHome")>=0 || path.indexOf("videoPlaying")){
                    this.showFooter=false;
                }
        }
    }
</script>
<style lang="scss">
    .footer{
    	position: relative;
    	z-index: 100;
	    text-align: center;
	    height: 50px;
	    padding-top: 20px;
	    font-size: 13px;
	    clear: both;
        background: #e9edf0;
    }
</style>















