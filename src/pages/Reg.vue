<template>
  <div class="Reg">
	  <UcNav/>
	  <input type="file" id="file" style="display: none;">
	  <div class="tx" @click="upload">
	  	<img src="../assets/img/touxiang.jpg" />
	  </div>
		<WLinput type="text" v-model="username" placeholder="输入用户名"/>
	<!--End用户名输入框-->
		<WLinput type="password" v-model="password" placeholder="输入密码"/>
	<!--End密码输入框-->
  	<Button text="注 册"  @click="reg"/>
	<div class="reg">
		<router-link to="/Login" tag="a">立即登陆</router-link>
	</div>
  </div>
</template>

<script>
	import Button from '../components/Button.vue'
	import UcNav from '../components/uc-nav'
	import WLinput from '../components/wl-input.vue'
	import axios from 'axios'
  export default {
    name:'Reg',
    props:{},
    data(){
      return {
        username:'',
        password:'',
        errorMess:'',
      }
    },
    components:{
		Button,UcNav,WLinput
	},
    mounted(){},
    updated(){},
    methods:{
	  upload(){
	    let file = document.getElementById('file');
	    file.click()
	  },
	  reg(){
	    let fromData = new FormData();// js类型
	    fromData.append('username',this.username)
	    fromData.append('password',this.password)
	    let file = document.getElementById('file');
	    fromData.append('icon',file.files[0])
	    
	    axios({
	      url:'/api/reg',
	      method:'post',
	      data:fromData
	    }).then(
	      res => {
	        if(res.data.err===0){
	          this.$router.replace('/login')
	        }else{
	          this.errorMess=res.data.msg
	        }
	      }
	    )
	  }
    }
  }
</script>

<style>
  .Reg{
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

