<script>

  export let date = "12 Jun 2019";
  export let name = "Rick Astley";
  export let title = "Meditation bushwick direct trade taxidermy shaman";
  export let by_line = "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha pork belly polaroid hoodie portland craft beer.";
  export let link = "#";
  
</script>

<div class="py-8 flex flex-wrap md:flex-nowrap">
  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
    <span class="font-semibold title-font text-gray-700">{name}</span>
    <span class="mt-1 text-gray-500 text-sm">{date}</span>
  </div>
  <div class="md:flex-grow">
    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
    <p class="leading-relaxed">{by_line}</p>
    <a class="text-sky-900 inline-flex items-center mt-4" href = {link}>Read Blog
      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>