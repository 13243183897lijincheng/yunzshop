<template>
    <div id="loading">
    <div></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              
            }
        }
    }
</script>
<style lang="scss">
    #loading{
    	position: absolute;
    	width: 100%;
    	height: 100%;
    	z-index: 120;
    	background: #FFFFFF;top:0px;left: 0px;
    	
    	div{
    		position: absolute;
	    	width: 100%;
	    	height: 100%;
	    	background: url(../static/img/load2.gif) no-repeat center center;
    	}
    	
    }
</style>















