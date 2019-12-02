import request from '@/utils/request'
// 获取教师列表
export function getTeacherList(params = {}) {
    return request({
      url: `teacher/`,
      method: 'GET',
      params
    })
  }
  //获取机构列表
  export function getOrganizationList(params = {}) {
    return request({
      url: `organization/`,
      method: 'GET',
      params
    })
  }
//获取资源基本信息
export function getInstanceBasic(id) {
    return request({
      url: `instance/get_instance_basic/${id}`,
      // url:'/instance/get_instance_basic/{instance_id}/',
      method: 'GET',
    })
  }
  //获取更多信息
  export function getInstanceMore(id) {
    return request({
      url: `instance/get_instance_more/${id}`,
      method: 'GET',
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
//保存基本信息
export function editInstanceBasic(id,data) {
    return request({
      url: `instance/edit_instance_basic/${id}/`,
      method: 'POST',
      data
    })
  }
//  获取分类
  export function getClassfyList(params) {
    return request({
      url: '/classify/get_classify_list/',
      method: 'GET',
      data: params
    })
  }
  //保存更多信息
  export function EditInstanceMore(id,params) {
    return request({
      url: `instance/edit_instance_more/${id}/`,
      method: 'POST',
      data: params
    })
  }