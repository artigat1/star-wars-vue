import axios from '~/plugins/axios'

export const state = () => ({
  ids: [],
  items: []
})

export const mutations = {
  setIds(state, ids) {
    state.ids = ids
  },

  setItems(state, items) {
    state.items = items
  }
}
export const actions = {
  async LOAD_ITEMS({commit}, dataUrl) {
    const response = await axios.get(dataUrl)
    const results = response.data.results
    const tenItems = results.slice(0, 10)

    const itemsPromises = tenItems.map(item => axios.get(item.url))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data);

    const realItems = items.map(item => {
      if (item.name) {
        return item
      }
      if (item.title) {
        return {
          ...item,
          name: item.title
        }
      }
    })
    // commit('setIds', ids)
    commit('setItems', realItems)
  }
}
