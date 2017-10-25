<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Films</nuxt-link>
        <nuxt-link to="/people">People</nuxt-link>
        <nuxt-link to="/planets">Planets</nuxt-link>
      </nav>
    </header>
    <nuxt></nuxt>
  </div>
</template>

<style>
  nav a {
    margin-right: .75em;
    text-decoration: none;
    font-size: 1em;
  }
</style>
