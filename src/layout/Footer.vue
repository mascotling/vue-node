<template>
  <footer id="footer">
      <a href="#">
          <i class="iconfont icon-shengyin"></i>
          发现音乐
      </a>
      <a href="#">
          <i class="iconfont icon-laba"></i>
          我的音乐
      </a>
      <a href="#">
          <i class="iconfont icon-wode"></i>
          朋友
      </a>
      <router-link to="/Reg" tag='a'>
		  <i class="iconfont icon-wode1"></i>
		  账号
	  </router-link>
         
      </a>
  </footer>
</template>
<script>
  export default {
    name:'Footer',
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
  .Footer{}
  #footer .iconfont{
      font-size: .24rem;
  } 
  #footer{
      height: .5rem;
      background:#262521;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
  }
  #footer a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666666;
  }
  #footer a:hover,#footer a:focus{
      color: #fff;
  }
</style>

