import request from '@/utils/request'

// 获取课程列表
export function getCourses(params) {
  return request({
    url: `university/`,
    method: 'GET',
    params
  })
}

// 获取分类列表
export function getCoursesType(params) {
  return request({
    url: `classify/`,
    method: 'GET',
    params
  })
}