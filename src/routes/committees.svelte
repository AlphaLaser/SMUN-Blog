<script>
import Footer from '../lib/Components/Footer.svelte';

    import Navbar from '../lib/Components/Navbar.svelte';
</script>

<style>
 :global(body){
        background-image: url('/bge.jpg');
    }
</style>

<Navbar/>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 ">
            <center>
              <img alt="content" src="Logos/ECOFIN.png" width="470px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Economic and Financial Committee</h2>
 
          <a href="/ecofin">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>
        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/Roman Senate.png" width="470px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Roman Senate</h2>
 
          <a href="/rs">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-15 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/INTERPOL.png" width="320px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">International Criminal Police
            Organisation</h2>
 
          <a href="/interpol">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/SCF.png" width="300px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Standing Committee on
            Finance</h2>
 
          <a href="/scf">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-wrap -mx-4 -mb-10 text-center">
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/ESEU.png" width="350px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Emergency Session of the
            European Union</h2>
 
          <a href="/eseu">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>        </div>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/ICR.png" width="470px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Imperial Council of the Mighty
            Russian Empire</h2>
 
          <a href="/icr">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-15 mx-auto">
        <center>
        <div class="sm:w-1/2 mb-10 px-4">
          <div class="rounded-lg h-64 overflow-hidden">
            <center>
              <img alt="content" src="Logos/UNHRC.png" width="230px">
            </center>
          </div>
          <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">United Nations Human 
            Rights Council</h2>
 
          <a href="/hrc">
            <button class="flex mx-auto mt-6 text-white bg-sky-900 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
          </a>        </div>
    </center>
      </div>
  </section>

  <Footer/>