<template>
  <div class="Header">
	<header id="header">
		<i class="iconfont icon-voice"></i>
		<div class="search">
			<i class="iconfont icon-fangdajing"></i>
			<input type="text" placeholder="推荐给你 香烟爱上火柴">
		</div>
		<i class="iconfont icon-shengyin1"></i>
	</header>
	<nav id="nav">
		<router-link
		  to="/home"
		  exact-active-class="active"
		>
		  音乐
		</router-link>
		<router-link
		  to="/User"
		  exact-active-class="active"
		>
		  视频
		</router-link>
		<router-link
		  to="/ZhangHao"
		  exact-active-class="active"
		>
		  电台
		</router-link>
	</nav>
  </div>
</template>
<script>
  export default {
    name:'Header',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
 body{
      height: 100%;
  }
  .content{
      height: 100%;
  }
  #header{
      height: .45rem;
      background: #d43c33;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
  }
  #header .iconfont{
      font-size: .24rem;
      color: #ffffff;
  }
  .search input{
      width: 2.67rem;
      height: .32rem;
      border: 0;
      border-radius:20px ;
      position: relative;
      padding-left:.43rem ;
      box-sizing: border-box;
	  background-color: #fff;
  }
  .search .iconfont{
      font-size: .2rem;
      color: #666;
      position: absolute;
      left: .1rem;
      top: .1rem;
  }
  #nav{
      height: .4rem;
      background: #f8f8f9;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      position: absolute;
      top: .45rem;
      left: 0;
      right: 0;
  }
  #nav a{
      width: .4rem;
      font-size: .15rem;
      height: .4rem;
      line-height: .4rem;
      color: #000;
	  text-decoration: none;
  }
  #nav a:hover,#nav a:focus{
      color: #d33a31;
      border-bottom:.02rem solid #d33a31;
  }
  /* .active{
      color: #d33a31;
      border-bottom:.02rem solid #d33a31;
  } */
</style>
