import request from '@/utils/request'

// 获取资源列表
export function getResourceList(params = {}) {
  return request({
    url: `instance/list/`,
    method: 'GET',
    params
  })
}

// 新建资源
export function createInstance(data = {}) {
  return request({
    url: `instance/create_instance/`,
    method: 'POST',
    data
  })
}

// 编辑星标
export function editStar(instance_id, data) {
  return request({
    url: `instance/edit_star/${instance_id}/`,
    method: 'PATCH',
    data
  })
}

// 复制资源
export function copyResource(instance_id, data) {
  return request({
    url: `instance/copy/${instance_id}/`,
    method: 'POST',
    data
  })
}


  // 复制资源
export function delResource(instance_id, is_force) {
    return request({
      url: `instance/delete/${instance_id}/${is_force}/`,
      method: 'DELETE'
    })
  }

//资源和班级建立关系
export function addclassroomResource(data) {
  console.log(data)
  return request({
    url: `/course/classroom/add_resource/`,
    method: 'post',
    data
  })
}