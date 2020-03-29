<template>
	<div class="user">
		<Header/>
		<div class="gedan">
		    <div class="left">
		        我收藏的歌单（2）
		    </div>
		<div class="right">···</div>
		</div>
		<Music/>
		<Music/>
		<Music/>
		<Footer/>
	</div>
</template>

<script>
	import Header from '../layout/Header.vue'
	import Music from '../components/Music.vue'
	import Footer from '../layout/Footer.vue'
	
  export default {
    name:'User',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		Header,Music,Footer
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
  .gedan{
	  margin-top: .85rem;
      height: .3rem;
      background: #eeeff0;
      display: flex;
      justify-content: space-between;
      color: #5f6061;
      font-size: .14rem;
      line-height: .3rem;
  }
  .gedan .left{
      margin-left: .21rem;
  }
  .gedan .right{
      margin-right: .21rem;
  }
</style>
