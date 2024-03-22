// ----
// Menu
// ----

document.addEventListener('DOMContentLoaded', function() {
  var menuContent = `
    <a id="title" href="/"><h2>John Z. Ma</h2></a>
    <ul id="menu">
      <li style="margin-bottom: 5px;"><a href="/about.html">About</a></li>
      <li style="margin-bottom: 5px;">
        <span style="font-size:7pt;position:relative;top:-1px;" class="toggle-icon">▶ </span>
		Gallery
        <ul class="submenu">
          <li><a href="/gallery/crafting.html">Crafting</a></li>
          <li><a href="/gallery/ceramics.html">Ceramics</a></li>
          <li><a href="/gallery/candle.html">Deep Learning from Scratch</a></li>
        </ul>
      </li>
      <li style="margin-bottom: 5px;"><a href="/papernotes.html">Paper Notes</a></li>
    </ul>
  `;

  var menuContainer = document.getElementById('menu-container');
  var navElement = document.createElement('nav');
  navElement.innerHTML = menuContent;
  menuContainer.appendChild(navElement);

  var toggleIcon = document.querySelector('.toggle-icon');
  var toggleLink = document.querySelector('.toggle-link');
  var submenu = document.querySelector('.submenu');

  //var isGalleryPage = window.location.pathname.includes('gallery');
  var isGalleryPage = true;

  if (isGalleryPage) {
    submenu.classList.add('active');
    toggleIcon.textContent = '▼ ';
  }

  //toggleLink.addEventListener('click', function(event) {
  //  event.preventDefault();
  //  submenu.classList.toggle('active');
  //  toggleIcon.textContent = submenu.classList.contains('active') ? '▼ ' : '▶ ';
  //});
});