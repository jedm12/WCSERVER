<template>
  <div id="skills">
      <section class="mission" id="mission">
		<div class="infoBx">
			<h2>Programming Skills</h2>
			<p>
       This is my experience in learning different programming languages that will surely benefit in my Web Developer Profession.</p>
        <p id="Pl"><br><br><strong>Java <span class="jv"></span> <br>Python <span class="py"></span><br> HTML<span class="html"></span><br> CSS<span class="css"></span><br> Java Script <span class="js"></span></strong></p>
         
		</div>
    	<div class="infoBx">
			<h2>Editing Skills</h2>
			<p>These are the some of my skills that can also help me in my Web Developer Profession</p>
        <p id="Es">  <br> <br><br><strong>Video Editing <span class="ve"></span> <br>Adobe Xd <span class="ad"></span><br> Photo Editing<span class="pe"></span><br> Adobe Lightroom <span class="al"></span><br> Adobe Illustrator <span class="ai"></span></strong></p>
		  </div>
	  </section>
    

  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      msg3: 'Skills'
    }
  }
}
</script>

<style>
.mission{
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mission .infoBx{
 
  background-color: rgb(255, 255, 255);
	max-width: 25%;
}
.mission .infoBx h2{
    color: #505846c2;
	font-size: 2.5em;
}
.mission .infoBx p{
	font-size: 1.5em;
}
#Es .ve, .ad, .pe, .al, .ai{
    position: relative;
    height: 10px;
    border-radius: 10px;
    background-color: #C67F43;
    display: block;
}

#Es .ve{
    width: 85%;
}
#Es .ad{
    width: 65%;
}
#Es .pe{
    width: 80%;
}
#Es .al{
    width: 60%;
}
#Es .ai{
    width: 70%;
}
#Pl .jv, .py, .html, .css, .js{
    border-radius: 10px;
    position: relative;
    height: 10px;
    background-color: #C67F43;
    display: block;
}
#Pl .jv{
    width: 85%;
}
#Pl .py{
    width: 90%;
}
#Pl .html{
    width: 80%;
}
#Pl .css{
    width: 70%;
}
#Pl .js{
    width: 40%;
}



</style>