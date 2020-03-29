<template>
  <div class="Home">
    <Banner
	:data="list"
	apiName="banner"
	/>
	<FM/>
	<Recommended/>
	<List/>
  </div>
</template>

<script>
	import Banner from '../components/Banner.vue'
	import FM from '../components/FM.vue'
	import Recommended from '../components/Recommended.vue'
	import List from '../components/List.vue'
	import axios from 'axios'
	
  export default {
    name:'Home',
    props:{},
    data(){
      return {
        list:[
			// {_id:"26161a6a616",banner:'/img/1_02.jpg'},
			// {_id:"262615sx616",banner:'/img/1_03.jpg'}
		],
        home:[]
      }
    },
    components:{
		Banner,FM,Recommended,List
	},
    mounted(){
		axios({
		  url:'/api/goods/banner',
		  params:{_page:1,_limit:3},
		}).then(
		  res=>this.list = res.data.data
		)
		
		// axios({
		//   url:'/api/goods/home',
		//   params:{_page:1,_limit:10},
		// }).then(
		//   res=>this.home = res.data.data
		// )
	},
    updated(){},
    methods:{}
  }
</script>

<style>
  .Home{
      width: 100%;
      background: #fbfcfd;
      position: absolute;
      top: .8rem;
      bottom: .5rem;
      overflow-y: auto;
      overflow-x: hidden;
  }
</style>
