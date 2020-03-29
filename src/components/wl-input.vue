<template>
  <div class="wl-input">
    <input class="input"  
	:placeholder="placeholder"
	:type="type" :value="value" 
	@input="$emit('input',$event.target.value)"
	/>
  </div>
</template>

<script>
  export default {
    name:'wl-input',
    props:{
		value:{
		  type:String,
		  default:''
		},
		type:{
		  type:String,
		  default:'text'
		},
		placeholder:{
			type:String,
			default:'输入用户名'
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

<style scoped>
  .wl-input{
  	width: 80%;
  	height: 40px;
  	margin-top: 10px;
  	margin-left: 10%;
  	line-height: 40px;
  	text-align: center;
  	border: 1px solid #dddddd;
  	border-radius: 5px;  
  	background-color: #efefef;
  }
  .input{
  	width: 80%;
  	float: left;
  	margin-left: 5%;
  	height: 37px;
  	line-height: 37px;
  	border:0px;
  	color: #333333;
  	font-size: 16px;
  	background-color: #efefef;
  	
  }
</style>
