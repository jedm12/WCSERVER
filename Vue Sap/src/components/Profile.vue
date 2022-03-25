<template>
  <div id="profile">
    <section class="body" id="body">
      <div class="center">
        <div class="avatar">
          <img src="src\assets\profile.png" alt="profile">
          <br>

        </div>
        <div class="content">
          <h1>Jed Miguel Bartolome</h1>
          <h2>Front-end Web Developer</h2>
          <p>Hello Everyone! My name is Jed Miguel O. Bartolome and I am professional Front End Devloper. I am looking forward to work in a 
            career oriented and challenging environment that promotes personal growth and professional development where 
            I can enhance my skills as a developer and have the opportunity to expand my knowledge and experiences. Here is my contact and looking forward
            to be part with your team!</p>
          <h3>Phone No: 09173822990</h3>
          <div class="social">
            <a href="https://www.facebook.com/jedmiguel.bartolome"></a>
            <a href=""></a>

          </div>

        </div>
      </div>
    </section>
      
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      msg2: 'My Profile'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.body{
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
  background-color: #7b876d;
  height: 60vh;
  text-align: center;
  border-radius: 50px;
}

.content{
  padding: 30px;
}

h1{
  color: wheat;
}
.content h2,p{
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

</style>