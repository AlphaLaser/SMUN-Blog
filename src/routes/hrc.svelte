<script>
  import Navbar from "$lib/Components/Navbar.svelte";
  import Blog from "$lib/Components/Blog.svelte";
  import Image from "$lib/Components/Image.svelte";
</script>

<style>
  :global(body){
       background-image: url('/bge.jpg');
   }
</style>

<Navbar/>



<br><br>
<center>
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">UNITED NATIONS HUMAN RIGHTS COMMISION</h1>
</center>


<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-20 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      

      <!--Add new blogs here-->
      <!--Format : <Blog title="Some Random Title" author="Rick Astley" by_line="Mini line under the title" date="21 Jun'22"/>-->
      <Blog/>
      <Blog/>
      <Blog/>



    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline">Photographs</h1>
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

<section class="text-gray-600 body-font">

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 underline">Cartoons</h1>
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
</section>



