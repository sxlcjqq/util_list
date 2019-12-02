import request from '@/utils/request'

// 获取课程列表
export function getCourses(params={}) {
  return request({
    url: `course/list/`,
    method: 'GET',
    params
  })
}

// 获取某个课程的班级列表
export function getClassRomes(courseId, params={}) {
  return request({
    url: `course/${courseId}/classroom/list/`,
    method: 'GET',
    params
  })
}

// 新建课程
export function createCourse(data={}) {
  return request({
    url: `course/creation/`,
    method: 'POST',
    data
  })
}

// 新建班级
export function createClassRoom(data={}) {
  return request({
    url: `course/classroom/creation/`,
    method: 'POST',
    data
  })
}

// 编辑班级
export function editClassRoom(cassroom_id, params={}) {
  return request({
    url: `course/classroom/${cassroom_id}/edit/`,
    method: 'PUT',
    params
  })
}
