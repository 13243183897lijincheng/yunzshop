
<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我的访客页面'
    }
  },
  created(){
  	console.log(this.$route.params.username);
  }
}
</script>


<style lang="scss">
	.hello{
		min-height: 780px;
		width: 870px;
		box-sizing: border-box;
		margin: 15px;
		background: #fff;
	}

</style>

<!--http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html-->