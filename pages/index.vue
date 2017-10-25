<template>
  <div>
    <h2>Star Wars: Films</h2>
    <Items></Items>
  </div>
</template>

<script>
  import Items from '~/components/items.vue'

  export default {
    components: {
      Items
    },
    async fetch({store}) {
      await store.dispatch('LOAD_ITEMS', 'films')
    }
  }
</script>
