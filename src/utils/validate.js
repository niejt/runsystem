/**
 *
 * @param {*} str  检验面是否合法
 * @returns //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 */
export function validatePass (str) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  return reg.test(str)
}

/**
 * 检验用户名是否合法
 * 用户名：只能包括数字字母的组合，长度为4-15位
 */
export function validateUsername (str) {
  const reg = /^[A-Za-z0-9]{4,15}$/
  return reg.test(str)
}
