<template>
  <div id="app">
	<loading v-if="$root.bLoading"/>
	<Header v-if="$root.bNav"/>
	<router-view></router-view>
	<Footer v-if="$root.bNav"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import User from '../pages/User.vue'
import ZhangHao from '../pages/ZhangHao.vue'
import NoPage from '../pages/NoPage.vue'
import loading from '../components/loading.vue';

export default {
  name: 'App',
  components: {
    Header,Footer,Login,Reg,User,ZhangHao,loading
  },
  watch:{
  	$route:{//路由监听，属性检测
      handler(nextValue,PrevValue){
        let path = nextValue.path;
        
        if(/home|User|ZhangHao/.test(path)){//home follow column
          this.$root.bNav=this.$root.bFoot=true;
        }
        
        if(/Nopage|Login|Reg/.test(path)){//detial login reg
          this.$root.bNav=this.$root.bFoot=false;
        }
		if(path.includes('/ZhangHao')){//user
		  this.$root.bNav=true;
		  this.$root.bFoot=true;
		}
      },
      immediate:true
    }
  }
}
</script>

<style>
	
</style>
