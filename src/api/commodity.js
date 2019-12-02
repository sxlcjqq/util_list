import request from '@/utils/request'
//获取商品列表
export function getList(params) {
  return request({
    url: '/product/list/',
    method: 'get',
    params
  })
}
//商品列表改变状态
export function changeSatatus(params,id) {
    return request({
      url: `/product/${id}/selling_status_change/`,
      method: 'patch',
      data:params
    })
  }
  //删除商品
  export function deleteProduct(params,id) {
    return request({
      url: `/product/${id}/delete/`,
      method: 'delete',
      params
    })
  }
  //创建售卖方式
  export function postsellType(params,id) {
    return request({
      url:`/instance/create_instance_type/`,//${id}
      method: 'post',
      data:params
    })
  }
  //编辑商品介绍信息
  export function editIntro(params,id) {
    return request({
      url:`/product/${id}/intro_edit/`,
      method: 'put',
      data:params
    })
  }
  //编辑商品基础信息
  export function editbasicIntro(params,id) {
    return request({
      url:`/product/${id}/basic_edit/`,
      method: 'put',
      data:params
    })
  }
  //获取发布平台
  export function getPlatformList(params,id) {
    return request({
      url:`/product/selling_platform/list/`,
      method: 'get',
    })
  }
//获取分类
export function getClassfyList(params) {
  return request({
    url: '/classify/get_classify_list/',
    method: 'get',
    data: params
  })
}
//创建商品
export function createProduct(params, id) {
  return request({
    url: '/product/creation/',
    method: 'post',
    data: params
  })
}
//获取商品基础信息
export function getBscicInfos(params, id) {
  return request({
    url: `/product/${id}/basic_info/`, //${id}
    method: 'get',
    params
  })
}
//获取商品信息
export function getintroInfos(params, id) {
  return request({
    url: `/product/${id}/intro_info/`, //${id}
    method: 'get',
    params
  })
}
//获取售卖方式
export function getsellType(params, id) {
  return request({
    url: `/instance/get_instance_type_list/`, //${id}
    method: 'get',
    params
  })
}
//获取商品发布信息
export function getPublishInfo(params, id) {
  return request({
    url: `/product/${id}/publish_info/`,
    method: 'get',
    params
  })
}
//发布商品
export function postpublish(id) {
  return request({
    url: `/product/${id}/publish/`,
    method: 'post',
  })
}
//保存商品发布修改信息
export function postPublishInfo(params, id) {
  return request({
    url: `/product/${id}/publish_edit/`,
    method: 'post',
    data: params
  })
}
//获取售卖类型
export function getInstanceList(params, id) {
  return request({
    url: `/instance/get_instance_type_list/`,
    method: 'get',
    params
  })
}

export function getStarting() {
  return request({
    url: `/product/selling_platform/list/`,
    method: 'get',
  })
}

//获取商品下的sku 列表
export function getSkuList(id) {
  return request({
    url: `/product/${id}/get_sku_list/`,
    method: 'get',
  })
}
//获取机构
export function getOrganizationList(params = {}) {
  return request({
    url: `organization/get_organization_list/`,
    method: 'GET',
    params
  })
}
