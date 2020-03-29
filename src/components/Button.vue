<template>
  <div class="Button">
    <input 
	class="button" 
	type="button" 
	:value="text" 
	:style="{background:bgColor}"
	@click="$emit('click')"
	/>
  </div>
</template>

<script>
  export default {
    name:'Button',
    props:{
		text:{
			type:String,
			default:'按钮'
		},
		bgColor:{
		  type:String,
		  default:'#37B4CA'
		}
	},
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
  .Button{}
  .button{
  	height: 40px;
  	width: 80%;
  	margin-top: 20px;
  	font-size: 16px;
  	font-family: "微软雅黑";
  	font-weight: bold;
  	line-height: 38px;
  	border-radius: 5px;
  	color: #ffffff;
  	background-color: #37B4CA;
  	
  }  
  .button:active {  
  	background-color:#37a3b9;
  }
</style>
