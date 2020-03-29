<template>
  <div class="ZhangHao">
	 <section class="top">
	     <div class="left">
	         <img src="../assets/img/xianere.jpg" alt="">
	         <div class="shan">
	             <p>山人球</p>
	             <span>Lv.5</span>
	         </div>
	     </div>
	     <div class="right">
	         <a href="javascript:;" @click="logout">注销</a>
	     </div>
	 </section>
	 <section class="center">
	     <div class="c_1">
	         <a href="#">动态</a>
	         <span>0</span>
	     </div>
	     <div class="c_1">
	         <a href="#">关注</a>
	         <span>2</span>
	     </div>
	     <div class="c_1">
	         <a href="#">粉丝</a>
	         <span>0</span>
	     </div>
	     <div class="c_1">
	         <a href="#">我的资料</a>
	         <span>0</span>
	     </div>
	 </section>
	 <section class="center2">
	     <div class="left">
	         <i class="iconfont icon-xinfeng"></i>
	         <p>我的消息</p>
	     </div>
	     <div class="right">
	         <span>10</span>
	     </div>
	 </section>
	 <div class="bendi">
	     <div class="left">
	         <i class="iconfont icon-voice"></i>
	     </div>
	     <div class="right">
	         <span>会员中心</span>
	         <i class="iconfont icon-laba"></i>
	     </div>
	 </div>
  </div>
</template>

<script>
	// import axios from '../plugins/axios.js'
	// import axios from 'axios'
  export default {
	 //  beforeRouteEnter(to,from,next){
	    
	 //    let local = window.localStorage.getItem('user')
		// // alert(local)
	 //    if(!local){
	 //      next('/login')
	 //      return;
	 //    }
	 //    axios({
	 //      url:'/api/user',
	 //    }).then(
	 //      res=>{
	 //       if(res.data.err==0){
	 //         next(_this=>_this.user=res.data.data)
	 //       }else{
	 //         next('/login')
	 //       }
	 //      }
	 //    )
	 //  },
	  
    name:'ZhangHao',
    props:{},
    data(){
      return {
        user:{}
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		logout(){
		  //删除 本地 token
		  window.localStorage.removeItem('user')
		  //发送注销请求
		  this.$router.push('/home')
		}
	}
  }
</script>

<style>
  .ZhangHao{}
  .top{
	  margin-top: .95rem;
      width: 100%;
      height: .7rem;
      border-bottom: 0.005rem solid #e2e3e4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 .15rem;
      box-sizing: border-box;
      background: #ffffff;
  }
  .top .left{
      width: 1.24rem;
      height: .6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .top .left img{
      width: .6rem;
  }
  .top .left .shan{
      width: .51rem;
      height: .41rem;
      display: flex;
      flex-direction: column;
  }
  .top .left .shan span{
	  padding-left: .1rem;
      width: .35rem;
      height: .16rem;
      border: 0.01rem solid #bfbfbf;
      border-radius: .2rem;
  }
  .top .right a{
      display: block;
      width: .61rem;
      height: .24rem;
      border:0.008rem solid #d33a31;
      text-align: center;
      line-height: .24rem;
      border-radius: .2rem;
  }
  .center{
      display: flex;
      width: 100%;
      height: .38rem;
      background: #fff;
      margin-bottom: .1rem;
  }
  .center .c_1{
      width: 25%;
      height: .3rem;
      border-right: 0.005rem solid #e2e3e4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .center2{
      height: .55rem;
      background: #fff;
      display: flex;
      align-items:center;
      justify-content: space-between;
      padding: 0 .13rem;
      box-sizing: border-box;
      margin-bottom: .1rem;
  }
  .center2 .left{
      width: .96rem;
      height: .25rem;
      font-size: .15rem;
      display: flex;
      align-items:center;
      justify-content: space-between;
  }
  .center2 .right{
      display: block;
      width: .25rem;
      height: .18rem;
      background: #d33a31;
      border-radius: .15rem;
      color: #fff;
      text-align: center;
      line-height: .18rem;
  }
  
  .bendi{
      height: .55rem;
      line-height: .55rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
  }
  .bendi .iconfont{
      color: #666;
      font-size: .24rem;
  }
  .bendi .left{
      margin-left: .21rem;
  }
  .bendi .right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 3.5rem;
      height: .55rem;
      border-bottom: 0.005rem solid #e2e3e4;
  }
  .bendi .right span{
      font-size: .15rem;
  }
  .center3{
      margin-bottom: .1rem;
  }
</style>
