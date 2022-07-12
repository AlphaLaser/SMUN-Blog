<script>
import Hero from '../lib/Sections/Hero.svelte';
import Content from '../lib/Sections/Content.svelte';
</script>

<style>

:global(body){
        background-image: url('/bge.jpg');
    }

/* width */
:root::-webkit-scrollbar {
  width: 10px;
}

/* Track */
:root::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
:root::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 100px;
}

/* Handle on hover */
:root::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>

<!--Sections-->
<Hero/>
<Content/>
