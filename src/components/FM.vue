<template>
  <div class="FM">
	<SRFM/>
	<SRFM/>
	<SRFM/>
	<SRFM/>
  </div>
</template>

<script>
	import SRFM from './SRFM.vue'
  export default {
    name:'FM',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		SRFM
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .FM{
      height: 1.04rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 0.005rem solid #666;
  }
  
</style>
