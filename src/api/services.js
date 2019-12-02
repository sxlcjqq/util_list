import request from '@/utils/request'

export function getResource(classroom_id, sku_id) {
  return request({
    url: `service_class/sku/${classroom_id}/${sku_id}/resource_tree/`,
    method: 'get'
  })
}

// 获取班级下的sku list
export function getClassRoomSkuList(classroom_id, intNum) {
  return request({
    url: `course/classroom/${classroom_id}/${intNum}/sku_list/`,
    method: 'get'
  })
}

// 新建服务等级
export function createService(data) {
  return request({
    url: `service_class/creation/`,
    method: 'POST',
    data
  })
}

// 给班级分配服务等级
export function addServiceClass(data) {
  return request({
    url: `course/classroom/add_service_class/`,
    method: 'POST',
    data
  })
}

