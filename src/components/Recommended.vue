<template>
  <div class="Recommended">
	<h3><span>|</span> &nbsp;推荐歌单 ></h3>
  </div>
</template>

<script>
  export default {
    name:'Recommended',
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

<style scoped>
  .Recommended{
      height: .5rem;
      width: 100%;
  }
  .Recommended h3 span{
      font-weight: bold;
      color: #d33a31;
      font-size: .15rem;
  }
  .Recommended h3{
      font-weight: bold;
      font-size: .15rem;
      line-height: .5rem;
  }
</style>
