<script>
  import Navbar from "$lib/Components/Navbar.svelte";
  import Image from "$lib/Components/Image.svelte";
  </script>
  
  <style>
    :global(body){
         background-image: url('/bge.jpg');
     }
  </style>
  
  <Navbar/>
 

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">Photographs</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        
        <!--Add New PHOTOGRRAPH here-->
        <!--Format: <Image title="blah" artist="name" img="image_name.png/>"-->
        <Image/>
        <Image/>
        <Image/>
        <Image/>
        <Image/>
        <Image/>

      </div>
    </div>
  </section>


  