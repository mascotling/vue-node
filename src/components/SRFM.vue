<template>
  <div class="SRFM">
      <div class="circle">
          <img src="../assets/img/icon-1.png" alt="">
      </div>
      私人FM
  </div>
</template>

<script>
  export default {
    name:'SRFM',
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
  .circle{
      width: .48rem;
      height: .48rem;
      border: 1px solid #d33a31;
      border-radius: 50%;
      position: relative;
      margin-bottom: .07rem;
  }
  .circle img{
      width:.25rem;
      height: .25rem;
      /* text-align: center;
      line-height: .48rem; */
      /* vertical-align: middle; */
      position: absolute;
      left: .1rem;
      top: .1rem;
  }
  .SRFM{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: center;
  }
</style>
