<script>
    import Navbar from '../Components/Navbar.svelte';
    import Intro from '../Components/Intro.svelte';
    import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte';
    import * as animateScroll from "svelte-scrollto";
</script>

<style>

    :global(body){
        background-image: url('/bge.jpg');
    }

    .hero{
        height:100vh;
        overflow:hidden;
    }

    .icon {
    position:relative;
    bottom:80px;
    color: #4B5563;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

</style>

<section class="hero">

    <Navbar/>
    <Intro/>
    <center>
        <div on:click={() => animateScroll.scrollToBottom()} class="icon">
            <IoIosArrowDown/>
        </div>
    </center>
   
</section>