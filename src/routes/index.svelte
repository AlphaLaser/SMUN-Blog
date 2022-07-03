<script>
// import Typewriter from 'svelte-typewriter';
import { concurrent } from 'svelte-typewriter'
import Card from '../lib/Card.svelte';

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&family=Poppins&display=swap');

:global(body) {  
  font-family: 'Poppins', sans-serif;
}

.hero{
    background-image: url('/graph.jpg');
    height: 100vh;
}

h1{
    font-family: 'Cabin Sketch', cursive;
    font-size: 100px;
    color: orange;
}

h2{
    font-family: 'Cabin Sketch', cursive;
    font-size: 40px;
    color: orange;
}


.blogs{
    background-color: #DADADA;
    height:100vh;
    padding-top: 5%;

}

.heading{
    height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

/* .typewriter-text{
    font-family: 'Cabin Sketch', cursive;
    color : indianred;
} */

</style>



<section class="hero">

        <div class="heading">
            <h1>
                Sanskriti MUN
            </h1>
            <h2 use:concurrent={{ interval: 60 }}>
                Conference Log
            </h2>
        </div>

</section>

<!--Blog Cards Page-->
<section class="blogs">
    
    <div class = "grid lg:grid-cols-3">
        <Card blog_link = "/blog_temp"/>
        <Card/>  
        <Card/>  
    </div>    
    
</section>
