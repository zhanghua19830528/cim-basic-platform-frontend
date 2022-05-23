import request from '@/utils/request'

// 查询倾斜摄影列表
export function listResult_oblique(query) {
  return request({
    url: '/cim/result_oblique/list',
    method: 'get',
    params: query
  })
}

// 查询倾斜摄影详细
export function getResult_oblique(id) {
  return request({
    url: '/cim/result_oblique/' + id,
    method: 'get'
  })
}

// 新增倾斜摄影
export function addResult_oblique(data) {
  return request({
    url: '/cim/result_oblique',
    method: 'post',
    data: data
  })
}

// 修改倾斜摄影
export function updateResult_oblique(data) {
  return request({
    url: '/cim/result_oblique',
    method: 'put',
    data: data
  })
}

// 删除倾斜摄影
export function delResult_oblique(id) {
  return request({
    url: '/cim/result_oblique/' + id,
    method: 'delete'
  })
}
