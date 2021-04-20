export const state = () => ({
  screenWidth: null
})

export const mutations = {
  setWindowWidth(state) {
    state.screenWidth = window.innerWidth
  }
}

export const actions = {}
