<template>
  <div id="app">
  <section id="main">
    <nav>
      <div class="toggle"></div>
      <ul class="menu">
        <li><a href="#main" >Home</a></li>	
        <li><a href="#profile">Profile</a></li>
		<li><a href="#skills">Skills</a></li>	
        <li><a href="#education">Education</a></li>	
        			
      </ul>
    
    </nav>
 </section>
    <div class="name">
	
	<p>Hello</p>
	
	<h1>I'm <font color="#8B4513">Jed</font> Bartolome</h1>

	<p class="details">Hello, Welcome to My Personal Webpage, today you will get to know me more!</p>
	
		
	</div>

   
    <profile></profile>
	<skills> </skills>
    <education> </education>
    
    
  </div>
  
</template>




<script>
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'




export default {
  name: 'app',
  components: { 
  Profile,
  Education,
  Skills
  },
  
  data () {
    return {
      msg: 'The Main Page'
    }
  }
}
</script>

<style>
body{
	margin:0px;
	padding:0px;
	background-color:#ffe2c1;	
}
ul{
	list-style:none;
}
a{
	text-decoration:none;
}
#main{
	padding:30px 50px;
	position:relative;
	width:100%;
	height: 100vh;
	box-sizing: border-box;
	background-size: 1100px;
	background-position: right;
	background-repeat: no-repeat;
	background-color: #FFF5EC;
  	background-image: url('assets/bg-image.png');
}
nav{
	display:flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	font-family: calibri;
	position: fixed;
	top: 0;
	left: 0;
	width:100%;
	height: 5%;
	box-sizing: border-box;
	padding: 10px 50px;
	background-color:#7b876d;
	box-shadow:2px 2px 12px rgba(0,0,0,0.05); 
	z-index: 1;
}
 
.menu{
	display: flex;
}
.menu li a{
	padding: 10px 15px;
	color:#ffffff;
	font-size: 15px;
	
}

.toggle{
	display: none;
}
.active a,
.menu li a:hover{
	background-color:#292929;
	color:#FFF!important;
	font-weight: bold;
	transition: all ease 0.4s;
}
.name{
	font-family: calibri;
	width: 500px;
	position: absolute;
	left: 20%;
	top: 50%;
	transform: translate(-20%,-50%);
}
.name p:nth-child(1),.name .details{
	color:#6c707c;
	font-size: 25px;
}
.name h1{
	font-family:Poppins;
	font-size: 40px;
	margin:0px;
	letter-spacing: 3px;
	color:#292929;
}



 

</style>
