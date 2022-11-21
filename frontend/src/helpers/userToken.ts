const nameToken = 'userToken'
function get() {
  return localStorage.getItem(nameToken)
}
function set(opt = '') {
  return localStorage.setItem(nameToken, opt)
}
function remove() {
  return localStorage.removeItem(nameToken)
}
export const $userToken = { get, set, remove }
