<template>
  <div class="Music">
      <div class="top">
          <img src="../assets/img/list_03.jpg" alt="" height="49px">
          <div class="top_left">
              <h3>喜欢音乐</h3>
              <p>
                  <img src="../assets/img/list_06.jpg" alt="">
                  <span>37首，已下载20首</span>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'Music',
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
  .Music{
	  position: relative;
	  top: -.44rem;
	  left: 0;
      width: 100%;
      height: 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
  }
  .top{
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* margin-bottom: .06rem; */
  }
  .top img{
      margin-left: .06rem;
  }
  .top_left{
      width: 3.55rem;
      height: 0.58rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content:center;
      line-height: .3rem;
      border-bottom: 0.005rem solid #666; 
  }
  .top_left h3{
      font-size: .15rem;
      font-weight: bold;
  }
  .top_left img{
      width: .12rem;
      vertical-align: middle;
  }
  .top_left span{
      color: #7d7e7f;
  }
</style>
