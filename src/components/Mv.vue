<template>
  <div class="Mv">
	<img src="../assets/img/1_04.jpg" alt="">
	<p> 有意思！这些歌同名不同曲唱出别样...</p>
  </div>
</template>

<script>
  export default {
    name:'Mv',
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
  .Mv{
      width: 33%;
      height: 1.61rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
  }
  .Mv p{
      /* width: 33%; */
      height: .45rem;
      width: 1.1rem;
  }
  img{
      height: 1.06rem;
      width:1.06rem ;
  }
</style>
