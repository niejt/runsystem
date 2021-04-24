import { Random } from 'mockjs'

// 引入mockjs
var Mock = require('mockjs')
// 使用 Mock
export default Mock.mock('/api/data/', (req, res) => {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素

  const list = []
  for (let i = 0; i < 5; i++) {
    const listObject = {
      id: Random.integer(100, 999),
      authName: Random.csentence(),
      path: null,
      children: [{
        id: Random.integer(100, 999),
        authName: Random.csentence(),
        path: null,
        children: []
      }]
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
