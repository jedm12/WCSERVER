<template>
 <div class="about">
   <div class="container py-5">
        <div class="row py-5" id="container">
            <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h4 class="text-secondary mb-3">{{title}}</h4>
                <h1>Eclair Coffee Shop</h1>
                <h5 class="text-muted mb-3">The Coffee that will never let you down.</h5>
                <p class="lead">Eclair Coffee Shop opened in 1955 and serves every traditional coffee. We began with a tiny company in Angeles City, the gourmet capital of the Philippines. We work hard to devote our passion for coffee and to serve people wholeheartedly. Since then, the Cafe has been in business for about 67 years and has several branches around the Philippines. 
                    We've gotten this far thanks to the affection and support of our devoted consumers.</p>
                <ul class="list-inline">
                    <li><img id="check" class="check" src="../assets/check.png" alt="bean1" align="left"><h3>   67 years tradition</h3></li>
                    <li><img id="check" class="check" src="../assets/check.png" alt="bean1" align="left"><h3>The Best Coffee</h3></li>
                    <li><img id="check" class="check" src="../assets/check.png" alt="bean1" align="left"><h3>Nation Wide Bran</h3></li>
                </ul>
               <a> <router-link to="/contact">  Contact Us    </router-link></a>
            </div>
            <div class="col-lg-5">
                <div class="row px-3">
                    <div class="col-12 p-0">
                        <img class="img-fluid w-100" src="../assets/bean3.jpg" alt="bean1">
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src="../assets/bean2.jpg" alt="bean2">
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src="../assets/bean4.jpg" alt="bean3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="body" id="body">
            <div class="center">
                <div class="avatar">
                <img src="../assets/profile.png" alt="profile">
                <br>

                </div>
                <div class="content">
                <h1>Jed Miguel Bartolome</h1>
                <h2>The Owner of The Eclair Coffee Shop</h2>
                <p>Hello Everyone! My name is Jed Miguel O. Bartolome and I am the current CEO of the Eclair Coffee Shop since 1955. My Ancestors loves coffee, and that is why
                    as generations, we continue this tradition to share what we love in the past 67 years. With this, I would recommend and invite you to try our organic local brewed coffee. 
                </p>
                </div>
            </div>
    </div>

    
    <div class="mission" id="mission">
		<div class="infoBx">
			<h2>Mission</h2>
			<p>
        and pasta while giving exceptional service at a price that is fair to both the producers and our consumers.</p>
		</div>
        <div class="infoBx">
			<h2>Vision</h2>
			<p>Our mission is to be a world-class and even better Café, delivering wonderful coffee, 
                pastries, and pasta to consumers all over the world.</p>
		</div>

	</div>
 </div>
</template>

<script>
export default {
  name: 'about', 
  data () {
    return {
      title: 'About Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about{
    background-color: #ffebd7;
}
a{
    margin-left: 0px;
    font-size: 1em;
    color: #fff;
    background: #b95b02;
    display: inline-block;
    padding: 5px 20px;
    margin-top: 0px;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.5s;
    border-radius: 5px;
    box-shadow: 4px 2px 10px #b95b02;
}
 a:hover{
    transform: scale(0.9);
}

.check{
    height: 30px;
    width: 30px;
}

h3{
    padding-left: 50px;
}
.body{
  background-image: url(../assets/blackcoffee.jpg);
  margin-top: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center .avatar img{
  width: 170px;
  height: 170px;
  margin-top: 5%;
  object-fit: cover;
  object-position: 0 -8px;
  border: black;
  border-radius: 100%;
}


.center{
  margin-top: 10%;
  margin-bottom: 10%;
  width: 55%;
  background-color: #000000;
  height: 60vh;
  text-align: center;
  border-radius: 50px;
}

.content{
  padding: 30px;
}

.content h2, .content p{
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
}
.content h2{
  font-weight: 400;
}
.content h3{
  margin-top: 20px;
}

div.social i{
  padding: 0 10px;
  font-size: 30px;
  color: black;
  transition: 0.4s;
}
div.social i:hover{
  color: aliceblue;
}

.mission{
    background-color: white ;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.mission .infoBx{
	max-width: 400px;
}
.mission .infoBx h2{
	font-size: 2.5em;
}
.mission .infoBx p{
	font-size: 1.5em;
}

.mission img{
	width: 500px;
	object-fit: cover;
	box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}
</style>
