<template>
  <div class="banner">
    <ul class="clearfix">
      <router-link  
	  v-for="item of data" 
	  :key="item._id" 
	  tag="li"
	  :to="{name:'User',params:{_id:item._id},query:{apiName:apiName}}"
	  >
        <img :src="item.banner" alt="" width="375px" />
      </router-link>
    </ul>
  </div>
</template>

<script>
    import Swipe from '../assets/js/swipe.js'
	import $ from 'jquery';
  export default {
    name:'Banner',
    props:['data', 'apiName'],
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		console.log("mounted")
	},
    updated(){
		console.log("updated")
		new Swipe($('.banner')[0], {
		  auto: 2000,
		  continuous: true,
		  stopPropation: true,
		  callback: function(index, element) {
		    $('.banner ul li').removeClass('active');
		    $('.banner ul li').eq(index).addClass('active');
		  }
		})
	},
    methods:{},
  }
</script>

<style scoped>
  .banner {
    position: relative;
    overflow: hidden;
    z-index: 999
  }
  .banner ul {
    height: 100%;
	overflow: hidden;
  }
  
  .banner ul li {
    width: 6.4rem;
    float: left;
    position: relative;
  }
  
  .banner ul li img {
    width: 100%;
    display: block;
  }
  
  .banner ul li .text-box {
    width: 5.8rem;
    padding: 0 0.3rem;
    height: 1.24rem;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
  }  
  .banner ol {
    position: absolute;
    right: 0.2rem;
    bottom: 0.2rem;
  }
  
  .banner ol li {
    width: 0.15rem;
    height: 0.15rem;
    background: #5477b2;
    float: left;
    border-radius: 50%;
    margin-right: 0.08rem;
  }
  .banner ol li.active {
    background: #fff;
  }
</style>

