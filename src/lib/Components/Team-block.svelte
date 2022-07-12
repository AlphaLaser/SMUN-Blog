<script>
    export let name = "Rick Astley";
    export let position = "Singer";
    export let img = "https://dummyimage.com/80x80";
</script>
<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
  <div class="h-full flex items-center border-sky-900 border p-4 rounded-lg">
    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={img}>
    <div class="flex-grow">
      <h2 class="text-sky-900 title-font font-medium">{name}</h2>
      <p class="text-gray-500">{position}</p>
    </div>
  </div>
</div>