<script>

    export let content = "Dummy content";
    export let image_link = "https://mdbootstrap.com/img/new/standard/nature/182.jpg";
    export let title = "Dummy Title";
    export let blog_link = "#";

</script>

<div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg" src={image_link} alt="Card Image"/>
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
        <p class="text-gray-700 text-base mb-4">
          {content}
        </p>
        <a href={blog_link}>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
        </a>
      </div>
    </div>
  </div>