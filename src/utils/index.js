const KEY = 'key'
/**
 * 保存用户信息
 */
const setUser = user => {
  window.sessionStorage.setItem(KEY, JSON.stringify(user))
}

/**
 * 获取用户信息
 */
const getUser = () => {
  const localUser = window.sessionStorage.getItem(KEY)
  return JSON.parse(localUser || '{}')
}

/**
 * 删除用户信息
 */
const delUser = () => {
  window.sessionStorage.removeItem(KEY)
}

export default { setUser, getUser, delUser }
