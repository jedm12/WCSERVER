<template>
 <div class="home">
      <div class="header">  
        <div class="bg">
            <div class="content">
              <div class="box">
                <h1> {{title}} </h1>
                <p> The Eclair Coffee Shop is one of the best coffee in town. It is known for its locally yet high-quality of coffee beans that will surely linger into your taste Buds.</p>
                    <router-link to="/about"> 
                      <button type="button" class="button"> <p> Find Out Us More Here! </p>  </button>
                    </router-link>
              </div>
            </div>
        </div>      
      </div>
 </div>
</template>

<script>
export default {
  name: 'home', 
  data () {
    return {
      title: 'THE BEST COFFEE IN TOWN'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}


.header{
    background-image:url(../assets/blackcoffee.jpg);
    background-position: center;
    background-size:cover ;
    background-repeat: no-repeat;
    min-height: 100vh;
    align-items: center;

  }

  .box p{
      text-align: center;
      font-size: 17px;
  }
      
  .bg{
      background: rgba(0,0,0,0.5);
      min-height: 100vh;
  
  }

  .content{
    padding-top: 15%;
    text-align: center;
    border-radius: 6px;
  }
 /* 
  .box{
    position: absolute;
    margin-left: 40vh;
    border: 4px solid #9D581f;
    padding: 30px 25px;
    border-radius: 6px;
    translate: (-50%, -50%);
  }
  */ 
 .content h1{
    padding-bottom: 2cm;
    color: rgb(255, 255, 255);
  }
   .content p{
    color: rgb(255, 255, 255);
  }

.button{
  width: 300px;
  padding: 15px 5px;
  text-align: center;
  margin: 20px 10px;
  border-radius: 25px;
  font-weight: bold;
  border: 2px solid #9D581f;
  background: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
}

.button:hover{
  transform:scale(0.9)
}





</style>
