export const getters = {
  isAuthorized(state) {
    return state.user != null
  }
}
