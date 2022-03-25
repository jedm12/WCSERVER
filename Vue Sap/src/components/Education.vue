<template>
  <div id="education">
    
    <div id="info-cards">
        
            <div class="card">
                <p> Education</p>
                <ul>
                    <li><h1 class="tags">Hoy Angel University, Philippines<br><span>Bachelor of Science in Information Technology with area specialization of Web Development | <span>January, 2022</span></span></h1>
                    </li>
                    <hr width="100%">
                    <li><h1 class="tags"> Chevalier School, Philippines <br><span> Senior High School | <span>2018 - 2020</span></span></h1>
                    </li>
                    <hr width="100%">
                    <li><h1 class="tags">Chevalier School, Philippines<br><span>Junior High School | <span>2014-2018</span></span></h1></li>
                    <hr width="100%">
                    <li><h1 class="tags">Chevalier School, Philippines<br><span>Elementary School | <span>2007-2014</span></span></h1></li>
                </ul>
            </div>
      </div>

   
  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      msg3: 'Education'
    }
  }
}
</script>

<style>

.card{
    border-radius: 20px;
    margin: auto;
    margin-top: 15%;
    width: 50%;
    padding: 10px;
    align-content: center;
    box-shadow: 0 10px 10px 0 rgba(0,0,0,.1);
    overflow-x: hidden;
    margin-bottom: 15%;
    padding: 15px 30px 30px 30px;
    background-color: #fff;
}
.card p{
    margin-left: 0%;
    color: #684700;
    font-weight: bolder;
    font-size: 18px;
    line-height: 2;
}
.card h1{
    margin-left: 2%;
    color: #000000;
    font-weight: bolder;
    font-size: 18px;
    line-height: 2;
}
#obj{
    color: #000;
    text-align: justify;
    font-size: 15px;
    font-weight: 500;
}

.tags{
    font-size: 17px;
    font-weight: bolder;
}
.tags span{
    font-size: 14px;
    font-weight: normal;
    color: #0e141e;
}
.tags span span{
    color: #577377;
}




</style>