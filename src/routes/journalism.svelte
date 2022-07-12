<script>
import Navbar from "$lib/Components/Navbar.svelte";
import Blog from "$lib/Components/Blog.svelte";
</script>

<style>
  :global(body){
       background-image: url('/bge.jpg');
   }
</style>

<Navbar/>
<br><br>
<center>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Articles</h1>
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