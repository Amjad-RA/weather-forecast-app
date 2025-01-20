import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    selectedPlace: { lat: 0, lng: 0 }
  },
  getters: {
  },
  mutations: {
    setLoading(state, loading: boolean) {
      state.loading = loading
    },
    setSelectedPlace(state, place: { lat: number; lng: number }) {
      state.selectedPlace = place
    }

  },
  actions: {
  },
  modules: {
  }
})
