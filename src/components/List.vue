<template>
  <div class="List">
    <Mv/>
	<Mv/>
	<Mv/>
  </div>
</template>

<script>
	import Mv from './Mv.vue'
	
  export default {
    name:'List',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		Mv
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .List{
      width: 100%;
      height: 1.61rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      /* flex-wrap: wrap; */
  
  }
</style>
