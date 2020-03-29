<template>
  <div class="Login">
	  <UcNav/>
	  <div class="tx">
	  	<img src="../assets/img/touxiang.jpg" />
	  </div>
		<WLinput type="text" v-model="username" placeholder="输入用户名"/>
  	<!--End用户名输入框-->
  		<WLinput type="password" v-model="password" placeholder="输入密码"/>
  	<!--End密码输入框-->
  	<Button text="登 录"  @click="login"/>
	<div class="reg">
		<router-link to="/Reg" tag="a">立即注册</router-link>
	</div>
  </div>
</template>

<script>
	import Button from '../components/Button.vue'
	import UcNav from '../components/uc-nav'
	import WLinput from '../components/wl-input.vue'
  export default {
    name:'Login',
    props:{},
    data(){
      return {
        username:'',
        password:''
      }
    },
    components:{
		Button,UcNav,WLinput
	},
    mounted(){},
    updated(){},
    methods:{
		login(){
		  axios({
		    url:'/api/login',
		    method:'post',
		    data:{
		      username:this.username,
		      password:this.password
		    }
		  }).then(
		    res=>{
		      //种user信息
		      window.localStorage.setItem('user',JSON.stringify(res.data))
			  if(this.$route.query.p){
			    this.$router.replace(this.$route.query.p)
			  }else{
			   this.$router.replace('/ZhangHao')
			  }
		        
		    }
		  )
		}
	}
  }
</script>

<style>
  .Login{
  	width: 100%;
  	margin-top: 60%;
  	text-align: center;
  }
  .tx{
	  width: 100%;
	  height: 40px;
  }
  .tx img{
	  border: 2px solid #666;
	  width: 1rem;
	  height: 1rem;
	  border-radius: 50%;
	  position: absolute;
	  left: 33%;
	  top: 100px;
  }
  .longin-boder{
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
  .image{
  	width: 10%;
  	margin-top: 5px;
  	float: left;
  	text-align: right;
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
  .reg{
	  position: absolute;
	  left: 40%;
	  bottom: 30px;
  }
  .reg a{
	  text-align:center;
	  text-decoration: none;
	  color: #000;
  }
  </style>
</style>
