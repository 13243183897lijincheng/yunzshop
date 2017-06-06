let http ={}
http.install = function(Vue,options){
	 Vue.prototype.$get = function (url, params, suc, err) {
	    if (!url) {
//	      this.$message.error('您没提供请求的API哦！')
		  alert("您还没有提供请求的路径----来自http插件");

	    } else {
//	      let fullloadingInstance
//	      if (params.fullLoading) {
//	        fullloadingInstance = Loading.service({ fullscreen: true })
//	      }
	      this.$http.get(url, { params: params }).then((response) => {
	        var res = response.data
//	        if (fullloadingInstance) {
//	          fullloadingInstance.close()
//	        }
	        if (!res.error) { 
	        	suc && suc(res) 
	        }else {
//	          res.message && this.$message.error(res.message)
	          err && err(res)
	        }
	      }, (resp) => {
//	        if (fullloadingInstance) {
//	          fullloadingInstance.close()
//	        }
//	        if (err) {
//	          err(resp)
//	        } else {
//	          this.$message.error('服务器君忙碌，请稍后再尝试')
//	        }
	      })
	    }
  }
  Vue.prototype.$post = function (url, params, suc, err) {
    if (!url) {
      this.$message.error('您没提供请求的API哦！')
    } else {
      let fullloadingInstance
      if (params.fullLoading) {
        fullloadingInstance = Loading.service({ fullscreen: true })
      }
      this.$http.post(url, params).then((response) => {
        var res = response.data
        if (fullloadingInstance) {
          fullloadingInstance.close()
        }
        if (!res.error) {
          res.message && this.$message({ message: res.message, type: 'success' })
          suc && suc(res)
        } else {
                    /*   this.$message.error(res.message);
                     err && err(res); */

          if (!err) return res.message && this.$message.error(res.message)
          err && err(res)
        }
      }, (resp) => {
        err && err(resp)
        if (fullloadingInstance) {
          fullloadingInstance.close()
        }
        this.$message.error('服务器君忙碌，请稍后再尝试')
      })
    }
  }
}
