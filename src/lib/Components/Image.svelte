<script>
  export let title = "Dummy Title";
  export let arist = "Rick Astley";
  export let img = "cartoonist.jpeg";

</script>

<div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative h-80">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={img}>
      <div class="px-8 py-12 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-sm title-font font-medium text-sky-900 mb-1">{title}</h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{arist}</h1>
      </div>
    </div>
  </div>