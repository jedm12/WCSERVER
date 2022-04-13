<template>
 <div class="gallery">  
   <div class="header">
      <div class="bg">
          <div class="content">
              <h1>
                 {{title}} 
              </h1>
              <p>Welcome to the place where your cravings will be satisfied. Our cafe is operating for almost 20 years, 
                so the classic taste of every food item will never dissapoint you. Our ingredients are fresly picked, cooked, 
                and prepared just for you. Don't worry about the preservatives, because all of our ingredients are organic. What are you
                 waiting for? Grab your food and visit us in our shops.</p>
          </div>
      </div>
              
    </div>
   
    <div class="row">
      <h1>
         Collection of Pictures about our shop
      </h1>
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src="../assets/cup1.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />

        <img
          src="../assets/cup2.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="../assets/cup3.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src="../assets/cup4.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>

      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src="../assets/cup5.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />

        <img
          src="../assets/cup6.jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
    <div class="menu_items" id="menu">
      <br/>
      <br/>
      <center> <h2>STAFFS</h2> </center>
      <div class="itemBx">
        <div class="box">
          <img src="../assets/human1.jpg" alt="person">
          <div class="infobx">
            <h4>George Wilson</h4>
            <p> Hello, I am George, The executive head in the shop.</p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/human2.jpg" alt="person">
          <div class="infobx">
            <h4>Katy Cat</h4>
            <p> Hello I am Katy, responsible for the Social Media Management</p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/human3.jpg" alt="person">
          <div class="infobx">
            <h4>Jerscy Bill</h4>
            <p> Hello, I am Jerscy, you can call me jers, and I am responsible in the accounting of all the branches</p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/human4.jpg" alt="person">
          <div class="infobx">
            <h4>Riza Wales</h4>
            <p> Hello, I am Riza Wales the head Marketing Management in the Main Shop. I look over on the franchise of this shop </p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/human5.jpeg" alt="person">
          <div class="infobx">
            <h4>Rita Yumul</h4>
            <p> Hello I am Rita, I am in charge in the catering system of this shop if they want to avail our package. I am also in charge in appointing the scedules.</p>
          </div>
        </div>
        <div class="box">
          <img src="../assets/human6.jpg" alt="person">
          <div class="infobx">
            <h4>Lyka Bacani</h4>
            <p> Hello I am Lyka, and I am in charge in the VA and the design of our logos, menu, webpage and other creatives. I also shoot and animate that show case the true beauty of our shop</p>
          </div>
        </div>
      </div>
    </div>
 

 </div>

</template>

<script>
export default {
  name: 'gallery', 
  data () {
    return {
      title: 'Gallery'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  background-image:url(../assets/bg.jpg);
  background-position: center;
  background-size:cover ;
  background-repeat: no-repeat;
  height: 95vh;
}

.content{
  position: absolute;
  color:white;
  text-align: center;
  background-size: cover;
  border: 4px solid #d7b17e;
  padding: 10px 25 px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content h1{
    font-size: 50px;
    bottom: 0;
}
.content p{
    bottom: 0;
    padding: 0px 100px;
    font-size: 20px;
    
}
    
.bg{
    background: rgba(0,0,0,0.5);
    height: 95vh;
}

.row{
  margin-top: 10%;
}

.row h1{
  padding-bottom: 25vh;
  text-align: center;
}
.menu_items{
    background-image: url(../assets/white.jpg);
    background-position: center;
    background-size:cover ;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    margin-top: 5%;
  }

  .menu_items h2{
    color: black;
  }
  
  .menu_items .itemBx .box{
      background: #472613;
      justify-content: center;
      align-items: center;
          
  }
  
  .menu_items .itemBx .box .infobx h4{
      font-size: 1.5em;
      text-shadow: 2px 2px black;
      color: #ffc16f;
  }
  .menu_items .itemBx .box .infobx p{
      font-size: 0.8em;
      color: white;
  }
  .menu_items .itemBx .box .infobx h5{
      font-size: 1.3em;
      color: #ffad42;
  }
  .menu_items .itemBx{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
  }
  .menu_items .itemBx .box{
      margin-left: 50px;
    margin-top: 50px; 
    border-radius: 10px;
      height: 250px;
    width: 500px;
      display: flex;
      box-shadow: 10px 10px 8px black;
  }
  
  .menu_items .itemBx .box img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 10px;
  }


</style>
