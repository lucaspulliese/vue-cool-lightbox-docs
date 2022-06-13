<template>
  <div id="app">
    <header class="header">

      <div class="container">
        <div class="header__wrapper">
          <h1>Vue CoolLightBox <img class="header__icon" src="/lightbox.svg" alt="lightbox icon" /></h1>

          <div class="header__btns">
            <a href="https://github.com/lucaspulliese/vue-cool-lightbox" target="_blank" class="button-github">View on Github</a>
            <a href="http://paypal.me/lucaspdonations" target="_blank" class="button-donate">Donate 💗</a>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>