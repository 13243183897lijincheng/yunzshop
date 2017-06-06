export default  [
    {
      path: '/',
      component: require("../components/Hello.vue")
    },
    {
      path: '/dynamic',
      component: require("../components/dynamic.vue")
    },
    {
      path: '/myinformation/privatemsg/:username',
      component: require("../components/side/privatemsg.vue")
    },
    {
      path: '/myinformation/likeme/:username',
      component: require("../components/side/likeme.vue")
    },
    {
      path: '/myinformation/melike/:username',
      component: require("../components/side/melike.vue")
    },
    {
      path: '/myinformation/visited/:username',
      component: require("../components/side/visited.vue")
    }
    
    
  ]

