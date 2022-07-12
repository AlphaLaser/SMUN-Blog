<script>

export let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quos praesentium aperiam nihil pariatur odit minima iusto quis provident explicabo placeat obcaecati tenetur quae saepe, fugit officia nostrum laboriosam accusantium.";
export let title = "Sample Blog Title";
export let by_line = "Sample Blog By-line";

import Navbar from "./Navbar.svelte";
</script>

<Navbar/>
<br><br>
<h1 class="sm:text-3xl px-10 text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
<h3 class="sm:text-1xl px-10 text-1xl font-medium title-font mb-4 text-gray-700">{by_line}</h3>

<br><hr><br>
<p class = "px-10">
{text}
</p>

