<script>
    import Footer from "../lib/Components/Footer.svelte";
    import Navbar from "../lib/Components/Navbar.svelte";
    import TeamBlock from "../lib/Components/team-block.svelte";
</script>

<Navbar/>

<style>
   :global(body){
        background-image: url('/bge.jpg');
    }
</style>



<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
    </div>
    <div class="flex flex-wrap -m-2">

      
      <TeamBlock name="Gouri Mehra" position="Editor-in-Chief" img="Team/gouri.webp"/>
      <TeamBlock name="Chirag Seghal" position="Head of Journalism" img="Team/chirag.webp"/>
      <TeamBlock name="Mansi Mahajan" position="Deputy Editor" img="Team/mansi.webp"/>
      <TeamBlock name="Amritaansh Srivastava" position="Director of Photography" img="Team/amritaansh.webp"/>
      <TeamBlock name="Isha Kanudia" position="Director of Photography" img="Team/isha.webp"/>
      <TeamBlock name="Navya Ariqa Singh" position="Head of Cartoonists" img="Team/navya.webp"/>
      <TeamBlock name="Alaina Aneja" position="Additional Editor"/>
      <TeamBlock name="Anvadya Khatri" position="Additional Editor"/>
      <TeamBlock name="Dhruv Mishra" position="Additional Editor"/>
      <TeamBlock name="Adya Choudhury" position="Additional Director of Photography"/>
      <TeamBlock name="Reeva Dahiya" position="Additional Director of Photography"/>
      <TeamBlock name="Shreya Mishra" position="Additional Director of Cartoonists"/>
      <TeamBlock name="Hrishitaa Satish" position="Additional Director of Cartoonists"/>
      <TeamBlock name="Simar Tandon" position="Director of Technical Operations" img="Team/simar.webp"/>
      <TeamBlock name="Aniket Kumar" position="Director of Technical Operations" img="Team/aniket.webp"/>
      <TeamBlock name="Arnav Whig" position="Director of Technical Operations" img="Team/arnav.webp"/>
      <TeamBlock name="Adit Magotra" position="Additional Director of Technical Operations"/>
      <TeamBlock name="Gayatri" position="Additional Director of Technical Operations"/>
      

    </div>
  </div>
</section>
  <Footer/>

