import request from '@/utils/request'

// 查询倾斜摄影列表
export function listOriginal_oblique(query) {
  return request({
    url: '/cim/original_oblique/list',
    method: 'get',
    params: query
  })
}

// 查询倾斜摄影详细
export function getOriginal_oblique(id) {
  return request({
    url: '/cim/original_oblique/' + id,
    method: 'get'
  })
}

// 新增倾斜摄影
export function addOriginal_oblique(data) {
  return request({
    url: '/cim/original_oblique',
    method: 'post',
    data: data
  })
}

// 修改倾斜摄影
export function updateOriginal_oblique(data) {
  return request({
    url: '/cim/original_oblique',
    method: 'put',
    data: data
  })
}

// 删除倾斜摄影
export function delOriginal_oblique(id) {
  return request({
    url: '/cim/original_oblique/' + id,
    method: 'delete'
  })
}
