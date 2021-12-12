<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/papercss@1.8.2/dist/paper.min.css">
</svelte:head>


<nav class="border fixed">
  <div class="nav-brand">
    <h4><a href="/">SVELTE</a></h4>
  </div>
  <div class="collapsible">
    <input id="collapsible2" type="checkbox" name="collapsible2">
    <label for="collapsible2">
      <div class="bar1">--</div>
      <div class="bar2">--</div>
      <div class="bar3"></div>
    </label>
    <div class="collapsible-body">
      <ul class="inline">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">COntact</a></li>
      </ul>
    </div>
  </div>
</nav>


 


<slot></slot>